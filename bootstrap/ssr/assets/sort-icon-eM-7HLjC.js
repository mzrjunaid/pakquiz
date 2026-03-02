import { jsx } from "react/jsx-runtime";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
function SortIcon({
  column,
  currentSortBy,
  currentSortOrder
}) {
  if (currentSortBy !== column) {
    return /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-4 w-4 text-gray-400" });
  }
  return currentSortOrder === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4 text-blue-600" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-4 w-4 text-blue-600" });
}
export {
  SortIcon
};
