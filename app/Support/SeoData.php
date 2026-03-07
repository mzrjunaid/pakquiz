<?php

namespace App\Support;

class SeoData
{
    public static function fromModel($model)
    {
        if (!$model || !$model->seo) {
            return self::default ();
        }

        return [
            'title' => $model->seo->title,
            'description' => $model->seo->description,
            'keywords' => $model->seo->keywords,
            'og_title' => $model->seo->og_title ?? $model->seo->title,
            'og_description' => $model->seo->og_description ?? $model->seo->description,
            'og_image' => $model->seo->og_image ?? asset('assets/images/og-main.png'),
            'canonical' => $model->seo->canonical ? $model->canonicalUrl() : url()->current(),
        ];
    }

    public static function default ()
    {
        return [
            'title' => config('app.name'),
            'description' => 'Latest jobs and MCQs preparation platform in Pakistan.',
            'keywords' => 'jobs, mcqs, ppsc, fpsc, css',
            'og_title' => config('app.name'),
            'og_description' => 'Latest jobs and MCQs preparation platform in Pakistan.',
            'og_image' => asset('assets/images/og-main.png'),
            'canonical' => url('/'),
        ];
    }
}