import FeatureCard from '@/components/feature-card';
import TopAdSection from '@/components/hero-section/TopAdSection';
import McqCard from '@/components/mcq/mcq-card';
import { SitePagination } from '@/components/pagination';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import TextLink from '@/components/text-link';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import publicMethod from '@/routes/public';
import { Seo, SharedData } from '@/types';
import { ResourcePaginator } from '@/types/pagination';
import { Mcq, Subject } from '@/types/public/mcq';
import { Paper } from '@/types/public/paper';
import { Head, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import PageSidebar from '../homepage/components/page-sidebar';

export interface SubjectPageProps extends SharedData {
    seo: Seo;
    subject: Subject;
    mcqs: ResourcePaginator<Mcq>;
    papers: ResourcePaginator<Paper>;
}

const SubjectPage = () => {
    const { seo, mcqs, subject } = usePage<SubjectPageProps>().props;
    const isQuizMode = true;
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <TopAdSection />
            <MainSectionWithSidebarLayout>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <PageTitle title={seo.title} />

                        {/* <div className="mb-4">
                            <p className="rounded-sm p-4 bg-accent/10 text-accent-foreground shadow">
                                {subject.description}
                            </p>
                        </div> */}

                        <div className="space-y-4 md:space-y-6">
                            {/* Mode instruction */}
                            {!isQuizMode && (
                                <p className="mb-3 rounded border border-green-200 bg-green-50 p-2 text-sm text-green-700">
                                    📖 Study Mode: The correct answer is
                                    highlighted in green
                                </p>
                            )}
                            {mcqs.data.map((mcq, idx) => (
                                <McqCard mcq={mcq} idx={idx} key={idx} />
                            ))}

                            <SitePagination meta={mcqs.meta} />
                        </div>
                    </div>

                    {/* Sidebar  */}
                    <PageSidebar>
                        <SearchBar />
                        {subject.topics && subject.topics.length > 1 && (
                            <FeatureCard
                                title="Topics"
                                description={seo.description}
                            >
                                <div className="md:px-2">
                                    {subject.topics?.map((topic, idx) => (
                                        <div
                                            className="flex items-center gap-1 text-sm"
                                            key={idx}
                                        >
                                            <ChevronRight size="16" />
                                            <TextLink
                                                href={publicMethod.subjects.topic.show(
                                                    { subject, topic },
                                                )}
                                                className="my-2 block"
                                            >
                                                {topic.name}
                                            </TextLink>
                                        </div>
                                    ))}
                                </div>
                            </FeatureCard>
                        )}
                    </PageSidebar>
                </div>
            </MainSectionWithSidebarLayout>

            {/* <pre>{JSON.stringify(seo, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(mcqs.links, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(papers, null, 2)}</pre> */}
        </AppLayout>
    );
};

export default SubjectPage;
