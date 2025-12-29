import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { isActiveRoute } from '@/lib/route-utils';
import { resolveUrl } from '@/lib/utils';
import { type NavItems } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from './ui/collapsible';

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
                        <Collapsible
                            defaultOpen
                            className="group/collapsible"
                            key={item.title}
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton
                                        isActive={isActiveRoute(
                                            page.url,
                                            resolveUrl(item.href),
                                        )}
                                        tooltip={{ children: item.title }}
                                        asChild
                                    >
                                        <Link href={item.href} prefetch>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.subItems.map((item) => (
                                            <SidebarMenuSubItem
                                                key={item.title}
                                            >
                                                <SidebarMenuButton
                                                    asChild
                                                    isActive={isActiveRoute(
                                                        page.url,
                                                        resolveUrl(item.href),
                                                    )}
                                                    tooltip={{
                                                        children: item.title,
                                                    }}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        prefetch
                                                    >
                                                        {item.icon && (
                                                            <item.icon />
                                                        )}
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    ) : (
                        <SidebarMenuItem key={item.title}>
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
