<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Mcq\McqIndexCollection;
use App\Http\Resources\Public\Mcq\McqResource;
use App\Http\Resources\Public\Mcq\McqShowResource;
use App\Http\Resources\Public\Mcq\McqWithOptionsResource;
use App\Http\Resources\Public\Paper\PaperResource;
use App\Models\Mcq;
use App\Models\Page;
use App\Models\Paper;
use App\Models\Subject;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class McqController extends Controller
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

        $mcqs = Mcq::query()->latest()->paginate($perPage)->withQueryString();
        $resource =  McqIndexCollection::make($mcqs);



        // All MCQs
        $schema = $resource->toItemListSchema(request());

        return Inertia::render('public/mcqs/index', [
            'pageIntro' =>  Page::firstWhere('key', 'mcqs'),
            'mcqs' => $resource,
            'schema' => $schema,

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Mcq $mcq)
    {
        // dd('here');

        $latestPapers = Paper::query()
            ->latest()
            ->limit(6)
            ->get();

        $current_affairs = Subject::query()
            ->select('id', 'name', 'slug', 'description')
            ->where('id', 39)
            ->with(['topics' => function ($query) {
                $query->select('id', 'name', 'slug', 'subject_id')
                    ->latest()
                    ->limit(10);
            }])
            ->first();


        return Inertia::render('public/mcqs/show', [
            'mcq' =>  McqShowResource::make($mcq),
            'seo' => app(SeoResolver::class)->resolve($request, $mcq),
            'latestPapers' => PaperResource::collection($latestPapers)->resolve(),
            'current_affairs' => $current_affairs,
        ]);
    }
}
