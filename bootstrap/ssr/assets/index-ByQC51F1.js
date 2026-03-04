import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextHeading } from "./typography-DgtXAMO0.js";
import { m as mcqs } from "./index-CxePvluH.js";
import AdminLayout from "./admin-layout-Qq9W5dDn.js";
import StatsCard from "./stats-card-CzhvZ8Dl.js";
import McqsTable from "./data-table-index-BCrxRi7V.js";
import "class-variance-authority";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "./index-C1F4OtKB.js";
import "./app-layout-DW4c6QPD.js";
import "react";
import "@radix-ui/react-slot";
import "lucide-react";
import "./index-Bj4QWzCK.js";
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
import "./data-table-columns-C3T5kRya.js";
import "./text-link-DdhcVDvj.js";
function McqsIndex({
  mcqs: mcqs$1,
  stats,
  filters
}) {
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "MCQs List", children: [
    /* @__PURE__ */ jsx(TextHeading, { as: "h1", size: "xl", textColor: "primary", children: "MCQs List" }),
    /* @__PURE__ */ jsxs("div", { className: "grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-4", children: [
      /* @__PURE__ */ jsx(StatsCard, { title: "Total MCQs", total: stats.total }),
      /* @__PURE__ */ jsx(StatsCard, { title: "Today", total: stats.today }),
      /* @__PURE__ */ jsx(StatsCard, { title: "This Week", total: stats.this_week }),
      /* @__PURE__ */ jsx(
        StatsCard,
        {
          title: `Top Creator - ${stats.top_creator?.name}`,
          total: stats.top_creator?.total_entries
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min", children: /* @__PURE__ */ jsx(
      McqsTable,
      {
        tableData: mcqs$1,
        filters,
        url: mcqs.index().url
      }
    ) })
  ] });
}
export {
  McqsIndex as default
};
