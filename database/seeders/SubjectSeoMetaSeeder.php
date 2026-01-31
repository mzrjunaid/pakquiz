<?php

namespace Database\Seeders;

use App\Models\Subject;
use App\Models\SeoMeta;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SubjectSeoMetaSeeder extends Seeder
{
    public function run(): void
    {
        Subject::with(['mcqs.paper'])
            ->where('id', '!=', 0) // ✅ Skip N/A subject
            ->chunk(100, function ($subjects) {

                foreach ($subjects as $subject) {

                    // Extra safety (name-based)
                    if (
                        Str::contains(
                            Str::lower($subject->name),
                            ['n/a', 'na mcq']
                        )
                    ) {
                        continue;
                    }

                    if ($subject->mcqs->isEmpty()) {
                        continue;
                    }

                    $subjectName = trim(
                        str_replace('N/A MCQs – ', '', $subject->name)
                    );

                    $mcqCount = $subject->mcqs->count();

                    $papers = $subject->mcqs
                        ->pluck('paper.name')
                        ->filter()
                        ->unique()
                        ->take(3)
                        ->values();

                    /*
                    |-------------------------------------------------------------
                    | META TITLE
                    |-------------------------------------------------------------
                    */
                    $title = Str::limit(
                        "{$subjectName} MCQs | Online Tests & Past Papers",
                        60
                    );

                    /*
                    |-------------------------------------------------------------
                    | META DESCRIPTION
                    |-------------------------------------------------------------
                    */
                    $descriptionParts = [
                        "Practice {$subjectName} MCQs with solved answers.",
                        "{$mcqCount}+ updated MCQs available.",
                    ];

                    if ($papers->isNotEmpty()) {
                        $descriptionParts[] =
                            "Included in " . $papers->implode(', ') . " exams.";
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
                    $keywords = collect([
                        $subjectName,
                        "{$subjectName} MCQs",
                        'Solved MCQs',
                        'Online Test',
                        'Past Papers',
                        'Competitive Exams',
                        'Pak MCQs',
                        ...$papers->toArray(),
                    ])
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

                    SeoMeta::updateOrCreate(
                        [
                            'page_type' => Subject::class,
                            'page_id'   => $subject->id,
                        ],
                        [
                            'title'       => $title,
                            'description' => $description,
                            'keywords'    => $keywords,
                            'og_title'       => $ogTitle,
                            'og_description' => $ogDescription,
                            'og_image'       => null,
                        ]
                    );
                }
            });
    }
}
