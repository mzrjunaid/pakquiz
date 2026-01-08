import { TextHeading } from '@/components/ui/typography';
import { CommonFilters, Stats, TestingServiceResource } from '@/types/admin';
import AdminLayout from '../components/admin-layout';

import testingServicesRoute from '@/routes/admin/testing-services';

import StatsCard from '../components/stats-card';
import TestingServicesTable from './components/data-table-index';

export default function TestingServicesIndex({
    testingServices,
    filters,
    stats,
}: {
    testingServices: TestingServiceResource;
    filters: CommonFilters;
    stats: Stats;
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
            <section className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min">
                <TestingServicesTable
                    testingServices={testingServices}
                    filters={filters}
                    url={testingServicesRoute.index().url}
                />
            </section>
        </AdminLayout>
    );
}
