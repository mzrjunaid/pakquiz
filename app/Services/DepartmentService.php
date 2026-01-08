<?php

namespace App\Services;

use App\Models\Department;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class DepartmentService
{

    public function stats(): array
    {
        return Cache::remember('department_stats', now()->addMinutes(10), function () {

            // Top creator query
            $topCreator = DB::table('departments')
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
                'total'       => Department::query()->count(),
                'today'       => Department::query()->whereDate('created_at', today())->count(),
                'this_week'   => Department::query()->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count(),
                'top_creator' => $topCreatorData,
            ];
        });
    }
}
