<?php

namespace App\Services;

use App\Models\Mcq;
use App\Models\Paper;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class DashboardService
{
    public function stats(): array
    {
        return Cache::remember('dashboard.stats', now()->addMinutes(5), function () {
            return [
                'overview' => $this->overviewStats(),
                'activity' => $this->activityStats(),
                'quality'  => $this->qualityStats(),
            ];
        });
    }

    public function latest()
    {
        return Cache::remember('dashboard.latest', now()->addMinutes(5), function () {
            return [
                'items' =>  $this->latestItems(),
            ];
        });
    }



    public function latestItems(): array
    {

        $latestMcqs =  Mcq::query()
            ->latest()
            ->limit(5)
            ->get()
            ->map(fn($mcq) => [
                'id' => $mcq->id,
                'slug' => $mcq->slug,
                'title' => $mcq->question,
                'type' => 'MCQ',
                'subject' => $mcq->subject->name ?? '-',
                'created_at' => $mcq->created_at->toDateString(),
            ]);

        $latestPapers = Paper::query()
            ->latest()
            ->limit(5)
            ->get()
            ->map(fn($paper) => [
                'id' => $paper->id,
                'slug' => $paper->slug,
                'title' => $paper->name,
                'type' => 'Paper',
                'subject' => $paper->subject->name ?? '-',
                'created_at' => $paper->created_at->toDateString(),
            ]);
        return $latestMcqs
            ->merge($latestPapers)
            ->sortByDesc('created_at')
            ->take(10)
            ->values()
            ->toArray();
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
            'mcqsToday' => [
                'title' => 'Today MCQs',
                'total' => $row->mcqs_today,
            ],
            'mcqsThisWeek' =>
            [
                'title' => 'This Week MCQs',
                'total' => $row->mcqs_this_week,
            ],

            'papersThisMonth' => [
                'title' => 'This Month Papers',
                'total' => $row->papers_this_month,
            ],
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
            'mcqsWithoutOptions' => [
                'title' => 'MCQs Without Options',
                'total' => $row->mcqs_without_options,
            ],
            'mcqsWithoutCorrectOption' => [
                'title' => 'MCQs Without Correct Option',
                'total' => $row->mcqs_without_correct_option,
            ],
            'subjectsWithoutTopics' => [
                'title' => 'Subjects Without Topics',
                'total' => $row->subjects_without_topics,
            ],
            'papersWithoutMcqs' => [
                'title' => 'Papers Without Mcqs',
                'total' => $row->papers_without_mcqs,
            ],
        ];
    }
}
