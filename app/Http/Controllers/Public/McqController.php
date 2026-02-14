<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Mcq\McqResource;
use App\Http\Resources\Public\Mcq\McqWithOptionsResource;
use App\Models\Mcq;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class McqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Mcq::query();
        $mcqs = $query->paginate(10); // Paginate the results, 10 per page
        return Inertia::render('public/mcqs/index', [
            'mcqs' => McqResource::collection($mcqs),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Mcq $mcq)
    {
        // dd('here');

        if ($mcq->subject) {
            // dd('here');

            if ($mcq->subject && $mcq->topic) {
                // Ensure topic belongs to subject
                abort_if($mcq->topic->subject_id !== $mcq->subject_id, 404);

                // dd('here');

                return redirect()->route('public.subjects.topic.mcq.show', [
                    'subject' => $mcq->subject->slug,
                    'topic'   => $mcq->topic->slug,
                    'mcq'     => $mcq->slug,
                ], 301);
            }

            return redirect()->route('public.subjects.mcq.show', [
                'subject' => $mcq->subject->slug,
                'mcq'     => $mcq->slug,
            ], 301);
        }

        if ($mcq->subject) {
            // Ensure topic belongs to subject
            abort_if($mcq->topic->subject_id !== $mcq->subject_id, 404);

            return redirect()->route('public.subjects.topic.show', [
                'subject' => $mcq->subject->slug,
                'topic'   => $mcq->topic->slug,
                'mcq'     => $mcq->slug,
            ], 301);
        }

        return Inertia::render('public/mcqs/show', [
            'mcq' => new McqWithOptionsResource($mcq),
            'seo' => app(SeoResolver::class)->resolve($request, $mcq),
        ]);
    }
}
