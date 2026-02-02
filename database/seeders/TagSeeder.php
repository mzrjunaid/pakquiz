<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tag;
use Illuminate\Support\Str;

class TagSeeder extends Seeder
{
    public function run(): void
    {
        $tags = [
            // Exam Boards / Testing Services
            'FPSC',
            'PPSC',
            'NTS',
            'PTS',
            'NJP',
            'KPPSC',
            'BPSC',
            'SPSC',

            // Job Types
            'Government Jobs',
            'Private Jobs',
            'Bank Jobs',
            'Teaching Jobs',
            'Engineering Jobs',
            'Medical Jobs',
            'Administrative Jobs',
            'Clerical Jobs',
            'Technical Jobs',
            'Defense Jobs',
            'Security Jobs',
            'Other Jobs',

            // Exam Types
            'Entry Tests',
            'Recruitment Tests',
            'Promotional Exams',
            'Scholarship Exams',

            // General Keywords
            'Pakistan',
            'Career',
            'MCQs',
            'Past Papers',
            'Online Tests',
            'Practice Tests',
            'Exam Preparation',
            'Job Preparation',
            'Study Material',
            'Interview Preparation',
            'Competitive Exams',
            'Academic Exams',
            'Professional Exams',
            'Entrance Exams',
            'Quizzes',
            'Mock Tests',


            // Subjects / Common Test Topics
            'Mathematics',
            'English',
            'Urdu',
            'General Knowledge',
            'Current Affairs',
            'Physics',
            'Chemistry',
            'Biology',
            'Computer Science',
            'Pakistan Studies',
            'Islamic Studies',
            'Economics',
            'Statistics',
            'Law',
            'History',
            'Geography',
            'Political Science',
            'Sociology',
            'Psychology',
            'Business Studies',

            // Departments / Government Bodies
            'Education Department',
            'Health Department',
            'Police Department',
            'Railway Department',
            'Civil Services',
            'Judiciary',
            'Defense',
            'Public Sector Organizations',

            // Other Useful Tags
            'Test Series',
            'Mock Test',
            'Past MCQs',
            'Exam Papers',
            'Solved Papers',
            'Free MCQs',
            'Premium MCQs',
            'Paid MCQs',

        ];


        foreach ($tags as $tag) {
            Tag::firstOrCreate(['name' => $tag], ['slug' => Str::slug($tag)]);
        }
    }
}
