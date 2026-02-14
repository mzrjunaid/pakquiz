import TopAdSection from '@/components/hero-section/TopAdSection';
import { SitePagination } from '@/components/pagination';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import publicMethod from '@/routes/public';
import { Seo, SharedData } from '@/types';
import { ResourcePaginator } from '@/types/pagination';
import { Paper } from '@/types/public/paper';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronRight, Clock } from 'lucide-react';
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
                            {papers.map((paper, idx) => (
                                <div
                                    className="group w-sm rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:p-6"
                                    key={idx}
                                >
                                    <Link
                                        href={publicMethod.papers.show(
                                            paper.slug,
                                        )}
                                        className="block space-y-2"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <h2 className="line-clamp-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-sm">
                                                {paper.name}
                                            </h2>
                                            <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                        </div>
                                    </Link>

                                    {/* {paper.tags &&
                                        paper.tags.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {paper.tags.map((topic) => (
                                                    <Link
                                                        key={topic.id}
                                                        href={`/papers/${paper.slug}/topics/${topic.slug}`}
                                                    >
                                                        <Badge className="cursor-pointer transition-colors hover:bg-primary/25 hover:text-primary">
                                                            {topic.name}
                                                        </Badge>
                                                    </Link>
                                                ))}
                                            </div>
                                        )} */}

                                    {paper.year && (
                                        <div className="mt-4 flex items-center gap-1.5 pt-3 text-xs text-muted md:text-sm">
                                            <Clock className="size-4" />
                                            <span>
                                                Paper Year - {paper.year}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <SitePagination meta={meta} />

                        <pre>{JSON.stringify(papers, null, 2)}</pre>
                    </div>
                    <PageSidebar />
                </div>
            </MainSectionWithSidebarLayout>
        </AppLayout>
    );
};

export default PapersPage;
