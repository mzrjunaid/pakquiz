import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { e as login } from "./index-DFqmwzVc.js";
import { q as queryParams } from "./index-C1F4OtKB.js";
import { Head, Form } from "@inertiajs/react";
import { I as InputError } from "./input-error-CcQKrK4o.js";
import { T as TextLink } from "./text-link-DdhcVDvj.js";
import { B as Button } from "./button-BlmebLQZ.js";
import { I as Input } from "./input-DK-Y0ndi.js";
import { L as Label } from "./label-DO4oxG8w.js";
import { S as Spinner } from "./spinner-BjtccMY1.js";
import { A as AuthLayout } from "./auth-layout-D_2p83ba.js";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "radix-ui";
import "lucide-react";
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/register"
};
store.url = (options) => {
  return store.definition.url + queryParams(options);
};
store.post = (options) => ({
  url: store.url(options),
  method: "post"
});
const storeForm = (options) => ({
  action: store.url(options),
  method: "post"
});
storeForm.post = (options) => ({
  action: store.url(options),
  method: "post"
});
store.form = storeForm;
({
  store: Object.assign(store, store)
});
function Register() {
  return /* @__PURE__ */ jsxs(
    AuthLayout,
    {
      title: "Create an account",
      description: "Enter your details below to create your account",
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Register" }),
        /* @__PURE__ */ jsx(
          Form,
          {
            ...store.form(),
            resetOnSuccess: ["password", "password_confirmation"],
            disableWhileProcessing: true,
            className: "flex flex-col gap-6",
            children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "name",
                      type: "text",
                      required: true,
                      autoFocus: true,
                      tabIndex: 1,
                      autoComplete: "name",
                      name: "name",
                      placeholder: "Full name"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputError,
                    {
                      message: errors.name,
                      className: "mt-2"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email address" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "email",
                      type: "email",
                      required: true,
                      tabIndex: 2,
                      autoComplete: "email",
                      name: "email",
                      placeholder: "email@example.com"
                    }
                  ),
                  /* @__PURE__ */ jsx(InputError, { message: errors.email })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "password",
                      type: "password",
                      required: true,
                      tabIndex: 3,
                      autoComplete: "new-password",
                      name: "password",
                      placeholder: "Password"
                    }
                  ),
                  /* @__PURE__ */ jsx(InputError, { message: errors.password })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm password" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "password_confirmation",
                      type: "password",
                      required: true,
                      tabIndex: 4,
                      autoComplete: "new-password",
                      name: "password_confirmation",
                      placeholder: "Confirm password"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputError,
                    {
                      message: errors.password_confirmation
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    type: "submit",
                    className: "mt-2 w-full",
                    tabIndex: 5,
                    "data-test": "register-user-button",
                    children: [
                      processing && /* @__PURE__ */ jsx(Spinner, {}),
                      "Create account"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center text-sm text-muted-foreground", children: [
                "Already have an account?",
                " ",
                /* @__PURE__ */ jsx(TextLink, { href: login(), tabIndex: 6, children: "Log in" })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
export {
  Register as default
};
