<?php

use Livewire\Component;

new class extends Component
{
    public array $data = [];
    public array $selectedAnswers = [];
    public int $attemptedQuestion = 0;
    public int $totalQuestions = 0;

    // Derived stats computed once on mount
    public int $correctCount = 0;
    public int $wrongCount = 0;
    public int $skippedCount = 0;
    public float $percentage = 0.0;

    public function mount(): void
    {
        $results = session('quiz_results');

        if (! $results) {
            $this->redirect(route('demo'), navigate: true);
            return;
        }

        $this->data              = $results['data'];
        $this->selectedAnswers   = $results['selectedAnswers'];
        $this->attemptedQuestion = $results['attemptedQuestion'];
        $this->totalQuestions    = $results['totalQuestions'];

        $results = collect($this->data)->map(function ($question) {
            $selectedId = $this->selectedAnswers[$question['id']] ?? null;

            if (!$selectedId) {
                return 'skipped';
            }

            $correct = data_get(collect($question['options'])->firstWhere('id', $selectedId), 'is_correct');

            return $correct ? 'correct' : 'wrong';
        })->countBy();

        $this->correctCount = $results->get('correct', 0);
        $this->wrongCount = $results->get('wrong', 0);
        $this->skippedCount = $results->get('skipped', 0);

        $this->percentage = $this->totalQuestions > 0
            ? round(($this->correctCount / $this->totalQuestions) * 100, 1)
            : 0;
    }

    public function retake(): void
    {
        session()->forget('quiz_results');
        $this->redirect(route('demo'), navigate: true);
    }
};
?>

