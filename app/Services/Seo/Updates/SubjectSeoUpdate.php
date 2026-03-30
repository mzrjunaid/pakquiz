<?php

namespace App\Services\Seo\Updates;

use App\Models\Subject;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class SubjectSeoUpdate extends BaseSeoUpdate
{
    /**
     * Return a type-safe Eloquent Builder for Subjects needing SEO update
     */
    protected function query(): Builder
    {
        return Subject::query()
            ->select('id', 'name')
            ->where(function (Builder $q) {
                // Subjects without SEO or with outdated SEO
                $q->whereDoesntHave('seo')
                    ->orWhereHas(
                        'seo',
                        fn(Builder $q2) =>
                        $q2->whereColumn('seo_meta.updated_at', '<', 'subjects.updated_at')
                    );
            })
            ->with([
                'papers:id,name,subject_id,testing_service_id',
                'papers.testingService:id,name',
                'tags:id,name', // load tags for SEO
            ]);
    }

    protected function queryAll(): Builder
    {
        return Subject::query()
            ->select('id', 'name', 'updated_at')
            ->with([
                'papers:id,name,subject_id,testing_service_id',
                'papers.testingService:id,name',
                'tags:id,name',
            ]);
    }

    /**
     * Generate SEO data for a given Subject
     */
    protected function seoData($subject): array
    {

        /**
         * ✅ Global department (N/A)
         */
        if ((int) $subject->id === 0) {
            return [
                'title' => 'Multiple General Subjects | PakQuiz',
                'description' => 'Explore all general subjects with past papers and MCQs for exam preparation.',
                'keywords' => [
                    'joint subjects',
                    'general subjects',
                    'past papers',
                    'mcqs',
                    'online test',
                    'pakquiz',
                ],
            ];
        }



        if (!$subject instanceof Subject) {
            throw new \InvalidArgumentException('Expected instance of Subject');
        }

        $subjectName = trim($subject->name);

        // Use top 2 papers for title & description
        $papers = $subject->papers->take(5);
        $paperNames = $papers->pluck('name')->toArray();
        $serviceNames = $papers->map(fn($paper) => $paper->testingService?->short_name)
            ->filter()
            ->unique()
            ->toArray();

        // Top 2 tags for title & description
        $tags = $subject->tags->pluck('name')->take(2)->toArray();
        $tagsString = $tags ? implode(', ', $tags) : null;

        // Build SEO title

        $title = collect([
            Str::of($subjectName)->limit(30)->title(),
            'Solved Past Papers & MCQs',
            'PakQuiz',
        ])
            ->filter()
            ->join(' | ');

        // Build SEO description
        $descriptionParts = ["Prepare {$subjectName} exams"];
        if (!empty($serviceNames)) {
            $descriptionParts[] = "with " . implode(', ', $serviceNames) . " past papers";
        }
        if (!empty($paperNames)) {
            $descriptionParts[] = "Practice papers: " . implode(', ', $paperNames);
        }
        if ($tagsString) {
            $descriptionParts[] = "Topics include: {$tagsString}";
        }
        $descriptionParts[] = "Online MCQs and exam-oriented questions";
        $description = implode('. ', $descriptionParts) . '.';

        // Build rich keywords including all tags
        $allTagNames = $subject->tags->pluck('name')->toArray();
        $keywords = array_unique(array_merge(
            [$subjectName],
            $paperNames,
            $serviceNames,
            array_map(fn($name) => "{$name} MCQs", $paperNames),
            array_map(fn($name) => "{$name} past papers", $paperNames),
            $allTagNames,
            ['MCQs practice', 'online test', 'PakQuiz']
        ));

        return [
            'title' => $title,
            'description' => $description,
            'keywords' => $keywords,
        ];
    }
}
