import { jsxs, jsx } from "react/jsx-runtime";
import { Shield, Database, Eye, Lock, FileText, UserCheck, Mail, AlertCircle, Phone } from "lucide-react";
import { useState } from "react";
const privacySchema = {
  mainEntity: {
    contactPoint: {
      telephone: "0332-6071906",
      email: "support@pakquiz.com"
    }
  }
};
function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "information", title: "Information We Collect", icon: Database },
    { id: "usage", title: "How We Use Your Information", icon: Eye },
    { id: "protection", title: "Data Protection", icon: Lock },
    { id: "cookies", title: "Cookies & Tracking", icon: FileText },
    { id: "rights", title: "Your Rights", icon: UserCheck },
    { id: "contact", title: "Contact Us", icon: Mail }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4", children: [
    /* @__PURE__ */ jsx("nav", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24 rounded-lg bg-card p-4 shadow-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 font-semibold", children: "Quick Navigation" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: sections.map((section) => {
        const Icon = section.icon;
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: `#${section.id}`,
            onClick: (e) => {
              e.preventDefault();
              setActiveSection(section.id);
              document.getElementById(section.id)?.scrollIntoView({
                behavior: "smooth"
              });
            },
            className: `flex items-center gap-2 rounded-lg px-3 py-2 transition-colors ${activeSection === section.id ? "bg-accent font-semibold" : "text-muted hover:bg-accent"}`,
            children: [
              /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: section.title })
            ]
          }
        ) }, section.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gray-200 bg-card p-8 shadow-sm", children: [
      /* @__PURE__ */ jsxs("section", { id: "introduction", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Introduction" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "Welcome to our MCQs Preparation Platform. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services." }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "By accessing or using our platform, you agree to the terms outlined in this Privacy Policy. If you do not agree with our practices, please do not use our services." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "information", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Database, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Information We Collect" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Personal Information" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "When you register for an account or use our premium services, we may collect:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Name and contact information (email address, phone number)" }),
          /* @__PURE__ */ jsx("li", { children: "Account credentials (username, password)" }),
          /* @__PURE__ */ jsx("li", { children: "Payment information for premium subscriptions" }),
          /* @__PURE__ */ jsx("li", { children: "Educational background and job preferences" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Usage Information" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Practice test results and performance metrics" }),
          /* @__PURE__ */ jsx("li", { children: "Questions attempted and time spent on platform" }),
          /* @__PURE__ */ jsx("li", { children: "Custom paper preferences and categories selected" }),
          /* @__PURE__ */ jsx("li", { children: "Progress tracking data and learning patterns" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Technical Information" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "IP address and device information" }),
          /* @__PURE__ */ jsx("li", { children: "Browser type and operating system" }),
          /* @__PURE__ */ jsx("li", { children: "Pages visited and features used" }),
          /* @__PURE__ */ jsx("li", { children: "Date and time of access" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "usage", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "How We Use Your Information" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "We use the collected information for the following purposes:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "To provide and maintain our MCQs preparation services" }),
          /* @__PURE__ */ jsx("li", { children: "To process premium subscription payments and manage accounts" }),
          /* @__PURE__ */ jsx("li", { children: "To track your progress and generate performance analytics" }),
          /* @__PURE__ */ jsx("li", { children: "To generate AI-powered practice papers based on your preferences" }),
          /* @__PURE__ */ jsx("li", { children: "To send notifications about new job postings and practice materials" }),
          /* @__PURE__ */ jsx("li", { children: "To improve our platform and develop new features" }),
          /* @__PURE__ */ jsx("li", { children: "To provide customer support and respond to inquiries" }),
          /* @__PURE__ */ jsx("li", { children: "To prevent fraud and ensure platform security" }),
          /* @__PURE__ */ jsx("li", { children: "To comply with legal obligations and regulatory requirements" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "protection", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Data Protection & Security" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "We implement appropriate technical and organizational measures to protect your personal information:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "SSL encryption for data transmission" }),
          /* @__PURE__ */ jsx("li", { children: "Secure password hashing and storage" }),
          /* @__PURE__ */ jsx("li", { children: "Regular security audits and updates" }),
          /* @__PURE__ */ jsx("li", { children: "Restricted access to personal data by authorized personnel only" }),
          /* @__PURE__ */ jsx("li", { children: "Secure payment processing through trusted payment gateways" }),
          /* @__PURE__ */ jsx("li", { children: "Regular backups to prevent data loss" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-warning mt-4 flex gap-3 rounded-lg p-4", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" }),
          /* @__PURE__ */ jsx("p", { className: "text-warning-foreground text-sm", children: "While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "cookies", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Cookies & Tracking Technologies" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "We use cookies and similar tracking technologies to enhance your experience:" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Essential Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "Required for basic platform functionality, including authentication and session management." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Analytics Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "Help us understand how users interact with our platform to improve services." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Preference Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "Remember your settings and preferences for a personalized experience." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed", children: "You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect platform functionality." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "rights", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Your Rights" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "You have the following rights regarding your personal information:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Access:" }),
            " Request a copy of your personal data we hold"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Correction:" }),
            " Update or correct inaccurate information"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Deletion:" }),
            " Request deletion of your account and associated data"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Data Portability:" }),
            " Receive your data in a structured format"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Opt-out:" }),
            " Unsubscribe from marketing communications"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Restriction:" }),
            " Request limitation on processing of your data"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed", children: "To exercise these rights, please contact us using the information provided below." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Third-Party Services" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "We may use third-party services for:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Payment processing (payment gateways)" }),
          /* @__PURE__ */ jsx("li", { children: "Analytics and performance monitoring" }),
          /* @__PURE__ */ jsx("li", { children: "AI-powered MCQ generation" }),
          /* @__PURE__ */ jsx("li", { children: "Email delivery and notifications" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed", children: "These third parties have their own privacy policies and we encourage you to review them. We are not responsible for their practices." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Data Retention" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will remove your personal data within 30 days, except where retention is required by law. Practice history and performance data may be anonymized and retained for analytical purposes." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Children's Privacy" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Our services are intended for individuals aged 16 and above. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child, please contact us immediately." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Changes to This Privacy Policy" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or through a prominent notice on our platform. Your continued use of our services after such modifications constitutes acceptance of the updated policy." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "contact", className: "mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Contact Us" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "If you have questions or concerns about this Privacy Policy or our data practices, please contact us:" }),
        /* @__PURE__ */ jsx("div", { className: "bg-info rounded-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxs("div", { className: "text-info-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Email:" }),
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${privacySchema.mainEntity.contactPoint.email}`,
                  className: "hover:underline",
                  children: privacySchema.mainEntity.contactPoint.email
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Whatsapp:" }),
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `tel:${privacySchema.mainEntity.contactPoint.telephone}`,
                  className: "hover:underline",
                  children: privacySchema.mainEntity.contactPoint.telephone
                }
              )
            ] }) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 pt-8", children: /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-muted", children: "This Privacy Policy is governed by the laws of Pakistan. By using our platform, you consent to the collection and use of information as described in this policy." }) })
    ] }) })
  ] });
}
export {
  PrivacyPolicyPage
};
