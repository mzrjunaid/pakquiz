import AppCenterHead from '@/components/app-center-head';
import FeatureCard from '@/components/feature-card';
import SuggestionsForm from '@/components/form/suggestion-form';
import TopAdSection from '@/components/hero-section/TopAdSection';
import { McqHeader, McqMeta } from '@/components/mcq/mcq-card';
import PageTitle from '@/components/public-page-title';
import SearchBar from '@/components/SearchBar';
import TextLink from '@/components/text-link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import AppLayout from '@/layouts/app-layout';
import MainSectionWithSidebarLayout from '@/layouts/frontend/two-grid-layout';
import publicMethod from '@/routes/public';
import departments from '@/routes/public/departments';
import mcqs from '@/routes/public/mcqs';
import papers from '@/routes/public/papers';
import testing_services from '@/routes/public/testing_services';
import { SharedData } from '@/types';
import { Mcq } from '@/types/public/mcq';
import { Paper } from '@/types/public/paper';
import { Topic } from '@/types/subject';
import { Link, usePage } from '@inertiajs/react';
import { Building, ChevronRight, Tag } from 'lucide-react';
import PageSidebar from '../homepage/components/page-sidebar';

interface McqProps extends SharedData {
    mcq: Mcq;
    latestPapers: Paper[];
    current_affairs: {
        id: number;
        name: string;
        slug: string;
        description: string;
        topics: Topic[];
    };
}

