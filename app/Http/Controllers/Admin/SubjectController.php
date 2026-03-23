<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\McqResource;
use App\Http\Resources\SubjectResource;
use App\Models\Mcq;
use App\Models\Subject;
use App\Models\Topic;
use App\Services\SubjectService;
use Illuminate\Http\Request;
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
        return Inertia::render('admin/subjects/create', []);
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
        $subject->loadMissing(['topics:id,name,slug,subject_id']);

        $mcqs = $filter
            ->apply(Mcq::query()->with(['createdBy', 'paper', 'subject', 'topic'])->where('subject_id', $subject->id))
            ->withExists([
                'seo as has_og_image' => fn($query) => $query->whereNotNull('og_image')
            ])
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();

        return Inertia::render('admin/subjects/show', [
            'subject' => $subject,
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
    public function edit(string $id)
    {
        return Inertia::render('admin/subjects/edit', []);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
