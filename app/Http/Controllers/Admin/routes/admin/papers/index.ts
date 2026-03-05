import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PaperController::index
 * @see app/Http/Controllers/Admin/PaperController.php:18
 * @route '/admin/papers'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/papers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PaperController::index
 * @see app/Http/Controllers/Admin/PaperController.php:18
 * @route '/admin/papers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PaperController::index
 * @see app/Http/Controllers/Admin/PaperController.php:18
 * @route '/admin/papers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PaperController::index
 * @see app/Http/Controllers/Admin/PaperController.php:18
 * @route '/admin/papers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PaperController::index
 * @see app/Http/Controllers/Admin/PaperController.php:18
 * @route '/admin/papers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PaperController::index
 * @see app/Http/Controllers/Admin/PaperController.php:18
 * @route '/admin/papers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PaperController::index
 * @see app/Http/Controllers/Admin/PaperController.php:18
 * @route '/admin/papers'
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
* @see \App\Http\Controllers\Admin\PaperController::create
 * @see app/Http/Controllers/Admin/PaperController.php:64
 * @route '/admin/papers/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/papers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PaperController::create
 * @see app/Http/Controllers/Admin/PaperController.php:64
 * @route '/admin/papers/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PaperController::create
 * @see app/Http/Controllers/Admin/PaperController.php:64
 * @route '/admin/papers/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PaperController::create
 * @see app/Http/Controllers/Admin/PaperController.php:64
 * @route '/admin/papers/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PaperController::create
 * @see app/Http/Controllers/Admin/PaperController.php:64
 * @route '/admin/papers/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PaperController::create
 * @see app/Http/Controllers/Admin/PaperController.php:64
 * @route '/admin/papers/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PaperController::create
 * @see app/Http/Controllers/Admin/PaperController.php:64
 * @route '/admin/papers/create'
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
* @see \App\Http\Controllers\Admin\PaperController::store
 * @see app/Http/Controllers/Admin/PaperController.php:72
 * @route '/admin/papers'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/papers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PaperController::store
 * @see app/Http/Controllers/Admin/PaperController.php:72
 * @route '/admin/papers'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PaperController::store
 * @see app/Http/Controllers/Admin/PaperController.php:72
 * @route '/admin/papers'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PaperController::store
 * @see app/Http/Controllers/Admin/PaperController.php:72
 * @route '/admin/papers'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PaperController::store
 * @see app/Http/Controllers/Admin/PaperController.php:72
 * @route '/admin/papers'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\PaperController::show
 * @see app/Http/Controllers/Admin/PaperController.php:80
 * @route '/admin/papers/{paper}'
 */
export const show = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/papers/{paper}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PaperController::show
 * @see app/Http/Controllers/Admin/PaperController.php:80
 * @route '/admin/papers/{paper}'
 */
show.url = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { paper: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    paper: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        paper: args.paper,
                }

    return show.definition.url
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PaperController::show
 * @see app/Http/Controllers/Admin/PaperController.php:80
 * @route '/admin/papers/{paper}'
 */
show.get = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PaperController::show
 * @see app/Http/Controllers/Admin/PaperController.php:80
 * @route '/admin/papers/{paper}'
 */
show.head = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PaperController::show
 * @see app/Http/Controllers/Admin/PaperController.php:80
 * @route '/admin/papers/{paper}'
 */
    const showForm = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PaperController::show
 * @see app/Http/Controllers/Admin/PaperController.php:80
 * @route '/admin/papers/{paper}'
 */
        showForm.get = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PaperController::show
 * @see app/Http/Controllers/Admin/PaperController.php:80
 * @route '/admin/papers/{paper}'
 */
        showForm.head = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PaperController::edit
 * @see app/Http/Controllers/Admin/PaperController.php:88
 * @route '/admin/papers/{paper}/edit'
 */
export const edit = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/papers/{paper}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PaperController::edit
 * @see app/Http/Controllers/Admin/PaperController.php:88
 * @route '/admin/papers/{paper}/edit'
 */
edit.url = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { paper: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    paper: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        paper: args.paper,
                }

    return edit.definition.url
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PaperController::edit
 * @see app/Http/Controllers/Admin/PaperController.php:88
 * @route '/admin/papers/{paper}/edit'
 */
edit.get = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PaperController::edit
 * @see app/Http/Controllers/Admin/PaperController.php:88
 * @route '/admin/papers/{paper}/edit'
 */
edit.head = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PaperController::edit
 * @see app/Http/Controllers/Admin/PaperController.php:88
 * @route '/admin/papers/{paper}/edit'
 */
    const editForm = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PaperController::edit
 * @see app/Http/Controllers/Admin/PaperController.php:88
 * @route '/admin/papers/{paper}/edit'
 */
        editForm.get = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PaperController::edit
 * @see app/Http/Controllers/Admin/PaperController.php:88
 * @route '/admin/papers/{paper}/edit'
 */
        editForm.head = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PaperController::update
 * @see app/Http/Controllers/Admin/PaperController.php:96
 * @route '/admin/papers/{paper}'
 */
export const update = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/papers/{paper}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\PaperController::update
 * @see app/Http/Controllers/Admin/PaperController.php:96
 * @route '/admin/papers/{paper}'
 */
update.url = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { paper: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    paper: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        paper: args.paper,
                }

    return update.definition.url
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PaperController::update
 * @see app/Http/Controllers/Admin/PaperController.php:96
 * @route '/admin/papers/{paper}'
 */
update.put = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\PaperController::update
 * @see app/Http/Controllers/Admin/PaperController.php:96
 * @route '/admin/papers/{paper}'
 */
update.patch = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\PaperController::update
 * @see app/Http/Controllers/Admin/PaperController.php:96
 * @route '/admin/papers/{paper}'
 */
    const updateForm = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PaperController::update
 * @see app/Http/Controllers/Admin/PaperController.php:96
 * @route '/admin/papers/{paper}'
 */
        updateForm.put = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\PaperController::update
 * @see app/Http/Controllers/Admin/PaperController.php:96
 * @route '/admin/papers/{paper}'
 */
        updateForm.patch = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\PaperController::destroy
 * @see app/Http/Controllers/Admin/PaperController.php:104
 * @route '/admin/papers/{paper}'
 */
export const destroy = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/papers/{paper}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\PaperController::destroy
 * @see app/Http/Controllers/Admin/PaperController.php:104
 * @route '/admin/papers/{paper}'
 */
destroy.url = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { paper: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    paper: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        paper: args.paper,
                }

    return destroy.definition.url
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PaperController::destroy
 * @see app/Http/Controllers/Admin/PaperController.php:104
 * @route '/admin/papers/{paper}'
 */
destroy.delete = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\PaperController::destroy
 * @see app/Http/Controllers/Admin/PaperController.php:104
 * @route '/admin/papers/{paper}'
 */
    const destroyForm = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PaperController::destroy
 * @see app/Http/Controllers/Admin/PaperController.php:104
 * @route '/admin/papers/{paper}'
 */
        destroyForm.delete = (args: { paper: string | number } | [paper: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const papers = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default papers