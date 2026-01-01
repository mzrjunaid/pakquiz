import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
    type ColumnFiltersState,
    type RowData,
    type SortingState,
    type VisibilityState,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { PaginationLinks, PaginationMeta } from '@/types/pagination';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { TableFilters } from '../services';

export type DataTableFilter<T> = {
    key: keyof T;
    label: string;
    type?: 'text' | 'select';
    options?: { label: string; value: string }[]; // for select
};

interface DataTableProps<TData extends RowData> {
    data: TData[];
    columns: ColumnDef<TData>[];
    filterColumn?: keyof TData; // optional: which column to filter via search input
    className?: string;
    meta: PaginationMeta;
    links: PaginationLinks;

    filters?: DataTableFilter<TData>[];
    filterValues?: TableFilters;

    onFilterChange?: (filters: Record<string, string>) => void;
}

export function DataTable<TData extends RowData>({
    data,
    columns,
    filterColumn,
    className,
    meta,
    filters = [],
    onFilterChange,
}: DataTableProps<TData>) {
    // Table states
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {},
    );
    const [rowSelection, setRowSelection] = useState({});
    const [values, setValues] = useState<Record<string, string>>({});

    const [pagination, setPagination] = useState({
        pageIndex: meta.current_page - 1,
        pageSize: meta.per_page,
    });

    function updateFilter(key: string, value: string) {
        const updated = { ...values, [key]: value };
        setValues(updated);
        onFilterChange?.(updated);
    }

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data: data,
        columns: columns,
        pageCount: meta.last_page,
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,

        state: {
            pagination,
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },

        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,

        onColumnFiltersChange: setColumnFilters,

        getCoreRowModel: getCoreRowModel(),
    });

    const formatColumnLabel = (id: string) =>
        id.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <div className={`px-3 py-6 ${className}`}>
            <div className="items mb-2 flex justify-between">
                {filters.length > 0 && (
                    <div className="flex gap-3">
                        {filters.map((filter) => (
                            <input
                                key={String(filter.key)}
                                placeholder={filter.label}
                                className="h-9 rounded-md border px-3 text-sm"
                                onChange={(e) =>
                                    updateFilter(
                                        String(filter.key),
                                        e.target.value,
                                    )
                                }
                            />
                        ))}
                    </div>
                )}

                {filterColumn && (
                    <Input
                        placeholder={`Filter ${filterColumn.toString()}...`}
                        value={
                            (table
                                .getColumn(filterColumn as string)
                                ?.getFilterValue() as string) ?? ''
                        }
                        onChange={(e) =>
                            table
                                .getColumn(filterColumn as string)
                                ?.setFilterValue(e.target.value)
                        }
                        className="max-w-sm"
                    />
                )}
                <div className="flex justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                Columns <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((col) => col.getCanHide())
                                .map((col) => (
                                    <DropdownMenuCheckboxItem
                                        key={col.id}
                                        checked={col.getIsVisible()}
                                        onCheckedChange={(val) =>
                                            col.toggleVisibility(!!val)
                                        }
                                        className="capitalize"
                                    >
                                        {formatColumnLabel(col.id)}
                                    </DropdownMenuCheckboxItem>
                                ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext(),
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{' '}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            setPagination((prev) => ({
                                ...prev,
                                pageIndex: prev.pageIndex - 1,
                            }))
                        }
                        disabled={meta.current_page === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            setPagination((prev) => ({
                                ...prev,
                                pageIndex: prev.pageIndex + 1,
                            }))
                        }
                        disabled={meta.current_page === meta.last_page}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
