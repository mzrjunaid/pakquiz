import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import LmsLayout from '@/layouts/lms/lms-layout';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    Calendar,
    Flame,
    List,
    Map,
    TrendingUp,
    Zap,
} from 'lucide-react';

export default function LmsIndex() {
    const { auth } = usePage<SharedData>().props;
    return (
        <LmsLayout>
            <section className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[1fr_350px]">
                <main className="flex flex-col gap-6">
                    {/* Welcome Card */}
                    <div className="flex flex-col gap-6 rounded-2xl bg-[#3E3129] p-8 text-white shadow-sm">
                        <span className="w-fit rounded-full bg-[#523A2C] px-3 py-1 text-xs font-medium text-orange-200">
                            ACADEMIC DASHBOARD
                        </span>
                        <div>
                            <h1 className="mb-2 text-4xl font-bold tracking-tight">
                                Welcome back, {auth.user.name.split(' ')[0]}!
                            </h1>
                            <p className="max-w-xl text-base leading-relaxed text-gray-300">
                                You're making great progress towards your{' '}
                                <strong className="text-white">
                                    PPSC CSS Preparation.
                                </strong>{' '}
                                Your goal is closer than ever.
                            </p>
                        </div>
                        <div className="mt-2 flex gap-12">
                            <div>
                                <span className="mb-1 block text-xs font-medium tracking-wider text-gray-400 uppercase">
                                    Exam Date
                                </span>
                                <span className="text-lg font-semibold">
                                    October 15, 2024
                                </span>
                            </div>
                            <div className="w-px bg-white/20"></div>
                            <div>
                                <span className="mb-1 block text-xs font-medium tracking-wider text-gray-400 uppercase">
                                    Days Remaining
                                </span>
                                <span className="text-lg font-semibold">
                                    42 Days
                                </span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Button className="rounded-lg bg-[#B94B1B] px-6 py-5 text-base text-white shadow-md hover:bg-[#A03E14]">
                                Continue Learning
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <Card className="group relative overflow-hidden rounded-2xl border-none py-5 shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-4 p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                                        <Flame className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                        +2 today
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 text-xs font-bold tracking-wider text-gray-500 uppercase">
                                        Study Streak
                                    </div>
                                    <div className="text-3xl font-bold">
                                        7{' '}
                                        <span className="text-xl font-medium text-gray-500">
                                            Days
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-blue-500"></div>
                        </Card>

                        <Card className="group relative overflow-hidden rounded-2xl border-none py-5 shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-4 p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                        <BookOpen className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
                                        2 left today
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 text-xs font-bold tracking-wider text-gray-500 uppercase">
                                        Topics Completed
                                    </div>
                                    <div className="text-3xl font-bold">24</div>
                                </div>
                            </CardContent>
                            <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-[#B94B1B]"></div>
                        </Card>

                        <Card className="group relative overflow-hidden rounded-2xl border-none py-5 shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-4 p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                                        <List className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                                        Target: 2k
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 text-xs font-bold tracking-wider text-gray-500 uppercase">
                                        MCQs Solved
                                    </div>
                                    <div className="text-3xl font-bold">
                                        1,240
                                    </div>
                                </div>
                            </CardContent>
                            <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-red-500"></div>
                        </Card>

                        <Card className="group relative overflow-hidden rounded-2xl border-none py-5 shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-4 p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                                        <Zap className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-md bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600">
                                        Top 5%
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 text-xs font-bold tracking-wider text-gray-500 uppercase">
                                        Accuracy
                                    </div>
                                    <div className="text-3xl font-bold">
                                        88%
                                    </div>
                                </div>
                            </CardContent>
                            <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-sky-400"></div>
                        </Card>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Today's Study Plan */}
                        <Card className="rounded-2xl border-none py-2 shadow-sm">
                            <CardHeader className="flex flex-row items-center justify-between border-b-0 px-6 py-4 pb-2">
                                <CardTitle className="text-xl">
                                    Today's <br /> Study Plan
                                </CardTitle>
                                <div className="flex flex-col items-end text-right text-sm text-gray-500">
                                    <span className="font-semibold text-gray-800">
                                        2h 30m
                                    </span>
                                    <span>total</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3 px-6 py-4">
                                <div className="flex items-start space-x-3 rounded-xl bg-gray-50 p-4 opacity-60">
                                    <Checkbox
                                        id="task1"
                                        checked
                                        disabled
                                        className="mt-1 border-[#B94B1B] bg-[#B94B1B]"
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor="task1"
                                            className="text-sm leading-none font-medium text-gray-500 line-through"
                                        >
                                            General Knowledge
                                        </label>
                                        <p className="text-sm text-gray-400 line-through">
                                            Chapter 4
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 rounded-xl border border-gray-200 p-4">
                                    <Checkbox
                                        id="task2"
                                        className="mt-1 h-5 w-5 rounded-md border-gray-300"
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor="task2"
                                            className="text-sm leading-none font-medium text-gray-800"
                                        >
                                            English Grammar Practice
                                        </label>
                                        <p className="text-sm text-gray-500">
                                            Active Voice & Passive Voice
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 rounded-xl border border-gray-200 p-4">
                                    <Checkbox
                                        id="task3"
                                        className="mt-1 h-5 w-5 rounded-md border-gray-300"
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor="task3"
                                            className="text-sm leading-none font-medium text-gray-800"
                                        >
                                            Current Affairs Review
                                        </label>
                                        <p className="text-sm text-gray-500">
                                            Regional Geopolitics (Aug 2024)
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 border-t border-gray-100 pt-4">
                                    <div className="mb-2 flex justify-between text-xs font-semibold">
                                        <span className="text-gray-600">
                                            Plan Completion
                                        </span>
                                        <span className="text-[#B94B1B]">
                                            33%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-gray-200">
                                        <div
                                            className="h-1.5 rounded-full bg-[#B94B1B]"
                                            style={{ width: '33%' }}
                                        ></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Continue Learning */}
                        <Card className="relative overflow-hidden rounded-2xl border-none bg-[#F5EBE7] shadow-sm">
                            <div className="pointer-events-none absolute top-8 -right-6 text-gray-800 opacity-10">
                                <BookOpen size={180} />
                            </div>
                            <CardHeader className="relative z-10 border-b-0 px-6 py-6 pb-2">
                                <CardTitle className="text-xl">
                                    Continue Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10 flex flex-col gap-4 px-6 py-4">
                                <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FDF0E9] text-[#B94B1B]">
                                            <Map className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                Islamic Studies
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Chapter 2: The Prophet's Life
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-1 flex justify-between text-xs font-medium">
                                        <span className="text-gray-500">
                                            Topic 4 of 6
                                        </span>
                                        <span className="text-[#B94B1B]">
                                            65% Complete
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-gray-100">
                                        <div
                                            className="h-1.5 rounded-full bg-[#B94B1B]"
                                            style={{ width: '65%' }}
                                        ></div>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">
                                    You left off at{' '}
                                    <strong className="text-gray-900">
                                        Section 4.2: The Migration to Madinah.
                                    </strong>{' '}
                                    Review the map before starting the practice
                                    quiz.
                                </p>
                                <Button className="mt-2 w-full rounded-xl bg-[#2D2A26] py-6 text-base text-white shadow-md hover:bg-black">
                                    Resume Lesson
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </main>

                <aside className="flex flex-col gap-6">
                    {/* Current Provincial Rank */}
                    <Card className="rounded-2xl border-none py-2 shadow-sm">
                        <CardHeader className="border-b-0 pb-0 text-center">
                            <CardTitle className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                                Current Provincial Rank
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center pt-6 pb-4">
                            <div className="relative mb-4 flex h-40 w-40 items-center justify-center">
                                <svg
                                    className="h-full w-full -rotate-90 transform"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="#f3f4f6"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="#0284c7"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray="251.2"
                                        strokeDashoffset="62.8"
                                        className="drop-shadow-md"
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center justify-center text-center">
                                    <span className="text-4xl font-bold text-gray-900">
                                        #142
                                    </span>
                                    <span className="mt-1 text-sm text-gray-500">
                                        Punjab
                                    </span>
                                </div>
                            </div>
                            <p className="px-4 text-center text-sm text-gray-600">
                                You've moved up{' '}
                                <strong className="text-gray-900">
                                    12 places
                                </strong>{' '}
                                since last week!
                            </p>
                        </CardContent>
                    </Card>

                    {/* Focus Areas */}
                    <Card className="rounded-2xl border-none py-2 shadow-sm">
                        <CardHeader className="flex flex-row items-center gap-2 border-b-0 px-6 py-4 pb-2">
                            <TrendingUp className="h-5 w-5 text-red-500" />
                            <CardTitle className="text-base font-bold">
                                Focus Areas
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 px-6 py-4">
                            <div className="flex items-center justify-between rounded-xl border border-red-50 bg-[#FFF8F8] p-4">
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">
                                        Current Affairs
                                    </div>
                                    <div className="mt-1 text-[10px] font-bold tracking-wider text-red-600 uppercase">
                                        64% ACCURACY
                                    </div>
                                </div>
                                <Button
                                    size="sm"
                                    className="h-8 rounded-lg bg-[#A02B2B] px-4 text-xs text-white hover:bg-[#8B2525]"
                                >
                                    Improve
                                </Button>
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-[#FAFAFA] p-4">
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">
                                        Mathematics
                                    </div>
                                    <div className="mt-1 text-[10px] font-bold tracking-wider text-[#A02B2B] uppercase">
                                        71% ACCURACY
                                    </div>
                                </div>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-8 rounded-lg border-[#8D7B6D] px-4 text-xs text-[#63554A] hover:bg-[#8D7B6D] hover:text-white"
                                >
                                    Improve
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Next Live Mock */}
                    <Card className="rounded-2xl border-none bg-[#A03E14] py-2 text-white shadow-sm">
                        <CardHeader className="border-b-0 px-6 py-4 pb-2">
                            <div className="mb-2 text-xs font-bold tracking-widest text-orange-200 uppercase">
                                Next Live Mock
                            </div>
                            <CardTitle className="text-xl">
                                Full Length CSS Mock Exam
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 px-6 py-4">
                            <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-4">
                                <Calendar className="mt-0.5 h-5 w-5 text-white" />
                                <div>
                                    <div className="text-sm font-semibold">
                                        Saturday, Aug 31
                                    </div>
                                    <div className="mt-1 text-xs text-orange-100">
                                        10:00 AM - 1:00 PM
                                    </div>
                                </div>
                            </div>
                            <Button className="w-full rounded-xl bg-white py-6 font-semibold text-[#A03E14] hover:bg-gray-100">
                                Set Reminder
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Achievements */}
                    <div className="flex flex-col gap-4 px-2">
                        <h3 className="mb-2 font-bold text-gray-900">
                            Achievements
                        </h3>
                        <div className="relative flex flex-col gap-6 border-l-2 border-gray-200 pb-2 pl-4">
                            <div className="relative">
                                <div className="absolute top-1 -left-[21px] h-3 w-3 rounded-full bg-green-500 ring-4 ring-white"></div>
                                <div className="text-sm font-semibold text-gray-900">
                                    Perfect Score in Quiz
                                </div>
                                <div className="mt-0.5 text-xs text-gray-500">
                                    Pakistan Affairs: Geography
                                </div>
                                <div className="mt-2 text-[10px] tracking-wider text-gray-400 uppercase">
                                    2 HOURS AGO
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute top-1 -left-[21px] h-3 w-3 rounded-full bg-orange-500 ring-4 ring-white"></div>
                                <div className="text-sm font-semibold text-gray-900">
                                    Weekly Goal Reached
                                </div>
                                <div className="mt-0.5 text-xs text-gray-500">
                                    Completed 500+ MCQs
                                </div>
                                <div className="mt-2 text-[10px] tracking-wider text-gray-400 uppercase">
                                    YESTERDAY
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute top-1 -left-[21px] h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white"></div>
                                <div className="text-sm font-semibold text-gray-900">
                                    New Topic Unlocked
                                </div>
                                <div className="mt-0.5 text-xs text-gray-500">
                                    CSS Essay: Economy Trends
                                </div>
                                <div className="mt-2 text-[10px] tracking-wider text-gray-400 uppercase">
                                    2 DAYS AGO
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </LmsLayout>
    );
}
