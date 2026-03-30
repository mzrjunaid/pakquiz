<?php

namespace App\Services\Seo\Updates;

use App\Models\Paper;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class PaperSeoUpdate extends BaseSeoUpdate
{
    /**
     * Papers needing SEO update
     */
    protected function query(): Builder
    {
        return Paper::query()
            ->select('id', 'name', 'subject_id', 'testing_service_id')
            ->where(function (Builder $q) {
                $q->whereDoesntHave('seo')
                    ->orWhereHas('seo', function (Builder $q2) {
                        $q2->whereColumn(
                            $q2->getModel()->getTable() . '.updated_at',
                            '<',
                            'papers.updated_at'
                        );
                    });
            })
            ->with([
                'subject:id,name',
                'testingService:id,name',
                'tags:id,name',
            ]);
    }

    protected function queryAll(): Builder
    {
        return Paper::query()
            ->select('id', 'name', 'subject_id', 'testing_service_id', 'updated_at')
            ->with([
                'subject:id,name',
                'testingService:id,name',
                'tags:id,name',
            ]);
    }

    /**
     * Generate SEO metadata
     */
    protected function seoData($paper): array
    {
        if (!$paper instanceof Paper) {
            throw new \InvalidArgumentException('Expected instance of Paper');
        }

        $paperName   = trim($paper->name);
        $subject     = $paper->subject?->name;
        $service     = $paper->testingService?->name;

        $tags        = $paper->tags->pluck('name')->toArray();
        $topTags     = array_slice($tags, 0, 2);

        /*
        |--------------------------------------------------------------------------
        | TITLE
        |--------------------------------------------------------------------------
        */
        $title = collect([
            $paperName,
            $subject,
            $service ? "{$service} Past Papers" : null,
            !empty($topTags) ? implode(', ', $topTags) : null,
        ])
            ->filter()
            ->join(' | ');

        /*
        |--------------------------------------------------------------------------
        | DESCRIPTION
        |--------------------------------------------------------------------------
        */
        $description = collect([
            "Practice {$paperName}",
            $subject ? "for {$subject}" : null,
            $service ? "{$service} past papers and solved MCQs" : null,
            !empty($topTags) ? "Topics: " . implode(', ', $topTags) : null,
            "Online preparation tests with answers",
        ])
            ->filter()
            ->join(', ') . '.';

        /*
        |--------------------------------------------------------------------------
        | KEYWORDS (short semantic tokens only)
        |--------------------------------------------------------------------------
        */
        $keywords = collect(array_merge([
            $paperName,
            $subject,
            $service,
            'mcqs',
            'past papers',
            'online test',
            'exam preparation',
            'pakquiz',
        ], $tags))
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
