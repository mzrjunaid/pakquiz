import { SimpleUser } from './user';

export interface Department {
    id: number;
    name: string;
    slug: string;
    type: string;
    created_by: SimpleUser;
    created_at: string;
}
