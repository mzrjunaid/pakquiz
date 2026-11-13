import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import LmsLayout from '@/layouts/lms/lms-layout';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import {
    Bookmark,
    BookOpen,
    CheckCircle2,
    ChevronDown,
    Clock,
    Eye,
    HelpCircle,
    Lock,
    Medal,
    Search,
} from 'lucide-react';

export default function SubjectShow() {
    const { auth } = usePage<SharedData>().props;

    return (
        <LmsLayout>
            <div className="flex flex-col gap-8 p-6">
                {/* Header Section */}
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div className="flex-1">
                        <div className="mb-3 flex items-center gap-2 text-sm font-bold tracking-widest text-[#B94B1B] uppercase">
                            <BookOpen className="h-4 w-4" />
                            <span>Subject Detail</span>
                        </div>
                        <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
                            General Knowledge
                        </h1>
                        <p className="max-w-2xl text-base leading-relaxed text-gray-500">
                            World Geography, International Organizations, and
                            Current Affairs. A comprehensive study track
                            designed for master proficiency in global dynamics.
                        </p>
                    </div>

                    <div className="flex items-center gap-8 rounded-2xl bg-white/50 p-4">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-[#B94B1B]">
                                65%
                            </span>
                            <span className="mt-1 text-xs font-bold tracking-wider text-gray-500 uppercase">
                                Completed
                            </span>
                        </div>
                        <div className="h-12 w-px bg-gray-200"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-sky-700">
                                78h
                            </span>
                            <span className="mt-1 text-xs font-bold tracking-wider text-gray-500 uppercase">
                                Remaining
                            </span>
                        </div>
                        <div className="h-12 w-px bg-gray-200"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-gray-900">
                                12/20
                            </span>
                            <span className="mt-1 text-xs font-bold tracking-wider text-gray-500 uppercase">
                                Mastered
                            </span>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <Input
                            placeholder="Search topics (e.g. Climate, Treaties)..."
                            className="w-full rounded-xl border-gray-200 py-6 pl-10"
                        />
                    </div>
                    <div className="flex w-full gap-3 sm:w-auto">
                        <Button
                            variant="outline"
                            className="min-w-[140px] justify-between rounded-xl border-gray-200 bg-white px-5 py-6 font-normal text-gray-600"
                        >
                            Difficulty: All
                            <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                        </Button>
                        <Button
                            variant="outline"
                            className="min-w-[180px] justify-between rounded-xl border-gray-200 bg-white px-5 py-6 font-normal text-gray-600"
                        >
                            Status: In Progress
                            <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                        </Button>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Topic Card 1 */}
                        <Card className="h-fit rounded-2xl border-none shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-6 p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl leading-tight font-bold text-gray-900">
                                        Solar System
                                        <br />
                                        Basics
                                    </h3>
                                    <span className="rounded bg-[#F5EBE7] px-2 py-1 text-[10px] font-bold tracking-widest text-[#8D7B6D] uppercase">
                                        Intermediate
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="h-4 w-4" /> 15
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <HelpCircle className="h-4 w-4" /> 120
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4" /> 2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="mb-2 flex justify-between text-xs font-semibold">
                                        <span className="text-gray-500">
                                            8h Est.
                                        </span>
                                        <span className="text-[#B94B1B]">
                                            85%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-[#F5EBE7]">
                                        <div
                                            className="h-1.5 rounded-full bg-[#0284c7]"
                                            style={{ width: '85%' }}
                                        ></div>
                                    </div>
                                </div>
                                <Button className="w-full rounded-xl bg-[#B94B1B] py-6 text-base text-white shadow-sm hover:bg-[#A03E14]">
                                    Continue
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Topic Card 2 */}
                        <Card className="h-fit rounded-2xl border-none shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-6 p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl leading-tight font-bold text-gray-900">
                                        UN Organizations
                                    </h3>
                                    <span className="rounded bg-[#F5EBE7] px-2 py-1 text-[10px] font-bold tracking-widest text-[#8D7B6D] uppercase">
                                        Intermediate
                                    </span>
                                </div>
                                <div className="mt-7 flex items-center gap-4 text-sm font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="h-4 w-4" /> 15
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <HelpCircle className="h-4 w-4" /> 120
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4" /> 2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="mb-2 flex justify-between text-xs font-semibold">
                                        <span className="text-gray-500">
                                            8h Est.
                                        </span>
                                        <span className="text-[#B94B1B]">
                                            40%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-[#F5EBE7]">
                                        <div
                                            className="h-1.5 rounded-full bg-[#0284c7]"
                                            style={{ width: '40%' }}
                                        ></div>
                                    </div>
                                </div>
                                <Button className="w-full rounded-xl bg-[#B94B1B] py-6 text-base text-white shadow-sm hover:bg-[#A03E14]">
                                    Continue
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Topic Card 3 */}
                        <Card className="h-fit rounded-2xl border-none shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-6 p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl leading-tight font-bold text-gray-900">
                                        World Rivers
                                    </h3>
                                    <span className="rounded bg-[#F5EBE7] px-2 py-1 text-[10px] font-bold tracking-widest text-[#8D7B6D] uppercase">
                                        Intermediate
                                    </span>
                                </div>
                                <div className="mt-7 flex items-center gap-4 text-sm font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="h-4 w-4" /> 15
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <HelpCircle className="h-4 w-4" /> 120
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4" /> 2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="mb-2 flex justify-between text-xs font-semibold">
                                        <span className="text-gray-500">
                                            8h Est.
                                        </span>
                                        <span className="text-[#B94B1B]">
                                            15%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-[#F5EBE7]">
                                        <div
                                            className="h-1.5 rounded-full bg-[#0284c7]"
                                            style={{ width: '15%' }}
                                        ></div>
                                    </div>
                                </div>
                                <Button className="w-full rounded-xl bg-[#B94B1B] py-6 text-base text-white shadow-sm hover:bg-[#A03E14]">
                                    Continue
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Topic Card 4 */}
                        <Card className="h-fit rounded-2xl border-none shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-6 p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl leading-tight font-bold text-gray-900">
                                        Mountain Ranges
                                    </h3>
                                    <span className="rounded bg-[#F5EBE7] px-2 py-1 text-[10px] font-bold tracking-widest text-[#8D7B6D] uppercase">
                                        Intermediate
                                    </span>
                                </div>
                                <div className="mt-7 flex items-center gap-4 text-sm font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="h-4 w-4" /> 15
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <HelpCircle className="h-4 w-4" /> 120
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4" /> 2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="mb-2 flex justify-between text-xs font-semibold">
                                        <span className="text-gray-500">
                                            8h Est.
                                        </span>
                                        <span className="text-[#B94B1B]">
                                            0%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-[#F5EBE7]">
                                        <div
                                            className="h-1.5 rounded-full bg-[#0284c7]"
                                            style={{ width: '0%' }}
                                        ></div>
                                    </div>
                                </div>
                                <Button className="w-full rounded-xl bg-[#B94B1B] py-6 text-base text-white shadow-sm hover:bg-[#A03E14]">
                                    Continue
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Topic Card 5 */}
                        <Card className="h-fit rounded-2xl border-none shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-6 p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl leading-tight font-bold text-gray-900">
                                        Global Climate
                                    </h3>
                                    <span className="rounded bg-[#F5EBE7] px-2 py-1 text-[10px] font-bold tracking-widest text-[#8D7B6D] uppercase">
                                        Intermediate
                                    </span>
                                </div>
                                <div className="mt-7 flex items-center gap-4 text-sm font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="h-4 w-4" /> 15
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <HelpCircle className="h-4 w-4" /> 120
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4" /> 2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="mb-2 flex justify-between text-xs font-semibold">
                                        <span className="text-gray-500">
                                            8h Est.
                                        </span>
                                        <span className="text-[#B94B1B]">
                                            60%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-[#F5EBE7]">
                                        <div
                                            className="h-1.5 rounded-full bg-[#0284c7]"
                                            style={{ width: '60%' }}
                                        ></div>
                                    </div>
                                </div>
                                <Button className="w-full rounded-xl bg-[#B94B1B] py-6 text-base text-white shadow-sm hover:bg-[#A03E14]">
                                    Continue
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Topic Card 6 */}
                        <Card className="h-fit rounded-2xl border-none shadow-sm transition-shadow hover:shadow-md">
                            <CardContent className="flex flex-col gap-6 p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl leading-tight font-bold text-gray-900">
                                        International
                                        <br />
                                        Treaties
                                    </h3>
                                    <span className="rounded bg-[#F5EBE7] px-2 py-1 text-[10px] font-bold tracking-widest text-[#8D7B6D] uppercase">
                                        Intermediate
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="h-4 w-4" /> 15
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <HelpCircle className="h-4 w-4" /> 120
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4" /> 2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="mb-2 flex justify-between text-xs font-semibold">
                                        <span className="text-gray-500">
                                            8h Est.
                                        </span>
                                        <span className="text-[#B94B1B]">
                                            10%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-[#F5EBE7]">
                                        <div
                                            className="h-1.5 rounded-full bg-[#0284c7]"
                                            style={{ width: '10%' }}
                                        ></div>
                                    </div>
                                </div>
                                <Button className="w-full rounded-xl bg-[#B94B1B] py-6 text-base text-white shadow-sm hover:bg-[#A03E14]">
                                    Continue
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Sidebar */}
                    <div className="flex flex-col gap-6">
                        {/* Recent Activity */}
                        <Card className="rounded-2xl border-none bg-[#FDF7F5] pb-2 shadow-sm">
                            <CardHeader className="flex flex-row items-center gap-2 border-b-0 px-6 py-6 pb-4">
                                <Clock className="h-5 w-5 text-[#B94B1B]" />
                                <CardTitle className="text-lg font-bold">
                                    Recent Activity
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-6 px-6 py-2">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0284c7] text-white">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">
                                            Completed Quiz: Planets
                                        </div>
                                        <div className="mt-1 text-xs text-gray-500">
                                            2 hours ago • Score: 92%
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5B496] text-[#A03E14]">
                                        <Eye className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">
                                            Viewed Lesson: UN Charter
                                        </div>
                                        <div className="mt-1 text-xs text-gray-500">
                                            5 hours ago • 12 mins read
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B94B1B] text-white">
                                        <Bookmark className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">
                                            Bookmarked: Kyoto Protocol
                                        </div>
                                        <div className="mt-1 text-xs text-gray-500">
                                            Yesterday
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="mt-2 w-full rounded-xl border-[#E5D7D1] bg-transparent py-6 text-[#63554A] hover:bg-[#F5EBE7]"
                                >
                                    View All Activity
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Achievements */}
                        <Card className="rounded-2xl border-none bg-[#FDF7F5] pb-2 shadow-sm">
                            <CardHeader className="flex flex-row items-center gap-2 border-b-0 px-6 py-6 pb-2">
                                <Medal className="h-5 w-5 text-[#B94B1B]" />
                                <CardTitle className="text-lg font-bold">
                                    Achievements
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 px-6 py-4">
                                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A03E14] text-white">
                                        <Medal className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">
                                            Geography Guru
                                        </div>
                                        <div className="mt-0.5 text-xs text-gray-500">
                                            Mastered 10 topics in World
                                            Geography
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-xl border border-white bg-white/50 p-4 opacity-60">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200 text-gray-400">
                                        <Lock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-500">
                                            Diplomatic Genius
                                        </div>
                                        <div className="mt-0.5 text-xs text-gray-400">
                                            Locked: Finish UN Module
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Premium Resource */}
                        <div className="relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-2xl bg-[#3E3129] p-6 text-white shadow-sm">
                            <div
                                className="pointer-events-none absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
                                    backgroundSize: '20px 20px',
                                }}
                            ></div>
                            {/* Dummy Map Shape via SVG or just generic background for now */}
                            <div className="pointer-events-none absolute top-0 right-0 mt-4 w-full text-center text-xs opacity-20">
                                Subject Details: General Knowledge
                            </div>

                            <div className="relative z-10">
                                <div className="mb-2 text-xs font-bold tracking-widest text-orange-200 uppercase">
                                    Premium Resource
                                </div>
                                <h3 className="mb-3 text-xl leading-tight font-bold">
                                    Exclusive Webinar: Global Trade 2024
                                </h3>
                                <p className="text-sm text-gray-300">
                                    Join world-leading experts this Friday.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LmsLayout>
    );
}
