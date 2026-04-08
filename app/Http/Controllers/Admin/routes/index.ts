import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
export const demo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: demo.url(options),
    method: 'get',
})

demo.definition = {
    methods: ["get","head"],
    url: '/demo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
demo.url = (options?: RouteQueryOptions) => {
    return demo.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
demo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: demo.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
demo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: demo.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
    const demoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: demo.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
        demoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: demo.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
        demoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: demo.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    demo.form = demoForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
export const aboutUs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUs.url(options),
    method: 'get',
})

aboutUs.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
aboutUs.url = (options?: RouteQueryOptions) => {
    return aboutUs.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
aboutUs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUs.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
aboutUs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: aboutUs.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
    const aboutUsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: aboutUs.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
        aboutUsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aboutUs.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
        aboutUsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aboutUs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    aboutUs.form = aboutUsForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
export const contactUs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactUs.url(options),
    method: 'get',
})

contactUs.definition = {
    methods: ["get","head"],
    url: '/contact-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
contactUs.url = (options?: RouteQueryOptions) => {
    return contactUs.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
contactUs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactUs.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
contactUs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactUs.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
    const contactUsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contactUs.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
        contactUsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactUs.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
        contactUsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactUs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contactUs.form = contactUsForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
export const joinUs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: joinUs.url(options),
    method: 'get',
})

joinUs.definition = {
    methods: ["get","head"],
    url: '/join-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
joinUs.url = (options?: RouteQueryOptions) => {
    return joinUs.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
joinUs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: joinUs.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
joinUs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: joinUs.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
    const joinUsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: joinUs.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
        joinUsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: joinUs.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
        joinUsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: joinUs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    joinUs.form = joinUsForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
export const privacyPolicy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(options),
    method: 'get',
})

privacyPolicy.definition = {
    methods: ["get","head"],
    url: '/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
privacyPolicy.url = (options?: RouteQueryOptions) => {
    return privacyPolicy.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
privacyPolicy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
privacyPolicy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacyPolicy.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
    const privacyPolicyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: privacyPolicy.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
        privacyPolicyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacyPolicy.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
        privacyPolicyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacyPolicy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    privacyPolicy.form = privacyPolicyForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
export const termsOfService = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: termsOfService.url(options),
    method: 'get',
})

termsOfService.definition = {
    methods: ["get","head"],
    url: '/terms-of-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
termsOfService.url = (options?: RouteQueryOptions) => {
    return termsOfService.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
termsOfService.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: termsOfService.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
termsOfService.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: termsOfService.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
    const termsOfServiceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: termsOfService.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
        termsOfServiceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: termsOfService.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
        termsOfServiceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: termsOfService.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    termsOfService.form = termsOfServiceForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
export const helpCenter = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: helpCenter.url(options),
    method: 'get',
})

helpCenter.definition = {
    methods: ["get","head"],
    url: '/help-center',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
helpCenter.url = (options?: RouteQueryOptions) => {
    return helpCenter.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
helpCenter.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: helpCenter.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
helpCenter.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: helpCenter.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
    const helpCenterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: helpCenter.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
        helpCenterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: helpCenter.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
        helpCenterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: helpCenter.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    helpCenter.form = helpCenterForm
/**
* @see \App\Http\Controllers\Public\HomeController::quiz_mode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
export const quiz_mode = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: quiz_mode.url(options),
    method: 'put',
})

quiz_mode.definition = {
    methods: ["put"],
    url: '/set-quiz-mode',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Public\HomeController::quiz_mode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
quiz_mode.url = (options?: RouteQueryOptions) => {
    return quiz_mode.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\HomeController::quiz_mode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
quiz_mode.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: quiz_mode.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Public\HomeController::quiz_mode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
    const quiz_modeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: quiz_mode.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Public\HomeController::quiz_mode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
        quiz_modeForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: quiz_mode.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    quiz_mode.form = quiz_modeForm