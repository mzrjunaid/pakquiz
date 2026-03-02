import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-BlmebLQZ.js";
import { Brain, Target, Bookmark, BookOpen, Users, TrendingUp, FileText, Trophy, Bot } from "lucide-react";
import { Link } from "@inertiajs/react";
import "class-variance-authority";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
const stats = [
  { number: "50,000+", label: "Active Users", icon: Users },
  { number: "100,000+", label: "MCQs Available", icon: FileText },
  { number: "95%", label: "Success Rate", icon: Trophy },
  { number: "24/7", label: "AI Support", icon: Bot }
];
const features = [
  {
    icon: Brain,
    title: "AI-Enhanced MCQs",
    description: "Intelligent question rephrasing and explanation generation",
    count: "5,000+"
  },
  {
    icon: Target,
    title: "Mock Tests",
    description: "Realistic exam simulations with detailed analytics",
    count: "500+"
  },
  {
    icon: Bookmark,
    title: "Custom Tests",
    description: "Create personalized test sets based on your needs",
    count: "Unlimited"
  },
  {
    icon: BookOpen,
    title: "Subject-Based",
    description: "Comprehensive coverage across multiple subjects",
    count: "50+"
  },
  {
    icon: Users,
    title: "Job-Specific",
    description: "Targeted preparation for career paths",
    count: "100+"
  },
  {
    icon: TrendingUp,
    title: "Most Repeating",
    description: "AI-identified frequently asked questions",
    count: "Top 10K"
  }
];
const mostRepeatingMCQs = [
  { question: "What is the speed of light in vacuum?", attempts: 45e3, subject: "Physics" },
  { question: "Who wrote Romeo and Juliet?", attempts: 38e3, subject: "English" },
  { question: "What is the chemical formula for water?", attempts: 42e3, subject: "Chemistry" },
  { question: "What is 2 + 2?", attempts: 67e3, subject: "Mathematics" },
  { question: "What is the largest planet in our solar system?", attempts: 35e3, subject: "Geography" }
];
function PageSidebar({
  children,
  feature = true,
  mostRepeatingMCQ = true,
  stat = true,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: `space-y-8 ${className}`, children: [
    children,
    feature && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-card p-6 shadow-md", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-semibold", children: "Platform Features" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: features.map((feature2, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center space-x-3",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-black", children: /* @__PURE__ */ jsx(feature2.icon, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-foreground", children: feature2.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300", children: feature2.count })
            ] })
          ]
        },
        index
      )) })
    ] }),
    mostRepeatingMCQ && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-card p-4 shadow-md md:p-6", children: [
      /* @__PURE__ */ jsxs("h3", { className: "mb-2 flex items-center text-lg font-semibold md:mb-4", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "mr-2 h-5 w-5" }),
        "Most Repeating MCQs"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: mostRepeatingMCQs.map((mcq, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "mb:pb-3 overflow-hidden border-b border-gray-100 pb-2 last:border-b-0",
          children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "#",
                className: "text-sm font-semibold whitespace-normal hover:underline",
                children: mcq.question
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "max-w-40 truncate text-xs text-gray-500 dark:text-gray-300", children: mcq.subject }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-600 dark:text-gray-300", children: [
                mcq.attempts.toLocaleString(),
                " attempts"
              ] })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx(Button, { variant: "outline", className: "mt-2 w-full md:mt-4", children: "View All Trending" })
    ] }),
    stat && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.slice(2).map((stat2, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-lg border border-gray-200 bg-card p-4 text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-2 flex items-center justify-center", children: /* @__PURE__ */ jsx(stat2.icon, { className: "h-6 w-6 text-gray-600" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-black", children: stat2.number }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: stat2.label })
        ]
      },
      index
    )) })
  ] });
}
export {
  PageSidebar as default
};
