<?php

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\JobPosting;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

new class extends Component
{
    public JobPosting $job;
    use WithPagination;

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Jobs', 'item' => url('/jobs')], ['@type' => 'ListItem', 'position' => 3, 'name' => $this->job->title, 'item' => url('/jobs/'.$this->job->slug)]],
        ];

        $schema = [
            '@context' => 'https://schema.org/',
            '@type' => 'JobPosting',
            'title' => $this->job->title,
            'description' => $this->job->description ?? "Apply for {$this->job->title} at {$this->job->department->name}. "."Minimum qualification: {$this->job->minimum_qualification}. "."Total posts: {$this->job->total_posts}. "."BPS Scale: {$this->job->scale}. ".'Closing date: '.Carbon::parse($this->job->closing_date)->format('d M Y').'.',
            'datePosted' => Carbon::parse($this->job->created_at)->toAtomString(),
            'validThrough' => Carbon::parse($this->job->closing_date)->endOfDay()->toAtomString(),
            'hiringOrganization' => [
                '@type' => 'Organization',
                'name' => $this->job->department->name,
                'sameAs' => url('/departments/'.$this->job->department->slug),
            ],
            'jobLocation' => [
                '@type' => 'Place',
                'address' => [
                    '@type' => 'PostalAddress',
                    'addressLocality' => $this->job->domicile ?? 'Pakistan',
                    'addressCountry' => 'PK',
                ],
            ],
            'employmentType' => 'FULL_TIME',

            // ── IDENTIFIER (for deduplication) ──────────────────────────────
            'identifier' => [
                '@type' => 'PropertyValue',
                'name' => $this->job->department->name,
                'value' => $this->job->ad_number ?? ($this->job->case_number ?? (string) $this->job->id),
            ],
            'url' => url('/jobs/'.$this->job->slug),
            'educationRequirements' => [
                '@type' => 'EducationalOccupationalCredential',
                'credentialCategory' => $this->job->minimum_qualification,
            ],
            'experienceRequirements' => $this->job->experience
                ? [
                    '@type' => 'OccupationalExperienceRequirements',
                    'monthsOfExperience' => $this->job->experience,
                ]
                : 'No experience required',
            'totalJobOpenings' => (int) ($this->job->total_posts ?? 1),
            'applicationContact' => $this->job->apply_url
                ? [
                    '@type' => 'ContactPoint',
                    'url' => $this->job->apply_url,
                ]
                : null,
            'industry' => 'Government / Public Sector',
            'occupationalCategory' => $this->job->testingService?->short_name ?? 'Government',
            'specialCommitments' => $this->job->age_relaxation ? 'Age relaxation available: '.$this->job->age_relaxation : null,

            'baseSalary' => [
                '@type' => 'MonetaryAmount',
                'currency' => 'PKR',
                'value' => [
                    '@type' => 'QuantitativeValue',
                    'value' => $this->job->scale,
                    'unitText' => 'PAY_SCALE',
                ],
            ],
            'directApply' => (bool) $this->job->apply_url,
        ];

        $schema = array_filter($schema, fn ($v) => $v !== null);

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        $relatedPapers = $this->job->testingService
                ?->papers()
            ->where('department_id', $this->job->department_id)
            ->orWhere('name', 'like', '%'.Str::lower(trim(Str::before($this->job->title, '('))).'%')
            ->latest()
            ->take(4)
            ->withCount('mcqs')
            ->get();

        return [
            'job' => $this->job,
            'schema' => $combinedSchema,
            'relatedJobs' => $this->job->department?->jobs?->latest()?->take(6)->get(),
            'relatedPapers' => $relatedPapers,
        ];
    }
};
?>

@slot('canonical')
{{ $job->canonicalUrl() }}
@endslot

@slot('title')
{{ $job->title.' | '.$job->department->name.' | '.$job?->testingService?->short_name.' | PakQuiz' }}
@endslot

@slot('description')
{{ $job->description }}
@endslot


