<?php

namespace App\Services;

use App\Models\Mcq;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class McqService
{

    public function stats(): array
    {
        return Cache::remember('mcqs_stats', now()->addMinutes(10), function () {

            // Top creator query
            $topCreator = DB::table('mcqs')
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
                'total'       => Mcq::query()->count(),
                'today'       => Mcq::query()->whereDate('created_at', today())->count(),
                'this_week'   => Mcq::query()->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count(),
                'top_creator' => $topCreatorData,
            ];
        });
    }
}
