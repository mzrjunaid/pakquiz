import { jsxs, jsx } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-CGHGyDuc.js";
import { T as TopAdSection, M as MainSectionWithSidebarLayout } from "./two-grid-layout-DH70NA2h.js";
import { S as SitePagination } from "./pagination-1dw_YrX9.js";
import { P as PageTitle } from "./public-page-title-CazrSBNq.js";
import { S as SearchBar } from "./SearchBar-BMzM_S6J.js";
import { B as Badge } from "./badge-CSOzNZ1b.js";
import { A as AppLayout } from "./app-layout-CQYjnFu_.js";
import { p as publicMethod } from "./index-CmbwX329.js";
import { usePage, Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import PageSidebar from "./page-sidebar-BF2fV1kj.js";
import "./index-Bj4QWzCK.js";
import "react";
import "./index-C1F4OtKB.js";
import "./field-BSdObGgN.js";
import "class-variance-authority";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "./label-DO4oxG8w.js";
import "radix-ui";
import "./button-BlmebLQZ.js";
import "./select-dEUKSXuN.js";
import "./input-DK-Y0ndi.js";
import "@radix-ui/react-slot";
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
import "./index-DZj2b4Wd.js";
const DepartmentsPage = () => {
  const {
    pageIntro,
    departments: { data: departments, meta }
  } = usePage().props;
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, {}),
    "ٖ",
    /* @__PURE__ */ jsx(TopAdSection, {}),
    /* @__PURE__ */ jsxs(MainSectionWithSidebarLayout, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx(
          PageTitle,
          {
            title: pageIntro.title,
            description: pageIntro.description
          }
        ) }),
        /* @__PURE__ */ jsx(SearchBar, {})
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-8 lg:col-span-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: departments.map((dept, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "group rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:p-6",
              children: [
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: publicMethod.departments.show(
                      dept.slug
                    ),
                    className: "block space-y-2",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl", children: dept.name }),
                        /* @__PURE__ */ jsx(ChevronRight, { className: "mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm text-foreground md:text-base", children: dept.description })
                    ]
                  }
                ),
                dept.papers && dept.papers.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: dept.papers.map((pap, idx2) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: publicMethod.papers.show(
                      { paper: pap.slug }
                    ),
                    children: /* @__PURE__ */ jsx(Badge, { className: "cursor-pointer transition-colors hover:bg-primary/25 hover:text-primary", children: pap.name })
                  },
                  idx2
                )) }),
                dept.updated_at && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-1.5 border-t border-gray-100 pt-3 text-xs text-gray-500 md:text-sm", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Last updated: ",
                    dept.updated_at
                  ] })
                ] })
              ]
            },
            idx
          )) }),
          /* @__PURE__ */ jsx(SitePagination, { meta })
        ] }),
        /* @__PURE__ */ jsx(PageSidebar, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx("pre", { children: JSON.stringify(pageIntro, null, 2) })
  ] });
};
export {
  DepartmentsPage as default
};
