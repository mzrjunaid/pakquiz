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
Route::get('/contact-us', [HomeController::class, 'contact_us'])->name('contact-us');
Route::get('/privacy-policy', [HomeController::class, 'privacy_policy'])->name('privacy-policy');
Route::get('/terms-of-service', [HomeController::class, 'terms_of_service'])->name('terms-of-service');
Route::get('/help-center', [HomeController::class, 'help_center'])->name('help-center');
Route::post('/set-mcq-mode', [HomeController::class, 'setMcqMode'])->name('set-mcq-mode');

Route::name('public.')->group(function () {

    Route::get('/search', [SearchController::class, 'index'])
        ->name('search');

    Route::get('/departments', [PublicDepartmentController::class, 'index'])->name('departments.index');
    Route::get('/departments/{department:slug}', [PublicDepartmentController::class, 'show'])->name('departments.show');

    Route::get('/testing-services', [PublicTestingServiceController::class, 'index'])->name('testing-services.index');
    Route::get('/testing-services/{testingService:slug}', [PublicTestingServiceController::class, 'show'])->name('testing-services.show');

    Route::get('/mcqs', [PublicMcqController::class, 'index'])->name('mcqs.index');
    Route::get('/mcqs/{mcq:slug}', [PublicMcqController::class, 'show'])->name('mcqs.show');

    Route::get('/subjects', [PublicSubjectController::class, 'index'])->name('subjects.index'); // optional
    Route::get('/subjects/{subject:slug}', [PublicSubjectController::class, 'show'])->name('subjects.show');
    Route::get('/subjects/{subject:slug}/{topic:slug}', [PublicSubjectController::class, 'topic'])->name('subjects.topic');

    Route::get('/papers', [PublicPaperController::class, 'index'])->name('papers.index'); // optional
    Route::get('/papers/{paper:slug}', [PublicPaperController::class, 'show'])->name('papers.show');

    Route::get('/topics/{topic:slug}', [PublicTopicController::class, 'show'])->name('topics.show'); // if used

    Route::get('/premium', [PremiumController::class, 'index'])->name('premium.index');
});


require __DIR__ . '/settings.php';
