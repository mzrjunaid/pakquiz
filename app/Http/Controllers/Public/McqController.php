<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Mcq\McqIndexCollection;
use App\Http\Resources\Public\Mcq\McqResource;
use App\Http\Resources\Public\Mcq\McqShowResource;
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
    public function index(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 5),
            100
        );

        $mcqs = Mcq::query()->paginate($perPage)->withQueryString(); // or ->get()
        $resource =  McqIndexCollection::make($mcqs);

        // All MCQs
        $schema = $resource->toItemListSchema();

        return Inertia::render('public/mcqs/index', [
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

        if ($mcq->paper) {
            // dd('here');
            // if ($mcq->paper && $mcq->paper->testingService) {
            //     // Ensure paper belongs to testing service
            //     abort_if($mcq->paper->testingService_id !== $mcq->paper->testingService_id, 404);

            //     return redirect()->route('public.testing_services.papers.mcq.show', [
            //         'testing_service' => $mcq->paper->testingService->slug,
            //         'paper'           => $mcq->paper->slug,
            //         'mcq'             => $mcq->slug,
            //     ], 301);
            // }

            return redirect()->route('public.papers.mcq.show', [
                'paper' => $mcq->paper->slug,
                'mcq'   => $mcq->slug,
            ], 301);
        }

        if ($mcq->subject) {
            // dd('here');

            if ($mcq->subject && $mcq->topic) {
                // Ensure topic belongs to subject
                abort_if($mcq->topic->subject_id !== $mcq->subject_id, 404);

                // dd('here');

                return redirect()->route('public.subjects.topics.mcq.show', [
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

            return redirect()->route('public.subjects.topics.show', [
                'subject' => $mcq->subject->slug,
                'topic'   => $mcq->topic->slug,
                'mcq'     => $mcq->slug,
            ], 301);
        }

        return Inertia::render('public/mcqs/show', [
            'mcq' =>  McqShowResource::make($mcq),
            'seo' => app(SeoResolver::class)->resolve($request, $mcq),
        ]);
    }
}
