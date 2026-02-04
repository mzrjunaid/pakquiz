<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: #ffffff;
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: #0a0a0a;
            background-color: oklch(0.145 0 0);
        }
    </style>

    <title inertia>{{ $page['props']['seo']['title'] ?? config('app.name') }}</title>

    {{-- ✅ Basic SEO --}}
    <meta name="description"
        content="{{ $page['props']['seo']['description']
          ?? 'Pak Quiz is an AI-powered learning platform offering MCQs, past papers, and job test preparation for FPSC, PPSC, NTS, and other exams in Pakistan.' }}">

    <meta name="robots" content="index, follow">

    <link rel="canonical"
        href="{{ $page['props']['seo']['canonical'] ?? url()->current() }}">

    @if(!empty($page['props']['seo']['prev']))
    <link rel="prev" href="{{ $page['props']['seo']['prev'] }}">
    @endif

    @if(!empty($page['props']['seo']['next']))
    <link rel="next" href="{{ $page['props']['seo']['next'] }}">
    @endif


    {{-- ✅ Open Graph --}}
    <meta property="og:title"
        content="{{ $page['props']['seo']['og_title'] ?? 'Pak Quiz – AI Powered Learning & Test Preparation' }}">

    <meta property="og:description"
        content="{{ $page['props']['seo']['og_description'] ?? 'Practice MCQs, prepare past papers, and succeed in competitive exams across Pakistan.' }}">

    <meta property="og:image"
        content="{{ $page['props']['seo']['og_image'] ?? asset('logo.png') }}">

    <meta property="og:url"
        content="{{ $page['props']['seo']['canonical'] ?? url()->current() }}">

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Pak Quiz">
    <meta property="og:locale" content="en_PK">


    {{-- ✅ Twitter --}}
    <meta name="twitter:card" content="summary_large_image">

    <meta name="twitter:title"
        content="{{ $page['props']['seo']['og_title'] ?? 'Pak Quiz – AI-Powered MCQs & Job Test Preparation' }}">

    <meta name="twitter:description"
        content="{{ $page['props']['seo']['og_description'] ?? 'Pak Quiz offers a vast collection of AI-enhanced MCQs to help you prepare for PPSC, NTS, FPSC, CSS, PMS, and other exams in Pakistan.' }}">

    <meta name="twitter:image"
        content="{{ $page['props']['seo']['og_image'] ?? asset('logo.png') }}">


    {{-- Favicon --}}
    <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="any">
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/svg+xml">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">


    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#ffffff">

    <link
        rel="preload"
        href="{{ asset('fonts/woff2/NotoNastaliqUrdu.woff2') }}"
        as="font"
        type="font/woff2"
        crossorigin />


    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
