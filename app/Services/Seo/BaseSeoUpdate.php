<?php

namespace App\Services\Seo;

use App\Models\SeoMeta;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Log;

abstract class BaseSeoUpdate
{
    abstract protected function query(): Builder;
    abstract protected function queryAll(): Builder;    
    abstract protected function seoData($model): array;

    public function __construct(
        protected KeywordSyncService $keywordSync
    ) {}

    public function handle(array $only = []): void
{
    $onlyTitleDesc = !empty($only) &&
        count(array_intersect($only, ['title', 'description'])) > 0;

    $query = $onlyTitleDesc
        ? $this->queryAll()   // no staleness filter
        : $this->query();     // original filtered query

    $query->chunkById(200, function ($models) use ($onlyTitleDesc) {
        foreach ($models as $model) {
            $onlyTitleDesc
                ? $this->updateTitleDescription($model)
                : $this->updateSeo($model);
        }
    });
}
    protected function updateTitleDescription($model): void
    {
        $rawSeoData = $this->seoData($model);

        $payload = app(SeoMetaGeneratorService::class)
            ->generateTitleDescription($rawSeoData);

        $affected = SeoMeta::where('page_type', get_class($model))
            ->where('page_id', $model->id)
            ->update($payload);  // only touches these 4 columns


        Log::debug('updateTitleDescription', [
        'page_type' => get_class($model),
        'page_id'   => $model->id,
        'payload'   => $payload,
        'affected'  => $affected,
    ]);
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

        // 1️⃣ Format keywords for direct persistence
        $keywords = $rawSeoData['keywords'] ?? [];
        if (is_array($keywords) || $keywords instanceof \Illuminate\Support\Collection) {
            $keywords = collect($keywords)->filter()->unique()->implode(', ');
        }

        // 2️⃣ Generate SEO meta (title, description, OG, etc.)
        $seoPayload = array_merge(
            [
                'page_type' => get_class($model),
                'page_id' => $model->id,
                'keywords' => !empty($keywords) ? $keywords : null,
            ],
            app(SeoMetaGeneratorService::class)->generate($rawSeoData)
        );

        if (!empty($keywords)) {
            $seoPayload['keywords'] = $keywords;
        }

        // 3️⃣ Persist SeoMeta
        SeoMeta::updateOrCreate(
            [
                'page_type' => get_class($model),
                'page_id' => $model->id,
            ],
            $seoPayload
        );
    }
}
