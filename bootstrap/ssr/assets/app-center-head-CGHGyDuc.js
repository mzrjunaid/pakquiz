import { jsx } from "react/jsx-runtime";
import { usePage, Head } from "@inertiajs/react";
function AppCenterHead({ schema }) {
  const { seo } = usePage().props;
  return /* @__PURE__ */ jsx(Head, { title: seo.title, children: schema && /* @__PURE__ */ jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
    }
  ) });
}
export {
  AppCenterHead as A
};
