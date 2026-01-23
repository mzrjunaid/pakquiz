export interface SeoMetaStats {
    total: number;
    by_type: {
        Mcq: number;
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
    og_image: string;
    page_type: string;
    page_id: number;
    page_name: string;
    created_at: string;
    updated_at: string;
}
