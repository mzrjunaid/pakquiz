import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\McqController::index
 * @see app/Http/Controllers/Admin/McqController.php:19
 * @route '/admin/mcqs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\McqController::index
 * @see app/Http/Controllers/Admin/McqController.php:19
 * @route '/admin/mcqs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\McqController::index
 * @see app/Http/Controllers/Admin/McqController.php:19
 * @route '/admin/mcqs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\McqController::index
 * @see app/Http/Controllers/Admin/McqController.php:19
 * @route '/admin/mcqs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\McqController::index
 * @see app/Http/Controllers/Admin/McqController.php:19
 * @route '/admin/mcqs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\McqController::index
 * @see app/Http/Controllers/Admin/McqController.php:19
 * @route '/admin/mcqs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\McqController::index
 * @see app/Http/Controllers/Admin/McqController.php:19
 * @route '/admin/mcqs'
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
* @see \App\Http\Controllers\Admin\McqController::create
 * @see app/Http/Controllers/Admin/McqController.php:64
 * @route '/admin/mcqs/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\McqController::create
 * @see app/Http/Controllers/Admin/McqController.php:64
 * @route '/admin/mcqs/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\McqController::create
 * @see app/Http/Controllers/Admin/McqController.php:64
 * @route '/admin/mcqs/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\McqController::create
 * @see app/Http/Controllers/Admin/McqController.php:64
 * @route '/admin/mcqs/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\McqController::create
 * @see app/Http/Controllers/Admin/McqController.php:64
 * @route '/admin/mcqs/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\McqController::create
 * @see app/Http/Controllers/Admin/McqController.php:64
 * @route '/admin/mcqs/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\McqController::create
 * @see app/Http/Controllers/Admin/McqController.php:64
 * @route '/admin/mcqs/create'
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
* @see \App\Http\Controllers\Admin\McqController::store
 * @see app/Http/Controllers/Admin/McqController.php:72
 * @route '/admin/mcqs'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/mcqs',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\McqController::store
 * @see app/Http/Controllers/Admin/McqController.php:72
 * @route '/admin/mcqs'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\McqController::store
 * @see app/Http/Controllers/Admin/McqController.php:72
 * @route '/admin/mcqs'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\McqController::store
 * @see app/Http/Controllers/Admin/McqController.php:72
 * @route '/admin/mcqs'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\McqController::store
 * @see app/Http/Controllers/Admin/McqController.php:72
 * @route '/admin/mcqs'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\McqController::show
 * @see app/Http/Controllers/Admin/McqController.php:80
 * @route '/admin/mcqs/{mcq}'
 */
export const show = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs/{mcq}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\McqController::show
 * @see app/Http/Controllers/Admin/McqController.php:80
 * @route '/admin/mcqs/{mcq}'
 */
show.url = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mcq: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { mcq: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    mcq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        mcq: typeof args.mcq === 'object'
                ? args.mcq.slug
                : args.mcq,
                }

    return show.definition.url
            .replace('{mcq}', parsedArgs.mcq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\McqController::show
 * @see app/Http/Controllers/Admin/McqController.php:80
 * @route '/admin/mcqs/{mcq}'
 */
show.get = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\McqController::show
 * @see app/Http/Controllers/Admin/McqController.php:80
 * @route '/admin/mcqs/{mcq}'
 */
show.head = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\McqController::show
 * @see app/Http/Controllers/Admin/McqController.php:80
 * @route '/admin/mcqs/{mcq}'
 */
    const showForm = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\McqController::show
 * @see app/Http/Controllers/Admin/McqController.php:80
 * @route '/admin/mcqs/{mcq}'
 */
        showForm.get = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\McqController::show
 * @see app/Http/Controllers/Admin/McqController.php:80
 * @route '/admin/mcqs/{mcq}'
 */
        showForm.head = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\McqController::edit
 * @see app/Http/Controllers/Admin/McqController.php:95
 * @route '/admin/mcqs/{mcq}/edit'
 */
export const edit = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/mcqs/{mcq}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\McqController::edit
 * @see app/Http/Controllers/Admin/McqController.php:95
 * @route '/admin/mcqs/{mcq}/edit'
 */
edit.url = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mcq: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    mcq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        mcq: args.mcq,
                }

    return edit.definition.url
            .replace('{mcq}', parsedArgs.mcq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\McqController::edit
 * @see app/Http/Controllers/Admin/McqController.php:95
 * @route '/admin/mcqs/{mcq}/edit'
 */
edit.get = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\McqController::edit
 * @see app/Http/Controllers/Admin/McqController.php:95
 * @route '/admin/mcqs/{mcq}/edit'
 */
edit.head = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\McqController::edit
 * @see app/Http/Controllers/Admin/McqController.php:95
 * @route '/admin/mcqs/{mcq}/edit'
 */
    const editForm = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\McqController::edit
 * @see app/Http/Controllers/Admin/McqController.php:95
 * @route '/admin/mcqs/{mcq}/edit'
 */
        editForm.get = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\McqController::edit
 * @see app/Http/Controllers/Admin/McqController.php:95
 * @route '/admin/mcqs/{mcq}/edit'
 */
        editForm.head = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\McqController::update
 * @see app/Http/Controllers/Admin/McqController.php:103
 * @route '/admin/mcqs/{mcq}'
 */
export const update = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/mcqs/{mcq}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\McqController::update
 * @see app/Http/Controllers/Admin/McqController.php:103
 * @route '/admin/mcqs/{mcq}'
 */
update.url = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mcq: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    mcq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        mcq: args.mcq,
                }

    return update.definition.url
            .replace('{mcq}', parsedArgs.mcq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\McqController::update
 * @see app/Http/Controllers/Admin/McqController.php:103
 * @route '/admin/mcqs/{mcq}'
 */
update.put = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\McqController::update
 * @see app/Http/Controllers/Admin/McqController.php:103
 * @route '/admin/mcqs/{mcq}'
 */
update.patch = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\McqController::update
 * @see app/Http/Controllers/Admin/McqController.php:103
 * @route '/admin/mcqs/{mcq}'
 */
    const updateForm = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\McqController::update
 * @see app/Http/Controllers/Admin/McqController.php:103
 * @route '/admin/mcqs/{mcq}'
 */
        updateForm.put = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\McqController::update
 * @see app/Http/Controllers/Admin/McqController.php:103
 * @route '/admin/mcqs/{mcq}'
 */
        updateForm.patch = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\McqController::destroy
 * @see app/Http/Controllers/Admin/McqController.php:111
 * @route '/admin/mcqs/{mcq}'
 */
export const destroy = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/mcqs/{mcq}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\McqController::destroy
 * @see app/Http/Controllers/Admin/McqController.php:111
 * @route '/admin/mcqs/{mcq}'
 */
destroy.url = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mcq: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    mcq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        mcq: args.mcq,
                }

    return destroy.definition.url
            .replace('{mcq}', parsedArgs.mcq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\McqController::destroy
 * @see app/Http/Controllers/Admin/McqController.php:111
 * @route '/admin/mcqs/{mcq}'
 */
destroy.delete = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\McqController::destroy
 * @see app/Http/Controllers/Admin/McqController.php:111
 * @route '/admin/mcqs/{mcq}'
 */
    const destroyForm = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\McqController::destroy
 * @see app/Http/Controllers/Admin/McqController.php:111
 * @route '/admin/mcqs/{mcq}'
 */
        destroyForm.delete = (args: { mcq: string | number } | [mcq: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const mcqs = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default mcqs