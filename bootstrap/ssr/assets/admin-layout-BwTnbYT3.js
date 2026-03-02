import { jsxs, jsx } from "react/jsx-runtime";
import { A as AppLayout } from "./app-layout-CQYjnFu_.js";
import { b as breadcrumb } from "./breadcrumbs-utils-BzOZAm8f.js";
import { usePage, Head } from "@inertiajs/react";
import { useMemo } from "react";
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
function AdminLayout({ children, title }) {
  const { url } = usePage();
  const breadcrumbs = useMemo(() => breadcrumb(url), [url]);
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children })
  ] });
}
export {
  AdminLayout as default
};
