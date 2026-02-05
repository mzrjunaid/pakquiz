import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { publicMainNavItems } from '@/config/public-navigation';
import { Link } from '@inertiajs/react';

export function PublicNavigationMenu() {
    return (
        <NavigationMenu viewport={false} className="hidden lg:block">
            <NavigationMenuList>
                {publicMainNavItems.map((item, index) =>
                    !item.subItems ? (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger>
                                About Us
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-4">
                                    <li>
                                        {item.subItems.map((item, index) => (
                                            <NavigationMenuLink
                                                asChild
                                                key={index + 1}
                                            >
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ),
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
