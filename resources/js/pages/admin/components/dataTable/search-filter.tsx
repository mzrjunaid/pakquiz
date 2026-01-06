import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchFiltersProps } from '@/types/testing-service';
import { Search, X } from 'lucide-react';

export function SearchFilters({
    searchValues,
    onSearchValuesChange,
    onSearch,
    onClear,
    hasActiveFilters,
}: SearchFiltersProps) {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <Input
                        type="text"
                        value={searchValues.search}
                        onChange={(e) =>
                            onSearchValuesChange({ search: e.target.value })
                        }
                        onKeyDown={handleKeyPress}
                        placeholder="Search by name..."
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Short Name
                    </label>
                    <Input
                        type="text"
                        value={searchValues.short_name}
                        onChange={(e) =>
                            onSearchValuesChange({ short_name: e.target.value })
                        }
                        onKeyDown={handleKeyPress}
                        placeholder="Search by short name..."
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Created By
                    </label>
                    <Input
                        type="text"
                        value={searchValues.created_by}
                        onChange={(e) =>
                            onSearchValuesChange({ created_by: e.target.value })
                        }
                        onKeyDown={handleKeyPress}
                        placeholder="Search by creator..."
                    />
                </div>
                <div className="flex items-end gap-2">
                    <Button onClick={onSearch} variant="default">
                        <div className="flex items-center justify-center gap-2">
                            <Search className="h-4 w-4" />
                            Search
                        </div>
                    </Button>
                    {hasActiveFilters && (
                        <Button
                            onClick={onClear}
                            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
