import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\SearchController::suggestions
 * @see app/Http/Controllers/Public/SearchController.php:57
 * @route '/api/search-suggestions'
 */
export const suggestions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suggestions.url(options),
    method: 'get',
})

suggestions.definition = {
    methods: ["get","head"],
    url: '/api/search-suggestions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\SearchController::suggestions
 * @see app/Http/Controllers/Public/SearchController.php:57
 * @route '/api/search-suggestions'
 */
suggestions.url = (options?: RouteQueryOptions) => {
    return suggestions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\SearchController::suggestions
 * @see app/Http/Controllers/Public/SearchController.php:57
 * @route '/api/search-suggestions'
 */
suggestions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suggestions.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\SearchController::suggestions
 * @see app/Http/Controllers/Public/SearchController.php:57
 * @route '/api/search-suggestions'
 */
suggestions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: suggestions.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\SearchController::suggestions
 * @see app/Http/Controllers/Public/SearchController.php:57
 * @route '/api/search-suggestions'
 */
    const suggestionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: suggestions.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\SearchController::suggestions
 * @see app/Http/Controllers/Public/SearchController.php:57
 * @route '/api/search-suggestions'
 */
        suggestionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: suggestions.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\SearchController::suggestions
 * @see app/Http/Controllers/Public/SearchController.php:57
 * @route '/api/search-suggestions'
 */
        suggestionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: suggestions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    suggestions.form = suggestionsForm
const SearchController = { suggestions }

export default SearchController