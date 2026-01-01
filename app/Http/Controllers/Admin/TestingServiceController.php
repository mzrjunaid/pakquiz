<?php

namespace App\Http\Controllers\Admin;

use App\Filters\TestingServiceFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\TestingServiceResource;
use App\Models\TestingService;
use App\Services\TestingServiceService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestingServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, TestingServiceFilter $filter)
    {


        $serviceStats = (new TestingServiceService())->stats();

        $services = $filter
            ->apply(TestingService::query()->with('createdBy'))
            ->orderBy($request->input('sort_by', 'created_at'), $request->input('sort_order', 'desc'))
            ->latest()
            ->paginate(3)
            ->withQueryString();

        return Inertia::render('admin/services/index', [
            'testingServices' => TestingServiceResource::collection($services),
            'filters' => $request->only([
                'search',
                'short_name',
                'created_by',
            ]),
            'stats' => $serviceStats,
        ]);
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
