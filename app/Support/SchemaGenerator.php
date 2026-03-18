<?php

namespace App\Support;

use App\Models\Mcq;
use App\Models\Topic;
use App\Models\Page;

class SchemaGenerator
{
    public static function website(): array
    {
        return [
            [
                "@context" => "https://schema.org",
                "@type" => "WebSite",
                "name" => "PakQuiz",
                "alternateName" => ["Pak Quiz", "Pakistan Quiz Platform"],
                "url" => "https://pakquiz.com",
                "description" => "AI-powered learning platform for FPSC, PPSC, NTS, and competitive exam preparation in Pakistan",
                "inLanguage" => ["en-PK", "ur-PK"],
                "potentialAction" => [
                    "@type" => "SearchAction",
                    "target" => [
                        "@type" => "EntryPoint",
                        "urlTemplate" => "https://pakquiz.com/search?q={search_term_string}"
                    ],
                    "query-input" => "required name=search_term_string"
                ],
                "publisher" => [
                    "@type" => "Organization",
                    "name" => "PakQuiz",
                    "logo" => [
                        "@type" => "ImageObject",
                        "url" => "https://pakquiz.com/logo.png",
                        "width" => 512,
                        "height" => 512
                    ]
                ],
            ],
            [
                "@context" => "https://schema.org",
                "@type" => "EducationalOrganization",
                "name" => "PakQuiz",
                "url" => "https://pakquiz.com",
                "logo" => [
                    "@type" => "ImageObject",
                    "url" => "https://pakquiz.com/logo.png",
                    "width" => 512,
                    "height" => 512
                ],
                "image" => "https://pakquiz.com/logo.png",
                "description" => "AI-powered learning platform for FPSC, PPSC, NTS, KPPSC, BPSC, SPSC, and all competitive exam preparation in Pakistan. Prepare with MCQs, past papers, mock tests, and AI-driven practice tests.",
                "slogan" => "Smart Preparation for Every Exam",
                "foundingDate" => "2024",
                "areaServed" => [
                    "@type" => "Country",
                    "name" => "Pakistan"
                ],
                "address" => [
                    "@type" => "PostalAddress",
                    "addressCountry" => "PK",
                    "addressRegion" => "Punjab",
                    "addressLocality" => "Muzaffargarh"
                ],
                "geo" => [
                    "@type" => "GeoCoordinates",
                    "latitude" => "30.07202403746833",
                    "longitude" => "71.19436820597124"
                ],
                "contactPoint" => [
                    "@type" => "ContactPoint",
                    "contactType" => "Customer Support",
                    "availableLanguage" => ["English", "Urdu"],
                    "email" => "support@pakquiz.com"
                ],
                "offers" => [
                    "@type" => "Offer",
                    "category" => "Educational Services",
                    "availability" => "https://schema.org/OnlineOnly",
                    "price" => "0",
                    "priceCurrency" => "PKR",
                    "description" => "Free access to exam preparation resources"
                ],
                "serviceType" => [
                    "Online Learning",
                    "Exam Preparation",
                    "Practice Tests",
                    "MCQ Practice",
                    "Past Papers"
                ],
                "keywords" => "FPSC preparation, PPSC test prep, NTS practice, competitive exams Pakistan, CSS preparation, PMS test, online MCQs Pakistan",
                "sameAs" => [
                    "https://www.facebook.com/profile.php?id=61588211743083",
                    "https://www.youtube.com/@pakquiz-ai",
                    "https://www.tiktok.com/@pakquiz_ai",
                    "https://www.instagram.com/pakquiz_ai",
                ],
                "audience" => [
                    "@type" => "EducationalAudience",
                    "educationalRole" => "student",
                    "audienceType" => "Job Seekers and Students preparing for competitive exams"
                ]
            ],
            [
                "@context" => "https://schema.org",
                "@type" => "Organization",
                "name" => "PakQuiz",
                "@id" => "https://pakquiz.com/#organization",
                "url" => "https://pakquiz.com",
                "logo" => [
                    "@type" => "ImageObject",
                    "url" => "https://pakquiz.com/logo.png",
                    "@id" => "https://pakquiz.com/#logo"
                ],
                "brand" => [
                    "@type" => "Brand",
                    "name" => "PakQuiz"
                ]
            ],
            [
                "@context" => "https://schema.org",
                "@type" => "Course",
                "name" => "Comprehensive Exam Preparation Courses",
                "description" => "Free online courses for FPSC, PPSC, NTS, CSS, PMS and other competitive exams in Pakistan",
                "provider" => [
                    "@type" => "EducationalOrganization",
                    "name" => "PakQuiz",
                    "url" => "https://pakquiz.com"
                ],
                "educationalLevel" => "Advanced",
                "teaches" => "Competitive Exam Preparation",
                "availableLanguage" => ["en", "ur"],
                "isAccessibleForFree" => true,
                "hasCourseInstance" => [
                    "@type" => "CourseInstance",
                    "courseMode" => "online",
                    "courseWorkload" => "PT10H"
                ]
            ]
        ];
    }

