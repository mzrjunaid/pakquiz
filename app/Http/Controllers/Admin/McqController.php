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
        $image = $manager->read(public_path('assets/images/quiz_palceholder.png'));

        $titleSize = 32;

        if ($mcq->paper) {
            $image->text($mcq->paper->name . ' | ' . $mcq->subject->name . ' | ' . $mcq->topic?->name, 282, 75, function (FontFactory $font) use ($titleSize) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size($titleSize);
                $font->color('030303');
                $font->align('left');
                $font->valign('middle');
                $font->lineHeight(1.6);
                $font->wrap(850);
            });
        } else {
            $image->text($mcq->subject->name . ' | ' . $mcq->topic?->name, 282, 75, function (FontFactory $font) use ($titleSize) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size($titleSize);
                $font->color('030303');
                $font->align('left');
                $font->valign('middle');
                $font->lineHeight(1.6);
                $font->wrap(850);
            });
        }

        function estimateTextHeight($text, $fontSize, $wrapWidth, $lineHeight = 1.5)
        {
            $avgCharWidth = $fontSize * 0.4; // rough estimate
            $charsPerLine = $wrapWidth / $avgCharWidth;

            $lines = ceil(strlen($text) / $charsPerLine);

            return $lines * ($fontSize * $lineHeight);
        }

        $questionY = 183;
        $padding = 4;

        $questionText = 'Question: ' . $mcq->question;

        $questionSize = 28;
        $questionWrap = 960;

        $image->text($questionText, 110, $questionY, function (FontFactory $font) use ($questionSize, $questionWrap) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size($questionSize);
            $font->color('#030303');
            $font->align('left');
            $font->valign('top');
            $font->lineHeight(1.7);
            $font->wrap($questionWrap);
        });

        // ✅ Estimate height instead of using ->height()
        $questionHeight = estimateTextHeight($questionText, $questionSize, $questionWrap, 1.7);

        $currentY = $questionY + $questionHeight + $padding;

        foreach ($mcq->options as $index => $option) {
            $label = chr(65 + $index) . '. ';
            $optionText = $label . $option->option_text;

            $image->text($optionText, 115, $currentY, function ($font) use ($option) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(24);
                $font->color('#333');
                $font->valign('top');
                $font->wrap(600);
            });

            // ✅ Estimate option height
            $optionHeight = estimateTextHeight($optionText, 24, 600, 1.5);

            $currentY += $optionHeight + 20;
        }

        if ($mcq->explanation) {

            $explanationHeadingY = $questionY + $questionHeight + $padding;

            $explanationTextSize = 20;
            $explanationWrap = 550;

            $image->text('Explanation:', 550, $explanationHeadingY, function ($font) use ($explanationTextSize, $explanationWrap) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size($explanationTextSize);
                $font->lineHeight(1.8);
                $font->color('#551e10ff');
                $font->valign('top');
                $font->wrap($explanationWrap);
            });

            $explanationY = $explanationHeadingY + 32;

            $image->text($mcq->explanation, 550, $explanationY, function ($font) use ($explanationTextSize, $explanationWrap) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size($explanationTextSize);
                $font->lineHeight(1.8);
                $font->color('#333');
                $font->valign('top');
                $font->wrap($explanationWrap);
            });
        }

        $image->text('< Tap Here for the Answer >', 572, 522, function ($font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(24);
            $font->lineHeight(1.8);
            $font->align('center');
            $font->color('#333');
            $font->valign('top');
            $font->wrap(1200);
        });

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
