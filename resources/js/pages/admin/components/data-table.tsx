import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
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
import { useColumnVisibility } from '@/hooks/use-column-visibility';
import { ServerTableParams } from '@/hooks/use-server-table';
import { PaginationMeta } from '@/types/pagination';
import { ChevronDown } from 'lucide-react';

export type DataTableFilter<T> = {
    key: keyof T | string; // allow server-only keys like "name"
    label: string;
    debounce?: boolean; // default true for text fields
};

interface DataTableProps<TData> {
    storageKey: string; // for column visibility persistence
    data: TData[];
    columns: ColumnDef<TData>[];
    meta: PaginationMeta;

    filters?: DataTableFilter<TData>[];
    values: ServerTableParams;

    // server actions
    onFilterChange: (key: string, value?: string) => void;
    onFilterChangeDebounced?: (key: string, value?: string) => void;
    onPageChange: (page: number) => void;

    // sorting (optional)
    sort?: string;
    direction?: string;
    onSort?: (column: string) => void;
}

export function DataTable<TData>({
    storageKey,
    data,
    columns,
    meta,
    filters = [],
    values,
    onFilterChange,
    onFilterChangeDebounced,
    onPageChange,
    sort,
    direction,
    onSort,
}: DataTableProps<TData>) {
    const { visibility, setVisibility } = useColumnVisibility(storageKey);

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: { columnVisibility: visibility },
        onColumnVisibilityChange: setVisibility,
        meta: {
            serverSort: { sort, direction, onSort },
        },
    });

    const formatColumnLabel = (id: string) =>
        id.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <div className="space-y-4 px-3 py-6">
            {/* Filters + Columns */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                {filters.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {filters.map((filter) => {
                            const key = String(filter.key);
                            const val = values[key] ?? '';
                            const useDebounce = filter.debounce !== false;

                            return (
                                <Input
                                    key={key}
                                    placeholder={filter.label}
                                    value={val}
                                    onChange={(e) => {
                                        const v = e.target.value;
                                        if (
                                            useDebounce &&
                                            onFilterChangeDebounced
                                        ) {
                                            onFilterChangeDebounced(key, v);
                                        } else {
                                            onFilterChange(key, v);
                                        }
                                    }}
                                    className="max-w-xs"
                                />
                            );
                        })}
                    </div>
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

            {/* Table */}
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
                                                  // You can pass sort metadata via meta if needed:
                                                  {
                                                      ...header.getContext(),
                                                      // ts-expect-error - optional extra context for headers if you want
                                                      serverSort: {
                                                          sort,
                                                          direction,
                                                          onSort,
                                                      },
                                                  },
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
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
            <div className="flex items-center justify-end gap-2 py-2">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={meta.current_page === 1}
                    onClick={() => onPageChange(meta.current_page - 1)}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    disabled={meta.current_page === meta.last_page}
                    onClick={() => onPageChange(meta.current_page + 1)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
