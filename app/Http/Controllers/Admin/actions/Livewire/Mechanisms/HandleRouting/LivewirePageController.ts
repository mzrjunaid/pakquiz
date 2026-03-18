import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
const LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
    const LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
        LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
        LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.form = LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
const LivewirePageControllera667167ce71b66453a9402d37ed90dab = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
    method: 'get',
})

LivewirePageControllera667167ce71b66453a9402d37ed90dab.definition = {
    methods: ["get","head"],
    url: '/mcqs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
LivewirePageControllera667167ce71b66453a9402d37ed90dab.url = (options?: RouteQueryOptions) => {
    return LivewirePageControllera667167ce71b66453a9402d37ed90dab.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
LivewirePageControllera667167ce71b66453a9402d37ed90dab.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
LivewirePageControllera667167ce71b66453a9402d37ed90dab.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
    const LivewirePageControllera667167ce71b66453a9402d37ed90dabForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
        LivewirePageControllera667167ce71b66453a9402d37ed90dabForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
        LivewirePageControllera667167ce71b66453a9402d37ed90dabForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllera667167ce71b66453a9402d37ed90dab.form = LivewirePageControllera667167ce71b66453a9402d37ed90dabForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
const LivewirePageControllerce7095846e44f3351e72af6a0250b6ce = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
    method: 'get',
})

LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.definition = {
    methods: ["get","head"],
    url: '/mcqs/{mcq}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mcq: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { mcq: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    mcq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        mcq: typeof args.mcq === 'object'
                ? args.mcq.slug
                : args.mcq,
                }

    return LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.definition.url
            .replace('{mcq}', parsedArgs.mcq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.get = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.head = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
    const LivewirePageControllerce7095846e44f3351e72af6a0250b6ceForm = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
        LivewirePageControllerce7095846e44f3351e72af6a0250b6ceForm.get = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
        LivewirePageControllerce7095846e44f3351e72af6a0250b6ceForm.head = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.form = LivewirePageControllerce7095846e44f3351e72af6a0250b6ceForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
const LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
    method: 'get',
})

LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.definition = {
    methods: ["get","head"],
    url: '/papers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url = (options?: RouteQueryOptions) => {
    return LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
    const LivewirePageController6e15e116cf099a66c2d8a70fb6714d7cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
        LivewirePageController6e15e116cf099a66c2d8a70fb6714d7cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
        LivewirePageController6e15e116cf099a66c2d8a70fb6714d7cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.form = LivewirePageController6e15e116cf099a66c2d8a70fb6714d7cForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
const LivewirePageController48d2903b8d529b5544ce8c581ca795fe = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
    method: 'get',
})

LivewirePageController48d2903b8d529b5544ce8c581ca795fe.definition = {
    methods: ["get","head"],
    url: '/papers/{category?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "category",
        ])

    const parsedArgs = {
                        category: args?.category,
                }

    return LivewirePageController48d2903b8d529b5544ce8c581ca795fe.definition.url
            .replace('{category?}', parsedArgs.category?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
LivewirePageController48d2903b8d529b5544ce8c581ca795fe.get = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
LivewirePageController48d2903b8d529b5544ce8c581ca795fe.head = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
    const LivewirePageController48d2903b8d529b5544ce8c581ca795feForm = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
        LivewirePageController48d2903b8d529b5544ce8c581ca795feForm.get = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
        LivewirePageController48d2903b8d529b5544ce8c581ca795feForm.head = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController48d2903b8d529b5544ce8c581ca795fe.form = LivewirePageController48d2903b8d529b5544ce8c581ca795feForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
const LivewirePageController7618f0a5ae0361f166b66b06c4f43d72 = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'get',
})

LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.definition = {
    methods: ["get","head"],
    url: '/papers/{paper}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { paper: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { paper: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    paper: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        paper: typeof args.paper === 'object'
                ? args.paper.slug
                : args.paper,
                }

    return LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.definition.url
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.get = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.head = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
    const LivewirePageController7618f0a5ae0361f166b66b06c4f43d72Form = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
        LivewirePageController7618f0a5ae0361f166b66b06c4f43d72Form.get = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
        LivewirePageController7618f0a5ae0361f166b66b06c4f43d72Form.head = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.form = LivewirePageController7618f0a5ae0361f166b66b06c4f43d72Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
