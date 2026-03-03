<?php

namespace App\Http\Middleware;

use App\Services\Seo\SeoResolver;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        $flash = [
            'success' => $request->session()->get('success'),
            'error' => $request->session()->get('error'),
            'warning' => $request->session()->get('warning'),
            'info' => $request->session()->get('info'),
            'message' => $request->session()->get('message'),
        ];

        // Clear flash messages after getting them
        $request->session()->forget(['success', 'error', 'warning', 'info', 'message']);

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'base_url' => config('app.url'),
            'seo' => app(SeoResolver::class)->resolve($request),
            'isQuizMode' => fn() => session('isQuizMode', false),
            'sidebarOpen' => (bool)($request->cookie('sidebar_state', 'false') === 'true'),
            'flash' => array_filter($flash, fn($value) => $value !== null)
        ];
    }
}
