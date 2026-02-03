<?php

namespace App\Services\Seo;

use App\Models\Keyword;
use Illuminate\Database\Eloquent\Model;

class KeywordSyncService
{
    public function sync(
        Model $model,
        array $keywords,
        bool $detach = true
    ): void {
        if (empty($keywords)) {
            return;
        }

        $keywords = collect($keywords)
            ->map(fn($k) => strtolower(trim($k)))
            ->filter()
            ->unique()
            ->values()
            ->toArray();

        $keywordIds = [];

        foreach ($keywords as $keyword) {
            $keywordIds[] = Keyword::firstOrCreate([
                'keyword' => $keyword,
            ])->id;
        }

        $detach
            ? $model->keywords()->sync($keywordIds)
            : $model->keywords()->syncWithoutDetaching($keywordIds);
    }
}
