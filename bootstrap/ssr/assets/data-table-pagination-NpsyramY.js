import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-BlmebLQZ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-dEUKSXuN.js";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import "class-variance-authority";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
function DataTablePagination({
  currentPage,
  lastPage,
  perPage,
  total,
  from,
  to,
  onPageChange,
  onPerPageChange
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Rows per page" }),
        /* @__PURE__ */ jsxs(
          Select,
          {
            value: perPage.toString(),
            onValueChange: (value) => {
              onPerPageChange(Number(value));
            },
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: perPage }) }),
              /* @__PURE__ */ jsx(SelectContent, { side: "top", children: [5, 10, 25, 50, 100].map((pageSize) => /* @__PURE__ */ jsx(
                SelectItem,
                {
                  value: `${pageSize}`,
                  children: pageSize
                },
                pageSize
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        currentPage,
        " of ",
        lastPage
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
        "Showing ",
        from || 0,
        " to ",
        to || 0,
        " of ",
        total,
        " results"
      ] }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "hidden h-8 w-8 p-0 lg:flex",
          onClick: () => onPageChange(1),
          disabled: currentPage === 1,
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to first page" }),
            /* @__PURE__ */ jsx(ChevronsLeft, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => onPageChange(currentPage - 1),
          disabled: currentPage === 1,
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to previous page" }),
            /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => onPageChange(currentPage + 1),
          disabled: currentPage === lastPage,
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to next page" }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "hidden h-8 w-8 p-0 lg:flex",
          onClick: () => onPageChange(lastPage),
          disabled: currentPage === lastPage,
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to last page" }),
            /* @__PURE__ */ jsx(ChevronsRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] });
}
export {
  DataTablePagination
};
