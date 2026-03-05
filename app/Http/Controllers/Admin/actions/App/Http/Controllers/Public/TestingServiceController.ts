import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\TestingServiceController::index
 * @see app/Http/Controllers/Public/TestingServiceController.php:18
 * @route '/testing-services'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/testing-services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\TestingServiceController::index
 * @see app/Http/Controllers/Public/TestingServiceController.php:18
 * @route '/testing-services'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\TestingServiceController::index
 * @see app/Http/Controllers/Public/TestingServiceController.php:18
 * @route '/testing-services'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\TestingServiceController::index
 * @see app/Http/Controllers/Public/TestingServiceController.php:18
 * @route '/testing-services'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\TestingServiceController::index
 * @see app/Http/Controllers/Public/TestingServiceController.php:18
 * @route '/testing-services'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\TestingServiceController::index
 * @see app/Http/Controllers/Public/TestingServiceController.php:18
 * @route '/testing-services'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\TestingServiceController::index
 * @see app/Http/Controllers/Public/TestingServiceController.php:18
 * @route '/testing-services'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Public\TestingServiceController::show
 * @see app/Http/Controllers/Public/TestingServiceController.php:51
 * @route '/testing-services/{testingService}'
 */
export const show = (args: { testingService: string | { slug: string } } | [testingService: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/testing-services/{testingService}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\TestingServiceController::show
 * @see app/Http/Controllers/Public/TestingServiceController.php:51
 * @route '/testing-services/{testingService}'
 */
show.url = (args: { testingService: string | { slug: string } } | [testingService: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testingService: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { testingService: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    testingService: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testingService: typeof args.testingService === 'object'
                ? args.testingService.slug
                : args.testingService,
                }

    return show.definition.url
            .replace('{testingService}', parsedArgs.testingService.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\TestingServiceController::show
 * @see app/Http/Controllers/Public/TestingServiceController.php:51
 * @route '/testing-services/{testingService}'
 */
show.get = (args: { testingService: string | { slug: string } } | [testingService: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\TestingServiceController::show
 * @see app/Http/Controllers/Public/TestingServiceController.php:51
 * @route '/testing-services/{testingService}'
 */
show.head = (args: { testingService: string | { slug: string } } | [testingService: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\TestingServiceController::show
 * @see app/Http/Controllers/Public/TestingServiceController.php:51
 * @route '/testing-services/{testingService}'
 */
    const showForm = (args: { testingService: string | { slug: string } } | [testingService: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\TestingServiceController::show
 * @see app/Http/Controllers/Public/TestingServiceController.php:51
 * @route '/testing-services/{testingService}'
 */
        showForm.get = (args: { testingService: string | { slug: string } } | [testingService: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\TestingServiceController::show
 * @see app/Http/Controllers/Public/TestingServiceController.php:51
 * @route '/testing-services/{testingService}'
 */
        showForm.head = (args: { testingService: string | { slug: string } } | [testingService: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const TestingServiceController = { index, show }

export default TestingServiceController