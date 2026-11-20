<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\Keyword;

class PageSeoMetaSeeder extends Seeder
{
    public function run(): void
    {
        $homePage = Page::firstOrCreate(
            ['key' => 'home'],
            ['title' => 'Home']
        );

        $seo = $homePage->seo()->updateOrCreate(
            [],
            [
                'title'       => 'PAKQUIZ – AI Powered Online MCQs for FPSC, PPSC, NTS & Job Exams',
                'description' => 'Prepare government and private job exams in Pakistan with subject-wise MCQs, past papers, and online practice tests.',
                'keywords'    => 'PAKQUIZ, FPSC MCQs, PPSC MCQs, NTS MCQs, Pakistan job tests, Online MCQs',
            ]
        );
    }
}
