<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\McqResource;
use App\Http\Resources\SubjectResource;
use App\Http\Resources\TopicResource;
use App\Models\Keyword;
use App\Models\Mcq;
use App\Models\Subject;
use App\Models\Tag;
use App\Services\Subject\SubjectService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, CommonFilter $filter, SubjectService $service)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 5),
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


        $subjects = $filter
            ->apply(Subject::query()->with(['createdBy', 'topics']))
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/subjects/index', [
            'subjects' => SubjectResource::collection($subjects),
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
        return Inertia::render('admin/subjects/create', [
            'availableTags' => $availableTags,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, SubjectService $service)
    {
        // dd($request->all());

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'is_active' => 'required|boolean',
            'description' => 'nullable|string',
            'seo_title' => 'nullable|string|max:255',
            'seo_description' => 'nullable|string|max:255',
            'keywords' => 'nullable|string|max:500',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string|max:255',
            'tags' => 'nullable|array',
            'tags.*' => 'nullable|string',
        ]);

        // dd($validated);

        $data = [
            'name' => $validated['name'],
            'slug' => $validated['slug'],
            'is_active' => $validated['is_active'],
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

        $subject = $service->createSubject($data, $seoData, $seoImage, $keywordIds, $tagIds);

        return redirect()
            ->route('admin.subjects.show', $subject)
            ->with('success', 'Subject created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $subject, Request $request, CommonFilter $filter, SubjectService $service)
    {

        $perPage = min(
            max($request->integer('per_page', 10), 5),
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
        $subject->loadMissing([
            'topics' => function ($query) {
                $query
                    ->with('createdBy')
                    ->withCount('mcqs')
                    ->orderBy('sort_order')
                    ->orderBy('name');
            }
        ]);

        $mcqs = $filter
            ->apply(Mcq::query()->with(['createdBy', 'paper', 'subject', 'topic'])->where('subject_id', $subject->id))
            ->withExists([
                'seo as has_og_image' => fn ($query) => $query->whereNotNull('og_image')
            ])
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();

        // After fetching, confirm the file physically exists on disk
        $mcqs->through(function ($mcq) {
            $mcq->has_og_image = $mcq->has_og_image
                && File::exists(public_path($mcq->seo->og_image));
            return $mcq;
        });

        return Inertia::render('admin/subjects/show', [
            'subject' => $subject,
            'topics' => TopicResource::collection($subject->topics)->resolve(),
            'mcqs' => McqResource::collection($mcqs),
            'filters' => $request->only([
                'name',
                'subject',
                'created_by',
                'per_page',
                'sort_by',
                'sort_order',
            ]),
            'stats' => $service->stats(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        $subject->load([
            'createdBy',
            'seo',
            'keywords:id,keyword',
            'tags:id,name,slug',
        ]);
        // dd($subject);

        $availableTags = Tag::query()
            ->select('id', 'name', 'slug')
            ->orderBy('name')
            ->get()
            ->map(fn ($tag) => [
                'value' => $tag->id,
                'label' => $tag->name,
                'slug' => $tag->slug,
            ]);

        return Inertia::render('admin/subjects/edit', [
            'subject' => $subject,
            'seoData' => $subject->seo,
            'keywords' => $subject->keywords
                ->pluck('keyword')
                ->implode(','),

            'selectedTagSlugs' => $subject->tags->pluck('slug')->values(),

            'availableTags' => $availableTags,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subject $subject, SubjectService $service)
    {


        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'is_active' => 'required|boolean',
            'description' => 'nullable|string',
            'seo_title' => 'nullable|string|max:255',
            'seo_description' => 'nullable|string|max:255',
            'keywords' => 'nullable|string|max:500',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string|max:255',
            'tags' => 'nullable|array',
            'tags.*' => 'nullable|string',
        ]);

        // dd($validated);

        $data = [
            'name' => $validated['name'],
            'slug' => $validated['slug'],
            'is_active' => $validated['is_active'],
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

        $subject = $service->updateSubject($data, $subject, $seoData, $seoImage, $keywordIds, $tagIds);

        return redirect()
            ->route('admin.subjects.edit', $subject)
            ->with('success', 'Subject updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject)
    {
        $subject->delete();

        return redirect()
            ->route('admin.subjects.index')
            ->with('success', 'Subject deleted successfully.');
    }
}
