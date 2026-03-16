@props(['paper'])

<div class="group rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:p-6">
    <a href="{{ route('public.papers.show', $paper->slug) }}" class="block space-y-2">
        <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <x-heroicon-o-document-text class="h-4 w-4 shrink-0" />
                </div>
                <div class="flex flex-col">
                    <h3 class="text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl line-clamp-1">
                        {{ $paper->name }}
                    </h3>
                    <span class="text-sm text-muted mt-1">{{ $paper->schedule_at ? $paper->schedule_at->format('d M, Y') : $paper->paper_year }}</span>
                </div>
            </div>
            <div class="flex items-center shrink-0 gap-2">
                <span class="text-sm text-muted mt-1">{{ $paper->mcqs_count }} MCQs</span>
                <x-heroicon-o-chevron-right
                    class="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </div>
        </div>
        <div class="flex items-center gap-2 px-2">
            <p class="mt-2 text-sm text-muted line-clamp-2">{{ $paper->description  ?? 'No description available' }}</p>
        </div>
    </a>

    <div class="flex gap-2 mt-4">
        @if ($paper->department)
        <div class="flex gap-2">
            <a href="{{ route('public.departments.show', $paper->department->slug) }}"
                class="items-center justify-center rounded-full text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] bg-primary/60 text-secondary-foreground [a&]:hover:bg-secondary/90 block max-w-xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent">
                {{ $paper->department->name }}
            </a>
        </div>
        @endif

        @if ($paper->subject)
        <div class="flex gap-2">
            <a href="{{ route('public.subject.show', $paper->subject->slug) }}"
                class="items-center justify-center rounded-full text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] bg-primary/60 text-secondary-foreground [a&]:hover:bg-secondary/90 block max-w-xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent">
                {{ $paper->subject->name }}
            </a>
        </div>
        @endif

        @if ($paper->testingService)
        <div class="flex gap-2">
            <a href="{{ route('public.testing_services.show', $paper->testingService->slug) }}"
                class="items-center justify-center rounded-full text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] bg-primary/60 text-secondary-foreground [a&]:hover:bg-secondary/90 block max-w-xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent">
                {{ $paper->testingService->short_name }}
            </a>
        </div>
        @endif
    </div>
</div>