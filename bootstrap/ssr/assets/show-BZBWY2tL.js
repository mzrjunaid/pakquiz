import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppCenterHead } from "./app-center-head-CGHGyDuc.js";
import { F as FeatureCard } from "./feature-card-Dc_KXTut.js";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { B as Button } from "./button-BlmebLQZ.js";
import { C as Card, b as CardHeader, d as CardTitle, c as CardDescription, a as CardContent, e as CardFooter } from "./card-C5ukPs4e.js";
import { b as FieldGroup, F as Field, a as FieldLabel, c as FieldError, d as FieldDescription } from "./field-BSdObGgN.js";
import { I as Input } from "./input-DK-Y0ndi.js";
import { I as InputGroup, c as InputGroupTextarea, d as InputGroupAddon, e as InputGroupText } from "./input-group-zl0yXg2l.js";
import { T as TopAdSection, M as MainSectionWithSidebarLayout } from "./two-grid-layout-DH70NA2h.js";
import { a as McqHeader, b as McqMeta } from "./mcq-card-zJC6TJdW.js";
import { P as PageTitle } from "./public-page-title-BGg8AUwY.js";
import { S as SearchBar } from "./SearchBar-CDKJf1aa.js";
import { T as TextLink } from "./text-link-DdhcVDvj.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-TKDZsCwV.js";
import { B as Badge } from "./badge-CSOzNZ1b.js";
import { u as useIsMobile, p as papers } from "./index-Bj4QWzCK.js";
import { A as AppLayout } from "./app-layout-DW4c6QPD.js";
import { t as testing_services, d as departments, p as publicMethod } from "./index-CmbwX329.js";
import { m as mcqs } from "./index-DZj2b4Wd.js";
import { usePage, Link } from "@inertiajs/react";
import { Tag, ChevronRight, Building } from "lucide-react";
import PageSidebar from "./page-sidebar-BF2fV1kj.js";
import "class-variance-authority";
import "radix-ui";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "react";
import "./label-DO4oxG8w.js";
import "./textarea-A6XKVNvk.js";
import "@tanstack/react-query";
import "use-debounce";
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
  const { current_affairs, latestPapers, mcq } = usePage().props;
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(AppCenterHead, { schema: mcq.schema }),
    /* @__PURE__ */ jsx(TopAdSection, {}),
    /* @__PURE__ */ jsxs(MainSectionWithSidebarLayout, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 grid items-center gap-4 lg:grid-cols-3 lg:gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "order-1 space-y-2 lg:col-span-2", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold md:text-4xl", children: "MCQ Detail" }) }),
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
          /* @__PURE__ */ jsx(SuggestionsForm, {}),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold md:text-4xl", children: "Practice Recent Exams: Newest Papers Added" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: latestPapers.map((paper, idx) => /* @__PURE__ */ jsxs(
              Link,
              {
                href: publicMethod.papers.show({
                  paper: paper.slug
                }),
                className: "group w-full rounded-md bg-card p-4 shadow-sm transition-all hover:shadow-md md:w-sm md:p-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
                    paper.subject && /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "transition-colors hover:bg-primary/25 hover:text-primary",
                        children: paper.subject.name
                      }
                    ),
                    paper.testing_service && /* @__PURE__ */ jsx(Badge, { className: "transition-colors hover:bg-primary/25 hover:text-primary", children: paper.testing_service.short })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "block space-y-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                    /* @__PURE__ */ jsxs("h2", { className: "line-clamp-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-sm", children: [
                      paper.name,
                      " -",
                      " ",
                      paper.schedule_at ? paper.schedule_at : paper.year
                    ] }),
                    /* @__PURE__ */ jsx(ChevronRight, { className: "mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-between", children: paper.department && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 overflow-hidden text-xs text-muted md:text-sm", children: [
                    /* @__PURE__ */ jsx(Building, { className: "size-4" }),
                    /* @__PURE__ */ jsx("span", { className: "line-clamp-1", children: paper.department.name })
                  ] }) })
                ]
              },
              idx
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(PageSidebar, { children: /* @__PURE__ */ jsx(
          FeatureCard,
          {
            title: "Current Affairs",
            description: current_affairs.description,
            children: /* @__PURE__ */ jsx("div", { className: "md:px-2", children: current_affairs.topics.map((topic, idx) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-1 text-sm",
                children: [
                  /* @__PURE__ */ jsx(ChevronRight, { size: "16" }),
                  /* @__PURE__ */ jsx(
                    TextLink,
                    {
                      href: publicMethod.subject.topic.show(
                        {
                          subject: current_affairs.slug,
                          topic: topic.slug
                        }
                      ),
                      className: "my-2 block",
                      children: topic.name
                    }
                  )
                ]
              },
              idx
            )) })
          }
        ) })
      ] })
    ] })
  ] });
};
export {
  McqShow as default
};
