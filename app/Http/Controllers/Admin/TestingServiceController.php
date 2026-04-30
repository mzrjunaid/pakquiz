<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\TestingServiceResource;
use App\Models\Tag;
use App\Models\TestingService;
use App\Services\TestingServiceService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class TestingServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, CommonFilter $filter)
    {

        $perPage = min(
            max((int)$request->input('per_page', 10), 5),
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
            'stats' => (new TestingServiceService())->stats(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/services/create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    //
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
            ->map(fn($tag) => [
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
    public function update(Request $request, TestingService $testingService)
    {
        dd($request->all());

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'short_name' => 'required|string|max:255',
            'description' => 'required|string',
            'seo_title' => 'required|string|max:255',
            'seo_description' => 'required|string|max:255',
            'og_title' => 'required|string|max:255',
            'og_description' => 'required|string|max:255',
            'keywords' => 'nullable|array',
            'keywords.*' => 'nullable|string',
            'tags' => 'nullable|array',
            'tags.*' => 'nullable|string',

            'seo_og_image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:5120'],
        ]);

        $testingServiceData = collect($validated)->except(['tags', 'keywords', 'seo_title', 'seo_description', 'seo_og_title', 'seo_og_description', 'seo_og_image'])->toArray();

        $tagIds = collect($validated['tags'] ?? [])
            ->map(fn($slug) => Str::slug(trim($slug)))
            ->filter()
            ->unique()
            ->map(function ($slug) {

            return Tag::firstOrCreate(
            ['slug' => $slug],
            ['name' => Str::headline($slug)]
            )->id;
        })
            ->toArray();

        $seoData = collect($validated)->only(['seo_title', 'seo_description', 'seo_og_title', 'seo_og_description', 'seo_og_image'])->toArray();

        $testingService->update($testingServiceData);

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
