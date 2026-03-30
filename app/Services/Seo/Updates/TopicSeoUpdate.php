<?php

namespace App\Services\Seo\Updates;

use App\Models\Topic;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class TopicSeoUpdate extends BaseSeoUpdate
{
    /**
     * Return a type-safe Eloquent Builder for Topics needing SEO update
     */
    protected function query(): Builder
    {
        return Topic::query()
            ->select('id', 'name', 'subject_id', 'updated_at')
            ->where(function (Builder $q) {
                $q->whereDoesntHave('seo')
                    ->orWhereHas(
                        'seo',
                        fn(Builder $q2) =>
                        $q2->whereColumn('seo_meta.updated_at', '<', 'topics.updated_at')
                    );
            })
            ->with([
                'subject:id,name,updated_at',
                'tags:id,name', // include tags for SEO enrichment
            ]);
    }

    protected function queryAll(): Builder
    {
        return Topic::query()
            ->select('id', 'name', 'subject_id', 'updated_at')
            ->with([
                'subject:id,name,updated_at',
                'tags:id,name',
            ]);
    }

    /**
     * Generate SEO data for a given Topic
     */
    protected function seoData($topic): array
    {
        if (!$topic instanceof Topic) {
            throw new \InvalidArgumentException('Expected instance of Topic');
        }

        $topicName = trim($topic->name);
        $subjectName = $topic->subject?->name;

        // Top 2 tags for title & description
        $tags = $topic->tags->pluck('name')->take(2)->toArray();
        $tagsString = $tags ? implode(', ', $tags) : null;

        /*
        |--------------------------------------------------
        | SEO TITLE
        |--------------------------------------------------
        */
        $title = collect([
            Str::of($topicName)->limit(30)->title(),
            'Solved Past Papers & MCQs',
            'PakQuiz',
        ])
            ->filter()
            ->join(' | ');

        /*
        |--------------------------------------------------
        | SEO DESCRIPTION
        |--------------------------------------------------
        */
        $descriptionParts = [
            "Practice $topicName} MCQs",
            $subjectName ? "from {$subjectName} subject" : null,
            $tagsString ? "Including topics: {$tagsString}" : null,
            "with solved answers and explanations",
            "updated syllabus-based questions",
        ];
        $description = implode('. ', array_filter($descriptionParts)) . '.';

        /*
        |--------------------------------------------------
        | KEYWORDS
        |--------------------------------------------------
        */
        $allTagNames = $topic->tags->pluck('name')->toArray();
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
            ->merge($allTagNames)
            ->map(fn($item) => str($item)->lower()->trim()) // Standardize to lowercase
            ->filter()
            ->unique()
            ->values()
            ->toArray();

        return [
            'title' => $title,
            'description' => $description,
            'keywords' => $keywords,
        ];
    }
}
