import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import departments from '@/routes/admin/departments';
import { Paper } from '@/types/paper';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

interface ColumnsProps {
    onEdit?: (service: Paper) => void;
    onDelete?: (service: Paper) => void;
    onSort?: (column: string) => void;
}

export const getColumns = ({
    onEdit,
    onDelete,
    onSort,
}: ColumnsProps): ColumnDef<Paper>[] => [
    {
        accessorKey: 'id',
        header: () => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => onSort?.('id')}
                    className="-ml-4"
                >
                    ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="font-medium">{row.getValue('id')}</div>
        ),
    },
    {
        accessorKey: 'name',
        header: () => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => onSort?.('name')}
                    className="-ml-4"
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <TextLink href={departments.show(row.original.slug)}>
                {row.getValue('name')}
            </TextLink>
        ),
    },
    {
        accessorKey: 'type',
        header: () => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => onSort?.('type')}
                    className="-ml-4"
                >
                    Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                {row.getValue('type')}
            </span>
        ),
    },
    {
        accessorKey: 'created_by',
        header: 'Created By',
        cell: ({ row }) => {
            const createdBy = row.original.created_by;
            return <div>{createdBy?.name || 'N/A'}</div>;
        },
    },
    {
        accessorKey: 'created_at',
        header: () => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => onSort?.('created_at')}
                    className="-ml-4"
                >
                    Created At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const date = new Date(row.getValue('created_at'));
            return (
                <div>
                    {date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </div>
            );
        },
    },
    {
        id: 'actions',
        header: 'Actions',

        cell: ({ row }) => {
            const service = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    service.id.toString(),
                                )
                            }
                        >
                            Copy ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => onEdit?.(service)}>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => onDelete?.(service)}
                            className="text-red-600"
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
