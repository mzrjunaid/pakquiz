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
/**
* @see \App\Http\Controllers\Public\SearchController::index
 * @see app/Http/Controllers/Public/SearchController.php:15
 * @route '/search'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\SearchController::index
 * @see app/Http/Controllers/Public/SearchController.php:15
 * @route '/search'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\SearchController::index
 * @see app/Http/Controllers/Public/SearchController.php:15
 * @route '/search'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\SearchController::index
 * @see app/Http/Controllers/Public/SearchController.php:15
 * @route '/search'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\SearchController::index
 * @see app/Http/Controllers/Public/SearchController.php:15
 * @route '/search'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\SearchController::index
 * @see app/Http/Controllers/Public/SearchController.php:15
 * @route '/search'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\SearchController::index
 * @see app/Http/Controllers/Public/SearchController.php:15
 * @route '/search'
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
const SearchController = { suggestions, index }

export default SearchController