<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\TestingService;
use App\Models\Topic;
use App\Services\DashboardService;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(DashboardService $service)
    {
        return Inertia::render('admin/index', [
            'stats' => $service->stats(),
            'latest' => $service->latest(),
        ]);
    }
}
