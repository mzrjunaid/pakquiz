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

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Nastaliq+Urdu:wght@400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">

    @vite(['resources/css/app.css', 'resources/js/public.js'])
    {{ $schema ?? '' }}
    @livewireStyles
</head>

<body class="bg-background/30 text-foreground font-sans font-normal antialiased min-h-screen">
    <livewire:navbar />
    <main>
        {{ $slot }}
    </main>
    <livewire:footer />
    @livewireScripts
</body>

</html>