const McqShow = () => {
    const { current_affairs, latestPapers, mcq } = usePage<McqProps>().props;
    const isMobile = useIsMobile();
    return (
        <AppLayout>
            <AppCenterHead schema={mcq.schema} />
            <TopAdSection />
            <MainSectionWithSidebarLayout>
                <div className="mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="order-1 space-y-2 lg:col-span-2">
                        <h2 className="text-2xl font-semibold md:text-4xl">
                            MCQ Detail
                        </h2>
                    </div>
                    <SearchBar className="md:order-1" />
                </div>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-8 lg:col-span-2">
                        <McqHeader
                            isQuizMode={false}
                            difficulty={mcq.difficulty}
                        >
                            {!isMobile && (
                                <McqMeta
                                    mcq_type={mcq.mcq_type}
                                    subject={mcq.subject}
                                    route={mcqs.show(mcq.slug)}
                                />
                            )}
                        </McqHeader>
                        <PageTitle
                            title={mcq.question}
                            className="mt-8 text-left"
                        />

                        <div className="flex gap-3">
                            <div className="flex-1">
                                <div className="grid gap-2 md:grid-cols-1 lg:gap-3">
                                    {mcq.options.map((opt, optIdx) => {
                                        return (
                                            <button
                                                key={opt.id}
                                                className={`w-full rounded-md border p-2 text-left text-sm transition md:p-3 lg:rounded-lg lg:border-2 lg:text-base ${!opt.is_correct ? 'cursor-not-allowed opacity-85' : 'cursor-pointer'} ${
                                                    opt.is_correct
                                                        ? 'border-success bg-success/5'
                                                        : 'border-gray-200 bg-white/60 hover:border-primary'
                                                } `}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold">
                                                        {String.fromCharCode(
                                                            65 + optIdx,
                                                        )}
                                                        .
                                                    </span>

                                                    <span>
                                                        {opt.option_text}
                                                    </span>

                                                    {opt.is_correct && (
                                                        <span className="ml-auto text-xs font-semibold text-success">
                                                            ✓
                                                        </span>
                                                    )}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                                {mcq.explanation && (
                                    <Accordion
                                        type="single"
                                        collapsible
                                        defaultValue={mcq.slug}
                                        className="mt-4"
                                    >
                                        <AccordionItem value={mcq.slug}>
                                            <AccordionTrigger>
                                                Explanation
                                            </AccordionTrigger>
                                            <AccordionContent className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                                                {mcq.explanation}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap-reverse justify-end gap-6 md:justify-between">
                            {!isMobile && mcq?.tags && (
                                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                                    <div className="flex items-center space-x-2">
                                        <Tag className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm font-medium text-gray-700">
                                            Tags:
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-wrap gap-2">
                                        {mcq.tags.map((tag, idx) => (
                                            <Badge key={idx} variant="outline">
                                                <span className="max-w-sm truncate">
                                                    {tag.name}
                                                </span>
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {isMobile && (
                                <McqMeta
                                    mcq_type={mcq.mcq_type}
                                    subject={mcq.subject}
                                    route={mcqs.show(mcq.slug)}
                                />
                            )}

                            {mcq.paper && (
                                <div className="flex items-center space-x-2">
                                    <Badge
                                        variant="secondary"
                                        className="block max-w-3xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent"
                                        asChild
                                    >
                                        <Link
                                            href={papers.show({
                                                paper: mcq.paper.slug,
                                            })}
                                            title={`View all mcqs from ${mcq.paper.name}`}
                                        >
                                            {mcq.paper.name}
                                        </Link>
                                    </Badge>
                                    {mcq.paper?.testing_service && (
                                        <Badge
                                            variant="secondary"
                                            className="block max-w-3xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent"
                                            asChild
                                        >
                                            <Link
                                                href={testing_services.show({
                                                    slug: mcq.paper
                                                        .testing_service.slug,
                                                })}
                                                title={`View all Papers from ${mcq.paper.testing_service.short}`}
                                            >
                                                {
                                                    mcq.paper.testing_service
                                                        .short
                                                }
                                            </Link>
                                        </Badge>
                                    )}
                                    {mcq.paper?.department && (
                                        <Badge
                                            variant="secondary"
                                            className="hidden max-w-3xs truncate overflow-hidden px-3 py-1 font-semibold sm:block"
                                            asChild
                                        >
                                            <Link
                                                href={departments.show(
                                                    mcq.paper.department,
                                                )}
                                                title={`View all Department Papers from ${mcq.paper.department.name}`}
                                            >
                                                <span className="truncate sm:max-w-26 md:max-w-36">
                                                    {mcq.paper.department.name}
                                                </span>
                                            </Link>
                                        </Badge>
                                    )}
                                </div>
                            )}
                        </div>
                        <SuggestionsForm />

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold md:text-4xl">
                                Practice Recent Exams: Newest Papers Added
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {latestPapers.map((paper, idx) => (
                                    <Link
                                        href={publicMethod.papers.show({
                                            paper: paper.slug,
                                        })}
                                        className="group w-full rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:w-sm md:p-6"
                                        key={idx}
                                    >
                                        <div className="mb-4 flex items-center justify-between">
                                            {paper.subject && (
                                                <Badge
                                                    variant="outline"
                                                    className="transition-colors hover:bg-primary/25 hover:text-primary"
                                                >
                                                    {paper.subject.name}
                                                </Badge>
                                            )}
                                            {paper.testing_service && (
                                                <Badge className="transition-colors hover:bg-primary/25 hover:text-primary">
                                                    {
                                                        paper.testing_service
                                                            .short
                                                    }
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="block space-y-2">
                                            <div className="flex items-start justify-between gap-3">
                                                <h2 className="line-clamp-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-sm">
                                                    {paper.name} -{' '}
                                                    {paper.schedule_at
                                                        ? paper.schedule_at
                                                        : paper.year}
                                                </h2>
                                                <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between">
                                            {paper.department && (
                                                <div className="flex items-center gap-1.5 overflow-hidden text-xs text-muted md:text-sm">
                                                    <Building className="size-4" />
                                                    <span className="line-clamp-1">
                                                        {paper.department.name}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <PageSidebar>
                        <FeatureCard
                            title="Current Affairs"
                            description={current_affairs.description}
                        >
                            <div className="md:px-2">
                                {current_affairs.topics.map((topic, idx) => (
                                    <div
                                        className="flex items-center gap-1 text-sm"
                                        key={idx}
                                    >
                                        <ChevronRight size="16" />
                                        <TextLink
                                            href={publicMethod.subject.topic.show(
                                                {
                                                    subject:
                                                        current_affairs.slug,
                                                    topic: topic.slug,
                                                },
                                            )}
                                            className="my-2 block"
                                        >
                                            {topic.name}
                                        </TextLink>
                                    </div>
                                ))}
                            </div>
                        </FeatureCard>
                    </PageSidebar>
                </div>
            </MainSectionWithSidebarLayout>
        </AppLayout>
    );
};

export default McqShow;
