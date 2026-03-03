import { jsx, jsxs } from "react/jsx-runtime";
import { M as McqCard } from "./mcq-card-zJC6TJdW.js";
import { B as Badge } from "./badge-CSOzNZ1b.js";
import { B as Button } from "./button-BlmebLQZ.js";
import { u as useIsMobile } from "./index-Bj4QWzCK.js";
import { FileText, ClipboardList, Users, BookOpen, Layers, Building2, Tag, Bot, Play, Eye } from "lucide-react";
import { m as mcqs } from "./index-DZj2b4Wd.js";
import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./index-CmbwX329.js";
import "./index-C1F4OtKB.js";
import "sonner";
import "./accordion-TKDZsCwV.js";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
function mapStatsToUi(stats) {
  return [
    {
      number: stats.papers.toLocaleString(),
      label: "Papers Available",
      icon: FileText
    },
    {
      number: stats.mcqs.toLocaleString(),
      label: "MCQs Available",
      icon: ClipboardList
    },
    {
      number: stats.users.toLocaleString(),
      label: "Active Users",
      icon: Users
    },
    {
      number: stats.subjects.toLocaleString(),
      label: "Subjects Available",
      icon: BookOpen
    },
    {
      number: stats.topics.toLocaleString(),
      label: "Topics Available",
      icon: Layers
    },
    {
      number: stats.departments.toLocaleString(),
      label: "Departments Available",
      icon: Building2
    },
    {
      number: stats.tags.toLocaleString(),
      label: "Tags Available",
      icon: Tag
    }
  ];
}
function HeroSection({ stats, mcq }) {
  const [currentMCQ, setCurrentMCQ] = useState(0);
  const isMobile = useIsMobile();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMCQ((prev) => (prev + 1) % mcq.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, [mcq.length]);
  const uiStats = mapStatsToUi(stats);
  return /* @__PURE__ */ jsx("section", { className: "px-4 pt-6 pb-12 sm:px-6 md:pt-12 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(Badge, { className: "mb-6", children: [
        /* @__PURE__ */ jsx(Bot, {}),
        "AI-Enhanced Learning"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mb-6 text-3xl leading-tight font-bold text-foreground md:text-5xl lg:text-6xl", children: [
        "Master MCQs with",
        /* @__PURE__ */ jsx("span", { className: "block text-muted-foreground/65", children: "Intelligent Practice" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-8 text-sm leading-relaxed md:text-xl", children: "Access thousands of AI-enhanced multiple choice questions across subjects, jobs, and testing services. Practice smarter, not harder." }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            className: "py-4 text-lg font-semibold transition-all md:!px-8",
            variant: "default",
            size: "lg",
            onClick: () => router.visit("/papers/past-papers"),
            children: [
              /* @__PURE__ */ jsx(Play, { className: "h-5 w-5" }),
              "Start Practicing"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            className: "py-4 text-lg font-semibold transition-all md:!px-8",
            variant: "outline",
            size: "lg",
            onClick: () => router.visit("/demo"),
            children: [
              /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" }),
              "View Demo"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: uiStats.slice(0, 2).map((stat, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center rounded-lg bg-card p-4 text-center shadow-md",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center rounded-full border-2 p-2.5", children: /* @__PURE__ */ jsx(stat.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold md:text-xl", children: stat.number }),
              /* @__PURE__ */ jsx("div", { className: "text-xs md:text-sm", children: stat.label })
            ] })
          ]
        },
        index
      )) })
    ] }),
    !isMobile && /* @__PURE__ */ jsx(
      McqCard,
      {
        mcq: mcq[currentMCQ],
        idx: currentMCQ,
        route: mcqs.show(mcq[currentMCQ].slug)
      },
      currentMCQ
    )
  ] }) }) });
}
export {
  HeroSection as default
};
