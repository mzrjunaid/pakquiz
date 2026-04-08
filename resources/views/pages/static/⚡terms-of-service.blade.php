<?php

use App\Support\SchemaGenerator;
use Livewire\Attributes\Computed;
use Livewire\Component;

new class extends Component {
    public string $activeSection = 'acceptance';

    public string $contactEmail = 'legal@pakquiz.com';
    public string $contactPhone = '+92 300 123 4567';
    public string $lastUpdated = 'October 2, 2025';

    public function setActive(string $section): void
    {
        $this->activeSection = $section;
    }

    #[Computed]
    public function sections(): array
    {
        return [['id' => 'acceptance', 'title' => 'Acceptance of Terms', 'icon' => 'ri-file-text-line'], ['id' => 'services', 'title' => 'Our Services', 'icon' => 'ri-user-follow-line'], ['id' => 'accounts', 'title' => 'User Accounts', 'icon' => 'ri-shield-check-line'], ['id' => 'subscription', 'title' => 'Subscription & Payment', 'icon' => 'ri-bank-card-line'], ['id' => 'conduct', 'title' => 'User Conduct', 'icon' => 'ri-forbid-line'], ['id' => 'intellectual', 'title' => 'Intellectual Property', 'icon' => 'ri-scales-line'], ['id' => 'liability', 'title' => 'Limitation of Liability', 'icon' => 'ri-error-warning-line'], ['id' => 'termination', 'title' => 'Termination', 'icon' => 'ri-refresh-line']];
    }

    #[Computed]
    public function schema(): array
    {
        return array_merge(SchemaGenerator::website(), SchemaGenerator::termsOfServicePage());
    }
};
?>

@slot('image')
{{ asset('images/og-image.png') }}
@endslot

@slot('title')
Terms of Service – PakQuiz
@endslot

@slot('description')
Read PakQuiz's Terms of Service. Understand the rules, subscription terms, user conduct, and legal agreements governing your use of our MCQs preparation platform.
@endslot

@slot('canonical')
{{ url('/terms-of-service') }}
@endslot


