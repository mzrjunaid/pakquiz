import { jsxs, jsx } from "react/jsx-runtime";
import { FileText, UserCheck, Shield, CreditCard, Ban, Scale, AlertTriangle, RefreshCw, Mail, Phone } from "lucide-react";
import { useState } from "react";
const termsSchema = {
  mainEntity: {
    contactPoint: {
      telephone: "0332-6071906",
      email: "support@pakquiz.com"
    }
  }
};
function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("acceptance");
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
    { id: "services", title: "Our Services", icon: UserCheck },
    { id: "accounts", title: "User Accounts", icon: Shield },
    {
      id: "subscription",
      title: "Subscription & Payment",
      icon: CreditCard
    },
    { id: "conduct", title: "User Conduct", icon: Ban },
    { id: "intellectual", title: "Intellectual Property", icon: Scale },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: AlertTriangle
    },
    { id: "termination", title: "Termination", icon: RefreshCw }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4", children: [
    /* @__PURE__ */ jsx("nav", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-22 z-50 rounded-lg bg-card p-4 shadow-sm", children: [
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
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-card p-8 shadow-sm", children: [
      /* @__PURE__ */ jsxs("section", { id: "acceptance", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Acceptance of Terms" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "Welcome to our MCQs Preparation Platform. By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services." }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "These Terms constitute a legally binding agreement between you and our platform. We reserve the right to modify these Terms at any time. Your continued use of the platform after changes are posted constitutes acceptance of the modified Terms." }),
        /* @__PURE__ */ jsx("div", { className: "bg-info mt-4 rounded-lg border border-blue-200 p-4", children: /* @__PURE__ */ jsxs("p", { className: "text-info-foreground text-sm", children: [
          /* @__PURE__ */ jsx("strong", { children: "Important:" }),
          " Please read these Terms carefully before using our platform. By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "services", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Our Services" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Free Services" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "We provide free access to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Categorized MCQs bank covering various subjects" }),
          /* @__PURE__ */ jsx("li", { children: "Demo practice papers with sample questions" }),
          /* @__PURE__ */ jsx("li", { children: "Latest government and private sector job listings" }),
          /* @__PURE__ */ jsx("li", { children: "Basic practice features" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Premium Services" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "Premium subscription includes:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Custom paper creation with category and question selection" }),
          /* @__PURE__ */ jsx("li", { children: "Progress tracking and performance history" }),
          /* @__PURE__ */ jsx("li", { children: "Detailed explanations for answers" }),
          /* @__PURE__ */ jsx("li", { children: "AI-generated MCQs based on keywords" }),
          /* @__PURE__ */ jsx("li", { children: "Random AI-generated practice papers" }),
          /* @__PURE__ */ jsx("li", { children: "Save and review attempted papers" }),
          /* @__PURE__ */ jsx("li", { children: "Advanced analytics and insights" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Service Availability" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "We strive to maintain continuous service availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We are not liable for any interruptions or modifications to our services." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "accounts", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "User Accounts & Registration" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Account Creation" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "You must be at least 16 years old to create an account" }),
          /* @__PURE__ */ jsx("li", { children: "You must provide accurate, current, and complete information" }),
          /* @__PURE__ */ jsx("li", { children: "You are responsible for maintaining account confidentiality" }),
          /* @__PURE__ */ jsx("li", { children: "You may not share your account credentials with others" }),
          /* @__PURE__ */ jsx("li", { children: "One person may not maintain multiple accounts" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Account Security" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "You are responsible for all activities that occur under your account. You must:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Choose a strong, unique password" }),
          /* @__PURE__ */ jsx("li", { children: "Notify us immediately of any unauthorized access" }),
          /* @__PURE__ */ jsx("li", { children: "Keep your contact information up to date" }),
          /* @__PURE__ */ jsx("li", { children: "Log out after each session on shared devices" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed", children: "We are not liable for any loss or damage arising from your failure to protect your account credentials." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "subscription", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CreditCard, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Subscription & Payment Terms" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Premium Subscription" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Premium subscriptions are available on monthly or annual basis" }),
          /* @__PURE__ */ jsx("li", { children: "Prices are displayed in Pakistani Rupees (PKR)" }),
          /* @__PURE__ */ jsx("li", { children: "Payment must be made through our authorized payment methods" }),
          /* @__PURE__ */ jsx("li", { children: "Subscriptions auto-renew unless cancelled before renewal date" }),
          /* @__PURE__ */ jsx("li", { children: "You will receive notification before each renewal" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Billing & Charges" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "All fees are non-refundable except as required by law" }),
          /* @__PURE__ */ jsx("li", { children: "We reserve the right to change subscription prices with notice" }),
          /* @__PURE__ */ jsx("li", { children: "Price changes do not affect current subscription period" }),
          /* @__PURE__ */ jsx("li", { children: "Failed payments may result in service suspension" }),
          /* @__PURE__ */ jsx("li", { children: "All applicable taxes will be added to subscription fees" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Cancellation & Refunds" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "You may cancel your premium subscription at any time through your account settings. Upon cancellation:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "You will retain access until the end of current billing period" }),
          /* @__PURE__ */ jsx("li", { children: "No refunds will be provided for partial periods" }),
          /* @__PURE__ */ jsx("li", { children: "Auto-renewal will be disabled" }),
          /* @__PURE__ */ jsx("li", { children: "Your account will revert to free tier after expiration" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-warning mt-4 flex gap-3 rounded-lg border border-amber-200 p-4", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "text-warning-foreground mt-0.5 h-5 w-5 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("p", { className: "text-warning-foreground text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "No Refund Policy:" }),
            " All subscription fees are non-refundable. We do not provide refunds or credits for partial subscription periods, unused services, or if you decide to cancel your subscription."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "conduct", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Ban, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "User Conduct & Prohibited Activities" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "You agree not to engage in any of the following prohibited activities:" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Content-Related Violations" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Copying, reproducing, or distributing our MCQs or content" }),
          /* @__PURE__ */ jsx("li", { children: "Creating derivative works from our materials" }),
          /* @__PURE__ */ jsx("li", { children: "Sharing premium content with non-subscribers" }),
          /* @__PURE__ */ jsx("li", { children: "Scraping or data mining our platform" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Technical Violations" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Attempting to gain unauthorized access to our systems" }),
          /* @__PURE__ */ jsx("li", { children: "Using bots, scripts, or automation tools" }),
          /* @__PURE__ */ jsx("li", { children: "Reverse engineering or decompiling our platform" }),
          /* @__PURE__ */ jsx("li", { children: "Bypassing security measures or access controls" }),
          /* @__PURE__ */ jsx("li", { children: "Interfering with platform operation or other users' access" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Account-Related Violations" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Creating multiple accounts for the same person" }),
          /* @__PURE__ */ jsx("li", { children: "Sharing account credentials with others" }),
          /* @__PURE__ */ jsx("li", { children: "Impersonating others or providing false information" }),
          /* @__PURE__ */ jsx("li", { children: "Using the platform for commercial purposes without authorization" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Content Submission" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "If you submit any content, feedback, or suggestions to us, you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate such content into our services without compensation to you." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "intellectual", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Intellectual Property Rights" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Our Content" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "All content on our platform, including but not limited to MCQs, questions, answers, explanations, practice papers, job listings, text, graphics, logos, icons, images, audio clips, and software, is the property of our platform or our content suppliers and is protected by Pakistani and international copyright laws." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Limited License" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "We grant you a limited, non-exclusive, non-transferable license to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Access and use our platform for personal, non-commercial purposes" }),
          /* @__PURE__ */ jsx("li", { children: "View and practice with MCQs and materials provided" }),
          /* @__PURE__ */ jsx("li", { children: "Download content for offline personal study (premium users only)" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed", children: "This license does not include the right to reproduce, distribute, modify, or create derivative works from our content." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Trademarks" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Our platform name, logo, and related marks are trademarks. You may not use these marks without our prior written permission. All other trademarks appearing on our platform are the property of their respective owners." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "liability", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Disclaimer & Limitation of Liability" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Service Disclaimer" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: 'Our platform and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that:' }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "The service will be uninterrupted, timely, secure, or error-free" }),
          /* @__PURE__ */ jsx("li", { children: "The results from using our service will be accurate or reliable" }),
          /* @__PURE__ */ jsx("li", { children: "The quality of products, services, or information will meet expectations" }),
          /* @__PURE__ */ jsx("li", { children: "Any errors in the software or content will be corrected" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Educational Content Disclaimer" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4 rounded-lg border border-red-200 bg-destructive/20 p-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "leading-relaxed text-destructive-foreground", children: [
            /* @__PURE__ */ jsx("strong", { children: "Important:" }),
            " While we strive to provide accurate and up-to-date MCQs and practice materials, we do not guarantee the accuracy, completeness, or reliability of any content. Our platform is for practice and preparation purposes only. We are not responsible for:"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 ml-4 list-inside list-disc space-y-1 text-destructive-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "Exam results or outcomes" }),
            /* @__PURE__ */ jsx("li", { children: "Job application success" }),
            /* @__PURE__ */ jsx("li", { children: "Accuracy of AI-generated content" }),
            /* @__PURE__ */ jsx("li", { children: "Errors or omissions in MCQs or explanations" }),
            /* @__PURE__ */ jsx("li", { children: "Changes in exam patterns or syllabi" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Limitation of Liability" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "To the maximum extent permitted by law, we shall not be liable for:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Any indirect, incidental, special, consequential, or punitive damages" }),
          /* @__PURE__ */ jsx("li", { children: "Loss of profits, revenue, data, or use" }),
          /* @__PURE__ */ jsx("li", { children: "Business interruption or loss of opportunity" }),
          /* @__PURE__ */ jsx("li", { children: "Any damages arising from your use or inability to use our services" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed", children: "Our total liability shall not exceed the amount you paid for premium services in the 12 months preceding the claim." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Third-Party Content" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Job listings and information about government exams are provided for informational purposes only. We do not verify the accuracy of job postings and are not responsible for third-party content, websites, or services linked from our platform." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "termination", className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(RefreshCw, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Account Termination & Suspension" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Termination by You" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "You may terminate your account at any time by:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Accessing account settings and selecting account deletion" }),
          /* @__PURE__ */ jsx("li", { children: "Contacting our support team" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed", children: "Upon termination, you will lose access to all services, including saved progress and premium features. No refunds will be provided for any remaining subscription period." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Termination by Us" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "We reserve the right to suspend or terminate your account immediately, without prior notice, if:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "You violate these Terms of Service" }),
          /* @__PURE__ */ jsx("li", { children: "You engage in fraudulent or illegal activities" }),
          /* @__PURE__ */ jsx("li", { children: "Your payment method fails or is disputed" }),
          /* @__PURE__ */ jsx("li", { children: "We suspect unauthorized access or security breaches" }),
          /* @__PURE__ */ jsx("li", { children: "We are required to do so by law" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Effects of Termination" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Upon termination of your account, all licenses granted to you will immediately cease, and you must discontinue all use of our services. We may retain your information as required by law or for legitimate business purposes. Sections of these Terms that by their nature should survive termination shall survive, including intellectual property provisions, disclaimers, and limitations of liability." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Dispute Resolution & Governing Law" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Governing Law" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 mb-3 text-lg font-semibold", children: "Dispute Resolution" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 leading-relaxed", children: "In the event of any dispute arising from these Terms or your use of our services:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "You agree to first attempt to resolve the dispute informally by contacting us" }),
          /* @__PURE__ */ jsx("li", { children: "If informal resolution fails, disputes shall be subject to the exclusive jurisdiction of courts in Lahore, Pakistan" }),
          /* @__PURE__ */ jsx("li", { children: "Both parties agree to waive any right to a jury trial" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Indemnification" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "You agree to indemnify, defend, and hold harmless our platform, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your violation of any rights of another party." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Changes to Terms" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "We reserve the right to modify these Terms at any time. We will notify users of material changes by:" }),
        /* @__PURE__ */ jsxs("ul", { className: "ml-4 list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Posting the updated Terms on our platform" }),
          /* @__PURE__ */ jsx("li", { children: "Sending email notification to registered users" }),
          /* @__PURE__ */ jsx("li", { children: "Displaying a prominent notice on our website" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed", children: "Your continued use of our services after such modifications constitutes acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using our services." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Severability" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Entire Agreement" }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "These Terms, together with our Privacy Policy and any other legal notices published by us on our platform, constitute the entire agreement between you and us concerning your use of our services and supersede all prior agreements and understandings." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Contact Information" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children: "If you have any questions about these Terms, please contact us:" }),
        /* @__PURE__ */ jsx("div", { className: "bg-info rounded-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxs("div", { className: "text-info-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Email:" }),
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${termsSchema.mainEntity.contactPoint.email}`,
                  className: "hover:underline",
                  children: termsSchema.mainEntity.contactPoint.email
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
                  href: `tel:${termsSchema.mainEntity.contactPoint.email}`,
                  className: "hover:underline",
                  children: termsSchema.mainEntity.contactPoint.telephone
                }
              )
            ] }) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-muted/65 pt-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-gray-50 p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-semibold text-foreground", children: "By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted", children: "Last updated: October 2, 2025" })
      ] }) })
    ] }) })
  ] });
}
export {
  TermsOfServicePage
};
