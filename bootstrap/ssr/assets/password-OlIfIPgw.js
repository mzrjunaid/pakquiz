import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { q as queryParams } from "./index-C1F4OtKB.js";
import { I as InputError } from "./input-error-CcQKrK4o.js";
import { A as AppLayout } from "./app-layout-DD5QFxGc.js";
import { a as edit$1, S as SettingsLayout, H as HeadingSmall } from "./layout-D8Epw9aM.js";
import { Transition } from "@headlessui/react";
import { Head, Form } from "@inertiajs/react";
import { useRef } from "react";
import { B as Button } from "./button-BlmebLQZ.js";
import { I as Input } from "./input-DK-Y0ndi.js";
import { L as Label } from "./label-DO4oxG8w.js";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "./index-Bj4QWzCK.js";
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
import "radix-ui";
import "./index-B-tanysx.js";
const edit = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/settings/password"
};
edit.url = (options) => {
  return edit.definition.url + queryParams(options);
};
edit.get = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.head = (options) => ({
  url: edit.url(options),
  method: "head"
});
const editForm = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.get = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.head = (options) => ({
  action: edit.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit.form = editForm;
const update = (options) => ({
  url: update.url(options),
  method: "put"
});
update.definition = {
  methods: ["put"],
  url: "/settings/password"
};
update.url = (options) => {
  return update.definition.url + queryParams(options);
};
update.put = (options) => ({
  url: update.url(options),
  method: "put"
});
const updateForm = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm.put = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
const PasswordController = { update };
const breadcrumbs = [
  {
    title: "Password settings",
    href: edit$1().url
  }
];
function Password() {
  const passwordInput = useRef(null);
  const currentPasswordInput = useRef(null);
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Password settings" }),
    /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        HeadingSmall,
        {
          title: "Update password",
          description: "Ensure your account is using a long, random password to stay secure"
        }
      ),
      /* @__PURE__ */ jsx(
        Form,
        {
          ...PasswordController.update.form(),
          options: {
            preserveScroll: true
          },
          resetOnError: [
            "password",
            "password_confirmation",
            "current_password"
          ],
          resetOnSuccess: true,
          onError: (errors) => {
            if (errors.password) {
              passwordInput.current?.focus();
            }
            if (errors.current_password) {
              currentPasswordInput.current?.focus();
            }
          },
          className: "space-y-6",
          children: ({ errors, processing, recentlySuccessful }) => /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "current_password", children: "Current password" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "current_password",
                  ref: currentPasswordInput,
                  name: "current_password",
                  type: "password",
                  className: "mt-1 block w-full",
                  autoComplete: "current-password",
                  placeholder: "Current password"
                }
              ),
              /* @__PURE__ */ jsx(
                InputError,
                {
                  message: errors.current_password
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "New password" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "password",
                  ref: passwordInput,
                  name: "password",
                  type: "password",
                  className: "mt-1 block w-full",
                  autoComplete: "new-password",
                  placeholder: "New password"
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
                  name: "password_confirmation",
                  type: "password",
                  className: "mt-1 block w-full",
                  autoComplete: "new-password",
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
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  disabled: processing,
                  "data-test": "update-password-button",
                  children: "Save password"
                }
              ),
              /* @__PURE__ */ jsx(
                Transition,
                {
                  show: recentlySuccessful,
                  enter: "transition ease-in-out",
                  enterFrom: "opacity-0",
                  leave: "transition ease-in-out",
                  leaveTo: "opacity-0",
                  children: /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600", children: "Saved" })
                }
              )
            ] })
          ] })
        }
      )
    ] }) })
  ] });
}
export {
  Password as default
};
