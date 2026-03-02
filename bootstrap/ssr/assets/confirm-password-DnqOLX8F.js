import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-CcQKrK4o.js";
import { B as Button } from "./button-BlmebLQZ.js";
import { I as Input } from "./input-DK-Y0ndi.js";
import { L as Label } from "./label-DO4oxG8w.js";
import { S as Spinner } from "./spinner-BjtccMY1.js";
import { A as AuthLayout } from "./auth-layout-D_2p83ba.js";
import { s as store } from "./index-BOHtcAfq.js";
import { Head, Form } from "@inertiajs/react";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "radix-ui";
import "lucide-react";
import "./index-DFqmwzVc.js";
import "./index-C1F4OtKB.js";
function ConfirmPassword() {
  return /* @__PURE__ */ jsxs(
    AuthLayout,
    {
      title: "Confirm your password",
      description: "This is a secure area of the application. Please confirm your password before continuing.",
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Confirm password" }),
        /* @__PURE__ */ jsx(Form, { ...store.form(), resetOnSuccess: ["password"], children: ({ processing, errors }) => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                placeholder: "Password",
                autoComplete: "current-password",
                autoFocus: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs(
            Button,
            {
              className: "w-full",
              disabled: processing,
              "data-test": "confirm-password-button",
              children: [
                processing && /* @__PURE__ */ jsx(Spinner, {}),
                "Confirm password"
              ]
            }
          ) })
        ] }) })
      ]
    }
  );
}
export {
  ConfirmPassword as default
};
