import { SimpleUser } from './user';

export interface TestingService {
    id: number;
    name: string;
    slug: string;
    short_name: string;
    created_by: SimpleUser;
    created_at: string;
}
