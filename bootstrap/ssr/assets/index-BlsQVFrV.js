import { jsxs, jsx } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-CGHGyDuc.js";
import { P as PageTitle } from "./public-page-title-BGg8AUwY.js";
import { A as AppLayout } from "./app-layout-DW4c6QPD.js";
import { ContactPage } from "./contact-us-BxW1fPf4.js";
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
import "./alert-C-Al3GjX.js";
import "./input-DK-Y0ndi.js";
import "./label-DO4oxG8w.js";
import "./textarea-A6XKVNvk.js";
const ContactUs = ({ seo }) => {
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, {}),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-3 py-8 lg:px-0", children: [
      /* @__PURE__ */ jsx(
        PageTitle,
        {
          title: seo.title,
          subtitle: "Get in touch with our team"
        }
      ),
      /* @__PURE__ */ jsx(ContactPage, {})
    ] })
  ] });
};
export {
  ContactUs as default
};
