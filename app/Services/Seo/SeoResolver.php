<?php

namespace App\Services\Seo;

use App\Models\Page;
use App\Models\SeoMeta;
use Illuminate\Http\Request;

class SeoResolver
{
    public function resolve(Request $request, $model = null): array
    {
        // 1. Model SEO (already eager loaded)
        if ($model && $model->relationLoaded('seo') && $model->seo) {
            return $this->format($request, $model->seo);
        }

        // 2. Model SEO (lazy load, only if exists)
        if ($model && method_exists($model, 'seo')) {
            $seo = $model->seo()->first();

            if ($seo) {
                return $this->format($request, $seo);
            }
        }

        // 3. Page SEO (route-based)
        $routeName = $request->route()?->getName();

        // dd($routeName);

        // route should only explode if it's more than 2 parts
        if (count(explode('.', $routeName)) > 2) {
            $routeName = explode('.', $routeName)[1];
        }

        // dd($routeName);



        // Should we check for route prefix?

        if ($routeName) {
            $page = Page::query()
                ->where('key', $routeName)
                ->with('seo')
                ->first();

            // dd($page);
            if ($page && $page->seo) {

                return $this->format($request, $page->seo);
            }
        }

        // 4. Final fallback
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

            'canonical'        => $this->resolveCanonical($request),
        ];
    }

    protected function resolveCanonical(Request $request): string
    {
        $url = $request->url();

        // Pagination-safe canonical
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