const LivewirePageController791d577b424c842c4294a0bbd45894cc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
    method: 'get',
})

LivewirePageController791d577b424c842c4294a0bbd45894cc.definition = {
    methods: ["get","head"],
    url: '/subjects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
LivewirePageController791d577b424c842c4294a0bbd45894cc.url = (options?: RouteQueryOptions) => {
    return LivewirePageController791d577b424c842c4294a0bbd45894cc.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
LivewirePageController791d577b424c842c4294a0bbd45894cc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
LivewirePageController791d577b424c842c4294a0bbd45894cc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
    const LivewirePageController791d577b424c842c4294a0bbd45894ccForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
        LivewirePageController791d577b424c842c4294a0bbd45894ccForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
        LivewirePageController791d577b424c842c4294a0bbd45894ccForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController791d577b424c842c4294a0bbd45894cc.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController791d577b424c842c4294a0bbd45894cc.form = LivewirePageController791d577b424c842c4294a0bbd45894ccForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
const LivewirePageController9a0156ea987305ce66c22aa998b07832 = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
    method: 'get',
})

LivewirePageController9a0156ea987305ce66c22aa998b07832.definition = {
    methods: ["get","head"],
    url: '/{subject}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
LivewirePageController9a0156ea987305ce66c22aa998b07832.url = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { subject: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    subject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subject: typeof args.subject === 'object'
                ? args.subject.slug
                : args.subject,
                }

    return LivewirePageController9a0156ea987305ce66c22aa998b07832.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
LivewirePageController9a0156ea987305ce66c22aa998b07832.get = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
LivewirePageController9a0156ea987305ce66c22aa998b07832.head = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
    const LivewirePageController9a0156ea987305ce66c22aa998b07832Form = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
        LivewirePageController9a0156ea987305ce66c22aa998b07832Form.get = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
        LivewirePageController9a0156ea987305ce66c22aa998b07832Form.head = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController9a0156ea987305ce66c22aa998b07832.form = LivewirePageController9a0156ea987305ce66c22aa998b07832Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
const LivewirePageController4fc803be20f9e76f15bbba471094c820 = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
    method: 'get',
})

LivewirePageController4fc803be20f9e76f15bbba471094c820.definition = {
    methods: ["get","head"],
    url: '/{subject}/{topic}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
LivewirePageController4fc803be20f9e76f15bbba471094c820.url = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    subject: args[0],
                    topic: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subject: typeof args.subject === 'object'
                ? args.subject.slug
                : args.subject,
                                topic: typeof args.topic === 'object'
                ? args.topic.slug
                : args.topic,
                }

    return LivewirePageController4fc803be20f9e76f15bbba471094c820.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
LivewirePageController4fc803be20f9e76f15bbba471094c820.get = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
LivewirePageController4fc803be20f9e76f15bbba471094c820.head = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
    const LivewirePageController4fc803be20f9e76f15bbba471094c820Form = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
        LivewirePageController4fc803be20f9e76f15bbba471094c820Form.get = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
        LivewirePageController4fc803be20f9e76f15bbba471094c820Form.head = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController4fc803be20f9e76f15bbba471094c820.form = LivewirePageController4fc803be20f9e76f15bbba471094c820Form

const LivewirePageController = {
    '/': LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9,
    '/mcqs': LivewirePageControllera667167ce71b66453a9402d37ed90dab,
    '/mcqs/{mcq}': LivewirePageControllerce7095846e44f3351e72af6a0250b6ce,
    '/papers': LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c,
    '/papers/{category?}': LivewirePageController48d2903b8d529b5544ce8c581ca795fe,
    '/papers/{paper}': LivewirePageController7618f0a5ae0361f166b66b06c4f43d72,
    '/subjects': LivewirePageController791d577b424c842c4294a0bbd45894cc,
    '/{subject}': LivewirePageController9a0156ea987305ce66c22aa998b07832,
    '/{subject}/{topic}': LivewirePageController4fc803be20f9e76f15bbba471094c820,
}

export default LivewirePageController