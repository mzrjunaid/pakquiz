import { jsxs, jsx } from "react/jsx-runtime";
import { c as cleanFilters } from "./clean-filters-BkXkL4ES.js";
import { router } from "@inertiajs/react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { useState } from "react";
import { DataTable } from "./data-table-DPrHZhl6.js";
import { DataTablePagination } from "./data-table-pagination-NpsyramY.js";
import { DataTableToolbar } from "./search-filter-BjQtiAys.js";
import { getColumns } from "./data-table-columns-CB6n5Ea3.js";
import "./table-DAOZfoAt.js";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "./button-BlmebLQZ.js";
import "class-variance-authority";
import "radix-ui";
import "./select-dEUKSXuN.js";
import "lucide-react";
import "./input-DK-Y0ndi.js";
import "./text-link-DdhcVDvj.js";
import "./dropdown-menu-CU31zq8b.js";
import "@radix-ui/react-dropdown-menu";
import "./index-DSmwQD5U.js";
import "./index-C1F4OtKB.js";
import "./index-Da6iTmvw.js";
function PaperTable({
  tableData,
  filters = {},
  url,
  onEdit,
  onDelete
}) {
  const { data, meta } = tableData;
  const { current_page, last_page, per_page, total, from, to } = meta;
  const [searchValues, setSearchValues] = useState({
    name: filters.name || "",
    created_by: filters.created_by || ""
  });
  const updateFilters = (newFilters) => {
    const merged = {
      ...filters,
      ...newFilters
    };
    const cleaned = cleanFilters(merged);
    router.get(url, cleaned, {
      preserveState: true,
      preserveScroll: true,
      replace: true
    });
  };
  const handleSort = (column) => {
    const newSortOrder = filters.sort_by === column && filters.sort_order === "asc" ? "desc" : "asc";
    updateFilters({
      sort_by: column,
      sort_order: newSortOrder,
      page: 1
    });
  };
  const handleSearch = () => {
    updateFilters({
      ...searchValues,
      page: 1
    });
  };
  const handleSearchValuesChange = (values) => {
    setSearchValues((prev) => ({ ...prev, ...values }));
  };
  const clearFilters = () => {
    setSearchValues({ name: "", created_by: "" });
    router.get(
      url,
      { per_page: filters.per_page || 10 },
      {
        preserveState: true,
        preserveScroll: true,
        replace: true
      }
    );
  };
  const handlePageChange = (page) => {
    updateFilters({ page });
  };
  const handlePerPageChange = (perPage) => {
    updateFilters({ per_page: perPage, page: 1 });
  };
  const hasActiveFilters = Boolean(filters.name || filters.created_by);
  const columns = getColumns({
    onEdit,
    onDelete,
    onSort: handleSort
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true
  });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx(
      DataTableToolbar,
      {
        table,
        searchValues,
        onSearchValuesChange: handleSearchValuesChange,
        onSearch: handleSearch,
        onClear: clearFilters,
        hasActiveFilters
      }
    ),
    /* @__PURE__ */ jsx(DataTable, { columns, data }),
    /* @__PURE__ */ jsx(
      DataTablePagination,
      {
        table,
        currentPage: current_page,
        lastPage: last_page,
        perPage: per_page,
        total,
        from,
        to,
        onPageChange: handlePageChange,
        onPerPageChange: handlePerPageChange
      }
    )
  ] });
}
export {
  PaperTable as default
};
