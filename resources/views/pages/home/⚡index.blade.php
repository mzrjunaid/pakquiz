<?php

use App\Models\Page;
use App\Models\Mcq;
use App\Models\Department;
use App\Models\Subject;
use App\Models\Paper;
use App\Http\Resources\Public\Mcq\McqWithOptionsResource;
use App\Support\SchemaGenerator;
use App\Support\SeoData;
use Illuminate\Support\Facades\DB;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_home', 86400, fn() => SeoData::fromModel(Page::where('key', 'home')->with('seo')->firstOrFail()));
    }

    #[Computed]
    public function schema()
    {
        return SchemaGenerator::website();
    }

    #[Computed]
    public function stats()
    {
        return cache()->remember('site_stats', 3600, function () {
            return collect(
                DB::select("
            SELECT 
                (SELECT COUNT(*) FROM mcqs) as mcqs, 
                (SELECT COUNT(*) FROM papers) as papers
        "),
            )->first();
        });
    }

    public function render()
    {
        return view('pages::home.⚡index', [
            'data' => cache()->remember('home_page_data', now()->addHour(), function () {
                return [
                    'latestMcqs' => McqWithOptionsResource::collection(Mcq::latestWithOptions()->limit(10)->get()),
                    'heroSectionMcqs' => McqWithOptionsResource::collection(
                        Mcq::query()
                            ->where('is_active', true)
                            ->where('explanation', '!=', null)
                            ->oldest('created_at')
                            ->limit(6)
                            ->with(['options:id,mcq_id,option_text,is_correct', 'tags:id,name,slug', 'paper:id,name,slug', 'subject:id,name,slug', 'topic:id,name,slug', 'createdBy:id,name'])
                            ->get(),
                    ),
                ];
            }),
        ]);
    }
};
?>

@slot('title')
    {{ $this->meta['title'] }}
@endslot

@push('meta')
    <meta name="description" content="{{ $this->meta['description'] }}">
    <meta name="canonical" content="{{ $this->meta['canonical'] }}">
    <meta property="og:title" content="{{ $this->meta['og_title'] }}">
    <meta property="og:description" content="{{ $this->meta['og_description'] }}">
    <meta property="og:image" content="{{ $this->meta['og_image'] }}">
    <meta property="og:url" content="{{ $this->meta['canonical'] }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $this->meta['og_title'] }}">
    <meta name="twitter:description" content="{{ $this->meta['og_description'] }}">
    <meta name="twitter:image" content="{{ $this->meta['og_image'] }}">
@endpush

