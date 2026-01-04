import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react';

type Props = {
    label: string;
    column: string; // server column key
    sort?: string;
    direction?: string;
    onSort: (column: string) => void;
    className?: string;
};

export function ServerSortableHeader({
    label,
    column,
    sort,
    direction,
    onSort,
    className,
}: Props) {
    const active = sort === column;
    const dir = (direction ?? 'asc').toLowerCase();

    return (
        <button
            type="button"
            onClick={() => onSort(column)}
            className={`inline-flex items-center gap-2 hover:underline ${className ?? ''}`}
        >
            <span>{label}</span>
            {!active && <ChevronsUpDown className="h-4 w-4 opacity-60" />}
            {active && dir === 'asc' && <ArrowUp className="h-4 w-4" />}
            {active && dir === 'desc' && <ArrowDown className="h-4 w-4" />}
        </button>
    );
}
