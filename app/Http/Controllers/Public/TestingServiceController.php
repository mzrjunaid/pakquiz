<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Public\Paper\PaperResource;
use App\Http\Resources\Public\TestingServices\TestingServiceResource;
use App\Models\Page;
use App\Models\TestingService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestingServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );


        $testing_services = TestingService::query()
            ->with([
                'papers' => function ($query) {
                    $query->select('id', 'testing_service_id', 'name', 'slug')
                        ->latest()
                        ->limit(3);
                }
            ])
            ->where('name', '!=', 'N/A')
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();


        // dd($testing_services);

        return Inertia::render('public/testing-services/index', [
            'pageIntro' =>  Page::firstWhere('key', 'testing_services'),
            'testing_services' => TestingServiceResource::collection($testing_services),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, TestingService $testingService)
    {

        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

        $testingService->load(['createdBy:id,name']);


        $papers = $testingService->papers()
            ->with(['department', 'subject'])
            ->latest()
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();


        return Inertia::render('public/testing-services/show', [
            'testing_service' => $testingService,
            'papers' => PaperResource::collection($papers),
        ]);
    }
}
