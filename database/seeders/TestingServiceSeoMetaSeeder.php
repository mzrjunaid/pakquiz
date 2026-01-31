<?php

namespace Database\Seeders;

use App\Models\TestingService;
use App\Models\SeoMeta;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TestingServiceSeoMetaSeeder extends Seeder
{


    public function run(): void
    {
        TestingService::query()
            ->select('id', 'name')
            ->where('id', '!=', 0) // Skip N/A
            ->chunkById(20, function ($services) {

                foreach ($services as $service) {

                    // Defensive skip
                    if (
                        Str::contains(
                            Str::lower($service->name),
                            ['n/a']
                        )
                    ) {
                        continue;
                    }

                    $serviceName = trim($service->name);

                    /*
                |-------------------------------------------------------------
                | MCQ COUNT (DB-level, memory safe)
                |-------------------------------------------------------------
                */
                    $mcqCount = \App\Models\Mcq::whereHas('paper', function ($q) use ($service) {
                        $q->where('testing_service_id', $service->id);
                    })->count();

                    if ($mcqCount === 0) {
                        continue;
                    }

                    /*
                |-------------------------------------------------------------
                | SUBJECTS (LIMITED, DB-level)
                |-------------------------------------------------------------
                */


                    $subjects = \App\Models\Subject::whereHas('mcqs.paper', function ($q) use ($service) {
                        $q->where('testing_service_id', $service->id);
                    })
                        ->pluck('name')
                        ->filter(fn($name) => $this->isValidSubject($name)) // remove N/A, NA, etc
                        ->unique()
                        ->take(3)
                        ->values();

                    /*
                |-------------------------------------------------------------
                | META TITLE
                |-------------------------------------------------------------
                */
                    $title = Str::limit(
                        "{$serviceName} MCQs | Past Papers & Online Tests",
                        60
                    );

                    /*
                |-------------------------------------------------------------
                | META DESCRIPTION
                |-------------------------------------------------------------
                */
                    $descriptionParts = [
                        "Prepare for {$serviceName} exams with solved MCQs and past papers.",
                        "{$mcqCount}+ important MCQs included.",
                    ];

                    if ($subjects->isNotEmpty()) {
                        $descriptionParts[] =
                            "Subjects include " . $subjects->implode(', ') . ".";
                    }

                    $descriptionParts[] =
                        "Practice online tests for latest {$serviceName} jobs.";

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
                        $serviceName,
                        "{$serviceName} MCQs",
                        "{$serviceName} Past Papers",
                        "PAKQuiz",
                        'Online Test',
                        'Solved MCQs',
                        'Pakistan Jobs',
                        'Competitive Exams',
                        ...$subjects->toArray(),
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

                    /*
                |-------------------------------------------------------------
                | SAVE / UPDATE
                |-------------------------------------------------------------
                */
                    SeoMeta::updateOrCreate(
                        [
                            'page_type' => TestingService::class,
                            'page_id'   => $service->id,
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

                // Force memory cleanup
                unset($services);
            });
    }

    private function isValidSubject($name)
    {
        $invalid = ['n/a', 'na', '-', 'none'];
        return $name && !in_array(Str::lower(trim($name)), $invalid);
    }
}
