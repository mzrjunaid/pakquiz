import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import AdminLayout from "./admin-layout-Qq9W5dDn.js";
import { B as Button } from "./button-BlmebLQZ.js";
import { Loader2, Upload } from "lucide-react";
import { C as Card, a as CardContent } from "./card-C5ukPs4e.js";
import { useForm } from "@inertiajs/react";
import { I as InputGroup, a as InputGroupInput, b as InputGroupButton } from "./input-group-zl0yXg2l.js";
import { m as mcqs_import } from "./app-layout-DW4c6QPD.js";
import "./breadcrumbs-utils-BzOZAm8f.js";
import "class-variance-authority";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "./input-DK-Y0ndi.js";
import "./textarea-A6XKVNvk.js";
import "@radix-ui/react-slot";
import "./index-Bj4QWzCK.js";
import "./index-C1F4OtKB.js";
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
function McqsImport() {
  const { data, setData, post, processing, errors } = useForm();
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setData({ file: selected });
    setError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result);
        if (!Array.isArray(parsed)) {
          throw new Error("JSON must be an array of MCQs.");
        }
        parsed.forEach((item, index) => {
          if (!item.question || !item.options) {
            throw new Error(`Invalid structure at item ${index + 1}`);
          }
        });
        setPreview(parsed);
      } catch (err) {
        setPreview(null);
        setError(err.message);
      }
    };
    reader.readAsText(selected);
  };
  const submit = (e) => {
    e.preventDefault();
    data.file = data.file;
    post(mcqs_import.store().url);
  };
  return /* @__PURE__ */ jsx(AdminLayout, { title: "MCQs Import", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto py-10 space-y-6", children: /* @__PURE__ */ jsx(Card, { className: "rounded-2xl shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Import MCQs (Preview First)" }),
    /* @__PURE__ */ jsxs(InputGroup, { className: "w-full pe-2", children: [
      /* @__PURE__ */ jsx(
        InputGroupInput,
        {
          type: "file",
          accept: "application/json",
          onChange: handleFileChange
        }
      ),
      /* @__PURE__ */ jsx(InputGroupButton, { asChild: true, children: /* @__PURE__ */ jsxs(
        Button,
        {
          type: "button",
          onClick: submit,
          disabled: !preview || processing,
          variant: "outline",
          children: [
            processing ? /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Upload, { className: "mr-2 h-4 w-4" }),
            processing ? "Importing..." : "Confirm Import"
          ]
        }
      ) })
    ] }),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: error }),
    errors.file && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.file }),
    preview && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
        "Total MCQs: ",
        preview.length
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-h-72 overflow-y-auto border rounded-lg p-4 space-y-4", children: preview.slice(0, 5).map((mcq, index) => /* @__PURE__ */ jsxs("div", { className: "border-b pb-3", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: mcq.question }),
        /* @__PURE__ */ jsx("ul", { className: "ml-4 list-disc text-sm text-gray-600", children: mcq.options.map((opt, i) => /* @__PURE__ */ jsxs("li", { children: [
          opt.option_text,
          " ",
          opt.is_correct && /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "(Correct)" })
        ] }, i)) })
      ] }, index)) }),
      preview.length > 5 && /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Showing first 5 MCQs only" })
    ] })
  ] }) }) }) });
}
export {
  McqsImport as default
};
