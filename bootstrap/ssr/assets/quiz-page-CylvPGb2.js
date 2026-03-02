import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-BlmebLQZ.js";
import { Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import DemoResult from "./demo-result-Pt_ot27U.js";
import "class-variance-authority";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "./accordion-TKDZsCwV.js";
const QuizPage = ({ data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [attemptedQuestion, setAttemptedQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800);
  const [isPaused, setIsPaused] = useState(false);
  const handleSubmit = () => {
    setShowResults(true);
    setIsPaused(true);
  };
  const hasSubmittedRef = useRef(false);
  useEffect(() => {
    if (isPaused || showResults) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          if (!hasSubmittedRef.current) {
            hasSubmittedRef.current = true;
            handleSubmit();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(interval);
  }, [isPaused, showResults]);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  const handleAnswerSelect = (questionId, optionId) => {
    if (!showResults) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: optionId
      }));
      setAttemptedQuestion((p) => p + 1);
    }
  };
  const totalQuestions = data.length;
  const retakeExam = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setCurrentQuestion(0);
    setIsPaused(false);
    setTimeRemaining(1800);
    setAttemptedQuestion(0);
  };
  return /* @__PURE__ */ jsx("div", { className: "px-2 py-4 md:w-full md:max-w-5xl lg:py-16", children: !showResults ? /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-lg bg-white shadow-md", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b bg-primary/50 px-6 py-4 dark:bg-primary/70", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-md font-bold md:text-3xl", children: "PPSC Practice Paper" }),
        /* @__PURE__ */ jsx("p", { className: "-mt-0.5 text-xs font-medium text-muted-foreground", children: "General Knowledge & Aptitude Test" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary-foreground", children: [
        /* @__PURE__ */ jsx(Clock, { className: "size-5 md:size-8" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono font-bold md:text-lg", children: formatTime(timeRemaining) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "px-3 py-6 md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-3 md:mb-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-2 text-sm font-medium text-muted", children: [
          "Question ",
          currentQuestion + 1,
          " of",
          " ",
          totalQuestions,
          selectedAnswers[data[currentQuestion].id] !== void 0 && /* @__PURE__ */ jsx("span", { className: "ms-2 animate-pulse text-destructive-foreground italic", children: "(Question Locked)" })
        ] }),
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: `overflow-hidden leading-relaxed font-semibold text-primary/90 md:text-lg ${data[currentQuestion].subject.name === "Urdu" && "text-right font-urdu"}`,
            children: data[currentQuestion].question
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `grid grid-cols-1 gap-4 md:grid-cols-2 ${data[currentQuestion].subject.name.toLowerCase() === "urdu" && "text-right font-urdu"}`,
          children: data[currentQuestion].options.map(
            (option, idx) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleAnswerSelect(
                  data[currentQuestion].id,
                  option.id
                ),
                className: `rounded-sm border px-2 py-2 text-left transition-all duration-200 md:p-4 ${selectedAnswers[data[currentQuestion].id] === option.id ? "border-primary bg-gray-50 shadow-md" : "border-gray-200 hover:border-primary hover:bg-gray-50"} ${selectedAnswers[data[currentQuestion].id] !== void 0 ? "cursor-not-allowed opacity-60" : ""}`,
                disabled: selectedAnswers[data[currentQuestion].id] !== void 0,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm md:text-base", children: [
                  /* @__PURE__ */ jsxs("span", { className: "font-semibold text-gray-700", children: [
                    String.fromCharCode(65 + idx),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: option.text })
                ] })
              },
              idx
            )
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t-1 px-2 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-2", children: data.map((_, idx) => /* @__PURE__ */ jsx(
        Button,
        {
          variant: "default",
          onClick: () => setCurrentQuestion(idx),
          className: `w-9 rounded-lg font-semibold transition-all ${currentQuestion === idx ? "bg-primary text-white" : selectedAnswers[data[idx].id] !== void 0 ? "bg-primary/35 text-foreground hover:bg-primary/65" : "border border-gray-200 bg-white text-primary hover:border-primary hover:text-white"}`,
          children: idx + 1
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "my-3 flex justify-end gap-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            onClick: () => setCurrentQuestion(
              (prev) => Math.max(0, prev - 1)
            ),
            disabled: currentQuestion === 0,
            children: "Prev"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            onClick: () => setCurrentQuestion(
              (prev) => Math.min(totalQuestions - 1, prev + 1)
            ),
            disabled: currentQuestion === totalQuestions - 1,
            children: "Next"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "lg",
          onClick: handleSubmit,
          className: "rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800",
          children: "Submit"
        }
      ) })
    ] })
  ] }) : (
    /* Results View */
    /* @__PURE__ */ jsx(
      DemoResult,
      {
        data,
        retakeExam,
        attemptedQuestion,
        selectedAnswers,
        totalQuestions
      }
    )
  ) });
};
export {
  QuizPage as default
};
