import SuggestionsForm from '@/components/form/suggestion-form';
import TopAdSection from '@/components/hero-section/TopAdSection';
import McqCard from '@/components/mcq/mcq-card';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import mcqs from '@/routes/public/mcqs';
import { Seo, SharedData } from '@/types';
import { Mcq } from '@/types/public/mcq';
import { Head, usePage } from '@inertiajs/react';
import PageSidebar from '../homepage/components/page-sidebar';

interface McqProps extends SharedData {
    mcq: Mcq;
    seo: Seo;
}

const McqShow = () => {
    const { seo, mcq } = usePage<McqProps>().props;
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <TopAdSection />
            <MainSectionWithSidebarLayout>
                <div className="mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <PageTitle title={'MCQ Detail'} />
                    </div>
                    <SearchBar />
                </div>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-8 lg:col-span-2">
                        <McqCard mcq={mcq} route={mcqs.show(mcq.slug)} />
                        <SuggestionsForm />

                        <pre>{JSON.stringify(mcq, null, 2)}</pre>
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
        </AppLayout>
    );
};

export default McqShow;
