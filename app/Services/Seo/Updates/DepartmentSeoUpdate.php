<?php

namespace App\Services\Seo\Updates;

use App\Models\Department;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class DepartmentSeoUpdate extends BaseSeoUpdate
{
    /**
     * Departments requiring SEO generation or refresh
     */
    protected function query(): Builder
    {
        return Department::query()
            ->select(['id', 'name', 'type', 'updated_at'])
            ->withCount('papers')
            ->where(function (Builder $query) {
            $query
                ->whereDoesntHave('seo')
                ->orWhereHas('seo', function (Builder $seoQuery) {
                $seoQuery->whereColumn(
                    'seo_meta.updated_at',
                    '<',
                    'departments.updated_at'
                );
            }
            );
        });
    }

    protected function queryAll(): Builder
    {
        return Department::query()
            ->select(['id', 'name', 'type', 'updated_at'])
            ->withCount('papers');
    }

    /**
     * Build SEO meta + keyword payload
     */
    protected function seoData($department): array
    {
        /**
         * ✅ Global department (N/A)
         */
        if ((int)$department->id === 1) {
            return [
                'title' => 'Departments & Organizations | PakQuiz',
                'description' => 'Explore all government and private departments with past papers and MCQs for exam preparation.',
                'keywords' => [
                    'departments',
                    'government departments',
                    'private organizations',
                    'past papers',
                    'mcqs',
                    'online test',
                    'pakquiz',
                ],
            ];
        }

        $name = trim($department->name);
        $type = $department->type;
        $paperCount = (int)($department->papers_count ?? 0);

        /**
         * -------------------------
         * SEO Title
         * -------------------------
         */

        $title = str(collect([
            Str::limit($name, 35),
            'Solved Past Papers & MCQs',
            'PakQuiz',
        ])->filter()->join(' | '));

        /**
         * -------------------------
         * SEO Description
         * -------------------------
         */
        $description = str(collect([
            "Prepare exams for {$name}",
            $type === 'government'
            ? 'Official government department'
            : 'Recognized private organization',
            $paperCount ? "Includes {$paperCount} solved papers" : null,
            'Practice MCQs and past papers online',
        ])->filter()->join('. ') . '...');

        /**
         * -------------------------
         * SEO Keywords (Normalized values)
         * These will be synced to keywords & keywordables tables
         * -------------------------
         */
        $keywords = collect([
            $name,
            "{$name} mcqs",
            "{$name} past papers",
            "{$name} online test",
            $type === 'government'
            ? 'government jobs test'
            : 'private jobs test',
            'mcqs practice',
            'online test preparation',
            'pakquiz',
        ])
            ->map(fn($keyword) => strtolower(trim($keyword)))
            ->unique()
            ->values()
            ->toArray();

        return [
            'title' => $title,
            'description' => $description,
            'keywords' => $keywords, // handled by Keyword sync layer
        ];
    }
}
