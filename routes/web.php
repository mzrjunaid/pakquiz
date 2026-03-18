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
use Illuminate\Support\Facades\Route;
use Livewire\Livewire;

Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified', 'role:admin,super-admin,editor', 'status:approved'])->group(function () {

    Route::resource('dashboard', DashboardController::class)->only('index')->name('index', 'dashboard');

    Route::resource('testing-services', AdminTestingServiceController::class);

    Route::resource('departments', AdminDepartmentController::class);

    Route::resource('subjects', AdminSubjectController::class);

    Route::resource('topics', AdminTopicController::class);

    Route::resource('papers', AdminPaperController::class);

    Route::resource('mcqs', AdminMcqController::class);

    Route::resource('seo', SeoMetaController::class);

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
Route::get('/demo', [DemoController::class, 'index'])->name('demo');
Route::livewire('/about-us', 'pages::static.about-us')->name('aboutUs');
Route::livewire('/contact-us', 'pages::static.contact-us')->name('contactUs');
Route::livewire('/join-us', 'pages::static.join-us')->name('joinUs');
Route::livewire('/privacy-policy', 'pages::static.privacy-policy')->name('privacyPolicy');
Route::livewire('/terms-of-service', 'pages::static.terms-of-service')->name('termsOfService');
Route::livewire('/help-center', 'pages::static.help-center')->name('helpCenter');

Route::get('/api/search-suggestions', [SearchController::class, 'suggestions']);

Route::name('public.')->group(function () {
    Route::get('/search', [SearchController::class, 'index'])
        ->name('search');

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
