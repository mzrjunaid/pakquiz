<?php

namespace App\Services\Subject;

use App\Models\Subject;
use App\Models\User;
use App\Services\ImageUploadService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class SubjectService
{

    protected ImageUploadService $imageUploadService;

    public function __construct(ImageUploadService $imageUploadService)
    {
        $this->imageUploadService = $imageUploadService;
    }


    public function stats(): array
    {
        return Cache::remember('subject_stats', now()->addMinutes(10), function () {

            // Top creator query
            $topCreator = Subject::query()
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
                'total' => Subject::query()->count(),
                'today' => Subject::query()->whereDate('created_at', today())->count(),
                'this_week' => Subject::query()->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count(),
                'top_creator' => $topCreatorData,
            ];
        });
    }

    public function updateSubject(
        array $validated,
        Subject $subject,
        array $seoData,
        ?UploadedFile $seoImage,
        array $keywordIds,
        array $tagIds)
    {

        return DB::transaction(function () use ($validated, $subject, $seoData, $seoImage, $keywordIds, $tagIds) {
            $validated['updated_by'] = Auth::id();
            $validated['updated_at'] = now();

            $subject->update($validated);

            $seo = $subject->seo;

            $ogImagePath = $this->imageUploadService->uploadImage(
                $seoImage,
                'assets/images/subjects',
                $subject,
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
                $subject->seo()->create($seoData);
                // dd('here');
            }

            $subject->tags()->sync($tagIds);
            $subject->keywords()->sync($keywordIds);

            $this->clearCache();

            return $subject;
        });
    }

    public function createSubject(array $data, array $seoData, ?UploadedFile $seoImage, array $keywordIds)
    {
        return DB::transaction(function () use ($data, $seoData, $seoImage, $keywordIds) {
            $data['created_by'] = Auth::id();
            $data['created_at'] = now();
            $data['updated_at'] = now();

            $subject = Subject::create($data);

            $seoData['subject_id'] = $subject->id;
            $seoData['created_by'] = Auth::id();
            $seoData['created_at'] = now();
            $seoData['updated_at'] = now();

            $ogImagePath = $this->imageUploadService->uploadImage(
                $seoImage,
                'assets/images/subjects',
                $subject,
                null
            );

            $seoData['og_image'] = $ogImagePath;

            $subject->seo()->create($seoData);

            $subject->keywords()->sync($keywordIds);

            $this->clearCache();

            return $subject;
        });
    }
    public function clearCache()
    {
        Cache::forget('subject_stats');
    }
}
