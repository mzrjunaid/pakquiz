<?php

namespace App\Support;

use App\Models\Mcq;
use App\Models\Paper;
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

    public static function paperSeo(Paper $paper): array
    {
        $paper->loadMissing('seo');

        if (!$paper || !$paper->seo) {
            return self::default();
        }

        $canonical = $paper->seo->canonical
            ?? $paper->canonicalUrl()
            ?? url()->current();

        return [
            'title' => $paper->seo->title . ' - PakQuiz' ?? $paper->name . ' - PakQuiz',
            'description' => $paper->description ?? $paper->seo->description,
            'keywords' => $paper->tags->pluck('name')->implode(', ') ?? 'MCQs, Preparation, Jobs',
            'og_title' => $paper->seo->og_title . ' - PakQuiz' ?? $paper->name . ' - PakQuiz',
            'og_description' => $paper->seo->og_description ?? $paper->description,
            'og_image' => $paper->seo->og_image ?? asset('assets/images/og-main.png'),
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
            'og_image' => $mcq->seo->og_image ? asset($mcq->seo->og_image) : asset('assets/images/og-main.png'),
            'canonical' => $canonical,
        ];
    }

    public static function searchSeo(string $query): array
    {
        if ($query) {
            return [
                'title' => 'Search results for "' . $query . '" – PakQuiz',
                'description' => 'Search results for "' . $query . '" on PakQuiz – MCQs, practice papers, and subjects for FPSC, PPSC, NTS, CSS & PMS exam preparation.',
                'keywords' => $query . ', MCQs, Preparation, Jobs',
                'og_title' => 'Search results for "' . $query . '" – PakQuiz',
                'og_description' => 'Search results for "' . $query . '" on PakQuiz – MCQs, practice papers, and subjects for FPSC, PPSC, NTS, CSS & PMS exam preparation.',
                'og_image' => asset('assets/images/og-main.png'),
                'canonical' => url('/search') . '?q=' . urlencode($query),
            ];
        } else
            return [
                'title' => 'Search PakQuiz – MCQs, Papers & Subjects',
                'description' => 'Search PakQuiz\'s database of MCQs, practice papers and subjects for FPSC, PPSC, NTS, CSS and PMS exam preparation in Pakistan.',
                'keywords' => 'MCQs, Preparation, Jobs',
                'og_title' => 'Search PakQuiz – MCQs, Papers & Subjects',
                'og_description' => 'Search PakQuiz\'s database of MCQs, practice papers and subjects for FPSC, PPSC, NTS, CSS and PMS exam preparation in Pakistan.',
                'og_image' => asset('assets/images/og-main.png'),
                'canonical' => url('/search'),
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
