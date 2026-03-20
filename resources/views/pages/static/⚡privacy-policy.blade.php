<?php

use App\Support\SchemaGenerator;
use Livewire\Attributes\Computed;
use Livewire\Component;

new class extends Component {
    public string $activeSection = 'introduction';

    public string $contactEmail = 'privacy@pakquiz.com';
    public string $contactPhone = '+92 300 123 4567';
    public string $lastUpdated = 'January 1, 2025';

    public function setActive(string $section): void
    {
        $this->activeSection = $section;
    }

    #[Computed]
    public function sections(): array
    {
        return [['id' => 'introduction', 'title' => 'Introduction', 'icon' => 'ri-shield-check-line'], ['id' => 'information', 'title' => 'Information We Collect', 'icon' => 'ri-database-2-line'], ['id' => 'usage', 'title' => 'How We Use Your Info', 'icon' => 'ri-eye-line'], ['id' => 'protection', 'title' => 'Data Protection', 'icon' => 'ri-lock-line'], ['id' => 'cookies', 'title' => 'Cookies & Tracking', 'icon' => 'ri-file-text-line'], ['id' => 'rights', 'title' => 'Your Rights', 'icon' => 'ri-user-follow-line'], ['id' => 'contact', 'title' => 'Contact Us', 'icon' => 'ri-mail-line']];
    }

    #[Computed]
    public function schema(): array
    {
        return array_merge(SchemaGenerator::website(), SchemaGenerator::privacyPolicyPage());
    }
};
?>


@slot('title')
    Privacy Policy – PakQuiz
@endslot

@push('head')
    <meta name="title" content="Privacy Policy – PakQuiz">
    <meta name="description"
        content="Read PakQuiz's Privacy Policy to understand how we collect, use, and protect your personal information on our MCQs preparation platform.">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{{ url('/privacy-policy') }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url('/privacy-policy') }}">
    <meta property="og:title" content="Privacy Policy – PakQuiz">
    <meta property="og:description"
        content="Read PakQuiz's Privacy Policy to understand how we collect, use, and protect your personal information.">
    <meta property="og:image" content="{{ asset('images/og-image.png') }}">
    <meta property="og:site_name" content="PakQuiz">
@endpush

