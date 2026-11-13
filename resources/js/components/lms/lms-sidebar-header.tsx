import { SidebarMenuButton, SidebarTrigger } from '@/components/ui/sidebar';
import { BreadcrumbItem, SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Bell, Search } from 'lucide-react';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '../ui/input-group';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { useIsMobile } from '@/hooks/use-mobile';
import { UserMenuContent } from '../user-menu-content';

interface LmsSidebarHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function LmsSidebarHeader({ breadcrumbs }: LmsSidebarHeaderProps) {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    const isMobile = useIsMobile();
    return (
        <header className="flex h-16 shrink-0 items-center gap-4 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex w-full items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <InputGroup className="w-full max-w-md border-none bg-primary/5 focus-within:ring-1 focus-within:ring-primary/50">
                    <InputGroupInput placeholder="Search for subjects, topics, or MCQs..." />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    {/* <InputGroupAddon align="inline-end">
                        12 results
                    </InputGroupAddon> */}
                </InputGroup>
                {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
            </div>

            <div className="relative">
                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-xs text-white"></span>
                <Bell className="size-5 md:size-6" />
            </div>

            <Button className="rounded-full font-semibold">Start Quiz</Button>

            <div className="border-l border-sidebar-border pl-2 ml-2">
                {/* <NavUser /> */}
                {auth.user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="default"
                                className="focus-visible:ring-0"
                            >
                                {!isMobile && (
                                    <>
                                        <div className="grid min-w-32 flex-1 text-left text-sm leading-tight">
                                            <span className="font-medium">
                                                {auth.user.name}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                CSS Aspirant
                                            </span>
                                        </div>
                                        {/* <ChevronsUpDown className="ml-auto size-4" /> */}
                                    </>
                                )}
                                <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                                    <AvatarImage
                                        src={auth.user.avatar}
                                        alt={auth.user.name}
                                    />
                                    <AvatarFallback className="rounded-lg bg-muted/35">
                                        {getInitials(auth.user.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                            align="end"
                            side="bottom"
                        >
                            <UserMenuContent user={auth.user} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>

            {/* <a
                href="/"
                className="absolute right-2 flex items-center gap-2 text-base font-bold text-white md:text-lg lg:right-8"
            >
                <Home className="size-5 md:size-6" />
                Homepage
            </a> */}
        </header>
    );
}
