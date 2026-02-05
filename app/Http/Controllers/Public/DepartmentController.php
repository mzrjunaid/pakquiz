<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Department::query();
        $departments = $query->paginate(10); // Paginate the results, 10 per page
        return Inertia::render('public/departments/index', [
            'departments' => $departments,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Department $department)
    {
        return Inertia::render('public/departments/show', [
            'department' => $department,
            // 'seo' => app(SeoResolver::class)->resolve($request, $department),
        ]);
    }
}
