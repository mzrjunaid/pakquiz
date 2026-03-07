import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
const LivewirePageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController.url(options),
    method: 'get',
})

LivewirePageController.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController.url = (options?: RouteQueryOptions) => {
    return LivewirePageController.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
    const LivewirePageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
        LivewirePageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
        LivewirePageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController.form = LivewirePageControllerForm
export default LivewirePageController