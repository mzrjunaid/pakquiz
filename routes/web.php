<?php

use App\Http\Controllers\Admin\AdminPaperImportController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DepartmentController as AdminDepartmentController;
use App\Http\Controllers\Admin\McqController as AdminMcqController;
use App\Http\Controllers\Admin\PaperController as AdminPaperController;
use App\Http\Controllers\Admin\SchedulerController;
use App\Http\Controllers\Admin\SeoMetaController;
use App\Http\Controllers\Admin\SubjectController as AdminSubjectController;
use App\Http\Controllers\Admin\TestingServiceController as AdminTestingServiceController;
use App\Http\Controllers\Admin\TopicController as AdminTopicController;
use App\Http\Controllers\Public\AdminMcqImportController;
use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\Typography\FontFactory;

Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified', 'role:admin,super-admin,editor', 'status:approved', HandleInertiaRequests::class])->group(function () {

    Route::get('/test-image', function () {

        function estimateTextHeight($text, $fontSize, $wrapWidth, $lineHeight = 1.5)
        {
            $avgCharWidth = $fontSize * 0.3; // rough estimate
            $charsPerLine = $wrapWidth / $avgCharWidth;

            $lines = ceil(strlen($text) / $charsPerLine);

            return $lines * ($fontSize * $lineHeight);
        }

        $mcq = Mcq::query()->where('slug', 'asim-munir-rank-2026')->firstOrFail()
            ->load([
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

        $relativePath = "assets/images/mcqs/{$mcq->slug}.webp";
        $fullPath = public_path($relativePath);

        $mcq->loadMissing([
            'options:id,mcq_id,option_text,is_correct',
            'paper.department:id,name',
            'paper.testingService:id,name',
            'topic:id,name',
            'subject:id,name'
        ]);

        $manager = new ImageManager(new Driver());
        $image = $manager->read(public_path('assets/images/quiz_palceholder.png'));

        // ===== Title =====
        $title = $mcq->paper
            ? "{$mcq->paper->name} | {$mcq->subject->name} | {$mcq->topic?->name}"
            : "{$mcq->subject->name} | {$mcq->topic?->name}";

        $image->text($title, 282, 75, function (FontFactory $font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(32);
            $font->lineHeight(1.5);
            $font->align('left');
            $font->valign('middle');
            $font->color('030303');
            $font->wrap(850);
        });

        // ===== Question =====
        $questionY = 175;
        $questionWrap = 960;
        $questionText = 'Question: ' . $mcq->question;

        $image->text($questionText, 110, $questionY, function (FontFactory $font) use ($questionWrap) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(28);
            $font->valign('top');
            $font->lineHeight(1.7);
            $font->wrap($questionWrap);
        });

        $currentY = $questionY + estimateTextHeight($questionText, 28, $questionWrap, 1.7) + 50;

        // ===== Options =====
        foreach ($mcq->options as $index => $option) {
            $text = chr(65 + $index) . '. ' . $option->option_text;

            $image->text($text, 115, $currentY, function (FontFactory $font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(24);
                $font->wrap(450);
            });

            $currentY += estimateTextHeight($text, 24, 450) + 20;
        }

        $explanationY = $questionY + estimateTextHeight($questionText, 28, $questionWrap, 1.7) + 50;

        // ===== Explanation =====
        if ($mcq->explanation) {
            $image->text('Explanation:', 600, $explanationY, function (FontFactory $font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(20);
            });

            $explanationY += 15;

            $image->text($mcq->explanation, 600, $explanationY, function (FontFactory $font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(20);
                $font->valign('top');
                $font->lineHeight(1.7);
                $font->wrap(480);
            });
        }

        // ===== CTA =====
        $image->text('< Tap Here for the Answer >', 572, 540, function (FontFactory $font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(24);
            $font->align('center');
        });

        $watermark = $manager->read(public_path('assets/images/watermark.png'));

        $watermark->scale(width: $image->width() * 0.6);

        $image->place(
            $watermark,
            'center',
            0,
            20,
            10
        );

        // Save
        $image->toWebp()->save($fullPath);



        return 'Image created';
    });

    Route::resource('dashboard', DashboardController::class)->only('index')->name('index', 'dashboard');

    Route::resource('testing-services', AdminTestingServiceController::class);

    Route::resource('departments', AdminDepartmentController::class);

    Route::resource('subjects', AdminSubjectController::class);

    Route::resource('topics', AdminTopicController::class);

    Route::resource('papers', AdminPaperController::class);

    Route::resource('mcqs', AdminMcqController::class);

    Route::resource('seo', SeoMetaController::class);

    Route::get('/api/generate-mcq-og-image/{mcq:slug}', [AdminMcqController::class, 'mcqOgImage'])
        ->name('mcq_og_image');

    Route::get('/run-seo-update', [SchedulerController::class, 'runSeoUpdate'])
        ->name('run-seo-update');

    Route::get('/mcqs-import', [AdminMcqImportController::class, 'create'])
        ->name('mcqs_import.create');

    Route::get('/mcqs-import-copy', [AdminMcqImportController::class, 'create_copy'])
        ->name('mcqs_import.create_copy');

    Route::get('/mcqs-import-md-copy', [AdminMcqImportController::class, 'create_md_copy'])
        ->name('mcqs_import.create_md_copy');

    Route::post('/mcqs-import', [AdminMcqImportController::class, 'store'])
        ->name('mcqs_import.store');

    Route::get('/papers-import', [AdminPaperImportController::class, 'create'])
        ->name('papers_import.create');

    Route::get('/papers-import-copy', [AdminPaperImportController::class, 'create_copy'])
        ->name('papers_import.create_copy');

    Route::post('/papers-import', [AdminPaperImportController::class, 'store'])
        ->name('papers_import.store');
});

