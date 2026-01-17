export interface Overview {
    title: string;
    description?: string;
    total?: number;
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

export interface CommonFilters {
    name?: string;
    short_name?: string;
    type?: string;
    created_by?: string;
    sort_by?: string;
    sort_order?: 'asc' | 'desc';
    page?: number;
    per_page?: number;
}

export interface Stats {
    total: number;
    today: number;
    this_week: number;
    top_creator?: {
        id: number;
        name: string;
        total_entries: number;
    };
}

export interface DataTableProps<TData> {
    tableData: ResourcePaginator<TData>;
    filters?: CommonFilters;
    url: string;
    onEdit?: (service: TData) => void;
    onDelete?: (service: TData) => void;
}
type FilterValue = string | number | boolean | null | undefined;

import { Department } from './department';
import { Mcq } from './mcq';
import { ResourcePaginator } from './pagination';
import { Paper } from './paper';
import { Subject } from './subject';
import { TestingService } from './testing-service';

export type QueryFilters = Record<string, FilterValue>;
export type TestingServiceResource = ResourcePaginator<TestingService>;
export type DepartmentResource = ResourcePaginator<Department>;
export type SubjectResource = ResourcePaginator<Subject>;
export type PaperResource = ResourcePaginator<Paper>;
export type McqsResource = ResourcePaginator<Mcq>;
