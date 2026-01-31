<?php

namespace Database\Seeders;

use App\Models\Paper;
use App\Models\SeoMeta;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PaperSeoMetaSeeder extends Seeder
{
    public function run(): void
    {
        Paper::with(['mcqs.subject'])
            ->chunk(100, function ($papers) {

                foreach ($papers as $paper) {

                    if ($paper->mcqs->isEmpty()) {
                        continue;
                    }

                    $paperName = trim(str_replace('N/A MCQs – ', '', $paper->name));

                    // Collect unique subjects
                    $subjects = $paper->mcqs
                        ->pluck('subject.name')
                        ->filter()
                        ->unique()
                        ->values();

                    $subjectText = $subjects->take(3)->implode(', ');
                    $mcqCount    = $paper->mcqs->count();

                    /*
                    |-------------------------------------------------------------
                    | META TITLE
                    |-------------------------------------------------------------
                    */
                    $title = Str::limit(
                        "{$paperName} MCQs | Past Papers & Online Tests",
                        60
                    );

                    /*
                    |-------------------------------------------------------------
                    | META DESCRIPTION
                    |-------------------------------------------------------------
                    */
                    $descriptionParts = [
                        "Practice {$paperName} MCQs with solved answers.",
                        "{$mcqCount}+ important MCQs included.",
                    ];

                    if ($subjectText) {
                        $descriptionParts[] = "Subjects: {$subjectText}.";
                    }

                    $descriptionParts[] = "Free online test preparation.";

                    $description = Str::limit(
                        implode(' ', $descriptionParts),
                        160
                    );

                    /*
                    |-------------------------------------------------------------
                    | KEYWORDS
                    |-------------------------------------------------------------
                    */
                    $keywordsArray = [
                        $paperName,
                        "{$paperName} MCQs",
                        'Past Papers',
                        'Online Test',
                        'Solved MCQs',
                        'PakQuiz',
                        'Competitive Exams',
                        'PPSC',
                        'FPSC',
                        'NTS',
                        'CSS',
                        ...$subjects->toArray(),
                    ];

                    $keywords = collect($keywordsArray)
                        ->filter()
                        ->map(fn($k) => Str::lower(trim($k)))
                        ->unique()
                        ->implode(', ');

                    /*
                    |-------------------------------------------------------------
                    | OPEN GRAPH
                    |-------------------------------------------------------------
                    */
                    $ogTitle       = Str::limit($title, 60);
                    $ogDescription = Str::limit($description, 120);

                    /*
                    |-------------------------------------------------------------
                    | SAVE / UPDATE
                    |-------------------------------------------------------------
                    */
                    SeoMeta::updateOrCreate(
                        [
                            'page_type' => Paper::class,
                            'page_id'   => $paper->id,
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
