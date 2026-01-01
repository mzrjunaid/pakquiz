import { TextHeading } from '@/components/ui/typography';
import { TestingServiceResource } from '@/types/admin';
import {
    TestingService,
    TestingServiceFilters,
    TestingServiceStats,
} from '@/types/testing-service';
import AdminLayout from '../components/admin-layout';
import { DataTable, DataTableFilter } from '../components/data-table';

import TextLink from '@/components/text-link';
import testingServices from '@/routes/admin/testing-services';
import { ColumnDef } from '@tanstack/react-table';
import StatsCard from '../components/stats-card';

export const testingServiceColumns: ColumnDef<TestingService>[] = [
    { accessorKey: 'id', header: 'ID' },
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => {
            const service = row.original;
            return (
                <TextLink href={testingServices.show(service.slug)}>
                    {service.name}
                </TextLink>
            );
        },
    },
    { accessorKey: 'short_name', header: 'Short Name' },
    {
        id: 'created_by',
        header: 'Created By',
        accessorFn: (row) => row.created_by?.name ?? '-',
    },
    { accessorKey: 'created_at', header: 'Created At' },
];

export type TableFilters = {
    search?: string;
    short_name?: string;
    created_by?: string;
};

export default function TestingServicesIndex({
    testingServices,
    filters,
    stats,
}: {
    testingServices: TestingServiceResource;
    filters: TestingServiceFilters;
    stats: TestingServiceStats;
}) {

    const filters: DataTableFilter<TestingService>[] = [
    { key: 'name', label: 'Search by name' },
    { key: 'short_name', label: 'Short name' },
];
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
                <DataTable<TestingService>
                    data={testingServices.data}
                    columns={testingServiceColumns}
                    filterColumn="name"
                    meta={testingServices.meta}
                    links={testingServices.links}
                    filters={[
        { key: 'search', label: 'Search name' },
        { key: 'short_name', label: 'Short name' },
        { key: 'created_by', label: 'Created by' },
    ]}
                    filterValues= TableFilters;
                    onFilterChange={(filters: TableFilters) => {
                        router.get(
                            route('admin.testing-services.index'),
                            filters,
                            { preserveState: true },
                        );
                    }}
                />
                <pre>{JSON.stringify(filters, null, 2)}</pre>
                <pre>{JSON.stringify(testingServices, null, 2)}</pre>
            </section>
        </AdminLayout>
    );
}
