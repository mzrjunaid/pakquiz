<?php

namespace App\Services;

use App\Models\TestingService;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class TestingServiceService
{

    public function stats(): array
    {
        return Cache::remember('testing_service_stats', now()->addMinutes(10), function () {

            // Top creator query
            $topCreator = DB::table('testing_services')
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
                        'total_services' => $topCreator->total,
                    ];
                }
            }

            return [
                'total'       => TestingService::query()->count(),
                'today'       => TestingService::query()->whereDate('created_at', today())->count(),
                'this_week'   => TestingService::query()->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count(),
                'top_creator' => $topCreatorData,
            ];
        });
    }
}
