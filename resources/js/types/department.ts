import { SimpleUser } from './user';

export interface DeptPaper {
    name: string;
    slug: string;
}
export interface Department {
    id: number;
    name: string;
    description: string;
    slug: string;
    type: string;
    papers: DeptPaper[];
    created_by: SimpleUser;
    created_at: string;
    updated_at: string;
}
