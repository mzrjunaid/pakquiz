<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
    <link rel="preconnect" href="https://www.clarity.ms" crossorigin />
    <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    <link rel="dns-prefetch" href="https://www.clarity.ms" />


    <title>{{ strip_tags($title ?? config('app.name', 'PakQuiz')) }}</title>

    <link rel="canonical" href="{{ $canonical ?? config('app.url', 'https://pakquiz.com') }}" />

    <meta name="description"
        content="{{ strip_tags($description ?? config('app.description', 'Pakistan\'s largest quiz website for FPSC, PPSC, NTS, CSS & competitive exam preparation.')) }}" />

    {{-- keywords: ignored by Google, still used by Bing — costs nothing --}}
    @if(! empty($keywords))
        <meta name="keywords" content="{{ strip_tags($keywords) }}" />
    @endif

    {{-- author: E-E-A-T signal — override per page for individual authors --}}
    <meta name="author" content="{{ $author ?? 'PakQuiz' }}" />

    {{-- robots: dynamic — lets paginated/search pages set noindex --}}
    <meta name="robots" content="{{ $robots ?? 'index, follow' }}" />

    {{-- hreflang: only if you have localized versions of the page — adjust as needed --}}
    <link rel="alternate" hreflang="en-PK" href="{{ $canonical ?? config('app.url') }}" />
    <link rel="alternate" hreflang="x-default" href="{{ $canonical ?? config('app.url') }}" />

    {{-- ── 4. Open Graph / Facebook ─────────────────────────────────────── --}}
    <meta property="fb:app_id" content="{{ config('services.facebook.app_id') }}" />
    <meta property="og:type" content="{{ $ogType ?? 'website' }}" />
    <meta property="og:site_name" content="PakQuiz" />
    <meta property="og:locale" content="en_PK" />
    <meta property="og:url" content="{{ $canonical ?? config('app.url') }}" />
    <meta property="og:title" content="{{ strip_tags($title ?? config('app.name', 'PakQuiz')) }}" />
    <meta property="og:description" content="{{ strip_tags($description ?? config('app.description')) }}" />
    <meta property="og:image" content="{{ $image ?? asset('assets/images/og-main.png') }}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="{{ $imageType ?? 'image/png' }}" />
    <meta property="og:image:alt" content="{{ strip_tags($title ?? 'PakQuiz — Pakistan\'s Largest Quiz Website') }}" />

    {{-- ── 5. Twitter / X Card ────────────────────────────────────────── --}}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@pakquiz" />
    <meta name="twitter:creator" content="@pakquiz" />
    <meta name="twitter:title" content="{{ strip_tags($title ?? config('app.name', 'PakQuiz')) }}" />
    <meta name="twitter:description" content="{{ strip_tags($description ?? config('app.description')) }}" />
    <meta name="twitter:image" content="{{ $image ?? asset('assets/images/og-main.png') }}" />
    <meta name="twitter:image:alt" content="{{ strip_tags($title ?? 'PakQuiz') }}" />

    {{-- ── 6. Favicon + PWA ───────────────────────────────────────────── --}}
    <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="any" />
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}" />
    <!-- <link rel="manifest" href="{{ asset('manifest.json') }}"> -->

    {{-- ── 7. Browser meta ─────────────────────────────────────────────── --}}
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="theme-color" content="#FDFDFC" />
    <meta name="application-name" content="PakQuiz" />

    {{-- ── 8. Alpine x-cloak ──────────────────────────────────────────── --}}
    <style>
        [x-cloak] {
            display: none !important;
        }
    </style>

    {{-- ── 9. Resource hints + assets ────────────────────────────────────
    Order matters: CSS preload first (render-critical), then JS.
    Fonts need crossorigin because they are CORS requests.
    ──────────────────────────────────────────────────────────────────────── --}}
    <link rel="preload" href="{{ Vite::asset('resources/css/app.css') }}" as="style" />
    <link rel="preload" href="{{ Vite::asset('resources/js/public.js') }}" as="script" />
    <link rel="preload" href="{{ Vite::asset('resources/fonts/woff2/Roboto.woff2') }}" as="font" type="font/woff2"
        crossorigin />
    <link rel="preload" href="{{ Vite::asset('resources/fonts/woff2/NotoNastaliqUrdu.woff2') }}" as="font"
        type="font/woff2" crossorigin />

    @vite(['resources/css/app.css', 'resources/js/public.js'])

    {{-- ── 10. Schema + Livewire styles ──────────────────────────────── --}}
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
    <x-toaster-hub />
    @livewireScripts

    {{-- Google Analytics --}}
    <script async
        src="https://www.googletagmanager.com/gtag/js?id={{ config('services.google.analytics_id', 'G-ZVYX92FGJV') }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-ZVYX92FGJV');
    </script>

    {{-- Microsoft Clarity — fires after page load, zero LCP impact --}}
    <script>
        window.addEventListener('load', function () {
            (function (c, l, a, r, i, t, y) {
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t = l.createElement(r); t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "{{ config('services.clarity.id', 'w9eg6p0fke') }}");
        });
    </script>
</body>

</html>
