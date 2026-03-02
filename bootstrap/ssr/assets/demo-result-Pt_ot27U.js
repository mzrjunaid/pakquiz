import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, XCircle, AlertCircle, RotateCcw } from "lucide-react";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-TKDZsCwV.js";
import { B as Button } from "./button-BlmebLQZ.js";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
const TestMcqCard = ({
  mcq,
  idx,
  isCorrect,
  wasAnswered,
  selectedOptionId
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `rounded-md border px-2 py-4 shadow-sm lg:rounded-xl  lg:p-5 ${isCorrect ? "border-green-200 bg-green-50" : wasAnswered ? "border-red-200 bg-red-50" : "border-gray-200 bg-gray-50"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-3 md:flex-row lg:gap-3", children: [
        isCorrect ? /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-1 h-6 w-6 text-green-500" }) : wasAnswered ? /* @__PURE__ */ jsx(XCircle, { className: "mt-1 h-6 w-6 text-destructive" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "mt-1 h-6 w-6 text-muted" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-4 text-sm font-semibold text-foreground lg:text-base", children: [
            "Question ",
            idx + 1,
            ": ",
            mcq.question
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-2 grid grid-cols-1 gap-3 md:grid-cols-2", children: mcq.options.map((opt, optIdx) => {
            const isSelected = wasAnswered && opt.id === selectedOptionId;
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: `rounded-md border p-2 lg:rounded-lg lg:border-2 lg:p-3 ${opt.correct ? "border-green-500 bg-green-50" : isSelected ? "border-destructive" : "border-gray-200 bg-white"}`,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold text-gray-700 lg:text-base", children: [
                    String.fromCharCode(65 + optIdx),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-800 lg:text-base", children: opt.text }),
                  opt.correct && /* @__PURE__ */ jsx("span", { className: "ml-auto text-xs font-semibold text-green-600", children: "✓ Correct" }),
                  isSelected && !opt.correct && /* @__PURE__ */ jsx("span", { className: "ml-auto text-xs font-semibold text-destructive", children: "✗ Your answer" })
                ] })
              },
              opt.id
            );
          }) }),
          !wasAnswered && /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm text-gray-600 italic", children: "Not attempted" }),
          /* @__PURE__ */ jsx(
            Accordion,
            {
              type: "single",
              collapsible: true,
              defaultValue: mcq.slug,
              children: /* @__PURE__ */ jsxs(AccordionItem, { value: mcq.slug, children: [
                /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-sm font-medium text-primary", children: "Explanation" }),
                /* @__PURE__ */ jsxs(AccordionContent, { className: "rounded border border-blue-200 bg-blue-50 p-4 lg:rounded-lg lg:border-2", children: [
                  mcq.explanation,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, deleniti non eligendi consectetur sapiente aut quibusdam rem deserunt doloribus in quasi, corporis nobis cumque velit. Nemo adipisci rerum non omnis."
                ] })
              ] })
            }
          )
        ] })
      ] })
    },
    mcq.id
  );
};
const ResultBox = ({
  label,
  figure,
  boxStyle,
  labelStyle,
  figureStyle
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `rounded-md p-2 text-center md:rounded-xl md:p-4 ${boxStyle}`,
      children: [
        /* @__PURE__ */ jsx("p", { className: `mb-1 text-xs font-bold md:text-sm ${labelStyle}`, children: label }),
        /* @__PURE__ */ jsx("p", { className: `text-lg font-bold md:text-2xl ${figureStyle}`, children: figure })
      ]
    }
  );
};
const DemoResult = ({
  data,
  attemptedQuestion,
  retakeExam,
  selectedAnswers,
  totalQuestions
}) => {
  const calculateScore = () => {
    let correct = 0;
    data.forEach((mcq) => {
      const selectedOptionId = selectedAnswers[mcq.id];
      if (!selectedOptionId) return;
      const selectedOption = mcq.options.find(
        (option) => option.id === selectedOptionId
      );
      if (selectedOption?.correct) {
        correct++;
      }
    });
    return correct;
  };
  const score = calculateScore();
  const percentage = (score / totalQuestions * 100).toFixed(1);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 px-2 lg:px-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto rounded-lg bg-white p-2 shadow-sm sm:rounded-2xl md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between lg:mb-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text- font-bold text-gray-900 md:text-2xl", children: "Test Results" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "PPSC Practice Paper - Demo" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-32 w-32", children: [
          /* @__PURE__ */ jsxs("svg", { className: "h-32 w-32 -rotate-90 transform", children: [
            /* @__PURE__ */ jsx(
              "circle",
              {
                cx: "64",
                cy: "64",
                r: "32",
                stroke: "#e5e7eb",
                strokeWidth: "12",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx(
              "circle",
              {
                cx: "64",
                cy: "64",
                r: "32\n                                ",
                stroke: "#1f2937",
                strokeWidth: "12",
                fill: "none",
                strokeDasharray: `${Number(percentage) / 100 * 351.86} 351.86`,
                className: "transition-all duration-1000"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl font-bold text-gray-900", children: [
            attemptedQuestion,
            "/",
            totalQuestions
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-1 md:grid-cols-4 md:gap-4", children: [
        /* @__PURE__ */ jsx(
          ResultBox,
          {
            boxStyle: "bg-blue-50",
            labelStyle: "text-gray-600",
            figureStyle: "text-blue-700",
            label: "Total Quiz",
            figure: totalQuestions
          }
        ),
        /* @__PURE__ */ jsx(
          ResultBox,
          {
            boxStyle: "bg-purple-50",
            labelStyle: "text-gray-600",
            figureStyle: "text-purple-700",
            label: "Correct",
            figure: score
          }
        ),
        /* @__PURE__ */ jsx(
          ResultBox,
          {
            boxStyle: "bg-green-50",
            labelStyle: "text-gray-600",
            figureStyle: "text-green-700",
            label: "Score",
            figure: score - (attemptedQuestion - score) * 0.25
          }
        ),
        /* @__PURE__ */ jsx(
          ResultBox,
          {
            boxStyle: "bg-red-50",
            labelStyle: "text-gray-600",
            figureStyle: "text-red-700",
            label: "Skipped",
            figure: totalQuestions - attemptedQuestion
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-2 lg:mt-6 lg:rounded-xl lg:p-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-center text-base font-semibold text-gray-900 lg:text-lg", children: Number(percentage) >= 70 ? "🎉 Excellent Performance!" : Number(percentage) >= 50 ? "👍 Good Attempt!" : "💪 Keep Practicing!" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Button, { variant: "link", onClick: retakeExam, children: [
          /* @__PURE__ */ jsx(RotateCcw, {}),
          "Repeat"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto rounded-md py-6 lg:bg-white lg:p-8 lg:shadow-md", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-bold text-primary lg:mb-6", children: "Detailed Review" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: data.map((mcq, idx) => {
        const selectedOptionId = selectedAnswers[mcq.id];
        const selectedOption = mcq.options.find(
          (opt) => opt.id === selectedOptionId
        );
        const wasAnswered = selectedOptionId !== void 0;
        const isCorrect = wasAnswered && selectedOption?.correct === true;
        return /* @__PURE__ */ jsx(
          TestMcqCard,
          {
            mcq,
            idx,
            isCorrect,
            selectedOptionId,
            wasAnswered
          },
          idx
        );
      }) })
    ] })
  ] });
};
export {
  DemoResult as default
};
