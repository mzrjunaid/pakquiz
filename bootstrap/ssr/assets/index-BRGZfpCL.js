import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageTitle } from "./public-page-title-BGg8AUwY.js";
import { A as AppLayout } from "./app-layout-DW4c6QPD.js";
import { A as AppCenterHead } from "./app-center-head-CGHGyDuc.js";
import { HelpCenterPage } from "./help-center-page-CJqzybob.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "./index-Bj4QWzCK.js";
import "./index-C1F4OtKB.js";
import "@inertiajs/react";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "./button-BlmebLQZ.js";
import "radix-ui";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "./dropdown-menu-CU31zq8b.js";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-DFqmwzVc.js";
import "./index-Da6iTmvw.js";
import "./index-DSmwQD5U.js";
import "./index-NuUntNu2.js";
import "./index-CxePvluH.js";
import "@radix-ui/react-navigation-menu";
import "sonner";
import "./accordion-TKDZsCwV.js";
import "./input-DK-Y0ndi.js";
const HelpCenter = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PAK QUIZ and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAK QUIZ is an online platform that helps job seekers in Pakistan prepare for competitive exams such as PPSC, FPSC, NTS, PTS, and others. It offers a large collection of MCQs across multiple categories, demo practice papers, and premium features like custom quizzes and progress tracking."
        }
      },
      {
        "@type": "Question",
        name: "How can I practice MCQs for PPSC, FPSC, and other tests?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Go to the MCQs section on PAK QUIZ, choose a category (such as General Knowledge, English, Mathematics, Islamiat, or Current Affairs), and start practicing. You can also attempt demo practice papers or create custom quizzes as a premium user."
        }
      },
      {
        "@type": "Question",
        name: "Is PAK QUIZ free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. PAK QUIZ is free to use for basic features like MCQs, demo papers, and job ads. Premium membership unlocks custom quiz creation, detailed explanations, performance tracking, and unlimited practice papers."
        }
      },
      {
        "@type": "Question",
        name: "What is included in the premium membership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium members get access to custom practice papers, progress tracking, detailed explanations, and priority updates. This helps candidates prepare more effectively for competitive exams."
        }
      },
      {
        "@type": "Question",
        name: "How do I create a custom practice paper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom papers are available for premium users. After logging in, go to 'Create Paper', select categories, choose the number of questions, and start your test to simulate a real exam environment."
        }
      },
      {
        "@type": "Question",
        name: "Can I track my progress on PAK QUIZ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Premium members can track scores, review mistakes, and monitor progress over time. This feature helps identify strengths and weaknesses."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide explanations for answers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many MCQs include detailed explanations so learners can understand the reasoning. Explanations are fully available to premium users."
        }
      },
      {
        "@type": "Question",
        name: "How often are job ads updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Job ads are updated daily. PAK QUIZ covers opportunities from PPSC, FPSC, NTS, PTS, NJP, and private jobs. Filters allow searching by province, district, and city."
        }
      },
      {
        "@type": "Question",
        name: "Do I need to create an account to practice MCQs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you can practice MCQs and demo papers without an account. To save progress, create custom papers, or access premium features, you’ll need to register."
        }
      },
      {
        "@type": "Question",
        name: "Which payment methods are supported for premium plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support Easypaisa, JazzCash, bank transfer, and debit/credit cards. Payments are secure, and premium features unlock immediately after confirmation."
        }
      }
    ]
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, { schema: faqSchema }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-3 py-12 lg:w-7xl", children: [
      /* @__PURE__ */ jsx(
        PageTitle,
        {
          title: "Help Center",
          subtitle: "Find answers to your questions and learn how to use PAK QUIZ effectively"
        }
      ),
      /* @__PURE__ */ jsx(HelpCenterPage, {})
    ] })
  ] });
};
export {
  HelpCenter as default
};
