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

        $perPage = min(
            max((int) $request->input('per_page', 3), 3),
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

        $serviceStats = (new TestingServiceService())->stats();

        $services = $filter
            ->apply(TestingService::query()->with('createdBy'))
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/services/index', [
            'testingServices' => TestingServiceResource::collection($services),
            'filters' => $request->only([
                'name',
                'short_name',
                'created_by',
                'per_page',
                'sort_by',
                'sort_order',
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
