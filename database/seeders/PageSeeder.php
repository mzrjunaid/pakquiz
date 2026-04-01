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

            'departments' => [
                'title' => 'Government & Private Departments in Pakistan – Jobs, MCQs & Papers',
                'description' => 'Browse government and private departments in Pakistan including Punjab Police, Fisheries, Health, Education, WAPDA, FIA and more. Access department-wise MCQs, past papers and job test preparation materials.',
                'keywords' => 'Pakistan departments jobs, Punjab Police MCQs, Fisheries department jobs, government departments Pakistan, private departments Pakistan, department wise past papers, job test preparation Pakistan'
            ],

            'testing_services' => [
                'title' => 'Testing Services in Pakistan – FPSC, PPSC, NTS, CSS, PMS MCQs & Papers',
                'description' => 'Prepare for FPSC, PPSC, NTS, CSS, PMS and other testing services in Pakistan with updated MCQs, solved past papers, syllabus-based questions and practice tests.',
                'keywords' => 'FPSC MCQs, PPSC past papers, NTS solved papers, CSS preparation Pakistan, PMS exam MCQs, testing services Pakistan, competitive exam preparation'
            ],

            'subject' => [
                'title' => 'Exam Subjects & Topics for MCQs Practice',
                'description' => 'Explore exam subjects and detailed topics with structured MCQs to improve concepts and score higher in competitive exams.',
                'keywords' => 'exam subjects, MCQs subjects, general knowledge MCQs, current affairs MCQs, everyday science, English MCQs'
            ],

            'demo' => [
                'title' => 'Free Demo Tests for FPSC, PPSC, NTS & CSS Preparation',
                'description' => 'Try free demo MCQ tests for FPSC, PPSC, NTS, CSS and PMS exams. Experience PakQuiz practice system before full preparation.',
                'keywords' => 'PakQuiz, free demo tests, FPSC demo test, PPSC demo MCQs, NTS demo test, CSS demo preparation, online test demo PakQuiz'
            ],

            'jobs' => [

                'title' => 'Latest Govt Jobs in Pakistan '
                . date('Y')
                . ' – PPSC, FPSC & NTS | PakQuiz',

                'description' => 'Find latest government & private jobs in Pakistan '
                . date('Y')
                . '. Apply for FPSC, PPSC, SPSC, KPPSC, NTS, CSS, PMS, Pak Army, Navy, PAF, Police, FIA, Banking, Teaching & IT vacancies — with eligibility, last dates & free online mock tests for every job advertisement. Start your PPSC & FPSC preparation today with PakQuiz.',

                'keywords' => 'jobs in Pakistan '
                . date('Y')
                . ', government jobs Pakistan, latest jobs Pakistan today, FPSC jobs '
                . date('Y')
                . ', PPSC jobs '
                . date('Y')
                . ', SPSC jobs, KPPSC jobs, BPSC jobs, AJKPSC jobs, NTS jobs Pakistan, CSS jobs, PMS jobs, Pak Army jobs '
                . date('Y')
                . ', Pakistan Navy jobs, PAF jobs, police jobs Pakistan, FIA jobs, NAB jobs, teaching jobs Pakistan, banking jobs Pakistan, IT jobs Pakistan, engineering jobs Pakistan, health jobs Pakistan, private jobs Pakistan, government jobs 2026 Pakistan, today jobs Pakistan, latest vacancies Pakistan, job test preparation Pakistan, FPSC test preparation, PPSC test MCQs',
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
                'title' => $data['title'],
                'description' => $data['description'],
                'keywords' => $data['keywords'],
            ]
            );
        }
    }
}
