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

    @vite(['resources/css/app.css', 'resources/js/public.js'])
    {{ $schema ?? '' }}
    @livewireStyles
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
