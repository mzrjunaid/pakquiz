import { q as queryParams, a as applyUrlDefaults } from "./index-C1F4OtKB.js";
const index$1 = (options) => ({
  url: index$1.url(options),
  method: "get"
});
index$1.definition = {
  methods: ["get", "head"],
  url: "/admin/papers"
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
const create$1 = (options) => ({
  url: create$1.url(options),
  method: "get"
});
create$1.definition = {
  methods: ["get", "head"],
  url: "/admin/papers/create"
};
create$1.url = (options) => {
  return create$1.definition.url + queryParams(options);
};
create$1.get = (options) => ({
  url: create$1.url(options),
  method: "get"
});
create$1.head = (options) => ({
  url: create$1.url(options),
  method: "head"
});
const createForm$1 = (options) => ({
  action: create$1.url(options),
  method: "get"
});
createForm$1.get = (options) => ({
  action: create$1.url(options),
  method: "get"
});
createForm$1.head = (options) => ({
  action: create$1.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
create$1.form = createForm$1;
const store$1 = (options) => ({
  url: store$1.url(options),
  method: "post"
});
store$1.definition = {
  methods: ["post"],
  url: "/admin/papers"
};
store$1.url = (options) => {
  return store$1.definition.url + queryParams(options);
};
store$1.post = (options) => ({
  url: store$1.url(options),
  method: "post"
});
const storeForm$1 = (options) => ({
  action: store$1.url(options),
  method: "post"
});
storeForm$1.post = (options) => ({
  action: store$1.url(options),
  method: "post"
});
store$1.form = storeForm$1;
const show$1 = (args, options) => ({
  url: show$1.url(args, options),
  method: "get"
});
show$1.definition = {
  methods: ["get", "head"],
  url: "/admin/papers/{paper}"
};
show$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { paper: args };
  }
  if (Array.isArray(args)) {
    args = {
      paper: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    paper: args.paper
  };
  return show$1.definition.url.replace("{paper}", parsedArgs.paper.toString()).replace(/\/+$/, "") + queryParams(options);
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
const edit$1 = (args, options) => ({
  url: edit$1.url(args, options),
  method: "get"
});
edit$1.definition = {
  methods: ["get", "head"],
  url: "/admin/papers/{paper}/edit"
};
edit$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { paper: args };
  }
  if (Array.isArray(args)) {
    args = {
      paper: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    paper: args.paper
  };
  return edit$1.definition.url.replace("{paper}", parsedArgs.paper.toString()).replace(/\/+$/, "") + queryParams(options);
};
edit$1.get = (args, options) => ({
  url: edit$1.url(args, options),
  method: "get"
});
edit$1.head = (args, options) => ({
  url: edit$1.url(args, options),
  method: "head"
});
const editForm$1 = (args, options) => ({
  action: edit$1.url(args, options),
  method: "get"
});
editForm$1.get = (args, options) => ({
  action: edit$1.url(args, options),
  method: "get"
});
editForm$1.head = (args, options) => ({
  action: edit$1.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit$1.form = editForm$1;
const update$1 = (args, options) => ({
  url: update$1.url(args, options),
  method: "put"
});
update$1.definition = {
  methods: ["put", "patch"],
  url: "/admin/papers/{paper}"
};
update$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { paper: args };
  }
  if (Array.isArray(args)) {
    args = {
      paper: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    paper: args.paper
  };
  return update$1.definition.url.replace("{paper}", parsedArgs.paper.toString()).replace(/\/+$/, "") + queryParams(options);
};
update$1.put = (args, options) => ({
  url: update$1.url(args, options),
  method: "put"
});
update$1.patch = (args, options) => ({
  url: update$1.url(args, options),
  method: "patch"
});
const updateForm$1 = (args, options) => ({
  action: update$1.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm$1.put = (args, options) => ({
  action: update$1.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm$1.patch = (args, options) => ({
  action: update$1.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
update$1.form = updateForm$1;
const destroy$1 = (args, options) => ({
  url: destroy$1.url(args, options),
  method: "delete"
});
destroy$1.definition = {
  methods: ["delete"],
  url: "/admin/papers/{paper}"
};
destroy$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { paper: args };
  }
  if (Array.isArray(args)) {
    args = {
      paper: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    paper: args.paper
  };
  return destroy$1.definition.url.replace("{paper}", parsedArgs.paper.toString()).replace(/\/+$/, "") + queryParams(options);
};
destroy$1.delete = (args, options) => ({
  url: destroy$1.url(args, options),
  method: "delete"
});
const destroyForm$1 = (args, options) => ({
  action: destroy$1.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
destroyForm$1.delete = (args, options) => ({
  action: destroy$1.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
destroy$1.form = destroyForm$1;
const papers = {
  index: Object.assign(index$1, index$1),
  create: Object.assign(create$1, create$1),
  store: Object.assign(store$1, store$1),
  show: Object.assign(show$1, show$1),
  edit: Object.assign(edit$1, edit$1),
  update: Object.assign(update$1, update$1),
  destroy: Object.assign(destroy$1, destroy$1)
};
const index = (options) => ({
  url: index.url(options),
  method: "get"
});
index.definition = {
  methods: ["get", "head"],
  url: "/admin/mcqs"
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
const create = (options) => ({
  url: create.url(options),
  method: "get"
});
create.definition = {
  methods: ["get", "head"],
  url: "/admin/mcqs/create"
};
create.url = (options) => {
  return create.definition.url + queryParams(options);
};
create.get = (options) => ({
  url: create.url(options),
  method: "get"
});
create.head = (options) => ({
  url: create.url(options),
  method: "head"
});
const createForm = (options) => ({
  action: create.url(options),
  method: "get"
});
createForm.get = (options) => ({
  action: create.url(options),
  method: "get"
});
createForm.head = (options) => ({
  action: create.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
create.form = createForm;
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/admin/mcqs"
};
store.url = (options) => {
  return store.definition.url + queryParams(options);
};
store.post = (options) => ({
  url: store.url(options),
  method: "post"
});
const storeForm = (options) => ({
  action: store.url(options),
  method: "post"
});
storeForm.post = (options) => ({
  action: store.url(options),
  method: "post"
});
store.form = storeForm;
const show = (args, options) => ({
  url: show.url(args, options),
  method: "get"
});
show.definition = {
  methods: ["get", "head"],
  url: "/admin/mcqs/{mcq}"
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
const edit = (args, options) => ({
  url: edit.url(args, options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/admin/mcqs/{mcq}/edit"
};
edit.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { mcq: args };
  }
  if (Array.isArray(args)) {
    args = {
      mcq: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    mcq: args.mcq
  };
  return edit.definition.url.replace("{mcq}", parsedArgs.mcq.toString()).replace(/\/+$/, "") + queryParams(options);
};
edit.get = (args, options) => ({
  url: edit.url(args, options),
  method: "get"
});
edit.head = (args, options) => ({
  url: edit.url(args, options),
  method: "head"
});
const editForm = (args, options) => ({
  action: edit.url(args, options),
  method: "get"
});
editForm.get = (args, options) => ({
  action: edit.url(args, options),
  method: "get"
});
editForm.head = (args, options) => ({
  action: edit.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit.form = editForm;
const update = (args, options) => ({
  url: update.url(args, options),
  method: "put"
});
update.definition = {
  methods: ["put", "patch"],
  url: "/admin/mcqs/{mcq}"
};
update.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { mcq: args };
  }
  if (Array.isArray(args)) {
    args = {
      mcq: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    mcq: args.mcq
  };
  return update.definition.url.replace("{mcq}", parsedArgs.mcq.toString()).replace(/\/+$/, "") + queryParams(options);
};
update.put = (args, options) => ({
  url: update.url(args, options),
  method: "put"
});
update.patch = (args, options) => ({
  url: update.url(args, options),
  method: "patch"
});
const updateForm = (args, options) => ({
  action: update.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm.put = (args, options) => ({
  action: update.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm.patch = (args, options) => ({
  action: update.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
const destroy = (args, options) => ({
  url: destroy.url(args, options),
  method: "delete"
});
destroy.definition = {
  methods: ["delete"],
  url: "/admin/mcqs/{mcq}"
};
destroy.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { mcq: args };
  }
  if (Array.isArray(args)) {
    args = {
      mcq: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    mcq: args.mcq
  };
  return destroy.definition.url.replace("{mcq}", parsedArgs.mcq.toString()).replace(/\/+$/, "") + queryParams(options);
};
destroy.delete = (args, options) => ({
  url: destroy.url(args, options),
  method: "delete"
});
const destroyForm = (args, options) => ({
  action: destroy.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
destroyForm.delete = (args, options) => ({
  action: destroy.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
destroy.form = destroyForm;
const mcqs = {
  index: Object.assign(index, index),
  create: Object.assign(create, create),
  store: Object.assign(store, store),
  show: Object.assign(show, show),
  edit: Object.assign(edit, edit),
  update: Object.assign(update, update),
  destroy: Object.assign(destroy, destroy)
};
export {
  mcqs as m,
  papers as p
};
