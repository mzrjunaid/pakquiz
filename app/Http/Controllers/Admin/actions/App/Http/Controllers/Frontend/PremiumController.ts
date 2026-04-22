import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\PremiumController::index
 * @see app/Http/Controllers/Frontend/PremiumController.php:12
 * @route '/premium'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/premium',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\PremiumController::index
 * @see app/Http/Controllers/Frontend/PremiumController.php:12
 * @route '/premium'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\PremiumController::index
 * @see app/Http/Controllers/Frontend/PremiumController.php:12
 * @route '/premium'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\PremiumController::index
 * @see app/Http/Controllers/Frontend/PremiumController.php:12
 * @route '/premium'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\PremiumController::index
 * @see app/Http/Controllers/Frontend/PremiumController.php:12
 * @route '/premium'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\PremiumController::index
 * @see app/Http/Controllers/Frontend/PremiumController.php:12
 * @route '/premium'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\PremiumController::index
 * @see app/Http/Controllers/Frontend/PremiumController.php:12
 * @route '/premium'
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
const PremiumController = { index }

export default PremiumController