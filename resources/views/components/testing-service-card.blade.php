@props([
'testingService'
])


<div class="group rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:p-6">
    <a href="{{ route('public.testing_services.show', $testingService->slug) }}" class="block space-y-2">
        <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <x-heroicon-o-document-text class="h-4 w-4 shrink-0" />
                </div>
                <div class="flex flex-col">
                    <h3
                        class="text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl line-clamp-1">
                        {{ $testingService->name }}
                    </h3>
                </div>
            </div>
            <!-- <div class="flex items-center shrink-0 gap-2">
                <span class="text-sm text-muted mt-1">{{ $testingService->papers_count }} Papers</span>
                <x-heroicon-o-chevron-right
                    class="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </div> -->
        </div>
        @if ($testingService->description)
            <div class="flex items-center gap-2 px-2">
                <div class="mt-2 text-sm text-muted line-clamp-2">{!! str($testingService->description)->limit(200, '... <span class="text-primary underline">Read More</span>')->markdown() !!}</div>
            </div>
        @endif
    </a>

    <div class="flex flex-wrap gap-2 mt-4">
        @if ($testingService->papers->count() > 0)
        @foreach ($testingService->papers->take(3) as $paper)
        <div class="flex gap-2">
            <a href="{{ route('public.papers.show', $paper->slug) }}"
                class="rounded-full bg-primary/60 text-secondary-foreground hover:bg-primary/80 px-2 py-1 text-xs block max-w-[200px] lg:max-w-md truncate whitespace-nowrap font-semibold">
                {{ $paper->name }}
            </a>
        </div>
        @endforeach
        @endif
    </div>
</div>
