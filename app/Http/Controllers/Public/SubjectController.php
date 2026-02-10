<?php

namespace App\Http\Controllers\Public;

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
    public function index()
    {

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
            ->paginate(10)
            ->withQueryString();

        // dd($subjects);

        return Inertia::render('public/subjects/index', [
            'subjects' => SubjectResource::collection($subjects),
        ]);
    }

    /**
     * Display the specified resource.
     */
    // 'seo' => app(SeoResolver::class)->resolve($request, $subject),
    public function show(Request $request, Subject $subject)
    {
        // Load subject relations (lightweight)
        $subject->load([
            'tags:id,name,slug',
        ]);

        // Subject MCQs (paginated & optimized)
        $mcqs = $subject->mcqs()
            ->select('id', 'question', 'slug', 'subject_id')
            ->with([
                'tags:id,name,slug',
                'topic:id,name,slug',
            ])
            ->latest()
            ->paginate(10)
            ->withQueryString();

        // dd($mcqs);

        // Subject Papers (paginated & optimized)
        $papers = $subject->papers()
            ->select('id', 'title', 'slug', 'subject_id')
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
            // 'seo' => app(SeoResolver::class)->resolve($request, $topic),
        ]);
    }
}
