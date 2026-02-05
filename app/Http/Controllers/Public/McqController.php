<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Mcq\McqResource;
use App\Models\Mcq;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class McqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Mcq::query();
        $mcqs = $query->paginate(10); // Paginate the results, 10 per page
        return Inertia::render('public/mcqs/index', [
            'mcqs' => McqResource::collection($mcqs),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Mcq $mcq)
    {
        return Inertia::render('public/mcqs/show', [
            'mcq' => new McqResource($mcq),
            // 'seo' => app(SeoResolver::class)->resolve($request, $mcq),
        ]);
    }
}
