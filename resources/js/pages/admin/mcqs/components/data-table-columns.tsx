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
import mcqs from '@/routes/admin/mcqs';
import papers from '@/routes/admin/papers';
import subjects from '@/routes/admin/subjects';
import { Mcq } from '@/types/mcq';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

interface ColumnsProps {
    onEdit?: (service: Mcq) => void;
    onDelete?: (service: Mcq) => void;
    onSort?: (column: string) => void;
}

export const getColumns = ({
    onEdit,
    onDelete,
    onSort,
}: ColumnsProps): ColumnDef<Mcq>[] => [
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
        accessorKey: 'question',
        header: () => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => onSort?.('question')}
                    className="-ml-4"
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <TextLink href={mcqs.show(row.original.slug)}>
                {row.getValue('question')}
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
        accessorKey: 'paper.name',
        header: () => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => onSort?.('paper.name')}
                    className="-ml-4"
                >
                    Paper
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const paper = row.original.paper;
            const slug = paper?.slug;
            return <TextLink href={papers.show(slug)}>{paper?.name}</TextLink>;
        },
    },
    {
        accessorKey: 'subject.name',
        header: () => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => onSort?.('subject.name')}
                    className="-ml-4"
                >
                    Subject
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const subject = row.original.subject;
            const slug = subject?.slug;
            return (
                <TextLink href={subjects.show(slug)}>{subject?.name}</TextLink>
            );
        },
    },
    {
        accessorKey: 'topic.name',
        header: () => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => onSort?.('topic.name')}
                    className="-ml-4"
                >
                    Topic
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const topic = row.original.topic;
            return <span>{topic?.name}</span>;
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
                                    window.location.origin +
                                        mcqs.show(service.slug).url,
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
