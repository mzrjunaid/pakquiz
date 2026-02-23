<?php

namespace App\Services\Seo;

use App\Models\Page;
use App\Models\SeoMeta;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class SeoResolver
{
    public function resolve(Request $request, $model = null): array
    {
        /**
         * 1️⃣ Model-based SEO (show pages)
         */
        if ($model instanceof Model) {

            // Use eager-loaded relation only
            if ($model->relationLoaded('seo') && $model->seo instanceof SeoMeta) {
                return $this->format($request, $model->seo);
            }

            // If relation not eager loaded, safely check existence
            if (method_exists($model, 'seo') && $model->seo()->exists()) {
                return $this->format($request, $model->seo()->first());
            }
        }

        /**
         * 2️⃣ Route-based Page SEO (index/static pages)
         */
        $routeName = $request->route()?->getName();

        if ($routeName) {
            $key = $this->normalizeRouteKey($routeName);

            $page = Page::query()
                ->where('key', $key)
                ->with('seo')
                ->first();

            // dd($page->seo); //this is giving null


            if ($page && $page->seo instanceof SeoMeta) {
                return $this->format($request, $page->seo);
            }
        }

        /**
         * 3️⃣ Fallback
         */
        return $this->default($request);
    }

    /**
     * Normalize route name to Page key
     * Example:
     * public.departments.index → departments
     * admin.departments.index → departments (ignored)
     */
    protected function normalizeRouteKey(string $routeName): string
    {
        $parts = explode('.', $routeName);

        // Remove common prefixes
        $parts = array_values(array_filter(
            $parts,
            fn($part) =>
            !in_array($part, ['public', 'admin', 'web'])
        ));

        return $parts[0] ?? $routeName;
    }

    protected function format(Request $request, ?SeoMeta $seo): array
    {
        return [
            'title' => $seo?->title ?: config('app.name'),

            'description' => $seo?->description
                ? trim($seo->description)
                : '',

            'keywords' => $seo?->keywords ?: '',

            'og_title' => $seo?->og_title
                ?: $seo?->title
                ?: config('app.name'),

            'og_description' => $seo?->og_description
                ?: $seo?->description
                ?: '',

            'og_image' => $seo?->og_image,

            'canonical' => $this->resolveCanonical($request),
        ];
    }

    /**
     * Canonical URL Strategy
     */
    protected function resolveCanonical(Request $request): string
    {
        $url = $request->url();

        // Only allow pagination param in canonical
        if ($request->has('page')) {
            return $url . '?page=' . $request->integer('page');
        }

        return $url;
    }

    protected function default(Request $request): array
    {
        return [
            'title' => config('app.name'),
            'description' => '',
            'keywords' => '',
            'og_title' => config('app.name'),
            'og_description' => '',
            'og_image' => null,
            'canonical' => $request->url(),
        ];
    }
}
