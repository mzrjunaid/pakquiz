import { Overview, OverviewKeys } from '@/types/admin';
import StatsCard from './stats-card';

interface SectionCardsProps {
    overview: Record<OverviewKeys, Overview>;
}

export function SectionCards({ overview }: SectionCardsProps) {
    return (
        <div className="grid gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
            {Object.entries(overview).map(([key, stat]) => (
                <StatsCard
                    key={key}
                    title={stat.title}
                    description={stat.description}
                    total={stat.total}
                />
            ))}
        </div>
    );
}
