<?php

namespace App\Services\Seo\Updates;

use App\Models\TestingService;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;

class TestingServiceSeoUpdate extends BaseSeoUpdate
{
    /**
     * Return a type-safe Eloquent Builder for Testing Services needing SEO update
     */
    protected function query(): Builder
    {
        return TestingService::query()
            ->select('id', 'name')
            ->where(function ($q) {
            $q->whereDoesntHave('seo')
                ->orWhereHas(
                'seo',
            fn($q2) =>
            $q2->whereColumn('seo_meta.updated_at', '<', 'testing_services.updated_at')
            );
        })
            ->where('name', '!=', 'N/A')
            ->with([
            'papers:id,name,subject_id,testing_service_id',
            'papers.subject:id,name',
            'tags:id,name', // optional: include tags for SEO enrichment
        ]);
    }

    protected function queryAll(): Builder
    {
        return TestingService::query()
            ->select('id', 'name', 'updated_at')
            ->with([
            'papers:id,name,subject_id,testing_service_id',
            'papers.subject:id,name',
            'tags:id,name',
        ]);
    }

    /**
     * Generate SEO data for a given TestingService
     */
    protected function seoData($service): array
    {
        if (!$service instanceof TestingService) {
            throw new \InvalidArgumentException('Expected instance of TestingService');
        }

        $serviceName = trim($service->name);

        // Use top tags for title & description
        $tags = $service->tags->pluck('name')->take(2)->toArray();
        $tagsString = $tags ? implode(', ', $tags) : null;

        // Build SEO title
        $titleParts = array_filter([
            "{$serviceName} MCQs (Solved)",
            "{$serviceName} Past Papers",
            $tagsString,
        ]);
        $title = implode(' | ', $titleParts);

        // Build SEO description
        $descriptionParts = [
            "Prepare for {$serviceName} exams with solved MCQs, past papers, and online practice tests",
        ];
        if ($tagsString) {
            $descriptionParts[] = "Including topics: {$tagsString}";
        }
        $descriptionParts[] = "Updated syllabus and exam-oriented questions for {$serviceName}";
        $description = implode('. ', $descriptionParts) . '.';

        // Build keywords including tags
        $allTagNames = $service->tags->pluck('name')->toArray();
        $keywords = array_unique(array_filter(array_merge([
            $serviceName,
            "{$serviceName} MCQs",
            "{$serviceName} solved MCQs",
            "{$serviceName} past papers",
            "{$serviceName} online test",
            "{$serviceName} preparation",
            'MCQs preparation',
            'PakQuiz',
        ], $allTagNames)));

        return [
            'title' => $title,
            'description' => $description,
            'keywords' => $keywords,
        ];
    }
}
