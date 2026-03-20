@php
    $difficultyClasses =
        [
            'easy' => 'bg-green-100 text-green-700 border-green-200',
            'medium' => 'bg-yellow-100 text-yellow-700 border-yellow-500',
            'hard' => 'bg-red-100 text-red-700 border-red-500',
        ][strtolower($mcq['difficulty'])] ?? 'bg-gray-100 text-gray-700';
@endphp

<?php

use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Topic;
use App\Support\SeoData;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component {
    public Mcq $mcq;

    public function with(): array
    {
        $breadcrumbs_list = [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All MCQs', 'item' => url('/mcqs')]];

        if ($this->mcq->subject) {
            $breadcrumbs_list[] = ['@type' => 'ListItem', 'position' => 3, 'name' => $this->mcq->subject->name, 'item' => url('/' . $this->mcq->subject->slug)];
        }

        if ($this->mcq->topic) {
            $breadcrumbs_list[] = ['@type' => 'ListItem', 'position' => 4, 'name' => $this->mcq->topic->name, 'item' => url('/' . $this->mcq->subject->slug . '/' . $this->mcq->topic->slug)];
            $breadcrumbs_list[] = ['@type' => 'ListItem', 'position' => 5, 'name' => $this->mcq->question, 'item' => url('/' . $this->mcq->subject->slug . '/' . $this->mcq->topic->slug . '/' . $this->mcq->slug)];
        }

        $breadcrumbs = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $breadcrumbs_list,
        ];

        $correctOption = $this->mcq->options->firstWhere('is_correct', true);
        $explanation = trim(strip_tags($this->mcq->explanation ?? ''));

        $quiz = [
            '@context' => 'https://schema.org',
            '@type' => 'Quiz',
            'name' => $this->mcq->subject->name . ' MCQs',
            'description' => $this->mcq->subject->seo->description,
            'url' => url('/mcqs/' . $this->mcq->slug),
            'hasPart' => [
                [
                    '@type' => 'Question',
                    'text' => $this->mcq->question,
                    'eduQuestionType' => $this->mcq->mcq_type,
                    'answerCount' => $this->mcq->options->count(),

                    'suggestedAnswer' => $this->mcq->options->filter(fn($o) => !$o->is_correct)->map(fn($o) => ['@type' => 'Answer', 'text' => $o->option_text])->values()->toArray(),

                    'acceptedAnswer' => [
                        '@type' => 'Answer',
                        'text' => $correctOption?->option_text,
                        'comment' => $explanation ? ['@type' => 'Comment', 'text' => $explanation] : null,
                    ],
                ],
            ],
        ];

        return [
            'mcq' => $this->mcq,
            'schema' => ['@context' => 'https://schema.org', '@graph' => [$breadcrumbs, $quiz]],
            'suggestedMcqs' => $this->suggestedMcqs(),
            'latestPapers' => $this->latestPapers(),
            'currentAffairs' => $this->currentAffairs(),
            'meta' => $this->meta(),
        ];
    }

    #[Computed]
    public function suggestedMcqs()
    {
        return Mcq::select('id', 'question', 'slug', 'subject_id', 'topic_id')->where('subject_id', $this->mcq->subject_id)->where('topic_id', $this->mcq->topic_id)->where('id', '!=', $this->mcq->id)->limit(5)->get();
    }

    #[Computed]
    public function latestPapers()
    {
        return Paper::select('id', 'name', 'slug')->latest()->limit(5)->get();
    }

    #[Computed]
    public function currentAffairs()
    {
        return Topic::select('id', 'name', 'slug', 'subject_id')->with('subject:id,name,slug')->where('subject_id', 39)->latest()->limit(5)->get();
    }

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_mcqs_' . $this->mcq->id, 86400, fn() => SeoData::mcqSeo($this->mcq));
    }
};
?>

@slot('title')
    {{ $meta['title'] }}
@endslot

@push('meta')
    <meta name="description" content="{{ $meta['description'] }}">
    <meta name="canonical" content="{{ $meta['canonical'] }}">
    <meta property="og:title" content="{{ $meta['og_title'] }}">
    <meta property="og:description" content="{{ $meta['og_description'] }}">
    <meta property="og:image" content="{{ $meta['og_image'] }}">
    <meta property="og:url" content="{{ $meta['canonical'] }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $meta['og_title'] }}">
    <meta name="twitter:description" content="{{ $meta['og_description'] }}">
    <meta name="twitter:image" content="{{ $meta['og_image'] }}">
