<?php

use Livewire\Component;
use Livewire\Attributes\Validate;
use Livewire\Attributes\Computed;
use App\Support\SchemaGenerator;

new class extends Component {
    #[Validate('required|string|min:2|max:100')]
    public string $name = '';

    #[Validate('required|email|max:255')]
    public string $email = '';

    #[Validate('nullable|string|max:20')]
    public string $phone = '';

    #[Validate('required|string|min:2|max:100')]
    public string $city = '';

    #[Validate('required|string')]
    public string $role = '';

    #[Validate('required|string|min:20|max:1000')]
    public string $experience = '';

    #[Validate('required|string|min:20|max:1500')]
    public string $motivation = '';

    #[Validate('nullable|url|max:255')]
    public string $portfolio = '';

    public bool $submitted = false;

    public function submit(): void
    {
        $this->validate();

        // TODO: send notification / store in DB
        // \Mail::to('careers@pakquiz.com')->send(new \App\Mail\JoinUsMail([...]));

        $this->reset(['name', 'email', 'phone', 'city', 'role', 'experience', 'motivation', 'portfolio']);
        $this->submitted = true;
    }

    #[Computed]
    public function schema(): array
    {
        return array_merge(SchemaGenerator::website(), SchemaGenerator::joinUsPage());
    }
};
?>

@slot('title')
Join PakQuiz – Be Part of Pakistan's Exam Revolution
@endslot

@slot('description')
Join PakQuiz as a content contributor, MCQ writer, or team member. Help thousands of Pakistani students prepare for FPSC, PPSC, NTS, CSS & PMS exams.
@endslot

@slot('canonical')
{{ url('/join-us') }}
@endslot

@push('meta')
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:url" content="{{ url('/join-us') }}">
<meta property="og:title" content="Join PakQuiz – Be Part of Pakistan's Exam Revolution">
<meta property="og:description" content="Join PakQuiz as a content contributor, MCQ writer, or team member.">
<meta property="og:image" content="{{ asset('images/og-image.png') }}">
<meta property="og:site_name" content="PakQuiz">

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

    .join-page {
        font-family: 'DM Sans', sans-serif;
    }

    .join-page .display-font {
        font-family: 'Syne', sans-serif;
    }

    /* Animated gradient orbs */
    .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.18;
        animation: drift 12s ease-in-out infinite alternate;
    }

    .orb-1 {
        width: 420px;
        height: 420px;
        background: #3b82f6;
        top: -100px;
        right: -80px;
        animation-delay: 0s;
    }

    .orb-2 {
        width: 300px;
        height: 300px;
        background: #10b981;
        bottom: -60px;
        left: -60px;
        animation-delay: 3s;
    }

    .orb-3 {
        width: 200px;
        height: 200px;
        background: #6366f1;
        top: 40%;
        left: 30%;
        animation-delay: 6s;
    }



    /* Role card hover */
    .role-card {
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .role-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.06), rgba(16, 185, 129, 0.06));
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .role-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.09);
    }

    .role-card:hover::before {
        opacity: 1;
    }

    /* Diagonal stripe accent */
    .stripe-bg {
        background-image: repeating-linear-gradient(-45deg,
                transparent,
                transparent 12px,
                rgba(59, 130, 246, 0.04) 12px,
                rgba(59, 130, 246, 0.04) 24px);
    }

    /* Number counter style */
    .stat-number {
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        background: linear-gradient(135deg, #3b82f6, #10b981);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    /* Step connector line */
    .step-connector {
        position: absolute;
        left: 19px;
        top: 44px;
        bottom: -24px;
        width: 2px;
        background: linear-gradient(to bottom, #3b82f6, #10b981);
        opacity: 0.25;
    }

    /* Glowing submit button */
    .glow-btn {
        position: relative;
        overflow: hidden;
        transition: box-shadow 0.3s ease, transform 0.2s ease;
    }

    .glow-btn:hover {
        box-shadow: 0 0 28px rgba(59, 130, 246, 0.45);
        transform: translateY(-1px);
    }

    .glow-btn::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%);
        transform: translateX(-100%);
        transition: transform 0.5s ease;
    }

    .glow-btn:hover::after {
        transform: translateX(100%);
    }

    /* Tag pill */
    .tag-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        border-radius: 99px;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }
