<?php

use App\Support\SchemaGenerator;
use Livewire\Attributes\Computed;
use Livewire\Component;

new class extends Component {
    #[Computed]
    public function schema()
    {
        return array_merge(SchemaGenerator::website(), SchemaGenerator::aboutPage());
    }
};
?>

@slot('title')
About PakQuiz – Smart MCQs Preparation Platform for Pakistan
@endslot

@slot('description')
PakQuiz is Pakistan's AI-assisted MCQs preparation platform for FPSC, PPSC, NTS, CSS, PMS & departmental exams. Structured, accessible, and data-driven exam prep for every aspirant.
@endslot

@slot('keywords')
MCQs preparation Pakistan, FPSC MCQs, PPSC MCQs, NTS preparation, CSS PMS preparation, online quiz Pakistan, exam preparation platform, practice papers Pakistan
@endslot

@slot('canonical')
{{ url('/about') }}
@endslot

@slot('image')
{{ asset('images/og-image.png') }}
@endslot


<div>
    @teleport('head')
    <script type="application/ld+json">
        {!!json_encode($this->schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport

    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {{-- Hero Section --}}
        <header class="bg-gradient-to-r from-primary/65 via-primary/80 to-primary/65 text-white">
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="text-center">
                    <div class="mb-4 flex items-center justify-center gap-3">
                        <x-ri-target-fill class="w-12 h-12 lg:h-12" />
                        <h1 class="text-2xl font-bold md:text-5xl lg:text-4xl">
                            About PakQuiz
                        </h1>
                    </div>
                    <p class="mx-auto max-w-3xl text-base text-blue-100 md:text-2xl">
                        Smart MCQs Preparation Platform for Pakistan
                    </p>
                    <p class="mx-auto mt-4 max-w-2xl text-base text-blue-50 md:text-lg">
                        Making exam preparation structured, accessible, and effective for students and job seekers
                        across Pakistan.
                    </p>
                    <nav class="flex justify-center mb-2 text-sm" aria-label="{{ __('Breadcrumb') }}">
                        <ol class="inline-flex items-center md:space-x-1">
                            <li class="inline-flex gap-1 items-center">
                                <x-heroicon-o-home class="w-4 h-4" />
                                <a href="/" class="text-white" title="{{ __('Home') }}" aria-label="{{ __('Home') }}">{{ __('Home') }}</a>
                            </li>
                            <li class="inline-flex gap-1 items-center">
                                <x-heroicon-o-chevron-right class="w-4 h-4" />
                                <span class="font-medium text-white" title="{{ __('About Us') }}" aria-label="{{ __('About Us') }}">{{ __('About Us') }}</span>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>
        </header>

        <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

            {{-- Mission Statement --}}
            <section class="mb-16">
                <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
                    <div class="mx-auto max-w-4xl text-center">
                        <h2 class="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                            Our Mission
                        </h2>
                        <p class="text-base leading-relaxed text-gray-700 md:text-xl">
                            PakQuiz is a modern, AI-assisted online MCQs preparation platform built for students, job
                            seekers,
                            and competitive exam aspirants across Pakistan. Our mission is simple:
                            <strong class="text-blue-600">make exam preparation structured, accessible, and
                                effective.</strong>
                        </p>
                        <p class="mt-4 text-base text-gray-600 md:text-lg">
                            We help candidates prepare for government and private sector exams through subject-wise,
                            topic-wise,
                            and exam-oriented multiple choice questions—designed according to real testing patterns.
                        </p>
                    </div>
                </div>
            </section>

            {{-- Why PakQuiz Exists --}}
            <section class="mb-16">
                <h2 class="mb-8 text-center text-3xl font-bold text-gray-900">
                    Why PakQuiz Exists
                </h2>

                <div class="grid gap-8 md:grid-cols-2">

                    {{-- The Challenge --}}
                    <div class="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-4 md:p-8">
                        <h3 class="mb-4 text-2xl font-bold text-gray-900">The Challenge</h3>
                        <p class="mb-4 text-base text-gray-700 md:text-lg">
                            In Pakistan, thousands of candidates appear every year in exams conducted by:
                        </p>
                        <div class="mb-6 grid grid-cols-2 gap-3">
                            @foreach (['FPSC', 'PPSC', 'NTS', 'CSS / PMS', 'Testing Services', 'Departmental Tests'] as $exam)
                            <div
                                class="rounded-lg border border-red-200 bg-white px-4 py-2 text-center font-semibold text-gray-800">
                                {{ $exam }}
                            </div>
                            @endforeach
                        </div>
                        <p class="mb-3 font-semibold text-gray-700">Most aspirants struggle with:</p>
                        <ul class="space-y-2">
                            @foreach (['Scattered study material', 'Outdated MCQs', 'Lack of practice analytics', 'No clear preparation roadmap'] as $problem)
                            <li class="flex items-start gap-2">
                                <div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></div>
                                <span class="text-gray-700">{{ $problem }}</span>
                            </li>
                            @endforeach
                        </ul>
                    </div>

                    {{-- The Solution --}}
                    <div
                        class="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8">
                        <h3 class="mb-4 text-2xl font-bold text-gray-900">Our Solution</h3>
                        <div class="mb-6 flex items-center gap-3">
                            <x-ri-shield-fill class="h-12 w-12 text-green-600" />
                            <p class="text-xl font-semibold text-gray-800">
                                PakQuiz was built to solve these exact problems.
                            </p>
                        </div>
                        <p class="mb-4 leading-relaxed text-gray-700">
                            We provide a centralized, modern platform that brings together quality MCQs, smart
                            analytics,
                            and AI-powered learning—all in one place.
                        </p>
                        <p class="leading-relaxed text-gray-700">
                            No more hunting for scattered materials. No more guessing your weak areas.
                            Just focused, data-driven exam preparation.
                        </p>
                        <div class="mt-6 rounded-lg border border-green-300 bg-white p-4">
                            <p class="font-medium text-green-800">
                                ✓ Organized content &nbsp; ✓ Updated regularly &nbsp; ✓ Smart tracking &nbsp; ✓ Clear
                                roadmap
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {{-- What We Offer --}}
            <section class="mb-16">
                <h2 class="mb-4 text-center text-3xl font-bold text-gray-900">What We Offer</h2>
                <p class="mx-auto mb-10 max-w-2xl text-center text-gray-600">
                    Everything you need for effective MCQs preparation, from basic practice to advanced analytics
                </p>

                <div class="grid gap-8 md:grid-cols-2">

                    @php
                    $features = [
                    [
                    'icon' => 'book-open-fill',
                    'title' => 'Comprehensive MCQs Database',
                    'description' =>
                    'A continuously growing collection of verified MCQs covering subjects, topics, departments, testing services, and competitive exam papers. Each MCQ is carefully categorized to ensure focused preparation instead of random practice.',
                    'gradient' => 'from-blue-500 to-blue-600',
                    'badge' => null,
                    ],
                    [
                    'icon' => 'award-fill',
                    'title' => 'Practice Papers & Demo Tests',
                    'description' =>
                    'Attempt demo practice papers, subject-wise tests, and topic-focused quizzes. Test your knowledge in a real exam-like environment and build confidence before the actual test.',
                    'gradient' => 'from-green-500 to-green-600',
                    'badge' => null,
                    ],
                    [
                    'icon' => 'bar-chart-box-ai-fill',
                    'title' => 'Smart Progress Tracking',
                    'description' =>
                    'Advanced features for serious aspirants including performance analytics, accuracy tracking, custom practice papers, and topic strength & weakness analysis. Transform MCQs practice into data-driven preparation.',
                    'gradient' => 'from-purple-500 to-purple-600',
                    'badge' => ['label' => 'Premium Feature', 'class' => 'bg-purple-100 text-purple-700'],
                    ],
                    [
                    'icon' => 'sparkling-2-fill',
                    'title' => 'AI-Assisted Learning',
                    'description' =>
                    'PakQuiz integrates AI to improve content quality, assist with learning insights, and enhance personalized practice experiences. Our goal is not just testing—but learning improvement.',
                    'gradient' => 'from-orange-500 to-orange-600',
                    'badge' => [
                    'label' => 'Coming Soon & Evolving',
                    'class' => 'bg-orange-100 text-orange-700',
                    ],
                    ],
                    ];
                    @endphp

                    @foreach ($features as $feature)
                    <div
                        class="rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl md:p-6">
                        <div
                            class="h-10 w-10 bg-gradient-to-br md:h-14 md:w-14 {{ $feature['gradient'] }} mb-4 flex items-center justify-center rounded-lg">
                            <x-dynamic-component :component="'ri-' . $feature['icon']" class="h-5 w-5 text-white md:h-8 md:w-8" />
                        </div>
                        <h3 class="mb-3 text-xl font-bold text-gray-900">{{ $feature['title'] }}</h3>
                        <p class="text-sm leading-relaxed text-gray-700">{{ $feature['description'] }}</p>
                        @if ($feature['badge'])
                        <div
                            class="mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold {{ $feature['badge']['class'] }}">
                            {{ $feature['badge']['label'] }}
                        </div>
                        @endif
                    </div>
                    @endforeach

                </div>
            </section>

            {{-- Who PakQuiz Is For --}}
            <section class="mb-16">
                <div class="rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 p-4 text-white shadow-xl md:p-12">
                    <div class="mb-6 flex items-center justify-center gap-3">
                        <x-ri-user-community-fill class="h-8 w-8 md:h-10 md:w-10" />
                        <h2 class="text-xl font-bold md:text-3xl">Who PakQuiz Is For</h2>
                    </div>
                    <p class="mx-auto mb-8 max-w-3xl text-center text-blue-50 md:text-lg">
                        Whether you're starting from scratch or revising before an exam, PakQuiz adapts to your
                        preparation style.
                    </p>
                    <div class="grid gap-4 md:grid-cols-5">
                        @foreach (['Government job aspirants', 'CSS / PMS candidates', 'University & entry test students', 'Departmental exam candidates', 'Anyone preparing through MCQs'] as $audience)
                        <div
                            class="rounded-lg border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
                            <x-ri-check-fill class="mx-auto mb-2 h-6 w-6" />
                            <p class="font-semibold">{{ $audience }}</p>
                        </div>
                        @endforeach
                    </div>
                </div>
            </section>

            {{-- Our Vision --}}
            <section class="mb-16">
                <div class="grid items-center gap-8 md:grid-cols-2">
                    <div>
                        <div class="mb-4 flex items-center gap-3">
                            <x-ri-line-chart-fill class="h-10 w-10 text-primary" />
                            <h2 class="text-3xl font-bold text-gray-900">Our Vision</h2>
                        </div>
                        <p class="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                            Our long-term vision is to become
                            <strong class="text-primary">Pakistan's most trusted digital MCQs preparation
                                platform</strong>, combining:
                        </p>
                        <div class="space-y-3">
                            <div class="flex items-center gap-3 rounded-lg bg-blue-50 p-3">
                                <x-ri-check-fill class="h-5 w-5 flex-shrink-0 text-blue-600" />
                                <span class="font-medium text-gray-800">Authentic content</span>
                            </div>
                            <div class="flex items-center gap-3 rounded-lg bg-green-50 p-3">
                                <x-ri-lightbulb-ai-fill class="h-5 w-5 flex-shrink-0 text-green-600" />
                                <span class="font-medium text-gray-800">Smart technology</span>
                            </div>
                            <div class="flex items-center gap-3 rounded-lg bg-purple-50 p-3">
                                <x-ri-award-fill class="h-5 w-5 flex-shrink-0 text-purple-600" />
                                <span class="font-medium text-gray-800">Clean user experience</span>
                            </div>
                            <div class="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                                <x-ri-user-fill class="h-5 w-5 flex-shrink-0 text-orange-600" />
                                <span class="font-medium text-gray-800">Affordable learning access</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8">
                        <blockquote class="mb-4 text-base italic text-gray-800 md:text-xl">
                            "We believe quality exam preparation should be available to everyone, not limited by
                            location or expensive academies."
                        </blockquote>
                        <p class="text-sm leading-relaxed text-gray-700 md:text-base">
                            PakQuiz democratizes access to quality MCQs preparation, ensuring that every aspiring
                            candidate—regardless of their background—has the tools to succeed.
                        </p>
                    </div>
                </div>
            </section>

            {{-- Our Commitment --}}
            <section class="mb-16">
                <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
                    <div class="mb-8 text-center">
                        <div class="mb-4 flex items-center justify-center gap-3">
                            <x-ri-shield-fill class="h-10 w-10 text-green-600" />
                            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">Our Commitment</h2>
                        </div>
                        <p class="text-base text-gray-600 md:text-lg">
                            We are committed to excellence in every aspect
                        </p>
                    </div>

                    <div class="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
                        @foreach (['Regular content updates', 'Accuracy & relevance', 'Continuous platform improvement', 'Listening to user feedback'] as $commitment)
                        <div
                            class="flex items-center gap-3 rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 p-4">
                            <x-ri-check-fill class="h-6 w-6 flex-shrink-0 text-green-600" />
                            <span
                                class="text-sm font-medium text-gray-800 md:text-base">{{ $commitment }}</span>
                        </div>
                        @endforeach
                    </div>

                    <p class="mx-auto mt-8 max-w-2xl text-center text-base text-gray-700 md:text-lg">
                        PakQuiz is not just a website—it's a
                        <strong class="text-primary">learning ecosystem built for exam success</strong>.
                    </p>
                </div>
            </section>

            {{-- Call to Action --}}
            <section>
                <div
                    class="rounded-2xl bg-gradient-to-r from-primary/65 to-primary/75 p-4 text-center text-white shadow-2xl md:p-12">
                    <h2 class="mb-4 text-3xl font-bold md:text-4xl">Start Practising Today</h2>
                    <p class="mx-auto mb-8 max-w-2xl text-xl text-blue-50">
                        Whether you're preparing for your first test or final revision, PakQuiz is here to support your
                        journey.
                    </p>

                    <div class="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a href="{{ route('register') }}"
                            class="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-6 py-3 font-bold text-primary shadow-lg transition-colors hover:bg-primary hover:text-white md:text-lg">
                            Create Free Account
                        </a>
                        <a href="{{ route('public.premium.index') }}"
                            class="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 font-bold text-white transition-colors hover:bg-primary md:text-lg">
                            Explore Premium
                        </a>
                    </div>

                    <div class="flex flex-wrap items-center justify-center gap-2 text-blue-100">
                        <x-ri-check-fill class="h-5 w-5" />
                        <span class="text-sm font-medium md:text-base">Practice smart.</span>
                        <x-ri-check-fill class="h-5 w-5" />
                        <span class="text-sm font-medium md:text-base">Track progress.</span>
                        <x-ri-check-fill class="h-5 w-5" />
                        <span class="text-sm font-medium md:text-base">Succeed confidently.</span>
                    </div>
                </div>
            </section>

        </div>
    </div>
</div>