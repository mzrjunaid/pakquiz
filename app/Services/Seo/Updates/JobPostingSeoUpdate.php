<?php

namespace App\Services\Seo\Updates;

use App\Models\JobPosting;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class JobPostingSeoUpdate extends BaseSeoUpdate
{
    /**
     * Papers needing SEO update
     */
    protected function query(): Builder
    {
        return JobPosting::query()
            ->select(
                'id',
                'title',
                'slug',
                'department_id',
                'testing_service_id',
                'scale',
                'total_posts',
                'max_age',
                'domicile',
                'ad_number',
                'case_number',
                'closing_date',
                'description',
            )
            ->where(function (Builder $q) {
                $q->whereDoesntHave('seo')
                    ->orWhereHas('seo', function (Builder $q2) {
                        $q2->whereColumn(
                            $q2->getModel()->getTable() . '.updated_at',
                            '<',
                            'job_postings.updated_at'
                        );
                    });
            })
            ->with([
                'department:id,name',
                'testingService:id,short_name',
                'tags:id,name',
            ]);
    }

    protected function queryAll(): Builder
    {
        return JobPosting::query()
            ->select(
                'id',
                'title',
                'slug',
                'department_id',
                'testing_service_id',
                'scale',
                'total_posts',
                'max_age',
                'domicile',
                'ad_number',
                'case_number',
                'closing_date',
                'description',
            )
            ->with([
                'department:id,name',
                'testingService:id,short_name',
                'tags:id,name',
            ]);
    }

    /**
     * Generate SEO metadata
     */
    protected function seoData($job): array
    {
        if (!$job instanceof JobPosting) {
            throw new \InvalidArgumentException('Expected instance of JobPosting');
        }

        $jobTitle = trim($job->title);
        $department = $job->department?->name;
        $service = $job->testingService?->short_name;
        $scale = $job->scale;
        $totalPosts = $job->total_posts;
        $maxAge = $job->max_age;
        $domicile = $job->domicile;
        $adNumber = $job->ad_number;
        $caseNumber = $job->case_number;
        $closingDate = $job->closing_date;

        $tags = $job->tags->pluck('name')->toArray();

        /*
        |--------------------------------------------------------------------------
        | TITLE
        |--------------------------------------------------------------------------
        */
        $title = collect([
            Str::limit($jobTitle, 30),
            $department,
            $service,
            'PakQuiz',
        ])
            ->filter()
            ->join(' | ');

        /*
        |--------------------------------------------------------------------------
        | DESCRIPTION
        |--------------------------------------------------------------------------
        */
        $description = collect([
            'Apply for ' . $jobTitle . ' jobs via ' . $service . ' Ad '
            . $adNumber
            . '. Check eligibility, syllabus, download past papers and mock tests at PakQuiz'
        ])
            ->filter()
            ->join(', ') . '.';

        /*
        |--------------------------------------------------------------------------
        | KEYWORDS (short semantic tokens only)
        |--------------------------------------------------------------------------
        */
        $keywords = collect(array_merge([
            $title,
            $department,
            $service,
            $scale,
            $totalPosts,
            $maxAge,
            $domicile,
            $adNumber,
            $caseNumber,
            $closingDate,
            'past papers',
            'online mock test',
            'exam preparation',
            'pakquiz',
        ], $tags))
            ->filter()
            ->map(fn($k) => strtolower(trim($k)))
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
