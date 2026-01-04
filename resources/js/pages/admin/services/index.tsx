import { TextHeading } from '@/components/ui/typography';
import { TestingServiceResource } from '@/types/admin';
import {
    TestingService,
    TestingServiceFilters,
    TestingServiceStats,
} from '@/types/testing-service';
import AdminLayout from '../components/admin-layout';
import { DataTable } from '../components/data-table';

import { ServerSortableHeader } from '@/components/table/server-sortable-header';
import TextLink from '@/components/text-link';
import { useServerTable } from '@/hooks/use-server-table';
import testingServicesRoute from '@/routes/admin/testing-services';
import { ColumnDef } from '@tanstack/react-table';
import StatsCard from '../components/stats-card';

export const testingServiceColumns: ColumnDef<TestingService>[] = [
    {
        accessorKey: 'id',
        header: ({ table }) => {
            // We injected serverSort into header context above (optional)
            // @ts-expect-error optional injected field
            const s = table.options.meta?.serverSort;
            // If you prefer: pass sort/direction/onSort directly instead of meta injection.
            return s?.onSort ? (
                <ServerSortableHeader
                    label="ID"
                    column="id"
                    sort={s.sort}
                    direction={s.direction}
                    onSort={s.onSort}
                />
            ) : (
                'ID'
            );
        },
    },
    {
        accessorKey: 'name',
        header: ({ table }) => {
            // @ts-expect-error optional injected field
            const s = table.options.meta?.serverSort;
            return s?.onSort ? (
                <ServerSortableHeader
                    label="Name"
                    column="name"
                    sort={s.sort}
                    direction={s.direction}
                    onSort={s.onSort}
                />
            ) : (
                'Name'
            );
        },
        cell: ({ row }) => {
            const service = row.original;
            return (
                <TextLink href={testingServicesRoute.show(service.slug)}>
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
    {
        accessorKey: 'created_at',
        header: ({ table }) => {
            // @ts-expect-error optional injected field
            const s = table.options.meta?.serverSort;
            return s?.onSort ? (
                <ServerSortableHeader
                    label="Created At"
                    column="created_at"
                    sort={s.sort}
                    direction={s.direction}
                    onSort={s.onSort}
                />
            ) : (
                'Created At'
            );
        },
    },
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
    const table = useServerTable({
        route: testingServicesRoute.index().url,
        defaults: {
            per_page: 10,
            direction: 'asc',
        },
        debounceMs: 350,
    });

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
                    storageKey="admin.testing-services.table.columns"
                    data={testingServices.data}
                    columns={testingServiceColumns}
                    meta={testingServices.meta}
                    filters={[
                        {
                            key: 'name',
                            label: 'Search by name',
                            debounce: true,
                        },
                        {
                            key: 'short_name',
                            label: 'Short name',
                            debounce: true,
                        },
                    ]}
                    values={table.params}
                    onFilterChange={table.setFilter}
                    onFilterChangeDebounced={(k, v) =>
                        table.debouncedSetFilter(k, v)
                    }
                    onPageChange={table.paginate}
                    sort={String(table.params.sort ?? '')}
                    direction={String(table.params.direction ?? 'asc')}
                    onSort={table.sort}
                />
                <pre>{JSON.stringify(filters, null, 2)}</pre>
                <pre>{JSON.stringify(testingServices, null, 2)}</pre>
            </section>
        </AdminLayout>
    );
}