<x-display>
    <x-slot:pageHeader>
        @teleport('head')
        <script
            type="application/ld+json">{!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}</script>
        @endteleport
        <div class="space-y-4 w-full">
            <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                <ol class="inline-flex gap-0.5 items-center md:space-x-1">
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-home class="w-4 h-4" />
                        <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                    </li>
                    <li class="flex gap-1 items-center">
                        <x-heroicon-o-chevron-right class="w-4 h-4" />
                        <a href="{{ route('public.jobs.index') }}" class="hover:text-primary">{{ __('All Jobs') }}</a>
                    </li>
                    <li class="flex gap-1 items-center">
                        <x-heroicon-o-chevron-right class="w-4 h-4" />
                        <span class="font-medium text-primary">{{ $job->title }}</span>
                    </li>
                </ol>
            </nav>
            <div class="rounded-2xl p-6 relative overflow-hidden"
                style="background: linear-gradient(135deg, #F17521 0%, #e97d36ff 60%, #f09b62ff 100%);">
                <div class="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white opacity-5"></div>
                <div class="absolute -bottom-14 left-5 w-36 h-36 rounded-full bg-white opacity-5"></div>
                <span
                    class="inline-block bg-white/20 text-secondary-foreground font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    {{ $job->department->name }} · {{ $job->testingService?->short_name }}
                </span>
                <h1 class="font-serif text-3xl font-bold text-white mb-1 leading-tight">{{ $job->title }}</h1>
                <p class="text-sm text-secondary-foreground font-semibold">
                    {{ $job->case_number ? 'Case No. '.$job->case_number : '' }}
                    {{ $job->testingService?->short_name }} Recruitment {{ $job->created_at->format('Y') }}
                </p>
                <div class="grid grid-cols-3 gap-3 mt-5">
                    <div class="bg-white/10 rounded-xl px-4 py-3">
                        <p class="text-xs text-secondary-foreground/80 font-semibold uppercase tracking-wide">Total
                            Posts</p>
                        <p class="text-base font-semibold text-secondary-foreground mt-0.5">{{ $job->total_posts }}</p>
                    </div>
                    <div class="bg-white/10 rounded-xl px-4 py-3">
                        <p class="text-xs text-secondary-foreground/80 font-semibold uppercase tracking-wide">Age Limit
                        </p>
                        <p class="text-base font-semibold text-secondary-foreground mt-0.5">Up to {{ $job->max_age }}
                        </p>
                    </div>
                    <div class="bg-white/10 rounded-xl px-4 py-3">
                        <p class="text-xs text-secondary-foreground/80 font-semibold uppercase tracking-wide">Domicile
                        </p>
                        <p class="text-base font-semibold text-secondary-foreground mt-0.5">{{ $job->domicile }}</p>
                    </div>
                </div>
            </div>
        </div>
    </x-slot:pageHeader>

    <x-slot:pageMain>
        <article class="space-y-6">
            {{-- Key Details --}}
            <div class="bg-white border border-gray-100 rounded-2xl p-6">
                <h2 class="text-base font-medium text-gray-900 flex items-center gap-2 mb-4">
                    <span class="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-sm">📋</span>
                    Key Job Details
                </h2>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="text-xs text-gray-400 uppercase tracking-wide mb-1">Job Title</p>
                        <p class="text-sm font-medium text-gray-800">{{ $job->title }}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-400 uppercase tracking-wide mb-1">Department</p>
                        <p class="text-sm font-medium text-gray-800">{{ $job->department->name }}</p>
                    </div>
                    @if ($job->case_number)
                        <div>
                            <p class="text-xs text-gray-400 uppercase tracking-wide mb-1">Case Number</p>
                            <p class="text-sm font-medium text-gray-800">{{ $job->case_number }}</p>
                        </div>
                    @endif
                    <div>
                        <p class="text-xs text-gray-400 uppercase tracking-wide mb-1">Age Relaxation</p>
                        <p class="text-sm font-medium text-gray-800">
                            {{ $job->age_relaxation ? '+'.$job->age_relaxation.' years (general)' : 'No Age Relaxation' }}
                        </p>
                    </div>
                </div>
            </div>

            {{-- Eligibility --}}
            <div class="bg-white border border-gray-100 rounded-2xl p-6">
                <h2 class="text-base font-semibold text-gray-900 flex items-center gap-2 mb-4">
                    <span class="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-sm">📋</span>
                    Description
                </h2>
                <div class="text-sm text-gray-700 leading-relaxed space-y-3">
                    {!! str($job->description)->markdown() !!}
                </div>
            </div>

            <div class="bg-white border border-gray-100 rounded-2xl p-6">
                <h2 class="text-base font-semibold text-gray-900 flex items-center gap-2 mb-4">
                    <span class="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-sm">🎓</span>
                    Eligibility Criteria
                </h2>
                <div class="space-y-3">
                    <div class="flex gap-3 items-start">
                        <div class="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            <span class="font-medium text-gray-900">Qualification:</span>
                            {{ $job->minimum_qualification }}
                        </p>
                    </div>
                    <div class="flex gap-3 items-start">
                        <div class="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            <span class="font-medium text-gray-900">Experience:</span>
                            @if (strtolower($job->experience) === 'fresh')
                                Fresh candidates encouraged — no prior experience required.
                            @else
                                {{ $job->experience }}
                            @endif
                        </p>
                    </div>
                </div>
            </div>

            {{-- How to Apply --}}
            <div class="bg-white border border-gray-100 rounded-2xl p-6">
                <h2 class="text-base font-semibold text-gray-900 flex items-center gap-2 mb-4">
                    <span class="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-sm">🚀</span>
                    How to Apply
                </h2>
                <div class="space-y-4">
                    @foreach (['Visit the official <strong>'.$job->testingService?->short_name.' Online Portal</strong> and create or log in to your account.', 'Upload your <strong>scanned documents</strong> (CNIC, degree, domicile, photos).', 'Deposit the <strong>application fee</strong> through the designated bank.', 'Submit before the <strong>closing date</strong> shown on the portal.'] as $i => $step)
                        <div class="flex gap-3 items-start">
                            <div
                                class="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center shrink-0">
                                {{ $i + 1 }}
                            </div>
                            <p class="text-sm text-gray-700 leading-relaxed pt-0.5">{!! $step !!}</p>
                        </div>
                    @endforeach
                </div>

                <a target="_blank" rel="noopener noreferrer" href="{{ $job->apply_url }}"
                    class="mt-5 block w-full text-center bg-primary hover:bg-primary/80 text-secondary-foreground text-sm font-semibold py-3 rounded-xl transition-colors duration-200">
                    Apply Now on {{ $job->testingService?->short_name }} Portal ↗
                </a>
                <p class="text-center text-xs text-gray-500 mt-2">
                    Closing date: <span
                        class="font-semibold text-gray-500">{{ $job->closing_date->format('F j, Y') }}</span>
                </p>
            </div>

            {{-- PakQuiz Promo --}}
            <div class="bg-primary/10 border border-primary/20 rounded-2xl p-5 flex gap-4 items-start">
                <span class="text-2xl shrink-0">⚡</span>
                <div class="space-y-2">
                    <h3 class="text-base font-semibold text-secondary-foreground">Ace the {{ $job->title }}
                        written test with PakQuiz</h3>
                    <p class="text-sm text-secondary-foreground/80 leading-relaxed">
                        Prepare for the <strong>{{ $job->title }}</strong> written test with
                        <strong>AI-powered mock tests</strong>, <strong>past papers</strong>, and
                        <strong>subject-wise practice</strong> (GK, English, Maths, Analytical Reasoning,
                        Islamiat, etc.) — with <strong>personalized performance analytics</strong>.
                    </p>
                    <x-text-link href="{{ route('public.papers.index') }}" text="Start Preparing Now"
                        icon="heroicon-o-chevron-right" class="text-secondary-foreground mt-2 inline-block"
                        wire:navigate />
                </div>
            </div>
        </article>
        @if ($relatedJobs)
            <section class="space-y-6">
                <h2 class="text-base font-semibold text-gray-900 flex items-center gap-2 mb-4">Latest Jobs in
                    {{ $job->department->name }}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    @foreach ($relatedJobs as $job)
                        <x-job-card :job="$job" wire:navigate />
                    @endforeach
                </div>
            </section>
        @endif

        @if ($relatedPapers && $relatedPapers->count() > 0)
            <section class="space-y-6 mt-4 md:mt-6">
                <h2 class="text-base font-semibold text-gray-900 flex items-center gap-2 mb-4">Related Official
                    / Mock Papers for {{ $job->title }}</h2>
                <div class="flex flex-col gap-4">
                    @foreach ($relatedPapers as $paper)
                        <x-paper-card :paper="$paper" wire:navigate />
                    @endforeach
                </div>
            </section>
        @endif
    </x-slot:pageMain>

    <x-slot:pageAside>
        <x-aside>
            <div class="space-y-2">
                <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
                <livewire:global-search />
            </div>
            <livewire:aside.latest-mcqs />
            <livewire:aside.latest-papers />
            <livewire:aside.current-affairs />
        </x-aside>
    </x-slot:pageAside>
</x-display>
