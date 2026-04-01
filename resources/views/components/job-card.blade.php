@props(['job'])

<div class="group rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:p-6">
    <a href="{{ route('public.jobs.show', $job->slug) }}" class="block space-y-2">
        <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <x-heroicon-o-newspaper class="h-4 w-4 shrink-0" />
                </div>
                <div class="flex flex-col">
                    <h3
                        class="text-base sm:text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl line-clamp-1">
                        {{ $job->title }}
                    </h3>
                    <span class="text-xs md:text-sm text-muted mt-1">
                        Apply Before: {{ $job->closing_date ? $job->closing_date->format('d-m-Y') : 'N/A' }}
                    </span>
                </div>
            </div>
            <div class="flex items-center shrink-0 gap-2">
                <span class="text-xs md:text-sm font-semibold text-muted mt-1">{{ $job->total_posts }} Posts</span>
                <x-heroicon-o-chevron-right
                    class="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </div>
        </div>
        <div class="flex items-center gap-2 px-2">
            <p class="text-xs md:text-sm text-muted line-clamp-2">{{ $job->description ?? 'No description available' }}</p>
        </div>
    </a>

    <div class="flex flex-wrap gap-2 mt-4">
        @if ($job->department)
            <div class="flex gap-2">
                <a href="{{ route('public.departments.show', $job->department->slug) }}"
                    class="rounded-full bg-primary/60 text-secondary-foreground hover:bg-primary/80 px-2 py-1 text-xs block max-w-[200px] lg:max-w-md truncate whitespace-nowrap font-semibold">
                    {{ $job->department->name }}
                </a>
            </div>
        @endif

        @if ($job->ad_number)
            <div class="flex gap-2">
                <span
                    class="rounded-full bg-primary/60 text-secondary-foreground hover:bg-primary/80 px-2 py-1 text-xs block max-w-[200px] lg:max-w-md truncate whitespace-nowrap font-semibold">
                    {{ $job->ad_number }}
                </span>
            </div>
        @endif

        @if ($job->testingService)
            <div class="flex gap-2">
                <a href="{{ route('public.testing_services.show', $job->testingService->slug) }}"
                    class="rounded-full bg-primary/60 text-secondary-foreground hover:bg-primary/80 px-2 py-1 text-xs block max-w-[200px] lg:max-w-md truncate whitespace-nowrap font-semibold">
                    {{ $job->testingService->short_name }}
                </a>
            </div>
        @endif

        @if($job->created_at->gt(now()->subDays(2)))
            <span class="absolute top-4 right-8 animate-bounce rounded-full bg-primary/80 text-secondary-foreground hover:bg-primary/90 px-1.5 py-0.5 md:px-2 md:py-1 text-xs block max-w-[80px] md:max-w-md truncate whitespace-nowrap font-semibold">{{ __('New') }}</span>
        @endif
    </div>
</div>
