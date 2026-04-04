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
            ['slug' => 'punjab-enforcement-regulatory-authority'],
            ['name' => 'Punjab Enforcement Regulatory Authority']
        );

        // 2. Create some Subjects if they don't exist
        $subjects = [
            'IT & Network Operations' => '36',
            'DevOps' => '21',
            'Software Engineering & Programming' => '43',
        ];

        // 3. Create the Job Posting
        $job = JobPosting::updateOrCreate(
            ['slug' => 'system-support-officer-enforcement-station-2026'],
            [
                'title' => 'System Support Officer Enforcement Station Pakistan',
                'department_id' => $department->id,

                'minimum_qualification' => 'MS/MPhil or 16 years of education in Computer Science, Information Technology, Software Engineering, or related disciplines',
                'experience' => '2 Years',

                'scale' => 'SPPP-05',
                'total_posts' => 368,
                'max_age' => '30',
                'age_relaxation' => '5',
                'domicile' => 'Punjab',

                'closing_date' => '2026-06-30',
                'pdf_url' => 'https://jobs.punjab.gov.pk/PJP-Uploads/news_advertisements/1768542914_Screenshot%202026-01-16%20105450.png',
                'apply_url' => 'https://jobs.punjab.gov.pk//new_recruit/job_detail/system-support-officer-7',
                'description' => '<p>Apply online for <strong>System Support Officer Jobs 2026</strong> in <strong>Punjab Enforcement and Regulatory Authority (PERA)</strong> under the PERA Contractual Staff Project. PERA is hiring <strong>368 System Support Officers (SPPP-05)</strong> on a contract basis across multiple divisions and districts of Punjab including Lahore, Rawalpindi, Faisalabad, Gujranwala, Multan, Bahawalpur, Sargodha, Sahiwal, Chakwal, Dera Ghazi Khan, and Gujrat.</p>
                <p>This is an excellent opportunity for candidates with <strong>16 years of education in Computer Science, Information Technology, Software Engineering, or related disciplines</strong> and at least <strong>2 years of relevant experience</strong> in IT support, networking, software implementation, or software development. Selected candidates will be responsible for hardware and software troubleshooting, network support, IT infrastructure management, office administration, vendor coordination, financial and procurement record handling, official correspondence, and enforcement station support.</p>
                <p>Both male and female candidates having Punjab domicile from the advertised districts are eligible to apply. Candidates must have at least a <strong>First Division (60% or above)</strong> in the required qualification. The salary package is up to <strong>Rs. 170,000 per month</strong>, depending on the applicable SPPP-05 scale and benefits. The job was posted on 16 January 2026, and the last date to apply is 30 June 2026.</p>
                <p>If you are looking for the latest <strong>PERA Jobs 2026</strong>, <strong>Punjab Government IT Jobs</strong>, <strong>System Support Officer vacancies</strong>, or <strong>computer-based government jobs in Punjab</strong>, this vacancy offers a strong career opportunity in the public sector.</p>',
                'is_active' => true,
            ]
        );

        // 4. Create a Mock Paper for this Job
        $paper = Paper::updateOrCreate(
            ['slug' => 'system-support-officer-enforcement-station-2026-mock-test'],
            [
                'job_id' => $job->id,
                'department_id' => $department->id,
                'subject_id' => 1,
                'testing_service_id' => 6,
                'name' => 'Mock Test: System Support Officer Enforcement Station Pakistan 2026',
                'slug' => 'system-support-officer-enforcement-station-2026-mock-test',
                'type' => 'mock',
                'total_questions' => 70,
                'is_active' => true,
            ]
        );

        // 5. Create the Syllabus entries
        foreach ($subjects as $name => $percentage) {
            $subject = Subject::updateOrCreate(
                ['slug' => Str::slug($name) . '-mcqs'],
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