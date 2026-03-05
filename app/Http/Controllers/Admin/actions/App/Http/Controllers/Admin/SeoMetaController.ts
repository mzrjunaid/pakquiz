import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
 * @see app/Http/Controllers/Admin/SeoMetaController.php:17
 * @route '/admin/seo'
 */
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:17
 * @route '/admin/seo'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
 * @see app/Http/Controllers/Admin/SeoMetaController.php:17
 * @route '/admin/seo'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
 * @see app/Http/Controllers/Admin/SeoMetaController.php:17
 * @route '/admin/seo'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
 * @see app/Http/Controllers/Admin/SeoMetaController.php:17
 * @route '/admin/seo'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
 * @see app/Http/Controllers/Admin/SeoMetaController.php:17
 * @route '/admin/seo'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::index
 * @see app/Http/Controllers/Admin/SeoMetaController.php:17
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:50
 * @route '/admin/seo/create'
 */
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:50
 * @route '/admin/seo/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
 * @see app/Http/Controllers/Admin/SeoMetaController.php:50
 * @route '/admin/seo/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
 * @see app/Http/Controllers/Admin/SeoMetaController.php:50
 * @route '/admin/seo/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
 * @see app/Http/Controllers/Admin/SeoMetaController.php:50
 * @route '/admin/seo/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
 * @see app/Http/Controllers/Admin/SeoMetaController.php:50
 * @route '/admin/seo/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::create
 * @see app/Http/Controllers/Admin/SeoMetaController.php:50
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:58
 * @route '/admin/seo'
 */
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:58
 * @route '/admin/seo'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
 * @see app/Http/Controllers/Admin/SeoMetaController.php:58
 * @route '/admin/seo'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
 * @see app/Http/Controllers/Admin/SeoMetaController.php:58
 * @route '/admin/seo'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::store
 * @see app/Http/Controllers/Admin/SeoMetaController.php:58
 * @route '/admin/seo'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:66
 * @route '/admin/seo/{seo}'
 */
export const show = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/seo/{seo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:66
 * @route '/admin/seo/{seo}'
 */
show.url = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    seo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seo: args.seo,
                }

    return show.definition.url
            .replace('{seo}', parsedArgs.seo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:66
 * @route '/admin/seo/{seo}'
 */
show.get = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:66
 * @route '/admin/seo/{seo}'
 */
show.head = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:66
 * @route '/admin/seo/{seo}'
 */
    const showForm = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:66
 * @route '/admin/seo/{seo}'
 */
        showForm.get = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::show
 * @see app/Http/Controllers/Admin/SeoMetaController.php:66
 * @route '/admin/seo/{seo}'
 */
        showForm.head = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:74
 * @route '/admin/seo/{seo}/edit'
 */
export const edit = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/seo/{seo}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
 * @see app/Http/Controllers/Admin/SeoMetaController.php:74
 * @route '/admin/seo/{seo}/edit'
 */
edit.url = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    seo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seo: args.seo,
                }

    return edit.definition.url
            .replace('{seo}', parsedArgs.seo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
 * @see app/Http/Controllers/Admin/SeoMetaController.php:74
 * @route '/admin/seo/{seo}/edit'
 */
edit.get = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
 * @see app/Http/Controllers/Admin/SeoMetaController.php:74
 * @route '/admin/seo/{seo}/edit'
 */
edit.head = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
 * @see app/Http/Controllers/Admin/SeoMetaController.php:74
 * @route '/admin/seo/{seo}/edit'
 */
    const editForm = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
 * @see app/Http/Controllers/Admin/SeoMetaController.php:74
 * @route '/admin/seo/{seo}/edit'
 */
        editForm.get = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::edit
 * @see app/Http/Controllers/Admin/SeoMetaController.php:74
 * @route '/admin/seo/{seo}/edit'
 */
        editForm.head = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:82
 * @route '/admin/seo/{seo}'
 */
export const update = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/seo/{seo}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
 * @see app/Http/Controllers/Admin/SeoMetaController.php:82
 * @route '/admin/seo/{seo}'
 */
update.url = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    seo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seo: args.seo,
                }

    return update.definition.url
            .replace('{seo}', parsedArgs.seo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
 * @see app/Http/Controllers/Admin/SeoMetaController.php:82
 * @route '/admin/seo/{seo}'
 */
update.put = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
 * @see app/Http/Controllers/Admin/SeoMetaController.php:82
 * @route '/admin/seo/{seo}'
 */
update.patch = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\SeoMetaController::update
 * @see app/Http/Controllers/Admin/SeoMetaController.php:82
 * @route '/admin/seo/{seo}'
 */
    const updateForm = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:82
 * @route '/admin/seo/{seo}'
 */
        updateForm.put = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:82
 * @route '/admin/seo/{seo}'
 */
        updateForm.patch = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/Admin/SeoMetaController.php:90
 * @route '/admin/seo/{seo}'
 */
export const destroy = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/seo/{seo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
 * @see app/Http/Controllers/Admin/SeoMetaController.php:90
 * @route '/admin/seo/{seo}'
 */
destroy.url = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    seo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seo: args.seo,
                }

    return destroy.definition.url
            .replace('{seo}', parsedArgs.seo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
 * @see app/Http/Controllers/Admin/SeoMetaController.php:90
 * @route '/admin/seo/{seo}'
 */
destroy.delete = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
 * @see app/Http/Controllers/Admin/SeoMetaController.php:90
 * @route '/admin/seo/{seo}'
 */
    const destroyForm = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SeoMetaController::destroy
 * @see app/Http/Controllers/Admin/SeoMetaController.php:90
 * @route '/admin/seo/{seo}'
 */
        destroyForm.delete = (args: { seo: string | number } | [seo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const SeoMetaController = { index, create, store, show, edit, update, destroy }

export default SeoMetaController