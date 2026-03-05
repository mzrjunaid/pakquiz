import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import category from './category'
/**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:23
 * @route '/papers'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/papers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:23
 * @route '/papers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:23
 * @route '/papers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:23
 * @route '/papers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:23
 * @route '/papers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:23
 * @route '/papers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\PaperController::index
 * @see app/Http/Controllers/Public/PaperController.php:23
 * @route '/papers'
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
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
export const show = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/papers/{paper}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
show.url = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
show.get = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
show.head = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
    const showForm = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
        showForm.get = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
        showForm.head = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const papers = {
    index: Object.assign(index, index),
category: Object.assign(category, category),
show: Object.assign(show, show),
}

export default papers