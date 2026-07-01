import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import testingServices from './testing-services'
import departments from './departments'
import subjects from './subjects'
import topics from './topics'
import papers from './papers'
import jobs from './jobs'
import mcqs from './mcqs'
import seo from './seo'
import mcqs_import from './mcqs_import'
import papers_import from './papers_import'
/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:14
* @route '/admin/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Http\Controllers\Admin\McqController::mcq_og_image
* @see app/Http/Controllers/Admin/McqController.php:273
* @route '/admin/api/generate-mcq-og-image/{mcq}'
*/
export const mcq_og_image = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mcq_og_image.url(args, options),
    method: 'get',
})

mcq_og_image.definition = {
    methods: ["get","head"],
    url: '/admin/api/generate-mcq-og-image/{mcq}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\McqController::mcq_og_image
* @see app/Http/Controllers/Admin/McqController.php:273
* @route '/admin/api/generate-mcq-og-image/{mcq}'
*/
mcq_og_image.url = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
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

    return mcq_og_image.definition.url
            .replace('{mcq}', parsedArgs.mcq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\McqController::mcq_og_image
* @see app/Http/Controllers/Admin/McqController.php:273
* @route '/admin/api/generate-mcq-og-image/{mcq}'
*/
mcq_og_image.get = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mcq_og_image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\McqController::mcq_og_image
* @see app/Http/Controllers/Admin/McqController.php:273
* @route '/admin/api/generate-mcq-og-image/{mcq}'
*/
mcq_og_image.head = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: mcq_og_image.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\McqController::mcq_og_image
* @see app/Http/Controllers/Admin/McqController.php:273
* @route '/admin/api/generate-mcq-og-image/{mcq}'
*/
const mcq_og_imageForm = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mcq_og_image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\McqController::mcq_og_image
* @see app/Http/Controllers/Admin/McqController.php:273
* @route '/admin/api/generate-mcq-og-image/{mcq}'
*/
mcq_og_imageForm.get = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mcq_og_image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\McqController::mcq_og_image
* @see app/Http/Controllers/Admin/McqController.php:273
* @route '/admin/api/generate-mcq-og-image/{mcq}'
*/
mcq_og_imageForm.head = (args: { mcq: string | { slug: string } } | [mcq: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mcq_og_image.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

mcq_og_image.form = mcq_og_imageForm

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

const admin = {
    dashboard: Object.assign(dashboard, dashboard),
    testingServices: Object.assign(testingServices, testingServices),
    departments: Object.assign(departments, departments),
    subjects: Object.assign(subjects, subjects),
    topics: Object.assign(topics, topics),
    papers: Object.assign(papers, papers),
    jobs: Object.assign(jobs, jobs),
    mcqs: Object.assign(mcqs, mcqs),
    seo: Object.assign(seo, seo),
    mcq_og_image: Object.assign(mcq_og_image, mcq_og_image),
    runSeoUpdate: Object.assign(runSeoUpdate, runSeoUpdate),
    mcqs_import: Object.assign(mcqs_import, mcqs_import),
    papers_import: Object.assign(papers_import, papers_import),
}

export default admin