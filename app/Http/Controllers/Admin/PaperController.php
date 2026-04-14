<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\PaperResource;
use App\Models\Department;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\TestingService;
use App\Services\GenerateMockPaperService;
use App\Services\PaperService;
use Illuminate\Http\Request;
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
        return Inertia::render('admin/papers/create', []);
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
        return Inertia::render('admin/papers/show', []);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paper $paper)
    {
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
            'subject_id' => ['required', 'exists:subjects,id'],
            'testing_service_id' => ['required', 'exists:testing_services,id'],
            'is_active' => ['required', 'boolean'],
            'type' => ['required', Rule::in(['official', 'mock'])],
        ]);

        $paper->update($validated);

        return redirect()
            ->route('admin.papers.edit', $paper)
            ->with('success', 'Paper updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
    //
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
        }
        catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 422);
        }
    }
}
