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
    sort_by?: string;
    sort_order?: 'asc' | 'desc';
    page?: number;
    per_page?: number;
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

export interface SearchFiltersProps {
    searchValues: {
        search: string;
        short_name: string;
        created_by: string;
    };
    onSearchValuesChange: (
        values: Partial<SearchFiltersProps['searchValues']>,
    ) => void;
    onSearch: () => void;
    onClear: () => void;
    hasActiveFilters: boolean;
}
