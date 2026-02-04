<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
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
        $query = Subject::query();
        $subjects = $query->paginate(10); // Paginate the results, 10 per page
        return Inertia::render('public/subjects/index', [
            'subjects' => $subjects,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Subject $subject)
    {
        return Inertia::render('public/subjects/show', [
            'subject' => $subject,
            'seo' => app(SeoResolver::class)->resolve($request, $subject),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function topic(Request $request, Subject $subject, Topic $topic)
    {
        return Inertia::render('public/topics/show', [
            'subject' => $subject,
            'topic' => $topic,
            'seo' => app(SeoResolver::class)->resolve($request, $topic),
        ]);
    }
}
