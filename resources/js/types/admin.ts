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

export type ActivityKeys = 'mcqsToday' | 'mcqsThisWeek' | 'papersThisMonth';

export type QualityKeys =
    | 'mcqsWithoutOptions'
    | 'mcqsWithoutCorrectOption'
    | 'subjectsWithoutTopics'
    | 'papersWithoutMcqs';

export interface DashboardItem {
    id: number;
    title: string;
    slug: string;
    type: 'MCQ' | 'Paper';
    subject: string;
    created_at: string;
}

export interface DashboardStats {
    overview: Record<OverviewKeys, Overview>;
    activity: Record<ActivityKeys, Overview>;
    quality: Record<QualityKeys, Overview>;
}

export interface DashboardProps {
    stats: DashboardStats;
    latest: {
        items: DashboardItem[];
    };
}
