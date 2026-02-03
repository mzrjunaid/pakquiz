<?php

namespace App\Services\Seo\Updates;

use App\Models\SeoMeta;
use App\Models\Keyword;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class PageSeoUpdate
{
    /**
     * Update or create SEO meta for any page-like model
     *
     * @param  Model  $page
     * @param  array  $data
     */
    public function handle(Model $page, array $data): SeoMeta
    {
        // 1️⃣ Create / Update seo_meta
        $seo = SeoMeta::updateOrCreate(
            [
                'page_type' => get_class($page),
                'page_id'   => $page->id,
            ],
            Arr::except($data, ['keywords'])
        );

        // 2️⃣ Sync keywords (if provided)
        if (!empty($data['keywords']) && is_array($data['keywords'])) {
            $keywordIds = collect($data['keywords'])
                ->map(
                    fn($k) =>
                    Keyword::firstOrCreate(
                        ['name' => $k],
                        ['slug' => Str::slug($k)]
                    )->id
                )
                ->toArray();

            $seo->keywords()->sync($keywordIds);
        }

        return $seo;
    }
}
