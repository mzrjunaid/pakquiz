import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { isActiveRoute } from '@/lib/route-utils';
import { resolveUrl } from '@/lib/utils';
import { type NavItems } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { MoreHorizontal } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function NavMain({
    items = [],
    navGroupTitle = 'Public',
}: {
    items: NavItems[];
    navGroupTitle: string;
}) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{navGroupTitle}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) =>
                    item.subItems && item.subItems.length > 0 ? (
                        <SidebarMenuItem key={`sidebar-${item.title}`}>
                            <SidebarMenuButton
                                isActive={isActiveRoute(
                                    page.url,
                                    resolveUrl(item.href),
                                )}
                                asChild
                            >
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuAction>
                                        <MoreHorizontal />
                                    </SidebarMenuAction>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side="right" align="start">
                                    {item.subItems.map((item) => (
                                        <DropdownMenuItem
                                            key={`sidebar-submenu-${item.title}`}
                                        >
                                            <Link href={item.href} prefetch>
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    ) : (
                        <SidebarMenuItem key={`sidebar-${item.title}`}>
                            <SidebarMenuButton
                                asChild
                                isActive={isActiveRoute(
                                    page.url,
                                    resolveUrl(item.href),
                                )}
                                tooltip={{ children: item.title }}
                            >
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ),
                )}
            </SidebarMenu>
        </SidebarGroup>
    );
}
