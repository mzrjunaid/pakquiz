import { SimpleUser } from './user';

export interface Department {
    id: number;
    name: string;
    description: string;
    slug: string;
    type: 'government' | 'private';
    created_by: SimpleUser;
    created_at: string;
    updated_at: string;
}
