import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-BlmebLQZ.js";
import { L as Label } from "./label-DO4oxG8w.js";
import { Switch as Switch$1 } from "radix-ui";
import { c as cn } from "./utils-BcGwcge3.js";
import { Share, Edit } from "lucide-react";
import AdminLayout from "./admin-layout-Qq9W5dDn.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./app-layout-DW4c6QPD.js";
import "react";
import "@radix-ui/react-slot";
import "./index-Bj4QWzCK.js";
import "./index-C1F4OtKB.js";
import "@inertiajs/react";
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
import "./breadcrumbs-utils-BzOZAm8f.js";
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Switch$1.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Switch$1.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function McqsShow({ mcq }) {
  return /* @__PURE__ */ jsx(AdminLayout, { title: "Show MCQ", children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 p-3 md:min-h-min dark:border-sidebar-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 md:w-full md:flex-row md:justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `rounded-4xl ${mcq.is_active && "bg-green-700"} px-4 py-1 text-xs font-semibold text-white`,
            children: mcq.is_active ? "Publish" : "Private"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "active-mcq", children: mcq.is_active ? "Active" : "Inactive" }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              id: "active-mcq",
              checked: mcq.is_active,
              onCheckedChange: (checked) => console.log(checked)
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-3 right-2 flex gap-2 md:relative md:top-auto md:right-auto md:gap-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "icon",
            className: "rounded-full cursor-pointer",
            children: /* @__PURE__ */ jsx(Share, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "default",
            size: "icon",
            className: "rounded-full cursor-pointer",
            children: /* @__PURE__ */ jsx(Edit, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid auto-rows-min gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx("div", { className: "relative rounded-xl border border-sidebar-border/70 py-4 ps-2 pe-2 dark:border-sidebar-border", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
          "Question:",
          " "
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: mcq.question }),
        /* @__PURE__ */ jsx("ul", { className: "mt-2 ml-5 list-inside", children: mcq.options.map((option, idx) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: `flex gap-2 ${option.is_correct && "text-blue-700"}`,
            children: [
              /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                String.fromCharCode(65 + idx),
                "."
              ] }),
              /* @__PURE__ */ jsx("span", { children: option.option_text }),
              "(",
              option.sort_order,
              " - Sort Order)"
            ]
          },
          idx
        )) }),
        /* @__PURE__ */ jsx("hr", { className: "my-4" }),
        mcq.paper ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-blue-600", children: "Paper" }),
          /* @__PURE__ */ jsxs("p", { children: [
            mcq.paper.name,
            " (",
            mcq.paper.testing_service.name,
            ") -",
            " ",
            mcq.paper.department.name,
            " -",
            mcq.paper.subject.name,
            "-",
            mcq.paper.schedule_at
          ] })
        ] }) : "Paper not Attached"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl border border-sidebar-border/70 px-4 py-4 text-center dark:border-sidebar-border", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-2 text-2xl font-bold", children: "Mcqs Meta Information" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
              "Subject:",
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { children: mcq.subject.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
              "Topic:",
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { children: mcq ? mcq.topic.name : "" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
              "Question Type:",
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { children: mcq ? mcq.type : "" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
              "Difficulty Level:",
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { children: mcq ? mcq.difficulty : "" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
              "Tags:",
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { children: mcq ? mcq.tags?.map((tag, i) => /* @__PURE__ */ jsxs("span", { children: [
              tag.name,
              ",",
              " "
            ] }, i)) : "" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
              "Created at:",
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { children: mcq ? mcq.created_at : "" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
              "Updated at:",
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { children: mcq ? mcq.updated_at : "" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-600", children: [
              "Created by:",
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { children: mcq ? mcq.created_by?.name : "" })
          ] })
        ] })
      ] })
    ] }),
    mcq?.explanation && /* @__PURE__ */ jsxs("div", { className: "relative my-4 rounded-xl border border-sidebar-border/70 px-4 py-4 text-center dark:border-sidebar-border", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-2xl font-bold", children: "MCQ Explanation" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: mcq ? mcq.explanation : "" })
    ] })
  ] }) }) });
}
export {
  McqsShow as default
};
