import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\TestingServiceController::index
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:20
 * @route '/admin/testing-services'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:20
* @route '/admin/testing-services'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/testing-services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::index
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:20
 * @route '/admin/testing-services'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:20
* @route '/admin/testing-services'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::index
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:20
 * @route '/admin/testing-services'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:20
* @route '/admin/testing-services'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::index
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:20
 * @route '/admin/testing-services'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:20
* @route '/admin/testing-services'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::index
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:20
 * @route '/admin/testing-services'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:20
* @route '/admin/testing-services'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::index
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:20
 * @route '/admin/testing-services'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\TestingServiceController::index
 * @see app/Http/Controllers/Admin/TestingServiceController.php:20
 * @route '/admin/testing-services'
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
* @see \App\Http\Controllers\Admin\TestingServiceController::create
 * @see app/Http/Controllers/Admin/TestingServiceController.php:64
 * @route '/admin/testing-services/create'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:20
* @route '/admin/testing-services'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::index
* @see app/Http/Controllers/Admin/TestingServiceController.php:20
* @route '/admin/testing-services'
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
* @see \App\Http\Controllers\Admin\TestingServiceController::create
* @see app/Http/Controllers/Admin/TestingServiceController.php:64
* @route '/admin/testing-services/create'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/testing-services/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::create
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:64
 * @route '/admin/testing-services/create'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:64
* @route '/admin/testing-services/create'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::create
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:64
 * @route '/admin/testing-services/create'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:64
* @route '/admin/testing-services/create'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::create
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:64
 * @route '/admin/testing-services/create'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:64
* @route '/admin/testing-services/create'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::create
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:64
 * @route '/admin/testing-services/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:64
* @route '/admin/testing-services/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::create
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:64
 * @route '/admin/testing-services/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\TestingServiceController::create
 * @see app/Http/Controllers/Admin/TestingServiceController.php:64
 * @route '/admin/testing-services/create'
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
* @see \App\Http\Controllers\Admin\TestingServiceController::store
 * @see app/Http/Controllers/Admin/TestingServiceController.php:72
 * @route '/admin/testing-services'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:64
* @route '/admin/testing-services/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::create
* @see app/Http/Controllers/Admin/TestingServiceController.php:64
* @route '/admin/testing-services/create'
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
* @see \App\Http\Controllers\Admin\TestingServiceController::store
* @see app/Http/Controllers/Admin/TestingServiceController.php:72
* @route '/admin/testing-services'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/testing-services',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::store
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:72
 * @route '/admin/testing-services'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:72
* @route '/admin/testing-services'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::store
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:72
 * @route '/admin/testing-services'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:72
* @route '/admin/testing-services'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::store
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:72
 * @route '/admin/testing-services'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:72
* @route '/admin/testing-services'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::store
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:72
 * @route '/admin/testing-services'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
 * @see app/Http/Controllers/Admin/TestingServiceController.php:80
 * @route '/admin/testing-services/{testing_service}'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:72
* @route '/admin/testing-services'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
* @see app/Http/Controllers/Admin/TestingServiceController.php:80
* @route '/admin/testing-services/{testing_service}'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
export const show = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/testing-services/{testing_service}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:80
 * @route '/admin/testing-services/{testing_service}'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:80
