import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Head } from "@inertiajs/react";
function AppCenterHead({ schema }) {
  const { base_url, seo } = usePage().props;
  const ogImageUrl = seo.og_image ? `${base_url}${seo.og_image}` : `${base_url}/assets/images/og-main.png`;
  return /* @__PURE__ */ jsxs(Head, { title: seo.title, children: [
    /* @__PURE__ */ jsx("meta", { name: "description", content: seo.description }),
    seo.keywords && /* @__PURE__ */ jsx(
      "meta",
      {
        name: "keywords",
        content: seo.keywords.map((keyword) => keyword.keyword).join(", ")
      }
    ),
    /* @__PURE__ */ jsx("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: seo.canonical }),
    seo.prev && /* @__PURE__ */ jsx("link", { rel: "prev", href: seo.prev }),
    seo.next && /* @__PURE__ */ jsx("link", { rel: "next", href: seo.next }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: seo.og_title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: seo.og_description }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: seo.canonical }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: seo.og_title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: seo.og_description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageUrl }),
    schema && /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
      }
    )
  ] });
}
export {
  AppCenterHead as A
};
