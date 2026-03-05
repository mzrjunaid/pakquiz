import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:12
 * @route '/admin/papers-import'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/papers-import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:12
 * @route '/admin/papers-import'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:12
 * @route '/admin/papers-import'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:12
 * @route '/admin/papers-import'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:12
 * @route '/admin/papers-import'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:12
 * @route '/admin/papers-import'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:12
 * @route '/admin/papers-import'
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
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create_copy
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:17
 * @route '/admin/papers-import-copy'
 */
export const create_copy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_copy.url(options),
    method: 'get',
})

create_copy.definition = {
    methods: ["get","head"],
    url: '/admin/papers-import-copy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create_copy
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:17
 * @route '/admin/papers-import-copy'
 */
create_copy.url = (options?: RouteQueryOptions) => {
    return create_copy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create_copy
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:17
 * @route '/admin/papers-import-copy'
 */
create_copy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_copy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create_copy
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:17
 * @route '/admin/papers-import-copy'
 */
create_copy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_copy.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create_copy
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:17
 * @route '/admin/papers-import-copy'
 */
    const create_copyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create_copy.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create_copy
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:17
 * @route '/admin/papers-import-copy'
 */
        create_copyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create_copy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::create_copy
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:17
 * @route '/admin/papers-import-copy'
 */
        create_copyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create_copy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create_copy.form = create_copyForm
/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::store
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:22
 * @route '/admin/papers-import'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/papers-import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::store
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:22
 * @route '/admin/papers-import'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::store
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:22
 * @route '/admin/papers-import'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::store
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:22
 * @route '/admin/papers-import'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminPaperImportController::store
 * @see app/Http/Controllers/Admin/AdminPaperImportController.php:22
 * @route '/admin/papers-import'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const AdminPaperImportController = { create, create_copy, store }

export default AdminPaperImportController