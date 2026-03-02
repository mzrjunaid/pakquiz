import { jsxs, jsx } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-A2l1WPjz.js";
import { P as PageTitle } from "./public-page-title-CazrSBNq.js";
import { A as AppLayout } from "./app-layout-CQYjnFu_.js";
import { TermsOfServicePage } from "./terms-of-service-DeQLPJoU.js";
import "@inertiajs/react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "./index-Bj4QWzCK.js";
import "./index-C1F4OtKB.js";
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
const TermsOfService = ({ seo }) => {
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, {}),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-3 py-8 lg:px-0", children: [
      /* @__PURE__ */ jsx(
        PageTitle,
        {
          title: seo.title,
          subtitle: "Last updated: October 2, 2025"
        }
      ),
      /* @__PURE__ */ jsx(TermsOfServicePage, {})
    ] })
  ] });
};
export {
  TermsOfService as default
};
