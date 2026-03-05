<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Mcq\McqWithOptionsResource;
use App\Models\Department;
use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\Tag;
use App\Models\Topic;
use App\Models\User;
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
                'canRegister' => Features::enabled(Features::registration()),

                'departments_list' => Department::query()
                    ->select('id', 'name', 'slug')
                    ->latest()
                    ->limit(6)
                    ->get(),

                'subjects_list' => Subject::query()
                    ->select('id', 'name', 'slug')
                    ->where('name', '!=', 'N/A')
                    ->withCount('mcqs')
                    ->orderByDesc('mcqs_count')
                    ->limit(8)
                    ->get(),

                'current_affairs' => Subject::query()
                    ->select('id', 'name', 'slug', 'description')
                    ->where('id', 39)
                    ->with(['topics' => function ($query) {
                        $query->select('id', 'name', 'slug', 'subject_id')
                            ->latest()
                            ->limit(10);
                    }])
                    ->first(),

                'latestPapers' => Paper::query()
                    ->select('id', 'name', 'slug', 'schedule_at', 'paper_year')
                    ->latest('schedule_at')
                    ->limit(6)
                    ->get(),

                'latestMcqs' => McqWithOptionsResource::collection(Mcq::latestWithOptions()->get()),
                'heroSectionMcqs' => McqWithOptionsResource::collection(
                    Mcq::query()
                        ->where('is_active', true)
                        ->where('explanation', '!=', null)
                        ->oldest('created_at')
                        ->limit(6)
                        ->with([
                            'options:id,mcq_id,option_text,is_correct',
                            'tags:id,name,slug',
                            'paper:id,name,slug',
                            'subject:id,name,slug',
                            'topic:id,name,slug',
                            'createdBy:id,name',
                        ])->get()),
                'stats' => [
                    'mcqs' => Mcq::count(),
                    'papers' => Paper::count(),
                    'subjects' => Subject::count(),
                    'topics' => Topic::count(),
                    'departments' => Department::count(),
                    'tags' => Tag::count(),
                    'users' => User::count(),
                ],
            ];
        });

        return Inertia::render('welcome', $data);
        // return view('public.home', $data);
    }

    /**
     * Display About us Page
     */
    public function about_us()
    {
        return Inertia::render('public/about-us/index');
    }

    /**
     * Display About us Page
     */
    public function join_us()
    {
        return Inertia::render('public/join-us/index');
    }

    /**
     * Display contact us Page
     */
    public function contact_us()
    {
        return Inertia::render('public/contact-us/index');
    }

    /**
     * Display Privacy Policy Page
     */
    public function privacy_policy()
    {
        return Inertia::render('public/privacy-policy/index');
    }

    /**
     * Display Privacy Policy Page
     */
    public function terms_of_service()
    {
        return Inertia::render('public/terms-of-service/index');
    }

    /**
     * Display Privacy Policy Page
     */
    public function help_center()
    {
        return Inertia::render('public/help-center/index');
    }

    /**
     * Set MCQ Mode in session
     */
    public function setQuizMode(Request $request)
    {
        $request->validate([
            'isQuizMode' => 'required|boolean',
        ]);
        session(['isQuizMode' => (bool) $request->boolean('isQuizMode')]);

        return back();
    }
}
