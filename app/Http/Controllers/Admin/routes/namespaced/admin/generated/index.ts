import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
export const tBPPZppyu1zKVWM0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tBPPZppyu1zKVWM0.url(options),
    method: 'get',
})

tBPPZppyu1zKVWM0.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
tBPPZppyu1zKVWM0.url = (options?: RouteQueryOptions) => {
    return tBPPZppyu1zKVWM0.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
tBPPZppyu1zKVWM0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tBPPZppyu1zKVWM0.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
tBPPZppyu1zKVWM0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tBPPZppyu1zKVWM0.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
tBPPZppyu1zKVWM0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: tBPPZppyu1zKVWM0.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
tBPPZppyu1zKVWM0.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: tBPPZppyu1zKVWM0.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
tBPPZppyu1zKVWM0.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: tBPPZppyu1zKVWM0.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
tBPPZppyu1zKVWM0.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: tBPPZppyu1zKVWM0.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
tBPPZppyu1zKVWM0.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: tBPPZppyu1zKVWM0.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
    const tBPPZppyu1zKVWM0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: tBPPZppyu1zKVWM0.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
        tBPPZppyu1zKVWM0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tBPPZppyu1zKVWM0.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
        tBPPZppyu1zKVWM0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tBPPZppyu1zKVWM0.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
        tBPPZppyu1zKVWM0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: tBPPZppyu1zKVWM0.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
        tBPPZppyu1zKVWM0Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: tBPPZppyu1zKVWM0.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
        tBPPZppyu1zKVWM0Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: tBPPZppyu1zKVWM0.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
        tBPPZppyu1zKVWM0Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: tBPPZppyu1zKVWM0.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin'
 */
        tBPPZppyu1zKVWM0Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tBPPZppyu1zKVWM0.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    tBPPZppyu1zKVWM0.form = tBPPZppyu1zKVWM0Form
const generated = {
    tBPPZppyu1zKVWM0: Object.assign(tBPPZppyu1zKVWM0, tBPPZppyu1zKVWM0),
}

export default generated