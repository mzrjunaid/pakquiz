<?php

namespace App\Services\Seo;

use App\Models\Page;
use App\Models\SeoMeta;
use Illuminate\Http\Request;

class SeoResolver
{
    public function resolve(Request $request, $model = null): array
    {
        // 1. Model-based SEO (eager loaded)
        if ($model && $model->relationLoaded('seo')) {
            return $this->format($request, $model->seo);
        }

        // 2. Model-based SEO (lazy)
        if ($model && method_exists($model, 'seo')) {
            return $this->format($request, $model->seo);
        }

        // 3. Page-based SEO (route name)
        if ($routeName = $request->route()?->getName()) {
            $seo = optional(
                Page::where('key', $routeName)->with('seo')->first()
            )->seo;

            return $this->format($request, $seo);
        }

        // 4. Fallback
        return $this->default($request);
    }

    protected function format(Request $request, ?SeoMeta $seo): array
    {
        return [
            'title'            => $seo?->title ?? config('app.name'),

            'description'      => $seo?->description
                ? trim($seo->description)
                : '',

            'keywords'         => $seo?->keywords ?? '',

            'og_title'         => $seo?->og_title
                ?? $seo?->title
                ?? config('app.name'),

            'og_description'   => $seo?->og_description
                ?? $seo?->description
                ?? '',

            'og_image'         => $seo?->og_image,

            // ✅ Canonical injected here
            'canonical'        => $this->resolveCanonical($request),
        ];
    }

    protected function resolveCanonical(Request $request): string
    {
        $url = $request->url();

        // Allow pagination canonical
        if ($request->has('page')) {
            return $url . '?page=' . $request->integer('page');
        }

        return $url;
    }

    protected function default(Request $request): array
    {
        return [
            'title'          => config('app.name'),
            'description'    => '',
            'keywords'       => '',
            'og_title'       => config('app.name'),
            'og_description' => '',
            'og_image'       => null,
            'canonical'      => $request->url(),
        ];
    }
}
