<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\McqResource;
use App\Http\Resources\Admin\McqShowResource;
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

        $sortableColumns = ['id', 'name', 'short_name', 'created_at'];

        $sortBy = in_array(
            $request->input('sort_by'),
            $sortableColumns,
            true
        )
            ? $request->input('sort_by')
            : 'created_at';

        $sortOrder = $request->input('sort_order') === 'asc' ? 'asc' : 'desc';


        $mcqs = $filter
            ->apply(Mcq::query()->with(['createdBy',  'paper', 'subject', 'topic']))
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/mcqs/index', [
            'mcqs' => McqResource::collection($mcqs),
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
    public function show(Mcq $mcq)
    {
        $mcq->loadMissing([
            'options:id,mcq_id,option_text,is_correct,sort_order',
            'tags:id,name,slug'
        ]);

        return Inertia::render('admin/mcqs/show', [
            'mcq' => McqShowResource::make($mcq),
        ]);
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
