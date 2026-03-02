import { q as queryParams } from "./index-C1F4OtKB.js";
const login = (options) => ({
  url: login.url(options),
  method: "get"
});
login.definition = {
  methods: ["get", "head"],
  url: "/login"
};
login.url = (options) => {
  return login.definition.url + queryParams(options);
};
login.get = (options) => ({
  url: login.url(options),
  method: "get"
});
login.head = (options) => ({
  url: login.url(options),
  method: "head"
});
const loginForm = (options) => ({
  action: login.url(options),
  method: "get"
});
loginForm.get = (options) => ({
  action: login.url(options),
  method: "get"
});
loginForm.head = (options) => ({
  action: login.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
login.form = loginForm;
const logout = (options) => ({
  url: logout.url(options),
  method: "post"
});
logout.definition = {
  methods: ["post"],
  url: "/logout"
};
logout.url = (options) => {
  return logout.definition.url + queryParams(options);
};
logout.post = (options) => ({
  url: logout.url(options),
  method: "post"
});
const logoutForm = (options) => ({
  action: logout.url(options),
  method: "post"
});
logoutForm.post = (options) => ({
  action: logout.url(options),
  method: "post"
});
logout.form = logoutForm;
const register = (options) => ({
  url: register.url(options),
  method: "get"
});
register.definition = {
  methods: ["get", "head"],
  url: "/register"
};
register.url = (options) => {
  return register.definition.url + queryParams(options);
};
register.get = (options) => ({
  url: register.url(options),
  method: "get"
});
register.head = (options) => ({
  url: register.url(options),
  method: "head"
});
const registerForm = (options) => ({
  action: register.url(options),
  method: "get"
});
registerForm.get = (options) => ({
  action: register.url(options),
  method: "get"
});
registerForm.head = (options) => ({
  action: register.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
register.form = registerForm;
const home = (options) => ({
  url: home.url(options),
  method: "get"
});
home.definition = {
  methods: ["get", "head"],
  url: "/"
};
home.url = (options) => {
  return home.definition.url + queryParams(options);
};
home.get = (options) => ({
  url: home.url(options),
  method: "get"
});
home.head = (options) => ({
  url: home.url(options),
  method: "head"
});
const homeForm = (options) => ({
  action: home.url(options),
  method: "get"
});
homeForm.get = (options) => ({
  action: home.url(options),
  method: "get"
});
homeForm.head = (options) => ({
  action: home.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
home.form = homeForm;
const demo = (options) => ({
  url: demo.url(options),
  method: "get"
});
demo.definition = {
  methods: ["get", "head"],
  url: "/demo"
};
demo.url = (options) => {
  return demo.definition.url + queryParams(options);
};
demo.get = (options) => ({
  url: demo.url(options),
  method: "get"
});
demo.head = (options) => ({
  url: demo.url(options),
  method: "head"
});
const demoForm = (options) => ({
  action: demo.url(options),
  method: "get"
});
demoForm.get = (options) => ({
  action: demo.url(options),
  method: "get"
});
demoForm.head = (options) => ({
  action: demo.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
demo.form = demoForm;
const aboutUs = (options) => ({
  url: aboutUs.url(options),
  method: "get"
});
aboutUs.definition = {
  methods: ["get", "head"],
  url: "/about-us"
};
aboutUs.url = (options) => {
  return aboutUs.definition.url + queryParams(options);
};
aboutUs.get = (options) => ({
  url: aboutUs.url(options),
  method: "get"
});
aboutUs.head = (options) => ({
  url: aboutUs.url(options),
  method: "head"
});
const aboutUsForm = (options) => ({
  action: aboutUs.url(options),
  method: "get"
});
aboutUsForm.get = (options) => ({
  action: aboutUs.url(options),
  method: "get"
});
aboutUsForm.head = (options) => ({
  action: aboutUs.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
aboutUs.form = aboutUsForm;
const contactUs = (options) => ({
  url: contactUs.url(options),
  method: "get"
});
contactUs.definition = {
  methods: ["get", "head"],
  url: "/contact-us"
};
contactUs.url = (options) => {
  return contactUs.definition.url + queryParams(options);
};
contactUs.get = (options) => ({
  url: contactUs.url(options),
  method: "get"
});
contactUs.head = (options) => ({
  url: contactUs.url(options),
  method: "head"
});
const contactUsForm = (options) => ({
  action: contactUs.url(options),
  method: "get"
});
contactUsForm.get = (options) => ({
  action: contactUs.url(options),
  method: "get"
});
contactUsForm.head = (options) => ({
  action: contactUs.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
contactUs.form = contactUsForm;
const joinUs = (options) => ({
  url: joinUs.url(options),
  method: "get"
});
joinUs.definition = {
  methods: ["get", "head"],
  url: "/join-us"
};
joinUs.url = (options) => {
  return joinUs.definition.url + queryParams(options);
};
joinUs.get = (options) => ({
  url: joinUs.url(options),
  method: "get"
});
joinUs.head = (options) => ({
  url: joinUs.url(options),
  method: "head"
});
const joinUsForm = (options) => ({
  action: joinUs.url(options),
  method: "get"
});
joinUsForm.get = (options) => ({
  action: joinUs.url(options),
  method: "get"
});
joinUsForm.head = (options) => ({
  action: joinUs.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
joinUs.form = joinUsForm;
const privacyPolicy = (options) => ({
  url: privacyPolicy.url(options),
  method: "get"
});
privacyPolicy.definition = {
  methods: ["get", "head"],
  url: "/privacy-policy"
};
privacyPolicy.url = (options) => {
  return privacyPolicy.definition.url + queryParams(options);
};
privacyPolicy.get = (options) => ({
  url: privacyPolicy.url(options),
  method: "get"
});
privacyPolicy.head = (options) => ({
  url: privacyPolicy.url(options),
  method: "head"
});
const privacyPolicyForm = (options) => ({
  action: privacyPolicy.url(options),
  method: "get"
});
privacyPolicyForm.get = (options) => ({
  action: privacyPolicy.url(options),
  method: "get"
});
privacyPolicyForm.head = (options) => ({
  action: privacyPolicy.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
privacyPolicy.form = privacyPolicyForm;
const termsOfService = (options) => ({
  url: termsOfService.url(options),
  method: "get"
});
termsOfService.definition = {
  methods: ["get", "head"],
  url: "/terms-of-service"
};
termsOfService.url = (options) => {
  return termsOfService.definition.url + queryParams(options);
};
termsOfService.get = (options) => ({
  url: termsOfService.url(options),
  method: "get"
});
termsOfService.head = (options) => ({
  url: termsOfService.url(options),
  method: "head"
});
const termsOfServiceForm = (options) => ({
  action: termsOfService.url(options),
  method: "get"
});
termsOfServiceForm.get = (options) => ({
  action: termsOfService.url(options),
  method: "get"
});
termsOfServiceForm.head = (options) => ({
  action: termsOfService.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
termsOfService.form = termsOfServiceForm;
const helpCenter = (options) => ({
  url: helpCenter.url(options),
  method: "get"
});
helpCenter.definition = {
  methods: ["get", "head"],
  url: "/help-center"
};
helpCenter.url = (options) => {
  return helpCenter.definition.url + queryParams(options);
};
helpCenter.get = (options) => ({
  url: helpCenter.url(options),
  method: "get"
});
helpCenter.head = (options) => ({
  url: helpCenter.url(options),
  method: "head"
});
const helpCenterForm = (options) => ({
  action: helpCenter.url(options),
  method: "get"
});
helpCenterForm.get = (options) => ({
  action: helpCenter.url(options),
  method: "get"
});
helpCenterForm.head = (options) => ({
  action: helpCenter.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
helpCenter.form = helpCenterForm;
const quiz_mode = (options) => ({
  url: quiz_mode.url(options),
  method: "put"
});
quiz_mode.definition = {
  methods: ["put"],
  url: "/set-quiz-mode"
};
quiz_mode.url = (options) => {
  return quiz_mode.definition.url + queryParams(options);
};
quiz_mode.put = (options) => ({
  url: quiz_mode.url(options),
  method: "put"
});
const quiz_modeForm = (options) => ({
  action: quiz_mode.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
quiz_modeForm.put = (options) => ({
  action: quiz_mode.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
quiz_mode.form = quiz_modeForm;
export {
  aboutUs as a,
  home as b,
  contactUs as c,
  demo as d,
  login as e,
  helpCenter as h,
  joinUs as j,
  logout as l,
  privacyPolicy as p,
  register as r,
  termsOfService as t
};
