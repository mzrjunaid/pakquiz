import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import { adminFooterNavItems, adminMainNavItems } from '@/config/navigation';
import { dashboard } from '@/routes/admin';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { auth } = usePage<SharedData>().props;
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link
                                href={dashboard()}
                                prefetch
                                className="flex justify-center"
                            >
                                <AppLogo className="size-28" />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain navGroupTitle="Admin" items={adminMainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {auth.user && (
                    <NavFooter
                        items={adminFooterNavItems}
                        className="mt-auto"
                    />
                )}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
