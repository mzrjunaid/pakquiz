import { q as queryParams, a as applyUrlDefaults } from "./index-C1F4OtKB.js";
const index = (options) => ({
  url: index.url(options),
  method: "get"
});
index.definition = {
  methods: ["get", "head"],
  url: "/mcqs"
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
  url: "/mcqs/{mcq}"
};
show.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { mcq: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "slug" in args) {
    args = { mcq: args.slug };
  }
  if (Array.isArray(args)) {
    args = {
      mcq: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    mcq: typeof args.mcq === "object" ? args.mcq.slug : args.mcq
  };
  return show.definition.url.replace("{mcq}", parsedArgs.mcq.toString()).replace(/\/+$/, "") + queryParams(options);
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
const mcqs = {
  index: Object.assign(index, index),
  show: Object.assign(show, show)
};
export {
  mcqs as m
};
