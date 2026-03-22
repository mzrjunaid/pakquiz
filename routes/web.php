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
use Illuminate\Support\Facades\Route;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\Typography\FontFactory;

Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified', 'role:admin,super-admin,editor', 'status:approved', HandleInertiaRequests::class])->group(function () {

    Route::get('/test-image', function () {

        $mcq = Mcq::query()->where('slug', 'won-pakistani-athlete-silver-medal-in-south-a')->firstOrFail()
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

        // save modified image in new format 
        $image->toWebp()->save(public_path('assets/images/testImages/test.webp'));

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
        Route::get('/', [PublicDepartmentController::class, 'index'])->name('index');
        Route::get('/{department:slug}', [PublicDepartmentController::class, 'show'])->name('show');
    });

    Route::prefix('testing-services')->name('testing_services.')->group(function () {
        Route::get('/', [PublicTestingServiceController::class, 'index'])->name('index');
        Route::get('/{testingService:slug}', [PublicTestingServiceController::class, 'show'])->name('show');
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
