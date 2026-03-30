<?php

namespace App\Services\Seo\Updates;

use App\Models\Mcq;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class McqSeoUpdate extends BaseSeoUpdate
{
    /**
     * Return MCQs needing SEO update
     */
    protected function query(): Builder
    {
        return Mcq::query()
            ->select('id', 'question', 'subject_id', 'paper_id', 'topic_id')
            ->where(function (Builder $q) {
                $q->whereDoesntHave('seo')
                    ->orWhereHas(
                        'seo',
                        fn(Builder $q2) =>
                        $q2->whereColumn('seo_meta.updated_at', '<', 'mcqs.updated_at')
                    );
            })
            ->with([
                'subject:id,name',
                'paper:id,name,testing_service_id',
                'paper.testingService:id,name',
                'topic:id,name',
                'tags:id,name',
            ]);
    }

    protected function queryAll(): Builder
    {
        return Mcq::query()
            ->select(['id', 'question', 'subject_id', 'paper_id', 'topic_id', 'updated_at'])
            ->with([
                'subject:id,name',
                'paper:id,name,testing_service_id',
                'paper.testingService:id,name',
                'topic:id,name',
                'tags:id,name',
            ]);
    }

    /**
     * Generate SEO metadata for a single MCQ
     */
    protected function seoData($mcq): array
    {
        if (!$mcq instanceof Mcq) {
            throw new \InvalidArgumentException('Expected instance of Mcq');
        }

        $question = trim($mcq->question);
        $topic    = $mcq->topic?->name;
        $paper    = $mcq->paper?->name;
        $service  = $mcq->paper?->testingService?->name;


        $subject = $mcq->subject?->name;
        $subject = filled($subject) && $subject !== 'N/A' ? $subject : null;

        /*
        |--------------------------------------------------------------------------
        | TITLE (question is allowed here, but trimmed)
        |--------------------------------------------------------------------------
        */
        $title = collect([
            $question,
            $topic,
            $paper,
            $service ? "{$service} MCQs" : null,
        ])
            ->filter()
            ->join(' | ');

        /*
        |--------------------------------------------------------------------------
        | DESCRIPTION
        |--------------------------------------------------------------------------
        */
        $description = collect([
            "Practice solved MCQs",
            $topic ? "from {$topic}" : null,
            $subject ? "({$subject})" : null,
            $paper ? "Paper: {$paper}" : null,
            $service ? "for {$service} exams" : null,
            "with explanations and online tests",
        ])
            ->filter()
            ->join(', ') . '.';

        /*
        |--------------------------------------------------------------------------
        | KEYWORDS (IMPORTANT: no full question text)
        |--------------------------------------------------------------------------
        */
        $tagNames = $mcq->tags->pluck('name')->toArray();

        $keywords = collect(array_merge([
            $topic,
            $paper,
            $subject,
            $service,
            'MCQs',
            'MCQs practice',
            'online test',
            'past papers',
            'PakQuiz',
        ], $tagNames))
            ->filter()
            ->map(fn($k) => strtolower(trim($k)))
            ->unique()
            ->values()
            ->toArray();

        return [
            'title'       => $title,
            'description' => $description,
            'keywords'    => $keywords,
        ];
    }
}
