<?php

namespace Database\Seeders;

use App\Models\Mcq;
use App\Models\SeoMeta;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class McqsSeoMetaSeeder extends Seeder
{
    public function run(): void
    {
        Mcq::with(['options', 'subject', 'paper'])
            ->chunk(200, function ($mcqs) {

                foreach ($mcqs as $mcq) {

                    // 1️⃣ Get correct option
                    $correctOption = $mcq->options->firstWhere('is_correct', true);
                    if (! $correctOption) continue;

                    // 2️⃣ Clean up question & subject (remove "N/A MCQs – " prefix)
                    $question  = trim(str_replace('N/A MCQs – ', '', $mcq->question));
                    $mcqsubject = $mcq->subject?->id !== 0 ? trim(str_replace('N/A MCQs – ', '', $mcq->subject->name)) : null;
                    $paper      = $mcq->paper?->name ? trim(str_replace('N/A MCQs – ', '', $mcq->paper->name)) : null;

                    /*
                    |------------------------------------------------------------------
                    | META TITLE (≤ 60 chars)
                    | Format: Question – Subject MCQs | Paper
                    |------------------------------------------------------------------
                    */
                    $titleParts = [
                        Str::limit($question, 45, ''),
                        $mcqsubject ? "{$mcqsubject} MCQs" : null,
                        $paper ?: null,
                    ];

                    $title = Str::limit(
                        collect($titleParts)->filter()->implode(' – '),
                        60
                    );

                    /*
                    |------------------------------------------------------------------
                    | META DESCRIPTION (≤ 160 chars)
                    |------------------------------------------------------------------
                    */
                    $descriptionParts = [
                        $mcqsubject ? "Practice MCQ from {$mcqsubject}." : null,
                        Str::limit($question, 120),
                        "Correct answer: {$correctOption->option_text}.",
                    ];

                    if ($paper) {
                        $descriptionParts[] = "Important for {$paper} exams.";
                    }

                    $description = Str::limit(trim(implode(' ', array_filter($descriptionParts))), 160);

                    /*
                    |------------------------------------------------------------------
                    | KEYWORDS (clean & unique)
                    |------------------------------------------------------------------
                    */
                    $keywordsArray = [
                        $mcqsubject ?: null,
                        $paper ?: null,
                        'MCQs',
                        'Online Test',
                        'Past Papers',
                        'Mock Tests',
                        'Solved Papers',
                        'PakQuiz',
                        'Solved MCQs',
                        'Free MCQs',
                        'Practice Questions',
                        'Online MCQs',
                        $correctOption->option_text,
                    ];

                    $keywords = collect($keywordsArray)
                        ->filter()
                        ->map(fn($k) => Str::lower(trim($k)))
                        ->unique()
                        ->implode(', ');

                    /*
                    |------------------------------------------------------------------
                    | OPEN GRAPH (same but shorter)
                    |------------------------------------------------------------------
                    */
                    $ogTitle       = Str::limit($title, 60);
                    $ogDescription = Str::limit($description, 120);

                    /*
                    |------------------------------------------------------------------
                    | SAVE / UPDATE
                    |------------------------------------------------------------------
                    */
                    SeoMeta::updateOrCreate(
                        [
                            'page_type' => Mcq::class,
                            'page_id'   => $mcq->id,
                        ],
                        [
                            'title'          => $title,
                            'description'    => $description,
                            'keywords'       => $keywords,
                            'og_title'       => $ogTitle,
                            'og_description' => $ogDescription,
                            'og_image'       => null,
                        ]
                    );
                }
            });
    }
}
