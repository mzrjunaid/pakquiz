export type SerializableFilterValue = string | number;

export interface Filters {
    search?: string;
    is_active?: string;
    is_verified?: string;
    sort_by?: string;
    sort_order?: string;
    per_page?: number;
    page?: number;
}
