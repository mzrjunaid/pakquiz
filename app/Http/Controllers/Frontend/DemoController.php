<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Resources\Frontend\Demo\McqDemoResource;
use App\Models\Mcq;

use Illuminate\Support\Facades\Cache;

use Inertia\Inertia;

class DemoController extends Controller
{

    public function index()
    {
        $data = Cache::remember('demo_mcqs', now()->addHour(), function () {
            $mcqs = Mcq::query()
                ->select(
                'id',
                'question',
                'slug',
                'explanation',
                'subject_id',
                'topic_id',
                'mcq_type',
                'difficulty',
            )
                ->where('subject_id', '!=', '0')
                ->whereNotNull('topic_id')
                ->with([
                'topic:id,name',
                'options:id,mcq_id,option_text,sort_order,is_correct',
                'subject:id,name',
                'tags:id,name,slug',
            ])
                ->get()
                ->shuffle()
                ->take(15);
            return McqDemoResource::collection($mcqs);
        });


        return Inertia::render('public/demo/index', ['demoMcqs' => $data]);
    }
}