<div class="container mx-auto px-2 py-4 md:w-full md:max-w-5xl lg:py-16">
    <div class="overflow-hidden rounded-lg bg-white shadow-md">

        {{-- ─── Header ──────────────────────────────────────────────────── --}}
        <div class="border-b bg-primary/50 px-6 py-4 dark:bg-primary/70">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-md font-bold md:text-3xl">Exam Results</h2>
                    <p class="-mt-0.5 text-xs font-medium text-muted-foreground">
                        PPSC Practice Paper — General Knowledge &amp; Aptitude Test
                    </p>
                </div>
                <button
                    wire:click="retake"
                    class="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white
                           transition-colors hover:bg-gray-800">
                    Retake Exam
                </button>
            </div>
        </div>

        {{-- ─── Score Summary ───────────────────────────────────────────── --}}
        <div class="border-b px-6 py-6">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4">

                {{-- Percentage / Score --}}
                <div class="col-span-2 flex flex-col items-center justify-center rounded-lg
                            bg-primary/10 px-4 py-6 md:col-span-1">
                    <span class="text-4xl font-black text-primary">{{ $percentage }}%</span>
                    <span class="mt-1 text-xs font-medium text-muted-foreground">Overall Score</span>
                </div>

                {{-- Correct --}}
                <div class="flex flex-col items-center justify-center rounded-lg
                            bg-green-50 px-4 py-6">
                    <span class="text-3xl font-bold text-green-600">{{ $correctCount }}</span>
                    <span class="mt-1 text-xs font-medium text-green-700">Correct</span>
                </div>

                {{-- Wrong --}}
                <div class="flex flex-col items-center justify-center rounded-lg
                            bg-red-50 px-4 py-6">
                    <span class="text-3xl font-bold text-red-500">{{ $wrongCount }}</span>
                    <span class="mt-1 text-xs font-medium text-red-600">Wrong</span>
                </div>

                {{-- Skipped --}}
                <div class="flex flex-col items-center justify-center rounded-lg
                            bg-gray-100 px-4 py-6">
                    <span class="text-3xl font-bold text-gray-500">{{ $skippedCount }}</span>
                    <span class="mt-1 text-xs font-medium text-gray-600">Skipped</span>
                </div>
            </div>

            {{-- Progress bar --}}
            <div class="mt-5">
                <div class="mb-1 flex items-center justify-between text-xs font-medium text-muted-foreground">
                    <span>Progress: {{ $attemptedQuestion }}/{{ $totalQuestions }} attempted</span>
                    <span>{{ $correctCount }}/{{ $totalQuestions }} correct</span>
                </div>
                <div class="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                        class="h-full rounded-full bg-primary transition-all duration-500"
                        style="width: {{ $percentage }}%"></div>
                </div>
            </div>
        </div>

        {{-- ─── Per-question Review ─────────────────────────────────────── --}}
        <div class="divide-y px-4 py-4 md:px-8">
            @foreach ($data as $idx => $question)
            @php
            $qId = $question['id'];
            $selectedOptionId = $selectedAnswers[$qId] ?? null;
            $isUrdu = strtolower($question['subject']['name']) === 'urdu';

            // Determine correct option & whether user was right
            $correctOptionId = null;
            $userIsCorrect = false;

            // Ensure it's an array to avoid errors
            $options = is_array($question['options']) ? $question['options'] : [];

            foreach ($options as $opt) {
            // Access with array syntax
            if (isset($opt['is_correct']) && $opt['is_correct']) {
            $correctOptionId = $opt['id'];
            }
            }

            if ($selectedOptionId !== null && $selectedOptionId === $correctOptionId) {
            $userIsCorrect = true;
            }

            $isSkipped = $selectedOptionId === null;
            @endphp

            <div class="py-5">
                {{-- Question text --}}
                <div class="mb-3 flex items-start gap-3">
                    {{-- Status badge --}}
                    <span class="mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-bold
                            {{ $isSkipped
                                ? 'bg-gray-100 text-gray-500'
                                : ($userIsCorrect
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-600') }}">
                        {{ $isSkipped ? 'Skipped' : ($userIsCorrect ? '✓ Correct' : '✗ Wrong') }}
                    </span>

                    <p class="font-semibold text-primary/90 leading-relaxed
                            {{ $isUrdu ? 'text-right font-urdu' : '' }}">
                        <span class="me-1 text-muted-foreground">Q{{ $idx + 1 }}.</span>
                        {{ $question['question'] }}
                    </p>
                </div>

                {{-- Options --}}
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2
                        {{ $isUrdu ? 'text-right font-urdu' : '' }}">

                    @foreach ($question['options'] as $optIdx => $option)
                    @php
                    $isCorrectOpt = ($option['id'] === $correctOptionId);
                    $isSelectedOpt = ($option['id'] === $selectedOptionId);

                    $optClass = match(true) {
                    $isCorrectOpt && $isSelectedOpt => 'border-green-500 bg-green-50 text-green-800',
                    $isCorrectOpt => 'border-green-400 bg-green-50 text-green-700',
                    $isSelectedOpt && !$isCorrectOpt => 'border-red-400 bg-red-50 text-red-700',
                    default => 'border-gray-200 text-gray-500',
                    };
                    @endphp

                    <div class="flex items-center gap-3 rounded-sm border px-3 py-2 text-sm {{ $optClass }}">
                        <span class="font-semibold">{{ chr(65 + $optIdx) }}.</span>
                        <span>{{ $option['option_text'] }}</span>

                        @if ($isCorrectOpt)
                        <span class="ms-auto text-green-600">✓</span>
                        @elseif ($isSelectedOpt)
                        <span class="ms-auto text-red-500">✗</span>
                        @endif
                    </div>
                    @endforeach
                </div>
            </div>
            @endforeach
        </div>

        {{-- ─── Footer CTA ──────────────────────────────────────────────── --}}
        <div class="border-t px-6 py-5 text-center">
            <button
                wire:click="retake"
                class="rounded-lg bg-primary px-8 py-2.5 text-sm font-semibold text-white
                       transition-colors hover:bg-gray-800">
                Retake Exam
            </button>
        </div>

    </div>
</div>