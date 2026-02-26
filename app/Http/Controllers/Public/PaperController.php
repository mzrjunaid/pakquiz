<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Mcq\McqIndexCollection;
use App\Http\Resources\Public\Mcq\McqShowResource;
use App\Http\Resources\Public\Mcq\McqWithOptionsResource;
use App\Http\Resources\Public\Paper\McqResource;
use App\Http\Resources\Public\Paper\PaperResource;
use App\Models\Department;
use App\Models\Mcq;
use App\Models\Paper;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Pest\Laravel\get;

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

    public function show(
        Request $request,
        Paper $paper
    ) {
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

        // Load lightweight relations
        $paper->load([
            'tags:id,name,slug',
            'department:id,name,slug',
        ]);

        // Paginated MCQs
        $mcqs = $paper->mcqs()
            ->select([
                'id',
                'paper_id',
                'question',
                'slug',
                'subject_id',
                'topic_id',
                'created_by',
                'created_at',
            ])
            ->with([
                'subject:id,name,slug',
                'topic:id,name,slug',
                'createdBy:id,name',
                'tags:id,name,slug',
                'options:id,mcq_id,option_text,is_correct,sort_order',
            ])
            ->latest()
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();

        $resource = McqIndexCollection::make($mcqs);

        // IMPORTANT: use nested route for schema
        $schema = $resource->toItemListSchema(
            'Paper',
            $paper->name,
            route('public.papers.show', [
                'paper' => $paper->slug,
            ])
        );

        return Inertia::render('public/papers/show', [
            'paper'      => PaperResource::make($paper),
            'mcqs'       => $resource,
            'seo'        => app(SeoResolver::class)->resolve($request, $paper),
            'schema'     => $schema,
        ]);
    }

    /**
     * Display Mcq of the specified resource.
     */

    public function paper_mcq(Request $request, Paper $paper, Mcq $mcq)
    {
        $mcq = $paper->mcqs()->with('options')->findOrFail($mcq->id);

        $mcq->load([
            'paper',
            'subject:id,name,slug',
            'topic:id,name,slug',
            'createdBy:id,name',
            'tags:id,name,slug',
            'options:id,mcq_id,option_text,is_correct,sort_order'
        ]);

        return Inertia::render('public/mcqs/show', [
            'mcq' => McqShowResource::make($mcq),
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



    public function categoryIndex(Request $request, string $category)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

        $type = str_replace('-papers', '', $category);

        if (!in_array($type, ['latest', 'past', 'upcoming'])) {
            abort(404);
        }
        $today = now()->toDateTimeString();

        $papers = Paper::select('id', 'name', 'slug', 'testing_service_id', 'paper_year', 'subject_id', 'department_id', 'created_by', 'is_active')
            ->where('is_active', true)
            ->when($type === 'upcoming', function ($query) use ($today) {
                // Exams that haven't happened yet
                $query->where('schedule_at', '>', $today);
            })
            ->when($type === 'latest', function ($query) use ($today) {
                // Exams that just happened (e.g., in the current year or very recently)
                // and are NOT in the future
                $query->where('paper_year', '>=', date('Y'))
                    ->where(function ($q) use ($today) {
                        $q->where('schedule_at', '<=', $today)
                            ->orWhereNull('schedule_at');
                    });
            })
            ->when($type === 'past', function ($query) {
                // Anything older than the current year
                $query->where('paper_year', '<', date('Y'));
            })
            ->latest()
            ->paginate($perPage);


        return Inertia::render('public/papers/index', [
            'type' => $type,
            'category' => $category,
            'papers' => PaperResource::collection($papers),
        ]);
    }
}
