import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-CGHGyDuc.js";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { B as Button } from "./button-BlmebLQZ.js";
import { C as Card, a as CardHeader, d as CardTitle, b as CardDescription, c as CardContent, e as CardFooter } from "./card-wOJiZ2Tv.js";
import { b as FieldGroup, F as Field, a as FieldLabel, c as FieldError, d as FieldDescription } from "./field-BSdObGgN.js";
import { I as Input } from "./input-DK-Y0ndi.js";
import { cva } from "class-variance-authority";
import { c as cn } from "./utils-BcGwcge3.js";
import { T as Textarea } from "./textarea-A6XKVNvk.js";
import { T as TopAdSection, M as MainSectionWithSidebarLayout } from "./two-grid-layout-DH70NA2h.js";
import { a as McqHeader, b as McqMeta } from "./mcq-card-krHnKlEN.js";
import { P as PageTitle } from "./public-page-title-DeEfVH6_.js";
import { S as SearchBar } from "./SearchBar-BMzM_S6J.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-TKDZsCwV.js";
import { B as Badge } from "./badge-CSOzNZ1b.js";
import { u as useIsMobile, p as papers } from "./index-Bj4QWzCK.js";
import { A as AppLayout } from "./app-layout-DD5QFxGc.js";
import { t as testing_services, d as departments } from "./index-CmbwX329.js";
import { m as mcqs } from "./index-DZj2b4Wd.js";
import { usePage, Link } from "@inertiajs/react";
import { Tag } from "lucide-react";
import PageSidebar from "./page-sidebar-BF2fV1kj.js";
import "radix-ui";
import "react";
import "./label-DO4oxG8w.js";
import "clsx";
import "tailwind-merge";
import "./index-C1F4OtKB.js";
import "@radix-ui/react-slot";
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
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
cva(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function InputGroupTextarea({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Textarea,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}
const formSchema = z.object({
  fullName: z.string().min(3, "Bug title must be at least 3 characters.").max(100, "Bug title must be at most 100 characters."),
  email: z.string().trim().refine(
    (val) => val === "" || z.string().email().safeParse(val).success,
    { message: "Please enter a valid email address" }
  ),
  description: z.string().min(20, "Description must be at least 20 characters.").max(100, "Description must be at most 100 characters.")
});
const SuggestionsForm = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      description: ""
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: /* @__PURE__ */ jsx("pre", { className: "bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4", children: /* @__PURE__ */ jsx("code", { children: JSON.stringify(value, null, 2) }) }),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2"
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)"
        }
      });
    }
  });
  return /* @__PURE__ */ jsxs(Card, { className: "w-full border-none", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "🚀 Found an error or have a suggestion?" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Your feedback helps us keep our MCQs accurate and up-to-date." })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
      "form",
      {
        id: "bug-report-form",
        onSubmit: (e) => {
          e.preventDefault();
          form.handleSubmit();
        },
        children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
          /* @__PURE__ */ jsx(
            form.Field,
            {
              name: "fullName",
              children: (field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return /* @__PURE__ */ jsxs(Field, { "data-invalid": isInvalid, children: [
                  /* @__PURE__ */ jsx(FieldLabel, { htmlFor: field.name, children: "Full Name" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: field.name,
                      name: field.name,
                      value: field.state.value,
                      onBlur: field.handleBlur,
                      onChange: (e) => field.handleChange(
                        e.target.value
                      ),
                      "aria-invalid": isInvalid,
                      placeholder: "Your full name",
                      autoComplete: "off"
                    }
                  ),
                  isInvalid && /* @__PURE__ */ jsx(
                    FieldError,
                    {
                      errors: field.state.meta.errors
                    }
                  )
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            form.Field,
            {
              name: "email",
              children: (field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return /* @__PURE__ */ jsxs(Field, { "data-invalid": isInvalid, children: [
                  /* @__PURE__ */ jsx(FieldLabel, { htmlFor: field.name, children: "E-Mail" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: field.name,
                      name: field.name,
                      value: field.state.value,
                      onBlur: field.handleBlur,
                      onChange: (e) => field.handleChange(
                        e.target.value
                      ),
                      "aria-invalid": isInvalid,
                      placeholder: "Your email address",
                      autoComplete: "off"
                    }
                  ),
                  isInvalid && /* @__PURE__ */ jsx(
                    FieldError,
                    {
                      errors: field.state.meta.errors
                    }
                  )
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            form.Field,
            {
              name: "description",
              children: (field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return /* @__PURE__ */ jsxs(Field, { "data-invalid": isInvalid, children: [
                  /* @__PURE__ */ jsx(FieldLabel, { htmlFor: field.name, children: "Description" }),
                  /* @__PURE__ */ jsxs(InputGroup, { children: [
                    /* @__PURE__ */ jsx(
                      InputGroupTextarea,
                      {
                        id: field.name,
                        name: field.name,
                        value: field.state.value,
                        onBlur: field.handleBlur,
                        onChange: (e) => field.handleChange(
                          e.target.value
                        ),
                        placeholder: "Describe the issue clearly. Mention the incorrect option, explanation, or outdated content.",
                        rows: 6,
                        className: "min-h-24 resize-none",
                        "aria-invalid": isInvalid
                      }
                    ),
                    /* @__PURE__ */ jsx(InputGroupAddon, { align: "block-end", children: /* @__PURE__ */ jsxs(InputGroupText, { className: "tabular-nums", children: [
                      field.state.value.length,
                      "/100 characters"
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx(FieldDescription, { children: "Tell us what seems wrong or how we can improve this question." }),
                  isInvalid && /* @__PURE__ */ jsx(
                    FieldError,
                    {
                      errors: field.state.meta.errors
                    }
                  )
                ] });
              }
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsxs(Field, { orientation: "horizontal", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          onClick: () => form.reset(),
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "submit", form: "bug-report-form", children: "Send Feedback" })
    ] }) })
  ] });
};
const McqShow = () => {
  const { mcq } = usePage().props;
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, { schema: mcq.schema }),
    /* @__PURE__ */ jsx(TopAdSection, {}),
    /* @__PURE__ */ jsxs(MainSectionWithSidebarLayout, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "order-1 space-y-2 lg:col-span-2" }),
        /* @__PURE__ */ jsx(SearchBar, { className: "md:order-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-8 lg:col-span-2", children: [
          /* @__PURE__ */ jsx(
            McqHeader,
            {
              isQuizMode: false,
              difficulty: mcq.difficulty,
              children: !isMobile && /* @__PURE__ */ jsx(
                McqMeta,
                {
                  mcq_type: mcq.mcq_type,
                  subject: mcq.subject,
                  route: mcqs.show(mcq.slug)
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            PageTitle,
            {
              title: mcq.question,
              className: "mt-8 text-left"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "grid gap-2 md:grid-cols-1 lg:gap-3", children: mcq.options.map((opt, optIdx) => {
              return /* @__PURE__ */ jsx(
                "button",
                {
                  className: `w-full rounded-md border p-2 text-left text-sm transition md:p-3 lg:rounded-lg lg:border-2 lg:text-base ${!opt.is_correct ? "cursor-not-allowed opacity-85" : "cursor-pointer"} ${opt.is_correct ? "border-success bg-success/5" : "border-gray-200 bg-white/60 hover:border-primary"} `,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                      String.fromCharCode(
                        65 + optIdx
                      ),
                      "."
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: opt.option_text }),
                    opt.is_correct && /* @__PURE__ */ jsx("span", { className: "ml-auto text-xs font-semibold text-success", children: "✓" })
                  ] })
                },
                opt.id
              );
            }) }),
            mcq.explanation && /* @__PURE__ */ jsx(
              Accordion,
              {
                type: "single",
                collapsible: true,
                defaultValue: mcq.slug,
                className: "mt-4",
                children: /* @__PURE__ */ jsxs(AccordionItem, { value: mcq.slug, children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { children: "Explanation" }),
                  /* @__PURE__ */ jsx(AccordionContent, { className: "rounded-lg border border-blue-200 bg-blue-50 p-4", children: mcq.explanation })
                ] })
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap-reverse justify-end gap-6 md:justify-between", children: [
            !isMobile && mcq?.tags && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2 sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(Tag, { className: "h-4 w-4 text-gray-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Tags:" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex w-full flex-wrap gap-2", children: mcq.tags.map((tag, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: /* @__PURE__ */ jsx("span", { className: "max-w-sm truncate", children: tag.name }) }, idx)) })
            ] }),
            isMobile && /* @__PURE__ */ jsx(
              McqMeta,
              {
                mcq_type: mcq.mcq_type,
                subject: mcq.subject,
                route: mcqs.show(mcq.slug)
              }
            ),
            mcq.paper && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "block max-w-3xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent",
                  asChild: true,
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: papers.show({
                        paper: mcq.paper.slug
                      }),
                      title: `View all mcqs from ${mcq.paper.name}`,
                      children: mcq.paper.name
                    }
                  )
                }
              ),
              mcq.paper?.testing_service && /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "block max-w-3xs truncate overflow-hidden px-3 py-1 font-semibold hover:!bg-accent",
                  asChild: true,
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: testing_services.show({
                        slug: mcq.paper.testing_service.slug
                      }),
                      title: `View all Papers from ${mcq.paper.testing_service.short}`,
                      children: mcq.paper.testing_service.short
                    }
                  )
                }
              ),
              mcq.paper?.department && /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "hidden max-w-3xs truncate overflow-hidden px-3 py-1 font-semibold sm:block",
                  asChild: true,
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: departments.show(
                        mcq.paper.department
                      ),
                      title: `View all Department Papers from ${mcq.paper.department.name}`,
                      children: /* @__PURE__ */ jsx("span", { className: "truncate sm:max-w-26 md:max-w-36", children: mcq.paper.department.name })
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(SuggestionsForm, {})
        ] }),
        /* @__PURE__ */ jsx(PageSidebar, {})
      ] })
    ] })
  ] });
};
export {
  McqShow as default
};
