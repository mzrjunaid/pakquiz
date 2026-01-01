<?php

namespace App\Http\Controllers\Admin;

use App\Filters\TestingServiceFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, TestingServiceFilter $filter)
    {

        $departments = $filter
            ->apply(Department::query()->with('createdBy'))
            ->orderBy($request->input('sort_by', 'created_at'), $request->input('sort_order', 'desc'))
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('admin/departments/index', [
            'departments' => DepartmentResource::collection($departments),
            'filters' => $request->only([
                'search' => $request->input('search', ''),
                'type' => $request->input('type', ''),
                'created_by' => $request->input('created_by', ''),
            ]),
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
