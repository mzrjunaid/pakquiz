import { jsxs, jsx } from "react/jsx-runtime";
import { B as Breadcrumbs } from "./app-layout-DD5QFxGc.js";
const PageTitle = ({
  title,
  subtitle,
  breadcrumbs,
  description,
  className
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `order-0 flex-1 text-center md:mb-6 lg:order-0 ${className}`,
      children: [
        breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsx(Breadcrumbs, { breadcrumbs }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-0", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-xl leading-tight font-bold lg:text-3xl xl:text-2xl", children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted", children: subtitle })
          ] }),
          description && /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted", children: description }) })
        ] })
      ]
    }
  );
};
export {
  PageTitle as P
};
