<section class="max-w-7xl mx-auto px-4 py-12 lg:px-0">
    <!-- Header -->
    <header class="flex flex-col-reverse md:flex-row items-center mb-6 justify-between gap-6">
        {!! $pageHeader ?? '' !!}
    </header>

    <!-- Main Body -->
    <div class="grid gap-8 lg:grid-cols-3">
        <!-- Main Area -->
        <main class="lg:col-span-2">
            {!! $pageMain ?? '' !!}
        </main>

        <!-- Sidebar -->
        <aside class="lg:col-span-1">
            {!! $pageAside ?? '' !!}
        </aside>
    </div>

    <!-- Extra full-width content -->
    @isset($pageContent)
    <div>
        {!! $pageContent !!}
    </div>
    @endisset
</section>
