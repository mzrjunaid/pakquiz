<?php

use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\Admin\McqController;
use App\Http\Controllers\Admin\SeoMetaController;
use App\Http\Controllers\Admin\TestingServiceController;
use App\Http\Controllers\Admin\SubjectController;
use App\Http\Controllers\Admin\TopicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified', 'role:admin,super-admin,editor', 'status:approved'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('testing-services', TestingServiceController::class);

    Route::resource('departments', DepartmentController::class);

    Route::resource('subjects', SubjectController::class);

    Route::resource('topics', TopicController::class);

    Route::resource('mcqs', McqController::class);

    // Route::resource('seo', SeoMetaController::class);
});

require __DIR__ . '/settings.php';
