import { jsxs, jsx } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-A2l1WPjz.js";
import { F as FeatureCard } from "./feature-card-Dc_KXTut.js";
import { T as TopAdSection, M as MainSectionWithSidebarLayout } from "./two-grid-layout-DH70NA2h.js";
import { M as McqCard } from "./mcq-card-krHnKlEN.js";
import { S as SitePagination } from "./pagination-1dw_YrX9.js";
import { P as PageTitle } from "./public-page-title-CazrSBNq.js";
import { S as SearchBar } from "./SearchBar-BMzM_S6J.js";
import { T as TextLink } from "./text-link-DdhcVDvj.js";
import { A as AppLayout } from "./app-layout-CQYjnFu_.js";
import { p as publicMethod } from "./index-CmbwX329.js";
import { usePage } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import PageSidebar from "./page-sidebar-BF2fV1kj.js";
import "./index-Bj4QWzCK.js";
import "react";
import "./index-C1F4OtKB.js";
import "sonner";
import "./accordion-TKDZsCwV.js";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "./badge-CSOzNZ1b.js";
import "class-variance-authority";
import "./button-BlmebLQZ.js";
import "./field-BSdObGgN.js";
import "./label-DO4oxG8w.js";
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
import "./index-DZj2b4Wd.js";
const TopicPage = () => {
  const { seo, mcqs, subject, topic, schema } = usePage().props;
  const buildMcqLink = (slug) => publicMethod.mcqs.show({
    mcq: slug
  });
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, { schema }),
    /* @__PURE__ */ jsx(TopAdSection, {}),
    /* @__PURE__ */ jsx(MainSectionWithSidebarLayout, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3 lg:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx(PageTitle, { title: seo.title }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:space-y-6", children: [
          false,
          mcqs.data.map((mcq, idx) => /* @__PURE__ */ jsx(
            McqCard,
            {
              mcq,
              idx,
              route: buildMcqLink(mcq.slug)
            },
            idx
          )),
          /* @__PURE__ */ jsx(SitePagination, { meta: mcqs.meta })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(PageSidebar, { children: [
        /* @__PURE__ */ jsx(SearchBar, {}),
        subject.topics && subject.topics.length > 1 && /* @__PURE__ */ jsx(
          FeatureCard,
          {
            title: "Topics",
            description: seo.description,
            children: /* @__PURE__ */ jsx("div", { className: "md:px-2", children: subject.topics?.map((topic2, idx) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-1 text-sm",
                children: [
                  /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
                  /* @__PURE__ */ jsx(
                    TextLink,
                    {
                      href: publicMethod.subject.topic.show(
                        { subject, topic: topic2 }
                      ),
                      className: "my-2 block",
                      children: topic2.name
                    }
                  )
                ]
              },
              idx
            )) })
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  TopicPage as default
};
