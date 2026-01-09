import { TextHeading } from '@/components/ui/typography';
import subjectsRoute from '@/routes/admin/subjects';
import { CommonFilters, Stats, SubjectResource } from '@/types/admin';
import AdminLayout from '../components/admin-layout';
import StatsCard from '../components/stats-card';
import SubjectsTable from './components/data-table-index';

export default function SubjectsIndex({
    subjects,
    stats,
    filters,
}: {
    subjects: SubjectResource;
    filters: CommonFilters;
    stats: Stats;
}) {
    return (
        <AdminLayout title="Subjects List">
            <TextHeading as="h1" size="xl" textColor="primary">
                Subjects
            </TextHeading>
            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-4">
                <StatsCard title="Total Testing Services" total={stats.total} />
                <StatsCard title="Today" total={stats.today} />
                <StatsCard title="This Week" total={stats.this_week} />
                <StatsCard
                    title={`Top Creator - ${stats.top_creator?.name}`}
                    total={stats.top_creator?.total_services}
                />
            </div>
            <section className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min">
                <SubjectsTable
                    tableData={subjects}
                    filters={filters}
                    url={subjectsRoute.index().url}
                />
            </section>
        </AdminLayout>
    );
}
