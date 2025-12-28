import { dashboard } from '@/routes/admin';
import { type NavItem } from '@/types';
import { BookOpen, Folder, LayoutGrid, Trash } from 'lucide-react';

export const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

export const adminFooterNavItems: NavItem[] = [
    {
        title: 'Trash Bin',
        href: '#',
        icon: Trash,
    },
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
