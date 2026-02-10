import TopAdSection from '@/components/hero-section/TopAdSection';
import { SitePagination } from '@/components/pagination';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import publicMethod from '@/routes/public';
import { Seo, SharedData } from '@/types';
import { ResourcePaginator } from '@/types/pagination';
import { Subject } from '@/types/subject';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import PageSidebar from '../homepage/components/page-sidebar';

interface SubjectsResponse extends SharedData {
    seo: Seo;
    subjects: ResourcePaginator<Subject>;
}

const SubjectsPage = () => {
    const {
        seo,
        subjects: { data: subjects, meta },
    } = usePage<SubjectsResponse>().props;

    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <TopAdSection />
            <section className="md:border-t">
                <div className="mx-auto max-w-7xl px-3 py-8 lg:px-0">
                    <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                        <PageTitle title={seo.title} />
                        <SearchBar placeholder="Search Papers and MCQs..." />
                    </div>
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                        <div className="lg:col-span-2">
                            <div className="space-y-4 md:space-y-6">
                                {/* Mode instruction */}
                                <div className="grid grid-cols-1 gap-4 md:gap-6">
                                    {subjects.map((subject) => (
                                        <div
                                            key={subject.id}
                                            className="group rounded-md bg-primary/5 p-4 shadow-sm transition-all hover:shadow-md md:p-6"
                                        >
                                            {/* Header Section */}
                                            <Link
                                                href={publicMethod.subjects.show(
                                                    subject.slug,
                                                )}
                                                className="block space-y-2"
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl">
                                                        {subject.name}
                                                    </h2>
                                                    <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                                </div>

                                                <p className="line-clamp-2 text-sm text-foreground md:text-base">
                                                    {subject.description}
                                                </p>
                                            </Link>

                                            {/* Topics Section */}
                                            {subject.topics &&
                                                subject.topics.length > 0 && (
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {subject.topics.map(
                                                            (topic) => (
                                                                <Link
                                                                    key={
                                                                        topic.id
                                                                    }
                                                                    href={`/subjects/${subject.slug}/topics/${topic.slug}`}
                                                                >
                                                                    <Badge className="cursor-pointer transition-colors hover:bg-primary/25 hover:text-primary">
                                                                        {
                                                                            topic.name
                                                                        }
                                                                    </Badge>
                                                                </Link>
                                                            ),
                                                        )}
                                                    </div>
                                                )}

                                            {/* Footer Section */}
                                            {subject.updated_at && (
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
                                                        Last updated:{' '}
                                                        {subject.updated_at}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <SitePagination meta={meta} />
                                <pre>{JSON.stringify(meta, null, 2)}</pre>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <PageSidebar />
                    </div>
                </div>
            </section>
            {/* <pre>{JSON.stringify(seo, null, 2)}</pre> */}
        </AppLayout>
    );
};

export default SubjectsPage;
