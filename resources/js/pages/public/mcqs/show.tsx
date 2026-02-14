import FeatureCard from '@/components/feature-card';
import SuggestionsForm from '@/components/form/suggestion-form';
import TopAdSection from '@/components/hero-section/TopAdSection';
import McqCard from '@/components/mcq/mcq-card';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import TextLink from '@/components/text-link';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import publicMethod from '@/routes/public';
import { Seo, SharedData } from '@/types';
import { Mcq, Subject } from '@/types/public/mcq';
import { Head, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import PageSidebar from '../homepage/components/page-sidebar';

interface McqProps extends SharedData {
    subject: Subject;
    mcq: Mcq;
    seo: Seo;
}

const McqShow = () => {
    const { seo, subject, mcq } = usePage<McqProps>().props;
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <TopAdSection />
            <MainSectionWithSidebarLayout>
                <div className="mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <PageTitle title={seo.title + '...'} />
                    </div>
                    <SearchBar />
                </div>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <McqCard mcq={mcq} />
                        <SuggestionsForm />
                    </div>
                    <PageSidebar>
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
        </AppLayout>
    );
};

export default McqShow;
