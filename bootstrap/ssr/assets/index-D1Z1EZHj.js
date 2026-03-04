import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextHeading } from "./typography-DgtXAMO0.js";
import { s as seo } from "./app-layout-DW4c6QPD.js";
import AdminLayout from "./admin-layout-Qq9W5dDn.js";
import StatsCard from "./stats-card-CzhvZ8Dl.js";
import SeoMetaTable from "./data-table-index-C1PPAfzl.js";
import "class-variance-authority";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "lucide-react";
import "./index-Bj4QWzCK.js";
import "./index-C1F4OtKB.js";
import "@inertiajs/react";
import "./button-BlmebLQZ.js";
import "radix-ui";
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
import "./breadcrumbs-utils-BzOZAm8f.js";
import "./card-C5ukPs4e.js";
import "./clean-filters-BkXkL4ES.js";
import "@tanstack/react-table";
import "./data-table-DPrHZhl6.js";
import "./table-DAOZfoAt.js";
import "./data-table-pagination-NpsyramY.js";
import "./select-dEUKSXuN.js";
import "./search-filter-BjQtiAys.js";
import "./input-DK-Y0ndi.js";
import "./data-table-columns-CztLXttJ.js";
import "./text-link-DdhcVDvj.js";
function SeoMetaIndex({
  seoMeta,
  filters,
  stats
}) {
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "SEO Meta List", children: [
    /* @__PURE__ */ jsx(TextHeading, { as: "h1", size: "xl", textColor: "primary", children: "SEO Meta" }),
    /* @__PURE__ */ jsxs("div", { className: "grid auto-rows-min gap-4 sm:grid-cols-3 md:grid-cols-6", children: [
      /* @__PURE__ */ jsx(StatsCard, { title: "Total SEO Meta", total: stats.total }),
      /* @__PURE__ */ jsx(StatsCard, { title: "MCQs", total: stats.by_type.Mcq }),
      /* @__PURE__ */ jsx(StatsCard, { title: "Paper", total: stats.by_type.Paper }),
      /* @__PURE__ */ jsx(StatsCard, { title: "Subject", total: stats.by_type.Subject }),
      /* @__PURE__ */ jsx(StatsCard, { title: "Topics", total: stats.by_type.Topic }),
      /* @__PURE__ */ jsx(
        StatsCard,
        {
          title: "Testing Services",
          total: stats.by_type.TestingService
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      SeoMetaTable,
      {
        tableData: seoMeta,
        filters,
        url: seo.index().url
      }
    )
  ] });
}
export {
  SeoMetaIndex as default
};
