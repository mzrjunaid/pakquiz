import { jsx } from "react/jsx-runtime";
import { Loader2Icon } from "lucide-react";
import { c as cn } from "./utils-BcGwcge3.js";
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Loader2Icon,
    {
      role: "status",
      "aria-label": "Loading",
      className: cn("size-4 animate-spin", className),
      ...props
    }
  );
}
export {
  Spinner as S
};
