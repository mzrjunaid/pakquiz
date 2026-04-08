<?php

use App\Models\Mcq;
use Livewire\Component;

new class extends Component
{
    public $data;

    public function mount()
    {
        $mcqs = Mcq::select('id', 'question', 'subject_id')->with(['options', 'subject'])->limit(10)->get();
        $this->data = $mcqs->toArray();
    }

    public int $currentQuestion = 0;
    public int $attemptedQuestion = 0;
    public array $selectedAnswers = [];
    public int $timeRemaining = 1800;

    public function selectAnswer(int $questionId, int $optionId): void
    {
        if (isset($this->selectedAnswers[$questionId])) {
            return;
        }
        $this->selectedAnswers[$questionId] = $optionId;
        $this->attemptedQuestion++;

        // Skip re-rendering — Alpine already updated the UI optimistically
        $this->skipRender();
    }

    public function submit(): void
    {
        session([
            'quiz_results' => [
                'data'              => $this->data,
                'selectedAnswers'   => $this->selectedAnswers,
                'attemptedQuestion' => $this->attemptedQuestion,
                'totalQuestions'    => count($this->data),
            ],
        ]);

        $this->redirect(route('quiz.result'), navigate: true);
    }
};
?>
<section class="max-w-7xl mx-auto lg:py-12 py-6 space-y-6">

    <header class="space-y-2 px-4">
        <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
            <ol class="inline-flex items-center md:space-x-1">
                <li class="inline-flex gap-1 items-center">
                    <x-heroicon-o-home class="w-4 h-4" />
                    <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                </li>
                <li class="inline-flex gap-1 items-center">
                    <x-heroicon-o-chevron-right class="w-4 h-4" />
                    <span class="font-medium text-primary">{{ __('Demo') }}</span>
                </li>
            </ol>
        </nav>
        <h1 class="text-xl font-bold text-primary md:text-2xl">
            Free Online Practice Tests for Pakistani Competitive Exams — CSS, FPSC, PPSC, NTS, PMS & More
        </h1>
        <p class="text-muted-foreground">General Knowledge & Aptitude Test</p>
    </header>
    <div class="mx-auto px-2 md:w-full md:max-w-5xl"
        x-data="{
        // ── Timer ─────────────────────────────────────────────────────
        timeRemaining: {{ $timeRemaining }},
        get formattedTime() {
            const m = String(Math.floor(this.timeRemaining / 60)).padStart(2, '0');
            const s = String(this.timeRemaining % 60).padStart(2, '0');
            return `${m}:${s}`;
        },

        // ── Optimistic state ──────────────────────────────────────────
        // Seeded from PHP once; Alpine owns UI from here — no waiting for server.
        selectedAnswers: @js($selectedAnswers),
        currentQuestion: @js($currentQuestion),
        totalQuestions: {{ count($data) }},

        selectedFor(qId) { return this.selectedAnswers[qId] ?? null; },
        isLocked(qId)    { return this.selectedAnswers[qId] !== undefined; },

        selectAnswer(qId, optionId) {
            if (this.isLocked(qId)) return;
            this.selectedAnswers[qId] = optionId;   // instant UI ✅
            $wire.selectAnswer(qId, optionId);      // background sync 🔄
        },

        goToQuestion(idx) { this.currentQuestion = idx; },
        prevQuestion()    { if (this.currentQuestion > 0) this.currentQuestion--; },
        nextQuestion()    { if (this.currentQuestion < this.totalQuestions - 1) this.currentQuestion++; },

        init() {
            const interval = setInterval(() => {
                if (this.timeRemaining <= 0) { clearInterval(interval); $wire.submit(); return; }
                this.timeRemaining--;
            }, 1000);
            this.$cleanup = () => clearInterval(interval);
        }
    }">
        <div class="overflow-hidden rounded-lg bg-white shadow-md">

            {{-- ─── Header ──────────────────────────────────────────────────── --}}
            <div class="border-b bg-primary/50 px-6 py-4 dark:bg-primary/70">
                <div class="flex items-center justify-between">
                    <div class="font-semibold text-lg md:text-xl">
                        Quizzes
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="size-5 md:size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span class="font-mono font-bold md:text-lg" x-text="formattedTime"></span>
                    </div>
                </div>
            </div>

            {{--
            ─── All questions in DOM, toggled via x-show ─────────────────────
            Navigation is instant — no server round-trip, no re-render.
            Add [x-cloak] { display: none !important; } to your global CSS.
        --}}
            @foreach ($data as $qIdx => $question)
            @php
            $qId = $question['id'];
            $isUrdu = strtolower($question['subject']['name']) === 'urdu';
            @endphp

            <div x-show="currentQuestion === {{ $qIdx }}" x-cloak class="px-3 py-6 md:p-8">

                <div class="mb-3 md:mb-6">
                    <h2 class="overflow-hidden font-semibold leading-relaxed text-primary/90 md:text-lg
                        {{ $isUrdu ? 'text-right font-urdu' : '' }}">
                        Question {{ $qIdx + 1 }}. {{ $question['question'] }}
                    </h2>
                </div>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 {{ $isUrdu ? 'text-right font-urdu' : '' }}">
                    @foreach ($question['options'] as $idx => $option)
                    <button
                        @click="selectAnswer({{ $qId }}, {{ $option['id'] }})"
                        :disabled="isLocked({{ $qId }})"
                        :class="{
                                'border-primary bg-gray-50 shadow-md'         : selectedFor({{ $qId }}) === {{ $option['id'] }},
                                'border-gray-200 hover:border-primary hover:bg-gray-50' : selectedFor({{ $qId }}) !== {{ $option['id'] }},
                                'cursor-not-allowed opacity-60'               : isLocked({{ $qId }})
                            }"
                        class="rounded-sm border px-2 py-2 text-left transition-all duration-200 md:p-4 cursor-pointer">
                        <div class="flex items-center gap-3 text-sm md:text-base">
                            <span class="font-semibold text-gray-700">{{ chr(65 + $idx) }}.</span>
                            <span class="font-medium text-gray-800">{{ $option['option_text'] }}</span>
                        </div>
                    </button>
                    @endforeach
                </div>

            </div>
            @endforeach

            {{-- ─── Navigation & Submit ─────────────────────────────────────── --}}
            <div class="border-t px-2 py-6">

                <div class="flex flex-wrap items-center justify-center gap-2">
                    @foreach ($data as $idx => $q)
                    <button
                        @click="goToQuestion({{ $idx }})"
                        :class="{
                            'bg-primary text-white'                                                    : currentQuestion === {{ $idx }},
                            'bg-primary/35 text-primary hover:bg-primary/65'                        : currentQuestion !== {{ $idx }} && isLocked({{ $q['id'] }}),
                            'border border-gray-200 bg-white text-primary hover:border-primary hover:text-primary' : currentQuestion !== {{ $idx }} && !isLocked({{ $q['id'] }})
                        }"
                        class="size-9 rounded-full font-semibold cursor-pointer transition-all">
                        {{ $idx + 1 }}
                    </button>
                    @endforeach
                </div>

                <div class="my-3 flex justify-end gap-3">
                    <button
                        @click="prevQuestion"
                        :disabled="currentQuestion === 0"
                        class="rounded-md cursor-pointer bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground
                           transition hover:bg-secondary/80 disabled:cursor-not-allowed disabled:opacity-40">Prev</button>
                    <button
                        @click="nextQuestion"
                        :disabled="currentQuestion === totalQuestions - 1"
                        class="rounded-md cursor-pointer bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground
                           transition hover:bg-secondary/80 disabled:cursor-not-allowed disabled:opacity-40">Next</button>
                </div>

                <div class="mt-6 text-center">
                    <button
                        wire:click="submit"
                        wire:confirm="Are you sure you want to submit the exam?"
                        class="rounded-lg font-semibold cursor-pointer bg-primary px-12 tracking-wider py-2 text-sm font-medium text-primary-foreground
                           transition-colors hover:bg-primary/60 hover:text-foreground">Submit</button>
                </div>
            </div>

        </div>
    </div>
    <div class="mt-6 px-4 space-y-3">
        <p class="text-sm text-justify leading-relaxed text-muted-foreground md:text-base">
            Whether you are preparing for the <strong>CSS (Central Superior Services)</strong> conducted
            by FPSC, a <strong>PPSC, KPPSC, SPSC, or BPSC</strong> provincial recruitment test, an
            <strong>NTS-based screening exam</strong>, or a one-paper test for departments like
            <strong>FIA, NAB, FBR, or ASF</strong> — this platform covers them all. Our free MCQ
            practice tests are built around the core subjects that appear in every Pakistani government
            job exam: <strong>General Knowledge, Pakistan Affairs, Islamic Studies, English Grammar &
                Comprehension, Current Affairs, and Basic Arithmetic.</strong> Each test is timed,
            auto-locked after selection, and gives you a full result breakdown the moment you submit —
            so you can spot weak areas and improve your score before the real exam day.
        </p>

        <p class="text-sm text-justify leading-relaxed text-muted-foreground md:text-base">
            The <strong>CSS 2026 written exam</strong> saw only 354 candidates pass out of 12,792 —
            a pass rate of just 2.77%. PMS, FPSC one-paper tests, and NTS exams are equally competitive.
            Consistent daily practice with MCQs from past papers is one of the most effective ways to
            close that gap. Start with this free demo paper and explore our full question bank covering
            all exams, subjects, and difficulty levels.
        </p>
    </div>
</section>