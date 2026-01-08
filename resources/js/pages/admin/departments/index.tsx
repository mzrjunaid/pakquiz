import { TextHeading } from '@/components/ui/typography';
import { CommonFilters, DepartmentResource, Stats } from '@/types/admin';
import AdminLayout from '../components/admin-layout';
import StatsCard from '../components/stats-card';

export default function DepartmentsIndex({
    departments,
    filters,
    stats,
}: {
    departments: DepartmentResource;
    filters: CommonFilters;
    stats: Stats;
}) {
    return (
        <AdminLayout title="Departments List">
            <TextHeading as="h1" size="xl" textColor="primary">
                Department List
            </TextHeading>
            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-4">
                <StatsCard title="Total Departments" total={stats.total} />
                <StatsCard title="Today" total={stats.today} />
                <StatsCard title="This Week" total={stats.this_week} />
                <StatsCard
                    title={`Top Creator - ${stats.top_creator?.name}`}
                    total={stats.top_creator?.total_services}
                />
            </div>
            <div className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min">
                <pre>{JSON.stringify(departments, null, 2)}</pre>
            </div>
        </AdminLayout>
    );
}
