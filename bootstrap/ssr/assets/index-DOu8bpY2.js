import { jsxs, jsx } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-CGHGyDuc.js";
import { T as TopAdSection, M as MainSectionWithSidebarLayout } from "./two-grid-layout-DH70NA2h.js";
import { S as SitePagination } from "./pagination-1dw_YrX9.js";
import { P as PageTitle } from "./public-page-title-DeEfVH6_.js";
import { S as SearchBar } from "./SearchBar-CDKJf1aa.js";
import { A as AppLayout } from "./app-layout-DD5QFxGc.js";
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
import "@tanstack/react-query";
import "use-debounce";
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
const TestingServicesPage = () => {
  const {
    pageIntro,
    testing_services: { data: testing_services, meta }
  } = usePage().props;
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, {}),
    /* @__PURE__ */ jsx(TopAdSection, {}),
    /* @__PURE__ */ jsx(MainSectionWithSidebarLayout, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3 lg:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx(
          PageTitle,
          {
            title: pageIntro.title,
            description: pageIntro.description
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:gap-6", children: testing_services.map(
            (testing_service, idx) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "group rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:p-6",
                children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: publicMethod.testing_services.show(
                        testing_service.slug
                      ),
                      className: "block space-y-2",
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl", children: testing_service.name }),
                          /* @__PURE__ */ jsx(ChevronRight, { className: "mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm text-foreground md:text-base", children: testing_service.description })
                      ]
                    }
                  ),
                  testing_service.updated_at && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-1.5 border-t border-gray-100 pt-3 text-xs text-gray-500 md:text-sm", children: [
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
                      "Last updated:",
                      " ",
                      testing_service.updated_at
                    ] })
                  ] })
                ]
              },
              idx
            )
          ) }),
          /* @__PURE__ */ jsx(SitePagination, { meta })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(PageSidebar, { children: /* @__PURE__ */ jsx(SearchBar, {}) })
    ] }) })
  ] });
};
export {
  TestingServicesPage as default
};
