import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\lms\LMSController::index
 * @see app/Http/Controllers/lms/LMSController.php:14
 * @route '/lms'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/lms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\lms\LMSController::index
 * @see app/Http/Controllers/lms/LMSController.php:14
 * @route '/lms'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\lms\LMSController::index
 * @see app/Http/Controllers/lms/LMSController.php:14
 * @route '/lms'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\lms\LMSController::index
 * @see app/Http/Controllers/lms/LMSController.php:14
 * @route '/lms'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\lms\LMSController::index
 * @see app/Http/Controllers/lms/LMSController.php:14
 * @route '/lms'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\lms\LMSController::index
 * @see app/Http/Controllers/lms/LMSController.php:14
 * @route '/lms'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\lms\LMSController::index
 * @see app/Http/Controllers/lms/LMSController.php:14
 * @route '/lms'
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
* @see \App\Http\Controllers\lms\LMSController::subjectShow
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
export const subjectShow = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subjectShow.url(options),
    method: 'get',
})

subjectShow.definition = {
    methods: ["get","head"],
    url: '/lms/subjects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\lms\LMSController::subjectShow
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
subjectShow.url = (options?: RouteQueryOptions) => {
    return subjectShow.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\lms\LMSController::subjectShow
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
subjectShow.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subjectShow.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\lms\LMSController::subjectShow
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
subjectShow.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: subjectShow.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\lms\LMSController::subjectShow
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
    const subjectShowForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: subjectShow.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\lms\LMSController::subjectShow
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
        subjectShowForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subjectShow.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\lms\LMSController::subjectShow
 * @see app/Http/Controllers/lms/LMSController.php:19
 * @route '/lms/subjects'
 */
        subjectShowForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subjectShow.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    subjectShow.form = subjectShowForm
const LMSController = { index, subjectShow }

export default LMSController