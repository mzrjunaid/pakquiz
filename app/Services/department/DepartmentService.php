<?php

namespace App\Services\department;

use App\Models\Department;
use App\Services\ImageUploadService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class DepartmentService
{
    protected ImageUploadService $imageUploadService;

    public function __construct(ImageUploadService $imageUploadService)
    {
        $this->imageUploadService = $imageUploadService;
    }

    public function stats(): array
    {
        return Cache::remember('department_stats', now()->addHours(1), function () {

            $counts = DB::table('departments')
                ->selectRaw('
                COUNT(*) as total,
                SUM(CASE WHEN DATE(created_at) = CURDATE() THEN 1 ELSE 0 END) as today,
                SUM(CASE WHEN created_at BETWEEN ? AND ? THEN 1 ELSE 0 END) as this_week
            ', [
                    now()->startOfWeek(),
                    now()->endOfWeek()
                ])
                ->first() ?? (object) [
                    'total' => 0,
                    'today' => 0,
                    'this_week' => 0,
                ];

            $topCreator = DB::table('departments')
                ->join('users', 'departments.created_by', '=', 'users.id')
                ->select(
                    'users.id',
                    'users.name',
                    DB::raw('COUNT(departments.id) as total_entries')
                )
                ->groupBy('users.id', 'users.name')
                ->orderByDesc('total_entries')
                ->first() ?? (object) [
                    'id' => null,
                    'name' => null,
                    'total_entries' => 0,
                ];

            return [
                'total' => (int) $counts->total,
                'today' => (int) $counts->today,
                'this_week' => (int) $counts->this_week,
                'top_creator' => $topCreator->id ? [
                    'id' => $topCreator->id,
                    'name' => $topCreator->name,
                    'total_entries' => (int) $topCreator->total_entries,
                ] : null,
            ];
        });
    }

    public function updateDepartment(
        array $validated,
        Department $department,
        array $seoData,
        ?UploadedFile $seoImage,
        array $keywordIds)
    {
        return DB::transaction(function () use ($validated, $department, $seoData, $seoImage, $keywordIds) {
            $validated['updated_by'] = Auth::id();
            $validated['updated_at'] = now();

            $department->update($validated);

            $seo = $department->seo;

            $ogImagePath = $this->imageUploadService->uploadImage(
                $seoImage,
                'assets/images/departments',
                $department,
                $seo
            );
            if ($ogImagePath !== null) {
                $seoData['og_image'] = $ogImagePath;
            } else {
                unset($seoData['og_image']);
            }
            $seoData['updated_by'] = Auth::id();
            $seoData['updated_at'] = now();

            if ($seo) {
                $seo->update($seoData);
            } else {
                $department->seo()->create($seoData);
            }

            $department->keywords()->sync($keywordIds);

            $this->clearCache();

            return $department;
        });
    }

    public function createDepartment(array $data, array $seoData, ?UploadedFile $seoImage, array $keywordIds)
    {
        return DB::transaction(function () use ($data, $seoData, $seoImage, $keywordIds) {
            $data['created_by'] = Auth::id();
            $data['created_at'] = now();
            $data['updated_at'] = now();

            $department = Department::create($data);

            $seoData['department_id'] = $department->id;
            $seoData['created_by'] = Auth::id();
            $seoData['created_at'] = now();
            $seoData['updated_at'] = now();

            $ogImagePath = $this->imageUploadService->uploadImage(
                $seoImage,
                'assets/images/departments',
                $department,
                null
            );

            $seoData['og_image'] = $ogImagePath;

            $department->seo()->create($seoData);

            $department->keywords()->sync($keywordIds);

            $this->clearCache();

            return $department;
        });
    }
    public function clearCache()
    {
        Cache::forget('department_stats');
    }
}
