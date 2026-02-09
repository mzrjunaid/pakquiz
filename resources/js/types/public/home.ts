import { LucideIcon } from 'lucide-react';
import { Mcq } from './mcq';

export interface HomeProps {
    stats: Stats;
    canRegister?: boolean;
    seo: any;
    subjects: any;
    latestPapers: any;
    latestMcqs: {
        data: Mcq[];
    };
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
