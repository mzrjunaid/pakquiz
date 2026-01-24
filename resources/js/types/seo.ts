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

export const page_type = [
    { label: 'Select Page Type', value: null },
    { Label: 'Mcq', value: 'Mcq' },
    { Label: 'Paper', value: 'Paper' },
    { Label: 'Subject', value: 'Subject' },
    { Label: 'Topic', value: 'Topic' },
    { Label: 'TestingService', value: 'TestingService' },
    { Label: 'Home', value: 'Home' },
    { Label: 'About', value: 'About' },
    { Label: 'Contact', value: 'Contact' },
    { Label: 'PrivacyPolicy', value: 'PrivacyPolicy' },
    { Label: 'TermsAndConditions', value: 'TermsAndConditions' },
    { Label: 'JoinUs', value: 'JoinUs' },
    { Label: 'NotFound', value: 'NotFound' },
    { Label: 'HelpCenter', value: 'HelpCenter' },
    { Label: 'Dashboard', value: 'Dashboard' },
    { Label: 'Login', value: 'Login' },
    { Label: 'Register', value: 'Register' },
    { Label: 'Subscription', value: 'Subscription' },
];
