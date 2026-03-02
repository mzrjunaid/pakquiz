import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-CGHGyDuc.js";
import { B as Button } from "./button-BlmebLQZ.js";
import { F as FeatureCard } from "./feature-card-Dc_KXTut.js";
import { M as McqCard } from "./mcq-card-krHnKlEN.js";
import { S as SearchBar } from "./SearchBar-63Oa9znx.js";
import { T as TextLink } from "./text-link-DdhcVDvj.js";
import { A as AppLayout } from "./app-layout-DD5QFxGc.js";
import { b as breadcrumb } from "./breadcrumbs-utils-BzOZAm8f.js";
import { p as publicMethod } from "./index-CmbwX329.js";
import { m as mcqs } from "./index-DZj2b4Wd.js";
import { p as papers } from "./index-Bj4QWzCK.js";
import { usePage, Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import HeroSection from "./HeroSection-8kU3PLw3.js";
import PageSidebar from "./page-sidebar-BF2fV1kj.js";
import "class-variance-authority";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "react";
import "sonner";
import "./accordion-TKDZsCwV.js";
import "./badge-CSOzNZ1b.js";
import "./input-DK-Y0ndi.js";
import "@tanstack/react-query";
import "use-debounce";
import "@radix-ui/react-slot";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "./dropdown-menu-CU31zq8b.js";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-DFqmwzVc.js";
import "./index-C1F4OtKB.js";
import "./index-Da6iTmvw.js";
import "./index-DSmwQD5U.js";
import "./index-NuUntNu2.js";
import "./index-CxePvluH.js";
import "@radix-ui/react-navigation-menu";
function CallToAction() {
  return /* @__PURE__ */ jsx("section", { className: "bg-accent px-4 py-16 text-accent-foreground sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-6 text-2xl font-bold md:text-4xl", children: "Ready to Excel in Your Exams?" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg md:text-xl", children: "Join thousands of students who have improved their scores with our AI-powered MCQ platform" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center gap-x-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "default",
          size: "lg",
          className: "font-semibold transition-all hover:shadow-sm md:rounded-2xl md:px-12 md:py-8 md:text-lg",
          children: "Start Free Trial"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "lg",
          className: "font-semibold transition-all hover:shadow-sm md:rounded-2xl md:px-12 md:py-8 md:text-lg",
          children: "View Demo"
        }
      )
    ] })
  ] }) });
}
function Welcome({
  subjects_list,
  departments_list,
  current_affairs,
  latestPapers,
  stats,
  latestMcqs
}) {
  const { url } = usePage();
  const { isQuizMode } = usePage().props;
  const breadcrumbs = breadcrumb(url);
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // ORGANIZATION
      {
        "@type": "Organization",
        "@id": "https://www.pakquiz.com/#organization",
        name: "Pak Quiz",
        url: "https://www.pakquiz.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.pakquiz.com/logo.png"
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=61588211743083",
          "https://www.youtube.com/@pakquiz-ai",
          "https://www.tiktok.com/@pakquiz_ai"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@pakquiz.com",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"]
        }
      },
      // WEBSITE
      {
        "@type": "WebSite",
        "@id": "https://www.pakquiz.com/#website",
        url: "https://www.pakquiz.com",
        name: "Pak Quiz",
        description: "Pak Quiz provides AI-powered multiple-choice questions (MCQs), past papers, and practice tests to help students prepare for FPSC, PPSC, NTS, CSS, PMS and other competitive exams in Pakistan.",
        inLanguage: "en",
        publisher: {
          "@id": "https://www.pakquiz.com/#organization"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.pakquiz.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      // HOMEPAGE WEBPAGE
      {
        "@type": "WebPage",
        "@id": "https://www.pakquiz.com/#webpage",
        url: "https://www.pakquiz.com",
        name: "Pak Quiz – AI-Powered MCQs & Job Test Preparation",
        description: "Prepare for government and competitive exams in Pakistan with updated AI-powered MCQs, solved past papers, and structured practice tests.",
        inLanguage: "en",
        isPartOf: {
          "@id": "https://www.pakquiz.com/#website"
        },
        about: {
          "@id": "https://www.pakquiz.com/#organization"
        }
      }
    ]
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(AppCenterHead, { schema: homepageSchema }),
    /* @__PURE__ */ jsx(HeroSection, { mcq: latestMcqs.data, stats }),
    /* @__PURE__ */ jsx("section", { className: "border-y px-4 py-6 sm:px-6 md:py-16 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-col items-start justify-between gap-y-6 lg:flex-row lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-bold md:text-3xl", children: "Explore MCQs" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground md:text-xl", children: "Find the perfect questions for your preparation" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex w-full flex-row items-center md:max-w-sm", children: /* @__PURE__ */ jsx(
          SearchBar,
          {
            placeholder: "Search Papers and MCQs...",
            className: "w-full"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Latest MCQs" }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:space-y-6", children: [
            !isQuizMode && /* @__PURE__ */ jsx("p", { className: "mb-3 rounded border border-green-200 bg-green-50 p-2 text-sm text-green-700", children: "📖 Study Mode: The correct answer is highlighted in green" }),
            latestMcqs.data.map((mcq, idx) => /* @__PURE__ */ jsx(
              McqCard,
              {
                mcq,
                idx,
                route: mcqs.show(mcq.slug)
              },
              idx
            )),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(
              Link,
              {
                href: mcqs.index().url,
                className: "w-full",
                children: "View All MCQs"
              }
            ) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(PageSidebar, { children: [
          /* @__PURE__ */ jsx(FeatureCard, { title: "Latest Papers", children: /* @__PURE__ */ jsx("div", { className: "md:px-2", children: latestPapers.map((paper, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-1 text-sm",
              children: [
                /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
                /* @__PURE__ */ jsx(
                  TextLink,
                  {
                    href: papers.show(paper.slug),
                    className: "my-2 block",
                    children: paper.name
                  }
                )
              ]
            },
            idx
          )) }) }),
          /* @__PURE__ */ jsx(FeatureCard, { title: "Latest Subjects", children: /* @__PURE__ */ jsx("div", { className: "md:px-2", children: subjects_list.map((subject, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-1 text-sm",
              children: [
                /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
                /* @__PURE__ */ jsx(
                  TextLink,
                  {
                    href: publicMethod.subject.show(
                      {
                        subject: subject.slug
                      }
                    ),
                    className: "my-2 block",
                    children: subject.name
                  }
                )
              ]
            },
            idx
          )) }) }),
          /* @__PURE__ */ jsx(
            FeatureCard,
            {
              title: "Current Affairs",
              description: current_affairs.description,
              children: /* @__PURE__ */ jsx("div", { className: "md:px-2", children: current_affairs.topics.map(
                (topic, idx) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1 text-sm",
                    children: [
                      /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
                      /* @__PURE__ */ jsx(
                        TextLink,
                        {
                          href: publicMethod.subject.topic.show(
                            {
                              subject: current_affairs.slug,
                              topic: topic.slug
                            }
                          ),
                          className: "my-2 block",
                          children: topic.name
                        }
                      )
                    ]
                  },
                  idx
                )
              ) })
            }
          ),
          /* @__PURE__ */ jsx(FeatureCard, { title: "Departments", children: /* @__PURE__ */ jsx("div", { className: "md:px-2", children: departments_list.map((dept, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-1 text-sm",
              children: [
                /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
                /* @__PURE__ */ jsx(
                  TextLink,
                  {
                    href: publicMethod.departments.show(
                      dept.slug
                    ),
                    className: "my-2 line-clamp-1 overflow-hidden",
                    children: dept.name
                  }
                )
              ]
            },
            idx
          )) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CallToAction, {})
  ] });
}
export {
  Welcome as default
};
