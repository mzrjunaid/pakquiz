<?php

namespace App\Services\Seo\Updates;

use App\Models\TestingService;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;

class TestingServiceSeoUpdate extends BaseSeoUpdate
{
    protected function query(): Builder
    {
        return TestingService::query()
            ->whereDoesntHave('seoMeta')
            ->orWhereHas('seoMeta', function ($q) {
                $q->whereColumn('seo_meta.updated_at', '<', 'testing_services.updated_at');
            })
            ->select('id', 'name')
            ->where('name', '!=', 'N/A');
    }

    protected function seoData($service): array
    {
        $serviceName = trim($service->name);

        return [
            'title' => "{$serviceName} MCQs (Solved) | {$serviceName} Past Papers | PakQuiz",

            'description' => "Prepare for {$serviceName} exams with solved MCQs, past papers, and online practice tests. Updated syllabus and exam-oriented questions for {$serviceName}.",

            'keywords' => array_unique([
                $serviceName,
                "{$serviceName} MCQs",
                "{$serviceName} solved MCQs",
                "{$serviceName} past papers",
                "{$serviceName} online test",
                "{$serviceName} preparation",
                'MCQs preparation',
                'PakQuiz',
            ]),
        ];
    }
}
