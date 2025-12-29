<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('admin/departments/index', []);
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
