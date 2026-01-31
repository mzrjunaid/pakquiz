<?php

namespace Database\Seeders;

use App\Models\Topic;
use App\Models\SeoMeta;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TopicSeoMetaSeeder extends Seeder
{
    public function run(): void
    {
        Topic::with(['mcqs.subject', 'mcqs.paper'])
            ->where('id', '!=', 0) // ✅ Skip N/A row
            ->chunk(100, function ($topics) {

                foreach ($topics as $topic) {

                    // Extra safety for N/A topics
                    if (
                        Str::contains(
                            Str::lower($topic->name),
                            ['n/a', 'na mcq']
                        )
                    ) {
                        continue;
                    }

                    if ($topic->mcqs->isEmpty()) {
                        continue;
                    }

                    $topicName = trim(
                        str_replace('N/A MCQs – ', '', $topic->name)
                    );

                    $mcqCount = $topic->mcqs->count();

                    // Subject (normally one, but stay safe)
                    $subjectName = $topic->mcqs
                        ->pluck('subject.name')
                        ->filter()
                        ->unique()
                        ->first();

                    // Related papers (limit for SEO)
                    $papers = $topic->mcqs
                        ->pluck('paper.name')
                        ->filter()
                        ->unique()
                        ->take(2)
                        ->values();

                    /*
                    |-------------------------------------------------------------
                    | META TITLE
                    |-------------------------------------------------------------
                    */
                    $titleParts = [
                        "{$topicName} MCQs",
                        $subjectName,
                    ];

                    $title = Str::limit(
                        collect($titleParts)->filter()->implode(' | '),
                        60
                    );

                    /*
                    |-------------------------------------------------------------
                    | META DESCRIPTION
                    |-------------------------------------------------------------
                    */
                    $descriptionParts = [
                        "Practice {$topicName} MCQs",
                        $subjectName ? "from {$subjectName}." : '.',
                        "{$mcqCount}+ solved MCQs included.",
                    ];

                    if ($papers->isNotEmpty()) {
                        $descriptionParts[] =
                            "Important for " . $papers->implode(', ') . " exams.";
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
                        $topicName,
                        "{$topicName} MCQs",
                        $subjectName,
                        'Solved MCQs',
                        'Online Test',
                        'Past Papers',
                        'Pak MCQs',
                        ...$papers->toArray(),
                    ])
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
                            'page_type' => Topic::class,
                            'page_id'   => $topic->id,
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
