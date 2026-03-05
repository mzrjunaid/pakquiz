import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import topic from './topic'
/**
* @see \App\Http\Controllers\Public\SubjectController::index
 * @see app/Http/Controllers/Public/SubjectController.php:24
 * @route '/subjects'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/subjects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\SubjectController::index
 * @see app/Http/Controllers/Public/SubjectController.php:24
 * @route '/subjects'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\SubjectController::index
 * @see app/Http/Controllers/Public/SubjectController.php:24
 * @route '/subjects'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\SubjectController::index
 * @see app/Http/Controllers/Public/SubjectController.php:24
 * @route '/subjects'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\SubjectController::index
 * @see app/Http/Controllers/Public/SubjectController.php:24
 * @route '/subjects'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\SubjectController::index
 * @see app/Http/Controllers/Public/SubjectController.php:24
 * @route '/subjects'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\SubjectController::index
 * @see app/Http/Controllers/Public/SubjectController.php:24
 * @route '/subjects'
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
* @see \App\Http\Controllers\Public\SubjectController::show
 * @see app/Http/Controllers/Public/SubjectController.php:69
 * @route '/{subject}'
 */
export const show = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{subject}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\SubjectController::show
 * @see app/Http/Controllers/Public/SubjectController.php:69
 * @route '/{subject}'
 */
show.url = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\SubjectController::show
 * @see app/Http/Controllers/Public/SubjectController.php:69
 * @route '/{subject}'
 */
show.get = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\SubjectController::show
 * @see app/Http/Controllers/Public/SubjectController.php:69
 * @route '/{subject}'
 */
show.head = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\SubjectController::show
 * @see app/Http/Controllers/Public/SubjectController.php:69
 * @route '/{subject}'
 */
    const showForm = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\SubjectController::show
 * @see app/Http/Controllers/Public/SubjectController.php:69
 * @route '/{subject}'
 */
        showForm.get = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\SubjectController::show
 * @see app/Http/Controllers/Public/SubjectController.php:69
 * @route '/{subject}'
 */
        showForm.head = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const subject = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
topic: Object.assign(topic, topic),
}

export default subject