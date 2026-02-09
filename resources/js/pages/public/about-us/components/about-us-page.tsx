import { Button } from '@/components/ui/button';
import {
    Award,
    BarChart3,
    BookOpen,
    CheckCircle,
    Shield,
    Sparkles,
    Target,
    TrendingUp,
    Users,
    Zap,
} from 'lucide-react';

export default function AboutPakQuiz() {
    const problems = [
        'Scattered study material',
        'Outdated MCQs',
        'Lack of practice analytics',
        'No clear preparation roadmap',
    ];

    const exams = [
        'FPSC',
        'PPSC',
        'NTS',
        'CSS / PMS',
        'Testing Services',
        'Departmental Tests',
    ];

    const features = [
        {
            icon: BookOpen,
            title: 'Comprehensive MCQs Database',
            description:
                'A continuously growing collection of verified MCQs covering subjects, topics, departments, testing services, and competitive exam papers. Each MCQ is carefully categorized to ensure focused preparation instead of random practice.',
            color: 'blue',
        },
        {
            icon: Award,
            title: 'Practice Papers & Demo Tests',
            description:
                'Attempt demo practice papers, subject-wise tests, and topic-focused quizzes. Test your knowledge in a real exam-like environment and build confidence before the actual test.',
            color: 'green',
        },
        {
            icon: BarChart3,
            title: 'Smart Progress Tracking',
            description:
                'Advanced features for serious aspirants including performance analytics, accuracy tracking, custom practice papers, and topic strength & weakness analysis. Transform MCQs practice into data-driven preparation.',
            color: 'purple',
        },
        {
            icon: Sparkles,
            title: 'AI-Assisted Learning',
            description:
                'PakQuiz integrates AI to improve content quality, assist with learning insights, and enhance personalized practice experiences. Our goal is not just testing—but learning improvement.',
            color: 'orange',
        },
    ];

    const targetAudience = [
        'Government job aspirants',
        'CSS / PMS candidates',
        'University & entry test students',
        'Departmental exam candidates',
        'Anyone preparing through MCQs',
    ];

    const commitments = [
        'Regular content updates',
        'Accuracy & relevance',
        'Continuous platform improvement',
        'Listening to user feedback',
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-primary/65 via-primary/80 to-primary/65 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="mb-4 flex items-center justify-center lg:gap-3">
                            <Target className="w-12 lg:h-12" />
                            <h1 className="text-2xl font-bold md:text-5xl lg:text-4xl">
                                About PakQuiz
                            </h1>
                        </div>
                        <p className="mx-auto max-w-3xl text-base text-blue-100 md:text-2xl">
                            Smart MCQs Preparation Platform for Pakistan
                        </p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-50 md:text-lg">
                            Making exam preparation structured, accessible, and
                            effective for students and job seekers across
                            Pakistan.
                        </p>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Mission Statement */}
                <section className="mb-16">
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                                Our Mission
                            </h2>
                            <p className="text-base leading-relaxed text-gray-700 md:text-xl">
                                PakQuiz is a modern, AI-assisted online MCQs
                                preparation platform built for students, job
                                seekers, and competitive exam aspirants across
                                Pakistan. Our mission is simple:{' '}
                                <strong className="text-blue-600">
                                    make exam preparation structured,
                                    accessible, and effective.
                                </strong>
                            </p>
                            <p className="mt-4 text-base text-gray-600 md:text-lg">
                                We help candidates prepare for government and
                                private sector exams through subject-wise,
                                topic-wise, and exam-oriented multiple choice
                                questions—designed according to real testing
                                patterns.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why PakQuiz Exists */}
                <section className="mb-16">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                        Why PakQuiz Exists
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* The Challenge */}
                        <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-4 md:p-8">
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                The Challenge
                            </h3>
                            <p className="mb-4 text-base text-gray-700 md:text-lg">
                                In Pakistan, thousands of candidates appear
                                every year in exams conducted by:
                            </p>
                            <div className="mb-6 grid grid-cols-2 gap-3">
                                {exams.map((exam, index) => (
                                    <div
                                        key={index}
                                        className="rounded-lg border border-red-200 bg-white px-4 py-2 text-center font-semibold text-gray-800"
                                    >
                                        {exam}
                                    </div>
                                ))}
                            </div>
                            <p className="mb-3 font-semibold text-gray-700">
                                Most aspirants struggle with:
                            </p>
                            <ul className="space-y-2">
                                {problems.map((problem, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></div>
                                        <span className="text-gray-700">
                                            {problem}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* The Solution */}
                        <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8">
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Our Solution
                            </h3>
                            <div className="mb-6 flex items-center gap-3">
                                <Shield className="h-12 w-12 text-green-600" />
                                <p className="text-xl font-semibold text-gray-800">
                                    PakQuiz was built to solve these exact
                                    problems.
                                </p>
                            </div>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                We provide a centralized, modern platform that
                                brings together quality MCQs, smart analytics,
                                and AI-powered learning—all in one place.
                            </p>
                            <p className="leading-relaxed text-gray-700">
                                No more hunting for scattered materials. No more
                                guessing your weak areas. Just focused,
                                data-driven exam preparation.
                            </p>
                            <div className="mt-6 rounded-lg border border-green-300 bg-white p-4">
                                <p className="font-medium text-green-800">
                                    ✓ Organized content ✓ Updated regularly ✓
                                    Smart tracking ✓ Clear roadmap
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Offer */}
                <section className="mb-16">
                    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
                        What We Offer
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
                        Everything you need for effective MCQs preparation, from
                        basic practice to advanced analytics
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const colorClasses = {
                                blue: 'from-blue-500 to-blue-600',
                                green: 'from-green-500 to-green-600',
                                purple: 'from-purple-500 to-purple-600',
                                orange: 'from-orange-500 to-orange-600',
                            };

                            return (
                                <div
                                    key={index}
                                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl md:p-6"
                                >
                                    <div
                                        className={`h-10 w-10 bg-gradient-to-br md:h-14 md:w-14 ${colorClasses[feature.color]} mb-4 flex items-center justify-center rounded-lg`}
                                    >
                                        <Icon className="h-5 w-5 text-white md:h-8 md:w-8" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        {feature.description}
                                    </p>
                                    {feature.title ===
                                        'Smart Progress Tracking' && (
                                        <div className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                                            Premium Feature
                                        </div>
                                    )}
                                    {feature.title ===
                                        'AI-Assisted Learning' && (
                                        <div className="mt-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                                            Coming Soon & Evolving
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Who PakQuiz Is For */}
                <section className="mb-16">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 p-4 text-white shadow-xl md:p-12">
                        <div className="mb-6 flex items-center justify-center gap-3">
                            <Users className="h-8 w-8 md:h-10 md:w-10" />
                            <h2 className="text-xl font-bold md:text-3xl">
                                Who PakQuiz Is For
                            </h2>
                        </div>

                        <p className="text-md mx-auto mb-8 max-w-3xl text-center text-blue-50 md:text-lg">
                            Whether you're starting from scratch or revising
                            before an exam, PakQuiz adapts to your preparation
                            style.
                        </p>

                        <div className="grid gap-4 md:grid-cols-5">
                            {targetAudience.map((audience, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm"
                                >
                                    <CheckCircle className="mx-auto mb-2 h-6 w-6" />
                                    <p className="font-semibold">{audience}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Vision */}
                <section className="mb-16">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <TrendingUp className="h-10 w-10 text-primary" />
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Our Vision
                                </h2>
                            </div>
                            <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                                Our long-term vision is to become{' '}
                                <strong className="text-primary">
                                    Pakistan's most trusted digital MCQs
                                    preparation platform
                                </strong>
                                , combining:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-3">
                                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                                    <span className="font-medium text-gray-800">
                                        Authentic content
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 rounded-lg bg-green-50 p-3">
                                    <Zap className="h-5 w-5 flex-shrink-0 text-green-600" />
                                    <span className="font-medium text-gray-800">
                                        Smart technology
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 rounded-lg bg-purple-50 p-3">
                                    <Award className="h-5 w-5 flex-shrink-0 text-purple-600" />
                                    <span className="font-medium text-gray-800">
                                        Clean user experience
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                                    <Users className="h-5 w-5 flex-shrink-0 text-orange-600" />
                                    <span className="font-medium text-gray-800">
                                        Affordable learning access
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8">
                            <blockquote className="mb-4 text-base text-gray-800 italic md:text-xl">
                                "We believe quality exam preparation should be
                                available to everyone, not limited by location
                                or expensive academies."
                            </blockquote>
                            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                                PakQuiz democratizes access to quality MCQs
                                preparation, ensuring that every aspiring
                                candidate—regardless of their background—has the
                                tools to succeed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Commitment */}
                <section className="mb-16">
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
                        <div className="mb-8 text-center">
                            <div className="mb-4 flex items-center justify-center gap-3">
                                <Shield className="h-10 w-10 text-green-600" />
                                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                    Our Commitment
                                </h2>
                            </div>
                            <p className="text-base text-gray-600 md:text-lg">
                                We are committed to excellence in every aspect
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
                            {commitments.map((commitment, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 p-4"
                                >
                                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                                    <span className="text-sm font-medium text-gray-800 md:text-base">
                                        {commitment}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="mx-auto mt-8 max-w-2xl text-center text-base text-gray-700 md:text-lg">
                            PakQuiz is not just a website—it's a{' '}
                            <strong className="text-primary">
                                learning ecosystem built for exam success
                            </strong>
                            .
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section>
                    <div className="rounded-2xl bg-gradient-to-r from-primary/65 to-primary/75 p-4 text-center text-white shadow-2xl md:p-12">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                            Start Practising Today
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-50">
                            Whether you're preparing for your first test or
                            final revision, PakQuiz is here to support your
                            journey.
                        </p>

                        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="rounded-lg bg-primary-foreground font-bold text-primary shadow-lg transition-colors hover:bg-primary hover:text-white md:text-lg"
                            >
                                Create Free Account
                            </Button>
                            <Button
                                size="lg"
                                className="bg-priamry-foreground rounded-lg border-2 border-white/30 font-bold text-white transition-colors hover:bg-primary md:text-lg"
                            >
                                Explore Premium
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-blue-100">
                            <CheckCircle className="h-5 w-5" />
                            <span className="text-sm font-medium md:text-base">
                                Practice smart.
                            </span>
                            <CheckCircle className="h-5 w-5" />
                            <span className="text-sm font-medium md:text-base">
                                Track progress.
                            </span>
                            <CheckCircle className="h-5 w-5" />
                            <span className="text-sm font-medium md:text-base">
                                Succeed confidently.
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
