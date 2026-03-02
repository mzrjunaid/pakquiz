import { jsxs, jsx } from "react/jsx-runtime";
import StatsCard from "./stats-card-DueZP6Ll.js";
import "./card-wOJiZ2Tv.js";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
function SectionCards({ stats }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "my-2 text-lg font-semibold", children: "Overview" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:grid-cols-4 lg:px-6 xl:grid-cols-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card", children: Object.entries(stats.overview).map(([key, stat]) => /* @__PURE__ */ jsx(
      StatsCard,
      {
        title: stat.title,
        description: stat.description,
        total: stat.total
      },
      key
    )) }),
    /* @__PURE__ */ jsx("h2", { className: "my-2 text-lg font-semibold", children: "Activity" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:grid-cols-4 lg:px-6 xl:grid-cols-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card", children: Object.entries(stats.activity).map(([key, stat]) => /* @__PURE__ */ jsx(
      StatsCard,
      {
        title: stat.title,
        total: stat.total
      },
      key
    )) }),
    /* @__PURE__ */ jsx("h2", { className: "my-2 text-lg font-semibold", children: "Qulaity" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:grid-cols-4 lg:px-6 xl:grid-cols-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card", children: Object.entries(stats.quality).map(([key, stat]) => /* @__PURE__ */ jsx(
      StatsCard,
      {
        title: stat.title,
        total: stat.total
      },
      key
    )) })
  ] });
}
export {
  SectionCards
};
