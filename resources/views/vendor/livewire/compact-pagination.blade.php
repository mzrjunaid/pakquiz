@php
    $classes = [
        'active' =>
            'h-7 sm:h-9 px-2 sm:px-3 flex items-center justify-center rounded-sm border hover:bg-accent hover:border-accent text-sm font-medium transition-colors cursor-pointer',
        'inactive' =>
            'h-7 sm:h-9 px-2 sm:px-3 flex items-center justify-center hover:bg-accent hover:border-accent rounded-sm transition-colors cursor-pointer',
    ];
@endphp




<div class="flex flex-col-reverse gap-4 items-center md:flex-row md:justify-between">
    <div>
        <p class="text-xs sm:text-sm text-gray-700 leading-5 dark:text-gray-400">
            <span>{!! __('Showing') !!}</span>
            <span class="font-medium">{{ $paginator->firstItem() }}</span>
            <span>{!! __('to') !!}</span>
            <span class="font-medium">{{ $paginator->lastItem() }}</span>
            <span>{!! __('of') !!}</span>
            <span class="font-medium">{{ $paginator->total() }}</span>
            <span>{!! __('results') !!}</span>
        </p>
    </div>

    @if ($paginator->hasPages())
        <nav class="flex items-center gap-1">
            <!-- Previous -->
            @if ($paginator->onFirstPage())
                <span class="{{ $classes['inactive'] }}">
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
            @else
                <button type="button" wire:click="previousPage('{{ $paginator->getPageName() }}')"
                    aria-label="{{ __('pagination.previous') }}" class="{{ $classes['inactive'] }}">
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            @endif


            <!-- Page numbers -->
            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}

                @if (is_string($element))
                    <span class="w-4 text-center text-sm">{{ $element }}</span>
                @endif


                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        <span wire:key="paginator-{{ $paginator->getPageName() }}-page{{ $page }}">
                            @if ($page == $paginator->currentPage())
                                <span aria-current="page" class="{{ $classes['active'] }}">{{ $page }}</span>
                            @else
                                <button type="button"
                                    wire:click="gotoPage({{ $page }}, '{{ $paginator->getPageName() }}')"
                                    aria-label="{{ __('Go to page :page', ['page' => $page]) }}"
                                    class="{{ $classes['inactive'] }}">{{ $page }}</button>
                            @endif
                        </span>
                    @endforeach
                @endif
            @endforeach


            <!-- Next -->
            @if ($paginator->hasMorePages())
                <button type="button" wire:click="nextPage('{{ $paginator->getPageName() }}')"
                    aria-label="{{ __('pagination.next') }}" class="{{ $classes['inactive'] }}">
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            @else
                <span class="{{ $classes['inactive'] }}">
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
            @endif
        </nav>
    @endif

</div>
