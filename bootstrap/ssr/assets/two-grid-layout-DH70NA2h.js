import { jsxs, jsx } from "react/jsx-runtime";
import { u as useIsMobile } from "./index-Bj4QWzCK.js";
import { TrendingUp, Star, Zap } from "lucide-react";
const TopAdSection = ({ className, adSlot }) => {
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `relative overflow-hidden border-b py-6 lg:py-8 ${isMobile && !adSlot && "hidden"} ${className}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: `absolute inset-0 bg-background backdrop-blur-3xl`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,black_2px,transparent_2px)] bg-[size:60px_60px]" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-white/20 bg-card shadow-xl backdrop-blur-sm", children: adSlot ? /* @__PURE__ */ jsx("div", { className: "p-6", children: adSlot }) : /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent shadow-lg`,
              children: /* @__PURE__ */ jsx(TrendingUp, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Featured Content" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", children: "Discover trending Papers and MCQs tailored just for you by AI." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-yellow-400 text-yellow-400" }),
              /* @__PURE__ */ jsx("span", { children: "Premium Tests" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3 text-orange-500" }),
              /* @__PURE__ */ jsx("span", { children: "Updated Daily" })
            ] })
          ] })
        ] }) }) }) }) })
      ]
    }
  );
};
const MainSectionWithSidebarLayout = ({
  children,
  className,
  scrollRef
}) => {
  return /* @__PURE__ */ jsx("section", { className: `border-b ${className}`, ref: scrollRef, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-3 py-8 xl:px-0", children }) });
};
export {
  MainSectionWithSidebarLayout as M,
  TopAdSection as T
};
