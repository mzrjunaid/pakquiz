import TopAdSection from '@/components/hero-section/TopAdSection';
import McqCard from '@/components/mcq/mcq-card';
import { SitePagination } from '@/components/pagination';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import { SharedData } from '@/types';
import { ResourcePaginator } from '@/types/pagination';
import { Mcq } from '@/types/public/mcq';
import { Paper } from '@/types/public/paper';
import { Head, usePage } from '@inertiajs/react';
import PageSidebar from '../homepage/components/page-sidebar';

interface PaperPageProps extends SharedData {
    paper: Paper;
    mcqs: ResourcePaginator<Mcq>;
}

const PaperPage = () => {
    const { seo, paper, mcqs } = usePage<PaperPageProps>().props;
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <TopAdSection />
            <MainSectionWithSidebarLayout>
                <div className="mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <PageTitle title={paper.name} className="md:mb-0" />
                        <div className="flex justify-between">
                            <p>{paper.department.name}</p>
                            <p>{paper.testing_service.short}</p>
                        </div>
                    </div>
                    <SearchBar />
                </div>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-8 lg:col-span-2">
                        {mcqs.data.map((mcq, idx) => (
                            <McqCard mcq={mcq} idx={idx} key={idx} />
                        ))}
                        {/* <SuggestionsForm /> */}

                        <SitePagination meta={mcqs.meta} />
                    </div>
                    <PageSidebar>
                        {/* {subject.topics && subject.topics.length > 1 && (
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
                        )} */}
                    </PageSidebar>
                </div>
            </MainSectionWithSidebarLayout>

            {/* <pre>{JSON.stringify(seo, null, 2)}</pre> */}
            <pre>{JSON.stringify(paper, null, 2)}</pre>
            {/* <pre>{JSON.stringify(mcqs, null, 2)}</pre> */}
        </AppLayout>
    );
};

export default PaperPage;
