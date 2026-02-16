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
Route::post('/set-mcq-mode', [HomeController::class, 'setMcqMode'])->name('McqMode');

Route::name('public.')->group(function () {
    Route::get('/search', [SearchController::class, 'index'])
        ->name('search');

    Route::get('/departments', [PublicDepartmentController::class, 'index'])->name('departments.index');
    Route::get('/departments/{department:slug}/papers', [PublicDepartmentController::class, 'show'])->name('departments.show');

    Route::get('/testing-services', [PublicTestingServiceController::class, 'index'])->name('testing_services.index');
    Route::get('/testing-services/{testingService:slug}', [PublicTestingServiceController::class, 'show'])->name('testing_services.show');

    Route::get('/mcqs', [PublicMcqController::class, 'index'])->name('mcqs.index');
    Route::get('/mcqs/{mcq:slug}', [PublicMcqController::class, 'show'])->name('mcqs.show');

    Route::prefix('subjects')->name('subjects.')->group(function () {
        Route::get('/', [PublicSubjectController::class, 'index'])->name('index'); // optional

        Route::get('/{subject:slug}/{mcqs?}', [PublicSubjectController::class, 'show'])->where('mcqs', 'mcqs')->name('show');
        Route::get('/{subject:slug}/mcqs/{mcq:slug}', [PublicSubjectController::class, 'subject_mcq'])->name('mcq.show');

        Route::prefix('topics')->name('topics.')->group(function () {
            Route::get('/{subject:slug}/{topics?}', [PublicSubjectController::class, 'topics'])->where('topics', 'topics')->name('index');
            Route::get('/{subject:slug}/topics/{topic:slug}/{mcqs?}', [PublicSubjectController::class, 'topics_show'])->where('mcqs', 'mcqs')->name('show');
            Route::get('/{subject:slug}/topics/{topic:slug}/mcqs/{mcq:slug}', [PublicSubjectController::class, 'topic_mcq'])->name('mcq.show');
        });
    });

    Route::prefix('papers')->name('papers.')->group(function () {

        Route::get('/', [PublicPaperController::class, 'index'])->name('index'); // optional
        Route::get('/latest-papers', [PublicPaperController::class, 'latest_papers'])->name('latest_papers');
        Route::get('/past-papers', [PublicPaperController::class, 'past_papers'])->name('past_papers');
        Route::get('/upcoming-papers', [PublicPaperController::class, 'upcoming_papers'])->name('upcoming_papers');


        Route::get('/{paper:slug}/{mcqs?}', [PublicPaperController::class, 'show'])->where('mcqs', 'mcqs')->name('show');
        Route::get('/{paper:slug}/mcqs/{mcq:slug}', [PublicPaperController::class, 'paper_mcq'])->name('mcq.show');
    });

    Route::middleware(['auth', 'verified', 'status:approved'])->group(function () {
        Route::get('/premium', [PremiumController::class, 'index'])->name('premium.index');
    });
});


require __DIR__ . '/settings.php';