use App\Http\Controllers\Public\DemoController;
use App\Http\Controllers\Public\DepartmentController as PublicDepartmentController;
use App\Http\Controllers\Public\HomeController;
use App\Http\Controllers\Public\PremiumController;
use App\Http\Controllers\Public\SearchController;
use App\Http\Controllers\Public\SubjectController as PublicSubjectController;
use App\Http\Controllers\Public\TestingServiceController as PublicTestingServiceController;

Route::livewire('/', 'pages::home.index')->name('home');
Route::middleware(HandleInertiaRequests::class)->get('/demo', [DemoController::class, 'index'])->name('demo');
Route::livewire('/about-us', 'pages::static.about-us')->name('aboutUs');
Route::livewire('/contact-us', 'pages::static.contact-us')->name('contactUs');
Route::livewire('/join-us', 'pages::static.join-us')->name('joinUs');
Route::livewire('/privacy-policy', 'pages::static.privacy-policy')->name('privacyPolicy');
Route::livewire('/terms-of-service', 'pages::static.terms-of-service')->name('termsOfService');
Route::livewire('/help-center', 'pages::static.help-center')->name('helpCenter');

Route::get('/api/search-suggestions', [SearchController::class, 'suggestions']);

Route::name('public.')->group(function () {
    Route::livewire('/search', 'pages::search.index')->name('search');

    Route::prefix('mcqs')->name('mcqs.')->group(function () {
        Route::livewire('/', 'pages::mcqs.index')->name('index');
        Route::livewire('/{mcq:slug}', 'pages::mcqs.show')->name('show');
    });

    Route::prefix('departments')->name('departments.')->group(function () {
        Route::livewire('/', 'pages::departments.index')->name('index');
        Route::livewire('/{department:slug}', 'pages::departments.show')->name('show');
    });

    Route::prefix('testing-services')->name('testing_services.')->group(function () {
        Route::livewire('/', 'pages::testing-services.index')->name('index');
        Route::livewire('/{testingService:slug}', 'pages::testing-services.show')->name('show');
    });

    Route::prefix('papers')->name('papers.')->group(function () {

        Route::livewire('/', 'pages::papers.index')->name('index');

        Route::livewire('/{category?}', 'pages::papers.category-index')
            ->where('category', '(latest|past|upcoming)-papers')
            ->name('category_index');

        Route::livewire('/{paper:slug}', 'pages::papers.show')->name('show');
    });

    Route::name('subject.')->group(function () {
        Route::livewire('/subjects', 'pages::subjects.index')->name('index');

        Route::livewire('/{subject:slug}', 'pages::subjects.show')->name('show');

        Route::name('topic.')->group(function () {
            Route::get('/{subject:slug}/topics', [PublicSubjectController::class, 'topics'])
                ->name('index');
            Route::livewire('/{subject:slug}/{topic:slug}', 'pages::topics.show')->name('show');
        });
    });

    Route::middleware(['auth', 'verified', 'status:approved'])->group(function () {
        Route::get('/premium', [PremiumController::class, 'index'])->name('premium.index');
    });
});

Route::put('/set-quiz-mode', [HomeController::class, 'setQuizMode'])->name('quiz_mode');

require __DIR__ . '/settings.php';
