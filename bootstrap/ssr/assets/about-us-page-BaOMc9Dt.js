import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-BlmebLQZ.js";
import { Target, Shield, BookOpen, Award, BarChart3, Sparkles, Users, CheckCircle, TrendingUp, Zap } from "lucide-react";
import "class-variance-authority";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
function AboutPakQuiz() {
  const problems = [
    "Scattered study material",
    "Outdated MCQs",
    "Lack of practice analytics",
    "No clear preparation roadmap"
  ];
  const exams = [
    "FPSC",
    "PPSC",
    "NTS",
    "CSS / PMS",
    "Testing Services",
    "Departmental Tests"
  ];
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive MCQs Database",
      description: "A continuously growing collection of verified MCQs covering subjects, topics, departments, testing services, and competitive exam papers. Each MCQ is carefully categorized to ensure focused preparation instead of random practice.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Practice Papers & Demo Tests",
      description: "Attempt demo practice papers, subject-wise tests, and topic-focused quizzes. Test your knowledge in a real exam-like environment and build confidence before the actual test.",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Smart Progress Tracking",
      description: "Advanced features for serious aspirants including performance analytics, accuracy tracking, custom practice papers, and topic strength & weakness analysis. Transform MCQs practice into data-driven preparation.",
      color: "purple"
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Learning",
      description: "PakQuiz integrates AI to improve content quality, assist with learning insights, and enhance personalized practice experiences. Our goal is not just testing—but learning improvement.",
      color: "orange"
    }
  ];
  const targetAudience = [
    "Government job aspirants",
    "CSS / PMS candidates",
    "University & entry test students",
    "Departmental exam candidates",
    "Anyone preparing through MCQs"
  ];
  const commitments = [
    "Regular content updates",
    "Accuracy & relevance",
    "Continuous platform improvement",
    "Listening to user feedback"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-gradient-to-r from-primary/65 via-primary/80 to-primary/65 text-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-center lg:gap-3", children: [
        /* @__PURE__ */ jsx(Target, { className: "w-12 lg:h-12" }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold md:text-5xl lg:text-4xl", children: "About PakQuiz" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-3xl text-base text-blue-100 md:text-2xl", children: "Smart MCQs Preparation Platform for Pakistan" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-base text-blue-50 md:text-lg", children: "Making exam preparation structured, accessible, and effective for students and job seekers across Pakistan." })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("section", { className: "mb-16", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold text-gray-900 lg:text-3xl", children: "Our Mission" }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed text-gray-700 md:text-xl", children: [
          "PakQuiz is a modern, AI-assisted online MCQs preparation platform built for students, job seekers, and competitive exam aspirants across Pakistan. Our mission is simple:",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-blue-600", children: "make exam preparation structured, accessible, and effective." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-gray-600 md:text-lg", children: "We help candidates prepare for government and private sector exams through subject-wise, topic-wise, and exam-oriented multiple choice questions—designed according to real testing patterns." })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-8 text-center text-3xl font-bold text-gray-900", children: "Why PakQuiz Exists" }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-4 md:p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-2xl font-bold text-gray-900", children: "The Challenge" }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 text-base text-gray-700 md:text-lg", children: "In Pakistan, thousands of candidates appear every year in exams conducted by:" }),
            /* @__PURE__ */ jsx("div", { className: "mb-6 grid grid-cols-2 gap-3", children: exams.map((exam, index) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "rounded-lg border border-red-200 bg-white px-4 py-2 text-center font-semibold text-gray-800",
                children: exam
              },
              index
            )) }),
            /* @__PURE__ */ jsx("p", { className: "mb-3 font-semibold text-gray-700", children: "Most aspirants struggle with:" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: problems.map((problem, index) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "flex items-start gap-2",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: problem })
                ]
              },
              index
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-2xl font-bold text-gray-900", children: "Our Solution" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-12 w-12 text-green-600" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-gray-800", children: "PakQuiz was built to solve these exact problems." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed text-gray-700", children: "We provide a centralized, modern platform that brings together quality MCQs, smart analytics, and AI-powered learning—all in one place." }),
            /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-gray-700", children: "No more hunting for scattered materials. No more guessing your weak areas. Just focused, data-driven exam preparation." }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-lg border border-green-300 bg-white p-4", children: /* @__PURE__ */ jsx("p", { className: "font-medium text-green-800", children: "✓ Organized content ✓ Updated regularly ✓ Smart tracking ✓ Clear roadmap" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-center text-3xl font-bold text-gray-900", children: "What We Offer" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mb-10 max-w-2xl text-center text-gray-600", children: "Everything you need for effective MCQs preparation, from basic practice to advanced analytics" }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2", children: features.map((feature, index) => {
          const Icon = feature.icon;
          const colorClasses = {
            blue: "from-blue-500 to-blue-600",
            green: "from-green-500 to-green-600",
            purple: "from-purple-500 to-purple-600",
            orange: "from-orange-500 to-orange-600"
          };
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: "rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl md:p-6",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `h-10 w-10 bg-gradient-to-br md:h-14 md:w-14 ${colorClasses[feature.color]} mb-4 flex items-center justify-center rounded-lg`,
                    children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-white md:h-8 md:w-8" })
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold text-gray-900", children: feature.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-gray-700", children: feature.description }),
                feature.title === "Smart Progress Tracking" && /* @__PURE__ */ jsx("div", { className: "mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700", children: "Premium Feature" }),
                feature.title === "AI-Assisted Learning" && /* @__PURE__ */ jsx("div", { className: "mt-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700", children: "Coming Soon & Evolving" })
              ]
            },
            index
          );
        }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 p-4 text-white shadow-xl md:p-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsx(Users, { className: "h-8 w-8 md:h-10 md:w-10" }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold md:text-3xl", children: "Who PakQuiz Is For" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-md mx-auto mb-8 max-w-3xl text-center text-blue-50 md:text-lg", children: "Whether you're starting from scratch or revising before an exam, PakQuiz adapts to your preparation style." }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-5", children: targetAudience.map((audience, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-lg border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm",
            children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "mx-auto mb-2 h-6 w-6" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: audience })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-10 w-10 text-primary" }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Our Vision" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mb-4 text-sm leading-relaxed text-gray-700 md:text-base", children: [
            "Our long-term vision is to become",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "Pakistan's most trusted digital MCQs preparation platform" }),
            ", combining:"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg bg-blue-50 p-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 flex-shrink-0 text-blue-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Authentic content" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg bg-green-50 p-3", children: [
              /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 flex-shrink-0 text-green-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Smart technology" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg bg-purple-50 p-3", children: [
              /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 flex-shrink-0 text-purple-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Clean user experience" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg bg-orange-50 p-3", children: [
              /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 flex-shrink-0 text-orange-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: "Affordable learning access" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8", children: [
          /* @__PURE__ */ jsx("blockquote", { className: "mb-4 text-base text-gray-800 italic md:text-xl", children: '"We believe quality exam preparation should be available to everyone, not limited by location or expensive academies."' }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-gray-700 md:text-base", children: "PakQuiz democratizes access to quality MCQs preparation, ensuring that every aspiring candidate—regardless of their background—has the tools to succeed." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-10 w-10 text-green-600" }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 md:text-3xl", children: "Our Commitment" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600 md:text-lg", children: "We are committed to excellence in every aspect" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-3xl gap-6 md:grid-cols-2", children: commitments.map((commitment, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-3 rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 p-4",
            children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-6 w-6 flex-shrink-0 text-green-600" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-800 md:text-base", children: commitment })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsxs("p", { className: "mx-auto mt-8 max-w-2xl text-center text-base text-gray-700 md:text-lg", children: [
          "PakQuiz is not just a website—it's a",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "learning ecosystem built for exam success" }),
          "."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-gradient-to-r from-primary/65 to-primary/75 p-4 text-center text-white shadow-2xl md:p-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-4xl", children: "Start Practising Today" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mb-8 max-w-2xl text-xl text-blue-50", children: "Whether you're preparing for your first test or final revision, PakQuiz is here to support your journey." }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "rounded-lg bg-primary-foreground font-bold text-primary shadow-lg transition-colors hover:bg-primary hover:text-white md:text-lg",
              children: "Create Free Account"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "bg-priamry-foreground rounded-lg border-2 border-white/30 font-bold text-white transition-colors hover:bg-primary md:text-lg",
              children: "Explore Premium"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-blue-100", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium md:text-base", children: "Practice smart." }),
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium md:text-base", children: "Track progress." }),
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium md:text-base", children: "Succeed confidently." })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  AboutPakQuiz as default
};
