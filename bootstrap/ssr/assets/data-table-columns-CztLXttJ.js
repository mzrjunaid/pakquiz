import { jsx, jsxs } from "react/jsx-runtime";
import { T as TextLink } from "./text-link-DdhcVDvj.js";
import { B as Button } from "./button-BlmebLQZ.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuItem, e as DropdownMenuSeparator } from "./dropdown-menu-CU31zq8b.js";
import { d as departments } from "./index-DSmwQD5U.js";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "@inertiajs/react";
import "class-variance-authority";
import "radix-ui";
import "@radix-ui/react-dropdown-menu";
import "./index-C1F4OtKB.js";
const getColumns = ({
  onEdit,
  onDelete,
  onSort
}) => [
  {
    accessorKey: "id",
    header: () => {
      return /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          onClick: () => onSort?.("id"),
          className: "-ml-4",
          children: [
            "ID",
            /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
          ]
        }
      );
    },
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "font-medium", children: row.getValue("id") })
  },
  {
    accessorKey: "title",
    header: () => {
      return /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          onClick: () => onSort?.("title"),
          className: "-ml-4",
          children: [
            "Title",
            /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
          ]
        }
      );
    },
    cell: ({ row }) => /* @__PURE__ */ jsx(
      TextLink,
      {
        href: departments.show(row.original.id),
        className: "max-w-xs truncate",
        children: row.getValue("title")
      }
    )
  },
  {
    accessorKey: "description",
    header: () => {
      return /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          onClick: () => onSort?.("description"),
          className: "-ml-4",
          children: [
            "Description",
            /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
          ]
        }
      );
    },
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "max-w-xs truncate", children: row.getValue("description") })
  },
  {
    accessorKey: "page_type",
    header: () => {
      return /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          onClick: () => onSort?.("page_type"),
          className: "-ml-4",
          children: [
            "Page Type",
            /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
          ]
        }
      );
    },
    cell: ({ row }) => /* @__PURE__ */ jsx("span", { children: row.getValue("page_type") })
  },
  {
    accessorKey: "created_at",
    header: () => {
      return /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          onClick: () => onSort?.("created_at"),
          className: "-ml-4",
          children: [
            "Created At",
            /* @__PURE__ */ jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" })
          ]
        }
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      return /* @__PURE__ */ jsx("div", { children: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }) });
    }
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const service = row.original;
      return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
          /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
          /* @__PURE__ */ jsx(
            DropdownMenuItem,
            {
              onClick: () => navigator.clipboard.writeText(
                service.id.toString()
              ),
              children: "Copy ID"
            }
          ),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => onEdit?.(service), children: "Edit" }),
          /* @__PURE__ */ jsx(
            DropdownMenuItem,
            {
              onClick: () => onDelete?.(service),
              className: "text-red-600",
              children: "Delete"
            }
          )
        ] })
      ] });
    }
  }
];
export {
  getColumns
};
