import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ResourcePaginator } from '@/types/pagination';
import { TestingService, TestingServiceFilters } from '@/types/testing-service';
import { router } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowUp,
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Search,
    X,
} from 'lucide-react';
import { useState } from 'react';

export default function TestingServicesTable({
    testingServices,
    filters = {},
    url,
}: {
    testingServices: ResourcePaginator<TestingService>;
    filters: TestingServiceFilters;
    url: string;
}) {
    const { data, meta } = testingServices;
    const { current_page, last_page, per_page, total, from, to } = meta;

    const [searchValues, setSearchValues] = useState({
        search: filters.search || '',
        short_name: filters.short_name || '',
        created_by: filters.created_by || '',
    });

    const updateFilters = (newFilters) => {
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

    const handleSort = (column) => {
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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
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

    const hasActiveFilters =
        filters.search || filters.short_name || filters.created_by;

    const SortIcon = ({ column }) => {
        if (filters.sort_by !== column) {
            return <ArrowUpDown className="h-4 w-4 text-gray-400" />;
        }
        return filters.sort_order === 'asc' ? (
            <ArrowUp className="h-4 w-4 text-blue-600" />
        ) : (
            <ArrowDown className="h-4 w-4 text-blue-600" />
        );
    };

    const columns = [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'short_name', label: 'Short Name', sortable: true },
        { key: 'created_by', label: 'Created By', sortable: false },
        { key: 'created_at', label: 'Created At', sortable: true },
    ];

    return (
        <div className="w-full space-y-4">
            {/* Search Filters */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            value={searchValues.search}
                            onChange={(e) =>
                                setSearchValues({
                                    ...searchValues,
                                    search: e.target.value,
                                })
                            }
                            onKeyDown={handleKeyPress}
                            placeholder="Search by name..."
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Short Name
                        </label>
                        <input
                            type="text"
                            value={searchValues.short_name}
                            onChange={(e) =>
                                setSearchValues({
                                    ...searchValues,
                                    short_name: e.target.value,
                                })
                            }
                            onKeyDown={handleKeyPress}
                            placeholder="Search by short name..."
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Created By
                        </label>
                        <input
                            type="text"
                            value={searchValues.created_by}
                            onChange={(e) =>
                                setSearchValues({
                                    ...searchValues,
                                    created_by: e.target.value,
                                })
                            }
                            onKeyPress={handleKeyPress}
                            placeholder="Search by creator..."
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-end gap-2">
                        <button
                            onClick={handleSearch}
                            className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Search className="h-4 w-4" />
                                Search
                            </div>
                        </button>
                        {hasActiveFilters && (
                            <Button
                                onClick={clearFilters}
                                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {columns.map((column) => (
                                    <th
                                        key={column.key}
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        {column.sortable ? (
                                            <Button
                                                onClick={() =>
                                                    handleSort(column.key)
                                                }
                                                className="group flex items-center gap-2 hover:text-gray-700 focus:outline-none"
                                            >
                                                {column.label}
                                                <SortIcon column={column.key} />
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
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {data && data.length > 0 ? (
                                data.map((service) => (
                                    <tr
                                        key={service.id}
                                        className="transition-colors hover:bg-gray-50"
                                    >
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
                                            {new Date(
                                                service.created_at,
                                            ).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                            <button className="mr-3 text-blue-600 hover:text-blue-900">
                                                Edit
                                            </button>
                                            <button className="text-red-600 hover:text-red-900">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
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
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-2 py-3 shadow-sm">
                <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{from || 0}</span>{' '}
                        to <span className="font-medium">{to || 0}</span> of{' '}
                        <span className="font-medium">{total}</span> results
                    </p>

                    <Select
                        onValueChange={(value) =>
                            updateFilters({ per_page: value, page: 1 })
                        }
                        defaultValue={per_page.toString()}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            {[5, 10, 25, 50, 100].map((size) => (
                                <SelectItem value={size.toString()} key={size}>
                                    {size} / page
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        onClick={() => updateFilters({ page: 1 })}
                        disabled={current_page === 1}
                        variant="outline"
                    >
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        onClick={() =>
                            updateFilters({ page: current_page - 1 })
                        }
                        disabled={current_page === 1}
                        variant="outline"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="px-4 text-sm font-medium text-gray-700">
                        Page {current_page} of {last_page}
                    </span>
                    <Button
                        onClick={() =>
                            updateFilters({ page: current_page + 1 })
                        }
                        disabled={current_page === last_page}
                        variant="outline"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        onClick={() => updateFilters({ page: last_page })}
                        disabled={current_page === last_page}
                        variant="outline"
                    >
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
