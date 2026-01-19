<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\McqResource;
use App\Models\Mcq;
use App\Services\McqService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class McqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, CommonFilter $filter, McqService $service)
    {

        $perPage = min(
            max($request->integer('per_page', 10), 5),
            100
        );


        $query = $filter->apply(
            Mcq::query()->with(['createdBy',  'paper', 'subject', 'topic'])
        );

        $filter->applySorting(
            $query,
            ['id', 'name', 'created_by', 'created_at']
        );

        $mcqs = $query
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/mcqs/index', [
            'mcqs' => McqResource::collection($mcqs),
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
        return Inertia::render('admin/mcqs/create', []);
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
        return Inertia::render('admin/mcqs/show', []);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('admin/mcqs/edit', []);
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
