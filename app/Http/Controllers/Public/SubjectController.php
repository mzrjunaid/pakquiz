<?php

namespace App\Http\Controllers\Public;

use App\Filters\Pulic\McqsFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Paper\McqResource;
use App\Http\Resources\Public\Paper\PaperResource;
use App\Http\Resources\Public\Subject\SubjectResource;
use App\Http\Resources\TopicResource;
use App\Models\Subject;
use App\Models\Topic;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $request->validate([
            "per_page" => 'integer',
        ]);

        $per_page = $request->per_page ? $request->per_page : 10;

        $query = Subject::query()
            ->select(['id', 'name', 'description',  'slug', 'created_by']);

        if (request()->filled('search')) {
            $search = trim(request('search'));

            $query->where('name', 'like', "%{$search}%");
        }

        $subjects = $query
            ->with([
                'topics' => function ($query) {
                    $query->select(['id', 'subject_id', 'name', 'slug'])
                        ->latest()   // order by created_at DESC
                        ->take(3);   // limit 3 topics
                },
                'createdBy:id,name',
            ])
            ->latest()
            ->paginate($per_page)
            ->withQueryString();

        // dd($subjects);

        return Inertia::render('public/subjects/index', [
            'subjects' => SubjectResource::collection($subjects),
            'seo' => app(SeoResolver::class)->resolve($request),
        ]);
    }

    /**
     * Display the specified resource.
     */
    // 'seo' => app(SeoResolver::class)->resolve($request, $subject),
    public function show(Request $request, Subject $subject)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 5),
            100
        );
        // Load subject relations (lightweight)
        $subject->load([
            'topics:id,subject_id,name,slug',
            'tags:id,name,slug',
        ]);

        // Subject MCQs (paginated & optimized)
        $mcqs = $subject->mcqs()
            ->select([
                'id',
                'slug',
                'question',
                'explanation',
                'mcq_type',
                'subject_id',
                'topic_id',
                'paper_id',
                'difficulty',
                'created_by',
                'created_at',
            ])
            ->with([
                'topic:id,name,slug',
                'tags:id,name,slug',
                'options:id,mcq_id,option_text,is_correct',
            ])
            ->filter(
                $request->only([
                    'search',
                    'topic',
                    'paper',
                    'tag',
                    'difficulty',
                    'year',
                    'sort',
                ])
            )
            ->paginate($perPage)
            ->withQueryString();

        // dd($mcqs);

        // Subject Papers (paginated & optimized)
        $papers = $subject->papers()
            ->select('id', 'name', 'slug', 'subject_id')
            ->with([
                'tags:id,name,slug',
                'department:id,name,slug',
            ])
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('public/subjects/show', [
            'subject' => new SubjectResource($subject),
            'mcqs'    => McqResource::collection($mcqs),
            'papers'  =>  PaperResource::collection($papers),
            'seo' => app(SeoResolver::class)->resolve($request, $subject),
            'filters' => $request->only([
                'search',
                'topic',
                'paper',
                'tag',
                'difficulty',
                'year',
                'sort',
            ]),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function topic(Request $request, Subject $subject, Topic $topic)
    {
        // Load topic relations (lightweight)
        $topic->load([
            'tags:id,name,slug',
        ]);

        // Paginated MCQs (CRITICAL)
        $mcqs = $topic->mcqs()
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

        return Inertia::render('public/topics/show', [
            'subject' => $subject,
            'topic' => $topic,
            'mcqs'  => McqResource::collection($mcqs),
            'seo' => app(SeoResolver::class)->resolve($request, $topic),
        ]);
    }
}
