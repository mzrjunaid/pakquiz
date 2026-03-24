<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        {{ $title ?? config('app.name', 'Pak Quiz') }}
    </title>
    <link rel="canonical" href="{{ $canonical ?? config('app.url', 'https://www.pakquiz.com') }}" />

    <meta name="description" content="{{ $description ?? config('app.description', 'Pak Quiz') }}">
    @stack('meta')

    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Pak Quiz">
    <meta property="og:locale" content="en_PK">


    {{-- Favicon --}}
    <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="any">
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/svg+xml">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">

    {{-- Facebook APP ID --}}
    <meta property="fb:app_id" content="4660495490860175">

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
