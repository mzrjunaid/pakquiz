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
        return Inertia::render('public/mcqs/show', [
            'mcq' =>  McqShowResource::make($mcq),
            'seo' => app(SeoResolver::class)->resolve($request, $mcq),
        ]);
    }
}
