import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { c as cn } from "./utils-BcGwcge3.js";
const headingVariants = cva("font-sans", {
  variants: {
    size: {
      sm: "text-lg font-semibold",
      md: "text-xl font-semibold",
      lg: "text-2xl font-bold",
      xl: "text-3xl font-bold"
    },
    textColor: {
      default: "text-foreground",
      primary: "text-primary",
      muted: "text-muted"
    }
  },
  defaultVariants: {
    size: "lg",
    textColor: "default"
  }
});
cva("font-sans", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    textColor: {
      default: "text-foreground dark:text-background",
      muted: "text-gray-600"
    }
  },
  defaultVariants: {
    size: "md",
    textColor: "default"
  }
});
const TextHeading = ({
  as: Component = "h2",
  size,
  textColor,
  className,
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Component, { className: cn(headingVariants({ size, textColor }), className), ...props, children });
};
export {
  TextHeading as T
};
