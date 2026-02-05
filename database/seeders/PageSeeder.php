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
                'title' => 'PAKQUIZ – Online MCQs, Past Papers & Exam Preparation in Pakistan',
                'description' => 'PAKQUIZ is Pakistan’s trusted exam preparation platform. Practice updated MCQs, solved past papers, and mock tests for FPSC, PPSC, NTS, CSS, PMS, and academic exams.',
                'keywords' => 'PAKQUIZ, online MCQs Pakistan, past papers Pakistan, FPSC preparation, PPSC preparation, NTS preparation, CSS MCQs, government jobs test preparation'
            ],

            'mcqs' => [
                'title' => 'MCQs Practice Online – Subject & Topic Wise Questions',
                'description' => 'Practice thousands of subject-wise and topic-wise MCQs for government jobs and competitive exams in Pakistan. Verified answers and updated questions.',
                'keywords' => 'MCQs Pakistan, online MCQs, subject wise MCQs, topic wise MCQs, solved MCQs, practice questions, competitive exams'
            ],

            'papers' => [
                'title' => 'Solved Past Papers & Practice Tests for Competitive Exams',
                'description' => 'Access solved past papers and practice tests for FPSC, PPSC, NTS, CSS, PMS, and other competitive exams in Pakistan.',
                'keywords' => 'past papers Pakistan, FPSC past papers, PPSC papers, NTS papers, solved papers, competitive exams preparation'
            ],

            'subjects' => [
                'title' => 'Exam Subjects & Topics for MCQs Practice',
                'description' => 'Explore exam subjects and detailed topics with structured MCQs to improve concepts and score higher in competitive exams.',
                'keywords' => 'exam subjects, MCQs subjects, general knowledge MCQs, current affairs MCQs, everyday science, English MCQs'
            ],

            'testingServices' => [
                'title' => 'Testing Services Preparation – FPSC, PPSC, NTS, CSS',
                'description' => 'Prepare for FPSC, PPSC, NTS, CSS, PMS, and other testing services in Pakistan with updated MCQs and solved papers.',
                'keywords' => 'testing services Pakistan, FPSC, PPSC, NTS, CSS, PMS, government testing services'
            ],

            /* -------------------- TRUST & SUPPORT PAGES -------------------- */

            'helpCentre' => [
                'title' => 'Help Centre & FAQs',
                'description' => 'Find answers to common questions about MCQs practice, past papers, accounts, and exam preparation on PAKQUIZ.',
                'keywords' => 'PAKQUIZ help centre, FAQs, exam preparation help, MCQs support'
            ],

            'aboutUs' => [
                'title' => 'About PAKQUIZ – Pakistan’s Online Exam Preparation Platform',
                'description' => 'Learn about PAKQUIZ, our mission, and how we help students and job seekers prepare for competitive exams in Pakistan.',
                'keywords' => 'about PAKQUIZ, exam preparation platform Pakistan, online MCQs website'
            ],

            'contactUs' => [
                'title' => 'Contact Us',
                'description' => 'Contact the PAKQUIZ team for support, feedback, or partnership inquiries related to MCQs and exam preparation.',
                'keywords' => 'contact PAKQUIZ, support, exam preparation contact'
            ],

            'privacyPolicy' => [
                'title' => 'Privacy Policy',
                'description' => 'Read how PAKQUIZ collects, uses, and protects your personal information while using our exam preparation services.',
                'keywords' => 'privacy policy, data protection, user privacy, PAKQUIZ privacy'
            ],

            'termsOfService' => [
                'title' => 'Terms of Service',
                'description' => 'Review the terms and conditions for using PAKQUIZ’s MCQs, past papers, and exam preparation services.',
                'keywords' => 'terms of service, terms and conditions, PAKQUIZ terms'
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
