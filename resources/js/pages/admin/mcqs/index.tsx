import { TextHeading } from '@/components/ui/typography';
import mcqsRoute from '@/routes/admin/mcqs';
import { CommonFilters, McqsResource, Stats } from '@/types/admin';
import AdminLayout from '../components/admin-layout';
import StatsCard from '../components/stats-card';
import McqsTable from './components/data-table-index';

export default function McqsIndex({
    mcqs,
    stats,
    filters,
}: {
    mcqs: McqsResource;
    filters: CommonFilters;
    stats: Stats;
}) {
    return (
        <AdminLayout title="MCQs List">
            <TextHeading as="h1" size="xl" textColor="primary">
                Papers
            </TextHeading>
            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-4">
                <StatsCard title="Total Mcqs" total={stats.total} />
                <StatsCard title="Today" total={stats.today} />
                <StatsCard title="This Week" total={stats.this_week} />
                <StatsCard
                    title={`Top Creator - ${stats.top_creator?.name}`}
                    total={stats.top_creator?.total_entries}
                />
            </div>
            <section className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min">
                <McqsTable
                    tableData={mcqs}
                    filters={filters}
                    url={mcqsRoute.index().url}
                />
            </section>
        </AdminLayout>
    );
}
