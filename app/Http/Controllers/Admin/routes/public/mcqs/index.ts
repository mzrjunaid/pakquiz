import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\McqController::index
 * @see app/Http/Controllers/Public/McqController.php:24
 * @route '/mcqs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/mcqs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\McqController::index
 * @see app/Http/Controllers/Public/McqController.php:24
 * @route '/mcqs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\McqController::index
 * @see app/Http/Controllers/Public/McqController.php:24
 * @route '/mcqs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\McqController::index
 * @see app/Http/Controllers/Public/McqController.php:24
 * @route '/mcqs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\McqController::index
 * @see app/Http/Controllers/Public/McqController.php:24
 * @route '/mcqs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\McqController::index
 * @see app/Http/Controllers/Public/McqController.php:24
 * @route '/mcqs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\McqController::index
 * @see app/Http/Controllers/Public/McqController.php:24
 * @route '/mcqs'
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
* @see \App\Http\Controllers\Public\McqController::show
 * @see app/Http/Controllers/Public/McqController.php:50
 * @route '/mcqs/{mcq}'
 */
export const show = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/mcqs/{mcq}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\McqController::show
 * @see app/Http/Controllers/Public/McqController.php:50
 * @route '/mcqs/{mcq}'
 */
show.url = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{mcq}', parsedArgs.mcq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\McqController::show
 * @see app/Http/Controllers/Public/McqController.php:50
 * @route '/mcqs/{mcq}'
 */
show.get = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\McqController::show
 * @see app/Http/Controllers/Public/McqController.php:50
 * @route '/mcqs/{mcq}'
 */
show.head = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\McqController::show
 * @see app/Http/Controllers/Public/McqController.php:50
 * @route '/mcqs/{mcq}'
 */
    const showForm = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\McqController::show
 * @see app/Http/Controllers/Public/McqController.php:50
 * @route '/mcqs/{mcq}'
 */
        showForm.get = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\McqController::show
 * @see app/Http/Controllers/Public/McqController.php:50
 * @route '/mcqs/{mcq}'
 */
        showForm.head = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const mcqs = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
}

export default mcqs