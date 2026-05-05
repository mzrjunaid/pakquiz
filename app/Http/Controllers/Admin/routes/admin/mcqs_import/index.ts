import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:15
* @route '/admin/mcqs-import'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:17
 * @route '/admin/mcqs-import'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs-import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:15
* @route '/admin/mcqs-import'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:17
 * @route '/admin/mcqs-import'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:15
* @route '/admin/mcqs-import'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:17
 * @route '/admin/mcqs-import'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:15
* @route '/admin/mcqs-import'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:17
 * @route '/admin/mcqs-import'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:15
* @route '/admin/mcqs-import'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:17
 * @route '/admin/mcqs-import'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:15
* @route '/admin/mcqs-import'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:15
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
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:20
* @route '/admin/mcqs-import-copy'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:17
 * @route '/admin/mcqs-import'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:17
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
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:22
 * @route '/admin/mcqs-import-copy'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const create_copy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_copy.url(options),
    method: 'get',
})

create_copy.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs-import-copy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:20
* @route '/admin/mcqs-import-copy'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:22
 * @route '/admin/mcqs-import-copy'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create_copy.url = (options?: RouteQueryOptions) => {
    return create_copy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:20
* @route '/admin/mcqs-import-copy'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:22
 * @route '/admin/mcqs-import-copy'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create_copy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_copy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:20
* @route '/admin/mcqs-import-copy'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:22
 * @route '/admin/mcqs-import-copy'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create_copy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_copy.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:20
* @route '/admin/mcqs-import-copy'
*/
const create_copyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create_copy.url(options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:22
 * @route '/admin/mcqs-import-copy'
 */
    const create_copyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create_copy.url(options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:20
* @route '/admin/mcqs-import-copy'
*/
create_copyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create_copy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:20
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
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:25
* @route '/admin/mcqs-import-md-copy'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:22
 * @route '/admin/mcqs-import-copy'
 */
        create_copyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create_copy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_copy
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:22
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
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:27
 * @route '/admin/mcqs-import-md-copy'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const create_md_copy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_md_copy.url(options),
    method: 'get',
})

create_md_copy.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs-import-md-copy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:25
* @route '/admin/mcqs-import-md-copy'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:27
 * @route '/admin/mcqs-import-md-copy'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create_md_copy.url = (options?: RouteQueryOptions) => {
    return create_md_copy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:25
* @route '/admin/mcqs-import-md-copy'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:27
 * @route '/admin/mcqs-import-md-copy'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create_md_copy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create_md_copy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:25
* @route '/admin/mcqs-import-md-copy'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:27
 * @route '/admin/mcqs-import-md-copy'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
create_md_copy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create_md_copy.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:25
* @route '/admin/mcqs-import-md-copy'
*/
const create_md_copyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create_md_copy.url(options),
    method: 'get',
})
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:27
 * @route '/admin/mcqs-import-md-copy'
 */
    const create_md_copyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create_md_copy.url(options),
        method: 'get',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:25
* @route '/admin/mcqs-import-md-copy'
*/
create_md_copyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create_md_copy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:25
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
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::store
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:34
* @route '/admin/mcqs-import'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:27
 * @route '/admin/mcqs-import-md-copy'
 */
        create_md_copyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create_md_copy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::create_md_copy
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:27
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
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::store
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:36
 * @route '/admin/mcqs-import'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/mcqs-import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:34
* @route '/admin/mcqs-import'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:36
 * @route '/admin/mcqs-import'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:34
* @route '/admin/mcqs-import'
*/
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:36
 * @route '/admin/mcqs-import'
 */
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:34
* @route '/admin/mcqs-import'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})
=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:36
 * @route '/admin/mcqs-import'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92

/**
* @see \App\Http\Controllers\Frontend\AdminMcqImportController::store
<<<<<<< HEAD
* @see app/Http/Controllers/Frontend/AdminMcqImportController.php:34
* @route '/admin/mcqs-import'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

=======
 * @see app/Http/Controllers/Frontend/AdminMcqImportController.php:36
 * @route '/admin/mcqs-import'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
>>>>>>> 9a88d735b01af63dab132ae26c148da92584ec92
const mcqs_import = {
    create: Object.assign(create, create),
    create_copy: Object.assign(create_copy, create_copy),
    create_md_copy: Object.assign(create_md_copy, create_md_copy),
    store: Object.assign(store, store),
}

export default mcqs_import