<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        {{ $title ?? config('app.name', 'PakQuiz') }}
    </title>
    <link rel="canonical" href="{{ $canonical ?? config('app.url', 'https://www.pakquiz.com') }}" />
    <meta name="description" content="{{ $description ?? config('app.description', 'PakQuiz') }}">
    <meta name="robots" content="index, follow" />

    <!-- Open Graph / Facebook -->
    <meta property="fb:app_id" content="26509571205343495">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="PakQuiz">
    <meta property="og:locale" content="en_PK">
    <meta property="og:url" content="{{ $canonical ?? config('app.url', 'https://www.pakquiz.com') }}" />
    <meta property="og:title" content="{{ $title ?? config('app.name', 'PakQuiz') }}" />
    <meta property="og:description" content="{{ $description ?? config('app.description', 'PakQuiz') }}" />
    <meta property="og:image" content="{{ $image ?? asset('assets/images/og-main.png') }}" />
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <!-- Twitter/X Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@pakquiz" />
    <meta name="twitter:creator" content="@pakquiz" />
    <meta name="twitter:title" content="{{ $title ?? config('app.name', 'PakQuiz') }}" />
    <meta name="twitter:description" content="{{ $description ?? config('app.description', 'PakQuiz') }}" />
    <meta name="twitter:image" content="{{ $image ?? asset('assets/images/og-main.png') }}" />




    {{-- Favicon --}}
    <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="any">
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/svg+xml">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#FDFDFC">

    <style>
        [x-cloak] {
            display: none !important;
        }
    </style>

    <link rel="preload" href="{{ Vite::asset('resources/js/public.js') }}" as="script">
    <link rel="preload" href="{{ Vite::asset('resources/css/app.css') }}" as="style">
    <link rel="preload" href="{{ Vite::asset('resources/fonts/woff2/Roboto.woff2') }}" as="font"
        type="font/woff2" crossorigin>
    <link rel="preload" href="{{ Vite::asset('resources/fonts/woff2/NotoNastaliqUrdu.woff2') }}" as="font"
        type="font/woff2" crossorigin>

    @vite(['resources/css/app.css', 'resources/js/public.js'])
    {{ $schema ?? '' }}
    @livewireStyles

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZVYX92FGJV"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-ZVYX92FGJV');
    </script>



</head>

<body class="bg-background/30 text-foreground font-sans font-normal antialiased min-h-screen">
    <livewire:navbar />
    <main>
        {{ $slot }}
        <livewire:quiz-settings class="fixed bottom-4 right-4 z-50 md:hidden" />
    </main>
    <livewire:footer />
    @livewireScripts
</body>

</html>
