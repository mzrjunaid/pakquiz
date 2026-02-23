import { Paper } from './paper';
import { Option, Tag } from './public/mcq';
import { SimpleUser } from './user';

export interface Mcq {
    id: number;
    question: string;
    slug: string;
    explanation: string;
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
    options: Option[];
    tags: Tag[];
    type: string;
    difficulty: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}
