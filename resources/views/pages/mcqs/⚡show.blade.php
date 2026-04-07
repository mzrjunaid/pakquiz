@php
    $difficultyClasses =
        [
            'easy' => 'text-green-900 border-green-600',
            'medium' => 'text-yellow-900 border-yellow-600',
            'hard' => 'text-red-900 border-red-600',
        ][strtolower($mcq['difficulty'])] ?? 'text-gray-900';
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

    #[Computed]
    public function relatedMcqs()
    {
        return Mcq::where('topic_id', $this->mcq->topic_id)
            ->where('id', '!=', $this->mcq->id)
            ->take(10)
            ->get();
    }

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
            'relatedMcqs' => $this->relatedMcqs,
            'suggestedMcqs' => $this->suggestedMcqs(),
            'meta' => $this->meta(),
        ];
    }

    #[Computed]
    public function suggestedMcqs()
    {
        return Mcq::select('id', 'question', 'slug', 'subject_id', 'topic_id')->where('subject_id', $this->mcq->subject_id)->where('topic_id', $this->mcq->topic_id)->where('id', '!=', $this->mcq->id)->limit(5)->get();
    }

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_mcqs_' . $this->mcq->id, 86400, fn() => SeoData::mcqSeo($this->mcq));
    }
};
?>

@slot('canonical')
    {{ $this->meta['canonical'] }}
@endslot

@slot('title')
    {{ $this->meta['title'] }}
@endslot

@slot('description')
    {{ $this->meta['description'] }}
@endslot

@slot('image')
    {{ $this->meta['og_image'] }}
@endslot


<div>
    @teleport('head')
        <script type="application/ld+json">
        {!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport
    <div class="max-w-7xl mx-auto px-4 lg:px-0 space-y-4 py-6 md:py-12">
        <nav class="flex flex-wrap text-sm" aria-label="{{ __('Breadcrumb') }}">
            <ol class="inline-flex items-center flex-wrap md:space-x-2 font-medium">
                <li>
                    <a href="/" class="hover:text-primary flex items-center gap-1">
                        <x-heroicon-o-home class="h-4 w-4" />
                        {{ __('Home') }}
                    </a>
                </li>
                <li>
                    <div class="flex items-center gap-1">
                        <x-heroicon-o-chevron-right class="h-4 w-4" />
                        <a href="{{ route('public.mcqs.index') }}" class="hover:text-primary">{{ __('MCQs') }}</a>
                    </div>
                </li>
                @if ($mcq->subject)
                    <li>
                        <div class="flex items-center gap-1">
                            <x-heroicon-o-chevron-right class="h-4 w-4" />
                            <a href="{{ route('public.subject.show', $mcq->subject->slug) }}"
                                class="hover:text-primary line-clamp-1">{{ $mcq->subject->name }}</a>
                        </div>
                    </li>
                @endif
                @if ($mcq->topic)
                    <li>
                        <div class="flex items-center gap-1">
                            <x-heroicon-o-chevron-right class="h-4 w-4" />
                            <a href="{{ route('public.subject.topic.show', ['subject' => $mcq->subject->slug, 'topic' => $mcq->topic->slug]) }}"
                                class="hover:text-primary line-clamp-1">{{ $mcq->topic->name }}</a>
                        </div>
                    </li>
                @endif
                <li>
                    <div class="flex items-center gap-1">
                        <x-heroicon-o-chevron-right class="h-4 w-4" />
                        <span
                            class="font-medium text-primary max-w-xs line-clamp-1 {{ $mcq->isUrdu($mcq->question) ? 'font-urdu direction-rtl text-right' : '' }}">{{ $mcq->question }}</span>
                    </div>
                </li>
            </ol>
        </nav>
        <section class="flex flex-col gap-3 md:gap-6 md:flex-row items-end">
            <div class="space-y-4 w-full md:w-2/3">
                <h2 class="text-2xl font-bold text-primary">MCQ Detail</h2>
            </div>
            <div class="space-y-2 w-full md:w-1/3 block md:hidden">
                <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
                <livewire:global-search />
            </div>
        </section>
        

        <section x-data="{
            shareLink() {
                navigator.clipboard.writeText('{{ url('/mcqs/' . $mcq->slug) }}');
                Toaster.success('Link copied to the clipboard!');
            }
        }" class="pb-12">
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2 space-y-6 md:space-y-12 overflow-hidden">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex flex-wrap items-center gap-2">
                            <span
                                class="inline-flex gap-1 items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ">
                                <x-heroicon-s-cpu-chip class="h-3 w-3" /> AI
                            </span>
                            @if ($mcq['difficulty'])
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border {{ $difficultyClasses }} capitalize">
                                    {{ $mcq['difficulty'] }}
                                </span>
                            @endif
                        </div>

                        <div class="flex items-center gap-2 justify-end">
                            @if ($mcq['subject'])
                                <a href="{{ route('public.subject.show', $mcq['subject']['slug']) }}"
                                    class="px-2 py-1 bg-primary/60 hover:bg-primary/80 text-xs tracking-wider rounded truncate max-w-[130px] md:max-w-none">
                                    {{ $mcq['subject']['name'] }}
                                </a>
                            @endif
                            <button @click="shareLink" title="share" class="p-2 hover:bg-accent rounded-full">
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

                    <div class="rounded-lg bg-card p-4 md:p-6 shadow-md relative mb-2">
                        <h2 class="mb-2 text-lg font-semibold">Related MCQs</h2>
                        <p class="mb-3 text-muted text-sm">Explore the latest MCQs related to subject and topic.</p>
                        <div class="md:px-2">

                            @foreach ($relatedMcqs as $relatedMcq)
                                <x-aside.link :route="'public.mcqs.show'" :label="$relatedMcq->question" :params="$relatedMcq->slug" />
                            @endforeach
                            <div class="text-sm text-right flex justify-end mt-2">
                                <x-nav-link route="public.mcqs.index" class="hover:text-primary underline">
                                    View All MCQs
                                </x-nav-link>
                            </div>
                        </div>
                    </div>


                </div>
                <x-aside>
                    <livewire:global-search />
                    <livewire:aside.current-affairs />
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="mb-2 text-lg font-semibold">Suggested MCQs Related to Subject and Topic</h2>
                        <p class="mb-3 text-muted text-sm">Explore the latest MCQs related to subject and topic.</p>
                        <div class="md:px-2">

                            @foreach ($suggestedMcqs as $suggestedMcq)
                                <x-aside.link :route="'public.mcqs.show'" :label="$suggestedMcq->question" :params="$suggestedMcq->slug" />
                            @endforeach
                            <div class="text-sm text-right flex justify-end mt-2">
                                <x-nav-link route="public.mcqs.index" class="hover:text-primary underline">
                                    View All MCQs
                                </x-nav-link>
                            </div>
                        </div>
                    </div>
                    <livewire:aside.latest-papers />
                </x-aside>
            </div>
        </section>
    </div>
</div>
