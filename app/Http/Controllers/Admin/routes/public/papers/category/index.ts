import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
export const index = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/papers/{category?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
index.url = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{category?}', parsedArgs.category?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
index.get = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
index.head = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
    const indexForm = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
        indexForm.get = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
        indexForm.head = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
export const show = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/papers/{category?}/{paper}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
show.url = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                    paper: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "category",
        ])

    const parsedArgs = {
                        category: args.category,
                                paper: typeof args.paper === 'object'
                ? args.paper.slug
                : args.paper,
                }

    return show.definition.url
            .replace('{category?}', parsedArgs.category?.toString() ?? '')
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
show.get = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
show.head = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
    const showForm = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
        showForm.get = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
        showForm.head = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const category = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
}

export default category