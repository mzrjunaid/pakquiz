<?php

namespace App\Http\Controllers\Admin;

use App\Filters\CommonFilter;
use App\Http\Controllers\Controller;
use App\Http\Resources\McqResource;
use App\Http\Resources\Admin\McqShowResource;
use App\Models\Mcq;
use App\Models\SeoMeta;
use App\Services\McqService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\ImageManager;
use Intervention\Image\Typography\FontFactory;

class McqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, CommonFilter $filter, McqService $service)
    {

        $perPage = min(
            max($request->integer('per_page', 10), 5),
            100
        );

        $sortableColumns = ['id', 'name', 'short_name', 'created_at'];

        $sortBy = in_array(
            $request->input('sort_by'),
            $sortableColumns,
            true
        )
            ? $request->input('sort_by')
            : 'created_at';

        $sortOrder = $request->input('sort_order') === 'asc' ? 'asc' : 'desc';


        $mcqs = $filter
            ->apply(Mcq::query()->with(['createdBy', 'paper', 'subject', 'topic']))
            ->orderBy($sortBy, $sortOrder)
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('admin/mcqs/index', [
            'mcqs' => McqResource::collection($mcqs),
            'filters' => $request->only([
                'name',
                'short_name',
                'created_by',
                'per_page',
                'sort_by',
                'sort_order',
            ]),

            'stats' => $service->stats(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/mcqs/create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Mcq $mcq)
    {
        $mcq->loadMissing([
            'options:id,mcq_id,option_text,is_correct,sort_order',
            'tags:id,name,slug'
        ]);

        return Inertia::render('admin/mcqs/show', [
            'mcq' => McqShowResource::make($mcq),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('admin/mcqs/edit', []);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }


    public function mcqOgImage(Mcq $mcq)
    {

        $path = public_path("assets/images/mcqs/{$mcq->slug}.webp");

        if (file_exists($path)) {
            $imageUrl = asset('assets/images/mcqs/' . $mcq->slug . '.webp');
            if ($imageUrl) {
                $mcq->seo()->updateOrCreate(
                    [],
                    ['og_image' => 'assets/images/mcqs/' . $mcq->slug . '.webp']
                );
            }
            return response()->json(['message' => 'Image already exists', 'imageUrl' => $imageUrl], 200);
        }

        $mcq->loadMissing([
            'options:id,mcq_id,option_text,is_correct',
            'paper' => function ($query) {
                $query->with(['department:id,name', 'testingService:id,name']);
            },
            'topic:id,name',
            'subject:id,name'
        ]);
        if ($mcq->paper) {
            $paper = $mcq->paper;
            $testingService = $paper->testingService;
            $department = $paper->department;
        } else {
            $paper = null;
            $testingService = null;
            $department = null;
        }

        // create image manager with desired driver
        $manager = new ImageManager(new Driver());

        // read image from file system
        $image = $manager->read(public_path('assets/images/quiz_palceholder.webp'));

        if ($mcq->paper) {
            $image->text($mcq->paper->name . ' | ' . $mcq->subject->name . ' | ' . $mcq->topic?->name, 933, 229, function (FontFactory $font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(95);
                $font->color('030303');
                $font->align('left');
                $font->valign('middle');
                $font->lineHeight(1.6);
                $font->wrap(2250);
            });
        } else {
            $image->text($mcq->subject->name . ' | ' . $mcq->topic?->name, 933, 229, function (FontFactory $font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(100);
                $font->color('030303');
                $font->align('left');
                $font->valign('middle');
                $font->lineHeight(1.6);
                $font->wrap(2250);
            });
        }

        function estimateTextHeight($text, $fontSize, $wrapWidth, $lineHeight = 1.5)
        {
            $avgCharWidth = $fontSize * 0.45; // rough estimate
            $charsPerLine = $wrapWidth / $avgCharWidth;

            $lines = ceil(strlen($text) / $charsPerLine);

            return $lines * ($fontSize * $lineHeight);
        }

        $questionY = 600;
        $padding = 50;

        $questionText = 'Question: ' . $mcq->question;

        $image->text($questionText, 335, $questionY, function (FontFactory $font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(80);
            $font->color('#030303');
            $font->align('left');
            $font->valign('top');
            $font->lineHeight(1.7);
            $font->wrap(3023);
        });

        // ✅ Estimate height instead of using ->height()
        $questionHeight = estimateTextHeight($questionText, 80, 3023, 1.7);

        $currentY = $questionY + $questionHeight + $padding;

        foreach ($mcq->options as $index => $option) {
            $label = chr(65 + $index) . '. ';
            $optionText = $label . $option->option_text;

            $image->text($optionText, 335, $currentY, function ($font) use ($option) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(70);
                $font->color($option->is_correct ? '#00aa00' : '#333');
                $font->valign('top');
                $font->wrap(1000);
            });

            // ✅ Estimate option height
            $optionHeight = estimateTextHeight($optionText, 70, 1000, 1.5);

            $currentY += $optionHeight + 40;
        }

        if ($mcq->explanation) {
            $explanationHeadingY = $questionY + $questionHeight + $padding;

            $image->text('Explanation:', 1900, $explanationHeadingY, function ($font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(70);
                $font->lineHeight(1.6);
                $font->color('#e66b4cff');
                $font->valign('top');
                $font->wrap(1500);
            });

            $explanationY = $explanationHeadingY + 100;

            $image->text($mcq->explanation, 1900, $explanationY, function ($font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(70);
                $font->lineHeight(1.6);
                $font->color('#333');
                $font->valign('top');
                $font->wrap(1500);
            });
        }

        // save modified image in new format 
        $image->toWebp()->save(public_path('assets/images/mcqs/' . $mcq->slug . '.webp'));

        // On image creation success get the url and pass to front end
        $imageUrl = asset('assets/images/mcqs/' . $mcq->slug . '.webp');

        //update seo table with og_url
        if ($imageUrl) {
            $mcq->seo()->updateOrCreate(
                [],
                ['og_image' => 'assets/images/mcqs/' . $mcq->slug . '.webp']
            );
        }

        return response()->json(['message' => 'Success', 'imageUrl' => $imageUrl], 200);
    }
}
