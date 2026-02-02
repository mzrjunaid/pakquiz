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
}
