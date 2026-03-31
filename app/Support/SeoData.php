<?php

namespace App\Support;

use App\Models\Department;
use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\Topic;

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

    public static function subjectSeo(Subject $subject): array
    {
        $subject->loadMissing('seo');

        if (!$subject || !$subject->seo) {
            return self::default ();
        }

        $canonical = $subject->seo->canonical
            ?? $subject->canonicalUrl()
            ?? url()->current();

        return [
            'title' => $subject->seo->title ?? $subject->name . ' | PakQuiz',
            'description' => $subject->description ?? $subject->seo->description,
            'keywords' => $subject->tags->pluck('name')->implode(', ') ?? 'MCQs, Preparation, Jobs',
            'og_title' => $subject->seo->og_title ?? $subject->name . ' | PakQuiz',
            'og_description' => $subject->seo->og_description ?? $subject->description,
            'og_image' => $subject->seo->og_image ?? asset('assets/images/og-main.png'),
            'canonical' => $canonical,
        ];
    }

    public static function topicSeo(Subject $subject, Topic $topic): array
    {
        $topic->loadMissing('seo');

        if (!$topic || !$topic->seo) {
            return self::default ();
        }

        $canonical = $topic->seo->canonical
            ?? $topic->canonicalUrl()
            ?? url()->current();

        return [
            'title' => $topic->seo->title ?? $topic->name . ' | ' . $subject->name . ' | PakQuiz',
            'description' => $topic->description ?? $topic->seo->description,
            'keywords' => $topic->tags->pluck('name')->implode(', ') ?? 'MCQs, ' . $subject->name . ' MCQs, ' . $topic->name . ' MCQs, Jobs',
            'og_title' => $topic->seo->og_title ?? $topic->name . ' | ' . $subject->name . ' | PakQuiz',
            'og_description' => $topic->seo->og_description ?? $topic->description,
            'og_image' => $topic->seo->og_image ?? asset('assets/images/og-main.png'),
            'canonical' => $canonical,
        ];
    }

    public static function paperSeo(Paper $paper): array
    {
        $paper->loadMissing('seo');

        if (!$paper || !$paper->seo) {
            return self::default ();
        }

        $canonical = $paper->seo->canonical
            ?? $paper->canonicalUrl()
            ?? url()->current();

        return [
            'title' => $paper->seo->title ?? $paper->name . ' | PakQuiz',
            'description' => $paper->description ?? $paper->seo->description,
            'keywords' => $paper->tags->pluck('name')->implode(', ') ?? 'MCQs, Preparation, Jobs',
            'og_title' => $paper->seo->og_title ?? $paper->name . ' | PakQuiz',
            'og_description' => $paper->seo->og_description ?? $paper->description,
            'og_image' => $paper->seo->og_image ?? asset('assets/images/og-main.png'),
            'canonical' => $canonical,
        ];
    }

    public static function departmentSeo(Department $department): array
    {
        $department->loadMissing('seo');

        if (!$department || !$department->seo) {
            return self::default ();
        }

        $canonical = $department->seo->canonical
            ?? $department->canonicalUrl()
            ?? url()->current();

        return [
            'title' => $department->seo->title ?? $department->name . ' | PakQuiz',
            'description' => $department->description ?? $department->seo->description,
            // 'keywords' => $department->tags->pluck('name')->implode(', ') ?? 'MCQs, Preparation, Jobs',
            'og_title' => $department->seo->og_title ?? $department->name . ' | PakQuiz',
            'og_description' => $department->seo->og_description ?? $department->description,
            'og_image' => $department->seo->og_image ?? asset('assets/images/og-main.png'),
            'canonical' => $canonical,
        ];
    }

    public static function mcqSeo(Mcq $mcq): array
    {
        $mcq->loadMissing('seo');

        if (!$mcq || !$mcq->seo) {
            return self::default ();
        }

        $canonical = $mcq->seo->canonical
            ?? $mcq->canonicalUrl()
            ?? url()->current();

        return [
            'title' => $mcq->seo->title ?? $mcq->question . ' | PakQuiz',
            'description' => $mcq->explanation ?? $mcq->seo->description,
            'keywords' => $mcq->tags->pluck('name')->implode(', ') ?? 'MCQs, Preparation, Jobs',
            'og_title' => $mcq->seo->og_title ?? $mcq->question . ' | PakQuiz',
            'og_description' => $mcq->seo->og_description ?? $mcq->explanation,
            'og_image' => $mcq->seo->og_image ? asset($mcq->seo->og_image) : asset('assets/images/og-main.png'),
            'canonical' => $canonical,
        ];
    }

    public static function searchSeo(string $query): array
    {
        if ($query) {
            return [
                'title' => 'Search results for "' . $query . '" | PakQuiz',
                'description' => 'Search results for "' . $query . '" on PakQuiz – MCQs, practice papers, and subjects for FPSC, PPSC, NTS, CSS & PMS exam preparation.',
                'keywords' => $query . ', MCQs, Preparation, Jobs',
                'og_title' => 'Search results for "' . $query . '" | PakQuiz',
                'og_description' => 'Search results for "' . $query . '" on PakQuiz – MCQs, practice papers, and subjects for FPSC, PPSC, NTS, CSS & PMS exam preparation.',
                'og_image' => asset('assets/images/og-main.png'),
                'canonical' => url('/search') . '?q=' . urlencode($query),
            ];
        }
        else
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
