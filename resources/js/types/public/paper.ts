import { SimpleUser } from '../user';

export interface Paper {
    id: number;
    name: string;
    slug: string;
    year: number;
    schedule_at: string;
    is_active: boolean;
    department: {
        name: string;
        slug: string;
    };
    subject: {
        name: string;
        slug: string;
    };
    testing_service: {
        name: string;
        slug: string;
    };
    created_by: SimpleUser;
    created_at: string;
}
