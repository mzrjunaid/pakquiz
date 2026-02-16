import { useIsMobile } from '@/hooks/use-mobile';
import publicMethod from '@/routes/public';
import papers from '@/routes/public/papers';
import { Mcq, Subject } from '@/types/public/mcq';
import { RouteDefinition } from '@/wayfinder';
import { Link } from '@inertiajs/react';
import { Bot, Share2, Tag } from 'lucide-react';
import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface McqCardProps {
    mcq: Mcq;
    idx?: number;
    route: RouteDefinition<'get'>;
}

const QuestionType: Record<string, string> = {
    single: 'Single Choice',
    multiple: 'Multiple Choice',
    true_false: 'True/False',
    single_a: 'Single Answer',
};

const McqMeta = ({
    subject,
    mcq_type,
}: {
    subject?: Subject;
    mcq_type: string;
}) => {
    return (
        <div className="flex items-center justify-end space-x-1">
            {subject?.name && (
                <Badge variant="default" asChild>
                    <Link
                        href={publicMethod.subjects.show({
                            subject: subject.slug,
                        })}
                        title={`View all Papers from ${subject?.name}`}
                    >
                        <span className="max-w-26 truncate md:max-w-36">
                            {subject?.name}
                        </span>
                    </Link>
                </Badge>
            )}
            {mcq_type && (
                <Badge variant="outline">{QuestionType[mcq_type]}</Badge>
            )}
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Share2 />
                </Link>
            </Button>
        </div>
    );
};

const McqCard: React.FC<McqCardProps> = ({ mcq, idx, route }) => {
    const isQuizMode = true;

    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(
        null,
    );
    const isMobile = useIsMobile();

    const wasAnswered = selectedOptionId !== null;
    const correctOption = mcq.options.find((o) => o.is_correct);

    const isCorrect = wasAnswered && selectedOptionId === correctOption?.id;
    const showAnswers = !isQuizMode || wasAnswered;

    const handleOptionSelect = (optionId: number) => {
        if (!isQuizMode) return; // ⛔ Study mode → no selection
        if (wasAnswered) return; // ⛔ Already answered
        setSelectedOptionId(optionId);
    };

    const getDifficultyBadgeVariant = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'easy':
                return 'bg-success/10 py-1 text-success hover:bg-success/20';
            case 'medium':
                return 'bg-card py-1 text-info-foreground hover:bg-yellow-100 border-yellow-500 capitalize';
            case 'hard':
                return 'bg-destructive/35 py-1 text-destructive-foreground hover:bg-destructive/50 border-destructive capitalize';
            default:
                return 'bg-gray-100 py-1 text-gray-700 hover:bg-gray-200';
        }
    };

    return (
        <div
            className={`rounded-md border px-2 py-4 shadow-sm lg:rounded-xl lg:p-5 ${
                isCorrect
                    ? 'border-success bg-success/10'
                    : wasAnswered
                      ? 'border-destructive bg-destrcutive/10'
                      : 'border-card bg-card'
            }`}
        >
            <div className="mb-2 flex flex-col-reverse md:flex-row md:justify-between">
                <div className="flex flex-wrap items-center gap-2 space-x-2">
                    <Badge variant="outline">
                        <Bot className="mr-1 h-3 w-3" />
                        AI
                    </Badge>
                    <Badge
                        variant="outline"
                        className={
                            isQuizMode
                                ? 'border-destructive text-destrcutive'
                                : 'border-success text-success'
                        }
                    >
                        {isQuizMode ? '📝 Quiz' : '📖 Study'}
                    </Badge>
                    {mcq.difficulty && (
                        <Badge
                            variant="secondary"
                            className={getDifficultyBadgeVariant(
                                mcq.difficulty,
                            )}
                        >
                            {mcq.difficulty}
                        </Badge>
                    )}
                </div>
                {!isMobile && (
                    <McqMeta mcq_type={mcq.mcq_type} subject={mcq.subject} />
                )}
            </div>
            <div>
                <div className="flex gap-3">
                    <div className="flex-1">
                        <div className="my-6 text-sm font-semibold lg:text-base">
                            <Link href={route}>
                                Question {idx ? idx + 1 : 1}: {mcq.question}
                            </Link>
                        </div>

                        <div className="grid gap-2 md:grid-cols-2 lg:gap-3">
                            {mcq.options.map((opt, optIdx) => {
                                const isSelected =
                                    selectedOptionId === opt.id && wasAnswered;

                                return (
                                    <button
                                        key={opt.id}
                                        onClick={() =>
                                            handleOptionSelect(opt.id)
                                        }
                                        disabled={!isQuizMode || wasAnswered}
                                        className={`w-full rounded-md border p-2 text-left text-sm transition md:p-3 lg:rounded-lg lg:border-2 lg:text-base ${!isQuizMode ? 'cursor-not-allowed opacity-85' : 'cursor-pointer'} ${
                                            opt.is_correct && showAnswers
                                                ? 'border-success bg-success/5'
                                                : isSelected
                                                  ? 'border-destructive bg-destrcutive/10'
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

                                            <span>{opt.option_text}</span>

                                            {opt.is_correct && showAnswers && (
                                                <span className="ml-auto text-xs font-semibold text-success">
                                                    ✓ Correct
                                                </span>
                                            )}

                                            {selectedOptionId === opt.id &&
                                                wasAnswered &&
                                                !opt.is_correct && (
                                                    <span className="ml-auto text-xs font-semibold text-destructive">
                                                        ✗ Your Answer
                                                    </span>
                                                )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {isQuizMode && !wasAnswered && (
                            <p className="mt-3 text-sm text-gray-600 italic">
                                Select an option
                            </p>
                        )}

                        {!isQuizMode && (
                            <p className="mt-3 text-sm text-gray-500 italic">
                                Study mode enabled — answers are disabled
                            </p>
                        )}

                        {showAnswers && mcq.explanation && (
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
                        <div className="flex w-sm flex-wrap gap-2">
                            {mcq.tags.map((tag, idx) => (
                                <Badge key={idx} variant="outline">
                                    <span className="max-w-20 truncate">
                                        {tag.name}
                                    </span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
                {isMobile && (
                    <McqMeta mcq_type={mcq.mcq_type} subject={mcq.subject} />
                )}

                {mcq.paper && (
                    <div className="flex items-center space-x-2">
                        <Badge
                            variant="secondary"
                            className="px-3 py-1 font-semibold hover:!bg-accent"
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
                                className="px-3 py-1 font-semibold hover:!bg-accent"
                                asChild
                            >
                                <Link
                                    href={publicMethod.testing_services.show(
                                        mcq.paper.testing_service,
                                    )}
                                    title={`View all Papers from ${mcq.paper.testing_service.name}`}
                                >
                                    {mcq.paper.testing_service.name}
                                </Link>
                            </Badge>
                        )}
                        {mcq.paper?.department && (
                            <Badge
                                variant="secondary"
                                className="hidden px-3 py-1 font-semibold sm:block"
                                asChild
                            >
                                <Link
                                    href={publicMethod.departments.show(
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
        </div>
    );
};

export default McqCard;
