import { DemoMcq } from '@/types/public/demo';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion';

interface TestMcqCardProps {
    mcq: DemoMcq;
    idx: number;
    isCorrect: boolean;
    wasAnswered: boolean;
    selectedOptionId: number;
}

const TestMcqCard: React.FC<TestMcqCardProps> = ({
    mcq,
    idx,
    isCorrect,
    wasAnswered,
    selectedOptionId,
}) => {
    return (
        <div
            key={mcq.id}
            className={`rounded-md border px-2 py-4 shadow-sm lg:rounded-xl  lg:p-5 ${
                isCorrect
                    ? 'border-green-200 bg-green-50'
                    : wasAnswered
                      ? 'border-red-200 bg-red-50'
                      : 'border-gray-200 bg-gray-50'
            }`}
        >
            <div className="flex flex-col items-start gap-3 md:flex-row lg:gap-3">
                {isCorrect ? (
                    <CheckCircle2 className="mt-1 h-6 w-6 text-green-500" />
                ) : wasAnswered ? (
                    <XCircle className="mt-1 h-6 w-6 text-destructive" />
                ) : (
                    <AlertCircle className="mt-1 h-6 w-6 text-muted" />
                )}

                <div className="flex-1">
                    <p className="mb-4 text-sm font-semibold text-foreground lg:text-base">
                        Question {idx + 1}: {mcq.question}
                    </p>

                    <div className="mb-2 grid grid-cols-1 gap-3 md:grid-cols-2">
                        {mcq.options.map((opt, optIdx) => {
                            const isSelected =
                                wasAnswered && opt.id === selectedOptionId;

                            return (
                                <div
                                    key={opt.id}
                                    className={`rounded-md border p-2 lg:rounded-lg lg:border-2 lg:p-3 ${
                                        opt.correct
                                            ? 'border-green-500 bg-green-50'
                                            : isSelected
                                              ? 'border-destructive'
                                              : 'border-gray-200 bg-white'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-gray-700 lg:text-base">
                                            {String.fromCharCode(65 + optIdx)}.
                                        </span>

                                        <span className="text-sm text-gray-800 lg:text-base">
                                            {opt.text}
                                        </span>

                                        {opt.correct && (
                                            <span className="ml-auto text-xs font-semibold text-green-600">
                                                ✓ Correct
                                            </span>
                                        )}

                                        {isSelected && !opt.correct && (
                                            <span className="ml-auto text-xs font-semibold text-destructive">
                                                ✗ Your answer
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {!wasAnswered && (
                        <p className="mb-3 text-sm text-gray-600 italic">
                            Not attempted
                        </p>
                    )}

                    <Accordion
                        type="single"
                        collapsible
                        defaultValue={mcq.slug}
                    >
                        <AccordionItem value={mcq.slug}>
                            <AccordionTrigger className="text-sm font-medium text-primary">
                                Explanation
                            </AccordionTrigger>
                            <AccordionContent className="rounded border border-blue-200 bg-blue-50 p-4 lg:rounded-lg lg:border-2">
                                {mcq.explanation}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Culpa, deleniti non eligendi
                                consectetur sapiente aut quibusdam rem deserunt
                                doloribus in quasi, corporis nobis cumque velit.
                                Nemo adipisci rerum non omnis.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default TestMcqCard;
