<?php

namespace App\Services\Seo;

use App\Services\Seo\Updates\SubjectSeoUpdate;
use App\Services\Seo\Updates\TopicSeoUpdate;
use App\Services\Seo\Updates\PaperSeoUpdate;
use App\Services\Seo\Updates\TestingServiceSeoUpdate;
use App\Services\Seo\Updates\McqSeoUpdate;
use App\Services\Seo\Updates\PageSeoUpdate;

class SeoUpdateRunner
{
    /**
     * Run all SEO updates in the recommended order
     */
    public function run(): void
    {
        // 1️⃣ Update Testing Services first (independent)
        app(TestingServiceSeoUpdate::class)->handle();

        // 2️⃣ Update Subjects
        app(SubjectSeoUpdate::class)->handle();

        // 3️⃣ Update Papers
        app(PaperSeoUpdate::class)->handle();

        // 4️⃣ Update Topics
        app(TopicSeoUpdate::class)->handle();

        // 5️⃣ Update MCQs (depends on papers, topics, subjects)
        app(McqSeoUpdate::class)->handle();

        app(PageSeoUpdate::class)->handle();
    }
}
