<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\SeoMetaResource;
use App\Models\SeoMeta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeoMetaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 5),
            100
        );

        $seoMeta = SeoMeta::query()
            ->when($request->filled('page_type'), fn($q) => $q->where('page_type', 'like', "%{$request->page_type}%"))
            ->when($request->filled('title'), fn($q) => $q->where('title', 'like', "%{$request->title}%"))
            ->when($request->filled('created_by'), fn($q) => $q->where('created_by', $request->created_by))
            ->orderBy($request->input('sort_by', 'created_at'), $request->input('sort_order', 'desc'))
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/seo/index', [
            'seoMeta' => SeoMetaResource::collection($seoMeta),
            'filters' => [
                'title'      => $request->input('title', ''),
                'page_type'  => $request->input('page_type', ''),
                'created_by' => $request->input('created_by', ''),
                'per_page'   => $request->integer('per_page', 10),
                'sort_by'    => $request->input('sort_by', 'created_at'),
                'sort_order' => $request->input('sort_order', 'desc'),
            ],

            'stats' => SeoMeta::stats(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/seo/create', []);
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
        return Inertia::render('admin/seo/show', []);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('admin/seo/edit', []);
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
