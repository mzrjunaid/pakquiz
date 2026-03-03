import { jsxs, jsx } from "react/jsx-runtime";
import { a as useQuizMode, u as useIsMobile, p as papers } from "./index-Bj4QWzCK.js";
import { t as testing_services, p as publicMethod } from "./index-CmbwX329.js";
import { Link, usePage } from "@inertiajs/react";
import { Tag, Bot, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-TKDZsCwV.js";
import { B as Badge } from "./badge-CSOzNZ1b.js";
import { B as Button } from "./button-BlmebLQZ.js";
const QuestionType = {
  single: "Single Choice",
  multiple: "Multiple Choice",
  true_false: "True/False",
  single_a: "Single Answer"
};
const McqMeta = ({
  subject,
  mcq_type,
  route
}) => {
  const { base_url } = usePage().props;
  const shareLink = async () => {
    const url = base_url + route.url;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied. You can now share it.");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end space-x-1", children: [
    subject?.name && /* @__PURE__ */ jsx(Badge, { variant: "default", asChild: true, children: /* @__PURE__ */ jsx(
      Link,
      {
        href: publicMethod.subject.show({
          subject: subject.slug
        }),
        title: `View all Papers from ${subject?.name}`,
        children: /* @__PURE__ */ jsx("span", { className: "max-w-26 truncate md:max-w-36", children: subject?.name })
      }
    ) }),
    mcq_type && /* @__PURE__ */ jsx(Badge, { variant: "outline", children: QuestionType[mcq_type] }),
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: shareLink, children: /* @__PURE__ */ jsx(Share2, {}) })
  ] });
};
const McqHeader = ({
  isQuizMode,
  difficulty,
  children
}) => {
  const getDifficultyBadgeVariant = (difficulty2) => {
    switch (difficulty2.toLowerCase()) {
      case "easy":
        return "bg-success/10 py-1 text-success hover:bg-success/20";
      case "medium":
        return "bg-transparent py-1 text-info-foreground hover:bg-yellow-100 border-yellow-500 capitalize";
      case "hard":
        return "bg-destructive/35 py-1 text-destructive-foreground hover:bg-destructive/50 border-destructive capitalize";
      default:
        return "bg-gray-100 py-1 text-gray-700 hover:bg-gray-200";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-2 flex flex-col-reverse md:flex-row md:justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 space-x-2", children: [
      /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
        /* @__PURE__ */ jsx(Bot, { className: "mr-1 h-3 w-3" }),
        "AI"
      ] }),
      /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "outline",
          className: isQuizMode ? "border-destructive text-destrcutive" : "border-success text-success",
          children: isQuizMode ? "📝 Quiz" : "📖 Study"
        }
      ),
      difficulty && /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "secondary",
          className: getDifficultyBadgeVariant(difficulty),
          children: difficulty
        }
      )
    ] }),
    children
  ] });
};
const McqCard = ({ mcq, idx, route }) => {
  const { isQuizMode } = useQuizMode();
  const [selectedOptionId, setSelectedOptionId] = useState(
    null
  );
  const isMobile = useIsMobile();
  const wasAnswered = selectedOptionId !== null;
  const correctOption = mcq.options.find((o) => o.is_correct);
  const isCorrect = wasAnswered && selectedOptionId === correctOption?.id;
  const showAnswers = !isQuizMode || wasAnswered;
  const handleOptionSelect = (optionId) => {
    if (!isQuizMode) return;
    if (wasAnswered) return;
    setSelectedOptionId(optionId);
  };
  const badgeStyle = "block max-w-3xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `rounded-md border px-2 py-4 shadow-sm lg:rounded-xl lg:p-5 ${isCorrect ? "border-success bg-success/10" : wasAnswered ? "border-destructive bg-destrcutive/10" : "border-card bg-card"}`,
      children: [
        /* @__PURE__ */ jsx(McqHeader, { isQuizMode, difficulty: mcq.difficulty, children: !isMobile && /* @__PURE__ */ jsx(
          McqMeta,
          {
            mcq_type: mcq.mcq_type,
            subject: mcq.subject,
            route
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "my-6 text-sm font-semibold lg:text-base", children: /* @__PURE__ */ jsxs(Link, { href: route, children: [
            "Question ",
            idx ? idx + 1 : 1,
            ": ",
            mcq.question
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "grid gap-2 md:grid-cols-2 lg:gap-3", children: mcq.options.map((opt, optIdx) => {
            const isSelected = selectedOptionId === opt.id && wasAnswered;
            return /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleOptionSelect(opt.id),
                disabled: !isQuizMode || wasAnswered,
                className: `w-full rounded-md border p-2 text-left text-sm transition md:p-3 lg:rounded-lg lg:border-2 lg:text-base ${!isQuizMode ? "cursor-not-allowed opacity-85" : "cursor-pointer"} ${opt.is_correct && showAnswers ? "border-success bg-success/5" : isSelected ? "border-destructive bg-destrcutive/10" : "border-gray-200 bg-white/60 hover:border-primary"} `,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                    String.fromCharCode(
                      65 + optIdx
                    ),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: opt.option_text }),
                  opt.is_correct && showAnswers && /* @__PURE__ */ jsx("span", { className: "ml-auto text-xs font-semibold text-success", children: "✓" }),
                  selectedOptionId === opt.id && wasAnswered && !opt.is_correct && /* @__PURE__ */ jsx("span", { className: "ml-auto text-xs font-semibold text-destructive", children: "✗" })
                ] })
              },
              opt.id
            );
          }) }),
          isQuizMode && !wasAnswered && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-gray-600 italic", children: "Select an option" }),
          !isQuizMode && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-gray-500 italic", children: "Study mode enabled — answers are disabled" }),
          showAnswers && mcq.explanation && /* @__PURE__ */ jsx(
            Accordion,
            {
              type: "single",
              collapsible: true,
              defaultValue: mcq.slug,
              className: "mt-4",
              children: /* @__PURE__ */ jsxs(AccordionItem, { value: mcq.slug, children: [
                /* @__PURE__ */ jsx(AccordionTrigger, { children: "Explanation" }),
                /* @__PURE__ */ jsx(AccordionContent, { className: "rounded-lg border border-primary/10 bg-primary/10 p-4", children: mcq.explanation })
              ] })
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap-reverse justify-end gap-6 md:justify-between", children: [
          !isMobile && mcq?.tags && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2 sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Tag, { className: "h-4 w-4 text-gray-500" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Tags:" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex w-full flex-wrap gap-2", children: mcq.tags.map((tag, idx2) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: "max-w-sm truncate",
                title: tag.name,
                children: tag.name
              }
            ) }, idx2)) })
          ] }),
          isMobile && /* @__PURE__ */ jsx(
            McqMeta,
            {
              mcq_type: mcq.mcq_type,
              subject: mcq.subject,
              route
            }
          ),
          mcq.paper && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center space-x-2 gap-y-2", children: [
            /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "secondary",
                className: badgeStyle,
                asChild: true,
                children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: papers.show({
                      paper: mcq.paper.slug
                    }),
                    title: `View all mcqs from ${mcq.paper.name}`,
                    children: mcq.paper.name
                  }
                )
              }
            ),
            mcq.paper?.testing_service && /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "secondary",
                className: badgeStyle,
                asChild: true,
                children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: testing_services.show({
                      slug: mcq.paper.testing_service.slug
                    }),
                    title: `View all Papers from ${mcq.paper.testing_service.short}`,
                    children: mcq.paper.testing_service.short
                  }
                )
              }
            ),
            mcq.paper?.department && /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "secondary",
                className: badgeStyle,
                asChild: true,
                children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: publicMethod.departments.show(
                      mcq.paper.department
                    ),
                    title: `View all Department Papers from ${mcq.paper.department.name}`,
                    children: /* @__PURE__ */ jsx("span", { className: "truncate sm:max-w-26 md:max-w-36", children: mcq.paper.department.name })
                  }
                )
              }
            )
          ] })
        ] })
      ]
    }
  );
};
export {
  McqCard as M,
  McqHeader as a,
  McqMeta as b
};
