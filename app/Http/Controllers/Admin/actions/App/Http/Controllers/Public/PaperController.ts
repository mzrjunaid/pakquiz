import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Public\PaperController::categoryIndex
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
export const categoryIndex = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryIndex.url(args, options),
    method: 'get',
})

categoryIndex.definition = {
    methods: ["get","head"],
    url: '/papers/{category?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\PaperController::categoryIndex
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
categoryIndex.url = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return categoryIndex.definition.url
            .replace('{category?}', parsedArgs.category?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\PaperController::categoryIndex
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
categoryIndex.get = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryIndex.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\PaperController::categoryIndex
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
categoryIndex.head = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoryIndex.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\PaperController::categoryIndex
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
    const categoryIndexForm = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: categoryIndex.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\PaperController::categoryIndex
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
        categoryIndexForm.get = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categoryIndex.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\PaperController::categoryIndex
 * @see app/Http/Controllers/Public/PaperController.php:194
 * @route '/papers/{category?}'
 */
        categoryIndexForm.head = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: categoryIndex.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    categoryIndex.form = categoryIndexForm
/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
const show13b323a64f363466258f66cd9707d464 = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show13b323a64f363466258f66cd9707d464.url(args, options),
    method: 'get',
})

show13b323a64f363466258f66cd9707d464.definition = {
    methods: ["get","head"],
    url: '/papers/{category?}/{paper}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
show13b323a64f363466258f66cd9707d464.url = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions) => {
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

    return show13b323a64f363466258f66cd9707d464.definition.url
            .replace('{category?}', parsedArgs.category?.toString() ?? '')
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
show13b323a64f363466258f66cd9707d464.get = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show13b323a64f363466258f66cd9707d464.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
show13b323a64f363466258f66cd9707d464.head = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show13b323a64f363466258f66cd9707d464.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
    const show13b323a64f363466258f66cd9707d464Form = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show13b323a64f363466258f66cd9707d464.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
        show13b323a64f363466258f66cd9707d464Form.get = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show13b323a64f363466258f66cd9707d464.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{category?}/{paper}'
 */
        show13b323a64f363466258f66cd9707d464Form.head = (args: { category?: string | number, paper: string | { slug: string } } | [category: string | number, paper: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show13b323a64f363466258f66cd9707d464.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show13b323a64f363466258f66cd9707d464.form = show13b323a64f363466258f66cd9707d464Form
    /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
const show7618f0a5ae0361f166b66b06c4f43d72 = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'get',
})

show7618f0a5ae0361f166b66b06c4f43d72.definition = {
    methods: ["get","head"],
    url: '/papers/{paper}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
show7618f0a5ae0361f166b66b06c4f43d72.url = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return show7618f0a5ae0361f166b66b06c4f43d72.definition.url
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
show7618f0a5ae0361f166b66b06c4f43d72.get = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
show7618f0a5ae0361f166b66b06c4f43d72.head = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
    const show7618f0a5ae0361f166b66b06c4f43d72Form = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
        show7618f0a5ae0361f166b66b06c4f43d72Form.get = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\PaperController::show
 * @see app/Http/Controllers/Public/PaperController.php:49
 * @route '/papers/{paper}'
 */
        show7618f0a5ae0361f166b66b06c4f43d72Form.head = (args: { paper: string | { slug: string } } | [paper: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show7618f0a5ae0361f166b66b06c4f43d72.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show7618f0a5ae0361f166b66b06c4f43d72.form = show7618f0a5ae0361f166b66b06c4f43d72Form

export const show = {
    '/papers/{category?}/{paper}': show13b323a64f363466258f66cd9707d464,
    '/papers/{paper}': show7618f0a5ae0361f166b66b06c4f43d72,
}

const PaperController = { index, categoryIndex, show }

export default PaperController