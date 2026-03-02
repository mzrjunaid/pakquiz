import { jsxs, jsx } from "react/jsx-runtime";
import { Search, Loader2, X, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { B as Button } from "./button-BlmebLQZ.js";
import { I as Input } from "./input-DK-Y0ndi.js";
function SearchBar({
  placeholder = "Search MCQs, Papers, or Topics...",
  redirectOnSubmit = true,
  className
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  useEffect(() => {
    setRecentSearches(["PPSC", "FPSC", "General Knowledge"]);
  }, []);
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/search-suggestions?q=${encodeURIComponent(searchTerm)}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Search failed");
        setSuggestions(await res.json());
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 300);
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [searchTerm]);
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const submitSearch = () => {
    if (!searchTerm.trim()) return;
    setRecentSearches(
      (prev) => [searchTerm, ...prev.filter((s) => s !== searchTerm)].slice(0, 5)
    );
    if (redirectOnSubmit) {
      console.log("Redirect to search:", searchTerm);
    }
    setIsFocused(false);
  };
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "mcq":
        return "bg-blue-100 text-blue-700";
      case "paper":
        return "bg-purple-100 text-purple-700";
      case "topic":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return /* @__PURE__ */ jsxs("div", { ref: dropdownRef, className: `relative ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `relative flex items-center rounded-lg bg-white transition ${isFocused ? "shadow-lg ring-2 ring-primary" : "shadow-md"}`,
        children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-4 h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              ref: inputRef,
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              onFocus: () => setIsFocused(true),
              onKeyDown: (e) => e.key === "Enter" && submitSearch(),
              placeholder,
              className: "border-0 py-4 pr-24 pl-12"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute right-2 flex items-center gap-1", children: [
            loading && /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }),
            searchTerm && !loading && /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => setSearchTerm(""),
                children: /* @__PURE__ */ jsx(X, {})
              }
            ),
            searchTerm && /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: submitSearch,
                children: /* @__PURE__ */ jsx(ArrowRight, {})
              }
            )
          ] })
        ]
      }
    ),
    isFocused && /* @__PURE__ */ jsxs("div", { className: "absolute z-50 mt-2 w-full rounded-xl bg-white shadow-xl", children: [
      !searchTerm && /* @__PURE__ */ jsxs("div", { className: "border-b p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2 text-xs font-semibold uppercase", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
          "Recent"
        ] }),
        recentSearches.map((term) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setSearchTerm(term),
            className: "w-full rounded-lg px-3 py-2 text-left hover:bg-muted",
            children: term
          },
          term
        ))
      ] }),
      searchTerm && /* @__PURE__ */ jsx("div", { className: "max-h-96 overflow-y-auto p-2", children: loading ? /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: /* @__PURE__ */ jsx(Loader2, { className: "mx-auto animate-spin" }) }) : suggestions.length ? suggestions.map((item) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: item.link,
          className: "flex items-start gap-3 rounded-lg p-3 hover:bg-muted",
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `rounded px-2 py-0.5 text-xs ${getTypeColor(item.type)}`,
                children: item.type
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: item.title }),
              item.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: item.description })
            ] })
          ]
        },
        item.slug
      )) : /* @__PURE__ */ jsx("p", { className: "py-8 text-center text-sm", children: "No results found" }) }),
      !searchTerm && /* @__PURE__ */ jsxs("div", { className: "border-t p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2 text-xs font-semibold uppercase", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }),
          "Trending"
        ] }),
        ["General Knowledge", "PPSC", "FPSC"].map(
          (tag) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => setSearchTerm(tag),
              className: "mr-2 mb-2",
              children: tag
            },
            tag
          )
        )
      ] })
    ] })
  ] });
}
export {
  SearchBar as S
};
