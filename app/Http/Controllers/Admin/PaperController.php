<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\PaperResource;
use App\Models\Department;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\Tag;
use App\Models\TestingService;
use App\Services\GenerateMockPaperService;
use App\Services\PaperService;
use DB;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PaperController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, CommonFilter $filter, PaperService $service)
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


        $papers = $filter
            ->apply(Paper::query()->with(['createdBy', 'department', 'testingService', 'subject']))
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->withQueryString();


        return Inertia::render('admin/papers/index', [
            'papers' => PaperResource::collection($papers),
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
        $departments = Department::query()
            ->orderBy('name')
            ->get(['id', 'name']);

        $subjects = Subject::query()
            ->orderBy('name')
            ->get(['id', 'name']);

        $testingServices = TestingService::query()
            ->orderBy('name')
            ->get(['id', 'name']);

        return Inertia::render('admin/papers/create', [
            'departments' => $departments,
            'subjects' => $subjects,
            'testingServices' => $testingServices,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                'alpha_dash:ascii',
                Rule::unique('papers', 'slug'),
            ],
            'description' => ['nullable', 'string'],
            'schedule_at' => ['nullable', 'date'],
            'paper_year' => ['nullable', 'integer', 'min:1900', 'max:' . (now()->year + 10)],
            'department_id' => ['required', 'exists:departments,id'],
            'subject_id' => ['nullable', 'exists:subjects,id'],
            'testing_service_id' => ['required', 'exists:testing_services,id'],
            'is_active' => ['required', 'boolean'],
            'type' => ['required', Rule::in(['official', 'mock'])],
            'tags' => ['nullable', 'string'],
        ]);

        $tagIds = collect(explode(',', $validated['tags'] ?? ''))
            ->map(fn($tag) => trim($tag))
            ->filter()
            ->unique()
            ->map(
                function ($tagName) {
                    $tag = Tag::firstOrCreate(
                        ['slug' => Str::slug($tagName)],
                        ['name' => $tagName]
                    );

                    if ($tag->name !== $tagName) {
                        $tag->update(['name' => $tagName]);
                    }

                    return $tag->id;
                }
            )
            ->all();

        $paper = Paper::create($validated);

        $paper->tags()->sync($tagIds);

        return redirect()
            ->route('admin.papers.show', $paper)
            ->with('success', 'Paper created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Paper $paper)
    {
        return Inertia::render('admin/papers/show', [
            'paper' => [
                'id' => $paper->id,
                'name' => $paper->name,
                'slug' => $paper->slug,
                'description' => $paper->description,
                'schedule_at' => $paper->schedule_at?->format('Y-m-d'),
                'paper_year' => $paper->paper_year,
                'department_id' => $paper->department_id,
                'subject_id' => $paper->subject_id,
                'testing_service_id' => $paper->testing_service_id,
                'is_active' => $paper->is_active,
                'type' => $paper->type,
                'tags' => $paper->tags->pluck('name')->implode(','),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paper $paper)
    {

        // $seoData = $paper->load('seo');
        // dd($seoData);

        return Inertia::render('admin/papers/edit', [
            'paper' => [
                'id' => $paper->id,
                'name' => $paper->name,
                'slug' => $paper->slug,
                'description' => $paper->description,
                'schedule_at' => $paper->schedule_at?->format('Y-m-d'),
                'paper_year' => $paper->paper_year,
                'department_id' => $paper->department_id,
                'subject_id' => $paper->subject_id,
                'testing_service_id' => $paper->testing_service_id,
                'is_active' => $paper->is_active,
                'type' => $paper->type,
                'tags' => $paper->tags->pluck('name')->implode(','),
            ],
            'departments' => Department::query()
                ->orderBy('name')
                ->get(['id', 'name']),
            'subjects' => Subject::query()
                ->orderBy('name')
                ->get(['id', 'name']),
            'testingServices' => TestingService::query()
                ->orderBy('name')
                ->get(['id', 'name']),
            'paperTags' => $paper->tags->select('name', 'slug')->toArray(),
            'seoData' => [
                'title' => $paper->seo?->title,
                'description' => $paper->seo?->description,
                'og_title' => $paper->seo?->og_title,
                'og_description' => $paper->seo?->og_description,
                'og_image' => $paper->seo?->og_image,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Paper $paper)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                'alpha_dash:ascii',
                Rule::unique('papers', 'slug')->ignore($paper->id),
            ],
            'description' => ['nullable', 'string'],
            'schedule_at' => ['nullable', 'date'],
            'paper_year' => ['nullable', 'integer', 'min:1900', 'max:' . (now()->year + 10)],
            'department_id' => ['required', 'exists:departments,id'],
            'subject_id' => ['nullable', 'exists:subjects,id'],
            'testing_service_id' => ['required', 'exists:testing_services,id'],
            'is_active' => ['required', 'boolean'],
            'type' => ['required', Rule::in(['official', 'mock'])],
            'tags' => ['nullable', 'string', 'max:500'],

            'seo_title' => ['nullable', 'string', 'max:255'],
            'seo_description' => ['nullable', 'string', 'max:500'],
            'seo_og_title' => ['nullable', 'string', 'max:255'],
            'seo_og_description' => ['nullable', 'string', 'max:500'],
            'seo_og_image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:5120'],
        ]);

        $data = collect($validated)
            ->except('tags', 'seo_title', 'seo_description', 'seo_og_title', 'seo_og_description', 'seo_og_image')
            ->toArray();


        $tagIds = collect(explode(',', $validated['tags'] ?? ''))
            ->map(fn($tag) => trim($tag))
            ->filter()
            ->unique()
            ->map(function ($tagName) {
                return Tag::firstOrCreate(
                    ['slug' => Str::slug($tagName)],
                    ['name' => $tagName]
                )->id;
            })
            ->toArray();

        DB::transaction(function () use ($paper, $data, $tagIds, $request) {

            $paper->update($data);

            $paper->tags()->sync($tagIds);

            $seoData = [
                'title' => $request->seo_title,
                'description' => $request->seo_description,
                'og_title' => $request->seo_og_title,
                'og_description' => $request->seo_og_description,
            ];

            $ogImage = $request->file('seo_og_image');

            if ($ogImage) {

                $slug = $paper->slug;

                $destinationPath = public_path('assets/images/papers');

                if (!File::exists($destinationPath)) {
                    File::makeDirectory($destinationPath, 0755, true);
                }

                $fileName = $slug . '.' . $ogImage->getClientOriginalExtension();

                $filePath = $destinationPath . '/' . $fileName;

                if (File::exists($filePath)) {
                    File::delete($filePath);
                }

                $ogImage->move($destinationPath, $fileName);

                $seoData['og_image'] = 'assets/images/papers/' . $fileName;
            }

            $paper->seo()->update($seoData);
        });

        return redirect()
            ->route('admin.papers.edit', $paper)
            ->with('success', 'Paper updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paper $paper)
    {
        $paper->delete();

        return redirect()
            ->route('admin.papers.index')
            ->with('success', 'Paper deleted successfully.');
    }

    public function generate(Paper $paper, GenerateMockPaperService $service, Request $request)
    {
        $validated = $request->validate([
            'action' => ['required', 'in:generate,regenerate'],
        ]);

        $action = $validated['action'];
        $regenerate = $action === 'regenerate';

        try {
            $service->generate($paper, $regenerate);

            return response()->json([
                'success' => true,
                'message' => "Paper {$action}d successfully.",
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 422);
        }
    }

}
