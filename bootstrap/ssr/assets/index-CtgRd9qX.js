import { jsxs, jsx } from "react/jsx-runtime";
import { T as TopAdSection, M as MainSectionWithSidebarLayout } from "./two-grid-layout-DH70NA2h.js";
import { T as TextLink } from "./text-link-DdhcVDvj.js";
import { A as AppLayout } from "./app-layout-DzPmQBlS.js";
import { m as mcqs } from "./index-DZj2b4Wd.js";
import { s as subject, p as papers } from "./index-Bj4QWzCK.js";
import { Head } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import PageSidebar from "./page-sidebar-BF2fV1kj.js";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./button-BlmebLQZ.js";
import "radix-ui";
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
import "sonner";
function ResultCard({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-2 font-medium", children: title }),
    /* @__PURE__ */ jsx("div", { children })
  ] });
}
function Search({ query, results }) {
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, follow" }) }),
    /* @__PURE__ */ jsx(TopAdSection, {}),
    /* @__PURE__ */ jsx(MainSectionWithSidebarLayout, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3 lg:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-xl font-semibold", children: [
          'Search results for "',
          query,
          '"'
        ] }),
        results.subjects?.length > 0 && /* @__PURE__ */ jsx(ResultCard, { title: "Subjects", children: results.subjects.map((s, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-1 text-sm",
            children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
              /* @__PURE__ */ jsx(
                TextLink,
                {
                  href: subject.show({
                    subject: s.slug
                  }),
                  className: "my-2 block",
                  children: s.name
                }
              )
            ]
          },
          idx
        )) }),
        results.papers?.length > 0 && /* @__PURE__ */ jsx(ResultCard, { title: "Papers", children: results.papers.map((p, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-1 text-sm",
            children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
              /* @__PURE__ */ jsx(
                TextLink,
                {
                  href: papers.show({
                    paper: p.slug
                  }),
                  className: "my-2 block",
                  children: p.name
                }
              )
            ]
          },
          idx
        )) }),
        results.mcqs?.length > 0 && /* @__PURE__ */ jsx(ResultCard, { title: "MCQs", children: results.mcqs.map((m, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-1 text-sm",
            children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
              /* @__PURE__ */ jsx(
                TextLink,
                {
                  href: mcqs.show(m.slug),
                  className: "my-2 block",
                  children: m.question
                }
              )
            ]
          },
          idx
        )) })
      ] }) }),
      /* @__PURE__ */ jsx(PageSidebar, {})
    ] }) })
  ] });
}
export {
  ResultCard,
  Search as default
};
