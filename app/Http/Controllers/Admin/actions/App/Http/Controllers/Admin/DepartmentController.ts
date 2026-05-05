import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DepartmentController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:18
* @route '/admin/departments'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:20
 * @route '/admin/departments'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:18
* @route '/admin/departments'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:20
 * @route '/admin/departments'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:18
* @route '/admin/departments'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:20
 * @route '/admin/departments'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:18
* @route '/admin/departments'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:20
 * @route '/admin/departments'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:18
* @route '/admin/departments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:20
 * @route '/admin/departments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\DepartmentController::index
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:18
* @route '/admin/departments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::index
* @see app/Http/Controllers/Admin/DepartmentController.php:18
* @route '/admin/departments'
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
* @see \App\Http\Controllers\Admin\DepartmentController::create
* @see app/Http/Controllers/Admin/DepartmentController.php:62
* @route '/admin/departments/create'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:20
 * @route '/admin/departments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentController::index
 * @see app/Http/Controllers/Admin/DepartmentController.php:20
 * @route '/admin/departments'
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
* @see \App\Http\Controllers\Admin\DepartmentController::create
 * @see app/Http/Controllers/Admin/DepartmentController.php:64
 * @route '/admin/departments/create'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/departments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:62
* @route '/admin/departments/create'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:64
 * @route '/admin/departments/create'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:62
* @route '/admin/departments/create'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:64
 * @route '/admin/departments/create'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:62
* @route '/admin/departments/create'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:64
 * @route '/admin/departments/create'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:62
* @route '/admin/departments/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:64
 * @route '/admin/departments/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\DepartmentController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:62
* @route '/admin/departments/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::create
* @see app/Http/Controllers/Admin/DepartmentController.php:62
* @route '/admin/departments/create'
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
* @see \App\Http\Controllers\Admin\DepartmentController::store
* @see app/Http/Controllers/Admin/DepartmentController.php:70
* @route '/admin/departments'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:64
 * @route '/admin/departments/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentController::create
 * @see app/Http/Controllers/Admin/DepartmentController.php:64
 * @route '/admin/departments/create'
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
* @see \App\Http\Controllers\Admin\DepartmentController::store
 * @see app/Http/Controllers/Admin/DepartmentController.php:72
 * @route '/admin/departments'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/departments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:70
* @route '/admin/departments'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:72
 * @route '/admin/departments'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:70
* @route '/admin/departments'
*/
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:72
 * @route '/admin/departments'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:70
* @route '/admin/departments'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:72
 * @route '/admin/departments'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\DepartmentController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:70
* @route '/admin/departments'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\DepartmentController::show
* @see app/Http/Controllers/Admin/DepartmentController.php:78
* @route '/admin/departments/{department}'
*/
export const show = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:72
 * @route '/admin/departments'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\DepartmentController::show
 * @see app/Http/Controllers/Admin/DepartmentController.php:133
 * @route '/admin/departments/{department}'
 */
export const show = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/departments/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:78
* @route '/admin/departments/{department}'
*/
show.url = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions) => {
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:133
 * @route '/admin/departments/{department}'
 */
show.url = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

<<<<<<< HEAD
=======
            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { department: args.slug }
        }
    
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
<<<<<<< HEAD
        department: args.department,
    }
=======
                        department: typeof args.department === 'object'
                ? args.department.slug
                : args.department,
                }
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

    return show.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:78
* @route '/admin/departments/{department}'
*/
show.get = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:133
 * @route '/admin/departments/{department}'
 */
show.get = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:78
* @route '/admin/departments/{department}'
*/
show.head = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:133
 * @route '/admin/departments/{department}'
 */
show.head = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:78
* @route '/admin/departments/{department}'
*/
const showForm = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:133
 * @route '/admin/departments/{department}'
 */
    const showForm = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\DepartmentController::show
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:78
* @route '/admin/departments/{department}'
*/
showForm.get = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::show
* @see app/Http/Controllers/Admin/DepartmentController.php:78
* @route '/admin/departments/{department}'
*/
showForm.head = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\DepartmentController::edit
* @see app/Http/Controllers/Admin/DepartmentController.php:86
* @route '/admin/departments/{department}/edit'
*/
export const edit = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:133
 * @route '/admin/departments/{department}'
 */
        showForm.get = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentController::show
 * @see app/Http/Controllers/Admin/DepartmentController.php:133
 * @route '/admin/departments/{department}'
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
/**
* @see \App\Http\Controllers\Admin\DepartmentController::edit
 * @see app/Http/Controllers/Admin/DepartmentController.php:163
 * @route '/admin/departments/{department}/edit'
 */
