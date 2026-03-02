function breadcrumb(currentUrl) {
  const clean = (url) => url.split("?")[0].replace(/\/+$/, "");
  const segments = clean(currentUrl).split("/").filter(Boolean);
  const breadcrumbs = [];
  let accumulatedPath = "";
  for (const segment of segments) {
    if (segment === "admin") {
      breadcrumbs.push({
        title: "Admin",
        href: "/admin/dashboard"
      });
      accumulatedPath = "/admin";
      continue;
    }
    accumulatedPath += `/${segment}`;
    breadcrumbs.push({
      title: formatTitle(segment),
      href: accumulatedPath
    });
  }
  return breadcrumbs;
}
function formatTitle(segment) {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
export {
  breadcrumb as b
};
