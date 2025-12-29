import { dashboard } from '@/routes/admin';
import departments from '@/routes/admin/departments';
import testingServices from '@/routes/admin/testing-services';
import { type NavItem, type NavItems } from '@/types';
import { BookOpen, File, Folder, LayoutGrid, Trash } from 'lucide-react';

export const adminMainNavItems: NavItems[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Testing Services',
        href: testingServices.index(),
        icon: File,
        subItems: [
            {
                title: 'Create',
                href: testingServices.create(),
            },
        ],
    },
    {
        title: 'Departments',
        href: departments.index(),
        icon: File,
        subItems: [
            {
                title: 'Create',
                href: departments.create(),
            },
        ],
    },
];

export const adminFooterNavItems: NavItem[] = [
    {
        title: 'Trash Bin',
        href: '#',
        icon: Trash,
    },
];

export const generalNavItems: NavItem[] = [
    { title: 'Help Center', href: '/help-center' },
    { title: 'Contact Us', href: '/contact-us' },
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms of Service', href: '/terms-of-service' },
    { title: 'Join Us', href: '/join-us' },
];

export const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];
