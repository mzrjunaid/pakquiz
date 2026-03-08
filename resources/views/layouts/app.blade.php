<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        {{ $title ?? config('app.name', 'Pak Quiz') }}
    </title>



    @stack('meta')
    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Pak Quiz">
    <meta property="og:locale" content="en_PK">


    {{-- Favicon --}}
    <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="any">
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/svg+xml">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">


    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#FDFDFC">

    <link rel="preload" href="{{ asset('fonts/woff2/NotoNastaliqUrdu.woff2') }}" as="font" type="font/woff2"
        crossorigin />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    @vite(['resources/css/app.css', 'resources/js/public.js'])
    {{ $schema ?? '' }}
    @livewireStyles
</head>

<body class="bg-background/30 text-foreground font-sans antialiased min-h-screen">
    <x-navbar />
    <main class="max-w-7xl mx-auto px-6 lg:px-8">
        {{ $slot }}
    </main>
    @include('partials.footer')
    @livewireScripts
</body>

</html>
