import AppCenterHead from '@/components/app-center-head';
import TopAdSection from '@/components/hero-section/TopAdSection';
import { SitePagination } from '@/components/pagination';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import publicMethod from '@/routes/public';
import { Seo, SharedData } from '@/types';
import { ResourcePaginator } from '@/types/pagination';
import { Paper } from '@/types/public/paper';
import { Link, usePage } from '@inertiajs/react';
import { Building, ChevronRight } from 'lucide-react';
import PageSidebar from '../homepage/components/page-sidebar';

interface PapersPageProps extends SharedData {
    papers: ResourcePaginator<Paper>;
    seo: Seo;
}

const PapersPage = () => {
    const {
        papers: { data: papers, meta },
        seo,
    } = usePage<PapersPageProps>().props;
    return (
        <AppLayout>
            <AppCenterHead />
            <TopAdSection />
            <MainSectionWithSidebarLayout>
                <div className="mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <PageTitle title={seo.title} />
                    </div>
                    <SearchBar />
                </div>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-8 lg:col-span-2">
                        {/* <McqCard mcq={mcq} /> */}
                        <div className="flex flex-wrap gap-4">
                            {papers.map((paper, idx) => (
                                <Link
                                    href={publicMethod.papers.show({
                                        paper: paper.slug + '-mcqs',
                                    })}
                                    className="group w-full rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:w-sm md:p-6"
                                    key={idx}
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        {paper.subject && (
                                            <Badge
                                                variant="outline"
                                                className="transition-colors hover:bg-primary/25 hover:text-primary"
                                            >
                                                {paper.subject.name}
                                            </Badge>
                                        )}
                                        {paper.testing_service && (
                                            <Badge className="transition-colors hover:bg-primary/25 hover:text-primary">
                                                {paper.testing_service.short}
                                            </Badge>
                                        )}
                                    </div>

                                    <div className="block space-y-2">
                                        <div className="flex items-start justify-between gap-3">
                                            <h2 className="line-clamp-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-sm">
                                                {paper.name} -{' '}
                                                {paper.schedule_at
                                                    ? paper.schedule_at
                                                    : paper.year}
                                            </h2>
                                            <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        {paper.department && (
                                            <div className="flex items-center gap-1.5 overflow-hidden text-xs text-muted md:text-sm">
                                                <Building className="size-4" />
                                                <span className="line-clamp-1">
                                                    {paper.department.name}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <SitePagination meta={meta} />
                    </div>
                    <PageSidebar />
                </div>
            </MainSectionWithSidebarLayout>
        </AppLayout>
    );
};

export default PapersPage;
