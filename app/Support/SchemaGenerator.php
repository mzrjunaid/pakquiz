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
            ]];
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
}