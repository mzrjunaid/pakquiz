<?php

namespace App\Services\Seo;

use Illuminate\Database\Eloquent\Model;

class KeywordSyncService
{
    /**
     * Sync keywords directly to model or seo metadata.
     */
    public function sync(
        Model $model,
        array $keywords,
        bool $detach = true
    ): void {
        if (empty($keywords)) {
            return;
        }

        $formatted = collect($keywords)
            ->map(fn($k) => strtolower(trim($k)))
            ->filter()
            ->unique()
            ->values()
            ->implode(', ');

        if (empty($formatted)) {
            return;
        }

        if (method_exists($model, 'seo') && $model->seo) {
            $model->seo->update(['keywords' => $formatted]);
        } elseif (isset($model->keywords)) {
            $model->update(['keywords' => $formatted]);
        }
    }
}
