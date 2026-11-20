import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\lms\LMSController::show
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/lms/subjects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\lms\LMSController::show
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\lms\LMSController::show
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\lms\LMSController::show
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\lms\LMSController::show
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
    const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\lms\LMSController::show
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
        showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\lms\LMSController::show
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
        showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const subjects = {
    show: Object.assign(show, show),
}

export default subjects