import { TextHeading } from '@/components/ui/typography';
import papersRoute from '@/routes/admin/papers';
import { CommonFilters, PaperResource, Stats } from '@/types/admin';
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
    return (
        <AdminLayout title="Papers List">
            <TextHeading as="h1" size="xl" textColor="primary">
                Papers
            </TextHeading>
            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-4">
                <StatsCard title="Total Testing Services" total={stats.total} />
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
                />
                <pre>{JSON.stringify(papers, null, 2)}</pre>
            </section>
        </AdminLayout>
    );
}
