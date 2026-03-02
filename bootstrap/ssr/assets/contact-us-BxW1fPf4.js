import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as Alert, a as AlertDescription } from "./alert-C-Al3GjX.js";
import { B as Button } from "./button-BlmebLQZ.js";
import { I as Input } from "./input-DK-Y0ndi.js";
import { L as Label } from "./label-DO4oxG8w.js";
import { T as Textarea } from "./textarea-A6XKVNvk.js";
import { Phone, Mail, Loader2, Send } from "lucide-react";
import { useState } from "react";
import "class-variance-authority";
import "./utils-BcGwcge3.js";
import "clsx";
import "tailwind-merge";
import "radix-ui";
const contactSchema = {
  mainEntity: {
    contactPoint: {
      telephone: "+92-300-0000000",
      email: "support@pakquiz.com"
    }
  }
};
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setTimeout(() => setSubmitted(false), 5e3);
    }, 1500);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-8 md:grid-cols-3 md:py-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:col-span-1 order-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-card p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 text-xl font-semibold", children: "Contact Information" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-blue-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Phone" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-600", children: contactSchema.mainEntity.contactPoint.telephone }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: "Mon-Fri 9am-6pm" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-green-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Email" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-600", children: contactSchema.mainEntity.contactPoint.email }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: "We'll respond within 24hrs" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-semibold", children: "Need immediate help?" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm text-blue-100", children: "Check out our FAQ section or reach out to our support team directly." }),
        /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "w-full", children: "Visit FAQ" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-8 shadow-md", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-2xl font-semibold", children: "Send us a message" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-slate-600", children: "Fill out the form below and we'll get back to you as soon as possible." }),
      submitted && /* @__PURE__ */ jsx(Alert, { className: "mb-6 border-green-200 bg-green-50", children: /* @__PURE__ */ jsx(AlertDescription, { className: "text-green-800", children: "Thank you for contacting us! We'll get back to you shortly." }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Full Name *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "name",
                type: "text",
                value: formData.name,
                onChange: (e) => handleChange("name", e.target.value),
                placeholder: "John Doe",
                className: errors.name ? "border-red-500" : ""
              }
            ),
            errors.name && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email Address *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                type: "email",
                value: formData.email,
                onChange: (e) => handleChange(
                  "email",
                  e.target.value
                ),
                placeholder: "john@example.com",
                className: errors.email ? "border-red-500" : ""
              }
            ),
            errors.email && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600", children: errors.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone Number" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "phone",
                type: "tel",
                value: formData.phone,
                onChange: (e) => handleChange(
                  "phone",
                  e.target.value
                ),
                placeholder: "0300 123 4567",
                className: errors.phone ? "border-red-500" : ""
              }
            ),
            errors.phone && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600", children: errors.phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "subject", children: "Subject *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "subject",
                type: "text",
                value: formData.subject,
                onChange: (e) => handleChange(
                  "subject",
                  e.target.value
                ),
                placeholder: "How can we help?",
                className: errors.subject ? "border-red-500" : ""
              }
            ),
            errors.subject && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600", children: errors.subject })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Message *" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "message",
              value: formData.message,
              onChange: (e) => handleChange("message", e.target.value),
              placeholder: "Tell us more about your inquiry...",
              rows: 6,
              className: errors.message ? "border-red-500" : ""
            }
          ),
          errors.message && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600", children: errors.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: "* Required fields" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              onClick: handleSubmit,
              disabled: processing,
              className: "bg-primary",
              children: processing ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
                "Sending..."
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Send, { className: "mr-2 h-4 w-4" }),
                "Send Message"
              ] })
            }
          )
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  ContactPage
};
