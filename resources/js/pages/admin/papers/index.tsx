import { Button } from '@/components/ui/button';
import { TextHeading } from '@/components/ui/typography';
import admin from '@/routes/admin';
import papersRoute from '@/routes/admin/papers';
import { CommonFilters, PaperResource, Stats } from '@/types/admin';
import { Paper } from '@/types/paper';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '../components/admin-layout';
import StatsCard from '../components/stats-card';
import PaperTable from './components/data-table-index';

export default function PapersIndex({
    papers,
    stats,
    filters,
}: {
    papers: PaperResource;
    filters: CommonFilters;
    stats: Stats;
}) {
    const handleEditPaper = (paper: Paper) => {
        router.visit(admin.papers.edit(paper.slug).url);
    };

    const handleGeneratePaper = ({
        paper,
        action,
    }: {
        paper: Paper;
        action: 'generate' | 'regenerate';
    }) => {
        router.post(admin.papers.generate(paper.slug).url, {
            preserveScroll: true,
            action,
        });
    };

    return (
        <AdminLayout title="Papers List">
            <div className="flex justify-between">
                <TextHeading as="h1" size="xl" textColor="primary">
                    Papers
                </TextHeading>
                <Button>
                    <Link href={admin.papers.create().url}>Create Paper</Link>
                </Button>
            </div>
            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-4">
                <StatsCard title="Total Papers" total={stats.total} />
                <StatsCard title="Today" total={stats.today} />
                <StatsCard title="This Week" total={stats.this_week} />
                <StatsCard
                    title={`Top Creator - ${stats.top_creator?.name}`}
                    total={stats.top_creator?.total_entries}
                />
            </div>
            <section className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min">
                <PaperTable
                    tableData={papers}
                    filters={filters}
                    url={papersRoute.index().url}
                    onEdit={handleEditPaper}
                    onGeneratePaper={handleGeneratePaper}
                />
                {/* <pre>{JSON.stringify(papers, null, 2)}</pre> */}
            </section>
        </AdminLayout>
    );
}
