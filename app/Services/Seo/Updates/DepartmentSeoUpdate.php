<?php

namespace App\Services\Seo\Updates;

use App\Models\Department;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;

class DepartmentSeoUpdate extends BaseSeoUpdate
{
    /**
     * Return Eloquent query for Departments that need SEO
     */
    protected function query(): Builder
    {
        return Department::query()
            ->withCount('papers') // eager load paper count
            ->where(function (Builder $q) {
                $q->whereDoesntHave('seo')
                    ->orWhereHas('seo', function (Builder $q2) {
                        $q2->whereColumn('seo_meta.updated_at', '<', 'departments.updated_at');
                    });
            })
            ->select('id', 'name', 'type', 'updated_at');
    }


    /**
     * Return SEO metadata array for a department
     */
    protected function seoData($department): array
    {

        // ✅ Special case: general department (N/A)
        if ($department->id === 1) {
            return [
                'title'       => 'Departments & Organizations | PakQuiz',
                'description' => 'Explore all government and private departments with past papers and MCQs for exam practice.',
                'keywords'    => [
                    'departments',
                    'government departments',
                    'private organizations',
                    'past papers',
                    'MCQs',
                    'PakQuiz',
                ],
            ];
        }

        $name = trim($department->name);
        $type = $department->type;
        $paperCount = $department->papers_count ?? 0;

        // SEO title
        $titleParts = [
            $name,
            $type === 'government' ? 'Government Department' : 'Private Organization',
            $paperCount ? "{$paperCount} Papers Available" : null,
        ];

        $seoTitle = str(collect($titleParts)->filter()->join(' | '))
            ->limit(60, '')
            ->toString();

        // SEO description
        $descriptionParts = [
            "Prepare exams or tests for {$name}",
            $type === 'government' ? 'Official government department' : 'Private organization',
            $paperCount ? "Offering {$paperCount} solved papers" : null,
            "Practice MCQs and past papers online",
        ];

        $seoDescription = str(collect($descriptionParts)->filter()->join('. ') . '.')
            ->limit(160, '')
            ->toString();

        // Keywords (array)
        $keywords = collect([
            $name,
            "{$name} MCQs",
            "{$name} online test",
            $type,
            $paperCount ? "{$paperCount} papers" : null,
            'MCQs practice',
            'online test',
            'PakQuiz',
        ])
            ->filter()
            ->map(fn($k) => strtolower(trim($k)))
            ->unique()
            ->values()
            ->toArray();

        return [
            'title'       => $seoTitle,
            'description' => $seoDescription,
            'keywords'    => $keywords,
        ];
    }
}
