<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use App\Services\DepartmentService;
use Inertia\Inertia;
use Illuminate\Http\Request;

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


        $query = $filter->apply(
            Department::query()->with('createdBy')
        );

        $filter->applySorting(
            $query,
            ['id', 'name', 'created_by', 'created_at']
        );

        $departments = $query
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/departments/index', [
            'departments' => DepartmentResource::collection($departments),
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
        return Inertia::render('admin/departments/create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd('store');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('admin/departments/show', []);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('admin/departments/edit', []);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dd('update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        dd('destroy');
    }
}
