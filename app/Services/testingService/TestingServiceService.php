<?php

namespace App\Services\testingService;

use App\Models\TestingService;
use App\Models\User;
use App\Services\ImageUploadService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class TestingServiceService
{

    protected ImageUploadService $imageUploadService;

    public function __construct(ImageUploadService $imageUploadService)
    {
        $this->imageUploadService = $imageUploadService;
    }

    public function stats(): array
    {
        return Cache::remember('testing_service_stats', now()->addMinutes(10), function () {

            // Top creator query
            $topCreator = TestingService::query()
                ->select('created_by', DB::raw('COUNT(*) as total'))
                ->groupBy('created_by')
                ->orderByDesc('total')
                ->first();

            $topCreatorData = null;
            if ($topCreator) {
                $user = User::find($topCreator['created_by']);
                if ($user) {
                    $topCreatorData = [
                        'id' => $user->id,
                        'name' => $user->name,
                        'total_entries' => $topCreator['total'],
                    ];
                }
            }

            return [
                'total' => TestingService::query()->count(),
                'today' => TestingService::query()->whereDate('created_at', today())->count(),
                'this_week' => TestingService::query()->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count(),
                'top_creator' => $topCreatorData,
            ];
        });
    }

    public function updateTestingService(
        array $validated,
        TestingService $testingService,
        array $seoData,
        ?UploadedFile $seoImage,
        array $tagIds,
        array $keywordIds
    ) {
        return DB::transaction(function () use ($validated, $testingService, $seoData, $seoImage, $tagIds, $keywordIds) {

            $validated['updated_by'] = Auth::id();

            $testingService->update($validated);

            $seo = $testingService->seo;

            $ogImagePath = $this->imageUploadService->uploadImage(
                $seoImage,
                'assets/images/testing_services',
                $testingService,
                $seo
            );

            if ($ogImagePath) {
                $seoData['og_image'] = $ogImagePath;
            }

            $seoData['updated_by'] = Auth::id();

            if ($seo) {
                $seo->update($seoData);
            } else {
                $testingService->seo()->create($seoData);
            }

            $testingService->tags()->sync($tagIds);
            $testingService->keywords()->sync($keywordIds);

            $this->clearCache();

            return $testingService->fresh([
                'seo',
                'tags',
                'keywords'
            ]);
        });
    }


    public function createTestingService(
        array $testingService,
        array $seoData,
        ?UploadedFile $seoImage,
        array $tagIds,
        array $keywordIds
    ) {
        return DB::transaction(function () use ($testingService, $seoData, $seoImage, $tagIds, $keywordIds) {
            $testingService['created_by'] = Auth::id();
            $testingService['created_at'] = now();
            $testingService['updated_at'] = now();

            $testingService = TestingService::create($testingService);

            $seo = $testingService->seo;

            $ogImagePath = $this->imageUploadService->uploadImage(
                $seoImage,
                'assets/images/testing_services',
                $testingService,
                $seo
            );

            if ($ogImagePath) {
                $seoData['og_image'] = $ogImagePath;
            }

            $seoData['updated_by'] = Auth::id();

            $testingService->seo()->create($seoData);

            $testingService->tags()->sync($tagIds);
            $testingService->keywords()->sync($keywordIds);

            $this->clearCache();

            return $testingService->fresh([
                'seo',
                'tags',
                'keywords'
            ]);
        });
    }

    public function clearCache()
    {
        Cache::forget('testing_service_stats');
    }
}
