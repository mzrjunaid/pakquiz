<?php

use App\Http\Resources\Public\Mcq\McqShowResource;
use App\Models\Mcq;
use App\Models\Page;
use Livewire\Component;

new class extends Component {
    public Mcq $mcq;

    public function with(): array
    {

        $schema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')],
                ['@type' => 'ListItem', 'position' => 2, 'name' => 'All MCQs', 'item' => url('/mcqs')],
                ['@type' => 'ListItem', 'position' => 3, 'name' => $this->mcq->subject->name ?? 'General', 'item' => url('/' . $this->mcq->subject->slug)],
                ['@type' => 'ListItem', 'position' => 4, 'name' => $this->mcq->topic->name ?? 'General', 'item' => url('/' . $this->mcq->subject->slug . '/' . $this->mcq->topic->slug)],
                ['@type' => 'ListItem', 'position' => 5, 'name' => $this->mcq->name ?? 'General', 'item' => url('/' . $this->mcq->subject->slug . '/' . $this->mcq->topic->slug . '/' . $this->mcq->slug)],
            ],
            [
                '@context' => 'https://schema.org',
                '@type' => 'Quiz',
                'name' => $this->mcq->question,
                'hasPart' => [
                    '@type' => 'Question',
                    'eduQuestionType' => $this->mcq->mcq_type,
                    'text' => $this->mcq->question,
                    'suggestedAnswer' => $this->mcq->options->map(fn($option) => ['@type' => 'Answer', 'text' => $option->option_text])->toArray(),
                    'acceptedAnswer' => [
                        '@type' => 'Answer',
                        'text' => $this->mcq->options->firstWhere('is_correct', true)->option_text ?? null
                    ]
                ]
            ]
        ];

        return [
            'mcq' => $this->mcq,
            'schema' => $schema,
        ];
    }
};
?>

<div>
    @teleport('head')
    <script type="application/ld+json">
        {
            !!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!
        }
    </script>
    @endteleport
    <div class="max-w-7xl mx-auto px-4 lg:px-0">
        <section class="flex flex-col gap-6 md:flex-row items-end px-4 py-12 md:px-0">
            <div class="space-y-4 w-full md:w-2/3">
                <h2 class="text-2xl font-bold text-primary">MCQ Detail</h2>
            </div>
            <div class="space-y-2 w-full md:w-1/3 block md:hidden">
                <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
                <livewire:global-search />
            </div>
        </section>
        <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
            <ol class="inline-flex items-center md:space-x-1">
                <li class="inline-flex items-center">
                    <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                </li>
                <li>
                    <div class="flex items-center">
                        <span class="mx-2">/</span>
                        <a href="{{ route('public.mcqs.index') }}" class="hover:text-primary">{{ __('MCQs') }}</a>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <span class="mx-2">/</span>
                        <a href="{{ route('public.mcqs.index', $mcq->subject->slug) }}" class="hover:text-primary line-clamp-1">{{ $mcq->subject->name }}</a>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <span class="mx-2">/</span>
                        <a href="{{ route('public.mcqs.index', $mcq->subject->slug . '/' . $mcq->topic->slug) }}" class="hover:text-primary line-clamp-1">{{ $mcq->topic->name }}</a>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <span class="mx-2">/</span>
                        <span class="font-medium text-primary max-w-xs line-clamp-1">{{ $mcq->question }}</span>
                    </div>
                </li>
            </ol>
        </nav>

        <section class="pb-12">
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2">
                    <div class="space-y-6">
                        <h1 class="text-base md:text-2xl font-bold" wire:ignore.self title="{{ $mcq->question }}">{{ $mcq->question }}</h1>
                        <p class="text-xs md:text-base text-justify">{{ $mcq->explanation }}</p>
                        <div class="grid gap-2 md:grid-cols-1 lg:gap-3">
                            @foreach ($mcq->options as $optIdx => $opt)
                            <div @click="selectOption({{ $opt->id }})"
                                class="w-full  text-left text-sm lg:text-base flex items-center gap-2">
                                <span class="font-bold uppercase">
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
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
                <x-aside>
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="text-sm md:text-base font-semibold">Search MCQs, Papers, Topics</h2>
                        <livewire:global-search />
                    </div>
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="mb-2 text-lg font-semibold">Latest Papers</h2>
                        <p class="mb-3 text-muted text-sm">Explore the latest papers for FPSC, PPSC, NTS, CSS, PMS and
                            other competitive exams in Pakistan.</p>
                        <div class="md:px-2">

                            <div class="flex items-center gap-1 text-sm">
                                <x-heroicon-s-chevron-right class="h-5 w-5" />
                                <a href="#" class="my-2 block">
                                    paper name
                                </a>
                            </div>
                            <div class="text-sm text-right flex justify-end mt-2">
                                <x-nav-link route="public.papers.index" class="text-primary hover:underline">
                                    View All Papers
                                </x-nav-link>
                            </div>
                        </div>
                    </div>
                </x-aside>
            </div>
        </section>
    </div>
</div>