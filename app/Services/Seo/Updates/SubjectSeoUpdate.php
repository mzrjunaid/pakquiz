<?php

namespace App\Services\Seo\Updates;

use App\Models\Subject;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder; // make sure this is the Eloquent one

class SubjectSeoUpdate extends BaseSeoUpdate
{
    /**
     * @return Builder
     */
    protected function query(): Builder
    {
        // Start with Eloquent builder
        $query = Subject::query();

        // Apply conditions without breaking the Builder type
        $query->where(function (Builder $q) {
            $q->whereDoesntHave('seo')
                ->orWhereHas('seo', function (Builder $q2) {
                    $q2->whereColumn('seo_meta.updated_at', '<', 'subjects.updated_at');
                });
        });

        // Eager load relations but DO NOT call get() or all()
        $query->with(['papers.testingService:id,name']);

        // Select only necessary columns
        $query->select('id', 'name');

        return $query; // This is still an Eloquent\Builder
    }

    protected function seoData($subject): array
    {
        $subjectName = trim($subject->name);

        $papers = $subject->papers->take(5); // Limit for performance

        $paperNames = $papers->pluck('name')->toArray();
        $serviceNames = $papers->map(fn($paper) => $paper->testingService?->name)
            ->filter()
            ->unique()
            ->toArray();

        $titleParts = array_filter(array_merge([$subjectName], $paperNames, $serviceNames));
        $seoTitle = implode(' | ', $titleParts);

        $descParts = ["Prepare {$subjectName} exams"];
        if (!empty($serviceNames)) {
            $descParts[] = "with " . implode(', ', $serviceNames) . " past papers";
        }
        if (!empty($paperNames)) {
            $descParts[] = "Practice papers: " . implode(', ', $paperNames);
        }
        $descParts[] = "Online MCQs and exam-oriented questions";
        $seoDescription = implode('. ', $descParts) . '.';

        $keywords = array_unique(array_merge(
            [$subjectName],
            $paperNames,
            $serviceNames,
            array_map(fn($name) => "{$name} MCQs", $paperNames),
            array_map(fn($name) => "{$name} past papers", $paperNames),
            ['MCQs practice', 'online test', 'PakQuiz']
        ));

        return [
            'title' => $seoTitle,
            'description' => $seoDescription,
            'keywords' => $keywords,
        ];
    }
}