@endpush

<div>
    @teleport('head')
        <script type="application/ld+json">
        {!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport
    <div class="max-w-7xl mx-auto px-4 lg:px-0">
        <section class="flex flex-col gap-6 md:flex-row items-end px-4 md:px-0">
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
                @if ($mcq->subject)
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2">/</span>
                            <a href="{{ route('public.subject.show', $mcq->subject->slug) }}"
                                class="hover:text-primary line-clamp-1">{{ $mcq->subject->name }}</a>
                        </div>
                    </li>
                @endif
                @if ($mcq->topic)
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2">/</span>
                            <a href="{{ route('public.subject.topic.show', ['subject' => $mcq->subject->slug, 'topic' => $mcq->topic->slug]) }}"
                                class="hover:text-primary line-clamp-1">{{ $mcq->topic->name }}</a>
                        </div>
                    </li>
                @endif
                <li>
                    <div class="flex items-center">
                        <span class="mx-2">/</span>
                        <span
                            class="font-medium text-primary max-w-xs line-clamp-1 {{ $mcq->isUrdu($mcq->question) ? 'font-urdu direction-rtl text-right' : '' }}">{{ $mcq->question }}</span>
                    </div>
                </li>
            </ol>
        </nav>

        <section x-data="{
            shareLink() {
                navigator.clipboard.writeText('{{ url('/mcqs/' . $mcq->slug) }}');
                window.dispatchEvent(new CustomEvent('notify', { detail: 'Link copied!' }));
            }
        }" class="pb-12">
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2 space-y-8">
                    <div class="flex flex-col-reverse md:flex-row md:justify-between gap-2">
                        <div class="flex flex-wrap items-center gap-2">
                            <span
                                class="inline-flex gap-1 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-foreground/90 text-white">
                                <x-heroicon-s-cpu-chip class="h-3 w-3" /> AI
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
                            <button @click="shareLink" class="p-2 hover:bg-accent rounded-full">
                                <x-heroicon-o-share class="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <h1 class="text-base md:text-2xl font-bold {{ $mcq->isUrdu($mcq->question) ? 'font-urdu direction-rtl text-right' : '' }}"
                        wire:ignore.self title="{{ $mcq->question }}">
                        {{ $mcq->question }}
                    </h1>
                    <div
                        class="grid gap-2 md:grid-cols-1 lg:gap-3 {{ $mcq->isUrdu($mcq->question) ? 'font-urdu direction-rtl text-right' : '' }}">
                        @foreach ($mcq->options as $optIdx => $opt)
                            <div :class="{ 'border-green-500 bg-green-50': {{ $opt->is_correct ? 'true' : 'false' }}, 'border-gray-200 bg-white/60 hover:border-primary': {{ $opt->is_correct ? 'false' : 'true' }} }"
                                class="w-full rounded-md border p-2 text-left text-sm transition md:p-3 lg:rounded-lg lg:border-2 lg:text-base flex items-center gap-2">
                                <span class="font-bold uppercase">
                                    {{ chr(65 + $optIdx) }}.
                                </span>
                                <span>{{ $opt->option_text }}</span>

                                <template x-if="{{ $opt->is_correct ? 'true' : 'false' }}">
                                    <span class="ml-auto text-green-600 font-bold">✓</span>
                                </template>
                                <template x-if="{{ $opt->is_correct ? 'false' : 'true' }}">
                                    <span class="ml-auto text-red-600 font-bold">✗</span>
                                </template>
                            </div>
                        @endforeach
                    </div>

                    @if ($mcq->explanation)
                        <div x-data="{ open: true }" class="border-b border-t py-4 group">
                            <button @click="open = !open"
                                class="flex items-center justify-between w-full text-sm font-medium py-2">
                                <span>Explanation</span>
                                <x-heroicon-o-chevron-up
                                    class="h-4 w-4 transform transition-transform group-hover:text-primary"
                                    x-bind:class="open ? '' : 'rotate-180'" />
                            </button>
                            <p x-show="open" x-transition
                                class="p-4 border border-primary rounded-lg text-sm md:text-base leading-relaxed">
                                {{ $mcq->explanation }}
                            </p>
                        </div>
                    @endif

                    <div class="flex flex-wrap-reverse items-center justify-end gap-4 md:justify-between">
                        <div class="flex items-center gap-2">
                            <x-heroicon-o-tag class="h-6 w-6" />
                            <div class="flex flex-wrap gap-2">
                                @foreach ($mcq->tags as $tag)
                                    <span class="text-sm px-2 py-0.5 rounded-full border">{{ $tag->name }}</span>
                                @endforeach
                            </div>
                        </div>


                        @if ($mcq->paper)
                            <div class="flex flex-wrap items-center space-x-2 gap-y-2">
                                <a href="{{ route('public.papers.show', $mcq->paper->slug) }}"
                                    class="items-center justify-center rounded-full border border-transparent text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 block max-w-xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent">
                                    {{ $mcq->paper->name }}
                                </a>
                                @if ($mcq->paper->department)
                                    <a href="{{ route('public.departments.show', $mcq->paper->department->slug) }}"
                                        class="items-center justify-center rounded-full border border-transparent text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 block max-w-xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent">
                                        {{ $mcq->paper->department->name }}
                                    </a>
                                @endif
                                @if ($mcq->paper->testingService)
                                    <a href="{{ route('public.testing_services.show', $mcq->paper->testingService->slug) }}"
                                        class="items-center justify-center rounded-full border border-transparent text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 block max-w-xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent">
                                        {{ $mcq->paper->testingService->short_name }}
                                    </a>
                                @endif
                            </div>
                        @endif
                    </div>

                    <livewire:suggestion-form :mcq_id="$mcq['id']" />


                </div>
                <x-aside>
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="text-sm md:text-base font-semibold">Search MCQs, Papers, Topics</h2>
                        <livewire:global-search />
                    </div>
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="mb-2 text-lg font-semibold">Current Affairs</h2>
                        <p class="mb-3 text-muted text-sm">Explore the latest current affairs for FPSC, PPSC, NTS, CSS,
                            PMS and
                            other competitive exams in Pakistan.</p>
                        <div class="md:px-2">
                            @foreach ($currentAffairs as $currentAffair)
                                <div class="flex items-center gap-1">
                                    <x-heroicon-s-chevron-right class="h-4 w-4 shrink-0" />
                                    <a href="{{ route('public.subject.topic.show', ['subject' => $currentAffair->subject->slug, 'topic' => $currentAffair->slug]) }}"
                                        class="my-2 text-sm line-clamp-1">
                                        {{ $currentAffair->name }}
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    </div>
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="mb-2 text-lg font-semibold">Latest Papers</h2>
                        <p class="mb-3 text-muted text-sm">Explore the latest papers for FPSC, PPSC, NTS, CSS, PMS and
                            other competitive exams in Pakistan.</p>
                        <div class="md:px-2">
                            @foreach ($latestPapers as $latestPaper)
                                <div class="flex items-center gap-1">
                                    <x-heroicon-s-chevron-right class="h-4 w-4 shrink-0" />
                                    <a href="{{ route('public.papers.show', $latestPaper->slug) }}"
                                        class="my-2 text-sm line-clamp-1">
                                        {{ $latestPaper->name }}
                                    </a>
                                </div>
                            @endforeach
                            <div class="text-sm text-right flex justify-end mt-2">
                                <x-nav-link route="public.papers.index" class="text-primary hover:underline">
                                    View All Papers
                                </x-nav-link>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="mb-2 text-lg font-semibold">Suggested MCQs Related to Subject and Topic</h2>
                        <p class="mb-3 text-muted text-sm">Explore the latest MCQs related to subject and topic.</p>
                        <div class="md:px-2">

                            @foreach ($suggestedMcqs as $suggestedMcq)
                                <div class="flex items-center gap-1 text-sm">
                                    <x-heroicon-s-chevron-right class="h-4 w-4 shrink-0" />
                                    <a href="{{ route('public.mcqs.show', $suggestedMcq->slug) }}"
                                        class="my-2 line-clamp-1">
                                        {{ $suggestedMcq->question }}
                                    </a>
                                </div>
                            @endforeach
                            <div class="text-sm text-right flex justify-end mt-2">
                                <x-nav-link route="public.mcqs.index" class="text-primary hover:underline">
                                    View All MCQs
                                </x-nav-link>
                            </div>
                        </div>
                    </div>
                </x-aside>
            </div>
        </section>
    </div>
</div>
