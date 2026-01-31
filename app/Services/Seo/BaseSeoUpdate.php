<?php

namespace App\Services\Seo;

use App\Models\SeoMeta;
use Illuminate\Database\Eloquent\Builder;

abstract class BaseSeoUpdate
{
    abstract protected function query(): Builder;
    abstract protected function seoData($model): array;

    public function handle(): void
    {
        $this->query()
            ->chunkById(200, function ($models) {
                foreach ($models as $model) {
                    $this->updateSeo($model);
                }
            });
    }

    protected function updateSeo($model): void
    {
        $seoData = array_merge(
            [
                'page_type' => get_class($model),
                'page_id'   => $model->id,
            ],
            app(SeoMetaGeneratorService::class)->generate($this->seoData($model))
        );

        SeoMeta::updateOrCreate(
            [
                'page_type' => get_class($model),
                'page_id'   => $model->id,
            ],
            $seoData
        );
    }
}
