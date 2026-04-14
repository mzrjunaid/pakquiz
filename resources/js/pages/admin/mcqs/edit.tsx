import { Button } from '@/components/ui/button';
import admin from '@/routes/admin';
import { Link } from '@inertiajs/react';
import AdminLayout from '../components/admin-layout';
import McqForm from './components/mcq-form';

interface SelectOption {
    id: number;
    name: string;
}

interface TopicOption extends SelectOption {
    subject_id: number;
}

interface PaperOption extends SelectOption {
    subject_id: number;
}

interface EditableMcq {
    id: number;
    question: string;
    slug: string;
    explanation: string;
    subject_id: number;
    topic_id: number | null;
    paper_id: number | null;
    difficulty: 'easy' | 'medium' | 'hard';
    mcq_type: 'single' | 'multiple' | 'true_false';
    is_active: boolean;
    tags: string;
    options: {
        id?: number;
        option_text: string;
        is_correct: boolean;
        sort_order: number;
    }[];
}

interface McqsEditProps {
    mcq: EditableMcq;
    subjects: SelectOption[];
    topics: TopicOption[];
    papers: PaperOption[];
}

export default function McqsEdit({
    mcq,
    subjects,
    topics,
    papers,
}: McqsEditProps) {
    return (
        <AdminLayout title={`Edit MCQ - ${mcq.slug}`}>
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Edit MCQ
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            Update the question, answer options, and related
                            metadata for this MCQ.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={admin.mcqs.index().url}>Back to MCQs</Link>
                    </Button>
                </div>

                <McqForm
                    mcq={mcq}
                    subjects={subjects}
                    topics={topics}
                    papers={papers}
                />
            </div>
        </AdminLayout>
    );
}
