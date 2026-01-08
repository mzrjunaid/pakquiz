import { ColumnDef, Table } from '@tanstack/react-table';
import { CommonFilters } from './admin';

export type SerializableFilterValue = string | number;

export interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    searchValues: CommonFilters;
    onSearchValuesChange: (
        values: Partial<DataTableToolbarProps<TData>['searchValues']>,
    ) => void;
    onSearch: () => void;
    onClear: () => void;
    hasActiveFilters: boolean;
}
export interface DataTablePaginationProps<TData> {
    table: Table<TData>;
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
    from: number | null;
    to: number | null;
    onPageChange: (page: number) => void;
    onPerPageChange: (perPage: number) => void;
}

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export interface Filters {
    name?: string;
    is_active?: string;
    is_verified?: string;
    sort_by?: string;
    sort_order?: string;
    per_page?: number;
    page?: number;
}
