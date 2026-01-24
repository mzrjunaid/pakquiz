import { CommonFilters, DataTableProps } from '@/types/admin';

import { cleanFilters } from '@/lib/clean-filters';
import { SeoMeta } from '@/types/seo';
import { router } from '@inertiajs/react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { DataTable } from '../../components/data-table';
import { DataTablePagination } from '../../components/dataTable/data-table-pagination';
import { DataTableToolbar } from '../../components/dataTable/search-filter';
import { getColumns } from './data-table-columns';

export default function SeoMetaTable({
    tableData,
    filters = {},
    url,
    onEdit,
    onDelete,
}: DataTableProps<SeoMeta>) {
    const { data, meta } = tableData;
    const { current_page, last_page, per_page, total, from, to } = meta;

    const [searchValues, setSearchValues] = useState({
        title: filters.title || '',
        page_type: filters.page_type || '',
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
        setSearchValues({ title: '', page_type: '' });

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

    const hasActiveFilters = Boolean(filters.name || filters.page_type);

    const columns = getColumns({
        onEdit,
        onDelete,
        onSort: handleSort,
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
