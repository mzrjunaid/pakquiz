<?php

namespace App\Services\Seo\Updates;

use App\Models\Page;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;

class PageSeoUpdate extends BaseSeoUpdate
{
    /**
     * Pages needing SEO generation or refresh
     */
    protected function query(): Builder
    {
        return Page::query()
            ->select('id', 'title', 'description', 'keywords', 'updated_at')
            ->where(function ($q) {
                $q->whereDoesntHave('seo')
                    ->orWhereHas('seo', function ($q2) {
                        $q2->whereColumn('seo_meta.updated_at', '<', 'pages.updated_at');
                    });
            });
    }

    /**
     * Generate SEO payload for a Page model
     */
    protected function seoData($page): array
    {
        if (! $page instanceof Page) {
            throw new \InvalidArgumentException('Expected instance of Page');
        }

        $title = trim($page->title ?? '');
        $description = trim($page->description ?? '');

        // keywords may be stored as comma-separated string or as array
        $keywords = [];
        if (! empty($page->keywords)) {
            if (is_array($page->keywords)) {
                $keywords = $page->keywords;
            } else {
                $keywords = array_filter(array_map('trim', explode(',', $page->keywords)));
            }
        }

        return [
            'title' => $title ?: null,
            'description' => $description ?: null,
            'keywords' => $keywords,
        ];
    }
}
