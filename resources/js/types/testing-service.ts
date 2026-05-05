import { SimpleUser } from './user';

export interface TestingService {
    id: number;
    name: string;
    slug: string;
    description: string;
    short_name: string;
    created_by: SimpleUser;
    created_at: string;
}
