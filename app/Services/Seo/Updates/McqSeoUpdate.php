<?php

namespace App\Services\Seo\Updates;

use App\Models\Mcq;
use App\Services\Seo\BaseSeoUpdate;
use Illuminate\Database\Eloquent\Builder;

class McqSeoUpdate extends BaseSeoUpdate
{
    /**
     * Return a type-safe Eloquent Builder
     *
     * @return Builder
     */
    protected function query(): Builder
    {
        $query = Mcq::query();

        // Only update MCQs without SEO or outdated SEO
        $query->where(function (Builder $q) {
            $q->whereDoesntHave('seo')
                ->orWhereHas('seo', function (Builder $q2) {
                    $q2->whereColumn('seo_meta.updated_at', '<', 'mcqs.updated_at');
                });
        });

        // Eager load all necessary relations
        $query->with([
            'subject:id,name',
            'paper:id,name,testing_service_id',
            'paper.testingService:id,name',
            'topic:id,name',
        ]);

        // Select only required columns
        $query->select('id', 'question', 'subject_id', 'paper_id', 'topic_id');

        return $query; // Eloquent\Builder
    }

    protected function seoData($mcq): array
    {
        $questionText = trim($mcq->question);
        $topicTitle = $mcq->topic?->name ?? '';
        $paperTitle = $mcq->paper?->name ?? '';
        $subjectName = $mcq->subject?->name ?? '';
        $serviceName = $mcq->paper?->testingService?->name ?? '';

        // Build SEO title
        $titleParts = array_filter([$questionText, $topicTitle, $paperTitle, $subjectName, $serviceName ? "{$serviceName} Past Papers" : null]);
        $seoTitle = implode(' | ', $titleParts);

        // Build SEO description
        $descParts = [];
        if ($subjectName != 'N/A' && $subjectName) {
            $descParts[] = "Prepare {$subjectName} exams";
        }
        if ($topicTitle) {
            $descParts[] = "Topic: {$topicTitle}";
        }
        if ($paperTitle) {
            $descParts[] = "Paper: {$paperTitle}";
        }
        if ($serviceName) {
            $descParts[] = "from {$serviceName} past papers";
        }
        $descParts[] = "Practice MCQs and exam-oriented questions online";
        $seoDescription = implode('. ', $descParts) . '.';

        // Build keywords
        $keywords = array_unique(array_filter(array_merge(
            [$questionText, $topicTitle, $paperTitle, $subjectName, $serviceName],
            [$questionText . ' MCQs', $topicTitle . ' MCQs', $paperTitle . ' MCQs', $subjectName . ' MCQs'],
            [$questionText . ' past papers', $topicTitle . ' past papers', $paperTitle . ' past papers'],
            ['MCQs practice', 'online test', 'PakQuiz']
        )));

        return [
            'title' => $seoTitle,
            'description' => $seoDescription,
            'keywords' => $keywords,
        ];
    }
}
