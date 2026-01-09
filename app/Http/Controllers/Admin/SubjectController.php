<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\SubjectResource;
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


        $query = $filter->apply(
            Subject::query()->with(['createdBy', 'topics'])
        );

        $filter->applySorting(
            $query,
            ['id', 'name', 'created_by', 'created_at']
        );

        $subjects = $query
            ->paginate($perPage)
            ->withQueryString();


        return Inertia::render('admin/subjects/index', [
            'subjects' => SubjectResource::collection($subjects),
            'filters' => [
                'name'     => $request->input('name', ''),
                'created_by' => $request->input('created_by', ''),
                'per_page'   => $request->integer('per_page', 10),
                'sort_by'   => $request->input('sort_by', 'created_at'),
                'sort_order' => $request->input('sort_order', 'desc'),
            ],

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
    public function show(string $id)
    {
        return Inertia::render('admin/subjects/show', []);
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
