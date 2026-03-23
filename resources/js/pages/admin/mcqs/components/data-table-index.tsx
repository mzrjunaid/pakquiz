import { CommonFilters, DataTableProps } from '@/types/admin';

import { cleanFilters } from '@/lib/clean-filters';
import { Mcq } from '@/types/mcq';
import { router } from '@inertiajs/react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { DataTable } from '../../components/data-table';
import { DataTablePagination } from '../../components/dataTable/data-table-pagination';
import { DataTableToolbar } from '../../components/dataTable/search-filter';
import { getColumns } from './data-table-columns';

export default function McqsTable({
    tableData,
    filters = {},
    url,
    onEdit,
    generateOgImage,
    onDelete,
}: DataTableProps<Mcq>) {
    const [processingIds, setProcessingIds] = useState<number[]>([]);
    const { data, meta } = tableData;
    const { current_page, last_page, per_page, total, from, to } = meta;

    const [searchValues, setSearchValues] = useState({
        name: filters.name || '',
        subject: filters.subject || '',
        created_by: filters.created_by || '',
    });

    const updateFilters = (newFilters: Partial<CommonFilters>) => {
        const merged = {
            ...filters,
            ...newFilters,
        };

        const cleaned = cleanFilters(merged);

        router.get(url, cleaned, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });
    };

    const handleSort = (column: string) => {
        const newSortOrder =
            filters.sort_by === column && filters.sort_order === 'asc'
                ? 'desc'
                : 'asc';
        updateFilters({
            sort_by: column,
            sort_order: newSortOrder,
            page: 1,
        });
    };

    const handleSearch = () => {
        updateFilters({
            ...searchValues,
            page: 1,
        });
    };

    const handleSearchValuesChange = (values: Partial<typeof searchValues>) => {
        setSearchValues((prev) => ({ ...prev, ...values }));
    };

    const clearFilters = () => {
        setSearchValues({ name: '', subject: '', created_by: '' });

        router.get(
            url,
            { per_page: filters.per_page || 10 },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    const handlePageChange = (page: number) => {
        updateFilters({ page });
    };

    const handlePerPageChange = (perPage: number) => {
        updateFilters({ per_page: perPage, page: 1 });
    };

    useEffect(() => {
        if (!processingIds.length) return;

        const checkPending = () => {
            // Filter out MCQs that are already generated
            const pending = processingIds.filter((id) => {
                const mcq = tableData.data.find((m) => m.id === id);
                return !mcq?.has_og_image;
            });

            if (pending.length === 0) {
                toast.success('All OG Images Generated Successfully!');
                setProcessingIds([]); // Stop polling
                return;
            }

            // Poll again after 3 seconds
            setTimeout(() => {
                router.reload({
                    only: ['mcqs'],
                    replace: true,
                    onSuccess: () => {
                        toast.success('OG Image Generated Successfully!', {
                            id: 'og-image-generated',
                        });
                    },
                });
            }, 3000);
        };

        checkPending();
    }, [processingIds, tableData.data, router]);

    const hasActiveFilters = Boolean(filters.name || filters.created_by);

    const columns = getColumns({
        onEdit,
        onDelete,
        generateOgImage,
        onSort: handleSort,
        setProcessingIds,
    });

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        manualSorting: true,
    });

    return (
        <div className="space-y-4">
            <DataTableToolbar
                table={table}
                searchValues={searchValues}
                onSearchValuesChange={handleSearchValuesChange}
                onSearch={handleSearch}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
            />
            <DataTable columns={columns} data={data} />
            <DataTablePagination
                table={table}
                currentPage={current_page}
                lastPage={last_page}
                perPage={per_page}
                total={total}
                from={from}
                to={to}
                onPageChange={handlePageChange}
                onPerPageChange={handlePerPageChange}
            />
        </div>
    );
}
