<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\Public\Dept\DeptResource;
use App\Http\Resources\Public\Mcq\McqIndexCollection;
use App\Http\Resources\Public\Paper\PaperResource;
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
            max($request->integer('per_page', 10), 10),
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
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

        $papers = Paper::query()
            ->where('department_id', $department->id)
            ->latest()
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();

        return Inertia::render('public/papers/index', [
            'department' => $department,
            'papers' => PaperResource::collection($papers),
            // 'seo' => app(SeoResolver::class)->resolve($request, $department),
        ]);
    }

    public function dept_paper_show(
        Request $request,
        Department $department,
        Paper $paper
    ) {
        $perPage = min(
            max($request->integer('per_page', 10), 10),
            100
        );

        // Load lightweight relations
        $paper->load([
            'tags:id,name,slug',
            'department:id,name,slug',
        ]);

        // Paginated MCQs
        $mcqs = $paper->mcqs()
            ->select([
                'id',
                'paper_id',
                'question',
                'slug',
                'subject_id',
                'topic_id',
                'created_by',
                'created_at',
            ])
            ->with([
                'subject:id,name,slug',
                'topic:id,name,slug',
                'createdBy:id,name',
                'tags:id,name,slug',
                'options:id,mcq_id,option_text,is_correct,sort_order',
            ])
            ->latest()
            ->paginate($perPage)
            ->onEachSide(0)
            ->withQueryString();

        $resource = McqIndexCollection::make($mcqs);

        // IMPORTANT: use nested route for schema
        $schema = $resource->toItemListSchema(
            'Paper',
            $paper->name,
            route('public.departments.papers.show', [
                'department' => $department->slug,
                'paper' => $paper->slug,
            ])
        );

        return Inertia::render('public/papers/show', [
            'department' => $department->only('id', 'name', 'slug'),
            'paper'      => new PaperResource($paper),
            'mcqs'       => $resource,
            'seo'        => app(SeoResolver::class)->resolve($request, $paper),
            'schema'     => $schema,
        ]);
    }
}
