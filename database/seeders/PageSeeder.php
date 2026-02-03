<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Page;

class PageSeeder extends Seeder
{
    public function run(): void
    {
        $pages = [

            'home' => [
                'title' => 'PAKQUIZ – Online MCQs, Past Papers & Test Preparation in Pakistan',
                'description' => 'PAKQUIZ is Pakistan’s leading online quiz and test preparation platform. Practice MCQs, past papers, and mock tests for FPSC, PPSC, NTS, CSS, PMS, and academic exams.',
                'keywords' => 'PAKQUIZ, Pakistan MCQs, online quiz Pakistan, FPSC preparation, PPSC preparation, NTS preparation, government jobs Pakistan, test preparation, solved MCQs, past papers'
            ],

            'mcqs' => [
                'title' => 'MCQs Practice – Subject Wise & Topic Wise Questions | PAKQUIZ',
                'description' => 'Practice thousands of subject-wise and topic-wise MCQs for government jobs and academic exams. Updated questions with correct answers on PAKQUIZ.',
                'keywords' => 'MCQs Pakistan, online MCQs, subject wise MCQs, topic wise MCQs, solved MCQs, practice MCQs, quiz questions'
            ],

            'papers' => [
                'title' => 'Past Papers & Practice Tests for Competitive Exams | PAKQUIZ',
                'description' => 'Explore solved past papers and practice tests for FPSC, PPSC, NTS, and other competitive exams in Pakistan.',
                'keywords' => 'past papers Pakistan, FPSC papers, PPSC papers, NTS papers, solved papers, competitive exams Pakistan'
            ],

            'subjects' => [
                'title' => 'Subjects & Topics for Exam Preparation | PAKQUIZ',
                'description' => 'Browse exam subjects and topics with well-structured MCQs to strengthen your concepts and improve exam performance.',
                'keywords' => 'exam subjects, test preparation subjects, general knowledge, current affairs, everyday science, English MCQs'
            ],

            'testing-services' => [
                'title' => 'Testing Services & Exam Preparation | PAKQUIZ',
                'description' => 'Prepare for FPSC, PPSC, NTS, CSS, PMS, and other testing services in Pakistan with updated MCQs and practice papers.',
                'keywords' => 'FPSC, PPSC, NTS, CSS, PMS, testing services Pakistan, exam preparation'
            ],

        ];

        foreach ($pages as $key => $data) {
            Page::updateOrCreate(
                ['key' => $key],
                [
                    'title'       => $data['title'],
                    'description' => $data['description'],
                    'keywords'    => $data['keywords'],
                ]
            );
        }
    }
}
