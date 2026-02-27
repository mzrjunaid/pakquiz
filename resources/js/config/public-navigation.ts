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
import subject from '@/routes/public/subject';
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
        href: subject.show({ subject: 'current-affairs-mcqs' }),
    },
    {
        title: 'Everyday Science',
        href: subject.show({ subject: 'everyday-science-mcqs' }),
    },
    {
        title: 'Computer',
        href: subject.show({ subject: 'computer-mcqs' }),
    },
    {
        title: 'English',
        href: subject.show({ subject: 'english-mcqs' }),
    },
    {
        title: 'All Subjects',
        href: subject.index(),
    },
];

export const papersNavItems: NavItem[] = [
    {
        title: 'Latest Papers',
        href: papers.category.index('latest-papers'),
    },
    {
        title: 'Past Papers',
        href: papers.category.index('past-papers'),
    },
    {
        title: 'Upcoming Papers',
        href: papers.category.index('upcoming-papers'),
    },
    {
        title: 'All Papers',
        href: papers.index(),
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
        href: subject.index(),
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
