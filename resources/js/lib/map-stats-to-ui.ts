import { Stats, UiStats } from '@/types/public/home';
import {
    BookOpen,
    Building2,
    ClipboardList,
    FileText,
    Layers,
    Tag,
    Users,
} from 'lucide-react';

export function mapStatsToUi(stats: Stats): UiStats[] {
    return [
        {
            number: stats.papers.toLocaleString(),
            label: 'Papers Available',
            icon: FileText,
        },
        {
            number: stats.mcqs.toLocaleString(),
            label: 'MCQs Available',
            icon: ClipboardList,
        },
        {
            number: stats.users.toLocaleString(),
            label: 'Active Users',
            icon: Users,
        },
        {
            number: stats.subjects.toLocaleString(),
            label: 'Subjects Available',
            icon: BookOpen,
        },
        {
            number: stats.topics.toLocaleString(),
            label: 'Topics Available',
            icon: Layers,
        },
        {
            number: stats.departments.toLocaleString(),
            label: 'Departments Available',
            icon: Building2,
        },
        {
            number: stats.tags.toLocaleString(),
            label: 'Tags Available',
            icon: Tag,
        },
    ];
}
