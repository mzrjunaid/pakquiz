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
import testingServices from '@/routes/admin/testing-services';
import { Paper } from '@/types/paper';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, FileText, MoreHorizontal, Pencil, Trash } from 'lucide-react';

interface ColumnsProps {
    onEdit?: (service: Paper) => void;
    onDelete?: (service: Paper) => void;
    onSort?: (column: string) => void;
    onGeneratePaper?: ({ paper, action }: { paper: Paper, action: 'generate' | 'regenerate' }) => void;
}

export const getColumns = ({
    onEdit,
    onDelete,
    onSort,
    onGeneratePaper,
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
                        #
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
            accessorKey: 'schedule_at',
            header: () => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => onSort?.('schedule_at')}
                        className="-ml-4"
                    >
                        Schedule
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => <span>{row.getValue('schedule_at')}</span>,
        },
        {
            accessorKey: 'department.name',
            header: () => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => onSort?.('department.name')}
                        className="-ml-4"
                    >
                        Department
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => {
                const department = row.original.department;
                return (
                    <TextLink href={departments.show(department?.slug)}>
                        {department?.name}
                    </TextLink>
                );
            },
        },
        {
            accessorKey: 'testing_service.name',
            header: () => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => onSort?.('testing_service.name')}
                        className="-ml-4"
                    >
                        Department
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => {
                const testing_service = row.original.testing_service;
                return (
                    testing_service && <TextLink href={testingServices.show(testing_service?.slug)}>
                        {testing_service?.name}
                    </TextLink>
                );
            },
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
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 cursor-pointer"
                            onClick={() => onEdit?.(service)}
                        >
                            <span className="sr-only">Edit</span>
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 cursor-pointer"
                            onClick={() => onGeneratePaper?.({ paper: service, action: 'generate' })}
                        >
                            <span className="sr-only">Generate Paper</span>
                            <FileText className="h-4 w-4" />
                        </Button>
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
                                <DropdownMenuItem onClick={() => onGeneratePaper?.({ paper: service, action: 'regenerate' })}>
                                    Regenerate Paper
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
                    </div>
                );
            },
        },
    ];
