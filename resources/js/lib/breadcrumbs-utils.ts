import { BreadcrumbItem } from '@/types';

export function breadcrumb(currentUrl: string): BreadcrumbItem[] {
    const clean = (url: string) => url.split('?')[0].replace(/\/+$/, '');

    const segments = clean(currentUrl).split('/').filter(Boolean);

    const breadcrumbs: BreadcrumbItem[] = [];

    let accumulatedPath = '';

    for (const segment of segments) {
        if (segment === 'admin') {
            breadcrumbs.push({
                title: 'Admin',
                href: '/admin/dashboard',
            });

            accumulatedPath = '/admin';
            continue;
        }

        accumulatedPath += `/${segment}`;

        breadcrumbs.push({
            title: formatTitle(segment),
            href: accumulatedPath,
        });
    }

    return breadcrumbs;
}

function formatTitle(segment: string): string {
    return segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}
