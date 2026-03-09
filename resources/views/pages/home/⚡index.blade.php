<?php

use App\Models\Page;
use App\Models\Mcq;
use App\Models\Department;
use App\Models\Subject;
use App\Models\Paper;
use App\Http\Resources\Public\Mcq\McqWithOptionsResource;
use App\Support\SchemaGenerator;
use App\Support\SeoData;
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
            'data' => cache()->remember('home_page_data', now()->addSecond(), function () {
                return [
                    'departments_list' => Department::query()->select('id', 'name', 'slug')->latest()->limit(6)->get(),

                    'subjects_list' => Subject::query()->select('id', 'name', 'slug')->where('name', '!=', 'N/A')->withCount('mcqs')->orderByDesc('mcqs_count')->limit(8)->get(),

                    'current_affairs' => Subject::query()
                        ->select('id', 'name', 'slug', 'description')
                        ->where('id', 39)
                        ->with([
                            'topics' => function ($query) {
                                $query->select('id', 'name', 'slug', 'subject_id')->latest()->limit(10);
                            },
                        ])
                        ->first(),

                    'latestPapers' => Paper::query()->select('id', 'name', 'slug', 'schedule_at', 'paper_year')->latest('schedule_at')->limit(6)->get(),

                    'latestMcqs' => McqWithOptionsResource::collection(Mcq::latestWithOptions()->get()),
                    'heroSectionMcqs' => McqWithOptionsResource::collection(
                        Mcq::query()
                            ->where('is_active', true)
                            ->where('explanation', '!=', null)
                            ->oldest('created_at')
                            ->limit(6)
                            ->with(['options:id,mcq_id,option_text,is_correct', 'tags:id,name,slug', 'paper:id,name,slug', 'subject:id,name,slug', 'topic:id,name,slug', 'createdBy:id,name'])
                            ->get(),
                    )->resolve(),
                ];
            }),
        ]);
    }
};
?>

{{-- @dd($data['heroSectionMcqs']); --}}

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
        {!! json_encode($this->schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
    </script>
@endslot

<section class=" md:pt-6 pb-12 md:px-6 md:pt-12 lg:px-8">
    <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 lg:grid-cols-2">
            <div>
                <span
                    class="mb-3 sm:mb-6 flex items-center w-50 text-sm bg-primary text-primary-foreground rounded-full px-3 gap-2">
                    <x-ri-ai name="ai-generate" class="h-4 w-4" />
                    AI-Enhanced Learning
                </span>

                <h1 class="mb-3 sm:mb-6 text-3xl leading-tight font-bold text-foreground md:text-5xl lg:text-6xl">
                    Master MCQs with
                    <span class="block text-muted-foreground/65">
                        Intelligent Practice
                    </span>
                </h1>

                <p class="mb-4 sm:mb-8 text-sm leading-relaxed md:text-xl">
                    Access thousands of AI-enhanced multiple choice
                    questions across subjects, jobs, and testing
                    services. Practice smarter, not harder.
                </p>

                <div class="mb-4  flex flex-col sm:flex-row gap-3 md:gap-6">
                    <a href="/mcqs"
                        class="flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all px-4 sm:px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                        <x-heroicon-s-play class="h-5 w-5" />
                        Start Practicing
                    </a>
                    <a href="/demo"
                        class="flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all px-4 sm:px-8 border hover:text-primary-foreground hover:bg-primary/90 rounded-lg">
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
