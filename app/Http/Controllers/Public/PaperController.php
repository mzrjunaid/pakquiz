<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Mcq\McqWithOptionsResource;
use App\Http\Resources\Public\Paper\McqResource;
use App\Http\Resources\Public\Paper\PaperResource;
use App\Models\Mcq;
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
            max($request->integer('per_page', 20), 10),
            100
        );


        $papers = Paper::select('id', 'name', 'slug', 'testing_service_id', 'paper_year', 'subject_id', 'department_id', 'created_by', 'is_active')
            ->where('is_active', '=', '1')
            ->paginate($perPage)
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
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

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
                'options:id,mcq_id,option_text,is_correct,sort_order'
            ])
            ->latest()
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();

        return Inertia::render('public/papers/show', [
            'paper' => new PaperResource($paper),
            'mcqs'  => McqResource::collection($mcqs),
            'seo' => app(SeoResolver::class)->resolve($request, $paper),
        ]);
    }

    /**
     * Display Mcq of the specified resource.
     */

    public function paper_mcq(Request $request, Paper $paper, Mcq $mcq)
    {
        $mcq = $paper->mcqs()->with('options')->findOrFail($mcq->id);

        return Inertia::render('public/mcqs/show', [
            'mcq' => new McqWithOptionsResource($mcq),
            'seo' => app(SeoResolver::class)->resolve($request, $mcq),
        ]);
    }

    public function latest_papers(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

        $papers = Paper::select('id', 'name', 'slug', 'testing_service_id', 'paper_year', 'subject_id', 'department_id', 'created_by', 'is_active')
            ->where('is_active', '=', '1')
            ->where('paper_year', '>=', date('2025'))
            ->latest()
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();;
        return Inertia::render('public/papers/index', [
            'papers' => PaperResource::collection($papers),
        ]);
    }

    public function past_papers(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

        $papers = Paper::select('id', 'name', 'slug', 'testing_service_id', 'paper_year', 'subject_id', 'department_id', 'created_by', 'is_active')
            ->where('is_active', '=', '1')
            ->where('paper_year', '<', date('2025'))
            ->latest()
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();;
        return Inertia::render('public/papers/index', [
            'papers' => PaperResource::collection($papers),
        ]);
    }

    public function upcoming_papers(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

        $papers = Paper::select('id', 'name', 'slug', 'testing_service_id', 'paper_year', 'subject_id', 'department_id', 'created_by', 'is_active')
            ->where('is_active', '=', '1')
            ->where('schedule_at', '>=', date('Y-m-d'))
            ->latest()
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();

        if ($papers->isEmpty()) {
            return Inertia::render('public/coming-soon/index');
        }
        return Inertia::render('public/papers/index', [
            'papers' => PaperResource::collection($papers),
        ]);
    }
}