@slot('schema')
    <script type="application/ld+json">
    {!!json_encode($this->schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
</script>
@endslot

<div>
    <div class="max-w-7xl mx-auto px-4 lg:px-0 py-6 md:py-12 space-y-12">
        <section>
            <div class="grid items-center gap-12 lg:grid-cols-2">
                <div>
                    <span
                        class="mb-3 sm:mb-6 flex items-center w-50 text-sm bg-primary/40 py-1.5 text-black font-semibold rounded-full px-2 justify-center gap-2">
                        <x-ri-ai name="ai-generate" class="h-4 w-4" />
                        AI-Enhanced Learning
                    </span>

                    <h1 class="mb-3 sm:mb-6 text-2xl leading-tight font-bold text-foreground md:text-3xl lg:text-4xl">
                        PPSC FPSC MCQs & Past Papers
                        <span class="block text-muted-foreground/65">
                            Online Exam Preparation Pakistan
                        </span>
                    </h1>

                    <p class="mb-4 sm:mb-8 text-sm leading-relaxed md:text-xl">
                        44,000+ MCQs for PPSC, FPSC, NTS & CSS — AI-Enhanced & Updated for 2026
                        Practice subject-wise questions from real past papers. Built for Pakistani competitive exam
                        aspirants.
                    </p>

                    <div class="mb-4  flex flex-col sm:flex-row gap-3 md:gap-6">
                        <a href="/mcqs"
                            class="flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all tracking-wide px-4 sm:px-8 bg-primary/80 text-black hover:bg-primary/30 hover:text-black rounded-lg">
                            <x-heroicon-s-play class="h-5 w-5" />
                            Start Practicing
                        </a>
                        <a href="/demo"
                            class="flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all tracking-wide px-4 sm:px-8 border hover:text-black hover:bg-primary/30 hover:border-primary/90 rounded-lg">
                            <x-heroicon-s-eye class="h-5 w-5" />
                            View Demo
                        </a>
                    </div>

                    <div class="grid grid-cols-2 gap-3 md:gap-6">
                        <div class="flex items-center rounded-lg bg-card p-2 md:p-4 text-center shadow-md">
                            <div class="flex items-center justify-center rounded-full border-2 p-1.5">
                                <x-heroicon-s-clipboard-document-check class="h-3 w-3 md:h-5 md:w-5" />
                            </div>
                            <div class="w-full">
                                <div class="font-bold text-sm md:text-xl">
                                    {{ $this->stats->mcqs }}
                                </div>
                                <div class="text-xs md:text-sm">
                                    Mcqs Available
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center rounded-lg bg-card p-2 md:p-4 text-center shadow-md">
                            <div class="flex items-center justify-center rounded-full border-2 p-1.5">
                                <x-heroicon-s-clipboard-document class="h-3 w-3 md:h-5 md:w-5" />
                            </div>
                            <div class="w-full">
                                <div class="font-bold text-sm md:text-xl">
                                    {{ $this->stats->papers }}
                                </div>
                                <div class="text-xs md:text-sm">
                                    Papers Available
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div x-data="{
                    active: 0,
                    total: {{ count($data['heroSectionMcqs']) }},
                    start() {
                        setInterval(() => {
                            this.active = (this.active + 1) % this.total
                        }, 10000)
                    }
                }" x-init="start()" class="hidden lg:block">
                    @foreach ($data['heroSectionMcqs'] as $index => $mcq)
                        <div x-show="active === {{ $index }}">
                            <x-mcq-card :mcq="$mcq" :idx="$index" :route="route('public.mcqs.show', $mcq['slug'])" />
                        </div>
                    @endforeach
                </div>
            </div>
        </section>

        <section>
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2 space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-base md:text-2xl font-bold">Latest MCQs Based on Recent Papers and Current
                            Affairs
                        </h2>
                        <p class="text-xs md:text-base text-justify">PakQuiz offers 44,000+ MCQs, past papers and
                            current affairs for PPSC, FPSC, NTS, CSS and PMS exams. Every question is sourced from real
                            past papers and updated to match the latest 2026 exam patterns — covering General Knowledge,
                            Pakistan Studies, English, Everyday Science and more. Start practicing by subject, paper or
                            department and track your progress as you go.</p>
                    </div>
                    <div class="space-y-4 md:space-y-6">
                        @foreach ($data['latestMcqs'] as $index => $mcq)
                            <x-mcq-card :mcq="$mcq" :idx="$index" :route="route('public.mcqs.show', $mcq['slug'])" />
                        @endforeach

                        <div class="flex justify-center">
                            <a href="{{ route('public.mcqs.index') }}"
                                class="w-full py-2 text-center rounded-lg bg-primary/80 hover:bg-primary/60 font-semibold tracking-wide transition-all">
                                View All MCQs
                            </a>
                        </div>
                    </div>
                </div>

                <x-aside>
                    <livewire:global-search />
                    <livewire:aside.current-affairs />
                    <livewire:aside.latest-papers />
                    <livewire:aside.latest-subjects />
                    <livewire:aside.latest-departments />
                </x-aside>
            </div>
        </section>
    </div>
    <section class="bg-accent px-4 py-16 text-accent-foreground sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
            <h2 class="mb-6 text-2xl font-bold md:text-4xl">Ready to Excel in Your Exams?</h2>
            <p class="mb-8 text-lg md:text-xl">Join thousands of students who have improved their scores with our
                AI-powered MCQ platform</p>
            <div class="flex flex-row justify-center gap-x-4">
                <a href="{{ route('register') }}"
                    class="flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all px-4 sm:px-8 bg-primary/80 hover:bg-primary/60 font-semibold tracking-wide rounded-lg">
                    Start Free Trial
                </a>
                <a href="{{ route('demo') }}"
                    class="flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all px-4 sm:px-8 border hover:border-primary/80 hover:bg-primary/80 rounded-lg">
                    View Demo
                </a>
            </div>
        </div>
    </section>
</div>
