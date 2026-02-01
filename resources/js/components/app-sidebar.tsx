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

import {
    adminFooterNavItems,
    adminMainNavItems,
    publicMainNavItems,
} from '@/config/navigation';
import { home } from '@/routes';
import { dashboard } from '@/routes/admin';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { auth } = usePage<SharedData>().props;
    const { url } = usePage();
    const homepage = url.includes('admin') ? dashboard() : home();
    return (
        <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            asChild
                            className="active:bg-transparent"
                        >
                            <Link
                                href={homepage}
                                prefetch
                                className="flex justify-center hover:bg-transparent"
                            >
                                <AppLogo className="size-28" />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain
                    navGroupTitle="Public"
                    items={publicMainNavItems}
                ></NavMain>
                {auth.user && (
                    <NavMain navGroupTitle="Admin" items={adminMainNavItems} />
                )}
            </SidebarContent>

            <SidebarFooter>
                {auth.user && (
                    <>
                        <NavFooter
                            items={adminFooterNavItems}
                            className="mt-auto"
                        />
                        <NavUser />
                    </>
                )}
            </SidebarFooter>
        </Sidebar>
    );
}
