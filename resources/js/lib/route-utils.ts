export function isActiveRoute(currentUrl: string, targetUrl: string) {
    const clean = (url: string) => url.replace(/\/+$/, '');

    const current = clean(currentUrl).split('/');
    const target = clean(targetUrl).split('/');

    return target.every((segment, index) => {
        return segment === current[index];
    });
}