<div class="max-w-7xl mx-auto">
    @teleport('head')
    <script type="application/ld+json">
        {!!json_encode($this->schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport
    <div class="space-y-2 py-8">
        <nav class="flex mb-2 text-sm" aria-label="{{ __('Breadcrumb') }}">
            <ol class="inline-flex items-center md:space-x-1">
                <li class="inline-flex gap-1 items-center">
                    <x-heroicon-o-home class="w-4 h-4" />
                    <a href="/" class="hover:text-primary" title="{{ __('Home') }}" aria-label="{{ __('Home') }}">{{ __('Home') }}</a>
                </li>
                <li class="inline-flex gap-1 items-center">
                    <x-heroicon-o-chevron-right class="w-4 h-4" />
                    <span class="font-medium text-primary" title="{{ __('Terms of Service') }}" aria-label="{{ __('Terms of Service') }}">{{ __('Terms of Service') }}</span>
                </li>
            </ol>
        </nav>
        <x-page-header title="Terms of Service"
            description="Read PakQuiz's Terms of Service. Understand the rules, subscription terms, user conduct, and legal agreements governing your use of our MCQs preparation platform." />
    </div>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {{-- ── Sticky Sidebar ── --}}
        <nav class="lg:col-span-1">
            <div class="sticky top-22 z-50 rounded-lg bg-card p-4 shadow-sm">
                <h2 class="mb-4 font-semibold">Quick Navigation</h2>
                <ul class="space-y-1">
                    @foreach ($this->sections as $section)
                    <li>
                        <a href="#{{ $section['id'] }}" wire:click.prevent="setActive('{{ $section['id'] }}')"
                            x-on:click="document.getElementById('{{ $section['id'] }}')?.scrollIntoView({ behavior: 'smooth' })"
                            class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors
                                   {{ $activeSection === $section['id']
                                       ? 'bg-accent font-semibold text-accent-foreground'
                                       : 'text-muted-foreground hover:bg-accent' }}">
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
            <div class="rounded-lg bg-card p-6 shadow-sm md:p-8">

                {{-- Acceptance of Terms --}}
                <section id="acceptance" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-file-text-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Acceptance of Terms</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        Welcome to our MCQs Preparation Platform. By accessing or using our website and services, you
                        agree
                        to be bound by these Terms of Service and all applicable laws and regulations. If you do not
                        agree
                        with any part of these terms, you may not use our services.
                    </p>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        These Terms constitute a legally binding agreement between you and our platform. We reserve the
                        right to modify these Terms at any time. Your continued use of the platform after changes are
                        posted constitutes acceptance of the modified Terms.
                    </p>
                    <div class="mt-4 rounded-lg border border-blue-200 bg-info p-4">
                        <p class="text-sm text-info-foreground">
                            <strong>Important:</strong> Please read these Terms carefully before using our platform.
                            By creating an account or using our services, you acknowledge that you have read,
                            understood,
                            and agree to be bound by these Terms.
                        </p>
                    </div>
                </section>

                {{-- Our Services --}}
                <section id="services" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-user-follow-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Our Services</h2>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Free Services</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">We provide free access to:</p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Categorized MCQs bank covering various subjects</li>
                        <li>Demo practice papers with sample questions</li>
                        <li>Latest government and private sector job listings</li>
                        <li>Basic practice features</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Premium Services</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">Premium subscription includes:</p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Custom paper creation with category and question selection</li>
                        <li>Progress tracking and performance history</li>
                        <li>Detailed explanations for answers</li>
                        <li>AI-generated MCQs based on keywords</li>
                        <li>Random AI-generated practice papers</li>
                        <li>Save and review attempted papers</li>
                        <li>Advanced analytics and insights</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Service Availability</h3>
                    <p class="leading-relaxed text-gray-700">
                        We strive to maintain continuous service availability but do not guarantee uninterrupted access.
                        We reserve the right to modify, suspend, or discontinue any aspect of our services at any time
                        without prior notice.
                    </p>
                </section>

                {{-- User Accounts --}}
                <section id="accounts" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-shield-check-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">User Accounts & Registration</h2>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Account Creation</h3>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>You must be at least 16 years old to create an account</li>
                        <li>You must provide accurate, current, and complete information</li>
                        <li>You are responsible for maintaining account confidentiality</li>
                        <li>You may not share your account credentials with others</li>
                        <li>One person may not maintain multiple accounts</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Account Security</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        You are responsible for all activities that occur under your account. You must:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Choose a strong, unique password</li>
                        <li>Notify us immediately of any unauthorized access</li>
                        <li>Keep your contact information up to date</li>
                        <li>Log out after each session on shared devices</li>
                    </ul>
                    <p class="mt-3 leading-relaxed text-gray-700">
                        We are not liable for any loss or damage arising from your failure to protect your account
                        credentials.
                    </p>
                </section>

                {{-- Subscription & Payment --}}
                <section id="subscription" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-bank-card-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Subscription & Payment Terms</h2>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Premium Subscription</h3>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Premium subscriptions are available on monthly or annual basis</li>
                        <li>Prices are displayed in Pakistani Rupees (PKR)</li>
                        <li>Payment must be made through our authorized payment methods</li>
                        <li>Subscriptions auto-renew unless cancelled before renewal date</li>
                        <li>You will receive notification before each renewal</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Billing & Charges</h3>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>All fees are non-refundable except as required by law</li>
                        <li>We reserve the right to change subscription prices with notice</li>
                        <li>Price changes do not affect current subscription period</li>
                        <li>Failed payments may result in service suspension</li>
                        <li>All applicable taxes will be added to subscription fees</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Cancellation & Refunds</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        You may cancel your premium subscription at any time through your account settings. Upon
                        cancellation:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>You will retain access until the end of current billing period</li>
                        <li>No refunds will be provided for partial periods</li>
                        <li>Auto-renewal will be disabled</li>
                        <li>Your account will revert to free tier after expiration</li>
                    </ul>
                    <div class="mt-4 flex gap-3 rounded-lg border border-amber-200 bg-warning p-4">
                        @svg('ri-alert-line', 'mt-0.5 h-5 w-5 flex-shrink-0 text-warning-foreground')
                        <p class="text-sm text-warning-foreground">
                            <strong>No Refund Policy:</strong> All subscription fees are non-refundable. We do not
                            provide refunds or credits for partial subscription periods, unused services, or if you
                            decide to cancel your subscription.
                        </p>
                    </div>
                </section>

                {{-- User Conduct --}}
                <section id="conduct" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-forbid-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">User Conduct & Prohibited Activities</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        You agree not to engage in any of the following prohibited activities:
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Content-Related Violations</h3>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Copying, reproducing, or distributing our MCQs or content</li>
                        <li>Creating derivative works from our materials</li>
                        <li>Sharing premium content with non-subscribers</li>
                        <li>Scraping or data mining our platform</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Technical Violations</h3>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Attempting to gain unauthorized access to our systems</li>
                        <li>Using bots, scripts, or automation tools</li>
                        <li>Reverse engineering or decompiling our platform</li>
                        <li>Bypassing security measures or access controls</li>
                        <li>Interfering with platform operation or other users' access</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Account-Related Violations</h3>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Creating multiple accounts for the same person</li>
                        <li>Sharing account credentials with others</li>
                        <li>Impersonating others or providing false information</li>
                        <li>Using the platform for commercial purposes without authorization</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Content Submission</h3>
                    <p class="leading-relaxed text-gray-700">
                        If you submit any content, feedback, or suggestions to us, you grant us a perpetual,
                        irrevocable,
                        worldwide, royalty-free license to use, modify, and incorporate such content into our services
                        without compensation to you.
                    </p>
                </section>

                {{-- Intellectual Property --}}
                <section id="intellectual" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-scales-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Intellectual Property Rights</h2>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Our Content</h3>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        All content on our platform, including but not limited to MCQs, questions, answers,
                        explanations,
                        practice papers, job listings, text, graphics, logos, and software, is the property of our
                        platform
                        or our content suppliers and is protected by Pakistani and international copyright laws.
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Limited License</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        We grant you a limited, non-exclusive, non-transferable license to:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Access and use our platform for personal, non-commercial purposes</li>
                        <li>View and practice with MCQs and materials provided</li>
                        <li>Download content for offline personal study (premium users only)</li>
                    </ul>
                    <p class="mt-3 leading-relaxed text-gray-700">
                        This license does not include the right to reproduce, distribute, modify, or create derivative
                        works from our content.
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Trademarks</h3>
                    <p class="leading-relaxed text-gray-700">
                        Our platform name, logo, and related marks are trademarks. You may not use these marks without
                        our prior written permission. All other trademarks appearing on our platform are the property
                        of their respective owners.
                    </p>
                </section>

                {{-- Limitation of Liability --}}
                <section id="liability" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-error-warning-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Disclaimer & Limitation of Liability</h2>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Service Disclaimer</h3>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        Our platform and services are provided on an "as is" and "as available" basis without warranties
                        of any kind. We do not warrant that:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>The service will be uninterrupted, timely, secure, or error-free</li>
                        <li>The results from using our service will be accurate or reliable</li>
                        <li>The quality of products, services, or information will meet expectations</li>
                        <li>Any errors in the software or content will be corrected</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Educational Content Disclaimer</h3>
                    <div class="mb-4 rounded-lg border border-red-200 bg-destructive/20 p-4">
                        <p class="leading-relaxed text-destructive-foreground">
                            <strong>Important:</strong> While we strive to provide accurate MCQs and practice materials,
                            we do not guarantee accuracy, completeness, or reliability. Our platform is for practice and
                            preparation purposes only. We are not responsible for:
                        </p>
                        <ul class="mt-2 ml-4 list-inside list-disc space-y-1 text-destructive-foreground">
                            <li>Exam results or outcomes</li>
                            <li>Job application success</li>
                            <li>Accuracy of AI-generated content</li>
                            <li>Errors or omissions in MCQs or explanations</li>
                            <li>Changes in exam patterns or syllabi</li>
                        </ul>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Limitation of Liability</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        To the maximum extent permitted by law, we shall not be liable for:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                        <li>Loss of profits, revenue, data, or use</li>
                        <li>Business interruption or loss of opportunity</li>
                        <li>Any damages arising from your use or inability to use our services</li>
                    </ul>
                    <p class="mt-3 leading-relaxed text-gray-700">
                        Our total liability shall not exceed the amount you paid for premium services in the 12 months
                        preceding the claim.
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Third-Party Content</h3>
                    <p class="leading-relaxed text-gray-700">
                        Job listings and information about government exams are provided for informational purposes
                        only.
                        We do not verify the accuracy of job postings and are not responsible for third-party content,
                        websites, or services linked from our platform.
                    </p>
                </section>

                {{-- Termination --}}
                <section id="termination" class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-refresh-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Account Termination & Suspension</h2>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Termination by You</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">You may terminate your account at any time by:</p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Accessing account settings and selecting account deletion</li>
                        <li>Contacting our support team</li>
                    </ul>
                    <p class="mt-3 leading-relaxed text-gray-700">
                        Upon termination, you will lose access to all services, including saved progress and premium
                        features. No refunds will be provided for any remaining subscription period.
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Termination by Us</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        We reserve the right to suspend or terminate your account immediately, without prior notice, if:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>You violate these Terms of Service</li>
                        <li>You engage in fraudulent or illegal activities</li>
                        <li>Your payment method fails or is disputed</li>
                        <li>We suspect unauthorized access or security breaches</li>
                        <li>We are required to do so by law</li>
                    </ul>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Effects of Termination</h3>
                    <p class="leading-relaxed text-gray-700">
                        Upon termination, all licenses granted to you will immediately cease. We may retain your
                        information as required by law or for legitimate business purposes. Sections of these Terms
                        that by their nature should survive termination shall survive, including intellectual property
                        provisions, disclaimers, and limitations of liability.
                    </p>
                </section>

                {{-- Dispute Resolution --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-government-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Dispute Resolution & Governing Law</h2>
                    </div>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Governing Law</h3>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        These Terms shall be governed by and construed in accordance with the laws of Pakistan, without
                        regard to its conflict of law provisions.
                    </p>

                    <h3 class="mt-6 mb-3 text-lg font-semibold">Dispute Resolution</h3>
                    <p class="mb-3 leading-relaxed text-gray-700">
                        In the event of any dispute arising from these Terms or your use of our services:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>You agree to first attempt to resolve the dispute informally by contacting us</li>
                        <li>If informal resolution fails, disputes shall be subject to the exclusive jurisdiction of
                            courts in Lahore, Pakistan</li>
                        <li>Both parties agree to waive any right to a jury trial</li>
                    </ul>
                </section>

                {{-- Indemnification --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-hand-coin-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Indemnification</h2>
                    </div>
                    <p class="leading-relaxed text-gray-700">
                        You agree to indemnify, defend, and hold harmless our platform, its officers, directors,
                        employees, and agents from and against any claims, liabilities, damages, losses, and expenses
                        arising out of or in any way connected with your access to or use of our services, your
                        violation
                        of these Terms, or your violation of any rights of another party.
                    </p>
                </section>

                {{-- Changes to Terms --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-edit-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Changes to Terms</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        We reserve the right to modify these Terms at any time. We will notify users of material changes
                        by:
                    </p>
                    <ul class="ml-4 list-inside list-disc space-y-2 text-gray-700">
                        <li>Posting the updated Terms on our platform</li>
                        <li>Sending email notification to registered users</li>
                        <li>Displaying a prominent notice on our website</li>
                    </ul>
                    <p class="mt-4 leading-relaxed text-gray-700">
                        Your continued use of our services after such modifications constitutes acceptance of the
                        updated
                        Terms. If you do not agree to the modified Terms, you must stop using our services.
                    </p>
                </section>

                {{-- Severability --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-split-cells-horizontal', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Severability</h2>
                    </div>
                    <p class="leading-relaxed text-gray-700">
                        If any provision of these Terms is found to be unenforceable or invalid, that provision will be
                        limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain
                        in full force and effect.
                    </p>
                </section>

                {{-- Entire Agreement --}}
                <section class="mb-12">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-file-list-3-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Entire Agreement</h2>
                    </div>
                    <p class="leading-relaxed text-gray-700">
                        These Terms, together with our Privacy Policy and any other legal notices published by us on our
                        platform, constitute the entire agreement between you and us concerning your use of our services
                        and supersede all prior agreements and understandings.
                    </p>
                </section>

                {{-- Contact Information --}}
                <section class="mb-8">
                    <div class="mb-4 flex items-center gap-2">
                        @svg('ri-mail-line', 'h-6 w-6 text-primary')
                        <h2 class="text-2xl font-bold">Contact Information</h2>
                    </div>
                    <p class="mb-4 leading-relaxed text-gray-700">
                        If you have any questions about these Terms, please contact us:
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

                {{-- Acknowledgment --}}
                <div class="border-t border-muted/65 pt-8">
                    <div class="rounded-lg bg-gray-50 p-6">
                        <p class="mb-2 text-sm font-semibold text-foreground">
                            By using our platform, you acknowledge that you have read, understood, and agree to be
                            bound by these Terms of Service.
                        </p>
                        <p class="text-sm text-muted-foreground">
                            Last updated: {{ $lastUpdated }}
                        </p>
                    </div>
                </div>

            </div>
        </div>

    </div>