import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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

const LivewirePageController = {
    '/': LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9,
    '/mcqs': LivewirePageControllera667167ce71b66453a9402d37ed90dab,
    '/mcqs/{mcq}': LivewirePageControllerce7095846e44f3351e72af6a0250b6ce,
}

export default LivewirePageController