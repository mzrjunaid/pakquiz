<?php

namespace App\Http\Controllers\lms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LMSController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('lms/home/index');
    }

    public function subjectShow()
    {
        return Inertia::render('lms/subjects/show');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    //
    }
}
