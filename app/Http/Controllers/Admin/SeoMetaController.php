<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SeoMetaResource;
use App\Models\Department;
use App\Models\JobPosting;
use App\Models\Mcq;
use App\Models\Page;
use App\Models\Paper;
use App\Models\SeoMeta;
use App\Models\Subject;
use App\Models\TestingService;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class SeoMetaController extends Controller
{
    protected const PAGE_TYPE_MAP = [
        'Department' => Department::class ,
        'JobPosting' => JobPosting::class ,
        'Mcq' => Mcq::class ,
        'Page' => Page::class ,
        'Paper' => Paper::class ,
        'Subject' => Subject::class ,
        'TestingService' => TestingService::class ,
        'Topic' => Topic::class ,
    ];

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = min(
            max($request->integer('per_page', 10), 5),
            100
        );

        $sortableColumns = ['id', 'title', 'description', 'page_type', 'created_at', 'updated_at'];

        $sortBy = in_array($request->input('sort_by'), $sortableColumns, true)
            ? $request->input('sort_by')
            : 'created_at';

        $sortOrder = $request->input('sort_order') === 'asc' ? 'asc' : 'desc';

        $seoMeta = SeoMeta::query()
            ->with('page')
            ->when($request->filled('page_type'), function ($query) use ($request) {
            $pageType = self::PAGE_TYPE_MAP[$request->page_type] ?? null;

            if ($pageType) {
                $query->where('page_type', $pageType);
            }
        })
            ->when($request->filled('title'), fn($q) => $q->where('title', 'like', "%{$request->title}%"))
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/seo/index', [
            'seoMeta' => SeoMetaResource::collection($seoMeta),
            'filters' => [
                'title' => $request->input('title', ''),
                'page_type' => $request->input('page_type', ''),
                'per_page' => $request->integer('per_page', 10),
                'sort_by' => $sortBy,
                'sort_order' => $sortOrder,
            ],

            'stats' => SeoMeta::stats(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/seo/create', [
            'pageTypeOptions' => $this->pageTypeOptions(),
            'pageOptions' => $this->pageOptions(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $this->validateData($request);

        $seoMeta = SeoMeta::create($validated);

        return to_route('admin.seo.show', $seoMeta)
            ->with('success', 'SEO meta created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(SeoMeta $seo)
    {
        $seo->load('page');

        return Inertia::render('admin/seo/show', [
            'seoMeta' => SeoMetaResource::make($seo)->resolve(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SeoMeta $seo)
    {
        $seo->load('page');

        return Inertia::render('admin/seo/edit', [
            'seoMeta' => SeoMetaResource::make($seo)->resolve(),
            'pageTypeOptions' => $this->pageTypeOptions(),
            'pageOptions' => $this->pageOptions(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SeoMeta $seo)
    {
        $validated = $this->validateData($request, $seo);

        $seo->update($validated);

        return to_route('admin.seo.show', $seo)
            ->with('success', 'SEO meta updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SeoMeta $seo)
    {
        $seo->delete();

        return to_route('admin.seo.index')
            ->with('success', 'SEO meta deleted successfully.');
    }

    protected function validateData(Request $request, ?SeoMeta $seo = null): array
    {
        $pageTypeKeys = array_keys(self::PAGE_TYPE_MAP);

        $validated = Validator::make($request->all(), [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'keywords' => ['nullable', 'string'],
            'og_title' => ['nullable', 'string', 'max:255'],
            'og_description' => ['nullable', 'string'],
            'og_image' => ['nullable', 'string', 'max:2048'],
            'page_type' => ['required', 'string', Rule::in($pageTypeKeys)],
            'page_id' => ['required', 'integer'],
        ])->after(function ($validator) use ($request, $seo) {

            $pageType = $request->input('page_type');

            $pageTypeClass = self::PAGE_TYPE_MAP[$pageType] ?? null;

            if (!$pageTypeClass) {
                return;
            }

            $pageId = $request->input('page_id');

            $exists = $pageTypeClass::query()
                ->whereKey($pageId)
                ->exists();

            if (!$exists) {
                $validator->errors()->add(
                    'page_id',
                    'The selected page target does not exist.'
                );

                return;
            }

            $alreadyExists = SeoMeta::query()
                ->where('page_type', $pageTypeClass)
                ->where('page_id', $pageId)
                ->when($seo, fn($query) =>
            $query->whereKeyNot($seo->id)
            )
                ->exists();

            if ($alreadyExists) {
                $validator->errors()->add(
                    'page_id',
                    'SEO meta already exists for the selected page.'
                );
            }
        })->validate();

        $validated['page_type'] = self::PAGE_TYPE_MAP[$validated['page_type']];

        return $validated;
    }

    protected function pageTypeOptions(): array
    {
        return collect(self::PAGE_TYPE_MAP)
            ->map(fn($class, $label) => [
        'label' => $label,
        'value' => $label,
        ])
            ->values()
            ->all();
    }

    protected function pageOptions(): array
    {
        return [
            'Department' => Department::query()->select('id', 'name')->orderBy('name')->get()
            ->map(fn($item) => ['value' => $item->id, 'label' => $item->name])
            ->values()
            ->all(),
            'JobPosting' => JobPosting::query()->select('id', 'title')->orderBy('title')->get()
            ->map(fn($item) => ['value' => $item->id, 'label' => $item->title])
            ->values()
            ->all(),
            'Mcq' => Mcq::query()->select('id', 'question')->orderByDesc('id')->limit(250)->get()
            ->map(fn($item) => ['value' => $item->id, 'label' => str($item->question)->limit(90)->value()])
            ->values()
            ->all(),
            'Page' => Page::query()->select('id', 'key', 'title')->orderBy('key')->get()
            ->map(fn($item) => [
        'value' => $item->id,
        'label' => $item->title ? "{$item->title} ({$item->key})" : $item->key,
        ])->values()
            ->all(),
            'Paper' => Paper::query()->select('id', 'name')->orderBy('name')->get()
            ->map(fn($item) => ['value' => $item->id, 'label' => $item->name])
            ->values()
            ->all(),
            'Subject' => Subject::query()->select('id', 'name')->orderBy('name')->get()
            ->map(fn($item) => ['value' => $item->id, 'label' => $item->name])
            ->values()
            ->all(),
            'TestingService' => TestingService::query()->select('id', 'name')->orderBy('name')->get()
            ->map(fn($item) => ['value' => $item->id, 'label' => $item->name])
            ->values()
            ->all(),
            'Topic' => Topic::query()->select('id', 'name')->orderBy('name')->get()
            ->map(fn($item) => ['value' => $item->id, 'label' => $item->name])
            ->values()
            ->all(),
        ];
    }
}
