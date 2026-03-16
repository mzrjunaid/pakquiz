<?php

namespace App\Support;

use App\Models\Mcq;
use App\Models\Subject;

class SeoData
{
    public static function fromModel($model)
    {
        if (!$model || !$model->seo) {
            return self::default();
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

    public static function subjectSeo(Subject $subject): array
    {
        $subject->loadMissing('seo');

        if (!$subject || !$subject->seo) {
            return self::default();
        }

        $canonical = $subject->seo->canonical
            ?? $subject->canonicalUrl()
            ?? url()->current();

        return [
            'title' => $subject->seo->title . ' - PakQuiz' ?? $subject->name . ' - PakQuiz',
            'description' => $subject->description ?? $subject->seo->description,
            'keywords' => $subject->tags->pluck('name')->implode(', ') ?? 'MCQs, Preparation, Jobs',
            'og_title' => $subject->seo->og_title . ' - PakQuiz' ?? $subject->name . ' - PakQuiz',
            'og_description' => $subject->seo->og_description ?? $subject->description,
            'og_image' => $subject->seo->og_image ?? asset('assets/images/og-main.png'),
            'canonical' => $canonical,
        ];

    }

    public static function mcqSeo(Mcq $mcq): array
    {
        $mcq->loadMissing('seo');

        if (!$mcq || !$mcq->seo) {
            return self::default();
        }

        $canonical = $mcq->seo->canonical
            ?? $mcq->canonicalUrl()
            ?? url()->current();

        return [
            'title' => $mcq->seo->title . ' - PakQuiz' ?? $mcq->question . ' - PakQuiz',
            'description' => $mcq->explanation ?? $mcq->seo->description,
            'keywords' => $mcq->tags->pluck('name')->implode(', ') ?? 'MCQs, Preparation, Jobs',
            'og_title' => $mcq->seo->og_title . ' - PakQuiz' ?? $mcq->question . ' - PakQuiz',
            'og_description' => $mcq->seo->og_description ?? $mcq->explanation,
            'og_image' => $mcq->seo->og_image ?? asset('assets/images/og-main.png'),
            'canonical' => $canonical,
        ];
    }

    public static function default()
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
