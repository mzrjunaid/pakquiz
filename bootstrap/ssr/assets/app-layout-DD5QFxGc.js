import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useCallback, useEffect, Fragment as Fragment$1 } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { XIcon, PanelLeftIcon, Monitor, Sun, Moon, MoreHorizontal, Settings, LogOut, ChevronsUpDown, LayoutGrid, Building, Paperclip, FileBox, Clipboard, ShieldQuestion, Tag, Trash, Home, BookOpen, NotepadText, ChevronRight, ChevronDownIcon } from "lucide-react";
import { u as useIsMobile, a as useQuizMode, p as papers$1, s as subject } from "./index-Bj4QWzCK.js";
import { c as cn, r as resolveUrl } from "./utils-BcGwcge3.js";
import { B as Button } from "./button-BlmebLQZ.js";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { usePage, Link, router } from "@inertiajs/react";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, d as DropdownMenuItem, c as DropdownMenuLabel, e as DropdownMenuSeparator, f as DropdownMenuGroup } from "./dropdown-menu-CU31zq8b.js";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { l as logout, a as aboutUs, c as contactUs, h as helpCenter, p as privacyPolicy, t as termsOfService, j as joinUs, b as home, d as demo } from "./index-DFqmwzVc.js";
import { q as queryParams, a as applyUrlDefaults } from "./index-C1F4OtKB.js";
import { t as testingServices } from "./index-Da6iTmvw.js";
import { d as departments } from "./index-DSmwQD5U.js";
import { s as subjects } from "./index-NuUntNu2.js";
import { m as mcqs, p as papers } from "./index-CxePvluH.js";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { Toaster } from "sonner";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 4,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props,
      children
    }
  ) }) });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        ),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsxs(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: [
      /* @__PURE__ */ jsxs(SheetHeader, { className: "sr-only", children: [
        /* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }),
        /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })
      ] }),
      /* @__PURE__ */ jsx(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children
              }
            )
          }
        )
      ]
    }
  );
}
function SidebarTrigger({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(PanelLeftIcon, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex max-w-full min-h-svh flex-1 flex-col",
        "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-0",
        className
      ),
      ...props
    }
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:select-none group-data-[collapsible=icon]:pointer-events-none",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx(
      TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      }
    )
  ] });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      ),
      ...props
    }
  );
}
function AppContent({
  variant = "header",
  children,
  ...props
}) {
  if (variant === "sidebar") {
    return /* @__PURE__ */ jsx(SidebarInset, { ...props, children });
  }
  return /* @__PURE__ */ jsx(
    "main",
    {
      className: "mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl",
      ...props,
      children
    }
  );
}
const prefersDark = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
const setCookie = (name, value, days = 365) => {
  if (typeof document === "undefined") {
    return;
  }
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};
const applyTheme = (appearance) => {
  const isDark = appearance === "dark" || appearance === "system" && prefersDark();
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
};
const mediaQuery = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return window.matchMedia("(prefers-color-scheme: dark)");
};
const handleSystemThemeChange = () => {
  const currentAppearance = localStorage.getItem("appearance");
  applyTheme(currentAppearance || "system");
};
function useAppearance() {
  const [appearance, setAppearance] = useState("system");
  const updateAppearance = useCallback((mode) => {
    setAppearance(mode);
    localStorage.setItem("appearance", mode);
    setCookie("appearance", mode);
    applyTheme(mode);
  }, []);
  useEffect(() => {
    const savedAppearance = localStorage.getItem(
      "appearance"
    );
    updateAppearance(savedAppearance || "system");
    return () => mediaQuery()?.removeEventListener(
      "change",
      handleSystemThemeChange
    );
  }, [updateAppearance]);
  return { appearance, updateAppearance };
}
const modeButton = (appearance) => {
  const baseClass = "cursor-pointer text-secondary-foreground hover:text-primary";
  switch (appearance) {
    case "light":
      return /* @__PURE__ */ jsx(Moon, { className: baseClass });
    case "dark":
      return /* @__PURE__ */ jsx(Sun, { className: baseClass });
    default:
      return /* @__PURE__ */ jsx(Monitor, { className: baseClass });
  }
};
function AppMode({ className }) {
  const { appearance, updateAppearance } = useAppearance();
  const { isQuizMode, setIsQuizMode } = useQuizMode();
  const isMobile = useIsMobile();
  const toggleMode = () => {
    if (appearance === "light") updateAppearance("dark");
    else if (appearance === "dark") updateAppearance("system");
    else updateAppearance("light");
  };
  const handleMcqToggle = () => {
    setIsQuizMode(!isQuizMode);
  };
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-2 ${className}`, children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "default",
        size: isMobile ? "xs" : "sm",
        onClick: handleMcqToggle,
        children: isQuizMode ? "Study" : "Quiz"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: toggleMode,
        variant: "link",
        size: "icon",
        className: "mx-2 size-6",
        asChild: true,
        children: modeButton(appearance)
      }
    )
  ] });
}
function AppShell({ children, variant = "sidebar" }) {
  const isOpen = usePage().props.sidebarOpen;
  if (variant === "header") {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen w-full flex-col", children });
  }
  return /* @__PURE__ */ jsx(SidebarProvider, { defaultOpen: isOpen, children });
}
function Icon({
  iconNode: IconComponent,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(IconComponent, { className: cn("h-4 w-4", className), ...props });
}
function NavFooter({
  items,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SidebarGroup,
    {
      ...props,
      className: `group-data-[collapsible=icon]:p-0 ${className || ""}`,
      children: /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: items.map((item) => /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(
        SidebarMenuButton,
        {
          asChild: true,
          className: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",
          children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: resolveUrl(item.href),
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                item.icon && /* @__PURE__ */ jsx(
                  Icon,
                  {
                    iconNode: item.icon,
                    className: "h-5 w-5"
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: item.title })
              ]
            }
          )
        }
      ) }, item.title)) }) })
    }
  );
}
function isActiveRoute(currentUrl, targetUrl) {
  const clean = (url) => url.replace(/\/+$/, "") || "/";
  const current = clean(currentUrl);
  const target = clean(targetUrl);
  const exactRoutes = ["/", "/dashboard"];
  if (exactRoutes.includes(target)) {
    return current === target;
  }
  return current.startsWith(target + "/") || current === target;
}
function NavMain({
  items = [],
  navGroupTitle = "Public"
}) {
  const page = usePage();
  return /* @__PURE__ */ jsxs(SidebarGroup, { className: "px-2 py-0", children: [
    /* @__PURE__ */ jsx(SidebarGroupLabel, { children: navGroupTitle }),
    /* @__PURE__ */ jsx(SidebarMenu, { children: items.map(
      (item) => item.subItems && item.subItems.length > 0 ? /* @__PURE__ */ jsxs(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx(
          SidebarMenuButton,
          {
            isActive: isActiveRoute(
              page.url,
              resolveUrl(item.href)
            ),
            asChild: true,
            children: /* @__PURE__ */ jsxs(Link, { href: item.href, prefetch: true, children: [
              item.icon && /* @__PURE__ */ jsx(item.icon, {}),
              /* @__PURE__ */ jsx("span", { children: item.title })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(SidebarMenuAction, { children: /* @__PURE__ */ jsx(MoreHorizontal, {}) }) }),
          /* @__PURE__ */ jsx(DropdownMenuContent, { side: "right", align: "start", children: item.subItems.map((item2) => /* @__PURE__ */ jsx(
            DropdownMenuItem,
            {
              children: /* @__PURE__ */ jsxs(Link, { href: item2.href, prefetch: true, children: [
                item2.icon && /* @__PURE__ */ jsx(item2.icon, {}),
                /* @__PURE__ */ jsx("span", { children: item2.title })
              ] })
            },
            `sidebar-submenu-${item2.title}`
          )) })
        ] })
      ] }, `sidebar-${item.title}`) : /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(
        SidebarMenuButton,
        {
          asChild: true,
          isActive: isActiveRoute(
            page.url,
            resolveUrl(item.href)
          ),
          tooltip: { children: item.title },
          children: /* @__PURE__ */ jsxs(Link, { href: item.href, prefetch: true, children: [
            item.icon && /* @__PURE__ */ jsx(item.icon, {}),
            /* @__PURE__ */ jsx("span", { children: item.title })
          ] })
        }
      ) }, `sidebar-${item.title}`)
    ) })
  ] });
}
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
function useInitials() {
  return useCallback((fullName) => {
    const names = fullName.trim().split(" ");
    if (names.length === 0) return "";
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    const firstInitial = names[0].charAt(0);
    const lastInitial = names[names.length - 1].charAt(0);
    return `${firstInitial}${lastInitial}`.toUpperCase();
  }, []);
}
function UserInfo({
  user,
  showEmail = false
}) {
  const getInitials = useInitials();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 overflow-hidden rounded-full border border-primary-foreground", children: [
      /* @__PURE__ */ jsx(AvatarImage, { src: user.avatar, alt: user.name }),
      /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg bg-primary font-bold text-primary-foreground dark:bg-neutral-700 dark:text-white", children: getInitials(user.name) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
      /* @__PURE__ */ jsx("span", { className: "truncate font-medium", children: user.name }),
      showEmail && /* @__PURE__ */ jsx("span", { className: "truncate text-xs text-muted-foreground", children: user.email })
    ] })
  ] });
}
function useMobileNavigation() {
  return useCallback(() => {
    document.body.style.removeProperty("pointer-events");
  }, []);
}
const edit$2 = (options) => ({
  url: edit$2.url(options),
  method: "get"
});
edit$2.definition = {
  methods: ["get", "head"],
  url: "/settings/profile"
};
edit$2.url = (options) => {
  return edit$2.definition.url + queryParams(options);
};
edit$2.get = (options) => ({
  url: edit$2.url(options),
  method: "get"
});
edit$2.head = (options) => ({
  url: edit$2.url(options),
  method: "head"
});
const editForm$2 = (options) => ({
  action: edit$2.url(options),
  method: "get"
});
editForm$2.get = (options) => ({
  action: edit$2.url(options),
  method: "get"
});
editForm$2.head = (options) => ({
  action: edit$2.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit$2.form = editForm$2;
const update$2 = (options) => ({
  url: update$2.url(options),
  method: "patch"
});
update$2.definition = {
  methods: ["patch"],
  url: "/settings/profile"
};
update$2.url = (options) => {
  return update$2.definition.url + queryParams(options);
};
update$2.patch = (options) => ({
  url: update$2.url(options),
  method: "patch"
});
const updateForm$2 = (options) => ({
  action: update$2.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm$2.patch = (options) => ({
  action: update$2.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
update$2.form = updateForm$2;
const destroy$2 = (options) => ({
  url: destroy$2.url(options),
  method: "delete"
});
destroy$2.definition = {
  methods: ["delete"],
  url: "/settings/profile"
};
destroy$2.url = (options) => {
  return destroy$2.definition.url + queryParams(options);
};
destroy$2.delete = (options) => ({
  url: destroy$2.url(options),
  method: "delete"
});
const destroyForm$2 = (options) => ({
  action: destroy$2.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
destroyForm$2.delete = (options) => ({
  action: destroy$2.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
destroy$2.form = destroyForm$2;
({
  edit: Object.assign(edit$2, edit$2),
  update: Object.assign(update$2, update$2),
  destroy: Object.assign(destroy$2, destroy$2)
});
function UserMenuContent({ user }) {
  const cleanup = useMobileNavigation();
  const handleLogout = () => {
    cleanup();
    router.flushAll();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: /* @__PURE__ */ jsx(UserInfo, { user, showEmail: true }) }) }),
    /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
    /* @__PURE__ */ jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
      Link,
      {
        className: "block w-full",
        href: edit$2(),
        as: "button",
        prefetch: true,
        onClick: cleanup,
        children: [
          /* @__PURE__ */ jsx(Settings, { className: "mr-2" }),
          "Settings"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
    /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
      Link,
      {
        className: "block w-full",
        href: logout(),
        as: "button",
        onClick: handleLogout,
        "data-test": "logout-button",
        children: [
          /* @__PURE__ */ jsx(LogOut, { className: "mr-2" }),
          "Log out"
        ]
      }
    ) })
  ] });
}
function NavUser() {
  const { auth } = usePage().props;
  const { state } = useSidebar();
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      SidebarMenuButton,
      {
        size: "lg",
        className: "group text-sidebar-foreground data-[state=open]:bg-sidebar-accent",
        "data-test": "sidebar-menu-button",
        children: [
          /* @__PURE__ */ jsx(UserInfo, { user: auth.user }),
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      DropdownMenuContent,
      {
        className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
        align: "end",
        side: isMobile ? "bottom" : state === "collapsed" ? "left" : "bottom",
        children: /* @__PURE__ */ jsx(UserMenuContent, { user: auth.user })
      }
    )
  ] }) }) });
}
const index$1 = (options) => ({
  url: index$1.url(options),
  method: "get"
});
index$1.definition = {
  methods: ["get", "head"],
  url: "/admin/topics"
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
  url: "/admin/topics/create"
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
  url: "/admin/topics"
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
  url: "/admin/topics/{topic}"
};
show$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { topic: args };
  }
  if (Array.isArray(args)) {
    args = {
      topic: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    topic: args.topic
  };
  return show$1.definition.url.replace("{topic}", parsedArgs.topic.toString()).replace(/\/+$/, "") + queryParams(options);
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
  url: "/admin/topics/{topic}/edit"
};
edit$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { topic: args };
  }
  if (Array.isArray(args)) {
    args = {
      topic: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    topic: args.topic
  };
  return edit$1.definition.url.replace("{topic}", parsedArgs.topic.toString()).replace(/\/+$/, "") + queryParams(options);
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
  url: "/admin/topics/{topic}"
};
update$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { topic: args };
  }
  if (Array.isArray(args)) {
    args = {
      topic: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    topic: args.topic
  };
  return update$1.definition.url.replace("{topic}", parsedArgs.topic.toString()).replace(/\/+$/, "") + queryParams(options);
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
  url: "/admin/topics/{topic}"
};
destroy$1.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { topic: args };
  }
  if (Array.isArray(args)) {
    args = {
      topic: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    topic: args.topic
  };
  return destroy$1.definition.url.replace("{topic}", parsedArgs.topic.toString()).replace(/\/+$/, "") + queryParams(options);
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
const topics = {
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
  url: "/admin/seo"
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
  url: "/admin/seo/create"
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
  url: "/admin/seo"
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
  url: "/admin/seo/{seo}"
};
show.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { seo: args };
  }
  if (Array.isArray(args)) {
    args = {
      seo: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    seo: args.seo
  };
  return show.definition.url.replace("{seo}", parsedArgs.seo.toString()).replace(/\/+$/, "") + queryParams(options);
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
  url: "/admin/seo/{seo}/edit"
};
edit.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { seo: args };
  }
  if (Array.isArray(args)) {
    args = {
      seo: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    seo: args.seo
  };
  return edit.definition.url.replace("{seo}", parsedArgs.seo.toString()).replace(/\/+$/, "") + queryParams(options);
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
  url: "/admin/seo/{seo}"
};
update.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { seo: args };
  }
  if (Array.isArray(args)) {
    args = {
      seo: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    seo: args.seo
  };
  return update.definition.url.replace("{seo}", parsedArgs.seo.toString()).replace(/\/+$/, "") + queryParams(options);
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
  url: "/admin/seo/{seo}"
};
destroy.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { seo: args };
  }
  if (Array.isArray(args)) {
    args = {
      seo: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    seo: args.seo
  };
  return destroy.definition.url.replace("{seo}", parsedArgs.seo.toString()).replace(/\/+$/, "") + queryParams(options);
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
const seo = {
  index: Object.assign(index, index),
  create: Object.assign(create, create),
  store: Object.assign(store, store),
  show: Object.assign(show, show),
  edit: Object.assign(edit, edit),
  update: Object.assign(update, update),
  destroy: Object.assign(destroy, destroy)
};
const dashboard = (options) => ({
  url: dashboard.url(options),
  method: "get"
});
dashboard.definition = {
  methods: ["get", "head"],
  url: "/admin/dashboard"
};
dashboard.url = (options) => {
  return dashboard.definition.url + queryParams(options);
};
dashboard.get = (options) => ({
  url: dashboard.url(options),
  method: "get"
});
dashboard.head = (options) => ({
  url: dashboard.url(options),
  method: "head"
});
const dashboardForm = (options) => ({
  action: dashboard.url(options),
  method: "get"
});
dashboardForm.get = (options) => ({
  action: dashboard.url(options),
  method: "get"
});
dashboardForm.head = (options) => ({
  action: dashboard.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
dashboard.form = dashboardForm;
const runSeoUpdate = (options) => ({
  url: runSeoUpdate.url(options),
  method: "get"
});
runSeoUpdate.definition = {
  methods: ["get", "head"],
  url: "/admin/run-seo-update"
};
runSeoUpdate.url = (options) => {
  return runSeoUpdate.definition.url + queryParams(options);
};
runSeoUpdate.get = (options) => ({
  url: runSeoUpdate.url(options),
  method: "get"
});
runSeoUpdate.head = (options) => ({
  url: runSeoUpdate.url(options),
  method: "head"
});
const runSeoUpdateForm = (options) => ({
  action: runSeoUpdate.url(options),
  method: "get"
});
runSeoUpdateForm.get = (options) => ({
  action: runSeoUpdate.url(options),
  method: "get"
});
runSeoUpdateForm.head = (options) => ({
  action: runSeoUpdate.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
runSeoUpdate.form = runSeoUpdateForm;
({
  dashboard: Object.assign(dashboard, dashboard),
  testingServices: Object.assign(testingServices, testingServices),
  departments: Object.assign(departments, departments),
  subjects: Object.assign(subjects, subjects),
  topics: Object.assign(topics, topics),
  papers: Object.assign(papers, papers),
  mcqs: Object.assign(mcqs, mcqs),
  seo: Object.assign(seo, seo),
  runSeoUpdate: Object.assign(runSeoUpdate, runSeoUpdate)
});
const adminMainNavItems = [
  {
    title: "Dashboard",
    href: dashboard(),
    icon: LayoutGrid
  },
  {
    title: "Department",
    href: departments.index(),
    icon: Building,
    subItems: [
      {
        title: "Add Department",
        href: departments.create()
      }
    ]
  },
  {
    title: "Testing Services",
    href: testingServices.index(),
    icon: Paperclip,
    subItems: [
      {
        title: "Add Testing Service",
        href: testingServices.create()
      }
    ]
  },
  {
    title: "Subjets",
    href: subjects.index(),
    icon: FileBox,
    subItems: [
      {
        title: "Add Subjects",
        href: subjects.create()
      }
    ]
  },
  {
    title: "Papers",
    href: papers.index(),
    icon: Clipboard,
    subItems: [
      {
        title: "Add Papers",
        href: papers.create()
      }
    ]
  },
  {
    title: "MCQs",
    href: mcqs.index(),
    icon: ShieldQuestion,
    subItems: [
      {
        title: "Add MCQ",
        href: mcqs.create()
      }
    ]
  },
  {
    title: "SEO Meta Info",
    href: seo.index(),
    icon: Tag,
    subItems: [
      {
        title: "Add SEO Meta Info",
        href: seo.create()
      }
    ]
  }
];
const adminFooterNavItems = [
  {
    title: "Trash Bin",
    href: "#",
    icon: Trash
  }
];
const generalNavItems = [
  {
    title: "About Us",
    href: aboutUs()
  },
  {
    title: "Contact Us",
    href: contactUs()
  },
  {
    title: "Help Center",
    href: helpCenter()
  },
  {
    title: "Privacy Policy",
    href: privacyPolicy()
  },
  {
    title: "Terms of Service",
    href: termsOfService()
  },
  {
    title: "Join Us",
    href: joinUs()
  }
];
const subjectsNavItems = [
  // {
  //     title: 'General Knowledge',
  //     href: `${subjects.index().url}/general-knowledge`,
  // },
  {
    title: "Current Affairs",
    href: subject.show({ subject: "current-affairs-mcqs" })
  },
  {
    title: "Everyday Science",
    href: subject.show({ subject: "everyday-science-mcqs" })
  },
  {
    title: "Computer",
    href: subject.show({ subject: "computer-mcqs" })
  },
  {
    title: "English",
    href: subject.show({ subject: "english-mcqs" })
  },
  {
    title: "All Subjects",
    href: subject.index()
  }
];
const papersNavItems = [
  {
    title: "Latest Papers",
    href: papers$1.category.index("latest-papers")
  },
  {
    title: "Past Papers",
    href: papers$1.category.index("past-papers")
  },
  {
    title: "Upcoming Papers",
    href: papers$1.category.index("upcoming-papers")
  },
  {
    title: "All Papers",
    href: papers$1.index()
  }
];
const publicMainNavItems = [
  {
    title: "Home",
    href: home(),
    icon: Home
  },
  {
    title: "Subjects",
    href: subject.index(),
    icon: FileBox,
    subItems: subjectsNavItems
  },
  {
    title: "Papers",
    href: papers$1.index(),
    icon: Clipboard,
    subItems: papersNavItems
  },
  {
    title: "About Us",
    href: aboutUs(),
    icon: BookOpen,
    subItems: generalNavItems
  },
  {
    title: "Demo",
    href: demo(),
    icon: NotepadText
  }
];
function AppLogo({ ...props }) {
  return /* @__PURE__ */ jsx("img", { src: "/logo.svg", alt: "Pak Quiz", ...props });
}
function AppSidebar() {
  const { auth } = usePage().props;
  const { url } = usePage();
  const homepage = url.includes("admin") ? dashboard() : home();
  const isDashboard = url === dashboard().url;
  return /* @__PURE__ */ jsxs(
    Sidebar,
    {
      collapsible: isDashboard ? "icon" : "offcanvas",
      variant: "sidebar",
      children: [
        /* @__PURE__ */ jsx(SidebarHeader, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(
          SidebarMenuButton,
          {
            size: "lg",
            asChild: true,
            className: "active:bg-transparent",
            children: /* @__PURE__ */ jsx(
              Link,
              {
                href: homepage,
                prefetch: true,
                className: "flex justify-center hover:bg-transparent",
                children: /* @__PURE__ */ jsx(AppLogo, { className: "size-28" })
              }
            )
          }
        ) }) }) }),
        /* @__PURE__ */ jsxs(SidebarContent, { children: [
          /* @__PURE__ */ jsx(
            NavMain,
            {
              navGroupTitle: "Public",
              items: publicMainNavItems
            }
          ),
          auth.user && /* @__PURE__ */ jsx(NavMain, { navGroupTitle: "Admin", items: adminMainNavItems })
        ] }),
        /* @__PURE__ */ jsx(SidebarFooter, { children: auth.user && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            NavFooter,
            {
              items: adminFooterNavItems,
              className: "mt-auto"
            }
          ),
          /* @__PURE__ */ jsx(NavUser, {})
        ] }) })
      ]
    }
  );
}
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
    }
  );
}
function Breadcrumbs({
  breadcrumbs
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: breadcrumbs.length > 0 && /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsx(BreadcrumbList, { children: breadcrumbs.map((item, index2) => {
    const isLast = index2 === breadcrumbs.length - 1;
    return /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: isLast ? /* @__PURE__ */ jsx(BreadcrumbPage, { children: item.title }) : /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: item.href, children: item.title }) }) }),
      !isLast && /* @__PURE__ */ jsx(BreadcrumbSeparator, {})
    ] }, `breadcrumbs-${index2}`);
  }) }) }) });
}
function AppSidebarHeader({
  breadcrumbs = []
}) {
  return /* @__PURE__ */ jsx("header", { className: "flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }),
    /* @__PURE__ */ jsx(Breadcrumbs, { breadcrumbs })
  ] }) });
}
function PublicFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-6 md:grid md:grid-cols-5 md:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 flex items-center space-x-3", children: /* @__PURE__ */ jsx(AppLogo, {}) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "AI-powered MCQ platform for comprehensive exam preparation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-3 font-semibold", children: "Coming Soon Features" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: "AI-Enhanced MCQs" }),
          /* @__PURE__ */ jsx("li", { children: "Mock Tests" }),
          /* @__PURE__ */ jsx("li", { children: "Custom Tests" }),
          /* @__PURE__ */ jsx("li", { children: "Subject-Based Practice" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-3 font-semibold", children: "Papers" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: papersNavItems.map((item, index2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: item.href,
            className: "hover:underline",
            children: item.title
          }
        ) }, index2 + 1)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-3 font-semibold", children: "Subjects" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: subjectsNavItems.map((item, index2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: item.href,
            className: "hover:underline",
            children: item.title
          }
        ) }, index2 + 1)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-3 font-semibold", children: "Support" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: generalNavItems.map((item, index2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: item.href,
            className: "hover:underline",
            children: item.title
          }
        ) }, index2 + 1)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 border-t pt-8 text-center text-sm", children: /* @__PURE__ */ jsx("p", { children: "© 2026 MCQ Master. All rights reserved." }) })
  ] }) });
}
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx(
          ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function PublicNavigationMenu() {
  return /* @__PURE__ */ jsx(NavigationMenu, { viewport: false, className: "hidden lg:block", children: /* @__PURE__ */ jsx(NavigationMenuList, { children: publicMainNavItems.map(
    (item, index2) => !item.subItems ? /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(
      NavigationMenuLink,
      {
        asChild: true,
        className: navigationMenuTriggerStyle(),
        children: /* @__PURE__ */ jsx(Link, { href: item.href, children: item.title })
      }
    ) }, index2) : /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: item.title }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[200px] gap-4", children: /* @__PURE__ */ jsx("li", { children: item.subItems.map((item2, index22) => /* @__PURE__ */ jsx(
        NavigationMenuLink,
        {
          asChild: true,
          children: /* @__PURE__ */ jsx(Link, { href: item2.href, children: item2.title })
        },
        index22 + 1
      )) }) }) })
    ] }, index2)
  ) }) });
}
function PublicHeader() {
  const { auth } = usePage().props;
  const isMobile = useIsMobile();
  const getInitials = useInitials();
  return /* @__PURE__ */ jsx("nav", { className: "sticky top-0 right-0 left-0 z-50 border-b shadow-sm backdrop-blur-lg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between py-2 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(SidebarTrigger, { className: "ms-4 flex items-center transition-all md:left-0 xl:absolute" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
      Link,
      {
        href: home(),
        prefetch: true,
        children: /* @__PURE__ */ jsx(AppLogo, { className: "h-12 object-contain" })
      }
    ) }),
    /* @__PURE__ */ jsx(PublicNavigationMenu, {}),
    /* @__PURE__ */ jsxs("div", { className: "me-4 flex items-center space-x-4", children: [
      auth.user ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
          SidebarMenuButton,
          {
            size: "lg",
            className: "focus-visible:ring-0",
            children: [
              /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 overflow-hidden rounded-full", children: [
                /* @__PURE__ */ jsx(
                  AvatarImage,
                  {
                    src: auth.user.avatar,
                    alt: auth.user.name
                  }
                ),
                /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg bg-muted/35", children: getInitials(auth.user.name) })
              ] }),
              !isMobile && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: "grid flex-1 text-left text-sm leading-tight", children: /* @__PURE__ */ jsx("span", { className: "truncate font-medium", children: auth.user.name }) }),
                /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto size-4" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          DropdownMenuContent,
          {
            className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
            align: "end",
            side: "bottom",
            children: /* @__PURE__ */ jsx(UserMenuContent, { user: auth.user })
          }
        )
      ] }) : /* @__PURE__ */ jsx(Link, { href: "/login", className: "text-sm font-semibold hover:underline hover:text-primary", children: "Login" }),
      !isMobile && /* @__PURE__ */ jsx(AppMode, {})
    ] })
  ] }) });
}
function AppSidebarLayout({
  children,
  breadcrumbs = []
}) {
  const { url } = usePage();
  const isAdmin = url.startsWith("/admin") || url.startsWith("/settings");
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxs(AppShell, { variant: "sidebar", children: [
    /* @__PURE__ */ jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxs(AppContent, { variant: "sidebar", children: [
      isAdmin ? /* @__PURE__ */ jsx(AppSidebarHeader, { breadcrumbs }) : /* @__PURE__ */ jsx(PublicHeader, {}),
      children,
      !isAdmin && /* @__PURE__ */ jsx(PublicFooter, {}),
      /* @__PURE__ */ jsx(Toaster, { position: "bottom-center" }),
      isMobile && !isAdmin && /* @__PURE__ */ jsx(AppMode, { className: "fixed right-8 bottom-8 z-50" })
    ] })
  ] });
}
const AppLayout = ({ children, breadcrumbs, ...props }) => /* @__PURE__ */ jsx(AppSidebarLayout, { breadcrumbs, ...props, children });
export {
  AppLayout as A,
  Breadcrumbs as B,
  AppLogo as a,
  edit$2 as e,
  seo as s,
  useAppearance as u
};
