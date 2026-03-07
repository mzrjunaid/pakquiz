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
use App\Http\Controllers\Public\McqController as PublicMcqController;
use App\Http\Controllers\Public\PaperController as PublicPaperController;
use App\Http\Controllers\Public\PremiumController;
use App\Http\Controllers\Public\SearchController;
use App\Http\Controllers\Public\SubjectController as PublicSubjectController;
use App\Http\Controllers\Public\TestingServiceController as PublicTestingServiceController;

Route::livewire('/', 'pages::home.index')->name('home');
Route::get('/demo', [DemoController::class, 'index'])->name('demo');
Route::get('/about-us', [HomeController::class, 'about_us'])->name('aboutUs');
Route::get('/contact-us', [HomeController::class, 'contact_us'])->name('contactUs');
Route::get('/join-us', [HomeController::class, 'join_us'])->name('joinUs');
Route::get('/privacy-policy', [HomeController::class, 'privacy_policy'])->name('privacyPolicy');
Route::get('/terms-of-service', [HomeController::class, 'terms_of_service'])->name('termsOfService');
Route::get('/help-center', [HomeController::class, 'help_center'])->name('helpCenter');
// Search Route and Search API Route
Route::get('/api/search-suggestions', [SearchController::class, 'suggestions']);

Route::name('public.')->group(function () {
    Route::get('/search', [SearchController::class, 'index'])
        ->name('search');

    Route::prefix('mcqs')->name('mcqs.')->group(function () {
        Route::get('/', [PublicMcqController::class, 'index'])->name('index');
        Route::get('/{mcq:slug}', [PublicMcqController::class, 'show'])->name('show');
    });

    // --- Departments Group ---
    Route::prefix('departments')->name('departments.')->group(function () {
        Route::get('/', [PublicDepartmentController::class, 'index'])->name('index');
        // Show Department (e.g., /departments/fpsc)
        Route::get('/{department:slug}', [PublicDepartmentController::class, 'show'])->name('show');
        // SEO-Friendly Paper under Department (e.g., /departments/fpsc/assistant-director-mcqs)
        // Route::get('/{department:slug}/{paper:slug}', [PublicPaperController::class, 'dept_paper_show'])
        //     ->name('papers.show');
    });

    // --- Testing Services Group ---
    Route::prefix('testing-services')->name('testing_services.')->group(function () {
        Route::get('/', [PublicTestingServiceController::class, 'index'])->name('index');
        // Show Testing Service (e.g., /testing-services/nts)
        Route::get('/{testingService:slug}', [PublicTestingServiceController::class, 'show'])->name('show');
        // Papers by Testing Service (e.g., /testing-services/nts/gate-exam-mcqs)
        // Route::get('/{testingService:slug}/{paper:slug}', [PublicPaperController::class, 'testing_paper_show'])
        //     ->name('papers.show');
    });

    Route::prefix('papers')->name('papers.')->group(function () {
        // 1. The main index (e.g., /papers)
        Route::get('/', [PublicPaperController::class, 'index'])->name('index');
        // 2. Category Routes (latest-papers, past-papers, upcoming-papers)
        // We use a constraint to ensure it only matches these three
        Route::get('/{category?}', [PublicPaperController::class, 'categoryIndex'])
            ->where('category', '(latest|past|upcoming)-papers')
            ->name('category.index');

        // 3. The Paper Show Page (e.g., /papers/past-papers/css-2024-mcqs)
        // Keep it nested under the category for a perfect SILO structure
        Route::get('/{category?}/{paper:slug}', [PublicPaperController::class, 'show'])
            ->where('category', '(latest|past|upcoming)-papers')
            ->name('category.show');

        Route::get('/{paper:slug}', [PublicPaperController::class, 'show'])->name('show');
    });

    Route::name('subject.')->group(function () {
        // List All Subjects
        Route::get('/subjects', [PublicSubjectController::class, 'index'])
            ->name('index');

        // 1. Main Subject Page (e.g., /pakistan-study-mcqs)
        Route::get('/{subject:slug}', [PublicSubjectController::class, 'show'])
            ->name('show');

        Route::name('topic.')->group(function () {
            // 2. Topic List within a Subject (e.g., /pakistan-study/topics)
            // Note: Keeping 'topics' as a sub-folder is fine here for organization
            Route::get('/{subject:slug}/topics', [PublicSubjectController::class, 'topics'])
                ->name('index');
            // 3. Specific Topic MCQs (e.g., /pakistan-study/mountains-mcqs)
            // This is the "Money Page" that will rank for "Mountain MCQs"
            Route::get('/{subject:slug}/{topic:slug}', [PublicSubjectController::class, 'topics_show'])
                ->name('show');
        });
    });

    Route::middleware(['auth', 'verified', 'status:approved'])->group(function () {
        Route::get('/premium', [PremiumController::class, 'index'])->name('premium.index');
    });
});

Route::put('/set-quiz-mode', [HomeController::class, 'setQuizMode'])->name('quiz_mode');

require __DIR__.'/settings.php';
