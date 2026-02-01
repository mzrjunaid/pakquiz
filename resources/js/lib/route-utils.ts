export function isActiveRoute(currentUrl: string, targetUrl: string) {
    const clean = (url: string) => url.replace(/\/+$/, '') || '/';

    const current = clean(currentUrl);
    const target = clean(targetUrl);

    // exact-only routes
    const exactRoutes = ['/', '/dashboard'];

    if (exactRoutes.includes(target)) {
        return current === target;
    }

    // prefix match for others
    return current.startsWith(target + '/') || current === target;
}
