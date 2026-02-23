import TopAdSection from '@/components/hero-section/TopAdSection';
import { SitePagination } from '@/components/pagination';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import publicMethod from '@/routes/public';
import { Seo, SharedData } from '@/types';
import { Department } from '@/types/department';
import { ResourcePaginator } from '@/types/pagination';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import PageSidebar from '../homepage/components/page-sidebar';

interface DepartmentIndexPage extends SharedData {
    departments: ResourcePaginator<Department>;
    seo: Seo;
}

const DepartmentsPage = () => {
    const {
        departments: { data: departments, meta },
        seo,
    } = usePage<DepartmentIndexPage>().props;
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
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
                            {departments.map((dept, idx) => (
                                <div
                                    key={idx}
                                    className="group rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:p-6"
                                >
                                    <Link
                                        href={publicMethod.departments.show(
                                            dept.slug,
                                        )}
                                        className="block space-y-2"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl">
                                                {dept.name}
                                            </h2>
                                            <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                        </div>

                                        <p className="line-clamp-2 text-sm text-foreground md:text-base">
                                            {dept.description}
                                        </p>
                                    </Link>

                                    {/* Topics Section */}
                                    {dept.papers && dept.papers.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {dept.papers.map((pap, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={publicMethod.papers.show(
                                                        { paper: pap.slug },
                                                    )}
                                                >
                                                    <Badge className="cursor-pointer transition-colors hover:bg-primary/25 hover:text-primary">
                                                        {pap.name}
                                                    </Badge>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer Section */}
                                    {dept.updated_at && (
                                        <div className="mt-4 flex items-center gap-1.5 border-t border-gray-100 pt-3 text-xs text-gray-500 md:text-sm">
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span>
                                                Last updated: {dept.updated_at}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <SitePagination meta={meta} />
                    </div>
                    <PageSidebar />
                </div>
            </MainSectionWithSidebarLayout>
            {/* <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(departments, null, 2)}</pre> */}
        </AppLayout>
    );
};

export default DepartmentsPage;
