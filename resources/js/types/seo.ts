export interface SeoMetaStats {
    total: number;
    by_type: {
        Department: number;
        JobPosting: number;
        Mcq: number;
        Page: number;
        Paper: number;
        Subject: number;
        Topic: number;
        TestingService: number;
    };
}

export interface SeoMeta {
    id: number;
    title: string;
    description: string;
    keywords: string;
    og_title: string;
    og_description: string;
    og_image: string | File | null;
    page_type: string;
    page_id: number;
    page_name: string;
    page_label: string;
    created_at: string;
    updated_at: string;
}

export interface SeoPageTypeOption {
    label: string;
    value: string;
}

export interface SeoPageOption {
    value: number;
    label: string;
}

export type SeoPageOptions = Record<string, SeoPageOption[]>;
