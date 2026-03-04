import { jsxs, jsx } from "react/jsx-runtime";
import AdminLayout from "./admin-layout-Qq9W5dDn.js";
import DashboardTable from "./dashboard-table-DJbSUzal.js";
import { SectionCards } from "./section-stat-cards-CEdEc-xw.js";
import "./app-layout-DW4c6QPD.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "./index-Bj4QWzCK.js";
import "./index-C1F4OtKB.js";
import "@inertiajs/react";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
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
import "./text-link-DdhcVDvj.js";
import "./table-DAOZfoAt.js";
import "./stats-card-CzhvZ8Dl.js";
import "./card-C5ukPs4e.js";
function SeoMetaIndex({ stats, latest }) {
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Dashboard List", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Dashboard" }),
    /* @__PURE__ */ jsx(SectionCards, { stats }),
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Latest Mcqs / Papers" }),
    /* @__PURE__ */ jsx("div", { className: "relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border", children: /* @__PURE__ */ jsx(DashboardTable, { latest }) })
  ] });
}
export {
  SeoMetaIndex as default
};
