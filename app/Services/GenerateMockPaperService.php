<?php

namespace App\Services;

use App\Models\Mcq;
use App\Models\Paper;
use Exception;
use Illuminate\Support\Facades\DB;

class GenerateMockPaperService
{
    public function generate(Paper $paper): void
    {
        if ($paper->type !== 'mock') {
            return;
        }

        DB::transaction(function () use ($paper) {

            $paper->mockPaperMcqs()->detach();

            $mcqIds = collect();

            foreach ($paper->syllabus as $syllabus) {
                $availableCount = Mcq::query()
                    ->where('subject_id', $syllabus->subject_id)
                    ->where('is_active', true)
                    ->count();

                if ($availableCount < $syllabus->question_count) {
                    throw new Exception("Not enough MCQs available for subject ID {$syllabus->subject_id}");
                }

                $ids = Mcq::query()
                    ->where('subject_id', $syllabus->subject_id)
                    ->where('is_active', true)
                    ->inRandomOrder()
                    ->limit($syllabus->question_count)
                    ->pluck('id');

                $mcqIds = $mcqIds->concat($ids);
            }

            $mcqIds = $mcqIds->shuffle()->values();

            $attachData = $mcqIds->mapWithKeys(function ($mcqId, $index) {
                    return [
                    $mcqId => ['position' => $index + 1],
                    ];
                }
                )->toArray();

                $paper->mockPaperMcqs()->attach($attachData);
            });
    }
}