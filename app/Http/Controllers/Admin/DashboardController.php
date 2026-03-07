<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DashboardService;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(DashboardService $service)
    {

        // dd($service->stats());
        // dd($service->latest());


        return Inertia::render('dashboard', [
            'stats' => $service->stats(),
            'latest' => $service->latest(),
        ]);
    }
}
