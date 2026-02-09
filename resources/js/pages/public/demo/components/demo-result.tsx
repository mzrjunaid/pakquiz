import TestMcqCard from '@/components/mcq/mcq-base';
import { Button } from '@/components/ui/button';
import { DemoMcq, SelectedAnswers } from '@/types/public/demo';
import { RotateCcw } from 'lucide-react';

interface DemoResultProps {
    attemptedQuestion: number;
    retakeExam: () => void;
    selectedAnswers: SelectedAnswers;
    totalQuestions: number;
    data: DemoMcq[];
}

const ResultBox = ({
    label,
    figure,
    boxStyle,
    labelStyle,
    figureStyle,
}: {
    label: string;
    figure: number;
    boxStyle: string;
    labelStyle: string;
    figureStyle: string;
}) => {
    return (
        <div
            className={`rounded-md p-2 text-center md:rounded-xl md:p-4 ${boxStyle}`}
        >
            <p className={`mb-1 text-xs font-bold md:text-sm ${labelStyle}`}>
                {label}
            </p>
            <p className={`text-lg font-bold md:text-2xl ${figureStyle}`}>
                {figure}
            </p>
        </div>
    );
};

const DemoResult: React.FC<DemoResultProps> = ({
    data,
    attemptedQuestion,
    retakeExam,
    selectedAnswers,
    totalQuestions,
}) => {
    const calculateScore = (): number => {
        let correct = 0;

        data.forEach((mcq) => {
            const selectedOptionId = selectedAnswers[mcq.id];

            if (!selectedOptionId) return;

            const selectedOption = mcq.options.find(
                (option) => option.id === selectedOptionId,
            );

            if (selectedOption?.correct) {
                correct++;
            }
        });

        return correct;
    };

    const score = calculateScore();
    const percentage = ((score / totalQuestions) * 100).toFixed(1);

    return (
        <div className="space-y-6 px-2 lg:px-0">
            {/* Score Card */}
            <div className="mx-auto rounded-lg bg-white p-2 shadow-sm sm:rounded-2xl md:p-8">
                <div className="flex items-center justify-between lg:mb-5">
                    <div>
                        <h2 className="text- font-bold text-gray-900 md:text-2xl">
                            Test Results
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            PPSC Practice Paper - Demo
                        </p>
                    </div>
                    <div className="relative h-32 w-32">
                        <svg className="h-32 w-32 -rotate-90 transform">
                            <circle
                                cx="64"
                                cy="64"
                                r="32"
                                stroke="#e5e7eb"
                                strokeWidth="12"
                                fill="none"
                            />
                            <circle
                                cx="64"
                                cy="64"
                                r="32
                                "
                                stroke="#1f2937"
                                strokeWidth="12"
                                fill="none"
                                strokeDasharray={`${(Number(percentage) / 100) * 351.86} 351.86`}
                                className="transition-all duration-1000"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-xl font-bold text-gray-900">
                                    {attemptedQuestion}/{totalQuestions}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-1 md:grid-cols-4 md:gap-4">
                    <ResultBox
                        boxStyle="bg-blue-50"
                        labelStyle="text-gray-600"
                        figureStyle="text-blue-700"
                        label="Total Quiz"
                        figure={totalQuestions}
                    />
                    <ResultBox
                        boxStyle="bg-purple-50"
                        labelStyle="text-gray-600"
                        figureStyle="text-purple-700"
                        label="Correct"
                        figure={score}
                    />
                    <ResultBox
                        boxStyle="bg-green-50"
                        labelStyle="text-gray-600"
                        figureStyle="text-green-700"
                        label="Score"
                        figure={score - (attemptedQuestion - score) * 0.25}
                    />
                    <ResultBox
                        boxStyle="bg-red-50"
                        labelStyle="text-gray-600"
                        figureStyle="text-red-700"
                        label="Skipped"
                        figure={totalQuestions - attemptedQuestion}
                    />
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-2 lg:mt-6 lg:rounded-xl lg:p-4">
                    <p className="text-center text-base font-semibold text-gray-900 lg:text-lg">
                        {Number(percentage) >= 70
                            ? '🎉 Excellent Performance!'
                            : Number(percentage) >= 50
                              ? '👍 Good Attempt!'
                              : '💪 Keep Practicing!'}
                    </p>
                    <div>
                        <Button variant="link" onClick={retakeExam}>
                            <RotateCcw />
                            Repeat
                        </Button>
                    </div>
                </div>
            </div>

            {/* Detailed Answers */}
            <div className="mx-auto rounded-md py-6 lg:bg-white lg:p-8 lg:shadow-md">
                <h2 className="mb-4 text-xl font-bold text-primary lg:mb-6">
                    Detailed Review
                </h2>
                <div className="space-y-4">
                    {data.map((mcq, idx) => {
                        const selectedOptionId = selectedAnswers[mcq.id];

                        const selectedOption = mcq.options.find(
                            (opt) => opt.id === selectedOptionId,
                        );

                        const wasAnswered = selectedOptionId !== undefined;
                        const isCorrect =
                            wasAnswered && selectedOption?.correct === true;
                        return (
                            <TestMcqCard
                                mcq={mcq}
                                idx={idx}
                                isCorrect={isCorrect}
                                selectedOptionId={selectedOptionId}
                                wasAnswered={wasAnswered}
                                key={idx}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DemoResult;
