<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\JobPosting;
use App\Models\Paper;
use App\Models\PaperSyllabus;
use App\Models\Subject;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class JobTestSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Create or Find a Department
        $department = Department::updateOrCreate(
        ['slug' => 'board-of-revenue'],
        ['name' => 'Board of Revenue Punjab']
        );

        // 2. Create some Subjects if they don't exist
        $subjects = [
            'General Knowledge' => 40,
            'English' => 30,
            'Islamiat' => 30,
        ];

        // 3. Create the Job Posting
        $job = JobPosting::updateOrCreate(
        ['slug' => 'assistant-board-of-revenue-2026'],
        [
            'title' => 'Assistant (BS-16)',
            'department_id' => $department->id,
            'testing_service_id' => 6,

            'minimum_qualification' => 'Bachelor\'s Degree in Computer Science or Information Technology',
            'experience' => 'Fresh',

            'scale' => 'BS-16',
            'total_posts' => 10,
            'max_age' => '25',
            'age_relaxation' => '5',
            'domicile' => 'Punjab',

            'ad_number' => '04/2026',
            'case_number' => '19-RG/2026',
            'closing_date' => now()->addDays(15),
            'pdf_url' => 'https://www.ppsc.gop.pk/Adds/Advt%20No-05-2026%2010-03-2026%20%20X7%20Version.pdf',
            'apply_url' => 'https://www.ppsc.gop.pk/jobs.aspx',
            'description' => 'Are you looking to kickstart your career with the Board of Revenue Punjab? The Punjab Public Service Commission (PPSC) has officially announced the recruitment for the position of Assistant (BS-16) under Advertisement No. 04/2026. This is an excellent opportunity for candidates with a Bachelor’s degree in Computer Science or IT. Below are the key eligibility criteria and application details for the Assistant (BS-16) position.',
            'is_active' => true,
        ]
        );

        // 4. Create a Mock Paper for this Job
        $paper = Paper::updateOrCreate(
        ['slug' => 'mock-test-assistant-bor-2026'],
        [
            'job_id' => $job->id,
            'department_id' => $department->id,
            'subject_id' => 23,
            'testing_service_id' => 6,
            'name' => 'Mock Test: Assistant (BoR)',
            'slug' => 'mock-test-assistant-bor-2026',
            'type' => 'mock',
            'total_questions' => 100, // The "Base" for our math
            'is_active' => true,
        ]
        );

        // 5. Create the Syllabus entries
        foreach ($subjects as $name => $percentage) {
            $subject = Subject::updateOrCreate(
            ['slug' => Str::slug($name)],
            [
                'name' => $name,
                'is_active' => true,
            ]
            );

            PaperSyllabus::updateOrCreate(
            [
                'paper_id' => $paper->id,
                'subject_id' => $subject->id,
            ],
            [
                'percentage' => $percentage,
            ]
            );
        }
    }
}