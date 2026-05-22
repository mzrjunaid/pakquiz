import { SimpleUser } from './user';

export interface Topic {
    id: number;
    name: string;
    slug: string;
    description: string;
    subject_id: number;
    sort_order: number;
    created_by: SimpleUser;
    created_at: string;
    mcqs_count?: number;
}

export interface Subject {
    id: number;
    name: string;
    slug: string;
    description: string;
    is_active?: boolean;
    created_by: SimpleUser;
    created_at: string;
    updated_at: string;
    topics: Topic[];
}
