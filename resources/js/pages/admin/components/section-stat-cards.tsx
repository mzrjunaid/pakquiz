import { DashboardStats } from '@/types/admin';
import StatsCard from './stats-card';

interface SectionCardsProps {
    stats: DashboardStats;
}

export function SectionCards({ stats }: SectionCardsProps) {
    return (
        <section>
            <h2 className="my-2 text-lg font-semibold">Overview</h2>
            <div className="grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:grid-cols-4 lg:px-6 xl:grid-cols-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
                {Object.entries(stats.overview).map(([key, stat]) => (
                    <StatsCard
                        key={key}
                        title={stat.title}
                        description={stat.description}
                        total={stat.total}
                    />
                ))}
            </div>

            <h2 className="my-2 text-lg font-semibold">Activity</h2>
            <div className="grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:grid-cols-4 lg:px-6 xl:grid-cols-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
                {Object.entries(stats.activity).map(([key, stat]) => (
                    <StatsCard
                        key={key}
                        title={stat.title}
                        total={stat.total}
                    />
                ))}
            </div>

            <h2 className="my-2 text-lg font-semibold">Qulaity</h2>
            <div className="grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:grid-cols-4 lg:px-6 xl:grid-cols-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
                {Object.entries(stats.quality).map(([key, stat]) => (
                    <StatsCard
                        key={key}
                        title={stat.title}
                        total={stat.total}
                    />
                ))}
            </div>
        </section>
    );
}
