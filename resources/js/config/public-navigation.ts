import {
    aboutUs,
    contactUs,
    helpCenter,
    home,
    privacyPolicy,
    termsOfService,
} from '@/routes';
import papers from '@/routes/public/papers';
import subjects from '@/routes/public/subjects';
import { NavItem, NavItems } from '@/types';
import { BookOpen, Clipboard, FileBox, Folder, Home } from 'lucide-react';

export const generalNavItems: NavItem[] = [
    {
        title: 'About Us',
        href: aboutUs(),
    },
    {
        title: 'Contact Us',
        href: contactUs(),
    },
    {
        title: 'Privacy Policy',
        href: privacyPolicy(),
    },
    {
        title: 'Terms of Service',
        href: termsOfService(),
    },
    {
        title: 'Join Us',
        href: helpCenter(),
    },
];

export const publicMainNavItems: NavItems[] = [
    {
        title: 'Home',
        href: home(),
        icon: Home,
    },
    {
        title: 'Subjects',
        href: subjects.index(),
        icon: FileBox,
    },
    {
        title: 'Papers',
        href: papers.index(),
        icon: Clipboard,
    },

    {
        title: 'About Us',
        href: aboutUs(),
        icon: BookOpen,
        subItems: generalNavItems,
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
