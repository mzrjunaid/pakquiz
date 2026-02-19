import TopAdSection from '@/components/hero-section/TopAdSection';
import TextLink from '@/components/text-link';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import mcqs from '@/routes/public/mcqs';
import papers from '@/routes/public/papers';
import subjects from '@/routes/public/subjects';
import { Head } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import PageSidebar from '../homepage/components/page-sidebar';

interface Props {
    query: string;
    results: {
        subjects: {
            id: number;
            name: string;
            slug: string;
        }[];
        papers: {
            id: number;
            name: string;
            slug: string;
        }[];
        mcqs: {
            id: number;
            question: string;
            slug: string;
        }[];
    };
}

export function ResultCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <h2 className="mb-2 font-medium">{title}</h2>
            <div>{children}</div>
        </section>
    );
}

export default function Search({ query, results }: Props) {
    return (
        <AppLayout>
            <Head>
                <meta name="robots" content="noindex, follow" />
            </Head>
            <TopAdSection />
            <MainSectionWithSidebarLayout>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <div className="space-y-8">
                            <h1 className="text-xl font-semibold">
                                Search results for "{query}"
                            </h1>

                            {results.subjects?.length > 0 && (
                                <ResultCard title="Subjects">
                                    {results.subjects.map((s, idx) => (
                                        <div
                                            className="flex items-center gap-1 text-sm"
                                            key={idx}
                                        >
                                            <ChevronRight size="16" />
                                            <TextLink
                                                href={subjects.show({
                                                    subject: s.slug,
                                                })}
                                                className="my-2 block"
                                            >
                                                {s.name}
                                            </TextLink>
                                        </div>
                                    ))}
                                </ResultCard>
                            )}

                            {results.papers?.length > 0 && (
                                <ResultCard title="Papers">
                                    {results.papers.map((p, idx) => (
                                        <div
                                            className="flex items-center gap-1 text-sm"
                                            key={idx}
                                        >
                                            <ChevronRight size="16" />
                                            <TextLink
                                                href={papers.show({
                                                    paper: p.slug,
                                                })}
                                                className="my-2 block"
                                            >
                                                {p.name}
                                            </TextLink>
                                        </div>
                                    ))}
                                </ResultCard>
                            )}

                            {results.mcqs?.length > 0 && (
                                <ResultCard title="MCQs">
                                    {results.mcqs.map((m, idx) => (
                                        <div
                                            className="flex items-center gap-1 text-sm"
                                            key={idx}
                                        >
                                            <ChevronRight size="16" />
                                            <TextLink
                                                href={mcqs.show(m.slug)}
                                                className="my-2 block"
                                            >
                                                {m.question}
                                            </TextLink>
                                        </div>
                                    ))}
                                </ResultCard>
                            )}
                        </div>
                    </div>
                    <PageSidebar />
                </div>
            </MainSectionWithSidebarLayout>
        </AppLayout>
    );
}
