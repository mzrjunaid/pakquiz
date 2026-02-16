import CallToAction from '@/components/call-to-action';
import McqCard from '@/components/mcq/mcq-card';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { breadcrumb } from '@/lib/breadcrumbs-utils';
import mcqs from '@/routes/public/mcqs';
import { HomeProps } from '@/types/public/home';
import { Head, Link, usePage } from '@inertiajs/react';
import HeroSection from './public/homepage/components/HeroSection';
import PageSidebar from './public/homepage/components/page-sidebar';

export default function Welcome({
    seo,
    subjects,
    latestPapers,
    stats,
    latestMcqs,
}: HomeProps) {
    const { url } = usePage();
    const breadcrumbs = breadcrumb(url);

    const homepageSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': 'https://www.pakquiz.com/#webpage',
                url: 'https://www.pakquiz.com',
                name: 'PAK QUIZ',
                description:
                    'Pak Quiz offers a vast collection of AI-Enhanced multiple-choice questions (MCQs) to help you prepare for various exams (PPSC, NTS, FPSC, CSS, PMS,... etc.)',
                publisher: {
                    '@id': 'https://www.pakquiz.com/#organization',
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://www.pakquiz.com/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                },
            },
            // {
            //     '@type': 'Organization',
            //     '@id': 'https://www.pakquiz.com/#organization',
            //     name: 'PAK QUIZ',
            //     url: 'https://www.pakquiz.com',
            //     logo: 'https://www.pakquiz.com/logo.png',
            //     sameAs: [
            //         'https://www.facebook.com/pakquiz',
            //         'https://www.youtube.com/@pakquiz',
            //         'https://www.tiktok.com/@pakquiz',
            //         'https://twitter.com/pakquiz',
            //     ],
            //     contactPoint: {
            //         '@type': 'ContactPoint',
            //         contactType: 'Customer Support',
            //         email: 'support@pakquiz.com',
            //         areaServed: 'PK',
            //         availableLanguage: ['English', 'Urdu'],
            //     },
            // },
            {
                '@type': 'WebPage',
                '@id': 'https://www.pakquiz.com/#webpage',
                url: 'https://www.pakquiz.com',
                name: 'Pak Quiz – AI-Powered MCQs & Job Test Preparation',
                description:
                    'Pak Quiz offers a vast collection of AI-Enhanced multiple-choice questions (MCQs) to help you prepare for various exams (PPSC, NTS, FPSC, CSS, PMS,... etc.)',
                inLanguage: 'en',
                isPartOf: { '@id': 'https://www.pakquiz.com/#website' },
                about: {
                    '@type': 'EducationalOrganization',
                    name: 'Pak Quiz',
                    sameAs: 'https://www.pakquiz.com',
                },
            },
        ],
    };

    const isQuizMode = false;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={seo.title}>
                <script type="application/ld+json">
                    {JSON.stringify(homepageSchema)}
                </script>
            </Head>
            <HeroSection mcq={latestMcqs.data} stats={stats} />
            <section className="border-y px-4 py-6 sm:px-6 md:py-16 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                        <div>
                            <h2 className="mb-2 text-xl font-bold md:text-3xl">
                                Explore MCQs
                            </h2>
                            <p className="text-sm text-muted-foreground md:text-xl">
                                Find the perfect questions for your preparation
                            </p>
                        </div>

                        <div className="flex w-full flex-row items-center gap-x-4 space-x-4 md:max-w-sm">
                            <SearchBar placeholder="Search Papers and MCQs..." />
                        </div>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                        <div className="lg:col-span-2">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-semibold">
                                    Latest MCQs
                                </h3>
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                {/* Mode instruction */}
                                {!isQuizMode && (
                                    <p className="mb-3 rounded border border-green-200 bg-green-50 p-2 text-sm text-green-700">
                                        📖 Study Mode: The correct answer is
                                        highlighted in green
                                    </p>
                                )}
                                {latestMcqs.data.map((mcq, idx) => (
                                    <McqCard
                                        mcq={mcq}
                                        idx={idx}
                                        key={idx}
                                        route={mcqs.show(mcq.slug)}
                                    />
                                ))}

                                <div className="flex justify-center">
                                    <Button asChild>
                                        <Link
                                            href={mcqs.index().url}
                                            className="w-full"
                                        >
                                            View All MCQs
                                        </Link>
                                    </Button>
                                </div>

                                {/* <SitePagination
                                        meta={meta}
                                        links={links}
                                        scrollRef={scrollRef}
                                    /> */}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <PageSidebar />
                    </div>
                </div>
            </section>
            <CallToAction />
            <pre>
                {/* {JSON.stringify(seo, null, 2)} */}
                {/* {JSON.stringify(subjects, null, 2)} */}
                {/* {JSON.stringify(latestPapers, null, 2)} */}
                {/* {JSON.stringify(latestMcqs, null, 2)} */}
            </pre>
        </AppLayout>
    );
}

/*
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>
                */
