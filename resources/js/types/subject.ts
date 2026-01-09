import { SimpleUser } from './user';

export interface Topic {
    id: number;
    name: string;
    slug: string;
    description: string;
    created_by: SimpleUser;
    created_at: string;
}

export interface Subject {
    id: number;
    name: string;
    slug: string;
    created_by: SimpleUser;
    created_at: string;
    topics: Topic[];
}
