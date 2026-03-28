import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:13
 * @route '/admin/mcqs-import'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs-import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:13
 * @route '/admin/mcqs-import'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:13
 * @route '/admin/mcqs-import'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:13
 * @route '/admin/mcqs-import'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:13
 * @route '/admin/mcqs-import'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:13
 * @route '/admin/mcqs-import'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:13
 * @route '/admin/mcqs-import'
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
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:18
 * @route '/admin/mcqs-import-copy'
 */
export const create_copy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_copy.url(options),
    method: 'get',
})

create_copy.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs-import-copy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:18
 * @route '/admin/mcqs-import-copy'
 */
create_copy.url = (options?: RouteQueryOptions) => {
    return create_copy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:18
 * @route '/admin/mcqs-import-copy'
 */
create_copy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_copy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:18
 * @route '/admin/mcqs-import-copy'
 */
create_copy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_copy.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:18
 * @route '/admin/mcqs-import-copy'
 */
    const create_copyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create_copy.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:18
 * @route '/admin/mcqs-import-copy'
 */
        create_copyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create_copy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:18
 * @route '/admin/mcqs-import-copy'
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
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:23
 * @route '/admin/mcqs-import-md-copy'
 */
export const create_md_copy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_md_copy.url(options),
    method: 'get',
})

create_md_copy.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs-import-md-copy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:23
 * @route '/admin/mcqs-import-md-copy'
 */
create_md_copy.url = (options?: RouteQueryOptions) => {
    return create_md_copy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:23
 * @route '/admin/mcqs-import-md-copy'
 */
create_md_copy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_md_copy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:23
 * @route '/admin/mcqs-import-md-copy'
 */
create_md_copy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_md_copy.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:23
 * @route '/admin/mcqs-import-md-copy'
 */
    const create_md_copyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create_md_copy.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:23
 * @route '/admin/mcqs-import-md-copy'
 */
        create_md_copyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create_md_copy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:23
 * @route '/admin/mcqs-import-md-copy'
 */
        create_md_copyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create_md_copy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create_md_copy.form = create_md_copyForm
/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::store
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:28
 * @route '/admin/mcqs-import'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/mcqs-import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::store
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:28
 * @route '/admin/mcqs-import'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\AdminMcqImportController::store
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:28
 * @route '/admin/mcqs-import'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::store
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:28
 * @route '/admin/mcqs-import'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Public\AdminMcqImportController::store
 * @see app/Http/Controllers/Public/AdminMcqImportController.php:28
 * @route '/admin/mcqs-import'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const mcqs_import = {
    create: Object.assign(create, create),
create_copy: Object.assign(create_copy, create_copy),
create_md_copy: Object.assign(create_md_copy, create_md_copy),
store: Object.assign(store, store),
}

export default mcqs_import