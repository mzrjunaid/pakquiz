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
                'ad_number' => '04/2026',
                'closing_date' => now()->addDays(15),
                'pdf_url' => 'https://www.ppsc.gop.pk/Adds/AdvNo042026.pdf',
                'description' => 'Recruitment for the post of Assistant in Punjab.',
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