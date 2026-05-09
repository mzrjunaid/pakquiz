import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SchedulerController::runSeoUpdate
* @see app/Http/Controllers/Admin/SchedulerController.php:11
* @route '/admin/run-seo-update'
*/
export const runSeoUpdate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runSeoUpdate.url(options),
    method: 'get',
})

runSeoUpdate.definition = {
    methods: ["get","head"],
    url: '/admin/run-seo-update',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SchedulerController::runSeoUpdate
* @see app/Http/Controllers/Admin/SchedulerController.php:11
* @route '/admin/run-seo-update'
*/
runSeoUpdate.url = (options?: RouteQueryOptions) => {
    return runSeoUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SchedulerController::runSeoUpdate
* @see app/Http/Controllers/Admin/SchedulerController.php:11
* @route '/admin/run-seo-update'
*/
runSeoUpdate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: runSeoUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SchedulerController::runSeoUpdate
* @see app/Http/Controllers/Admin/SchedulerController.php:11
* @route '/admin/run-seo-update'
*/
runSeoUpdate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: runSeoUpdate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SchedulerController::runSeoUpdate
* @see app/Http/Controllers/Admin/SchedulerController.php:11
* @route '/admin/run-seo-update'
*/
const runSeoUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runSeoUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SchedulerController::runSeoUpdate
* @see app/Http/Controllers/Admin/SchedulerController.php:11
* @route '/admin/run-seo-update'
*/
runSeoUpdateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runSeoUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SchedulerController::runSeoUpdate
* @see app/Http/Controllers/Admin/SchedulerController.php:11
* @route '/admin/run-seo-update'
*/
runSeoUpdateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: runSeoUpdate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

runSeoUpdate.form = runSeoUpdateForm

const SchedulerController = { runSeoUpdate }

export default SchedulerController