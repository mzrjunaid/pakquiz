import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\HomeController::setQuizMode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
export const setQuizMode = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: setQuizMode.url(options),
    method: 'put',
})

setQuizMode.definition = {
    methods: ["put"],
    url: '/set-quiz-mode',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Public\HomeController::setQuizMode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
setQuizMode.url = (options?: RouteQueryOptions) => {
    return setQuizMode.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\HomeController::setQuizMode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
setQuizMode.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: setQuizMode.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Public\HomeController::setQuizMode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
    const setQuizModeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: setQuizMode.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Public\HomeController::setQuizMode
 * @see app/Http/Controllers/Public/HomeController.php:142
 * @route '/set-quiz-mode'
 */
        setQuizModeForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: setQuizMode.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    setQuizMode.form = setQuizModeForm
const HomeController = { setQuizMode }

export default HomeController