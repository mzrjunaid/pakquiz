export interface PaginationLink {
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
}

/* Default Laravel paginator */
export interface LaravelPaginator<T> {
    current_page: number;
    data: T[];
    first_page_url?: string;
    from: number | null;
    last_page: number;
    last_page_url?: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

/* API Resource paginator */
export interface PaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface PaginationMeta {
    current_page: number;
    from: number | null;
    last_page: number;
    links: PaginationLink[];
    path: string;
    per_page: number;
    to: number | null;
    total: number;
}

export interface ResourcePaginator<T> {
    data: T[];
    links: PaginationLinks;
    meta: PaginationMeta;
}
