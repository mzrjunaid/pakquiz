import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\SubjectController::topics
 * @see app/Http/Controllers/Public/SubjectController.php:168
 * @route '/{subject}/topics'
 */
export const topics = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topics.url(args, options),
    method: 'get',
})

topics.definition = {
    methods: ["get","head"],
    url: '/{subject}/topics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\SubjectController::topics
 * @see app/Http/Controllers/Public/SubjectController.php:168
 * @route '/{subject}/topics'
 */
topics.url = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return topics.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\SubjectController::topics
 * @see app/Http/Controllers/Public/SubjectController.php:168
 * @route '/{subject}/topics'
 */
topics.get = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topics.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\SubjectController::topics
 * @see app/Http/Controllers/Public/SubjectController.php:168
 * @route '/{subject}/topics'
 */
topics.head = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: topics.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\SubjectController::topics
 * @see app/Http/Controllers/Public/SubjectController.php:168
 * @route '/{subject}/topics'
 */
    const topicsForm = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: topics.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\SubjectController::topics
 * @see app/Http/Controllers/Public/SubjectController.php:168
 * @route '/{subject}/topics'
 */
        topicsForm.get = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: topics.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\SubjectController::topics
 * @see app/Http/Controllers/Public/SubjectController.php:168
 * @route '/{subject}/topics'
 */
        topicsForm.head = (args: { subject: string | { slug: string } } | [subject: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: topics.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    topics.form = topicsForm
/**
* @see \App\Http\Controllers\Public\SubjectController::topics_show
 * @see app/Http/Controllers/Public/SubjectController.php:180
 * @route '/{subject}/{topic}'
 */
export const topics_show = (args: { subject: string | { slug: string }, topic: string | { slug: string } } | [subject: string | { slug: string }, topic: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topics_show.url(args, options),
    method: 'get',
})

topics_show.definition = {
    methods: ["get","head"],
    url: '/{subject}/{topic}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\SubjectController::topics_show
 * @see app/Http/Controllers/Public/SubjectController.php:180
 * @route '/{subject}/{topic}'
 */
topics_show.url = (args: { subject: string | { slug: string }, topic: string | { slug: string } } | [subject: string | { slug: string }, topic: string | { slug: string } ], options?: RouteQueryOptions) => {
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

    return topics_show.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\SubjectController::topics_show
 * @see app/Http/Controllers/Public/SubjectController.php:180
 * @route '/{subject}/{topic}'
 */
topics_show.get = (args: { subject: string | { slug: string }, topic: string | { slug: string } } | [subject: string | { slug: string }, topic: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topics_show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\SubjectController::topics_show
 * @see app/Http/Controllers/Public/SubjectController.php:180
 * @route '/{subject}/{topic}'
 */
topics_show.head = (args: { subject: string | { slug: string }, topic: string | { slug: string } } | [subject: string | { slug: string }, topic: string | { slug: string } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: topics_show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\SubjectController::topics_show
 * @see app/Http/Controllers/Public/SubjectController.php:180
 * @route '/{subject}/{topic}'
 */
    const topics_showForm = (args: { subject: string | { slug: string }, topic: string | { slug: string } } | [subject: string | { slug: string }, topic: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: topics_show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\SubjectController::topics_show
 * @see app/Http/Controllers/Public/SubjectController.php:180
 * @route '/{subject}/{topic}'
 */
        topics_showForm.get = (args: { subject: string | { slug: string }, topic: string | { slug: string } } | [subject: string | { slug: string }, topic: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: topics_show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\SubjectController::topics_show
 * @see app/Http/Controllers/Public/SubjectController.php:180
 * @route '/{subject}/{topic}'
 */
        topics_showForm.head = (args: { subject: string | { slug: string }, topic: string | { slug: string } } | [subject: string | { slug: string }, topic: string | { slug: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: topics_show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    topics_show.form = topics_showForm
const SubjectController = { topics, topics_show }

export default SubjectController