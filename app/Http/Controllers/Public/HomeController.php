<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('welcome', [
            'canRegister' => Features::enabled(Features::registration()),
            'departments' => Department::query()
                ->select('id', 'name', 'slug')
                ->where('id', '!=', '0')
                ->latest()
                ->limit(10)
                ->get(),
            'subjects' => Subject::query()
                ->select('id', 'name', 'slug')
                ->where('id', '!=', '0')
                ->withCount('mcqs')
                ->orderBy('mcqs_count', 'desc')
                ->limit(8)
                ->get(),

            'topics' => Subject::query()
                ->select('id', 'name', 'slug')
                ->limit(8)
                ->get(),

            'latestPapers' => Paper::query()
                ->select('id', 'name', 'slug', 'schedule_at', 'paper_year')
                ->where('id', '!=', '0')
                ->latest()
                ->limit(6)
                ->get(),

            'latestMcqs' => Mcq::latestWithOptions()->get(),
        ]);
    }
}