</style>
@endpush

<div class="join-page min-h-screen bg-gray-50">
    @teleport('head')
    <script type="application/ld+json">
        {!!json_encode($this->schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport
    {{-- ══════════════════════════════════════════
         HERO — dark, dramatic, full-bleed
    ══════════════════════════════════════════ --}}
    <section class="relative overflow-hidden bg-gray-950 text-white">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>

        {{-- Grid texture overlay --}}
        <div class="pointer-events-none absolute inset-0"
            style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;">
        </div>

        <div class="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div class="mx-auto max-w-3xl text-center">
                <div
                    class="fade-up fade-up-1 mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                    <span class="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                    <span class="text-sm font-medium text-green-300">We're growing — join the mission</span>
                </div>

                <h1
                    class="display-font fade-up fade-up-2 mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    Build Pakistan's<br>
                    <span
                        class="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                        #1 Exam Platform
                    </span>
                    <br>with Us
                </h1>

                <p class="fade-up fade-up-3 mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
                    PakQuiz is on a mission to democratize exam preparation across Pakistan.
                    Whether you write MCQs, build tech, or spread the word — there's a place for you here.
                </p>

                <div class="fade-up fade-up-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="#roles"
                        class="glow-btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg">
                        <x-ri-sparkling-2-fill class="h-4 w-4" />
                        See Open Roles
                    </a>
                    <a href="#apply"
                        class="inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 font-medium text-gray-300 transition hover:border-white/30 hover:text-white">
                        Apply Now
                        <x-ri-arrow-right-line class="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    {{-- ══════════════════════════════════════════
         STATS BAR
    ══════════════════════════════════════════ --}}
    <section class="relative z-10 -mt-1 bg-white border-b border-gray-100 shadow-sm">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 divide-x divide-gray-100 md:grid-cols-4">
                @foreach ([['number' => '50K+', 'label' => 'Registered Users'], ['number' => '10K+', 'label' => 'MCQs in Database'], ['number' => '15+', 'label' => 'Exam Categories'], ['number' => '2024', 'label' => 'Founded']] as $stat)
                <div class="py-6 text-center px-4">
                    <div class="stat-number text-3xl font-extrabold sm:text-4xl">{{ $stat['number'] }}</div>
                    <div class="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                        {{ $stat['label'] }}
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </section>

    {{-- ══════════════════════════════════════════
         WHY JOIN
    ══════════════════════════════════════════ --}}
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-12 text-center">
            <h2 class="display-font mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">Why Join PakQuiz?</h2>
            <p class="mx-auto max-w-xl text-gray-500">We're not just building an app. We're changing how Pakistan
                prepares.</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            @foreach ([
            ['icon' => 'globe-fill', 'color' => 'blue', 'bg' => 'bg-blue-50', 'iconColor' => 'text-blue-600', 'title' => 'Real Impact', 'desc' => 'Your MCQs or code directly helps thousands of aspirants crack FPSC, PPSC, NTS and more every single day.'],
            ['icon' => 'bar-chart-2-fill', 'color' => 'emerald', 'bg' => 'bg-emerald-50', 'iconColor' => 'text-emerald-600', 'title' => 'Grow With Us', 'desc' => 'PakQuiz is early-stage and growing fast. Contributors get recognition, experience, and a front-row seat to scale.'],
            ['icon' => 'user-fill', 'color' => 'violet', 'bg' => 'bg-violet-50', 'iconColor' => 'text-violet-600', 'title' => 'Great Community', 'desc' => 'Work alongside educators, developers and exam experts who are passionate about accessible education in Pakistan.'],
            ['icon' => 'star-fill', 'color' => 'amber', 'bg' => 'bg-amber-50', 'iconColor' => 'text-amber-600', 'title' => 'Get Recognised', 'desc' => 'Top contributors get featured on PakQuiz, certificates of contribution, and early access to premium features.'],
            ['icon' => 'file-zip-fill', 'color' => 'sky', 'bg' => 'bg-sky-50', 'iconColor' => 'text-sky-600', 'title' => 'Flexible & Remote', 'desc' => 'Contribute on your schedule from anywhere in Pakistan. No rigid hours — just results.'],
            ['icon' => 'heart-fill', 'color' => 'rose', 'bg' => 'bg-rose-50', 'iconColor' => 'text-rose-600', 'title' => 'Mission-Driven', 'desc' => 'We believe quality preparation should reach every corner of Pakistan — not just big cities or expensive academies.'],
            ] as $perk)
            <div class="role-card rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl {{ $perk['bg'] }}">
                    <x-dynamic-component :component="'ri-' . $perk['icon']" class="h-5 w-5 {{ $perk['iconColor'] }}" />
                </div>
                <h3 class="display-font mb-2 text-lg font-bold text-gray-900">{{ $perk['title'] }}</h3>
                <p class="text-sm leading-relaxed text-gray-500">{{ $perk['desc'] }}</p>
            </div>
            @endforeach
        </div>
    </section>

    {{-- ══════════════════════════════════════════
         OPEN ROLES
    ══════════════════════════════════════════ --}}
    <section id="roles" class="stripe-bg border-y border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div class="mb-12 text-center">
                <h2 class="display-font mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">Open Roles</h2>
                <p class="mx-auto max-w-xl text-gray-500">Pick the role that fits you best. Multiple roles? Apply for
                    all.</p>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
                @foreach ([
                [
                'title' => 'MCQ Content Writer',
                'tag' => 'Content',
                'tagBg' => 'bg-blue-100 text-blue-700',
                'icon' => 'pencil-fill',
                'iconBg' => 'bg-blue-600',
                'type' => 'Volunteer / Part-time',
                'perks' => ['Write subject-specific MCQs', 'Ensure accuracy & relevance', 'Flexible hours, work remotely', 'Certificate of contribution'],
                ],
                [
                'title' => 'Subject Matter Expert',
                'tag' => 'Education',
                'tagBg' => 'bg-emerald-100 text-emerald-700',
                'icon' => 'graduation-cap-fill',
                'iconBg' => 'bg-emerald-600',
                'type' => 'Volunteer / Consultant',
                'perks' => ['Review & validate MCQ accuracy', 'Provide topic-level guidance', 'CSS/PMS/FPSC domain expertise', 'Featured as verified expert'],
                ],
                [
                'title' => 'Frontend Developer',
                'tag' => 'Tech',
                'tagBg' => 'bg-violet-100 text-violet-700',
                'icon' => 'code-fill',
                'iconBg' => 'bg-violet-600',
                'type' => 'Part-time / Internship',
                'perks' => ['Laravel, Livewire & Tailwind', 'Work on real production features', 'Portfolio-worthy contributions', 'Mentorship & code reviews'],
                ],
                [
                'title' => 'Social Media & Marketing',
                'tag' => 'Marketing',
                'tagBg' => 'bg-rose-100 text-rose-700',
                'icon' => 'megaphone-fill',
                'iconBg' => 'bg-rose-600',
                'type' => 'Part-time / Remote',
                'perks' => ['Grow our Facebook, TikTok & Instagram', 'Create educational content', 'Design graphics & short videos', 'Real growth marketing experience'],
                ],
                [
                'title' => 'Campus Ambassador',
                'tag' => 'Community',
                'tagBg' => 'bg-amber-100 text-amber-700',
                'icon' => 'flag-fill',
                'iconBg' => 'bg-amber-600',
                'type' => 'Volunteer',
                'perks' => ['Represent PakQuiz at your university', 'Spread the word among peers', 'Earn premium access & rewards', 'Leadership experience'],
                ],
                [
                'title' => 'UI/UX Designer',
                'tag' => 'Design',
                'tagBg' => 'bg-sky-100 text-sky-700',
                'icon' => 'figma-fill',
                'iconBg' => 'bg-sky-600',
                'type' => 'Part-time / Remote',
                'perks' => ['Design pages & components', 'Work with Figma & Tailwind', 'User research & feedback loops', 'Ship designs that go live'],
                ],
                ] as $role)
                <div class="role-card rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="mb-4 flex items-start justify-between gap-3">
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl {{ $role['iconBg'] }}">
                                <x-dynamic-component :component="'ri-' . $role['icon']" class="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 class="display-font font-bold text-gray-900">{{ $role['title'] }}</h3>
                                <span class="text-xs text-gray-400">{{ $role['type'] }}</span>
                            </div>
                        </div>
                        <span class="tag-pill {{ $role['tagBg'] }} flex-shrink-0">{{ $role['tag'] }}</span>
                    </div>

                    <ul class="space-y-2">
                        @foreach ($role['perks'] as $perk)
                        <li class="flex items-center gap-2 text-sm text-gray-600">
                            <x-ri-check-line class="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
                            {{ $perk }}
                        </li>
                        @endforeach
                    </ul>
                </div>
                @endforeach
            </div>
        </div>
    </section>

    {{-- ══════════════════════════════════════════
         HOW IT WORKS
    ══════════════════════════════════════════ --}}
    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-12 text-center">
            <h2 class="display-font mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
            <p class="text-gray-500">Three simple steps to get started</p>
        </div>

        <div class="space-y-6">
            @foreach ([['step' => '01', 'color' => 'bg-blue-600', 'title' => 'Fill the Application', 'desc' => 'Tell us about yourself, your skills, and which role excites you. Takes under 3 minutes.'], ['step' => '02', 'color' => 'bg-emerald-600', 'title' => 'Quick Review', 'desc' => 'Our team reviews your application and gets back to you within 48 hours. We read every single one.'], ['step' => '03', 'color' => 'bg-violet-600', 'title' => 'Onboard & Contribute', 'desc' => "You'll get access to our contributor resources, style guides, and a warm welcome from the team."]] as $i => $s)
            <div class="relative flex gap-5">
                @if (!$loop->last)
                <div class="step-connector"></div>
                @endif
                <div
                    class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full {{ $s['color'] }} text-sm font-bold text-white shadow-md">
                    {{ $s['step'] }}
                </div>
                <div class="pb-6 z-999">
                    <h3 class="display-font mb-1 font-bold text-gray-900">{{ $s['title'] }}</h3>
                    <p class="text-sm leading-relaxed text-gray-500">{{ $s['desc'] }}</p>
                </div>
            </div>
            @endforeach
        </div>
    </section>

    {{-- ══════════════════════════════════════════
         APPLICATION FORM
    ══════════════════════════════════════════ --}}
    <section id="apply" class="border-t border-gray-100 bg-white py-16 lg:py-20">
        <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">

            <div class="mb-10 text-center">
                <h2 class="display-font mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">Apply Now</h2>
                <p class="text-gray-500">No CV needed. Just tell us who you are.</p>
            </div>

            @if ($submitted)
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                    <x-ri-check-fill class="h-7 w-7 text-emerald-600" />
                </div>
                <h3 class="display-font mb-2 text-xl font-bold text-emerald-900">Application Received!</h3>
                <p class="text-emerald-700">Thank you for applying. We'll review your application and get back to
                    you within 48 hours.</p>
            </div>
            @else
            <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div class="space-y-5">

                    {{-- Name & Email --}}
                    <div class="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label class="mb-1.5 block text-sm font-semibold text-gray-700">Full Name *</label>
                            <input type="text" wire:model="name" placeholder="Ahmad Khan"
                                class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none {{ $errors->has('name') ? 'border-red-400' : '' }}" />
                            @error('name')
                            <p class="mt-1 text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>
                        <div>
                            <label class="mb-1.5 block text-sm font-semibold text-gray-700">Email Address *</label>
                            <input type="email" wire:model="email" placeholder="ahmad@example.com"
                                class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none {{ $errors->has('email') ? 'border-red-400' : '' }}" />
                            @error('email')
                            <p class="mt-1 text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    {{-- Phone & City --}}
                    <div class="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label class="mb-1.5 block text-sm font-semibold text-gray-700">Phone Number</label>
                            <input type="tel" wire:model="phone" placeholder="0300 123 4567"
                                class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none" />
                        </div>
                        <div>
                            <label class="mb-1.5 block text-sm font-semibold text-gray-700">City *</label>
                            <input type="text" wire:model="city" placeholder="Lahore"
                                class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none {{ $errors->has('city') ? 'border-red-400' : '' }}" />
                            @error('city')
                            <p class="mt-1 text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    {{-- Role --}}
                    <div>
                        <label class="mb-1.5 block text-sm font-semibold text-gray-700">Role You're Applying For
                            *</label>
                        <select wire:model="role"
                            class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none {{ $errors->has('role') ? 'border-red-400' : '' }}">
                            <option value="">— Select a role —</option>
                            <option>MCQ Content Writer</option>
                            <option>Subject Matter Expert</option>
                            <option>Frontend Developer</option>
                            <option>Social Media & Marketing</option>
                            <option>Campus Ambassador</option>
                            <option>UI/UX Designer</option>
                            <option>Other</option>
                        </select>
                        @error('role')
                        <p class="mt-1 text-xs text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    {{-- Experience --}}
                    <div>
                        <label class="mb-1.5 block text-sm font-semibold text-gray-700">Relevant Experience /
                            Skills *</label>
                        <textarea wire:model="experience" rows="3" placeholder="Tell us briefly about your background and skills..."
                            class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none {{ $errors->has('experience') ? 'border-red-400' : '' }}"></textarea>
                        @error('experience')
                        <p class="mt-1 text-xs text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    {{-- Motivation --}}
                    <div>
                        <label class="mb-1.5 block text-sm font-semibold text-gray-700">Why do you want to join
                            PakQuiz? *</label>
                        <textarea wire:model="motivation" rows="4" placeholder="What excites you about this mission?..."
                            class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none {{ $errors->has('motivation') ? 'border-red-400' : '' }}"></textarea>
                        @error('motivation')
                        <p class="mt-1 text-xs text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    {{-- Portfolio --}}
                    <div>
                        <label class="mb-1.5 block text-sm font-semibold text-gray-700">Portfolio / LinkedIn /
                            GitHub <span class="font-normal text-gray-400">(optional)</span></label>
                        <input type="url" wire:model="portfolio" placeholder="https://..."
                            class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none" />
                    </div>

                    {{-- Submit --}}
                    <div class="pt-2">
                        <button type="button" wire:click="submit" wire:loading.attr="disabled"
                            class="glow-btn w-full rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 font-semibold text-white shadow-md disabled:opacity-60">
                            <span wire:loading.remove wire:target="submit"
                                class="flex items-center justify-center gap-2">
                                <x-ri-send-plane-line class="h-4 w-4" />
                                Submit Application
                            </span>
                            <span wire:loading wire:target="submit"
                                class="flex items-center justify-center gap-2">
                                <x-ri-loader-2-line class="h-4 w-4 animate-spin" />
                                Sending...
                            </span>
                        </button>
                        <p class="mt-3 text-center text-xs text-gray-400">* Required fields &nbsp;·&nbsp; We
                            respond within 48 hours</p>
                    </div>

                </div>
            </div>
            @endif
        </div>
    </section>

    {{-- ══════════════════════════════════════════
         BOTTOM CTA BAND
    ══════════════════════════════════════════ --}}
    <section class="bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 py-14 text-center text-white">
        <p class="display-font mb-2 text-xl font-bold sm:text-2xl">Still have questions?</p>
        <p class="mb-6 text-gray-400 text-sm">Drop us a message and we'll get back to you.</p>
        <a href="mailto:careers@pakquiz.com"
            class="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            <x-ri-mail-line class="h-4 w-4" />
            careers@pakquiz.com
        </a>
    </section>

</div>