<div class="max-w-7xl mx-auto">
    @teleport('head')
        <script type="application/ld+json">
        {!!json_encode($this->schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport
    <div class="space-y-2 py-8">
        <nav class="flex mb-2 text-sm" aria-label="{{ __('Breadcrumb') }}">
            <ol class="inline-flex items-center md:space-x-1">
                <li class="inline-flex items-center">
                    <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                </li>
                <li>
                    <div class="flex items-center">
                        <span class="mx-2">/</span>
                        <span class="font-medium text-primary">{{ __('Privacy Policy') }}</span>
                    </div>
                </li>
            </ol>
        </nav>
        <x-page-header title="Privacy Policy"
            description="Read PakQuiz's Privacy Policy to understand how we collect, use, and protect your personal information on our MCQs preparation platform." />
    </div>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {{-- ── Sticky Sidebar Navigation ── --}}
        <nav class="lg:col-span-1">
            <div class="sticky top-24 rounded-lg bg-card p-4 shadow-sm">
                <h2 class="mb-4 font-semibold">Quick Navigation</h2>
                <ul class="space-y-1">
                    @foreach ($this->sections as $section)
                        <li>
                            <a href="#{{ $section['id'] }}" wire:click.prevent="setActive('{{ $section['id'] }}')"
                                class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors
                                   {{ $activeSection === $section['id']
                                       ? 'bg-accent font-semibold text-accent-foreground'
                                       : 'text-muted-foreground hover:bg-accent' }}"
                                x-on:click="document.getElementById('{{ $section['id'] }}')?.scrollIntoView({ behavior: 'smooth' })">
                                @svg($section['icon'], 'h-4 w-4 flex-shrink-0')
                                <span>{{ $section['title'] }}</span>
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </nav>

        {{-- ── Main Content ── --}}
        <div class="lg:col-span-3">
            <div class="rounded-lg border border-gray-200 bg-card p-6 shadow-sm md:p-8">

                {{-- Introduction --}}
                <section id="introduction" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-shield-check-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Introduction</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        Welcome to our MCQs Preparation Platform. We are committed to protecting your privacy and
                        ensuring
                        the security of your personal information. This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you use our website and services.
                    </p>
                    <p class="leading-relaxed text-gray-700">
                        By accessing or using our platform, you agree to the terms outlined in this Privacy Policy.
                        If you do not agree with our practices, please do not use our services.
                    </p>
                </section>

                {{-- Information We Collect --}}
                <section id="information" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-database-2-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Information We Collect</h2>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Personal Information</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        When you register for an account or use our premium services, we may collect:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Account credentials (username, password)</li>
                        <li>Payment information for premium subscriptions</li>
                        <li>Educational background and job preferences</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Usage Information</h3>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Practice test results and performance metrics</li>
                        <li>Questions attempted and time spent on platform</li>
                        <li>Custom paper preferences and categories selected</li>
                        <li>Progress tracking data and learning patterns</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Technical Information</h3>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>IP address and device information</li>
                        <li>Browser type and operating system</li>
                        <li>Pages visited and features used</li>
                        <li>Date and time of access</li>
                    </ul>
                </section>

                {{-- How We Use Your Information --}}
                <section id="usage" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-eye-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">How We Use Your Information</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        We use the collected information for the following purposes:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>To provide and maintain our MCQs preparation services</li>
                        <li>To process premium subscription payments and manage accounts</li>
                        <li>To track your progress and generate performance analytics</li>
                        <li>To generate AI-powered practice papers based on your preferences</li>
                        <li>To send notifications about new job postings and practice materials</li>
                        <li>To improve our platform and develop new features</li>
                        <li>To provide customer support and respond to inquiries</li>
                        <li>To prevent fraud and ensure platform security</li>
                        <li>To comply with legal obligations and regulatory requirements</li>
                    </ul>
                </section>

                {{-- Data Protection --}}
                <section id="protection" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-lock-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Data Protection & Security</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        We implement appropriate technical and organizational measures to protect your personal
                        information:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>SSL encryption for data transmission</li>
                        <li>Secure password hashing and storage</li>
                        <li>Regular security audits and updates</li>
                        <li>Restricted access to personal data by authorized personnel only</li>
                        <li>Secure payment processing through trusted payment gateways</li>
                        <li>Regular backups to prevent data loss</li>
                    </ul>
                    <div class="mt-4 flex gap-3 rounded-lg bg-warning p-4">
                        @svg('ri-alert-line', 'mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600')
                        <p class="text-sm text-warning-foreground">
                            While we strive to protect your information, no method of transmission over the internet is
                            100%
                            secure. We cannot guarantee absolute security of your data.
                        </p>
                    </div>
                </section>

                {{-- Cookies & Tracking --}}
                <section id="cookies" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-file-text-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Cookies & Tracking Technologies</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        We use cookies and similar tracking technologies to enhance your experience:
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Essential Cookies</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        Required for basic platform functionality, including authentication and session management.
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Analytics Cookies</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        Help us understand how users interact with our platform to improve services.
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Preference Cookies</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        Remember your settings and preferences for a personalized experience.
                    </p>

                    <p class="mt-4 leading-relaxed text-gray-700">
                        You can control cookie preferences through your browser settings. Note that disabling certain
                        cookies may affect platform functionality.
                    </p>
                </section>

                {{-- Your Rights --}}
                <section id="rights" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-user-follow-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Your Rights</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        You have the following rights regarding your personal information:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li><strong>Access:</strong> Request a copy of your personal data we hold</li>
                        <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                        <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                        <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                        <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                        <li><strong>Restriction:</strong> Request limitation on processing of your data</li>
                    </ul>
                    <p class="mt-4 leading-relaxed text-gray-700">
                        To exercise these rights, please contact us using the information provided below.
                    </p>
                </section>

                {{-- Third-Party Services --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-share-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Third-Party Services</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">We may use third-party services for:</p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Payment processing (payment gateways)</li>
                        <li>Analytics and performance monitoring</li>
                        <li>AI-powered MCQ generation</li>
                        <li>Email delivery and notifications</li>
                    </ul>
                    <p class="mt-4 leading-relaxed text-gray-700">
                        These third parties have their own privacy policies and we encourage you to review them.
                        We are not responsible for their practices.
                    </p>
                </section>

                {{-- Data Retention --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-time-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Data Retention</h2>
                    </div>
                    <p class="leading-relaxed text-gray-700">
                        We retain your personal information for as long as necessary to provide our services and comply
                        with legal obligations. When you delete your account, we will remove your personal data within
                        30 days, except where retention is required by law. Practice history and performance data may be
                        anonymized and retained for analytical purposes.
                    </p>
                </section>

                {{-- Children's Privacy --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-parent-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Children's Privacy</h2>
                    </div>
                    <p class="leading-relaxed text-gray-700">
                        Our services are intended for individuals aged 16 and above. We do not knowingly collect
                        personal information from children under 16. If you believe we have collected information
                        from a child, please contact us immediately.
                    </p>
                </section>

                {{-- Changes to Privacy Policy --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-refresh-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Changes to This Privacy Policy</h2>
                    </div>
                    <p class="leading-relaxed text-gray-700">
                        We may update this Privacy Policy periodically to reflect changes in our practices or legal
                        requirements. We will notify you of significant changes via email or through a prominent notice
                        on our platform. Your continued use of our services after such modifications constitutes
                        acceptance of the updated policy.
                    </p>
                </section>

                {{-- Contact Us --}}
                <section id="contact" class="mb-8">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-mail-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Contact Us</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        If you have questions or concerns about this Privacy Policy or our data practices, please
                        contact us:
                    </p>
                    <div class="rounded-lg bg-info p-6">
                        <div class="space-y-3">
                            <div class="flex items-start gap-3">
                                @svg('ri-mail-line', 'mt-0.5 h-5 w-5 flex-shrink-0 text-primary')
                                <div class="text-info-foreground">
                                    <span class="font-semibold">Email:</span>
                                    <a href="mailto:{{ $contactEmail }}" class="ml-1 hover:underline">
                                        {{ $contactEmail }}
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                @svg('ri-whatsapp-line', 'mt-0.5 h-5 w-5 flex-shrink-0 text-primary')
                                <div class="text-info-foreground">
                                    <span class="font-semibold">WhatsApp:</span>
                                    <a href="tel:{{ $contactPhone }}" class="ml-1 hover:underline">
                                        {{ $contactPhone }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {{-- Footer Note --}}
                <div class="border-t border-gray-200 pt-8">
                    <p class="text-center text-sm text-muted-foreground">
                        This Privacy Policy is governed by the laws of Pakistan. By using our platform, you consent
                        to the collection and use of information as described in this policy.
                    </p>
                    <p class="mt-2 text-center text-xs text-gray-400">
                        Last updated: {{ $lastUpdated }}
                    </p>
                </div>

            </div>
        </div>

    </div>
</div>
