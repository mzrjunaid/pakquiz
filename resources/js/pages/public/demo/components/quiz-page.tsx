import { Button } from '@/components/ui/button';
import { DemoMcq, SelectedAnswers } from '@/types/public/demo';
import { Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import DemoResult from './demo-result';

interface QuizPageProps {
    data: DemoMcq[];
}

const QuizPage: React.FC<QuizPageProps> = ({ data }) => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [attemptedQuestion, setAttemptedQuestion] = useState<number>(0);
    // const [wrongAnswered, setWrongAnswered] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
    const [showResults, setShowResults] = useState<boolean>(false);
    const [timeRemaining, setTimeRemaining] = useState<number>(1800); // 30 minutes
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const handleSubmit = (): void => {
        setShowResults(true);
        setIsPaused(true);
    };

    const hasSubmittedRef = useRef(false);

    useEffect(() => {
        if (isPaused || showResults) return;

        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);

                    if (!hasSubmittedRef.current) {
                        hasSubmittedRef.current = true;
                        handleSubmit(); // ✅ safe here
                    }

                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isPaused, showResults]);

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnswerSelect = (questionId: number, optionId: number): void => {
        if (!showResults) {
            setSelectedAnswers((prev) => ({
                ...prev,
                [questionId]: optionId,
            }));
            setAttemptedQuestion((p) => p + 1);
        }
    };

    const totalQuestions: number = data.length;

    const retakeExam = () => {
        setSelectedAnswers({});
        setShowResults(false);
        setCurrentQuestion(0);
        setIsPaused(false);
        setTimeRemaining(1800);
        setAttemptedQuestion(0);
    };
    return (
        <div className="px-2 py-4 md:w-full md:max-w-5xl lg:py-16">
            {!showResults ? (
                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                    {/* Header Section */}
                    <div className="border-b bg-primary/50 px-6 py-4 dark:bg-primary/70">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-md font-bold md:text-3xl">
                                    PPSC Practice Paper
                                </h2>
                                <p className="-mt-0.5 text-xs font-medium text-muted-foreground">
                                    General Knowledge & Aptitude Test
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-primary-foreground">
                                    <Clock className="size-5 md:size-8" />
                                    <span className="font-mono font-bold md:text-lg">
                                        {formatTime(timeRemaining)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="px-3 py-6 md:p-8">
                        {/* Question Header */}
                        <div className="mb-3 md:mb-6">
                            <p className="mb-2 text-sm font-medium text-muted">
                                Question {currentQuestion + 1} of{' '}
                                {totalQuestions}
                                {selectedAnswers[data[currentQuestion].id] !==
                                    undefined && (
                                    <span className="ms-2 animate-pulse text-destructive-foreground italic">
                                        (Question Locked)
                                    </span>
                                )}
                            </p>
                            <h3
                                className={`overflow-hidden leading-relaxed font-semibold text-primary/90 md:text-lg ${data[currentQuestion].subject.name === 'Urdu' && 'text-right font-urdu'}`}
                            >
                                {data[currentQuestion].question}
                            </h3>
                        </div>

                        {/* Options Grid - 2x2 Layout */}
                        <div
                            className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${data[currentQuestion].subject.name.toLowerCase() === 'urdu' && 'text-right font-urdu'}`}
                        >
                            {data[currentQuestion].options.map(
                                (option, idx) => (
                                    <button
                                        // variant="ghost"
                                        key={idx}
                                        onClick={() =>
                                            handleAnswerSelect(
                                                data[currentQuestion].id,
                                                option.id,
                                            )
                                        }
                                        className={`rounded-sm border px-2 py-2 text-left transition-all duration-200 md:p-4 ${
                                            selectedAnswers[
                                                data[currentQuestion].id
                                            ] === option.id
                                                ? 'border-primary bg-gray-50 shadow-md'
                                                : 'border-gray-200 hover:border-primary hover:bg-gray-50'
                                        } ${
                                            selectedAnswers[
                                                data[currentQuestion].id
                                            ] !== undefined
                                                ? 'cursor-not-allowed opacity-60'
                                                : ''
                                        }`}
                                        disabled={
                                            selectedAnswers[
                                                data[currentQuestion].id
                                            ] !== undefined
                                        }
                                    >
                                        <div className="flex items-center gap-3 text-sm md:text-base">
                                            <span className="font-semibold text-gray-700">
                                                {String.fromCharCode(65 + idx)}.
                                            </span>
                                            <span className="font-medium text-gray-800">
                                                {option.text}
                                            </span>
                                        </div>
                                    </button>
                                ),
                            )}
                        </div>
                    </div>
                    <div className="border-t-1 px-2 py-6">
                        {/* Question Navigation */}
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {data.map((_, idx) => (
                                <Button
                                    variant="default"
                                    key={idx}
                                    onClick={() => setCurrentQuestion(idx)}
                                    className={`w-9 rounded-lg font-semibold transition-all ${
                                        currentQuestion === idx
                                            ? 'bg-primary text-white'
                                            : selectedAnswers[data[idx].id] !==
                                                undefined
                                              ? 'bg-primary/35 text-foreground hover:bg-primary/65'
                                              : 'border border-gray-200 bg-white text-primary hover:border-primary hover:text-white'
                                    }`}
                                >
                                    {idx + 1}
                                </Button>
                            ))}
                        </div>
                        <div className="my-3 flex justify-end gap-3">
                            <Button
                                variant="secondary"
                                onClick={() =>
                                    setCurrentQuestion((prev) =>
                                        Math.max(0, prev - 1),
                                    )
                                }
                                disabled={currentQuestion === 0}
                            >
                                Prev
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() =>
                                    setCurrentQuestion((prev) =>
                                        Math.min(totalQuestions - 1, prev + 1),
                                    )
                                }
                                disabled={
                                    currentQuestion === totalQuestions - 1
                                }
                                // className="rounded-lg bg-primary px-5 py-2 font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Next
                            </Button>
                        </div>
                        {/* Submit Button */}
                        <div className="mt-6 text-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                onClick={handleSubmit}
                                className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                /* Results View */
                <DemoResult
                    data={data}
                    retakeExam={retakeExam}
                    attemptedQuestion={attemptedQuestion}
                    selectedAnswers={selectedAnswers}
                    totalQuestions={totalQuestions}
                />
            )}
        </div>
    );
};

export default QuizPage;
