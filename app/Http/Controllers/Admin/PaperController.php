<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\PaperResource;
use App\Models\Paper;
use App\Services\PaperService;
use Illuminate\Http\Request;
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


        $query = $filter->apply(
            Paper::query()->with(['createdBy', 'department', 'testingService', 'subject'])
        );

        $filter->applySorting(
            $query,
            ['id', 'name', 'created_by', 'created_at']
        );

        $papers = $query
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/papers/index', [
            'papers' => PaperResource::collection($papers),
            'filters' => [
                'name'     => $request->input('name', ''),
                'type'       => $request->input('type', ''),
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
    public function edit(string $id)
    {
        return Inertia::render('admin/papers/edit', []);
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
