@props(['mcq', 'idx' => 0, 'route' => '#', 'isQuizMode' => false])

@php
    $idx = $idx + 1;
    $correctOption = collect($mcq['options'])->firstWhere('is_correct', true);

    $difficultyClasses =
        [
            'easy' => 'bg-green-100 text-green-700 border-green-200',
            'medium' => 'bg-yellow-100 text-yellow-700 border-yellow-500',
            'hard' => 'bg-red-100 text-red-700 border-red-500',
        ][strtolower($mcq['difficulty'])] ?? 'bg-gray-100 text-gray-700';
@endphp

<div x-data="{
    selectedOptionId: null,
    wasAnswered: false,
    isQuizMode: @js($isQuizMode),
    shareLink() {
        navigator.clipboard.writeText('{{ url($route) }}');
        window.dispatchEvent(new CustomEvent('notify', { detail: 'Link copied!' }));
    },
    selectOption(id) {
        if (!this.isQuizMode || this.wasAnswered) return;
        this.selectedOptionId = id;
        this.wasAnswered = true;
    }
}"
    :class="{
        'border-green-500 bg-green-50': wasAnswered && selectedOptionId == {{ $correctOption->id ?? 'null' }},
        'border-red-500 bg-red-50': wasAnswered && selectedOptionId != {{ $correctOption->id ?? 'null' }},
        'border-gray-200 bg-white': !wasAnswered
    }"
    class="rounded-md border px-2 py-4 shadow-sm lg:rounded-xl lg:p-5 transition-colors duration-200">
    <div class="mb-2 flex flex-col-reverse md:flex-row md:justify-between gap-2">
        <div class="flex flex-wrap items-center gap-2">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-gray-50">
                <x-heroicon-s-cpu-chip class="mr-1 h-3 w-3" /> AI
            </span>
            <span :class="isQuizMode ? 'border-red-500 text-red-600' : 'border-green-500 text-green-600'"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-white">
                <span x-text="isQuizMode ? '📝 Quiz' : '📖 Study'"></span>
            </span>
            @if ($mcq['difficulty'])
                <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border {{ $difficultyClasses }} capitalize">
                    {{ $mcq['difficulty'] }}
                </span>
            @endif
        </div>

        <div class="flex items-center justify-end space-x-1">
            @if ($mcq['subject'])
                <a href="{{ route('public.subject.show', $mcq['subject']['slug']) }}"
                    class="px-2 py-1 bg-primary text-white text-xs rounded truncate max-w-[100px] md:max-w-none">
                    {{ $mcq['subject']['name'] }}
                </a>
            @endif
            <button @click="shareLink" title="share" class="p-2 hover:bg-accent rounded-full">
                <x-heroicon-o-share class="h-5 w-5" />
            </button>
        </div>
    </div>

    <h2 class="my-6 text-sm font-semibold lg:text-base">
        <a href="{{ $route }}" class="hover:text-primary">
            Question {{ $idx }}: {{ $mcq['question'] }}
        </a>
    </h2>

    <div class="grid gap-2 md:grid-cols-2 lg:gap-3">
        @foreach ($mcq['options'] as $optIdx => $opt)
            <button @click="selectOption({{ $opt->id }})" :disabled="!isQuizMode || wasAnswered"
                :class="{
                    'border-green-500 bg-green-50': (wasAnswered || !isQuizMode) &&
                        {{ $opt->is_correct ? 'true' : 'false' }},
                    'border-red-500 bg-red-100': wasAnswered && selectedOptionId == {{ $opt->id }} && !
                        {{ $opt->is_correct ? 'true' : 'false' }},
                    'border-gray-200 bg-white/60 hover:border-primary': !wasAnswered || (isQuizMode && !wasAnswered)
                }"
                class="w-full rounded-md border p-2 text-left text-sm transition md:p-3 lg:rounded-lg lg:border-2 lg:text-base flex items-center gap-2">
                <span class="font-bold uppercase text-gray-400">
                    {{ chr(65 + $optIdx) }}.
                </span>
                <span>{{ $opt->option_text }}</span>

                <template x-if="(wasAnswered || !isQuizMode) && {{ $opt->is_correct ? 'true' : 'false' }}">
                    <span class="ml-auto text-green-600 font-bold">✓</span>
                </template>
                <template
                    x-if="wasAnswered && selectedOptionId == {{ $opt->id }} && !{{ $opt->is_correct ? 'true' : 'false' }}">
                    <span class="ml-auto text-red-600 font-bold">✗</span>
                </template>
            </button>
        @endforeach
    </div>

    @if ($mcq['explanation'])
        <div x-data="{ open: !isQuizMode }" class="mt-4 border-t pt-2 group" x-show="wasAnswered || !isQuizMode">
            <button @click="open = !open" class="flex items-center justify-between w-full text-sm font-medium py-2">
                <span>Explanation</span>
                <x-heroicon-o-chevron-down class="h-4 w-4 transform transition-transform group-hover:text-primary"
                    x-bind:class="open ? 'rotate-180' : ''" />
            </button>
            <div x-show="open" x-transition class="p-4 bg-blue-50 text-blue-900 rounded-lg text-sm leading-relaxed">
                {{ $mcq['explanation'] }}
            </div>
        </div>
    @endif

    <div class="mt-4 flex flex-wrap-reverse justify-end gap-4 md:justify-between border-t pt-4">
        <div class="flex items-center gap-2">
            <x-heroicon-o-tag class="h-4 w-4 text-gray-400" />
            <div class="flex flex-wrap gap-1">
                @foreach ($mcq['tags'] ?? [] as $tag)
                    <span
                        class="text-[10px] px-2 py-0.5 bg-gray-100 rounded border border-gray-200">{{ $tag['name'] }}</span>
                @endforeach
            </div>
        </div>

        @if ($mcq['paper'])
            <div class="flex gap-2">
                <span
                    class="text-xs bg-gray-100 px-2 py-1 rounded truncate max-w-[150px]">{{ $mcq['paper']['name'] }}</span>
            </div>
        @endif
    </div>
</div>
