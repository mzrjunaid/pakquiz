import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LMSController::lms
 * @see app/Http/Controllers/LMSController.php:13
 * @route '/lms'
 */
export const lms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lms.url(options),
    method: 'get',
})

lms.definition = {
    methods: ["get","head"],
    url: '/lms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LMSController::lms
 * @see app/Http/Controllers/LMSController.php:13
 * @route '/lms'
 */
lms.url = (options?: RouteQueryOptions) => {
    return lms.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LMSController::lms
 * @see app/Http/Controllers/LMSController.php:13
 * @route '/lms'
 */
lms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lms.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LMSController::lms
 * @see app/Http/Controllers/LMSController.php:13
 * @route '/lms'
 */
lms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lms.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LMSController::lms
 * @see app/Http/Controllers/LMSController.php:13
 * @route '/lms'
 */
    const lmsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lms.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LMSController::lms
 * @see app/Http/Controllers/LMSController.php:13
 * @route '/lms'
 */
        lmsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lms.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LMSController::lms
 * @see app/Http/Controllers/LMSController.php:13
 * @route '/lms'
 */
        lmsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lms.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    lms.form = lmsForm
const lmsNamespace = {
    lms: Object.assign(lms, lms),
}

export default lmsNamespace