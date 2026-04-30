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
        return Cache::remember('paper_stats', now()->addMinutes(5), function () {

            $counts = DB::table('papers')
                ->selectRaw('
                COUNT(*) as total,
                SUM(CASE WHEN DATE(created_at) = CURDATE() THEN 1 ELSE 0 END) as today,
                SUM(CASE WHEN created_at BETWEEN ? AND ? THEN 1 ELSE 0 END) as this_week
            ', [
                now()->startOfWeek(),
                now()->endOfWeek()
            ])
                ->first() ?? (object)[
                'total' => 0,
                'today' => 0,
                'this_week' => 0,
            ];

            $topCreator = Paper::query()
                ->join('users', 'papers.created_by', '=', 'users.id')
                ->select(
                'users.id',
                'users.name',
                DB::raw('COUNT(papers.id) as total_entries')
            )
                ->groupBy('users.id', 'users.name')
                ->orderByDesc('total_entries')
                ->first();

            return [
                'total' => (int)$counts->total,
                'today' => (int)$counts->today,
                'this_week' => (int)$counts->this_week,
                'top_creator' => $topCreator ? [
                    'id' => $topCreator['id'],
                    'name' => $topCreator['name'],
                    'total_entries' => (int)$topCreator['total_entries'],
                ] : null,
            ];
        });
    }
}
