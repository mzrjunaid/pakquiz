// components/TestingServicesTable/TableHeader.tsx
export interface TableColumn {
    key: string;
    label: string;
    sortable: boolean;
}

interface TableHeaderProps {
    columns: TableColumn[];
    currentSortBy?: string;
    currentSortOrder?: 'asc' | 'desc';
    onSort: (column: string) => void;
}

export function TableHeader({
    columns,
    currentSortBy,
    currentSortOrder,
    onSort,
}: TableHeaderProps) {
    return (
        <thead className="bg-gray-50">
            <tr>
                {columns.map((column) => (
                    <th
                        key={column.key}
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                        {column.sortable ? (
                            <Button
                                onClick={() => onSort(column.key)}
                                className="group flex items-center gap-2 hover:text-gray-700 focus:outline-none"
                                variant="ghost"
                            >
                                {column.label}
                                <SortIcon
                                    column={column.key}
                                    currentSortBy={currentSortBy}
                                    currentSortOrder={currentSortOrder}
                                />
                            </Button>
                        ) : (
                            column.label
                        )}
                    </th>
                ))}
                <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Actions
                </th>
            </tr>
        </thead>
    );
}

// components/TestingServicesTable/TableRow.tsx
import { TestingService, TestingServiceFilters } from '@/types/testing-service';

interface TableRowProps {
    service: TestingService;
    onEdit?: (service: TestingService) => void;
    onDelete?: (service: TestingService) => void;
}

export function TableRow({ service, onEdit, onDelete }: TableRowProps) {
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <tr className="transition-colors hover:bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                #{service.id}
            </td>
            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                {service.name}
            </td>
            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    {service.short_name}
                </span>
            </td>
            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600">
                {service.created_by?.name || 'N/A'}
            </td>
            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600">
                {formatDate(service.created_at)}
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                <Button
                    onClick={() => onEdit?.(service)}
                    className="mr-3 p-0 text-blue-600 hover:text-blue-900"
                    variant="link"
                >
                    Edit
                </Button>
                <Button
                    onClick={() => onDelete?.(service)}
                    className="p-0 text-red-600 hover:text-red-900"
                    variant="link"
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}

// components/TestingServicesTable/TableBody.tsx

interface TableBodyProps {
    data: TestingService[];
    columns: TableColumn[];
    hasActiveFilters: boolean;
    onEdit?: (service: TestingService) => void;
    onDelete?: (service: TestingService) => void;
}

export function TableBody({
    data,
    columns,
    hasActiveFilters,
    onEdit,
    onDelete,
}: TableBodyProps) {
    if (!data || data.length === 0) {
        return (
            <tbody>
                <tr>
                    <td
                        colSpan={columns.length + 1}
                        className="px-6 py-16 text-center text-gray-500"
                    >
                        {hasActiveFilters
                            ? 'No services found matching your filters.'
                            : 'No services available.'}
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((service) => (
                <TableRow
                    key={service.id}
                    service={service}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </tbody>
    );
}

// components/TestingServicesTable/Pagination.tsx
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
    from: number | null;
    to: number | null;
    onPageChange: (page: number) => void;
    onPerPageChange: (perPage: number) => void;
}

export function Pagination({
    currentPage,
    lastPage,
    perPage,
    total,
    from,
    to,
    onPageChange,
    onPerPageChange,
}: PaginationProps) {
    const pageSizes = [5, 10, 25, 50, 100];

    return (
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-2 py-3 shadow-sm">
            <div className="flex items-center gap-4">
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{from || 0}</span> to{' '}
                    <span className="font-medium">{to || 0}</span> of{' '}
                    <span className="font-medium">{total}</span> results
                </p>

                <Select
                    onValueChange={(value) => onPerPageChange(Number(value))}
                    defaultValue={perPage.toString()}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Per page" />
                    </SelectTrigger>
                    <SelectContent>
                        {pageSizes.map((size) => (
                            <SelectItem value={size.toString()} key={size}>
                                {size} / page
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                <Button
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    variant="outline"
                >
                    <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    variant="outline"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="px-4 text-sm font-medium text-gray-700">
                    Page {currentPage} of {lastPage}
                </span>
                <Button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === lastPage}
                    variant="outline"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                    onClick={() => onPageChange(lastPage)}
                    disabled={currentPage === lastPage}
                    variant="outline"
                >
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

// components/TestingServicesTable/index.tsx
import { Button } from '@/components/ui/button';
import { ResourcePaginator } from '@/types/pagination';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { SearchFilters } from './dataTable/search-filter';
import { SortIcon } from './dataTable/sort-icon';
interface TestingServicesTableProps {
    testingServices: ResourcePaginator<TestingService>;
    filters?: TestingServiceFilters;
    url: string;
    onEdit?: (service: TestingService) => void;
    onDelete?: (service: TestingService) => void;
}

const COLUMNS: TableColumn[] = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'short_name', label: 'Short Name', sortable: true },
    { key: 'created_by', label: 'Created By', sortable: false },
    { key: 'created_at', label: 'Created At', sortable: true },
];

export default function TestingServicesTable({
    testingServices,
    filters = {},
    url,
    onEdit,
    onDelete,
}: TestingServicesTableProps) {
    const { data, meta } = testingServices;
    const { current_page, last_page, per_page, total, from, to } = meta;

    const [searchValues, setSearchValues] = useState({
        search: filters.search || '',
        short_name: filters.short_name || '',
        created_by: filters.created_by || '',
    });

    const updateFilters = (newFilters: Partial<TestingServiceFilters>) => {
        router.get(
            url,
            { ...filters, ...newFilters },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
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
        setSearchValues({ search: '', short_name: '', created_by: '' });
        router.get(
            url,
            {
                per_page: filters.per_page || 10,
            },
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

    const hasActiveFilters = Boolean(
        filters.search || filters.short_name || filters.created_by,
    );

    return (
        <div className="w-full space-y-4">
            <SearchFilters
                searchValues={searchValues}
                onSearchValuesChange={handleSearchValuesChange}
                onSearch={handleSearch}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
            />

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full divide-y divide-gray-200">
                        <TableHeader
                            columns={COLUMNS}
                            currentSortBy={filters.sort_by}
                            currentSortOrder={filters.sort_order}
                            onSort={handleSort}
                        />
                        <TableBody
                            data={data}
                            columns={COLUMNS}
                            hasActiveFilters={hasActiveFilters}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    </table>
                </div>
            </div>

            <Pagination
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
