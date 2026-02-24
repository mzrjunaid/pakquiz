import AppCenterHead from '@/components/app-center-head';
import TopAdSection from '@/components/hero-section/TopAdSection';
import McqCard from '@/components/mcq/mcq-card';
import { SitePagination } from '@/components/pagination';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import mcqsRoute from '@/routes/public/mcqs';
import { JsonIndexableThing, Seo, SharedData } from '@/types';
import { ResourcePaginator } from '@/types/pagination';
import { Mcq } from '@/types/public/mcq';
import { usePage } from '@inertiajs/react';
import PageSidebar from '../homepage/components/page-sidebar';

interface Props extends SharedData {
    mcqs: ResourcePaginator<Mcq>;
    seo: Seo;
    schema: JsonIndexableThing; // JSON-LD schema for the list of MCQs
}

const McqsPage = () => {
    const { mcqs, seo, schema } = usePage<Props>().props;

    return (
        <AppLayout>
            <AppCenterHead schema={schema} />
            <TopAdSection />
            <MainSectionWithSidebarLayout>
                <div className="mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <PageTitle title={seo.title} className="md:mb-0" />
                    </div>
                    <SearchBar />
                </div>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-8 lg:col-span-2">
                        {mcqs.data.map((mcq, idx) => (
                            <McqCard
                                mcq={mcq}
                                idx={idx}
                                key={idx}
                                route={mcqsRoute.show(mcq.slug)}
                            />
                        ))}
                        <SitePagination meta={mcqs.meta} />
                    </div>
                    <PageSidebar />
                </div>
            </MainSectionWithSidebarLayout>
        </AppLayout>
    );
};

export default McqsPage;
