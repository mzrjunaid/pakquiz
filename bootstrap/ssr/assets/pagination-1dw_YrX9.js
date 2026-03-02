import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { F as Field, a as FieldLabel } from "./field-BSdObGgN.js";
import { ChevronLeftIcon, MoreHorizontalIcon, ChevronRightIcon } from "lucide-react";
import { c as cn } from "./utils-BcGwcge3.js";
import { b as buttonVariants } from "./button-BlmebLQZ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectGroup, d as SelectItem } from "./select-dEUKSXuN.js";
import { router } from "@inertiajs/react";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChevronLeftIcon, {}),
        /* @__PURE__ */ jsx("span", { className: "hidden sr-only sm:block", children: "Previous" })
      ]
    }
  );
}
function PaginationNext({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sr-only sm:block", children: "Next" }),
        /* @__PURE__ */ jsx(ChevronRightIcon, {})
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function SitePagination({ meta }) {
  const { path, from, to, total, per_page, links } = meta;
  const handlePerPageChange = (value) => {
    const params = new URLSearchParams(window.location.search);
    const query = Object.fromEntries(params.entries());
    router.get(
      path,
      {
        ...query,
        per_page: value,
        page: 1
      },
      {
        preserveState: true,
        preserveScroll: true,
        replace: true
      }
    );
  };
  if (total === 0) {
    return null;
  }
  const pageLinks = links.filter(
    (link) => link.label !== "&laquo; Previous" && link.label !== "Next &raquo;"
  );
  const previousLink = links.find(
    (link) => link.label === "&laquo; Previous"
  );
  const nextLink = links.find((link) => link.label === "Next &raquo;");
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-5 py-4 md:flex-col", children: [
    pageLinks.length > 1 && /* @__PURE__ */ jsx(Pagination, { className: "w-full", children: /* @__PURE__ */ jsxs(PaginationContent, { className: "w-full justify-center", children: [
      /* @__PURE__ */ jsx(PaginationItem, { className: "size-6 md:size-auto", children: /* @__PURE__ */ jsx(
        PaginationPrevious,
        {
          "aria-label": "Go to previous page",
          size: "sm",
          href: previousLink?.url?.toString(),
          "aria-disabled": !previousLink?.url,
          className: `${!previousLink?.url ? "pointer-events-none opacity-50" : "cursor-pointer"}`
        }
      ) }),
      pageLinks.map((link, index) => /* @__PURE__ */ jsx(
        PaginationItem,
        {
          className: "size-6 md:size-auto",
          children: link.label === "..." ? /* @__PURE__ */ jsx(PaginationEllipsis, {}) : /* @__PURE__ */ jsx(
            PaginationLink,
            {
              size: "sm",
              href: link.url?.toString(),
              isActive: link.active,
              "aria-label": `Go to page ${link.label}`,
              "aria-current": link.active ? "page" : void 0,
              children: link.label
            }
          )
        },
        `page-${link.page}-${index}`
      )),
      /* @__PURE__ */ jsx(PaginationItem, { className: "size-6 md:size-auto", children: /* @__PURE__ */ jsx(
        PaginationNext,
        {
          "aria-label": "Go to next page",
          href: nextLink?.url?.toString(),
          "aria-disabled": !nextLink?.url,
          size: "sm",
          className: !nextLink?.url ? "pointer-events-none opacity-50" : "cursor-pointer"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse md:flex-row items-center gap-6", children: [
      /* @__PURE__ */ jsxs(Field, { orientation: "horizontal", className: "w-fit", children: [
        /* @__PURE__ */ jsx(
          FieldLabel,
          {
            htmlFor: "per-page",
            className: "text-sm text-muted-foreground",
            children: "Per page"
          }
        ),
        /* @__PURE__ */ jsxs(
          Select,
          {
            value: String(per_page),
            onValueChange: handlePerPageChange,
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "h-9 w-20", id: "per-page", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { align: "start", children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "10", children: "10" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "20", children: "20" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "50", children: "50" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "100", children: "100" })
              ] }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: from && to ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "Showing ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: from }),
        " ",
        "to ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: to }),
        " of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: total }),
        " results"
      ] }) : /* @__PURE__ */ jsx(Fragment, { children: "No results" }) })
    ] })
  ] });
}
export {
  SitePagination as S
};
