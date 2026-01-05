import { TextHeading } from '@/components/ui/typography';
import { TestingServiceResource } from '@/types/admin';
import {
    TestingServiceFilters,
    TestingServiceStats,
} from '@/types/testing-service';
import AdminLayout from '../components/admin-layout';

import testingServicesRoute from '@/routes/admin/testing-services';

import ServerDataTable from '../components/data-table';
import StatsCard from '../components/stats-card';

export default function TestingServicesIndex({
    testingServices,
    filters,
    stats,
}: {
    testingServices: TestingServiceResource;
    filters: TestingServiceFilters;
    stats: TestingServiceStats;
}) {
    return (
        <AdminLayout title="Testing Services List">
            <TextHeading as="h1" size="xl" textColor="primary">
                Testing Services
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
            <TextHeading as="h2" size="lg">
                List
            </TextHeading>
            <section className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <ServerDataTable
                    testingServices={testingServices}
                    filters={filters}
                    url={testingServicesRoute.index().url}
                />
                <pre>{JSON.stringify(filters, null, 2)}</pre>
                <pre>{JSON.stringify(testingServices, null, 2)}</pre>
            </section>
        </AdminLayout>
    );
}
