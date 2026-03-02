import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardDescription, c as CardContent, d as CardTitle, e as CardFooter } from "./card-wOJiZ2Tv.js";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
function StatsCard({ title, total, description }) {
  return /* @__PURE__ */ jsxs(Card, { className: "@container/card gap-3 py-3", children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardDescription, { className: "font-extrabold text-xs", children: title }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl", children: total }) }),
    description && /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-start gap-1.5 text-sm", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs", children: description }) })
  ] });
}
export {
  StatsCard as default
};
