import TextLink from '@/components/text-link';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import mcqs from '@/routes/admin/mcqs';
import papers from '@/routes/admin/papers';
import { DashboardItem } from '@/types/admin';

interface Props {
    latest: { items: DashboardItem[] };
}

export default function DashboardTable({ latest }: Props) {
    return (
        <Table>
            <TableCaption>A list of your recent activities.</TableCaption>
            <TableHeader>
                <TableRow className="*:text-center">
                    <TableHead>#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead className="!text-right">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {latest.items.length === 0 && (
                    <TableRow className="*:text-center">
                        <TableCell colSpan={4} className="text-center">
                            No recent data
                        </TableCell>
                    </TableRow>
                )}

                {latest.items.map((item, index) => (
                    <TableRow
                        key={`${item.type}-${item.id}`}
                        className="*:text-center"
                    >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="font-medium !text-left">
                            <TextLink
                                href={
                                    item.type === 'MCQ'
                                        ? mcqs.show(item.slug)
                                        : papers.show(item.slug)
                                }
                            >
                                {item.title}
                            </TextLink>
                        </TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.subject}</TableCell>
                        <TableCell className="!text-right">
                            {item.created_at}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
