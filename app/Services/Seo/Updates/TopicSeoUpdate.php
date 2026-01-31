<?php

namespace App\Services\Seo\Updates;

use App\Models\Topic;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;

class TopicSeoUpdate extends BaseSeoUpdate
{
    protected function query(): Builder
    {
        $query = Topic::query();

        $query->where(function (Builder $q) {
            $q->whereDoesntHave('seo')
                ->orWhereHas('seo', function (Builder $q2) {
                    // Compare ONLY with topics.updated_at
                    $q2->whereColumn('seo_meta.updated_at', '<', 'topics.updated_at');
                });
        })
            ->with([
                'subject:id,name,updated_at',
            ])

            ->select('id', 'name', 'subject_id', 'updated_at');


        return $query;
    }

    protected function seoData($topic): array
    {
        $topicName   = trim($topic->name);
        $subjectName = $topic->subject?->name;

        /*
        |--------------------------------------------------
        | SEO TITLE
        |--------------------------------------------------
        */
        $title = collect([
            "{$topicName} MCQs",
            $subjectName,
            'Online Test & Practice',
        ])
            ->filter()
            ->join(' | ');

        /*
        |--------------------------------------------------
        | SEO DESCRIPTION
        |--------------------------------------------------
        */
        $description = collect([
            "Practice {$topicName} MCQs",
            $subjectName ? "from {$subjectName} subject" : null,
            "with solved answers and explanations",
            "updated syllabus-based questions",
        ])
            ->filter()
            ->join('. ') . '.';

        /*
        |--------------------------------------------------
        | KEYWORDS
        |--------------------------------------------------
        */
        $keywords = collect([
            $topicName,
            "{$topicName} MCQs",
            "{$topicName} online test",
            $subjectName,
            "{$subjectName} MCQs",
            'online test',
            'MCQs practice',
            'PakQuiz',
        ])
            ->filter()
            ->map(fn($k) => strtolower(trim($k)))
            ->unique()
            ->values()
            ->toArray(); // ✅ ARRAY, not string

        return [
            'title'       => str($title)->limit(60, ''),
            'description' => str($description)->limit(160, ''),
            'keywords'    => $keywords,
        ];
    }
}
