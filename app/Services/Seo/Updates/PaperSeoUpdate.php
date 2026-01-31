<?php

namespace App\Services\Seo\Updates;

use App\Models\Paper;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;

class PaperSeoUpdate extends BaseSeoUpdate
{
    /**
     * Return a type-safe Eloquent Builder
     *
     * @return Builder
     */
    protected function query(): Builder
    {
        // Start with Eloquent Builder
        $query = Paper::query();

        // Only update papers without SEO or outdated SEO
        $query->where(function (Builder $q) {
            $q->whereDoesntHave('seo')
                ->orWhereHas('seo', function (Builder $q2) {
                    $q2->whereColumn('seo_meta.updated_at', '<', 'papers.updated_at');
                });
        });

        // Eager load related subject and testing service (only necessary fields)
        $query->with([
            'subject:id,name',
            'testingService:id,name',
        ]);

        // Select only required columns
        $query->select('id', 'name', 'subject_id', 'testing_service_id');

        return $query; // still an Eloquent\Builder
    }

    protected function seoData($paper): array
    {
        $paperTitle = trim($paper->name);
        $subjectName = $paper->subject?->name ?? '';
        $serviceName = $paper->testingService?->name ?? '';

        // Build SEO title dynamically
        $titleParts = array_filter([$paperTitle, $subjectName, $serviceName ? "{$serviceName} Past Papers" : null]);
        $seoTitle = implode(' | ', $titleParts);

        // Build SEO description
        $descParts = [];
        if ($subjectName) {
            $descParts[] = "Prepare {$subjectName} exams";
        }
        if ($serviceName) {
            $descParts[] = "with {$serviceName} past papers";
        }
        $descParts[] = "Practice MCQs and past papers online";
        $seoDescription = implode('. ', $descParts) . '.';

        // Build keywords
        $keywords = array_unique(array_filter(array_merge(
            [$paperTitle, $subjectName, $serviceName],
            [$paperTitle . ' MCQs', $paperTitle . ' past papers'],
            ['MCQs practice', 'online test', 'PakQuiz']
        )));

        return [
            'title' => $seoTitle,
            'description' => $seoDescription,
            'keywords' => $keywords,
        ];
    }
}
