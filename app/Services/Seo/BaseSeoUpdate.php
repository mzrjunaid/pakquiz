<?php

namespace App\Services\Seo;

use App\Models\SeoMeta;
use Illuminate\Database\Eloquent\Builder;

abstract class BaseSeoUpdate
{
    abstract protected function query(): Builder;
    abstract protected function seoData($model): array;

    public function __construct(
        protected KeywordSyncService $keywordSync
    ) {
    }

    public function handle(): void
    {
        $this->query()
            ->chunkById(200, function ($models) {
                foreach ($models as $model) {
                    $this->updateSeo($model);
                }
            });
    }

    public function handleSingle(int $id): void
    {
        $model = $this->query()->find($id);

        if (!$model) {
            return; // SEO is already up-to-date, skip
        }

        $this->updateSeo($model);
    }

    protected function updateSeo($model): void
    {
        $rawSeoData = $this->seoData($model);

        // 1️⃣ Extract keywords BEFORE persistence
        $keywords = $rawSeoData['keywords'] ?? [];
        unset($rawSeoData['keywords']);

        // 2️⃣ Generate SEO meta (title, description, OG, etc.)
        $seoPayload = array_merge(
            [
                'page_type' => get_class($model),
                'page_id' => $model->id,
            ],
            app(SeoMetaGeneratorService::class)->generate($rawSeoData)
        );

        // 3️⃣ Persist SeoMeta
        $seoMeta = SeoMeta::updateOrCreate(
            [
                'page_type' => get_class($model),
                'page_id' => $model->id,
            ],
            $seoPayload
        );

        // 4️⃣ Sync keywords separately (pivot-based)
        if (!empty($keywords)) {
            $this->keywordSync->sync(
                model: $seoMeta,
                keywords: $keywords
            );
        }
    }
}
