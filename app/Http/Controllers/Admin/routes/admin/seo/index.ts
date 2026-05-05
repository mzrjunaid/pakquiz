import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:37
* @route '/admin/seo'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:38
 * @route '/admin/seo'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/seo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:37
* @route '/admin/seo'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:38
 * @route '/admin/seo'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:37
* @route '/admin/seo'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:38
 * @route '/admin/seo'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:37
* @route '/admin/seo'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:38
 * @route '/admin/seo'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:37
* @route '/admin/seo'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:38
 * @route '/admin/seo'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:37
* @route '/admin/seo'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
* @see app/Http/Controllers/Admin/SeoMetaController.php:37
* @route '/admin/seo'
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
* @see \App\Http\Controllers\Admin\SeoMetaController::create
* @see app/Http/Controllers/Admin/SeoMetaController.php:83
* @route '/admin/seo/create'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:38
 * @route '/admin/seo'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
 * @see app/Http/Controllers/Admin/SeoMetaController.php:38
 * @route '/admin/seo'
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
* @see \App\Http\Controllers\Admin\SeoMetaController::create
 * @see app/Http/Controllers/Admin/SeoMetaController.php:84
 * @route '/admin/seo/create'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/seo/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:83
* @route '/admin/seo/create'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:84
 * @route '/admin/seo/create'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:83
* @route '/admin/seo/create'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:84
 * @route '/admin/seo/create'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:83
* @route '/admin/seo/create'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:84
 * @route '/admin/seo/create'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:83
* @route '/admin/seo/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:84
 * @route '/admin/seo/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:83
* @route '/admin/seo/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
* @see app/Http/Controllers/Admin/SeoMetaController.php:83
* @route '/admin/seo/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
* @see app/Http/Controllers/Admin/SeoMetaController.php:94
* @route '/admin/seo'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:84
 * @route '/admin/seo/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
 * @see app/Http/Controllers/Admin/SeoMetaController.php:84
 * @route '/admin/seo/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
 * @see app/Http/Controllers/Admin/SeoMetaController.php:95
 * @route '/admin/seo'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/seo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:94
* @route '/admin/seo'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:95
 * @route '/admin/seo'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:94
* @route '/admin/seo'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:95
 * @route '/admin/seo'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:94
* @route '/admin/seo'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:95
 * @route '/admin/seo'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:94
* @route '/admin/seo'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
* @see app/Http/Controllers/Admin/SeoMetaController.php:107
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:95
 * @route '/admin/seo'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:108
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const show = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/seo/{seo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:107
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:108
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
show.url = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seo: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { seo: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            seo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        seo: typeof args.seo === 'object'
        ? args.seo.id
        : args.seo,
    }

    return show.definition.url
            .replace('{seo}', parsedArgs.seo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:107
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:108
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
show.get = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:107
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:108
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
show.head = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:107
* @route '/admin/seo/{seo}'
*/
const showForm = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:108
 * @route '/admin/seo/{seo}'
 */
    const showForm = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:107
* @route '/admin/seo/{seo}'
*/
showForm.get = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
* @see app/Http/Controllers/Admin/SeoMetaController.php:107
* @route '/admin/seo/{seo}'
*/
showForm.head = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
* @see app/Http/Controllers/Admin/SeoMetaController.php:119
* @route '/admin/seo/{seo}/edit'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:108
 * @route '/admin/seo/{seo}'
 */
        showForm.get = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:108
 * @route '/admin/seo/{seo}'
 */
        showForm.head = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
 * @see app/Http/Controllers/Admin/SeoMetaController.php:120
 * @route '/admin/seo/{seo}/edit'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const edit = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/seo/{seo}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:119
* @route '/admin/seo/{seo}/edit'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:120
 * @route '/admin/seo/{seo}/edit'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
edit.url = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seo: args }
    }

<<<<<<< HEAD
    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { seo: args.id }
    }

=======
            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { seo: args.id }
        }
    
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (Array.isArray(args)) {
        args = {
            seo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
<<<<<<< HEAD
        seo: typeof args.seo === 'object'
        ? args.seo.id
        : args.seo,
    }
=======
                        seo: typeof args.seo === 'object'
                ? args.seo.id
                : args.seo,
                }
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

    return edit.definition.url
            .replace('{seo}', parsedArgs.seo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:119
* @route '/admin/seo/{seo}/edit'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:120
 * @route '/admin/seo/{seo}/edit'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
edit.get = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:119
* @route '/admin/seo/{seo}/edit'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:120
 * @route '/admin/seo/{seo}/edit'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
edit.head = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:119
* @route '/admin/seo/{seo}/edit'
*/
const editForm = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:120
 * @route '/admin/seo/{seo}/edit'
 */
    const editForm = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:119
* @route '/admin/seo/{seo}/edit'
*/
editForm.get = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
* @see app/Http/Controllers/Admin/SeoMetaController.php:119
* @route '/admin/seo/{seo}/edit'
*/
editForm.head = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
* @see app/Http/Controllers/Admin/SeoMetaController.php:133
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:120
 * @route '/admin/seo/{seo}/edit'
 */
        editForm.get = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
 * @see app/Http/Controllers/Admin/SeoMetaController.php:120
 * @route '/admin/seo/{seo}/edit'
 */
        editForm.head = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
 * @see app/Http/Controllers/Admin/SeoMetaController.php:134
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const update = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/seo/{seo}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:133
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:134
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
update.url = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seo: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { seo: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            seo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        seo: typeof args.seo === 'object'
        ? args.seo.id
        : args.seo,
    }

    return update.definition.url
            .replace('{seo}', parsedArgs.seo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:133
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:134
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
update.put = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:133
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:134
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
update.patch = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:133
* @route '/admin/seo/{seo}'
*/
const updateForm = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:134
 * @route '/admin/seo/{seo}'
 */
    const updateForm = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:133
* @route '/admin/seo/{seo}'
*/
updateForm.put = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
* @see app/Http/Controllers/Admin/SeoMetaController.php:133
* @route '/admin/seo/{seo}'
*/
updateForm.patch = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
* @see app/Http/Controllers/Admin/SeoMetaController.php:146
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:134
 * @route '/admin/seo/{seo}'
 */
        updateForm.put = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
 * @see app/Http/Controllers/Admin/SeoMetaController.php:134
 * @route '/admin/seo/{seo}'
 */
        updateForm.patch = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
 * @see app/Http/Controllers/Admin/SeoMetaController.php:147
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const destroy = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/seo/{seo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:146
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:147
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
destroy.url = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seo: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { seo: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            seo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        seo: typeof args.seo === 'object'
        ? args.seo.id
        : args.seo,
    }

    return destroy.definition.url
            .replace('{seo}', parsedArgs.seo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:146
* @route '/admin/seo/{seo}'
*/
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:147
 * @route '/admin/seo/{seo}'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
destroy.delete = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:146
* @route '/admin/seo/{seo}'
*/
const destroyForm = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})
=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:147
 * @route '/admin/seo/{seo}'
 */
    const destroyForm = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/SeoMetaController.php:146
* @route '/admin/seo/{seo}'
*/
destroyForm.delete = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

=======
 * @see app/Http/Controllers/Admin/SeoMetaController.php:147
 * @route '/admin/seo/{seo}'
 */
        destroyForm.delete = (args: { seo: number | { id: number } } | [seo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
const seo = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default seo