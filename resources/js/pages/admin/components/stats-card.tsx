import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Overview } from '@/types/admin';

export default function StatsCard({ title, total, description }: Overview) {
    return (
        <Card className="@container/card gap-3 py-3">
            <CardHeader>
                <CardDescription className="font-extrabold text-xs">{title}</CardDescription>
            </CardHeader>
            <CardContent>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {total}
                </CardTitle>
            </CardContent>
            {description && (
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    {/* <div className="line-clamp-1 flex gap-2 font-medium">Trending up this month</div> */}
                    <div className="text-muted-foreground text-xs">{description}</div>
                </CardFooter>
            )}
        </Card>
    );
}
