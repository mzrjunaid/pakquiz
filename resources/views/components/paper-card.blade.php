@props(['paper', 'level' => 'h2'])

@php
    $levelClass = match($level) {
        'h1' => 'text-2xl md:text-3xl',
        'h2' => 'text-xl md:text-2xl',
        'h3' => 'text-base md:text-lg',
        'h4' => 'text-sm md:text-base',
        default => 'text-sm md:text-base',
    };
@endphp

<div class="group rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:p-6">
    <a href="{{ route('public.papers.show', $paper->slug) }}" class="block space-y-2">
        <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <x-heroicon-o-document-text class="h-4 w-4 shrink-0" />
                </div>
                <div class="flex flex-col">
                    <h3
                        class="{{ $levelClass }} font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl line-clamp-1">
                        {{ $paper->name }}
                    </h3>
                    <span
                        class="text-sm text-muted mt-1">{{ $paper->schedule_at ? $paper->schedule_at->format('d M, Y') : $paper->paper_year }}</span>
                </div>
            </div>
            <div class="flex items-center shrink-0 gap-2">
                <span class="text-sm text-muted mt-1">{{ $paper->mcqs_count }} MCQs</span>
                <x-heroicon-o-chevron-right
                    class="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </div>
        </div>
        <div class="flex items-center gap-2 px-2">
            <div class="mt-2 text-sm text-muted line-clamp-2">{!! html_entity_decode($paper->description ?? 'No description available') !!}</div>
        </div>
    </a>

    <div class="flex flex-wrap gap-2 mt-4">
        @if ($paper->department)
            <div class="flex gap-2">
                <a href="{{ route('public.departments.show', $paper->department->slug) }}"
                    class="rounded-full bg-primary/60 text-secondary-foreground hover:bg-primary/80 px-2 py-1 text-xs block max-w-[200px] lg:max-w-md truncate whitespace-nowrap font-semibold">
                    {{ $paper->department->name }}
                </a>
            </div>
        @endif

        @if ($paper->subject)
            <div class="flex gap-2">
                <a href="{{ route('public.subject.show', $paper->subject->slug) }}"
                    class="rounded-full bg-primary/60 text-secondary-foreground hover:bg-primary/80 px-2 py-1 text-xs block max-w-[200px] lg:max-w-md truncate whitespace-nowrap font-semibold">
                    {{ $paper->subject->name }}
                </a>
            </div>
        @endif

        @if ($paper->testingService)
            <div class="flex gap-2">
                <a href="{{ route('public.testing_services.show', $paper->testingService->slug) }}"
                    class="rounded-full bg-primary/60 text-secondary-foreground hover:bg-primary/80 px-2 py-1 text-xs block max-w-[200px] lg:max-w-md truncate whitespace-nowrap font-semibold">
                    {{ $paper->testingService->short_name }}
                </a>
            </div>
        @endif

        @if($paper->created_at->gt(now()->subDays(2)))
            <span class="absolute top-4 right-8 animate-bounce rounded-full bg-primary/80 text-secondary-foreground hover:bg-primary/90 px-1.5 py-0.5 md:px-2 md:py-1 text-xs block max-w-[80px] md:max-w-md truncate whitespace-nowrap font-semibold">{{ __('New') }}</span>
        @endif
    </div>
</div>
