export interface Overview {
    title: string;
    description?: string;
    total: number;
}

export type OverviewKeys =
    | 'departments'
    | 'testingServices'
    | 'subjects'
    | 'topics'
    | 'papers'
    | 'mcqs';

export type ActivityStats = Record<
    'mcqsToday' | 'mcqsThisWeek' | 'papersThisMonth',
    number
>;
export type QualityStats = Record<
    | 'mcqsWithoutOptions'
    | 'mcqsWithoutCorrectOption'
    | 'subjectsWithoutTopics'
    | 'papersWithoutMcqs',
    number
>;

export interface DashboardStats {
    overview: Record<OverviewKeys, Overview>;
    activity: ActivityStats;
    quality: QualityStats;
}

export interface DashboardProps {
    dashboardStats: DashboardStats;
}
