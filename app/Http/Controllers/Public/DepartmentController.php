<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\Public\Dept\DeptResource;
use App\Models\Department;
use App\Models\Paper;
use App\Services\Seo\SeoResolver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 20), 10),
            100
        );


        $departments = Department::query()
            ->with([
                'papers' => function ($query) {
                    $query->select('id', 'department_id', 'name', 'slug')
                        ->latest()
                        ->limit(3);
                }
            ])
            ->where('name', '!=', 'N/A')
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();

        return Inertia::render('public/departments/index', [
            'departments' => DeptResource::collection($departments),
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
