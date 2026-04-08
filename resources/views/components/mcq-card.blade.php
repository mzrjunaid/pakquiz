@props(['level' => 'h2', 'mcq', 'idx' => 0, 'route' => '#'])

@php
    $idx = $idx + 1;
    $correctOption = collect($mcq['options'])->firstWhere('is_correct', true);

    $questionIsUrdu = $mcq->isUrdu($mcq['question']);

    $difficultyClasses =
        [
            'easy' => 'text-green-900 border-green-900',
            'medium' => 'text-yellow-900 border-yellow-900',
            'hard' => 'text-red-900 border-red-900',
        ][strtolower($mcq['difficulty'])] ?? 'text-gray-900 border-gray-900';

    $tag = in_array($level, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']) ? $level : 'h2';
@endphp

<div x-data="{
    selectedOptionId: null,
    wasAnswered: false,
    quizMode: @json(session('isQuizMode')),
    shareLink() {
        navigator.clipboard.writeText('{{ url($route) }}');
        Toaster.success('Link copied to the clipboard!');
    },
    selectOption(id) {
        if (!this.quizMode || this.wasAnswered) return;
        this.selectedOptionId = id;
        this.wasAnswered = true;
    }
}" x-on:quiz-mode-updated.window="quizMode = $event.detail.status"
    :class="{
        'border-green-500 bg-green-50': wasAnswered && selectedOptionId == {{ $correctOption->id ?? 'null' }},
        'border-red-500 bg-red-50': wasAnswered && selectedOptionId != {{ $correctOption->id ?? 'null' }},
        'border-gray-200 bg-white': !wasAnswered,
    }"
    class="rounded-md border px-2 py-4 shadow-sm lg:rounded-xl lg:p-5 transition-colors duration-200">
    <div class="mb-2 flex flex-row justify-between gap-2">
        <div class="flex flex-wrap items-center gap-2 justify-between">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-gray-50">
                <x-heroicon-s-cpu-chip class="mr-1 h-3 w-3" /> AI
            </span>
            @if ($mcq['difficulty'])
                <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider border {{ $difficultyClasses }} capitalize">
                    {{ $mcq['difficulty'] }}
                </span>
            @endif
        </div>

        <div class="flex items-center gap-2">
            @if ($mcq['subject'])
                <a href="{{ route('public.subject.show', $mcq['subject']['slug']) }}"
                    class="px-2 py-1 border border-primary font-semibold tracking-wider text-xs rounded-full truncate max-w-[130px] md:max-w-none">
                    {{ $mcq['subject']['name'] }}
                </a>
            @endif
            <button @click="shareLink" title="share" class="p-2 hover:bg-accent rounded-full ">
                <x-heroicon-o-share class="h-5 w-5" />
            </button>
        </div>

    </div>

    <{{$tag}}
        class="my-6 text-sm font-semibold lg:text-base {{ $questionIsUrdu ? 'font-urdu direction-rtl text-right' : '' }}">
        <a href="{{ $route }}" class="hover:text-primary ">
            {{ $questionIsUrdu ? 'سوال نمبر' : 'Question' }} {{ $idx }}: {{ $mcq['question'] }}
        </a>
    </{{$tag}}>

    <div class="grid gap-2 md:grid-cols-2 lg:gap-3 {{ $questionIsUrdu ? 'font-urdu' : '' }}">
        @foreach ($mcq['options'] as $optIdx => $opt)
            <button @click="selectOption({{ $opt->id }})" :disabled="!quizMode || wasAnswered"
                :class="{
                    'border-green-500 bg-green-50 text-green-900': (wasAnswered || !quizMode) &&
                        {{ $opt->is_correct ? 'true' : 'false' }},
                    'border-red-500 bg-red-100 text-red-900': wasAnswered && selectedOptionId == {{ $opt->id }} && !
                        {{ $opt->is_correct ? 'true' : 'false' }},
                    'border-gray-300 text-gray-500 bg-white/60 hover:border-primary': !wasAnswered || (quizMode && !wasAnswered)
                }"
                class="w-full rounded-md border p-2 text-left text-sm transition md:p-3 lg:rounded-lg lg:border-2 lg:text-base flex items-center gap-2">
                <span class="font-semibold uppercase">
                    {{ chr(65 + $optIdx) }}.
                </span>
                <span>{{ $opt->option_text }}</span>
            </button>
        @endforeach
    </div>

    @if ($mcq['explanation'])
        <div x-data="{ open: !quizMode }" class="mt-4 border-t pt-2 group" x-show="wasAnswered || !quizMode">
            <button @click="open = !open" class="flex items-center justify-between w-full text-sm font-bold py-2">
                <span>Explanation</span>
                <x-heroicon-o-chevron-down class="h-4 w-4 transform transition-transform group-hover:text-primary"
                    x-bind:class="open ? 'rotate-180' : ''" />
            </button>
            <div x-show="open" x-transition
                class="p-4 border border-primary rounded-lg text-sm md:text-base leading-relaxed">
                {!! $mcq['explanation'] !!}
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
                <a href="{{ route('public.papers.show', $mcq['paper']['slug']) }}"
                    class="text-xs bg-gray-100 px-2 py-1 rounded truncate max-w-[150px]">{{ $mcq['paper']['name'] }}</a>
            </div>
        @endif
    </div>
</div>
