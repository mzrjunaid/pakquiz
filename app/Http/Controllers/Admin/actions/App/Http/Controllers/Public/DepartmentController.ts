import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\DepartmentController::index
 * @see app/Http/Controllers/Public/DepartmentController.php:22
 * @route '/departments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\DepartmentController::index
 * @see app/Http/Controllers/Public/DepartmentController.php:22
 * @route '/departments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\DepartmentController::index
 * @see app/Http/Controllers/Public/DepartmentController.php:22
 * @route '/departments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\DepartmentController::index
 * @see app/Http/Controllers/Public/DepartmentController.php:22
 * @route '/departments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\DepartmentController::index
 * @see app/Http/Controllers/Public/DepartmentController.php:22
 * @route '/departments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\DepartmentController::index
 * @see app/Http/Controllers/Public/DepartmentController.php:22
 * @route '/departments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\DepartmentController::index
 * @see app/Http/Controllers/Public/DepartmentController.php:22
 * @route '/departments'
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
* @see \App\Http\Controllers\Public\DepartmentController::show
 * @see app/Http/Controllers/Public/DepartmentController.php:53
 * @route '/departments/{department}'
 */
export const show = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/departments/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\DepartmentController::show
 * @see app/Http/Controllers/Public/DepartmentController.php:53
 * @route '/departments/{department}'
 */
show.url = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { department: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.slug
                : args.department,
                }

    return show.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\DepartmentController::show
 * @see app/Http/Controllers/Public/DepartmentController.php:53
 * @route '/departments/{department}'
 */
show.get = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\DepartmentController::show
 * @see app/Http/Controllers/Public/DepartmentController.php:53
 * @route '/departments/{department}'
 */
show.head = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\DepartmentController::show
 * @see app/Http/Controllers/Public/DepartmentController.php:53
 * @route '/departments/{department}'
 */
    const showForm = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\DepartmentController::show
 * @see app/Http/Controllers/Public/DepartmentController.php:53
 * @route '/departments/{department}'
 */
        showForm.get = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\DepartmentController::show
 * @see app/Http/Controllers/Public/DepartmentController.php:53
 * @route '/departments/{department}'
 */
        showForm.head = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const DepartmentController = { index, show }

export default DepartmentController