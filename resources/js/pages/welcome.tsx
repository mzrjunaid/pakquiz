import CallToAction from '@/components/call-to-action';
import FeatureCard from '@/components/feature-card';
import McqCard from '@/components/mcq/mcq-card';
import SearchBar from '@/components/SearchBar';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { breadcrumb } from '@/lib/breadcrumbs-utils';
import publicMethod from '@/routes/public';
import mcqs from '@/routes/public/mcqs';
import papers from '@/routes/public/papers';
import { HomeProps } from '@/types/public/home';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import HeroSection from './public/homepage/components/HeroSection';
import PageSidebar from './public/homepage/components/page-sidebar';

export default function Welcome({
    seo,
    subjects,
    departments,
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
                            </div>
                        </div>

                        {/* Sidebar */}
                        <PageSidebar>
                            <FeatureCard title="Departments">
                                <div className="md:px-2">
                                    {departments.map((dept, idx) => (
                                        <div
                                            className="flex items-center gap-1 text-sm"
                                            key={idx}
                                        >
                                            <ChevronRight size="16" />
                                            <TextLink
                                                href={publicMethod.departments.show(
                                                    {
                                                        department: dept.slug,
                                                    },
                                                )}
                                                className="my-2 line-clamp-1 overflow-hidden"
                                            >
                                                {dept.name}
                                            </TextLink>
                                        </div>
                                    ))}
                                </div>
                            </FeatureCard>
                            <FeatureCard title="Latest Papers">
                                <div className="md:px-2">
                                    {latestPapers.map((paper, idx) => (
                                        <div
                                            className="flex items-center gap-1 text-sm"
                                            key={idx}
                                        >
                                            <ChevronRight size="16" />
                                            <TextLink
                                                href={papers.show({
                                                    paper: paper.slug,
                                                })}
                                                className="my-2 block"
                                            >
                                                {paper.name}
                                            </TextLink>
                                        </div>
                                    ))}
                                </div>
                            </FeatureCard>
                            <FeatureCard title="Latest Subjects">
                                <div className="md:px-2">
                                    {subjects.map((subject, idx) => (
                                        <div
                                            className="flex items-center gap-1 text-sm"
                                            key={idx}
                                        >
                                            <ChevronRight size="16" />
                                            <TextLink
                                                href={publicMethod.subjects.show(
                                                    {
                                                        subject: subject.slug,
                                                    },
                                                )}
                                                className="my-2 block"
                                            >
                                                {subject.name}
                                            </TextLink>
                                        </div>
                                    ))}
                                </div>
                            </FeatureCard>
                        </PageSidebar>
                    </div>
                </div>
            </section>
            <CallToAction />
        </AppLayout>
    );
}
