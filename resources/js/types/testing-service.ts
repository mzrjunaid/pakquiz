import { SimpleUser } from './user';

export interface TestingService {
    id: number;
    name: string;
    slug: string;
    short_name: string;
    created_by: SimpleUser;
    created_at: string;
}

export interface TestingServiceFilters {
    search?: string;
    short_name?: string;
    created_by?: string;
    per_page?: number;
    sort_by?: string;
    sort_order?: string;
}

export interface TestingServiceStats {
    total: number;
    today: number;
    this_week: number;
    top_creator?: {
        id: number;
        name: string;
        total_services: number;
    };
}
