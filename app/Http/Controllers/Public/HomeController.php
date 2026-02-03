<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Mcq;
use App\Models\Page;
use App\Models\Paper;
use App\Models\SeoMeta;
use App\Models\Subject;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Cache::remember('home_page_data', now()->addSecond(), function () {
            return [
                'pageSeo' => Page::where('key', 'home')->first(),

                'departments' => Department::query()
                    ->select('id', 'name', 'slug')
                    ->latest()
                    ->limit(6)
                    ->get(),

                'subjects' => Subject::query()
                    ->select('id', 'name', 'slug')
                    ->withCount('mcqs')
                    ->orderByDesc('mcqs_count')
                    ->limit(8)
                    ->get(),

                'topics' => Topic::query()
                    ->select('id', 'name', 'slug')
                    ->limit(6)
                    ->get(),

                'latestPapers' => Paper::query()
                    ->select('id', 'name', 'slug', 'schedule_at', 'paper_year')
                    ->latest('schedule_at')
                    ->limit(6)
                    ->get(),

                'latestMcqs' => Mcq::latestWithOptions()->get(),
            ];
        });

        return Inertia::render('welcome', $data);
    }
}
