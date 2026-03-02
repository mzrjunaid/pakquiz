import { jsxs, jsx } from "react/jsx-runtime";
import { b as home } from "./index-DFqmwzVc.js";
import { Link } from "@inertiajs/react";
function AppLogoIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 320 320",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            width: "320",
            height: "320",
            rx: "32.65",
            ry: "32.65",
            fill: "#ffffff"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#182b4e",
            d: "m248.49,260.54l-15.61-17.97c7.11-3.94 12.87-9.03 17.28-15.28\n        4.41-6.25 7.65-13.49 9.71-21.71 2.06-8.22 3.09-17.15 3.09-26.8\n        0-14.47-2.32-27.07-6.95-37.8-4.63-10.73-11.92-19.04-21.85-24.95\n        -9.93-5.9-22.84-8.85-38.7-8.85s-28.44,2.94-38.47,8.81\n        c-10.03,5.87-17.44,14.16-22.23,24.85-4.79,10.7-7.19,23.28-7.19,37.75\n        0,10.85 1.33,20.69 4,29.52 2.67,8.82 6.76,16.39 12.28,22.71\n        5.52,6.32 12.55,11.17 21.09,14.57 8.54,3.39 18.65,5.09 30.33,5.09h1.33\n        l7.55,10.07h44.34Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#f17521",
            d: "m221.15,172.74c0-7.33-2.97-13.96-7.77-18.77\n        -4.81-4.8-11.43-7.77-18.77-7.77-7.23.1-13.76,3.13-18.5,7.94\n        -4.74,4.81-7.66,11.39-7.66,18.6\n        0,5.66 1.91,10.89 4.99,15.17\n        4.97,6.9 7.86,15.08 8.08,23.58h2.07\n        c-.19-7.39-2.34-14.51-6.03-20.53\n        -2.49-4.06-3.98-9.04-4.04-14.41\n        0-14.04 9.78-25.4 21.78-25.21\n        12-.2 21.78 11.16 21.78 25.21\n        0,5.6-1.56,10.77-4.19,14.96\n        -3.7,5.88-5.71,12.99-5.89,20.29h2.07\n        c.21-8.38 2.9-16.55 7.9-23.32\n        3.25-4.41 5.18-9.85 5.18-15.75Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#182b4e",
            d: "m181.25,213.79c.22,7 6.11,12.61 13.37,12.61\n        s13.16-5.61 13.37-12.61h-26.75Z"
          }
        ),
        /* @__PURE__ */ jsxs("g", { fill: "#f27123", children: [
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "176.83",
              y: "123.78",
              width: "5.9",
              height: "16.75",
              rx: "2.66"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "237.22",
              y: "167.12",
              width: "5.9",
              height: "16.75",
              rx: "2.66"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "228.38",
              y: "140.59",
              width: "5.9",
              height: "16.75",
              rx: "2.66"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "205.78",
              y: "123.88",
              width: "5.9",
              height: "16.75",
              rx: "2.66"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "227.4",
              y: "193.65",
              width: "5.9",
              height: "16.75",
              rx: "2.66"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "153.69",
              y: "191.69",
              width: "5.9",
              height: "16.75",
              rx: "2.66"
            }
          )
        ] })
      ]
    }
  );
}
function AuthSimpleLayout({
  children,
  title,
  description
}) {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: home(),
          className: "flex flex-col items-center gap-2 font-medium",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-1 flex h-9 w-9 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx(AppLogoIcon, { className: "size-9 fill-current text-[var(--foreground)] dark:text-white" }) }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: title })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-medium", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-muted-foreground", children: description })
      ] })
    ] }),
    children
  ] }) }) });
}
function AuthLayout({
  children,
  title,
  description,
  ...props
}) {
  return /* @__PURE__ */ jsx(AuthSimpleLayout, { title, description, ...props, children });
}
export {
  AuthLayout as A
};
