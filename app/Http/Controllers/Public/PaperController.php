<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Paper\McqResource;
use App\Http\Resources\Public\Paper\PaperResource;
use App\Models\Paper;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaperController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 25), 10),
            100
        );

        $query = Paper::query();
        $papers = $query->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();;
        return Inertia::render('public/papers/index', [
            'papers' => PaperResource::collection($papers),
        ]);
    }

    /**
     * Display the specified resource.
     */

    public function show(Request $request, Paper $paper)
    {
        // Load paper-specific relations (lightweight)
        $paper->load([
            'tags:id,name,slug',
            'department:id,name,slug',
        ]);

        // Paginated MCQs (CRITICAL)
        $mcqs = $paper->mcqs()
            ->select('id', 'paper_id', 'question', 'slug', 'subject_id', 'topic_id', 'created_by', 'created_at')
            ->with([
                'subject:id,name,slug',
                'topic:id,name,slug',
                'createdBy:id,name',
                'tags:id,name,slug',
            ])
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('public/papers/show', [
            'paper' => new PaperResource($paper),
            'mcqs'  => McqResource::collection($mcqs),
            'seo' => app(SeoResolver::class)->resolve($request, $paper),
        ]);
    }
}
