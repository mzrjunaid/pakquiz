import {
    aboutUs,
    contactUs,
    demo,
    helpCenter,
    home,
    joinUs,
    privacyPolicy,
    termsOfService,
} from '@/routes';
import papers from '@/routes/public/papers';
import subjects from '@/routes/public/subjects';
import { NavItem, NavItems } from '@/types';
import {
    BookOpen,
    Clipboard,
    FileBox,
    Folder,
    Home,
    NotepadText,
} from 'lucide-react';

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
        title: 'Help Center',
        href: helpCenter(),
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
        href: joinUs(),
    },
];

export const subjectsNavItems: NavItem[] = [
    // {
    //     title: 'General Knowledge',
    //     href: `${subjects.index().url}/general-knowledge`,
    // },
    {
        title: 'Current Affairs',
        href: `${subjects.index().url}/current-affairs`,
    },
    {
        title: 'Everyday Science',
        href: `${subjects.index().url}/everyday-science`,
    },
    {
        title: 'Computer',
        href: `${subjects.index().url}/computer`,
    },
    {
        title: 'English',
        href: `${subjects.index().url}/english`,
    },
    {
        title: 'All Subjects',
        href: subjects.index(),
    },
];

export const papersNavItems: NavItem[] = [
    {
        title: 'Latest Papers',
        href: home(),
    },
    {
        title: 'Past Papers',
        href: home(),
    },
    {
        title: 'Upcoming Papers',
        href: home(),
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
        subItems: subjectsNavItems,
    },
    {
        title: 'Papers',
        href: papers.index(),
        icon: Clipboard,
        subItems: papersNavItems,
    },
    {
        title: 'About Us',
        href: aboutUs(),
        icon: BookOpen,
        subItems: generalNavItems,
    },
    {
        title: 'Demo',
        href: demo(),
        icon: NotepadText,
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
