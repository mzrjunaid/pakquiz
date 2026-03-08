<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class navbar extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.navbar', [
            'nav' => config('navigation.public.nav'),
            'subjects' => config('navigation.public.subjects'),
            'papers' => config('navigation.public.papers'),
            'about_us' => config('navigation.public.about_us'),
        ]);
    }
}
