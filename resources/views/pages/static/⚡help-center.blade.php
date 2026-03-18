<?php

use App\Support\SchemaGenerator;
use Livewire\Attributes\Computed;
use Livewire\Component;

new class extends Component
{
    public string $activeCategory = 'faqs';
    public string $searchQuery    = '';

    public function setCategory(string $category): void
    {
        $this->activeCategory = $category;
        $this->searchQuery    = '';
    }

    #[Computed]
    public function categories(): array
    {
        return [
            ['id' => 'faqs',            'label' => 'FAQs',               'icon' => 'hand-heart-fill'],
            ['id' => 'getting-started', 'label' => 'Getting Started',    'icon' => 'book-open-fill'],
            ['id' => 'premium',         'label' => 'Premium Features',   'icon' => 'star-fill'],
            ['id' => 'jobs',            'label' => 'Jobs & Updates',     'icon' => 'briefcase-fill'],
            ['id' => 'billing',         'label' => 'Account & Billing',  'icon' => 'bank-card-fill'],
            ['id' => 'support',         'label' => 'Contact & Support',  'icon' => 'mail-fill'],
        ];
    }

    #[Computed]
    public function faqs(): array
    {
        return [
            [
                'question' => 'What is PAK QUIZ and how does it work?',
                'answer'   => 'PAK QUIZ is an online platform that helps job seekers in Pakistan prepare for competitive exams such as PPSC, FPSC, NTS, PTS, and others. It offers a large collection of MCQs across multiple categories, demo practice papers, and premium features like custom quizzes and progress tracking.',
            ],
            [
                'question' => 'How can I practice MCQs for PPSC, FPSC, and other tests?',
                'answer'   => 'Simply go to the MCQs section on PAK QUIZ, choose a category (such as General Knowledge, English, Mathematics, Islamiat, or Current Affairs), and start practicing. Each question comes with multiple options, and some include detailed explanations.',
            ],
            [
                'question' => 'Is PAK QUIZ free to use?',
                'answer'   => 'Yes ✅ PAK QUIZ is free to use for basic features. All users can access the MCQs bank, demo practice papers, and job ads without cost. We also offer a premium membership that unlocks advanced features.',
            ],
            [
                'question' => 'What is included in the premium membership?',
                'answer'   => 'Premium members get full access to: Custom practice papers, Progress tracking (monitor correct/incorrect answers, history, and improvement), Detailed explanations for selected questions, AI-generated MCQs based on keywords, and Priority updates with additional learning resources.',
            ],
            [
                'question' => 'How do I create a custom practice paper?',
                'answer'   => 'Custom papers are available for premium users. After logging in, go to Create Paper, select your desired categories, choose the number of questions, and start the test.',
            ],
            [
                'question' => 'Can I track my progress on PAK QUIZ?',
                'answer'   => "Yes. If you're a premium member, every paper you attempt is saved in your account. You can see your score, review mistakes, and check your improvement over time.",
            ],
            [
                'question' => 'Do you provide explanations for answers?',
                'answer'   => 'Yes. Many MCQs in PAK QUIZ include detailed explanations so that learners can understand the correct reasoning. Explanations are fully available to premium users.',
            ],
            [
                'question' => 'How often are job ads updated?',
                'answer'   => 'We update job ads daily. PAK QUIZ covers the latest job openings from PPSC, FPSC, NTS, PTS, NJP, and also private sector jobs. You can filter jobs by province, district, and city.',
            ],
            [
                'question' => 'Do I need to create an account to practice MCQs?',
                'answer'   => "No, you can start practicing MCQs and demo papers without creating an account. However, if you want to save progress or access premium features, you'll need to register.",
            ],
            [
                'question' => 'Which payment methods are supported for premium plans?',
                'answer'   => 'We support Easypaisa, JazzCash, bank transfer, and debit/credit cards. Payments are processed safely, and premium features are unlocked immediately after confirmation.',
            ],
        ];
    }

    #[Computed]
    public function filteredFaqs(): array
    {
        if (empty($this->searchQuery)) {
            return $this->faqs;
        }

        $query = strtolower($this->searchQuery);

        return array_values(array_filter(
            $this->faqs,
            fn($faq) =>
            str_contains(strtolower($faq['question']), $query) ||
                str_contains(strtolower($faq['answer']), $query)
        ));
    }

    #[Computed]
    public function gettingStartedGuides(): array
    {
        return [
            [
                'title' => 'How to create a free account on PAK QUIZ',
                'steps' => [
                    'Click on the "Sign Up" button in the top right corner',
                    'Enter your name, email address, and create a password',
                    'Verify your email address by clicking the link sent to your inbox',
                    'Complete your profile with optional information',
                    'Start practicing MCQs immediately!',
                ],
            ],
            [
                'title' => 'How to attempt MCQs online',
                'steps' => [
                    'Navigate to the "MCQs Bank" section from the main menu',
                    'Select a category (General Knowledge, English, Math, etc.)',
                    'Click on any question to view it',
                    'Select your answer from the multiple choices provided',
                    'Click "Submit" to see if your answer is correct',
                    'Review the explanation (if available) to understand the concept',
                ],
            ],
            [
                'title' => 'How to use demo practice papers',
                'steps' => [
                    'Go to the "Practice Papers" section',
                    'Browse available demo papers for different exams',
                    'Click "Start Test" on any demo paper',
                    'Answer all questions within the time limit',
                    'Submit your paper to see your score and correct answers',
                    'No account needed for demo papers!',
                ],
            ],
            [
                'title' => 'How to upgrade to premium membership',
                'steps' => [
                    'Log in to your account',
                    'Click on "Upgrade to Premium" in your dashboard',
                    'Choose your subscription plan (monthly or annual)',
                    'Select your preferred payment method',
                    'Complete the payment process',
                    'Your premium features will be activated immediately',
                ],
            ],
            [
                'title' => 'How to reset your password',
                'steps' => [
                    'Click on "Forgot Password?" on the login page',
                    'Enter your registered email address',
                    'Check your email for a password reset link',
                    'Click the link and enter your new password',
                    'Confirm your new password',
                    'Log in with your new credentials',
                ],
            ],
        ];
    }

    #[Computed]
    public function premiumGuides(): array
    {
        return [
            [
                'title'   => 'How to create a custom practice paper',
                'content' => 'Log in to your premium account and navigate to "Create Custom Paper". Select the categories you want to practice (you can choose multiple). Set the number of questions for your paper. Choose difficulty level if available. Click "Generate Paper" and start your custom test. Your performance will be automatically saved.',
            ],
            [
                'title'   => 'How to select categories for your test',
                'content' => "When creating a custom paper, you'll see a list of available categories including General Knowledge, English, Mathematics, Islamiat, Pakistan Studies, Current Affairs, and more. Simply check the boxes next to the categories you want to include.",
            ],
            [
                'title'   => 'How to review your answers and explanations',
                'content' => "After completing a test, click \"Review Answers\" on the results page. You'll see each question with your selected answer and the correct answer. Questions you got wrong are highlighted in red, correct ones in green. Click on any question to view the detailed explanation.",
            ],
            [
                'title'   => 'How to track your performance history',
                'content' => "Go to \"My Dashboard\" and click on \"Performance History\". You'll see a complete record of all papers you've attempted, including scores, time taken, and accuracy percentage. Track your improvement over time with visual graphs and charts.",
            ],
        ];
    }

    #[Computed]
    public function jobsInfo(): array
    {
        return [
            [
                'title'     => 'How to find the latest government and private job ads',
                'content'   => 'Visit the "Jobs" section from the main menu. Browse the latest job postings updated daily. Each listing includes job title, organization, eligibility criteria, application deadline, and how to apply.',
                'isWarning' => false,
            ],
            [
                'title'     => 'How to filter jobs by province, district, and city',
                'content'   => 'On the Jobs page, use the filter panel on the left side. Select your preferred province from the dropdown menu. Choose specific districts or cities within that province. Apply additional filters like job type, department, or deadline.',
                'isWarning' => false,
            ],
            [
                'title'     => 'Important Disclaimer',
                'content'   => "PAK QUIZ is an independent platform and is NOT affiliated with PPSC, FPSC, NTS, PTS, NJP, or any government organization. We only share job updates and information available publicly. For official information, please visit the respective organization's official website.",
                'isWarning' => true,
            ],
        ];
    }

    #[Computed]
    public function billingInfo(): array
    {
        return [
            [
                'title'     => 'How to change your account details',
                'content'   => 'Log in to your account and go to "Profile Settings". Click "Edit Profile" to update your name, email, phone number, or other information. Change your password from the "Security" tab. Click "Save Changes" to update your profile.',
                'isWarning' => false,
            ],
            [
                'title'     => 'How to cancel your premium subscription',
                'content'   => "Log in to your account and go to \"Subscription Settings\". Click on \"Manage Subscription\". Select \"Cancel Subscription\" and follow the prompts. You will retain premium access until the end of your current billing period.",
                'isWarning' => false,
            ],
            [
                'title'     => 'Refund policy for premium users',
                'content'   => 'All premium subscription fees are non-refundable. We do not provide refunds or credits for partial subscription periods, unused services, or if you decide to cancel your subscription. Please review the features carefully before purchasing.',
                'isWarning' => true,
            ],
        ];
    }

    #[Computed]
    public function supportCards(): array
    {
        return [
            [
                'title'       => 'Email Support',
                'description' => "Send us an email and we'll respond within 24 hours.",
                'email'       => 'support@pakquiz.com',
                'icon'        => 'mail-fill',
                'iconClass'   => 'text-blue-600 bg-blue-100',
            ],
            [
                'title'       => 'Report an Error in MCQs',
                'description' => 'Found a mistake? Help us improve by reporting it.',
                'email'       => 'feedback@pakquiz.com',
                'icon'        => 'alert-fill',
                'iconClass'   => 'text-orange-600 bg-orange-100',
            ],
            [
                'title'       => 'Technical Issues',
                'description' => 'Experiencing technical problems? Let us know.',
                'email'       => 'tech@pakquiz.com',
                'icon'        => 'hand-heart-fill',
                'iconClass'   => 'text-purple-600 bg-purple-100',
            ],
            [
                'title'       => 'Business Inquiries',
                'description' => 'Partnerships, advertising, and business opportunities.',
                'email'       => 'business@pakquiz.com',
                'icon'        => 'briefcase-fill',
                'iconClass'   => 'text-green-600 bg-green-100',
            ],
        ];
    }

    #[Computed]
    public function schema(): array
    {
        return array_merge(
            SchemaGenerator::website(),
            SchemaGenerator::helpCenterPage()
        );
    }
};
?>

