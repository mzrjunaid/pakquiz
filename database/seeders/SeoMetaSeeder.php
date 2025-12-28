<?php

namespace Database\Seeders;

use App\Models\Mcq;
use App\Models\Paper;
use App\Models\SeoMeta;
use App\Models\Subject;
use App\Models\TestingService;
use App\Models\Topic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SeoMetaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Attach SEO to MCQs
        Mcq::all()->each(function ($mcq) {
            SeoMeta::factory()->forMcq($mcq)->create();
        });

        // Attach SEO to Papers
        Paper::all()->each(function ($paper) {
            SeoMeta::factory()->forPaper($paper)->create();
        });

        // Attach SEO to Subjects
        Subject::all()->each(function ($subject) {
            SeoMeta::factory()->forSubject($subject)->create();
        });

        // Attach SEO to Topics
        Topic::all()->each(function ($topic) {
            SeoMeta::factory()->forTopic($topic)->create();
        });


        // Attach SEO to Testing Services
        TestingService::all()->each(function ($testingService) {
            SeoMeta::factory()->forTestingService($testingService)->create();
        });
    }
}
