import { CommonFilters } from './admin';
import { ResourcePaginator } from './pagination';
import { SimpleUser } from './user';

export interface TestingService {
    id: number;
    name: string;
    slug: string;
    short_name: string;
    created_by: SimpleUser;
    created_at: string;
}

export interface TestingServicesTableProps {
    testingServices: ResourcePaginator<TestingService>;
    filters?: CommonFilters;
    url: string;
    onEdit?: (service: TestingService) => void;
    onDelete?: (service: TestingService) => void;
}
