import { Paper } from './paper';
import { SimpleUser } from './user';

export interface Mcq {
    id: number;
    name: string;
    slug: string;
    created_by: SimpleUser;
    schedule_at: string;
    is_active: boolean;
    paper: Paper;
    subject: {
        name: string;
        slug: string;
    };
    topic: {
        name: string;
        slug: string;
    };
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}
