<?php

namespace App\Services;

use App\Models\Paper;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class PaperService
{

    public function stats(): array
    {
        return Cache::remember('paper_stats', now()->addMinutes(10), function () {

            // Top creator query
            $topCreator = DB::table('papers')
                ->select('created_by', DB::raw('COUNT(*) as total'))
                ->groupBy('created_by')
                ->orderByDesc('total')
                ->first();

            $topCreatorData = null;
            if ($topCreator) {
                $user = User::find($topCreator->created_by);
                if ($user) {
                    $topCreatorData = [
                        'id' => $user->id,
                        'name' => $user->name,
                        'total_entries' => $topCreator->total,
                    ];
                }
            }

            return [
                'total'       => Paper::query()->count(),
                'today'       => Paper::query()->whereDate('created_at', today())->count(),
                'this_week'   => Paper::query()->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count(),
                'top_creator' => $topCreatorData,
            ];
        });
    }
}
