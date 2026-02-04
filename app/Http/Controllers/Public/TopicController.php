<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Topic;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TopicController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(Request $request, Topic $topic)
    {
        return Inertia::render('public/subjects/show', [
            'topic' => $topic,
            'seo' => app(SeoResolver::class)->resolve($request, $topic),
        ]);
    }
}
