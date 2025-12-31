<?php

namespace App\Http\Controllers\Admin;

use App\Filters\TestingServiceFilter;
use App\Http\Controllers\Controller;
use App\Models\TestingService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestingServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, TestingServiceFilter $filter)
    {

        $services = $filter
            ->apply(TestingService::query())
            ->paginate(10)
            ->withQueryString();

        dd($services);

        return Inertia::render('admin/services/index', []);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/services/create', []);
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
        return Inertia::render('admin/services/show', []);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('admin/services/edit', []);
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
