@props(['subject'])

<div class="group rounded-md bg-card py-2 px-4 shadow-sm transition-all hover:shadow-md md:p-6">
    <a href="{{ route('public.subject.show', $subject->slug) }}" class="block space-y-2">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                        </path>
                    </svg>
                </div>
                <h2 class="text-base md:text-lg lg:text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {{ $subject->name }}
                </h2>
            </div>
            <div class="flex items-center gap-2">
                <span class="hidden md:block text-sm text-muted mt-1">{{ $subject->mcqs_count }} MCQs</span>
                <x-heroicon-o-chevron-right
                    class="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </div>
        </div>
        <p class="mt-2 text-sm md:text-base text-muted line-clamp-2">{!! $subject->description !!}</p>
    </a>

    {{-- Limit only three topics loop --}}
    @if ($subject->topics->count() > 0)
    <div class="flex flex-wrap gap-2 mt-2 md:mt-4">
        @foreach ($subject->topics->take(3) as $topic)
        <a href="{{ route('public.subject.topic.show', ['subject' => $subject->slug, 'topic' => $topic->slug]) }}"
            class="items-center justify-center rounded-full text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] bg-primary/60 text-secondary-foreground [a&]:hover:bg-secondary/90 block max-w-xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent">
            {{ $topic->name }}
        </a>
        @endforeach
    </div>
    @endif
    @if ($subject->updated_at)
    <div class="mt-2 flex items-center gap-1 text-xs text-gray-500 md:text-sm">
        <x-heroicon-o-clock class="h-4 w-4" />
        <span>Last updated: {{ $subject->updated_at->diffForHumans() }}</span>
    </div>
    @endif
</div>