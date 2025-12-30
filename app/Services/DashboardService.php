<?php

namespace App\Services;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class DashboardService
{
    public function stats(): array
    {
        return Cache::remember('dashboard.stats', now()->addMinutes(10), function () {
            return [
                'overview' => $this->overviewStats(),
                'activity' => $this->activityStats(),
                'quality'  => $this->qualityStats(),
            ];
        });
    }

    /**
     * ONE QUERY
     */
    protected function overviewStats(): array
    {
        $row = DB::selectOne("
            SELECT
                (SELECT COUNT(*) FROM departments)      AS departments,
                (SELECT COUNT(*) FROM testing_services) AS testing_services,
                (SELECT COUNT(*) FROM subjects)         AS subjects,
                (SELECT COUNT(*) FROM topics)           AS topics,
                (SELECT COUNT(*) FROM papers)           AS papers,
                (SELECT COUNT(*) FROM mcqs)             AS mcqs
        ");

        return [
            'departments' => [
                'title' => 'Departments',
                'description' => 'Govt & Private Departments',
                'total' => $row->departments,
            ],
            'testingServices' => [
                'title' => 'Testing Services',
                'description' => 'Exams & Recruitment Bodies',
                'total' => $row->testing_services,
            ],
            'subjects' => [
                'title' => 'Subjects',
                'description' => 'Academic & Exam Subjects',
                'total' => $row->subjects,
            ],
            'topics' => [
                'title' => 'Topics',
                'description' => 'Subject Topics',
                'total' => $row->topics,
            ],
            'papers' => [
                'title' => 'Papers',
                'description' => 'Past & Practice Papers',
                'total' => $row->papers,
            ],
            'mcqs' => [
                'title' => 'MCQs',
                'description' => 'Total Questions',
                'total' => $row->mcqs,
            ],
        ];
    }

    /**
     * ONE QUERY — SQLITE SAFE
     */
    protected function activityStats(): array
    {
        $now = Carbon::now();

        $todayStart = $now->copy()->startOfDay();
        $todayEnd   = $now->copy()->endOfDay();

        $weekStart  = $now->copy()->startOfWeek();
        $weekEnd    = $now->copy()->endOfWeek();

        $monthStart = $now->copy()->startOfMonth();
        $monthEnd   = $now->copy()->endOfMonth();

        $row = DB::selectOne("
            SELECT
                COUNT(CASE WHEN created_at BETWEEN ? AND ? THEN 1 END) AS mcqs_today,
                COUNT(CASE WHEN created_at BETWEEN ? AND ? THEN 1 END) AS mcqs_this_week,
                (SELECT COUNT(*) FROM papers WHERE created_at BETWEEN ? AND ?) AS papers_this_month
            FROM mcqs
        ", [
            $todayStart,
            $todayEnd,
            $weekStart,
            $weekEnd,
            $monthStart,
            $monthEnd,
        ]);

        return [
            'mcqsToday' => $row->mcqs_today,
            'mcqsThisWeek' => $row->mcqs_this_week,
            'papersThisMonth' => $row->papers_this_month,
        ];
    }

    /**
     * ONE QUERY — SQLITE SAFE
     */
    protected function qualityStats(): array
    {
        $row = DB::selectOne("
            SELECT
                (SELECT COUNT(*)
                    FROM mcqs m
                    WHERE NOT EXISTS (
                        SELECT 1 FROM mcq_options o WHERE o.mcq_id = m.id
                    )
                ) AS mcqs_without_options,

                (SELECT COUNT(*)
                    FROM mcqs m
                    WHERE NOT EXISTS (
                        SELECT 1 FROM mcq_options o
                        WHERE o.mcq_id = m.id AND o.is_correct = 1
                    )
                ) AS mcqs_without_correct_option,

                (SELECT COUNT(*)
                    FROM subjects s
                    WHERE NOT EXISTS (
                        SELECT 1 FROM topics t WHERE t.subject_id = s.id
                    )
                ) AS subjects_without_topics,

                (SELECT COUNT(*)
                    FROM papers p
                    WHERE NOT EXISTS (
                        SELECT 1 FROM mcqs m WHERE m.paper_id = p.id
                    )
                ) AS papers_without_mcqs
        ");

        return [
            'mcqsWithoutOptions' => $row->mcqs_without_options,
            'mcqsWithoutCorrectOption' => $row->mcqs_without_correct_option,
            'subjectsWithoutTopics' => $row->subjects_without_topics,
            'papersWithoutMcqs' => $row->papers_without_mcqs,
        ];
    }
}
