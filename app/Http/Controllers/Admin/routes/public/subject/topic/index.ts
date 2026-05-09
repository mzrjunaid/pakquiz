import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\SubjectController::index
 * @see app/Http/Controllers/Frontend/SubjectController.php:168
 * @route '/{subject}/topics'
 */
export const index = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{subject}/topics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\SubjectController::index
 * @see app/Http/Controllers/Frontend/SubjectController.php:168
 * @route '/{subject}/topics'
 */
index.url = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { subject: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    subject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subject: typeof args.subject === 'object'
                ? args.subject.slug
                : args.subject,
                }

    return index.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\SubjectController::index
 * @see app/Http/Controllers/Frontend/SubjectController.php:168
 * @route '/{subject}/topics'
 */
index.get = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\SubjectController::index
 * @see app/Http/Controllers/Frontend/SubjectController.php:168
 * @route '/{subject}/topics'
 */
index.head = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\SubjectController::index
 * @see app/Http/Controllers/Frontend/SubjectController.php:168
 * @route '/{subject}/topics'
 */
    const indexForm = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\SubjectController::index
 * @see app/Http/Controllers/Frontend/SubjectController.php:168
 * @route '/{subject}/topics'
 */
        indexForm.get = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\SubjectController::index
 * @see app/Http/Controllers/Frontend/SubjectController.php:168
 * @route '/{subject}/topics'
 */
        indexForm.head = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
export const show = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{subject}/{topic}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
show.url = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    subject: args[0],
                    topic: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subject: typeof args.subject === 'object'
                ? args.subject.slug
                : args.subject,
                                topic: typeof args.topic === 'object'
                ? args.topic.slug
                : args.topic,
                }

    return show.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
show.get = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
show.head = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
    const showForm = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
        showForm.get = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
        showForm.head = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const topic = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
}

export default topic