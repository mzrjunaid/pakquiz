import { dashboard } from '@/routes/admin';
import departments from '@/routes/admin/departments';
import mcqs from '@/routes/admin/mcqs';
import papers from '@/routes/admin/papers';
import seo from '@/routes/admin/seo';
import subjects from '@/routes/admin/subjects';
import testingServices from '@/routes/admin/testing-services';
import { type NavItem, type NavItems } from '@/types';
import {
    Building,
    Clipboard,
    FileBox,
    LayoutGrid,
    Paperclip,
    ShieldQuestion,
    Tag,
    Trash,
} from 'lucide-react';

export const adminMainNavItems: NavItems[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Department',
        href: departments.index(),
        icon: Building,
        subItems: [
            {
                title: 'Add Department',
                href: departments.create(),
            },
        ],
    },
    {
        title: 'Testing Services',
        href: testingServices.index(),
        icon: Paperclip,
        subItems: [
            {
                title: 'Add Testing Service',
                href: testingServices.create(),
            },
        ],
    },
    {
        title: 'Subjets',
        href: subjects.index(),
        icon: FileBox,
        subItems: [
            {
                title: 'Add Subjects',
                href: subjects.create(),
            },
        ],
    },
    {
        title: 'Papers',
        href: papers.index(),
        icon: Clipboard,
        subItems: [
            {
                title: 'Add Papers',
                href: papers.create(),
            },
        ],
    },
    {
        title: 'MCQs',
        href: mcqs.index(),
        icon: ShieldQuestion,
        subItems: [
            {
                title: 'Add MCQ',
                href: mcqs.create(),
            },
        ],
    },
    {
        title: 'SEO Meta Info',
        href: seo.index(),
        icon: Tag,
        subItems: [
            {
                title: 'Add SEO Meta Info',
                href: seo.create(),
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