export const edit = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/departments/{department}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:86
* @route '/admin/departments/{department}/edit'
*/
edit.url = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions) => {
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:163
 * @route '/admin/departments/{department}/edit'
 */
edit.url = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

<<<<<<< HEAD
=======
            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { department: args.slug }
        }
    
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
<<<<<<< HEAD
        department: args.department,
    }
=======
                        department: typeof args.department === 'object'
                ? args.department.slug
                : args.department,
                }
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

    return edit.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:86
* @route '/admin/departments/{department}/edit'
*/
edit.get = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:163
 * @route '/admin/departments/{department}/edit'
 */
edit.get = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:86
* @route '/admin/departments/{department}/edit'
*/
edit.head = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:163
 * @route '/admin/departments/{department}/edit'
 */
edit.head = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:86
* @route '/admin/departments/{department}/edit'
*/
const editForm = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:163
 * @route '/admin/departments/{department}/edit'
 */
    const editForm = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Admin\DepartmentController::edit
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:86
* @route '/admin/departments/{department}/edit'
*/
editForm.get = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::edit
* @see app/Http/Controllers/Admin/DepartmentController.php:86
* @route '/admin/departments/{department}/edit'
*/
editForm.head = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\DepartmentController::update
* @see app/Http/Controllers/Admin/DepartmentController.php:94
* @route '/admin/departments/{department}'
*/
export const update = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:163
 * @route '/admin/departments/{department}/edit'
 */
        editForm.get = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentController::edit
 * @see app/Http/Controllers/Admin/DepartmentController.php:163
 * @route '/admin/departments/{department}/edit'
 */
        editForm.head = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\DepartmentController::update
 * @see app/Http/Controllers/Admin/DepartmentController.php:182
 * @route '/admin/departments/{department}'
 */
export const update = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/departments/{department}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:94
* @route '/admin/departments/{department}'
*/
update.url = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions) => {
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:182
 * @route '/admin/departments/{department}'
 */
update.url = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

<<<<<<< HEAD
=======
            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { department: args.slug }
        }
    
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
<<<<<<< HEAD
        department: args.department,
    }
=======
                        department: typeof args.department === 'object'
                ? args.department.slug
                : args.department,
                }
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

    return update.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:94
* @route '/admin/departments/{department}'
*/
update.put = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:182
 * @route '/admin/departments/{department}'
 */
update.put = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:94
* @route '/admin/departments/{department}'
*/
update.patch = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:182
 * @route '/admin/departments/{department}'
 */
update.patch = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:94
* @route '/admin/departments/{department}'
*/
const updateForm = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:182
 * @route '/admin/departments/{department}'
 */
    const updateForm = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\DepartmentController::update
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:94
* @route '/admin/departments/{department}'
*/
updateForm.put = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::update
* @see app/Http/Controllers/Admin/DepartmentController.php:94
* @route '/admin/departments/{department}'
*/
updateForm.patch = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\DepartmentController::destroy
* @see app/Http/Controllers/Admin/DepartmentController.php:102
* @route '/admin/departments/{department}'
*/
export const destroy = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:182
 * @route '/admin/departments/{department}'
 */
        updateForm.put = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentController::update
 * @see app/Http/Controllers/Admin/DepartmentController.php:182
 * @route '/admin/departments/{department}'
 */
        updateForm.patch = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\DepartmentController::destroy
 * @see app/Http/Controllers/Admin/DepartmentController.php:242
 * @route '/admin/departments/{department}'
 */
export const destroy = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/departments/{department}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentController::destroy
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:102
* @route '/admin/departments/{department}'
*/
destroy.url = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions) => {
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:242
 * @route '/admin/departments/{department}'
 */
destroy.url = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

<<<<<<< HEAD
=======
            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { department: args.slug }
        }
    
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
<<<<<<< HEAD
        department: args.department,
    }
=======
                        department: typeof args.department === 'object'
                ? args.department.slug
                : args.department,
                }
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

    return destroy.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentController::destroy
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:102
* @route '/admin/departments/{department}'
*/
destroy.delete = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:242
 * @route '/admin/departments/{department}'
 */
destroy.delete = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\DepartmentController::destroy
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:102
* @route '/admin/departments/{department}'
*/
const destroyForm = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})
=======
 * @see app/Http/Controllers/Admin/DepartmentController.php:242
 * @route '/admin/departments/{department}'
 */
    const destroyForm = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\DepartmentController::destroy
<<<<<<< HEAD
* @see app/Http/Controllers/Admin/DepartmentController.php:102
* @route '/admin/departments/{department}'
*/
destroyForm.delete = (args: { department: string | number } | [department: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/Admin/DepartmentController.php:242
 * @route '/admin/departments/{department}'
 */
        destroyForm.delete = (args: { department: string | { slug: string } } | [department: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
const DepartmentController = { index, create, store, show, edit, update, destroy }

export default DepartmentController