* @route '/admin/testing-services/{testing_service}'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
show.url = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testing_service: args }
    }

    if (Array.isArray(args)) {
        args = {
            testing_service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testing_service: args.testing_service,
    }

    return show.definition.url
            .replace('{testing_service}', parsedArgs.testing_service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:80
 * @route '/admin/testing-services/{testing_service}'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:80
* @route '/admin/testing-services/{testing_service}'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
show.get = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:80
 * @route '/admin/testing-services/{testing_service}'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:80
* @route '/admin/testing-services/{testing_service}'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
show.head = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:80
 * @route '/admin/testing-services/{testing_service}'
 */
    const showForm = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:80
* @route '/admin/testing-services/{testing_service}'
*/
const showForm = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:80
 * @route '/admin/testing-services/{testing_service}'
 */
        showForm.get = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
 * @see app/Http/Controllers/Admin/TestingServiceController.php:80
 * @route '/admin/testing-services/{testing_service}'
 */
        showForm.head = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
 * @see app/Http/Controllers/Admin/TestingServiceController.php:88
 * @route '/admin/testing-services/{testing_service}/edit'
 */
export const edit = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:80
* @route '/admin/testing-services/{testing_service}'
*/
showForm.get = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::show
* @see app/Http/Controllers/Admin/TestingServiceController.php:80
* @route '/admin/testing-services/{testing_service}'
*/
showForm.head = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
* @see app/Http/Controllers/Admin/TestingServiceController.php:88
* @route '/admin/testing-services/{testing_service}/edit'
*/
export const edit = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/testing-services/{testing_service}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:88
 * @route '/admin/testing-services/{testing_service}/edit'
 */
edit.url = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions) => {
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:88
* @route '/admin/testing-services/{testing_service}/edit'
*/
edit.url = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testing_service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { testing_service: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            testing_service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testing_service: typeof args.testing_service === 'object'
        ? args.testing_service.slug
        : args.testing_service,
    }

    return edit.definition.url
            .replace('{testing_service}', parsedArgs.testing_service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:88
 * @route '/admin/testing-services/{testing_service}/edit'
 */
edit.get = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:88
* @route '/admin/testing-services/{testing_service}/edit'
*/
edit.get = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:88
 * @route '/admin/testing-services/{testing_service}/edit'
 */
edit.head = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:88
* @route '/admin/testing-services/{testing_service}/edit'
*/
edit.head = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:88
 * @route '/admin/testing-services/{testing_service}/edit'
 */
    const editForm = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:88
* @route '/admin/testing-services/{testing_service}/edit'
*/
const editForm = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:88
 * @route '/admin/testing-services/{testing_service}/edit'
 */
        editForm.get = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
 * @see app/Http/Controllers/Admin/TestingServiceController.php:88
 * @route '/admin/testing-services/{testing_service}/edit'
 */
        editForm.head = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\TestingServiceController::update
 * @see app/Http/Controllers/Admin/TestingServiceController.php:130
 * @route '/admin/testing-services/{testing_service}'
 */
export const update = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:88
* @route '/admin/testing-services/{testing_service}/edit'
*/
editForm.get = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::edit
* @see app/Http/Controllers/Admin/TestingServiceController.php:88
* @route '/admin/testing-services/{testing_service}/edit'
*/
editForm.head = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\TestingServiceController::update
* @see app/Http/Controllers/Admin/TestingServiceController.php:130
* @route '/admin/testing-services/{testing_service}'
*/
export const update = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/testing-services/{testing_service}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::update
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:130
 * @route '/admin/testing-services/{testing_service}'
 */
update.url = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions) => {
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:130
* @route '/admin/testing-services/{testing_service}'
*/
update.url = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testing_service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { testing_service: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            testing_service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testing_service: typeof args.testing_service === 'object'
        ? args.testing_service.slug
        : args.testing_service,
    }

    return update.definition.url
            .replace('{testing_service}', parsedArgs.testing_service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::update
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:130
 * @route '/admin/testing-services/{testing_service}'
 */
update.put = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:130
* @route '/admin/testing-services/{testing_service}'
*/
update.put = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::update
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:130
 * @route '/admin/testing-services/{testing_service}'
 */
update.patch = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:130
* @route '/admin/testing-services/{testing_service}'
*/
update.patch = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::update
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:130
 * @route '/admin/testing-services/{testing_service}'
 */
    const updateForm = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:130
* @route '/admin/testing-services/{testing_service}'
*/
const updateForm = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::update
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:130
 * @route '/admin/testing-services/{testing_service}'
 */
        updateForm.put = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\TestingServiceController::update
 * @see app/Http/Controllers/Admin/TestingServiceController.php:130
 * @route '/admin/testing-services/{testing_service}'
 */
        updateForm.patch = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\TestingServiceController::destroy
 * @see app/Http/Controllers/Admin/TestingServiceController.php:175
 * @route '/admin/testing-services/{testing_service}'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:130
* @route '/admin/testing-services/{testing_service}'
*/
updateForm.put = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::update
* @see app/Http/Controllers/Admin/TestingServiceController.php:130
* @route '/admin/testing-services/{testing_service}'
*/
updateForm.patch = (args: { testing_service: string | { slug: string } } | [testing_service: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\TestingServiceController::destroy
* @see app/Http/Controllers/Admin/TestingServiceController.php:175
* @route '/admin/testing-services/{testing_service}'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
export const destroy = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/testing-services/{testing_service}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::destroy
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:175
 * @route '/admin/testing-services/{testing_service}'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:175
* @route '/admin/testing-services/{testing_service}'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
destroy.url = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testing_service: args }
    }

    if (Array.isArray(args)) {
        args = {
            testing_service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testing_service: args.testing_service,
    }

    return destroy.definition.url
            .replace('{testing_service}', parsedArgs.testing_service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::destroy
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:175
 * @route '/admin/testing-services/{testing_service}'
 */
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:175
* @route '/admin/testing-services/{testing_service}'
*/
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
destroy.delete = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::destroy
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:175
 * @route '/admin/testing-services/{testing_service}'
 */
    const destroyForm = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })
=======
* @see app/Http/Controllers/Admin/TestingServiceController.php:175
* @route '/admin/testing-services/{testing_service}'
*/
const destroyForm = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})
>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7

/**
* @see \App\Http\Controllers\Admin\TestingServiceController::destroy
<<<<<<< HEAD
 * @see app/Http/Controllers/Admin/TestingServiceController.php:175
 * @route '/admin/testing-services/{testing_service}'
 */
        destroyForm.delete = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/Admin/TestingServiceController.php:175
* @route '/admin/testing-services/{testing_service}'
*/
destroyForm.delete = (args: { testing_service: string | number } | [testing_service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

>>>>>>> 21d55a18fcc42b287bf7ef9c1a1ac14f2a9873d7
const TestingServiceController = { index, create, store, show, edit, update, destroy }

export default TestingServiceController