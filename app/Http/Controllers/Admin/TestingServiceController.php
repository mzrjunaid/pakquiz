<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\TestingServiceResource;
use App\Models\Keyword;
use App\Models\Tag;
use App\Models\TestingService;
use App\Services\testingService\TestingServiceService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class TestingServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, CommonFilter $filter, TestingServiceService $service)
    {

        $perPage = min(
            max((int) $request->input('per_page', 10), 5),
            100
        );

        $sortableColumns = ['id', 'name', 'short_name', 'created_at'];

        $sortBy = in_array(
            $request->input('sort_by'),
            $sortableColumns,
            true
        )
            ? $request->input('sort_by')
            : 'created_at';

        $sortOrder = $request->input('sort_order') === 'asc' ? 'asc' : 'desc';


        $services = $filter
            ->apply(TestingService::query()->with('createdBy'))
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/services/index', [
            'testingServices' => TestingServiceResource::collection($services),
            'filters' => $request->only([
                'name',
                'short_name',
                'created_by',
                'per_page',
                'sort_by',
                'sort_order',
            ]),
            'stats' => $service->stats(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $availableTags = Tag::query()
            ->select('id', 'name', 'slug')
            ->orderBy('name')
            ->get()
            ->map(fn ($tag) => [
                'value' => $tag->id,
                'label' => $tag->name,
                'slug' => $tag->slug,
            ]);

        return Inertia::render('admin/services/create', [
            'availableTags' => $availableTags,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, TestingServiceService $service)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'short_name' => 'required|string|max:255',
            'description' => 'required|string',
            'seo_title' => 'required|string|max:255',
            'seo_description' => 'required|string|max:255',
            'og_title' => 'required|string|max:255',
            'og_description' => 'required|string|max:255',
            'keywords' => 'nullable|string|max:500',
            'tags' => 'nullable|array',
            'tags.*' => 'nullable|string',
        ]);

        $data = [
            'name' => $validated['name'],
            'slug' => $validated['slug'],
            'short_name' => $validated['short_name'],
            'description' => $validated['description'] ?? null,
        ];


        $seoImage = null;
        if ($request->hasFile('seo_og_image')) {
            $request->validate([
                'seo_og_image' => 'nullable|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
            ]);
            $seoImage = $request->file('seo_og_image');
        }

        $seoData = [
            'title' => $validated['seo_title'] ?? null,
            'description' => $validated['seo_description'] ?? null,
            'og_title' => $validated['og_title'] ?? null,
            'og_description' => $validated['og_description'] ?? null,
        ];

        $keywordIds = [];
        if (! empty($validated['keywords'])) {
            $keywords = explode(',', $validated['keywords']);
            foreach ($keywords as $keyword) {
                $keyword = trim($keyword);
                $keyword = Keyword::firstOrCreate([
                    'keyword' => $keyword,
                ]);
                $keywordIds[] = $keyword->id;
            }
        }

        $tagIds = collect($validated['tags'] ?? [])
            ->map(fn ($slug) => Str::slug(trim($slug)))
            ->filter()
            ->unique()
            ->map(function ($slug) {

                return Tag::firstOrCreate(
                    ['slug' => $slug],
                    ['name' => Str::headline($slug)]
                )->id;
            })
            ->toArray();

        $testingService = $service->createTestingService($data, $seoData, $seoImage, $tagIds, $keywordIds);

        return redirect()
            ->route('admin.testing-services.show', $testingService)
            ->with('success', 'Testing Service created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('admin/services/show', []);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TestingService $testingService)
    {
        $testingService->load([
            'seo',
            'keywords:id,keyword',
            'tags:id,name,slug',
        ]);

        $availableTags = Tag::query()
            ->select('id', 'name', 'slug')
            ->orderBy('name')
            ->get()
            ->map(fn ($tag) => [
                'value' => $tag->id,
                'label' => $tag->name,
                'slug' => $tag->slug,
            ]);

        return Inertia::render('admin/services/edit', [
            'testingService' => [
                'id' => $testingService->id,
                'slug' => $testingService->slug,
                'name' => $testingService->name,
                'short_name' => $testingService->short_name,
                'description' => $testingService->description,
            ],

            'seoData' => $testingService->seo,

            'keywords' => $testingService->keywords
                ->pluck('keyword')
                ->implode(','),

            'selectedTagSlugs' => $testingService->tags->pluck('slug')->values(),

            'availableTags' => $availableTags,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TestingService $testingService, TestingServiceService $service)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'short_name' => 'required|string|max:255',
            'description' => 'required|string',
            'seo_title' => 'required|string|max:255',
            'seo_description' => 'required|string|max:255',
            'og_title' => 'required|string|max:255',
            'og_description' => 'required|string|max:255',
            'keywords' => 'nullable|string|max:500',
            'tags' => 'nullable|array',
            'tags.*' => 'nullable|string',
        ]);

        $data = [
            'name' => $validated['name'],
            'slug' => $validated['slug'],
            'short_name' => $validated['short_name'],
            'description' => $validated['description'] ?? null,
        ];


        $seoImage = null;
        if ($request->hasFile('seo_og_image')) {
            $request->validate([
                'seo_og_image' => 'nullable|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
            ]);
            $seoImage = $request->file('seo_og_image');
        }

        $seoData = [
            'title' => $validated['seo_title'] ?? null,
            'description' => $validated['seo_description'] ?? null,
            'og_title' => $validated['og_title'] ?? null,
            'og_description' => $validated['og_description'] ?? null,
        ];

        $keywordIds = [];
        if (! empty($validated['keywords'])) {
            $keywords = explode(',', $validated['keywords']);
            foreach ($keywords as $keyword) {
                $keyword = trim($keyword);
                $keyword = Keyword::firstOrCreate([
                    'keyword' => $keyword,
                ]);
                $keywordIds[] = $keyword->id;
            }
        }

        $tagIds = collect($validated['tags'] ?? [])
            ->map(fn ($slug) => Str::slug(trim($slug)))
            ->filter()
            ->unique()
            ->map(function ($slug) {

                return Tag::firstOrCreate(
                    ['slug' => $slug],
                    ['name' => Str::headline($slug)]
                )->id;
            })
            ->toArray();

        $testingService = $service->updateTestingService($data, $testingService, $seoData, $seoImage, $tagIds, $keywordIds);

        return redirect()->route('admin.testing-services.index')->with('success', 'Testing Service updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
