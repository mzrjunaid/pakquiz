import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextLink } from "./text-link-DdhcVDvj.js";
import { T as Table, a as TableCaption, b as TableHeader, c as TableRow, d as TableHead, e as TableBody, f as TableCell } from "./table-DAOZfoAt.js";
import { m as mcqs, p as papers } from "./index-CxePvluH.js";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "@inertiajs/react";
import "./index-C1F4OtKB.js";
function DashboardTable({ latest }) {
  return /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableCaption, { children: "A list of your recent activities." }),
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { className: "*:text-center", children: [
      /* @__PURE__ */ jsx(TableHead, { children: "#" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Title" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Type" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Subject" }),
      /* @__PURE__ */ jsx(TableHead, { className: "!text-right", children: "Date" })
    ] }) }),
    /* @__PURE__ */ jsxs(TableBody, { children: [
      latest.items.length === 0 && /* @__PURE__ */ jsx(TableRow, { className: "*:text-center", children: /* @__PURE__ */ jsx(TableCell, { colSpan: 4, className: "text-center", children: "No recent data" }) }),
      latest.items.map((item, index) => /* @__PURE__ */ jsxs(
        TableRow,
        {
          className: "*:text-center",
          children: [
            /* @__PURE__ */ jsx(TableCell, { children: index + 1 }),
            /* @__PURE__ */ jsx(TableCell, { className: "max-w-xs truncate !text-left font-medium", children: /* @__PURE__ */ jsx(
              TextLink,
              {
                href: item.type === "MCQ" ? mcqs.show(item.slug) : papers.show(item.slug),
                children: item.title
              }
            ) }),
            /* @__PURE__ */ jsx(TableCell, { children: item.type }),
            /* @__PURE__ */ jsx(TableCell, { children: item.subject }),
            /* @__PURE__ */ jsx(TableCell, { className: "!text-right", children: item.created_at })
          ]
        },
        `${item.type}-${item.id}`
      ))
    ] })
  ] });
}
export {
  DashboardTable as default
};
