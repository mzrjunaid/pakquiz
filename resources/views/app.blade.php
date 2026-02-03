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

    <title inertia>{{ config('app.name', 'Pak Quiz - AI Powered Learning (Job & Test Preparation)') }}</title>
    <meta
        name="description"
        content="Pak Quiz is an AI-powered learning platform offering MCQs, past papers, and job test preparation for FPSC, PPSC, NTS, and other exams in Pakistan." />

    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="{{ url()->current() }}" />


    <meta property="og:title" content="Pak Quiz – AI Powered Learning & Test Preparation">
    <meta property="og:description" content="Practice MCQs, prepare past papers, and succeed in competitive exams across Pakistan.">
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Pak Quiz" />
    <meta property="og:locale" content="en_PK" />

    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <link rel="preconnect" href="https://fonts.bunny.net" />
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet" />

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