    public static function topic(Topic $topic): array
    {
        return [
            "@context" => "https://schema.org",
            "@type" => "CollectionPage",
            "name" => $topic->name,
            "url" => $topic->canonicalUrl(),
            "description" => $topic->description,
        ];
    }

    public static function mcq(Mcq $mcq): array
    {
        return [
            "@context" => "https://schema.org",
            "@type" => "Quiz",
            "name" => $mcq->question,
            "description" => $mcq->explanation,
            "url" => $mcq->canonicalUrl(),
        ];
    }

    public static function page(Page $page): array
    {
        return [
            "@context" => "https://schema.org",
            "@type" => "WebPage",
            "name" => $page->seo->title,
            "url" => url()->current(),
            "description" => $page->seo->description ?? null,
        ];
    }

    public static function breadcrumbs(array $items): array
    {
        $list = [];

        foreach ($items as $index => $item) {
            $list[] = [
                "@type" => "ListItem",
                "position" => $index + 1,
                "name" => $item['name'],
                "item" => $item['url'],
            ];
        }

        return [
            "@context" => "https://schema.org",
            "@type" => "BreadcrumbList",
            "itemListElement" => $list
        ];
    }



    public static function aboutPage(): array
    {
        $baseUrl  = url('/');
        $aboutUrl = url('/about');

        return [

            // AboutPage
            [
                '@context'    => 'https://schema.org',
                '@type'       => 'AboutPage',
                '@id'         => $aboutUrl . '#webpage',
                'url'         => $aboutUrl,
                'name'        => 'About PakQuiz – Smart MCQs Preparation Platform for Pakistan',
                'headline'    => 'About PakQuiz – Smart MCQs Preparation Platform for Pakistan',
                'description' => "PakQuiz is Pakistan's AI-assisted MCQs preparation platform for FPSC, PPSC, NTS, CSS, PMS & departmental exams. Structured, accessible, and data-driven.",
                'inLanguage'  => 'en-PK',
                'isPartOf'    => [
                    '@type' => 'WebSite',
                    '@id'   => $baseUrl . '#website',
                    'url'   => $baseUrl,
                    'name'  => 'PakQuiz',
                ],
                'about' => [
                    '@type' => 'Organization',
                    '@id'   => $baseUrl . '#organization',  // references your existing Organization schema
                ],
                'breadcrumb' => [
                    '@type'           => 'BreadcrumbList',
                    'itemListElement' => [
                        ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home',         'item' => $baseUrl],
                        ['@type' => 'ListItem', 'position' => 2, 'name' => 'About PakQuiz', 'item' => $aboutUrl],
                    ],
                ],
            ],

            // FAQPage
            [
                '@context'   => 'https://schema.org',
                '@type'      => 'FAQPage',
                'mainEntity' => [
                    [
                        '@type' => 'Question',
                        'name'  => 'What is PakQuiz?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'PakQuiz is a modern AI-assisted online MCQs preparation platform built for students, job seekers, and competitive exam aspirants across Pakistan. It offers subject-wise, topic-wise, and exam-oriented MCQs designed according to real testing patterns.',
                        ],
                    ],
                    [
                        '@type' => 'Question',
                        'name'  => 'Which exams does PakQuiz cover?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'PakQuiz covers FPSC, PPSC, NTS, CSS, PMS, KPPSC, BPSC, SPSC, departmental tests, and various testing services.',
                        ],
                    ],
                    [
                        '@type' => 'Question',
                        'name'  => 'Is PakQuiz free to use?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'Yes, PakQuiz offers free access to MCQs, demo practice papers, and topic-wise quizzes. A Premium plan is also available with advanced analytics, performance tracking, and AI-assisted learning.',
                        ],
                    ],
                    [
                        '@type' => 'Question',
                        'name'  => 'What makes PakQuiz different from other preparation platforms?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'PakQuiz combines a verified MCQs database, smart progress analytics, AI-assisted learning, and exam-oriented practice papers in one centralized platform—making preparation structured and data-driven rather than scattered.',
                        ],
                    ],
                ],
            ],

        ];
    }

    public static function contactPage(): array
    {
        $baseUrl    = url('/');
        $contactUrl = url('/contact');

        return [
            [
                '@context'  => 'https://schema.org',
                '@type'     => 'ContactPage',
                '@id'       => $contactUrl . '#webpage',
                'url'       => $contactUrl,
                'name'      => 'Contact Us – PakQuiz',
                'headline'  => 'Contact PakQuiz Support',
                'description' => 'Get in touch with the PakQuiz team for support, feedback, or inquiries about our MCQs preparation platform.',
                'inLanguage'  => 'en-PK',
                'isPartOf'    => [
                    '@type' => 'WebSite',
                    '@id'   => $baseUrl . '#website',
                    'url'   => $baseUrl,
                    'name'  => 'PakQuiz',
                ],
                'about' => [
                    '@type' => 'Organization',
                    '@id'   => $baseUrl . '#organization',
                ],
                'breadcrumb' => [
                    '@type'           => 'BreadcrumbList',
                    'itemListElement' => [
                        ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home',       'item' => $baseUrl],
                        ['@type' => 'ListItem', 'position' => 2, 'name' => 'Contact Us', 'item' => $contactUrl],
                    ],
                ],
            ],
        ];
    }

    public static function helpCenterPage(): array
    {
        $baseUrl = url('/');
        $helpUrl = url('/help');

        return [
            [
                '@context'    => 'https://schema.org',
                '@type'       => 'WebPage',
                '@id'         => $helpUrl . '#webpage',
                'url'         => $helpUrl,
                'name'        => 'Help Center – PakQuiz | FAQs & Support',
                'headline'    => 'PakQuiz Help Center',
                'description' => 'Find answers to common questions about PakQuiz. Learn how to practice MCQs, use premium features, manage your account, and contact support.',
                'inLanguage'  => 'en-PK',
                'isPartOf'    => [
                    '@type' => 'WebSite',
                    '@id'   => $baseUrl . '#website',
                    'url'   => $baseUrl,
                    'name'  => 'PakQuiz',
                ],
                'about' => [
                    '@type' => 'Organization',
                    '@id'   => $baseUrl . '#organization',
                ],
                'breadcrumb' => [
                    '@type'           => 'BreadcrumbList',
                    'itemListElement' => [
                        ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home',        'item' => $baseUrl],
                        ['@type' => 'ListItem', 'position' => 2, 'name' => 'Help Center', 'item' => $helpUrl],
                    ],
                ],
            ],

            // FAQPage schema — powers Google rich snippets
            [
                '@context'   => 'https://schema.org',
                '@type'      => 'FAQPage',
                'mainEntity' => [
                    [
                        '@type' => 'Question',
                        'name'  => 'What is PAK QUIZ and how does it work?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'PAK QUIZ is an online platform that helps job seekers in Pakistan prepare for competitive exams such as PPSC, FPSC, NTS, PTS, and others. It offers MCQs across multiple categories, demo practice papers, and premium features like custom quizzes and progress tracking.',
                        ],
                    ],
                    [
                        '@type' => 'Question',
                        'name'  => 'Is PAK QUIZ free to use?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'Yes, PAK QUIZ is free to use for basic features. All users can access the MCQs bank, demo practice papers, and job ads without cost. A premium membership is also available that unlocks advanced features like custom quiz creation, detailed explanations, and performance tracking.',
                        ],
                    ],
                    [
                        '@type' => 'Question',
                        'name'  => 'Which exams does PAK QUIZ cover?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'PAK QUIZ covers PPSC, FPSC, NTS, PTS, NJP, CSS, PMS, KPPSC, BPSC, SPSC, and various departmental and private sector exams across Pakistan.',
                        ],
                    ],
                    [
                        '@type' => 'Question',
                        'name'  => 'What is included in the premium membership?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'Premium members get access to custom practice papers, progress tracking, detailed explanations for questions, AI-generated MCQs based on keywords, random AI-generated practice papers, and priority updates with additional learning resources.',
                        ],
                    ],
                    [
                        '@type' => 'Question',
                        'name'  => 'Which payment methods are supported for premium plans?',
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text'  => 'PakQuiz supports Easypaisa, JazzCash, bank transfer, and debit/credit cards for premium plan payments. All payments are processed securely and premium features are activated immediately after confirmation.',
                        ],
                    ],
                ],
            ],
        ];
    }


    public static function joinUsPage(): array
    {
        $baseUrl   = url('/');
        $joinUrl   = url('/join-us');

        return [
            [
                '@context'    => 'https://schema.org',
                '@type'       => 'WebPage',
                '@id'         => $joinUrl . '#webpage',
                'url'         => $joinUrl,
                'name'        => 'Join PakQuiz – Be Part of Pakistan\'s Exam Revolution',
                'headline'    => 'Join the PakQuiz Team',
                'description' => 'Join PakQuiz as a content contributor, MCQ writer, developer or campus ambassador. Help thousands of Pakistani students prepare for FPSC, PPSC, NTS, CSS & PMS exams.',
                'inLanguage'  => 'en-PK',
                'isPartOf'    => [
                    '@type' => 'WebSite',
                    '@id'   => $baseUrl . '#website',
                    'url'   => $baseUrl,
                    'name'  => 'PakQuiz',
                ],
                'about' => [
                    '@type' => 'Organization',
                    '@id'   => $baseUrl . '#organization',
                ],
                'breadcrumb' => [
                    '@type'           => 'BreadcrumbList',
                    'itemListElement' => [
                        ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home',    'item' => $baseUrl],
                        ['@type' => 'ListItem', 'position' => 2, 'name' => 'Join Us', 'item' => $joinUrl],
                    ],
                ],
            ],

            // JobPosting schemas for each open role
            [
                '@context'         => 'https://schema.org',
                '@type'            => 'JobPosting',
                'title'            => 'MCQ Content Writer',
                'description'      => 'Write subject-specific MCQs for FPSC, PPSC, NTS and CSS exams. Ensure accuracy and relevance of exam content.',
                'datePosted'       => now()->toDateString(),
                'employmentType'   => 'VOLUNTEER',
                'jobLocationType'  => 'TELECOMMUTE',
                'hiringOrganization' => [
                    '@type' => 'Organization',
                    'name'  => 'PakQuiz',
                    'url'   => $baseUrl,
                    '@id'   => $baseUrl . '#organization',
                ],
                'applicantLocationRequirements' => [
                    '@type' => 'Country',
                    'name'  => 'Pakistan',
                ],
                'jobBenefits'      => 'Flexible hours, Remote work, Certificate of contribution, Premium access',
                'skills'           => 'MCQ writing, Subject knowledge, General knowledge, English',
            ],
            [
                '@context'         => 'https://schema.org',
                '@type'            => 'JobPosting',
                'title'            => 'Frontend Developer',
                'description'      => 'Build and improve features on PakQuiz using Laravel, Livewire, and Tailwind CSS.',
                'datePosted'       => now()->toDateString(),
                'employmentType'   => 'PART_TIME',
                'jobLocationType'  => 'TELECOMMUTE',
                'hiringOrganization' => [
                    '@type' => 'Organization',
                    'name'  => 'PakQuiz',
                    'url'   => $baseUrl,
                    '@id'   => $baseUrl . '#organization',
                ],
                'applicantLocationRequirements' => [
                    '@type' => 'Country',
                    'name'  => 'Pakistan',
                ],
                'skills'           => 'Laravel, Livewire, Tailwind CSS, PHP, Alpine.js',
            ],
        ];
    }

    public static function privacyPolicyPage(): array
    {
        $baseUrl      = url('/');
        $privacyUrl   = url('/privacy-policy');

        return [
            [
                '@context'    => 'https://schema.org',
                '@type'       => 'WebPage',
                '@id'         => $privacyUrl . '#webpage',
                'url'         => $privacyUrl,
                'name'        => 'Privacy Policy – PakQuiz',
                'headline'    => 'Privacy Policy',
                'description' => 'Read PakQuiz\'s Privacy Policy to understand how we collect, use, and protect your personal information on our MCQs preparation platform.',
                'inLanguage'  => 'en-PK',
                'dateModified' => now()->toDateString(),
                'isPartOf'    => [
                    '@type' => 'WebSite',
                    '@id'   => $baseUrl . '#website',
                    'url'   => $baseUrl,
                    'name'  => 'PakQuiz',
                ],
                'about' => [
                    '@type' => 'Organization',
                    '@id'   => $baseUrl . '#organization',
                ],
                'breadcrumb' => [
                    '@type'           => 'BreadcrumbList',
                    'itemListElement' => [
                        ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home',           'item' => $baseUrl],
                        ['@type' => 'ListItem', 'position' => 2, 'name' => 'Privacy Policy', 'item' => $privacyUrl],
                    ],
                ],
            ],
        ];
    }

    public static function termsOfServicePage(): array
    {
        $baseUrl  = url('/');
        $termsUrl = url('/terms-of-service');

        return [
            [
                '@context'    => 'https://schema.org',
                '@type'       => 'WebPage',
                '@id'         => $termsUrl . '#webpage',
                'url'         => $termsUrl,
                'name'        => 'Terms of Service – PakQuiz',
                'headline'    => 'Terms of Service',
                'description' => 'Read PakQuiz\'s Terms of Service governing your use of our MCQs preparation platform.',
                'inLanguage'  => 'en-PK',
                'dateModified' => now()->toDateString(),
                'isPartOf'    => [
                    '@type' => 'WebSite',
                    '@id'   => $baseUrl . '#website',
                    'url'   => $baseUrl,
                    'name'  => 'PakQuiz',
                ],
                'about' => [
                    '@type' => 'Organization',
                    '@id'   => $baseUrl . '#organization',
                ],
                'breadcrumb' => [
                    '@type'           => 'BreadcrumbList',
                    'itemListElement' => [
                        ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home',             'item' => $baseUrl],
                        ['@type' => 'ListItem', 'position' => 2, 'name' => 'Terms of Service', 'item' => $termsUrl],
                    ],
                ],
            ],
        ];
    }
}
