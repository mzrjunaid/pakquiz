<?php

namespace App\Services\Seo;

use App\Models\Page;
use App\Models\SeoMeta;
use Illuminate\Http\Request;

class SeoResolver
{
    public function resolve(Request $request, $model = null): array
    {
        // 1. Model-based SEO (MCQ, Subject, etc.)
        if ($model && $model->relationLoaded('seo')) {
            return $this->format($model->seo);
        }

        // 2. Model-based SEO (lazy)
        if ($model && method_exists($model, 'seo')) {
            return $this->format($model->seo);
        }

        // 3. Page-based SEO (route name)
        $routeName = $request->route()?->getName();

        if ($routeName) {
            $seo = optional(Page::where('key', $routeName)->with('seo')->first())->seo;
            return $this->format($seo);
        }

        // 4. Fallback SEO
        return $this->default();
    }

    protected function format(?SeoMeta $seo): array
    {
        return [
            'title' => $seo?->title ?? config('app.name'),
            'description' => $seo?->description ?? '',
            'keywords' => $seo?->keywords ?? '',
            'og_title' => $seo?->og_title ?? $seo?->title,
            'og_description' => $seo?->og_description ?? $seo?->description,
            'og_image' => $seo?->og_image,

        ];
    }

    protected function default(): array
    {
        return [
            'title' => config('app.name'),
            'description' => '',
            'keywords' => '',
            'og_title' => config('app.name'),
            'og_description' => '',
            'og_image' => null,
        ];
    }
}
