import { q as queryParams, a as applyUrlDefaults } from "./index-C1F4OtKB.js";
import { m as mcqs } from "./index-DZj2b4Wd.js";
import { s as subject, p as papers } from "./index-Bj4QWzCK.js";
const index$2 = (options) => ({
  url: index$2.url(options),
  method: "get"
});
index$2.definition = {
  methods: ["get", "head"],
  url: "/departments"
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
const show$1 = (args, options) => ({
  url: show$1.url(args, options),
  method: "get"
});
show$1.definition = {
  methods: ["get", "head"],
  url: "/departments/{department}"
};
show$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { department: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "slug" in args) {
    args = { department: args.slug };
  }
  if (Array.isArray(args)) {
    args = {
      department: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    department: typeof args.department === "object" ? args.department.slug : args.department
  };
  return show$1.definition.url.replace("{department}", parsedArgs.department.toString()).replace(/\/+$/, "") + queryParams(options);
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
const departments = {
  index: Object.assign(index$2, index$2),
  show: Object.assign(show$1, show$1)
};
const index$1 = (options) => ({
  url: index$1.url(options),
  method: "get"
});
index$1.definition = {
  methods: ["get", "head"],
  url: "/testing-services"
};
index$1.url = (options) => {
  return index$1.definition.url + queryParams(options);
};
index$1.get = (options) => ({
  url: index$1.url(options),
  method: "get"
});
index$1.head = (options) => ({
  url: index$1.url(options),
  method: "head"
});
const indexForm$1 = (options) => ({
  action: index$1.url(options),
  method: "get"
});
indexForm$1.get = (options) => ({
  action: index$1.url(options),
  method: "get"
});
indexForm$1.head = (options) => ({
  action: index$1.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
index$1.form = indexForm$1;
const show = (args, options) => ({
  url: show.url(args, options),
  method: "get"
});
show.definition = {
  methods: ["get", "head"],
  url: "/testing-services/{testingService}"
};
show.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { testingService: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "slug" in args) {
    args = { testingService: args.slug };
  }
  if (Array.isArray(args)) {
    args = {
      testingService: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    testingService: typeof args.testingService === "object" ? args.testingService.slug : args.testingService
  };
  return show.definition.url.replace("{testingService}", parsedArgs.testingService.toString()).replace(/\/+$/, "") + queryParams(options);
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
const testing_services = {
  index: Object.assign(index$1, index$1),
  show: Object.assign(show, show)
};
const index = (options) => ({
  url: index.url(options),
  method: "get"
});
index.definition = {
  methods: ["get", "head"],
  url: "/premium"
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
const premium = {
  index: Object.assign(index, index)
};
const search = (options) => ({
  url: search.url(options),
  method: "get"
});
search.definition = {
  methods: ["get", "head"],
  url: "/search"
};
search.url = (options) => {
  return search.definition.url + queryParams(options);
};
search.get = (options) => ({
  url: search.url(options),
  method: "get"
});
search.head = (options) => ({
  url: search.url(options),
  method: "head"
});
const searchForm = (options) => ({
  action: search.url(options),
  method: "get"
});
searchForm.get = (options) => ({
  action: search.url(options),
  method: "get"
});
searchForm.head = (options) => ({
  action: search.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
search.form = searchForm;
const publicMethod = {
  search: Object.assign(search, search),
  mcqs: Object.assign(mcqs, mcqs),
  departments: Object.assign(departments, departments),
  testing_services: Object.assign(testing_services, testing_services),
  papers: Object.assign(papers, papers),
  subject: Object.assign(subject, subject),
  premium: Object.assign(premium, premium)
};
export {
  departments as d,
  publicMethod as p,
  testing_services as t
};
