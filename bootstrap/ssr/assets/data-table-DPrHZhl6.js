import { jsx, jsxs } from "react/jsx-runtime";
import { T as Table, b as TableHeader, c as TableRow, d as TableHead, e as TableBody, f as TableCell } from "./table-DAOZfoAt.js";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
function DataTable({
  columns,
  data
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true
  });
  return /* @__PURE__ */ jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => {
      return /* @__PURE__ */ jsx(TableHead, { children: header.isPlaceholder ? null : flexRender(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id);
    }) }, headerGroup.id)) }),
    /* @__PURE__ */ jsx(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
      TableRow,
      {
        "data-state": row.getIsSelected() && "selected",
        children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(
          TableCell,
          {
            className: "max-w-xs truncate",
            children: flexRender(
              cell.column.columnDef.cell,
              cell.getContext()
            )
          },
          cell.id
        ))
      },
      row.id
    )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(
      TableCell,
      {
        colSpan: columns.length,
        className: "h-24 text-center",
        children: "No results."
      }
    ) }) })
  ] }) });
}
export {
  DataTable
};
