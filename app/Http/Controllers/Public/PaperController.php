<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Paper;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaperController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Paper::query();
        $papers = $query->paginate(10); // Paginate the results, 10 per page
        return Inertia::render('public/papers/index', [
            'papers' => $papers,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Paper $paper)
    {
        return Inertia::render('public/mcqs/show', [
            'paper' => $paper,
            'seo' => app(SeoResolver::class)->resolve($request, $paper),
        ]);
    }
}
