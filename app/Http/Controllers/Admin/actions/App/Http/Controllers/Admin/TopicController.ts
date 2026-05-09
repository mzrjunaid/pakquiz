import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\TopicController::index
* @see app/Http/Controllers/Admin/TopicController.php:17
* @route '/admin/topics'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/topics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TopicController::index
* @see app/Http/Controllers/Admin/TopicController.php:17
* @route '/admin/topics'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TopicController::index
* @see app/Http/Controllers/Admin/TopicController.php:17
* @route '/admin/topics'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::index
* @see app/Http/Controllers/Admin/TopicController.php:17
* @route '/admin/topics'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::index
* @see app/Http/Controllers/Admin/TopicController.php:17
* @route '/admin/topics'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::index
* @see app/Http/Controllers/Admin/TopicController.php:17
* @route '/admin/topics'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::index
* @see app/Http/Controllers/Admin/TopicController.php:17
* @route '/admin/topics'
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
* @see \App\Http\Controllers\Admin\TopicController::create
* @see app/Http/Controllers/Admin/TopicController.php:25
* @route '/admin/topics/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/topics/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TopicController::create
* @see app/Http/Controllers/Admin/TopicController.php:25
* @route '/admin/topics/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TopicController::create
* @see app/Http/Controllers/Admin/TopicController.php:25
* @route '/admin/topics/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::create
* @see app/Http/Controllers/Admin/TopicController.php:25
* @route '/admin/topics/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::create
* @see app/Http/Controllers/Admin/TopicController.php:25
* @route '/admin/topics/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::create
* @see app/Http/Controllers/Admin/TopicController.php:25
* @route '/admin/topics/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::create
* @see app/Http/Controllers/Admin/TopicController.php:25
* @route '/admin/topics/create'
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
* @see \App\Http\Controllers\Admin\TopicController::store
* @see app/Http/Controllers/Admin/TopicController.php:33
* @route '/admin/topics'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/topics',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\TopicController::store
* @see app/Http/Controllers/Admin/TopicController.php:33
* @route '/admin/topics'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TopicController::store
* @see app/Http/Controllers/Admin/TopicController.php:33
* @route '/admin/topics'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::store
* @see app/Http/Controllers/Admin/TopicController.php:33
* @route '/admin/topics'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::store
* @see app/Http/Controllers/Admin/TopicController.php:33
* @route '/admin/topics'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\TopicController::show
* @see app/Http/Controllers/Admin/TopicController.php:61
* @route '/admin/topics/{topic}'
*/
export const show = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/topics/{topic}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TopicController::show
* @see app/Http/Controllers/Admin/TopicController.php:61
* @route '/admin/topics/{topic}'
*/
show.url = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topic: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { topic: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            topic: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topic: typeof args.topic === 'object'
        ? args.topic.slug
        : args.topic,
    }

    return show.definition.url
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TopicController::show
* @see app/Http/Controllers/Admin/TopicController.php:61
* @route '/admin/topics/{topic}'
*/
show.get = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::show
* @see app/Http/Controllers/Admin/TopicController.php:61
* @route '/admin/topics/{topic}'
*/
show.head = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::show
* @see app/Http/Controllers/Admin/TopicController.php:61
* @route '/admin/topics/{topic}'
*/
const showForm = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::show
* @see app/Http/Controllers/Admin/TopicController.php:61
* @route '/admin/topics/{topic}'
*/
showForm.get = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::show
* @see app/Http/Controllers/Admin/TopicController.php:61
* @route '/admin/topics/{topic}'
*/
showForm.head = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\TopicController::edit
* @see app/Http/Controllers/Admin/TopicController.php:69
* @route '/admin/topics/{topic}/edit'
*/
export const edit = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/topics/{topic}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TopicController::edit
* @see app/Http/Controllers/Admin/TopicController.php:69
* @route '/admin/topics/{topic}/edit'
*/
edit.url = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topic: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { topic: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            topic: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topic: typeof args.topic === 'object'
        ? args.topic.slug
        : args.topic,
    }

    return edit.definition.url
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TopicController::edit
* @see app/Http/Controllers/Admin/TopicController.php:69
* @route '/admin/topics/{topic}/edit'
*/
edit.get = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::edit
* @see app/Http/Controllers/Admin/TopicController.php:69
* @route '/admin/topics/{topic}/edit'
*/
edit.head = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::edit
* @see app/Http/Controllers/Admin/TopicController.php:69
* @route '/admin/topics/{topic}/edit'
*/
const editForm = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::edit
* @see app/Http/Controllers/Admin/TopicController.php:69
* @route '/admin/topics/{topic}/edit'
*/
editForm.get = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::edit
* @see app/Http/Controllers/Admin/TopicController.php:69
* @route '/admin/topics/{topic}/edit'
*/
editForm.head = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\TopicController::update
* @see app/Http/Controllers/Admin/TopicController.php:77
* @route '/admin/topics/{topic}'
*/
export const update = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/topics/{topic}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\TopicController::update
* @see app/Http/Controllers/Admin/TopicController.php:77
* @route '/admin/topics/{topic}'
*/
update.url = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topic: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { topic: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            topic: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topic: typeof args.topic === 'object'
        ? args.topic.slug
        : args.topic,
    }

    return update.definition.url
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TopicController::update
* @see app/Http/Controllers/Admin/TopicController.php:77
* @route '/admin/topics/{topic}'
*/
update.put = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::update
* @see app/Http/Controllers/Admin/TopicController.php:77
* @route '/admin/topics/{topic}'
*/
update.patch = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::update
* @see app/Http/Controllers/Admin/TopicController.php:77
* @route '/admin/topics/{topic}'
*/
const updateForm = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::update
* @see app/Http/Controllers/Admin/TopicController.php:77
* @route '/admin/topics/{topic}'
*/
updateForm.put = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::update
* @see app/Http/Controllers/Admin/TopicController.php:77
* @route '/admin/topics/{topic}'
*/
updateForm.patch = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\TopicController::destroy
* @see app/Http/Controllers/Admin/TopicController.php:107
* @route '/admin/topics/{topic}'
*/
export const destroy = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/topics/{topic}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\TopicController::destroy
* @see app/Http/Controllers/Admin/TopicController.php:107
* @route '/admin/topics/{topic}'
*/
destroy.url = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topic: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { topic: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            topic: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topic: typeof args.topic === 'object'
        ? args.topic.slug
        : args.topic,
    }

    return destroy.definition.url
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TopicController::destroy
* @see app/Http/Controllers/Admin/TopicController.php:107
* @route '/admin/topics/{topic}'
*/
destroy.delete = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::destroy
* @see app/Http/Controllers/Admin/TopicController.php:107
* @route '/admin/topics/{topic}'
*/
const destroyForm = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TopicController::destroy
* @see app/Http/Controllers/Admin/TopicController.php:107
* @route '/admin/topics/{topic}'
*/
destroyForm.delete = (args: { topic: string | { slug: string } } | [topic: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const TopicController = { index, create, store, show, edit, update, destroy }

export default TopicController