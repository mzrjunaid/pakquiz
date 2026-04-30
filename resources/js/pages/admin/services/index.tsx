import { TextHeading } from '@/components/ui/typography';
import { CommonFilters, Stats, TestingServiceResource } from '@/types/admin';
import AdminLayout from '../components/admin-layout';

import testingServicesRoute from '@/routes/admin/testing-services';

import { router } from '@inertiajs/react';
import StatsCard from '../components/stats-card';
import TestingServicesTable from './components/data-table-index';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

export default function TestingServicesIndex({
    testingServices,
    filters,
    stats,
}: {
    testingServices: TestingServiceResource;
    filters: CommonFilters;
    stats: Stats;
}) {
    const handleEdit = (service: TestingServiceResource['data'][number]) => {
        router.visit(testingServicesRoute.edit(service.slug).url);
    };
    return (
        <AdminLayout title="Testing Services List">
            <div className="flex items-center justify-between">
                <TextHeading as="h1" size="xl" textColor="primary">
                    Testing Services
                </TextHeading>
                <Button
                    onClick={() => router.visit(testingServicesRoute.create().url)}
                    variant={'default'}
                    size={'sm'}
                    className="flex items-center gap-2"
                >
                    <PlusIcon className="size-4" />
                    <span className="hidden sm:block">Create Testing Service</span>
                </Button>
            </div>
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
                <TestingServicesTable
                    tableData={testingServices}
                    filters={filters}
                    url={testingServicesRoute.index().url}
                    onEdit={handleEdit}
                />
            </section>
        </AdminLayout>
    );
}
