import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface NavItems {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
    subItems?: NavItem[];
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    seo: Seo;
    base_url: string;
    sidebarOpen: boolean;
    isQuizMode: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface SeoKeyword {
    id: number;
    keyword: string;
    created_at: string;
    updated_at: string;
}

export interface Seo {
    title: string;
    description: string;
    keywords: SeoKeyword[];
    og_title: string;
    og_description: string;
    og_image: string;
    canonical: url;
    prev: url | null;
    next: url | null;
    [key: string]: unknown;
}

export type McqRouteContext =
    | {
          type: 'paper';
          paperSlug: string;
      }
    | {
          type: 'subject';
          subjectSlug: string;
      }
    | {
          type: 'topic';
          subjectSlug: string;
          topicSlug: string;
      }
    | {
          type: 'general';
          mcqSlug: string;
      };

export interface JsonLdThing {
    '@context'?: string;
    '@type': string;
    '@id'?: string;
    name?: string;
    description?: string;
    url?: string;
    about?: {
        '@type': string;
        name: string;
    } | null;
    provider?: {
        '@type': string;
        name: string;
    } | null;
    hasPart?: {
        '@type': string;
        name: string;
        text?: string;
        answerCount?: number;
        acceptedAnswer?: {
            '@type': string;
            text: string;
        } | null;
        suggestedAnswer?: Array<{
            '@type': string;
            text: string;
        }>;
    } | null;
    [key: string]: unknown;
}

export interface JsonQuestion {
    '@type': string;
    position: number;
    url: string;
    name: string;
}

export interface JsonIndexableThing {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    url: string;
    numberOfItems: number;
    itemListElement: JsonQuestion[];
}
