import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-BlmebLQZ.js";
import { I as Input } from "./input-DK-Y0ndi.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectGroup, f as SelectLabel, d as SelectItem } from "./select-dEUKSXuN.js";
import { Search, X } from "lucide-react";
import "class-variance-authority";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
function DataTableToolbar({
  searchValues,
  onSearchValuesChange,
  onSearch,
  onClear,
  hasActiveFilters
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "rounded-md bg-card p-4 shadow", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-4", children: [
    (searchValues.name == "" || searchValues.name) && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Name" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          placeholder: "Search by name...",
          value: searchValues.name,
          onChange: (e) => onSearchValuesChange({ name: e.target.value }),
          onKeyDown: handleKeyPress
        }
      )
    ] }),
    (searchValues.title == "" || searchValues.title) && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Title" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          placeholder: "Search by title...",
          value: searchValues.title,
          onChange: (e) => onSearchValuesChange({ title: e.target.value }),
          onKeyDown: handleKeyPress
        }
      )
    ] }),
    (searchValues.short_name == "" || searchValues.short_name) && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Short Name" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          placeholder: "Search by short name...",
          value: searchValues.short_name,
          onChange: (e) => onSearchValuesChange({
            short_name: e.target.value
          }),
          onKeyDown: handleKeyPress
        }
      )
    ] }),
    (searchValues.type == "" || searchValues.type) && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Dept. Type" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          placeholder: "Search by short name...",
          value: searchValues.type,
          onChange: (e) => onSearchValuesChange({
            type: e.target.value
          }),
          onKeyDown: handleKeyPress
        }
      )
    ] }),
    (searchValues.page_type == "" || searchValues.page_type) && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Page Type" }),
      /* @__PURE__ */ jsxs(
        Select,
        {
          onValueChange: (value) => onSearchValuesChange({
            page_type: value
          }),
          value: searchValues.page_type,
          children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "min-w-sm", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select Page Type" }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
              /* @__PURE__ */ jsx(SelectLabel, { children: "Page Type" }),
              [
                "Mcq",
                "Paper",
                "Subject",
                "Topic",
                "TestingService",
                "Quiz",
                "Home",
                "About",
                "Contact",
                "PrivacyPolicy",
                "TermsAndConditions",
                "JoinUs",
                "NotFound",
                "HelpCenter",
                "Faq",
                "Dashboard",
                "Login",
                "Register",
                "Subscription"
              ].map((type) => /* @__PURE__ */ jsx(
                SelectItem,
                {
                  value: type,
                  className: "w-full px-4 py-2 text-left hover:bg-accent hover:text-accent-foreground",
                  children: type
                },
                type
              ))
            ] }) })
          ]
        }
      )
    ] }),
    (searchValues.created_by == "" || searchValues.created_by) && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Created By" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          placeholder: "Search by creator...",
          value: searchValues.created_by,
          onChange: (e) => onSearchValuesChange({
            created_by: e.target.value
          }),
          onKeyDown: handleKeyPress
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-2", children: [
      /* @__PURE__ */ jsxs(Button, { onClick: onSearch, className: "flex-1", children: [
        /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4" }),
        "Search"
      ] }),
      hasActiveFilters && /* @__PURE__ */ jsx(Button, { onClick: onClear, variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
    ] })
  ] }) });
}
export {
  DataTableToolbar
};
