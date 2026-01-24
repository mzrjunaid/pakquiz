import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
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
                {(searchValues.page_type == '' || searchValues.page_type) && (
                    <div className="space-y-2">
                        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Page Type
                        </label>
                        <Select
                            onValueChange={(value) =>
                                onSearchValuesChange({
                                    page_type: value,
                                })
                            }
                            value={searchValues.page_type}
                        >
                            <SelectTrigger className="min-w-sm">
                                <SelectValue placeholder="Select Page Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Page Type</SelectLabel>
                                    {[
                                        'Mcq',
                                        'Paper',
                                        'Subject',
                                        'Topic',
                                        'TestingService',
                                        'Quiz',
                                        'Home',
                                        'About',
                                        'Contact',
                                        'PrivacyPolicy',
                                        'TermsAndConditions',
                                        'JoinUs',
                                        'NotFound',
                                        'HelpCenter',
                                        'Faq',
                                        'Dashboard',
                                        'Login',
                                        'Register',
                                        'Subscription',
                                    ].map((type) => (
                                        <SelectItem
                                            key={type}
                                            value={type}
                                            className="w-full px-4 py-2 text-left hover:bg-accent hover:text-accent-foreground"
                                        >
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                )}
                {(searchValues.created_by == '' || searchValues.created_by) && (
                    <div className="space-y-2">
                        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Created By
                        </label>
                        <Input
                            placeholder="Search by creator..."
                            value={searchValues.created_by}
                            onChange={(e) =>
                                onSearchValuesChange({
                                    created_by: e.target.value,
                                })
                            }
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                )}
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
