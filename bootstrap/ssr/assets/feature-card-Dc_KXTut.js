import { jsxs, jsx } from "react/jsx-runtime";
function FeatureCard({
  title,
  description,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-card p-6 shadow-md", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-2 text-lg font-semibold", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "mb-3 text-muted text-sm", children: description }),
    /* @__PURE__ */ jsx("div", { children })
  ] });
}
export {
  FeatureCard as F
};
