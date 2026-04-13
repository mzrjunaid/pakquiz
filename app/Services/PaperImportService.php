<?php

namespace App\Services;

use App\Models\Department;
use App\Models\Subject;
use App\Models\Paper;
use App\Models\TestingService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Services\Seo\Updates\DepartmentSeoUpdate;
use App\Services\Seo\Updates\TestingServiceSeoUpdate;
use App\Services\Seo\Updates\SubjectSeoUpdate;
use App\Services\Seo\Updates\PaperSeoUpdate;

class PaperImportService
{
    public function importSingle(array $data): ?Paper
    {
        return DB::transaction(function () use ($data) {

            // 1️⃣ Check if MCQ already exists by slug → skip if exists
            if (!empty($data['slug']) && Paper::where('slug', $data['slug'])->exists()) {
                return null; // Skip duplicate
            }

            $department = Department::updateOrCreate(
            ['slug' => $data['department']['slug']],
            ['name' => $data['department']['name']]
            );

            $testing_service = TestingService::updateOrCreate(
            ['slug' => $data['testing_service']['slug']],
            ['name' => $data['testing_service']['name']]
            );

            // 2️⃣ Resolve relations
            $subject = Subject::updateOrCreate(
            ['slug' => $data['subject']['slug']],
            ['name' => $data['subject']['name'], 'is_active' => 1]
            );

            $user = Auth::user();

            // Generate slug safely
            $baseSlug = !empty($data['slug']) ? $data['slug'] : Str::slug($data['name']);
            $slug = $baseSlug;
            $dated = $data['paper_year'];

            // Ensure slug is unique
            while (Paper::where('slug', $slug)->exists()) {
                $slug = $baseSlug . '-' . $dated;
            }

            $paper = Paper::create([
                'name' => $data['name'],
                'slug' => $slug . '-mcqs',
                'description' => $data['description'],
                'schedule_at' => $data['schedule_at'],
                'paper_year' => $data['paper_year'],
                'is_active' => 1,
                'department_id' => $department->id,
                'subject_id' => $subject->id,
                'testing_service_id' => $testing_service->id,
                'created_by' => $user->id,
                'created_at' => now(),
            ]);


            $this->afterCreate($paper);

            return $paper;
        });
    }

    private function afterCreate(?Paper $paper): void
    {
        if (!$paper) {
            return;
        }

        $paper->loadMissing(['subject', 'department', 'testing_service']);

        if ($paper->subject) {
            app(SubjectSeoUpdate::class)->handleSingle($paper->subject->id);
        }
        if ($paper->department) {
            app(DepartmentSeoUpdate::class)->handleSingle($paper->department->id);
        }

        if ($paper->testing_service) {
            app(TestingServiceSeoUpdate::class)->handleSingle($paper->testing_service->id);
        }

        app(PaperSeoUpdate::class)->handleSingle($paper->id);

    }
}