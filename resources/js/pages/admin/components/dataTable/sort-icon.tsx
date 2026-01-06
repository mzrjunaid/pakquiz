import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

interface SortIconProps {
    column: string;
    currentSortBy?: string;
    currentSortOrder?: 'asc' | 'desc';
}

export function SortIcon({
    column,
    currentSortBy,
    currentSortOrder,
}: SortIconProps) {
    if (currentSortBy !== column) {
        return <ArrowUpDown className="h-4 w-4 text-gray-400" />;
    }
    return currentSortOrder === 'asc' ? (
        <ArrowUp className="h-4 w-4 text-blue-600" />
    ) : (
        <ArrowDown className="h-4 w-4 text-blue-600" />
    );
}
