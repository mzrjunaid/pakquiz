<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\Paper;
use App\Models\Topic;
use App\Models\Mcq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $q = trim($request->get('q'));

        if (strlen($q) < 2) {
            return Inertia::render('public/search/index', [
                'query' => $q,
                'results' => [],
            ]);
        }

        return Inertia::render('public/search/index', [
            'query' => $q,
            'results' => [
                'subjects' => Subject::query()
                    ->where('name', 'like', "%{$q}%")
                    ->select('id', 'name', 'slug')
                    ->limit(5)
                    ->get(),

                'papers' => Paper::query()
                    ->where('name', 'like', "%{$q}%")
                    ->select('id', 'name', 'slug')
                    ->limit(5)
                    ->get(),

                'topics' => Topic::query()
                    ->where('name', 'like', "%{$q}%")
                    ->select('id', 'name', 'slug')
                    ->limit(5)
                    ->get(),

                'mcqs' => Mcq::query()
                    ->where('question', 'like', "%{$q}%")
                    ->select('id', 'question', 'slug')
                    ->limit(5)
                    ->get(),
            ],
        ]);
    }


    public function suggestions(Request $request)
    {

        // return response()->json([
        //     'message' => 'This endpoint is deprecated. Please use the /search endpoint instead.',
        // ], 410);


        $query = trim($request->input('q', ''));
        if (!$query) return response()->json([]);

        $topics = Topic::select('id', 'name', 'slug', 'subject_id')
            ->where('name', 'like', "%{$query}%")
            ->limit(3)
            ->get()
            ->map(fn($m) => [
                'slug' => $m->slug,
                'title' => $m->name,
                'link' => route('public.subject.topic.show', [$m->subject->slug, $m->slug]),
                'type' => 'Topic',
            ]);

        $subjects = Subject::select('id', 'name', 'slug')
            ->where('name', 'like', "%{$query}%")
            ->limit(3)
            ->get()
            ->map(fn($m) => [
                'slug' => $m->slug,
                'title' => $m->name,
                'link' => route('public.subject.show', $m->slug),
                'type' => 'Subject',
            ]);

        $papers = Paper::select('id', 'name', 'slug')
            ->where('name', 'like', "%{$query}%")
            ->limit(3)
            ->get()
            ->map(fn($m) => [
                'slug' => $m->slug,
                'title' => $m->name,
                'link' => route('public.papers.show', $m->slug),
                'type' => 'Paper',
            ]);

        $mcqs = Mcq::select('id', 'question', 'slug')
            ->where('question', 'like', "%{$query}%")
            ->limit(3)
            ->get()
            ->map(fn($m) => [
                'slug' => $m->slug,
                'title' => $m->question,
                'link' => route('public.mcqs.show', $m->slug),
                'type' => 'MCQ',
            ]);

        return response()->json(
            collect($subjects)
                ->merge($topics)
                ->merge($papers)
                ->merge($mcqs)
                ->take(12)
                ->values()
        );
    }
}
