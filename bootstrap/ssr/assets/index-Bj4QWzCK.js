import { useSyncExternalStore } from "react";
import { q as queryParams, a as applyUrlDefaults, v as validateParameters } from "./index-C1F4OtKB.js";
import { usePage, router } from "@inertiajs/react";
const MOBILE_BREAKPOINT = 768;
const mql = typeof window === "undefined" ? void 0 : window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
function mediaQueryListener(callback) {
  if (!mql) {
    return () => {
    };
  }
  mql.addEventListener("change", callback);
  return () => {
    mql.removeEventListener("change", callback);
  };
}
function isSmallerThanBreakpoint() {
  return mql?.matches ?? false;
}
function getServerSnapshot() {
  return false;
}
function useIsMobile() {
  return useSyncExternalStore(
    mediaQueryListener,
    isSmallerThanBreakpoint,
    getServerSnapshot
  );
}
const index$4 = (options) => ({
  url: index$4.url(options),
  method: "get"
});
index$4.definition = {
  methods: ["get", "head"],
  url: "/"
};
index$4.url = (options) => {
  return index$4.definition.url + queryParams(options);
};
index$4.get = (options) => ({
  url: index$4.url(options),
  method: "get"
});
index$4.head = (options) => ({
  url: index$4.url(options),
  method: "head"
});
const indexForm$4 = (options) => ({
  action: index$4.url(options),
  method: "get"
});
indexForm$4.get = (options) => ({
  action: index$4.url(options),
  method: "get"
});
indexForm$4.head = (options) => ({
  action: index$4.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
index$4.form = indexForm$4;
const about_us = (options) => ({
  url: about_us.url(options),
  method: "get"
});
about_us.definition = {
  methods: ["get", "head"],
  url: "/about-us"
};
about_us.url = (options) => {
  return about_us.definition.url + queryParams(options);
};
about_us.get = (options) => ({
  url: about_us.url(options),
  method: "get"
});
about_us.head = (options) => ({
  url: about_us.url(options),
  method: "head"
});
const about_usForm = (options) => ({
  action: about_us.url(options),
  method: "get"
});
about_usForm.get = (options) => ({
  action: about_us.url(options),
  method: "get"
});
about_usForm.head = (options) => ({
  action: about_us.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
about_us.form = about_usForm;
const contact_us = (options) => ({
  url: contact_us.url(options),
  method: "get"
});
contact_us.definition = {
  methods: ["get", "head"],
  url: "/contact-us"
};
contact_us.url = (options) => {
  return contact_us.definition.url + queryParams(options);
};
contact_us.get = (options) => ({
  url: contact_us.url(options),
  method: "get"
});
contact_us.head = (options) => ({
  url: contact_us.url(options),
  method: "head"
});
const contact_usForm = (options) => ({
  action: contact_us.url(options),
  method: "get"
});
contact_usForm.get = (options) => ({
  action: contact_us.url(options),
  method: "get"
});
contact_usForm.head = (options) => ({
  action: contact_us.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
contact_us.form = contact_usForm;
const join_us = (options) => ({
  url: join_us.url(options),
  method: "get"
});
join_us.definition = {
  methods: ["get", "head"],
  url: "/join-us"
};
join_us.url = (options) => {
  return join_us.definition.url + queryParams(options);
};
join_us.get = (options) => ({
  url: join_us.url(options),
  method: "get"
});
join_us.head = (options) => ({
  url: join_us.url(options),
  method: "head"
});
const join_usForm = (options) => ({
  action: join_us.url(options),
  method: "get"
});
join_usForm.get = (options) => ({
  action: join_us.url(options),
  method: "get"
});
join_usForm.head = (options) => ({
  action: join_us.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
join_us.form = join_usForm;
const privacy_policy = (options) => ({
  url: privacy_policy.url(options),
  method: "get"
});
privacy_policy.definition = {
  methods: ["get", "head"],
  url: "/privacy-policy"
};
privacy_policy.url = (options) => {
  return privacy_policy.definition.url + queryParams(options);
};
privacy_policy.get = (options) => ({
  url: privacy_policy.url(options),
  method: "get"
});
privacy_policy.head = (options) => ({
  url: privacy_policy.url(options),
  method: "head"
});
const privacy_policyForm = (options) => ({
  action: privacy_policy.url(options),
  method: "get"
});
privacy_policyForm.get = (options) => ({
  action: privacy_policy.url(options),
  method: "get"
});
privacy_policyForm.head = (options) => ({
  action: privacy_policy.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
privacy_policy.form = privacy_policyForm;
const terms_of_service = (options) => ({
  url: terms_of_service.url(options),
  method: "get"
});
terms_of_service.definition = {
  methods: ["get", "head"],
  url: "/terms-of-service"
};
terms_of_service.url = (options) => {
  return terms_of_service.definition.url + queryParams(options);
};
terms_of_service.get = (options) => ({
  url: terms_of_service.url(options),
  method: "get"
});
terms_of_service.head = (options) => ({
  url: terms_of_service.url(options),
  method: "head"
});
const terms_of_serviceForm = (options) => ({
  action: terms_of_service.url(options),
  method: "get"
});
terms_of_serviceForm.get = (options) => ({
  action: terms_of_service.url(options),
  method: "get"
});
terms_of_serviceForm.head = (options) => ({
  action: terms_of_service.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
terms_of_service.form = terms_of_serviceForm;
const help_center = (options) => ({
  url: help_center.url(options),
  method: "get"
});
help_center.definition = {
  methods: ["get", "head"],
  url: "/help-center"
};
help_center.url = (options) => {
  return help_center.definition.url + queryParams(options);
};
help_center.get = (options) => ({
  url: help_center.url(options),
  method: "get"
});
help_center.head = (options) => ({
  url: help_center.url(options),
  method: "head"
});
const help_centerForm = (options) => ({
  action: help_center.url(options),
  method: "get"
});
help_centerForm.get = (options) => ({
  action: help_center.url(options),
  method: "get"
});
help_centerForm.head = (options) => ({
  action: help_center.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
help_center.form = help_centerForm;
const setQuizMode = (options) => ({
  url: setQuizMode.url(options),
  method: "put"
});
setQuizMode.definition = {
  methods: ["put"],
  url: "/set-quiz-mode"
};
setQuizMode.url = (options) => {
  return setQuizMode.definition.url + queryParams(options);
};
setQuizMode.put = (options) => ({
  url: setQuizMode.url(options),
  method: "put"
});
const setQuizModeForm = (options) => ({
  action: setQuizMode.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
setQuizModeForm.put = (options) => ({
  action: setQuizMode.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
setQuizMode.form = setQuizModeForm;
function useQuizMode() {
  const { isQuizMode } = usePage().props;
  const setIsQuizMode = (value) => {
    router.put(
      setQuizMode().url,
      {
        isQuizMode: value
      },
      {
        preserveState: true,
        preserveScroll: true
      }
    );
  };
  return { isQuizMode, setIsQuizMode };
}
const index$3 = (args, options) => ({
  url: index$3.url(args, options),
  method: "get"
});
index$3.definition = {
  methods: ["get", "head"],
  url: "/papers/{category?}"
};
index$3.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { category: args };
  }
  if (Array.isArray(args)) {
    args = {
      category: args[0]
    };
  }
  args = applyUrlDefaults(args);
  validateParameters(args, [
    "category"
  ]);
  const parsedArgs = {
    category: args?.category
  };
  return index$3.definition.url.replace("{category?}", parsedArgs.category?.toString() ?? "").replace(/\/+$/, "") + queryParams(options);
};
index$3.get = (args, options) => ({
  url: index$3.url(args, options),
  method: "get"
});
index$3.head = (args, options) => ({
  url: index$3.url(args, options),
  method: "head"
});
const indexForm$3 = (args, options) => ({
  action: index$3.url(args, options),
  method: "get"
});
indexForm$3.get = (args, options) => ({
  action: index$3.url(args, options),
  method: "get"
});
indexForm$3.head = (args, options) => ({
  action: index$3.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
index$3.form = indexForm$3;
const show$3 = (args, options) => ({
  url: show$3.url(args, options),
  method: "get"
});
show$3.definition = {
  methods: ["get", "head"],
  url: "/papers/{category?}/{paper}"
};
show$3.url = (args, options) => {
  if (Array.isArray(args)) {
    args = {
      category: args[0],
      paper: args[1]
    };
  }
  args = applyUrlDefaults(args);
  validateParameters(args, [
    "category"
  ]);
  const parsedArgs = {
    category: args.category,
    paper: typeof args.paper === "object" ? args.paper.slug : args.paper
  };
  return show$3.definition.url.replace("{category?}", parsedArgs.category?.toString() ?? "").replace("{paper}", parsedArgs.paper.toString()).replace(/\/+$/, "") + queryParams(options);
};
show$3.get = (args, options) => ({
  url: show$3.url(args, options),
  method: "get"
});
show$3.head = (args, options) => ({
  url: show$3.url(args, options),
  method: "head"
});
const showForm$3 = (args, options) => ({
  action: show$3.url(args, options),
  method: "get"
});
showForm$3.get = (args, options) => ({
  action: show$3.url(args, options),
  method: "get"
});
showForm$3.head = (args, options) => ({
  action: show$3.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
show$3.form = showForm$3;
const category = {
  index: Object.assign(index$3, index$3),
  show: Object.assign(show$3, show$3)
};
const index$2 = (options) => ({
  url: index$2.url(options),
  method: "get"
});
index$2.definition = {
  methods: ["get", "head"],
  url: "/papers"
};
index$2.url = (options) => {
  return index$2.definition.url + queryParams(options);
};
index$2.get = (options) => ({
  url: index$2.url(options),
  method: "get"
});
index$2.head = (options) => ({
  url: index$2.url(options),
  method: "head"
});
const indexForm$2 = (options) => ({
  action: index$2.url(options),
  method: "get"
});
indexForm$2.get = (options) => ({
  action: index$2.url(options),
  method: "get"
});
indexForm$2.head = (options) => ({
  action: index$2.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
index$2.form = indexForm$2;
const show$2 = (args, options) => ({
  url: show$2.url(args, options),
  method: "get"
});
show$2.definition = {
  methods: ["get", "head"],
  url: "/papers/{paper}"
};
show$2.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { paper: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "slug" in args) {
    args = { paper: args.slug };
  }
  if (Array.isArray(args)) {
    args = {
      paper: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    paper: typeof args.paper === "object" ? args.paper.slug : args.paper
  };
  return show$2.definition.url.replace("{paper}", parsedArgs.paper.toString()).replace(/\/+$/, "") + queryParams(options);
};
show$2.get = (args, options) => ({
  url: show$2.url(args, options),
  method: "get"
});
show$2.head = (args, options) => ({
  url: show$2.url(args, options),
  method: "head"
});
const showForm$2 = (args, options) => ({
  action: show$2.url(args, options),
  method: "get"
});
showForm$2.get = (args, options) => ({
  action: show$2.url(args, options),
  method: "get"
});
showForm$2.head = (args, options) => ({
  action: show$2.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
show$2.form = showForm$2;
const papers = {
  index: Object.assign(index$2, index$2),
  category: Object.assign(category, category),
  show: Object.assign(show$2, show$2)
};
const index$1 = (args, options) => ({
  url: index$1.url(args, options),
  method: "get"
});
index$1.definition = {
  methods: ["get", "head"],
  url: "/{subject}/topics"
};
index$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { subject: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "slug" in args) {
    args = { subject: args.slug };
  }
  if (Array.isArray(args)) {
    args = {
      subject: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    subject: typeof args.subject === "object" ? args.subject.slug : args.subject
  };
  return index$1.definition.url.replace("{subject}", parsedArgs.subject.toString()).replace(/\/+$/, "") + queryParams(options);
};
index$1.get = (args, options) => ({
  url: index$1.url(args, options),
  method: "get"
});
index$1.head = (args, options) => ({
  url: index$1.url(args, options),
  method: "head"
});
const indexForm$1 = (args, options) => ({
  action: index$1.url(args, options),
  method: "get"
});
indexForm$1.get = (args, options) => ({
  action: index$1.url(args, options),
  method: "get"
});
indexForm$1.head = (args, options) => ({
  action: index$1.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
index$1.form = indexForm$1;
const show$1 = (args, options) => ({
  url: show$1.url(args, options),
  method: "get"
});
show$1.definition = {
  methods: ["get", "head"],
  url: "/{subject}/{topic}"
};
show$1.url = (args, options) => {
  if (Array.isArray(args)) {
    args = {
      subject: args[0],
      topic: args[1]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    subject: typeof args.subject === "object" ? args.subject.slug : args.subject,
    topic: typeof args.topic === "object" ? args.topic.slug : args.topic
  };
  return show$1.definition.url.replace("{subject}", parsedArgs.subject.toString()).replace("{topic}", parsedArgs.topic.toString()).replace(/\/+$/, "") + queryParams(options);
};
show$1.get = (args, options) => ({
  url: show$1.url(args, options),
  method: "get"
});
show$1.head = (args, options) => ({
  url: show$1.url(args, options),
  method: "head"
});
const showForm$1 = (args, options) => ({
  action: show$1.url(args, options),
  method: "get"
});
showForm$1.get = (args, options) => ({
  action: show$1.url(args, options),
  method: "get"
});
showForm$1.head = (args, options) => ({
  action: show$1.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
show$1.form = showForm$1;
const topic = {
  index: Object.assign(index$1, index$1),
  show: Object.assign(show$1, show$1)
};
const index = (options) => ({
  url: index.url(options),
  method: "get"
});
index.definition = {
  methods: ["get", "head"],
  url: "/subjects"
};
index.url = (options) => {
  return index.definition.url + queryParams(options);
};
index.get = (options) => ({
  url: index.url(options),
  method: "get"
});
index.head = (options) => ({
  url: index.url(options),
  method: "head"
});
const indexForm = (options) => ({
  action: index.url(options),
  method: "get"
});
indexForm.get = (options) => ({
  action: index.url(options),
  method: "get"
});
indexForm.head = (options) => ({
  action: index.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
index.form = indexForm;
const show = (args, options) => ({
  url: show.url(args, options),
  method: "get"
});
show.definition = {
  methods: ["get", "head"],
  url: "/{subject}"
};
show.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { subject: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "slug" in args) {
    args = { subject: args.slug };
  }
  if (Array.isArray(args)) {
    args = {
      subject: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    subject: typeof args.subject === "object" ? args.subject.slug : args.subject
  };
  return show.definition.url.replace("{subject}", parsedArgs.subject.toString()).replace(/\/+$/, "") + queryParams(options);
};
show.get = (args, options) => ({
  url: show.url(args, options),
  method: "get"
});
show.head = (args, options) => ({
  url: show.url(args, options),
  method: "head"
});
const showForm = (args, options) => ({
  action: show.url(args, options),
  method: "get"
});
showForm.get = (args, options) => ({
  action: show.url(args, options),
  method: "get"
});
showForm.head = (args, options) => ({
  action: show.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
show.form = showForm;
const subject = {
  index: Object.assign(index, index),
  show: Object.assign(show, show),
  topic: Object.assign(topic, topic)
};
export {
  useQuizMode as a,
  papers as p,
  subject as s,
  useIsMobile as u
};
