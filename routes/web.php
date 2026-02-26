<?php

use App\Http\Controllers\Admin\{
    DashboardController,
    SchedulerController,
    SeoMetaController
};

use App\Http\Controllers\Admin\{
    DepartmentController as AdminDepartmentController,
    McqController as AdminMcqController,
    PaperController as AdminPaperController,
    TestingServiceController as AdminTestingServiceController,
    SubjectController as AdminSubjectController,
    TopicController as AdminTopicController
};
use Illuminate\Support\Facades\Route;

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
});

use App\Http\Controllers\Public\{
    DemoController,
    HomeController,
    PremiumController,
    SearchController,
};

use App\Http\Controllers\Public\{
    DepartmentController as PublicDepartmentController,
    TestingServiceController as PublicTestingServiceController,
    McqController as PublicMcqController,
    SubjectController as PublicSubjectController,
    PaperController as PublicPaperController,
    TopicController as PublicTopicController,
};

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/demo', [DemoController::class, 'index'])->name('demo');
Route::get('/about-us', [HomeController::class, 'about_us'])->name('aboutUs');
Route::get('/contact-us', [HomeController::class, 'contact_us'])->name('contactUs');
Route::get('/join-us', [HomeController::class, 'join_us'])->name('joinUs');
Route::get('/privacy-policy', [HomeController::class, 'privacy_policy'])->name('privacyPolicy');
Route::get('/terms-of-service', [HomeController::class, 'terms_of_service'])->name('termsOfService');
Route::get('/help-center', [HomeController::class, 'help_center'])->name('helpCenter');
Route::put('/set-quiz-mode', [HomeController::class, 'setQuizMode'])->name('quiz_mode');

Route::name('public.')->group(function () {
    Route::get('/search', [SearchController::class, 'index'])
        ->name('search');

    Route::prefix('departments')
        ->name('departments.')
        ->group(function () {

            Route::get('/', [PublicDepartmentController::class, 'index'])
                ->name('index');

            Route::scopeBindings()->group(function () {

                Route::get('/{department:slug}', [PublicDepartmentController::class, 'show'])
                    ->name('show');

                Route::get('/{department:slug}/papers', [PublicPaperController::class, 'dept_paper_show'])
                    ->name('papers.index');

                Route::get('/{department:slug}/papers/{paper:slug}/mcqs', [PublicDepartmentController::class, 'dept_paper_show'])
                    ->name('papers.show');

                Route::get(
                    '/{department:slug}/papers/{paper:slug}/mcqs/{mcq:slug}',
                    [PublicPaperController::class, 'paper_mcq']
                )
                    ->name('papers.mcq.show');
            });
        });

    Route::prefix('testing-services')->name('testing_services.')->group(function () {
        Route::get('/', [PublicTestingServiceController::class, 'index'])->name('index');
        Route::get('/{testingService:slug}', [PublicTestingServiceController::class, 'show'])->name('show');
    });

    Route::prefix('mcqs')->name('mcqs.')->group(function () {
        Route::get('/', [PublicMcqController::class, 'index'])->name('index');
        Route::get('/{mcq:slug}', [PublicMcqController::class, 'show'])->name('show');
    });

    Route::prefix('subjects')->name('subjects.')->group(function () {
        Route::get('/', [PublicSubjectController::class, 'index'])->name('index'); // optional
        Route::name('topics.')->group(function () {
            Route::get('/{subject:slug}/topics', [PublicSubjectController::class, 'topics'])->name('index');
            Route::get('/{subject:slug}/topics/{topic:slug}/mcqs', [PublicSubjectController::class, 'topics_show'])->name('show');
            Route::get('/{subject:slug}/topics/{topic:slug}/mcqs/{mcq:slug}', [PublicSubjectController::class, 'topic_mcq'])->name('mcq.show');
        });

        Route::get('/{subject:slug}/mcqs', [PublicSubjectController::class, 'show'])->name('show');
        Route::get('/{subject:slug}/mcqs/{mcq:slug}', [PublicSubjectController::class, 'subject_mcq'])->name('mcq.show');

        Route::get('/{subject:slug}', fn($subject) => redirect(route('public.subjects.show', $subject), 301));
    });



    Route::prefix('papers')->name('papers.')->group(function () {

        // 1. The main index
        Route::get('/', [PublicPaperController::class, 'index'])->name('index');

        // 2. Dynamic Category Routes
        // This matches: latest-papers, past-papers, or upcoming-papers
        Route::prefix('{category?}')->where(['category' => '(latest|past|upcoming)-papers'])->group(function () {

            // Category Index (e.g., /papers/past-papers)
            Route::get('/', [PublicPaperController::class, 'categoryIndex'])->name('category.index');

            // Paper Show (e.g., /papers/past-papers/math-2023/mcqs)
            Route::get('/{paper:slug}/mcqs', [PublicPaperController::class, 'show'])->name('category.show');

            // MCQ Show (e.g., /papers/past-papers/math-2023/mcqs/question-1)
            Route::get('/{paper:slug}/mcqs/{mcq:slug}', [PublicPaperController::class, 'paper_mcq'])->name('category.mcq.show');
        });

        // 3. Fallback/General Route (Optional)
        // For papers that don't fall into the 3 categories above
        Route::get('/{paper:slug}/mcqs', [PublicPaperController::class, 'show'])->name('show');

        // 4. Fallback/General Route (Optional)
        // For papers that don't fall into the 3 categories above
        Route::get('/{paper:slug}/mcqs/{mcq:slug}', [PublicPaperController::class, 'paper_mcq'])->name('mcq.show');
    });

    Route::middleware(['auth', 'verified', 'status:approved'])->group(function () {
        Route::get('/premium', [PremiumController::class, 'index'])->name('premium.index');
    });
});


// Search Route and Search API Route
Route::get('/api/search-suggestions', [SearchController::class, 'suggestions']);


require __DIR__ . '/settings.php';