@slot('title')
Help Center – PakQuiz | FAQs & Support
@endslot

@push('meta')
<meta name="title" content="Help Center – PakQuiz | FAQs & Support">
<meta name="description" content="Find answers to common questions about PakQuiz. Learn how to practice MCQs, use premium features, manage your account, and contact support for FPSC, PPSC, NTS exam prep.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{{ url('/help') }}">

<meta property="og:type" content="website">
<meta property="og:url" content="{{ url('/help') }}">
<meta property="og:title" content="Help Center – PakQuiz | FAQs & Support">
<meta property="og:description" content="Find answers to common questions about PakQuiz MCQs preparation platform.">
<meta property="og:image" content="{{ asset('images/og-image.png') }}">
<meta property="og:site_name" content="PakQuiz">
<meta property="og:locale" content="en_PK">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Help Center – PakQuiz | FAQs & Support">
<meta name="twitter:description" content="Find answers to common questions about PakQuiz MCQs preparation platform.">
<meta name="twitter:image" content="{{ asset('images/og-image.png') }}">
@endpush

<div class="max-w-7xl mx-auto">
    @teleport('head')
    <script type="application/ld+json">
        {
            !!json_encode($this - > schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!
        }
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
                        <span class="font-medium text-primary">{{ __('Help Center') }}</span>
                    </div>
                </li>
            </ol>
        </nav>
        <x-page-header title="Help Center" description="Find answers to common questions about PakQuiz MCQs preparation platform." />
    </div>

    {{-- Category Pills --}}
    <div class="my-6 flex flex-wrap justify-center gap-3 md:mb-8">
        @foreach ($this->categories as $category)
        <button
            wire:click="setCategory('{{ $category['id'] }}')"
            class="flex items-center gap-2 rounded-full px-5 py-2.5 font-medium transition-all max-md:text-xs
                       {{ $activeCategory === $category['id']
                           ? 'bg-primary text-primary-foreground shadow-lg'
                           : 'bg-secondary text-secondary-foreground hover:bg-primary/35' }}">
            <x-dynamic-component :component="'ri-' . $category['icon']" class="h-4 w-4" />
            {{ $category['label'] }}
        </button>
        @endforeach
    </div>

    {{-- Content Panel --}}
    <div class="relative">
        <x-loading target="setCategory" />
        <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300" class="rounded-lg border border-gray-200 bg-white shadow-sm relative">
            {{-- ── FAQs ── --}}
            @if ($activeCategory === 'faqs')
            <div class="px-3 py-6 md:p-8">
                <div class="mb-6">
                    <div class="mb-6">
                        <h2 class="mb-2 text-lg font-bold md:text-2xl">Frequently Asked Questions</h2>
                        <p class="text-muted-foreground max-sm:text-sm">Quick answers to common questions about PAK QUIZ</p>
                    </div>
                    <div class="relative mx-auto mt-4 max-w-xl">
                        <x-ri-search-line class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            wire:model.live.debounce.300ms="searchQuery"
                            placeholder="Search for help articles..."
                            class="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-12 text-sm focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none" />
                    </div>
                </div>

                @if (count($this->filteredFaqs) === 0)
                <div class="py-12 text-center text-gray-500">
                    <x-ri-search-line class="mx-auto mb-3 h-10 w-10 text-gray-300" />
                    <p class="font-medium">No results found for "{{ $searchQuery }}"</p>
                    <p class="mt-1 text-sm">Try different keywords or browse the categories above.</p>
                </div>
                @else
                <div class="w-full space-y-3" x-data="{ open: null }">
                    @foreach ($this->filteredFaqs as $index => $faq)
                    <div class="overflow-hidden rounded-lg">
                        <button
                            @click="open === {{ $index }} ? open = null : open = {{ $index }}"
                            class="flex w-full items-center justify-between rounded-lg bg-secondary px-3 py-4 text-left font-semibold max-md:text-sm md:px-6 hover:bg-secondary/80 transition-colors">
                            <span>{{ $faq['question'] }}</span>
                            <x-ri-arrow-down-s-line
                                class="h-4 w-4 flex-shrink-0 ml-3 transition-transform duration-200"
                                ::class="open === {{ $index }} ? 'rotate-180' : ''" />
                        </button>
                        <div
                            x-show="open === {{ $index }}"
                            x-transition:enter="transition ease-out duration-200"
                            x-transition:enter-start="opacity-0 -translate-y-1"
                            x-transition:enter-end="opacity-100 translate-y-0"
                            x-cloak>
                            <p class="p-3 leading-relaxed text-gray-700 md:p-6 max-md:text-sm">
                                {{ $faq['answer'] }}
                            </p>
                        </div>
                    </div>
                    @endforeach
                </div>
                @endif
            </div>
            @endif

            {{-- ── Getting Started ── --}}
            @if ($activeCategory === 'getting-started')
            <div class="px-3 py-6 md:p-8">
                <div class="mb-6">
                    <h2 class="mb-2 text-lg font-bold md:text-2xl">Getting Started</h2>
                    <p class="text-muted-foreground max-sm:text-sm">Step-by-step guides to help you begin your journey</p>
                </div>

                <div class="space-y-6">
                    @foreach ($this->gettingStartedGuides as $guide)
                    <div class="rounded-lg border border-gray-200 p-6">
                        <h3 class="mb-4 font-semibold lg:text-xl">{{ $guide['title'] }}</h3>
                        <ol class="space-y-3">
                            @foreach ($guide['steps'] as $stepIndex => $step)
                            <li class="flex items-start gap-3">
                                <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                                    {{ $stepIndex + 1 }}
                                </span>
                                <span class="pt-0.5 max-md:text-sm">{{ $step }}</span>
                            </li>
                            @endforeach
                        </ol>
                    </div>
                    @endforeach
                </div>
            </div>
            @endif

            {{-- ── Premium Features ── --}}
            @if ($activeCategory === 'premium')
            <div class="px-3 py-6 md:p-8">
                <div class="mb-6">
                    <h2 class="mb-2 text-lg font-bold md:text-2xl">Using Premium Features</h2>
                    <p class="text-muted-foreground max-sm:text-sm">Get the most out of your premium membership</p>
                </div>

                <div class="space-y-6">
                    @foreach ($this->premiumGuides as $guide)
                    <div class="rounded-lg border border-gray-200 p-3 transition-colors hover:border-blue-300 md:p-6">
                        <h3 class="mb-3 font-semibold lg:text-xl">{{ $guide['title'] }}</h3>
                        <p class="leading-relaxed max-md:text-sm">{{ $guide['content'] }}</p>
                    </div>
                    @endforeach
                </div>

                <div class="mt-6 rounded-lg bg-info p-4">
                    <p class="text-info-foreground text-sm">
                        <strong>💡 Pro Tip:</strong> Use custom papers to focus on weak areas and track your progress regularly to see improvement over time.
                    </p>
                </div>
            </div>
            @endif

            {{-- ── Jobs & Updates ── --}}
            @if ($activeCategory === 'jobs')
            <div class="px-3 py-6 md:p-8">
                <div class="mb-6">
                    <h2 class="mb-2 text-lg font-bold md:text-2xl">Jobs & Updates</h2>
                    <p class="text-muted-foreground max-sm:text-sm">Stay informed about the latest job opportunities</p>
                </div>

                <div class="space-y-6">
                    @foreach ($this->jobsInfo as $info)
                    <div class="rounded-lg border p-6 {{ $info['isWarning'] ? 'border-warning bg-warning' : 'border-gray-200' }}">
                        <div class="flex items-start gap-3">
                            @if ($info['isWarning'])
                            <x-ri-alert-fill class="text-warning-foreground mt-0.5 h-5 w-5 flex-shrink-0" />
                            @endif
                            <div class="flex-1">
                                <h3 class="mb-3 text-lg font-semibold md:text-xl {{ $info['isWarning'] ? 'text-warning-foreground' : '' }}">
                                    {{ $info['title'] }}
                                </h3>
                                <p class="leading-relaxed max-md:text-sm {{ $info['isWarning'] ? 'text-warning-foreground' : '' }}">
                                    {{ $info['content'] }}
                                </p>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>

                <div class="mt-6 rounded-lg border border-green-200 bg-success p-4">
                    <div class="flex items-start gap-3">
                        <x-ri-check-fill class="text-success-foreground mt-0.5 h-5 w-5 flex-shrink-0" />
                        <p class="text-success-foreground text-sm">
                            Job ads are updated daily! Enable notifications in your account settings to receive alerts about new job postings matching your preferences.
                        </p>
                    </div>
                </div>
            </div>
            @endif

            {{-- ── Account & Billing ── --}}
            @if ($activeCategory === 'billing')
            <div class="px-3 py-6 md:p-8">
                <div class="mb-6">
                    <h2 class="mb-2 text-lg font-bold md:text-2xl">Account & Billing</h2>
                    <p class="text-muted-foreground max-sm:text-sm">Manage your account and subscription settings</p>
                </div>

                <div class="space-y-6">
                    @foreach ($this->billingInfo as $info)
                    <div class="rounded-lg border p-6 {{ $info['isWarning'] ? 'border-destructive bg-destructive' : 'border-gray-200' }}">
                        <div class="flex items-start gap-3">
                            @if ($info['isWarning'])
                            <x-ri-alert-fill class="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive-foreground" />
                            @endif
                            <div class="flex-1">
                                <h3 class="mb-3 text-lg font-semibold md:text-xl {{ $info['isWarning'] ? 'text-destructive-foreground' : '' }}">
                                    {{ $info['title'] }}
                                </h3>
                                <p class="leading-relaxed max-md:text-sm {{ $info['isWarning'] ? 'text-destructive-foreground' : '' }}">
                                    {{ $info['content'] }}
                                </p>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
            @endif

            {{-- ── Contact & Support ── --}}
            @if ($activeCategory === 'support')
            <div class="px-3 py-6 md:p-8">
                <div class="mb-6">
                    <h2 class="mb-2 text-lg font-bold md:text-2xl">Contact & Support</h2>
                    <p class="text-muted-foreground max-sm:text-sm">Get help from our support team</p>
                </div>

                <div class="grid gap-6 md:grid-cols-2">
                    @foreach ($this->supportCards as $card)
                    <div class="rounded-lg border border-gray-200 p-6 transition-colors hover:border-blue-300">
                        <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg {{ $card['iconClass'] }}">
                            <x-dynamic-component :component="'ri-' . $card['icon']" class="h-5 w-5" />
                        </div>
                        <h3 class="mb-2 text-lg font-semibold">{{ $card['title'] }}</h3>
                        <p class="mb-3 text-muted-foreground max-sm:text-sm">{{ $card['description'] }}</p>
                        <a href="mailto:{{ $card['email'] }}"
                            class="font-medium text-blue-600 hover:text-blue-700">
                            {{ $card['email'] }}
                        </a>
                    </div>
                    @endforeach
                </div>

                <div class="mt-8 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-green-50 p-6">
                    <h3 class="mb-3 font-semibold md:text-lg">Response Time</h3>
                    <p class="leading-relaxed max-md:text-sm">
                        We typically respond to support emails within 24 hours during business days.
                        For urgent issues, please mark your email as "Urgent" in the subject line.
                        Premium members receive priority support.
                    </p>
                </div>
            </div>
            @endif

        </div>
    </div>