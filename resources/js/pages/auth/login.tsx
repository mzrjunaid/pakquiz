import { Eye, EyeOff, Lock, Mail, Menu, Phone } from 'lucide-react';
import { useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

import AppLogo from '@/components/app-logo';
import { Form, Head } from '@inertiajs/react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    const loginRoute = store();

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Head title="Login" />

            <div className="grid min-h-screen lg:grid-cols-2">
                {/* ---------------------------------------------------------------- */}
                {/* LEFT SIDE */}
                {/* ---------------------------------------------------------------- */}

                <section className="relative hidden overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200
                
                dark:from-stone-950 dark:via-stone-900 dark:to-orange-950/50
                 lg:flex">
                    {/* Pattern */}

                    <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full bg-[radial-gradient(#c74d1f_0.6px,transparent_0.6px)] [background-size:24px_24px]" />
                    </div>

                    <div className="relative z-10 flex flex-col justify-center px-20">
                        {/* Logo */}

                        <div className="mb-10 flex items-center gap-4">
                            <AppLogo className="h-36 w-auto" />
                        </div>

                        <h1 className="max-w-xl text-5xl leading-tight font-extrabold">
                            Master your studies with the ultimate quiz platform.
                        </h1>

                        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                            Join thousands of students and teachers in
                            Pakistan's most engaging educational ecosystem.
                            Learning has never been this rewarding.
                        </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-primary/10 to-transparent" />
                </section>

                {/* ---------------------------------------------------------------- */}
                {/* RIGHT SIDE */}
                {/* ---------------------------------------------------------------- */}

                <section className="flex flex-col bg-white dark:bg-background">
                    {/* Navbar */}

                    <nav className="flex items-center justify-between px-8 py-6">
                        <AppLogo className="h-14 w-auto lg:hidden" />

                        <NavigationMenu className="ml-auto hidden lg:flex">
                            <NavigationMenuList className="flex items-center gap-8">
                                <NavigationMenuItem>
                                    <a href="/papers" className="text-sm text-muted-foreground transition hover:text-primary">
                                        Explore
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="/about-us" className="text-sm text-muted-foreground transition hover:text-primary">
                                        About
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="/help-center" className="text-sm text-muted-foreground transition hover:text-primary">
                                        Help
                                    </a>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* <div className="ml-auto hidden items-center gap-8 lg:flex">
                            <a
                                href="#"
                                className="text-sm text-muted-foreground transition hover:text-primary"
                            >
                                Explore
                            </a>

                            <a
                                href="#"
                                className="text-sm text-muted-foreground transition hover:text-primary"
                            >
                                About
                            </a>

                            <a
                                href="#"
                                className="text-sm text-muted-foreground transition hover:text-primary"
                            >
                                Help
                            </a>
                        </div> */}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="ml-auto lg:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="min-w-36 border-none bg-white p-2 shadow-lg">
                                <DropdownMenuItem>
                                    <a href="/papers" className="text-sm text-muted-foreground transition hover:text-primary">
                                        Explore
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="/about-us" className="text-sm text-muted-foreground transition hover:text-primary">
                                        About
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="/help-center" className="text-sm text-muted-foreground transition hover:text-primary">
                                        Help
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>

                    {/* Form */}

                    <main className="flex flex-1 items-center justify-center px-6 py-12">
                        <div className="w-full max-w-md">
                            <div className="mb-10">
                                <h1 className="text-4xl font-bold">
                                    Welcome Back
                                </h1>

                                <p className="mt-2 text-muted-foreground">
                                    Enter your details to access your account
                                </p>
                            </div>

                            <Form
                                action={loginRoute.url}
                                method={loginRoute.method}
                                resetOnSuccess={['password']}
                                className="space-y-6"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        {' '}
                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email address
                                            </Label>

                                            <div className="relative">
                                                <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    autoFocus
                                                    autoComplete="email"
                                                    placeholder="email@example.com"
                                                    className="pl-10"
                                                    tabIndex={1}
                                                />
                                            </div>

                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>
                                        {/* Password */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="password">
                                                    Password
                                                </Label>

                                                {canResetPassword && (
                                                    <TextLink
                                                        href={request()}
                                                        className="text-sm font-semibold hover:text-primary"
                                                        tabIndex={5}
                                                    >
                                                        Forgot password?
                                                    </TextLink>
                                                )}
                                            </div>

                                            <div className="relative">
                                                <Lock className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                                <Input
                                                    id="password"
                                                    name="password"
                                                    required
                                                    autoComplete="current-password"
                                                    placeholder="Password"
                                                    tabIndex={2}
                                                    type={
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    className="pr-12 pl-10"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword,
                                                        )
                                                    }
                                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="h-5 w-5" />
                                                    ) : (
                                                        <Eye className="h-5 w-5" />
                                                    )}
                                                </button>
                                            </div>

                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>
                                        {/* Remember */}
                                        <div className="flex items-center space-x-3">
                                            <Checkbox
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                            />

                                            <Label htmlFor="remember">
                                                Remember me
                                            </Label>
                                        </div>
                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="h-12 w-full cursor-pointer text-base font-semibold"
                                            tabIndex={4}
                                        >
                                            {processing && (
                                                <Spinner className="mr-2" />
                                            )}
                                            Log in
                                        </Button>
                                        {/* Status */}
                                        {status && (
                                            <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                                                {status}
                                            </div>
                                        )}
                                        {/* Register */}
                                        {canRegister && (
                                            <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                                                Don't have an account?{' '}
                                                <TextLink
                                                    href={register()}
                                                    className="font-semibold hover:text-primary"
                                                >
                                                    Sign up for free
                                                </TextLink>
                                            </div>
                                        )}
                                        {/* Support */}
                                        <div className="pt-4 text-center">
                                            <a
                                                href="/contact-us"
                                                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition group hover:text-primary"
                                            >
                                                <Phone className="mx-auto h-5 w-5 text-muted-foreground group-hover:text-primary" />
                                                Contact Support
                                            </a>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </div>
                    </main>

                    {/* Footer */}

                    <footer className="px-8 py-6">
                        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
                            <p>
                                &copy; {new Date().getFullYear()} PakQuiz Platform.
                            </p>

                            <div className="flex gap-6">
                                <a href="/privacy-policy" className="hover:text-primary">
                                    Privacy
                                </a>

                                <a href="/terms-of-service" className="hover:text-primary">
                                    Terms
                                </a>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        </>
    );
}