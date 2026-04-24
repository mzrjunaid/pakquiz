<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use App\Models\Keyword;
use App\Services\department\DepartmentService;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, CommonFilter $filter, DepartmentService $service)
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


        $departments = $filter
            ->apply(Department::query()->with('createdBy'))
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/departments/index', [
            'departments' => DepartmentResource::collection($departments),
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
        return Inertia::render('admin/departments/create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, DepartmentService $service)
    {


        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'type' => ['required', Rule::in(['government', 'private'])],
            'description' => 'nullable|string',
            'seo_title' => 'nullable|string|max:255',
            'seo_description' => 'nullable|string|max:255',
            'keywords' => 'nullable|string|max:500',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string|max:255',
        ]);

        $data = [
            'name' => $validated['name'],
            'slug' => $validated['slug'],
            'type' => $validated['type'],
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
        if (!empty($validated['keywords'])) {
            $keywords = explode(',', $validated['keywords']);
            foreach ($keywords as $keyword) {
                $keyword = trim($keyword);
                $keyword = Keyword::firstOrCreate([
                    'keyword' => $keyword,
                ]);
                $keywordIds[] = $keyword->id;
            }
        }

        $department = $service->createDepartment($data, $seoData, $seoImage, $keywordIds);

        return redirect()
            ->route('admin.departments.show', $department)
            ->with('success', 'Department created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        $department->load('createdBy', 'seo');

        return Inertia::render('admin/departments/show', [
            'department' => [
                'id' => $department->id,
                'slug' => $department->slug,
                'name' => $department->name,
                'short_name' => $department->short_name,
                'description' => $department->description,
                'paper_count' => $department->paperCount(),
                'created_by' => $department->createdBy,
                'created_at' => $department->created_at,
                'updated_at' => $department->updated_at,
                'seo' => [
                    'title' => $department->seo->title,
                    'description' => $department->seo->description,
                    'keywords' => $department->keywords->pluck('keyword')->implode(',') ?? '',
                    'og_title' => $department->seo->og_title,
                    'og_description' => $department->seo->og_description,
                    'og_image' => $department->seo->og_image ? asset($department->seo->og_image) : null,
                ],
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        $department->load('seo', 'keywords');
        return Inertia::render('admin/departments/edit', [
            'department' => [
                'id' => $department->id,
                'slug' => $department->slug,
                'name' => $department->name,
                'type' => $department->type,
                'description' => $department->description,
            ],
            'seoData' => $department->seo,
            'keywords' => $department->keywords->pluck('keyword')->implode(',') ?? '',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Department $department, DepartmentService $service)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'type' => ['required', Rule::in(['government', 'private'])],
            'description' => 'nullable|string',
            'seo_title' => 'nullable|string|max:255',
            'seo_description' => 'nullable|string|max:255',
            'keywords' => 'nullable|string|max:500',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string|max:255',
        ]);

        $data = [
            'name' => $validated['name'],
            'slug' => $validated['slug'],
            'type' => $validated['type'],
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
        if (!empty($validated['keywords'])) {
            $keywords = explode(',', $validated['keywords']);
            foreach ($keywords as $keyword) {
                $keyword = trim($keyword);
                $keyword = Keyword::firstOrCreate([
                    'keyword' => $keyword,
                ]);
                $keywordIds[] = $keyword->id;
            }
        }

        $department = $service->updateDepartment($data, $department, $seoData, $seoImage, $keywordIds);

        return redirect()
            ->route('admin.departments.edit', $department)
            ->with('success', 'Department updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department->delete();

        return redirect()
            ->route('admin.departments.index')
            ->with('success', 'Department deleted successfully.');
    }
}
