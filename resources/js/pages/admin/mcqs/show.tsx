import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Mcq } from '@/types/mcq';
import { Edit, Share } from 'lucide-react';
import AdminLayout from '../components/admin-layout';
import { Link } from '@inertiajs/react';

export default function McqsShow({ mcq }: { mcq: Mcq }) {
    return (
        <AdminLayout title="Show MCQ">
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 p-3 md:min-h-min dark:border-sidebar-border">
                    <div className="mb-4 flex gap-3">
                        <div className="flex flex-col gap-2 md:w-full md:flex-row md:justify-between">
                            <div>
                                <span
                                    className={`rounded-4xl ${mcq.is_active && 'bg-green-700'} px-4 py-1 text-xs font-semibold text-white`}
                                >
                                    {mcq.is_active ? 'Publish' : 'Private'}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex items-center space-x-1">
                                    <Label htmlFor="active-mcq">
                                        {mcq.is_active ? 'Active' : 'Inactive'}
                                    </Label>
                                    <Switch
                                        id="active-mcq"
                                        checked={mcq.is_active}
                                        onCheckedChange={
                                            (checked) => console.log(checked)
                                            // updateField('is_active', checked)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-3 right-2 flex gap-2 md:relative md:top-auto md:right-auto md:gap-3">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="rounded-full cursor-pointer"
                            // onClick={() => handleShare()}
                            >
                                <Share />
                            </Button>
                            <Button
                                variant="default"
                                size="icon"
                                className="rounded-full cursor-pointer"
                                // onClick={() => handleEdit()}
                                asChild
                            >
                                <Link href={`/admin/mcqs/${mcq.slug}/edit`}>
                                    <Edit />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                        <div className="relative rounded-xl border border-sidebar-border/70 py-4 ps-2 pe-2 dark:border-sidebar-border">
                            <div>
                                <span className="font-bold text-blue-600">
                                    Question:{' '}
                                </span>
                                <h1 className="text-xl font-semibold">
                                    {mcq.question}
                                </h1>
                                <ul className="mt-2 ml-5 list-inside">
                                    {mcq.options.map((option, idx) => (
                                        <li
                                            key={idx}
                                            className={`flex gap-2 ${option.is_correct && 'text-blue-700'}`}
                                        >
                                            <span className="font-bold">
                                                {String.fromCharCode(65 + idx)}.
                                            </span>
                                            <span>{option.option_text}</span>(
                                            {option.sort_order} - Sort Order)
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-4" />
                                {mcq.paper ? (
                                    <div>
                                        <span className="font-bold text-blue-600">
                                            Paper
                                        </span>

                                        <p>
                                            {mcq.paper.name} (
                                            {mcq.paper.testing_service.name}) -{' '}
                                            {mcq.paper.department.name} -
                                            {mcq.paper.subject.name}-
                                            {mcq.paper.schedule_at}
                                        </p>
                                    </div>
                                ) : (
                                    'Paper not Attached'
                                )}
                            </div>
                        </div>
                        <div className="relative rounded-xl border border-sidebar-border/70 px-4 py-4 text-center dark:border-sidebar-border">
                            <h1 className="mb-2 text-2xl font-bold">
                                Mcqs Meta Information
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-blue-600">
                                        Subject:{' '}
                                    </span>
                                    <span>{mcq.subject.name}</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-blue-600">
                                        Topic:{' '}
                                    </span>
                                    <span>{mcq ? mcq.topic.name : ''}</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-blue-600">
                                        Question Type:{' '}
                                    </span>
                                    <span>{mcq ? mcq.type : ''}</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-blue-600">
                                        Difficulty Level:{' '}
                                    </span>
                                    <span>{mcq ? mcq.difficulty : ''}</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-blue-600">
                                        Tags:{' '}
                                    </span>
                                    <span>
                                        {mcq
                                            ? mcq.tags?.map((tag, i) => (
                                                <span key={i}>
                                                    {tag.name},{' '}
                                                </span>
                                            ))
                                            : ''}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-blue-600">
                                        Created at:{' '}
                                    </span>
                                    <span>{mcq ? mcq.created_at : ''}</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-blue-600">
                                        Updated at:{' '}
                                    </span>
                                    <span>{mcq ? mcq.updated_at : ''}</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-blue-600">
                                        Created by:{' '}
                                    </span>
                                    <span>
                                        {mcq ? mcq.created_by?.name : ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {mcq?.explanation && (
                        <div className="relative my-4 rounded-xl border border-sidebar-border/70 px-4 py-4 text-center dark:border-sidebar-border">
                            <h1 className="mb-2 text-2xl font-bold">
                                MCQ Explanation
                            </h1>
                            <div className="flex flex-col gap-2">
                                {mcq ? mcq.explanation : ''}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* <pre>
                <code>{JSON.stringify(mcq, null, 2)}</code>
            </pre> */}
        </AdminLayout>
    );
}
