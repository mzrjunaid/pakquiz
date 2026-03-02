import { jsxs, jsx } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-CGHGyDuc.js";
import { A as AppLayout } from "./app-layout-DD5QFxGc.js";
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
const TopicsPage = ({ topics, seo }) => {
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, {}),
    /* @__PURE__ */ jsx("pre", { children: JSON.stringify(seo, null, 2) }),
    /* @__PURE__ */ jsx("pre", { children: JSON.stringify(topics, null, 2) })
  ] });
};
export {
  TopicsPage as default
};
