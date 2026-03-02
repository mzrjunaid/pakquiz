import { jsxs, jsx } from "react/jsx-runtime";
import { a as AppLogo } from "./app-layout-CQYjnFu_.js";
import { Mail, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const targetDate = (/* @__PURE__ */ new Date("2026-03-15T00:00:00")).getTime();
    const timer = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
          hours: Math.floor(
            difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
          ),
          minutes: Math.floor(
            difference % (1e3 * 60 * 60) / (1e3 * 60)
          ),
          seconds: Math.floor(difference % (1e3 * 60) / 1e3)
        });
      }
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  const handleSubmit = () => {
    if (email) {
      console.log("Email submitted:", email);
      setEmail("");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-slate-900 bg-gradient-to-br from-[#020617] via-[#581c87] to-[#0f172a]", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-3xl filter transition-all duration-1000 ${mounted ? "animate-pulse" : ""}`
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute top-40 right-10 h-72 w-72 rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-3xl filter transition-all delay-300 duration-1000 ${mounted ? "animate-pulse" : ""}`
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute -bottom-8 left-1/2 h-72 w-72 rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-3xl filter transition-all delay-700 duration-1000 ${mounted ? "animate-pulse" : ""}`
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: [...Array(20)].map((_, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute h-1 w-1 rounded-full bg-white opacity-30",
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${5 + Math.random() * 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsx("style", { children: `
                            @keyframes float {
                                0%,
                                100% {
                                    transform: translateY(0) translateX(0);
                                }
                                25% {
                                    transform: translateY(-20px) translateX(10px);
                                }
                                50% {
                                    transform: translateY(-40px) translateX(-10px);
                                }
                                75% {
                                    transform: translateY(-20px) translateX(5px);
                                }
                            }
                        ` }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `mb-8 transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`,
          children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 rounded-lg bg-white/65 px-4 py-2", children: /* @__PURE__ */ jsx(AppLogo, { className: "w-64" }) })
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `mb-12 text-center transition-all delay-200 duration-1000 ${mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`,
          children: [
            /* @__PURE__ */ jsxs("h1", { className: "mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl", children: [
              "Something Amazing",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent", children: "Is Coming Soon" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl", children: "We're crafting something extraordinary. Join our waitlist to be the first to know when we launch." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `mb-12 grid grid-cols-4 gap-4 transition-all delay-400 duration-1000 md:gap-8 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
          children: [
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 min-w-[70px] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg md:min-w-[100px] md:p-6", children: /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white tabular-nums md:text-5xl", children: String(item.value).padStart(2, "0") }) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm tracking-wider text-slate-400 uppercase md:text-base", children: item.label })
          ] }, index))
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `w-full max-w-md transition-all delay-600 duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ jsx(Mail, { className: "absolute top-1/2 left-4 z-10 h-5 w-5 -translate-y-1/2 text-white" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    placeholder: "Enter your email",
                    className: "w-full rounded-xl border border-white/20 bg-white/10 py-4 pr-4 pl-12 text-white placeholder-slate-400 backdrop-blur-lg transition-all focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: handleSubmit,
                  className: "group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/50 transition-all duration-300 hover:from-purple-600 hover:to-pink-600",
                  children: [
                    "Notify Me",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-1" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-sm text-slate-400", children: "Join 5,000+ others on the waitlist" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `mt-16 flex gap-6 transition-all delay-800 duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
          children: ["Twitter", "Instagram", "LinkedIn"].map((platform) => /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "text-slate-400 transition-colors duration-300 hover:text-white",
              children: platform
            },
            platform
          ))
        }
      )
    ] })
  ] });
};
export {
  ComingSoon as C
};
