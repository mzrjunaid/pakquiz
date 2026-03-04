import { LucideIcon } from 'lucide-react';
import { Seo } from '..';
import { Mcq } from './mcq';

export interface HomeProps {
    stats: Stats;
    canRegister?: boolean;
    seo: Seo;
    departments_list: Department[];
    heroSectionMcqs: {
        data: Mcq[];
    }
    current_affairs: {
        id: number;
        name: string;
        slug: string;
        description: string;
        topics: Topic[];
    };
    subjects_list: Subject[];
    latestPapers: LatestPapers[];
    latestMcqs: {
        data: Mcq[];
    };
}

export interface Topic {
    id: number;
    name: string;
    slug: string;
    subject_id: number;
}

export interface Department {
    name: string;
    slug: string;
}

export interface Subject {
    name: string;
    slug: string;
}
export interface LatestPapers {
    name: string;
    slug: string;
    schedule_at: string;
    paper_year: string;
}

export interface Stats {
    mcqs: number;
    papers: number;
    subjects: number;
    topics: number;
    departments: number;
    tags: number;
    users: number;
}

export interface UiStats {
    number: string;
    label: string;
    icon: LucideIcon;
}
