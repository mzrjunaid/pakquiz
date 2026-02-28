import { SimpleUser } from '../user';
import { Paper } from './paper';

export interface TestingService {
    id: number;
    slug: string;
    name: string;
    short_name: string;
    papers_count: number;
    description: string;
    created_by: SimpleUser;
    created_at: string;
    updated_at: string | null;
    papers: Paper[];
}
