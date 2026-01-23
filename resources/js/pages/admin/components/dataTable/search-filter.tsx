import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableToolbarProps } from '@/types/data-table';

import { Search, X } from 'lucide-react';

export function DataTableToolbar<TData>({
    searchValues,
    onSearchValuesChange,
    onSearch,
    onClear,
    hasActiveFilters,
}: DataTableToolbarProps<TData>) {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div className="rounded-md bg-card p-4 shadow">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {(searchValues.name == '' || searchValues.name) && (
                    <div className="space-y-2">
                        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Name
                        </label>
                        <Input
                            placeholder="Search by name..."
                            value={searchValues.name}
                            onChange={(e) =>
                                onSearchValuesChange({ name: e.target.value })
                            }
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                )}
                {(searchValues.title == '' || searchValues.title) && (
                    <div className="space-y-2">
                        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Title
                        </label>
                        <Input
                            placeholder="Search by title..."
                            value={searchValues.title}
                            onChange={(e) =>
                                onSearchValuesChange({ title: e.target.value })
                            }
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                )}
                {(searchValues.short_name == '' || searchValues.short_name) && (
                    <div className="space-y-2">
                        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Short Name
                        </label>
                        <Input
                            placeholder="Search by short name..."
                            value={searchValues.short_name}
                            onChange={(e) =>
                                onSearchValuesChange({
                                    short_name: e.target.value,
                                })
                            }
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                )}
                {(searchValues.type == '' || searchValues.type) && (
                    <div className="space-y-2">
                        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Dept. Type
                        </label>
                        <Input
                            placeholder="Search by short name..."
                            value={searchValues.type}
                            onChange={(e) =>
                                onSearchValuesChange({
                                    type: e.target.value,
                                })
                            }
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                )}
                <div className="space-y-2">
                    <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Created By
                    </label>
                    <Input
                        placeholder="Search by creator..."
                        value={searchValues.created_by}
                        onChange={(e) =>
                            onSearchValuesChange({ created_by: e.target.value })
                        }
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <div className="flex items-end gap-2">
                    <Button onClick={onSearch} className="flex-1">
                        <Search className="mr-2 h-4 w-4" />
                        Search
                    </Button>
                    {hasActiveFilters && (
                        <Button onClick={onClear} variant="outline" size="icon">
                            <X className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
