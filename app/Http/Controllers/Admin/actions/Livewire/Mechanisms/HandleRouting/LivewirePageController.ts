import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
const LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
    const LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
        LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/'
 */
        LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9.form = LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
const LivewirePageController0efea5765db02e3af45380ee625e3ea3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController0efea5765db02e3af45380ee625e3ea3.url(options),
    method: 'get',
})

LivewirePageController0efea5765db02e3af45380ee625e3ea3.definition = {
    methods: ["get","head"],
    url: '/demo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
LivewirePageController0efea5765db02e3af45380ee625e3ea3.url = (options?: RouteQueryOptions) => {
    return LivewirePageController0efea5765db02e3af45380ee625e3ea3.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
LivewirePageController0efea5765db02e3af45380ee625e3ea3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController0efea5765db02e3af45380ee625e3ea3.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
LivewirePageController0efea5765db02e3af45380ee625e3ea3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController0efea5765db02e3af45380ee625e3ea3.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
    const LivewirePageController0efea5765db02e3af45380ee625e3ea3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController0efea5765db02e3af45380ee625e3ea3.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
        LivewirePageController0efea5765db02e3af45380ee625e3ea3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController0efea5765db02e3af45380ee625e3ea3.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/demo'
 */
        LivewirePageController0efea5765db02e3af45380ee625e3ea3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController0efea5765db02e3af45380ee625e3ea3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController0efea5765db02e3af45380ee625e3ea3.form = LivewirePageController0efea5765db02e3af45380ee625e3ea3Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/quiz/result'
 */
const LivewirePageControllerd5c010e45017d141227b73be4d47be26 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerd5c010e45017d141227b73be4d47be26.url(options),
    method: 'get',
})

LivewirePageControllerd5c010e45017d141227b73be4d47be26.definition = {
    methods: ["get","head"],
    url: '/quiz/result',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/quiz/result'
 */
LivewirePageControllerd5c010e45017d141227b73be4d47be26.url = (options?: RouteQueryOptions) => {
    return LivewirePageControllerd5c010e45017d141227b73be4d47be26.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/quiz/result'
 */
LivewirePageControllerd5c010e45017d141227b73be4d47be26.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerd5c010e45017d141227b73be4d47be26.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/quiz/result'
 */
LivewirePageControllerd5c010e45017d141227b73be4d47be26.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllerd5c010e45017d141227b73be4d47be26.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/quiz/result'
 */
    const LivewirePageControllerd5c010e45017d141227b73be4d47be26Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllerd5c010e45017d141227b73be4d47be26.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/quiz/result'
 */
        LivewirePageControllerd5c010e45017d141227b73be4d47be26Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerd5c010e45017d141227b73be4d47be26.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/quiz/result'
 */
        LivewirePageControllerd5c010e45017d141227b73be4d47be26Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerd5c010e45017d141227b73be4d47be26.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllerd5c010e45017d141227b73be4d47be26.form = LivewirePageControllerd5c010e45017d141227b73be4d47be26Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
const LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.url(options),
    method: 'get',
})

LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.url = (options?: RouteQueryOptions) => {
    return LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
    const LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
        LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/about-us'
 */
        LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7.form = LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
const LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
    method: 'get',
})

LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.definition = {
    methods: ["get","head"],
    url: '/contact-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.url = (options?: RouteQueryOptions) => {
    return LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
    const LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
        LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/contact-us'
 */
        LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9.form = LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
const LivewirePageController2e48eb9fa7004102118bc91291728da8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController2e48eb9fa7004102118bc91291728da8.url(options),
    method: 'get',
})

LivewirePageController2e48eb9fa7004102118bc91291728da8.definition = {
    methods: ["get","head"],
    url: '/join-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
LivewirePageController2e48eb9fa7004102118bc91291728da8.url = (options?: RouteQueryOptions) => {
    return LivewirePageController2e48eb9fa7004102118bc91291728da8.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
LivewirePageController2e48eb9fa7004102118bc91291728da8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController2e48eb9fa7004102118bc91291728da8.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
LivewirePageController2e48eb9fa7004102118bc91291728da8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController2e48eb9fa7004102118bc91291728da8.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
    const LivewirePageController2e48eb9fa7004102118bc91291728da8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController2e48eb9fa7004102118bc91291728da8.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
        LivewirePageController2e48eb9fa7004102118bc91291728da8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController2e48eb9fa7004102118bc91291728da8.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/join-us'
 */
        LivewirePageController2e48eb9fa7004102118bc91291728da8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController2e48eb9fa7004102118bc91291728da8.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController2e48eb9fa7004102118bc91291728da8.form = LivewirePageController2e48eb9fa7004102118bc91291728da8Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
const LivewirePageController546d1d979582dcab4cda77f98be026ca = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController546d1d979582dcab4cda77f98be026ca.url(options),
    method: 'get',
})

LivewirePageController546d1d979582dcab4cda77f98be026ca.definition = {
    methods: ["get","head"],
    url: '/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
LivewirePageController546d1d979582dcab4cda77f98be026ca.url = (options?: RouteQueryOptions) => {
    return LivewirePageController546d1d979582dcab4cda77f98be026ca.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
LivewirePageController546d1d979582dcab4cda77f98be026ca.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController546d1d979582dcab4cda77f98be026ca.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
LivewirePageController546d1d979582dcab4cda77f98be026ca.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController546d1d979582dcab4cda77f98be026ca.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
    const LivewirePageController546d1d979582dcab4cda77f98be026caForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController546d1d979582dcab4cda77f98be026ca.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
        LivewirePageController546d1d979582dcab4cda77f98be026caForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController546d1d979582dcab4cda77f98be026ca.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/privacy-policy'
 */
        LivewirePageController546d1d979582dcab4cda77f98be026caForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController546d1d979582dcab4cda77f98be026ca.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController546d1d979582dcab4cda77f98be026ca.form = LivewirePageController546d1d979582dcab4cda77f98be026caForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
const LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.url(options),
    method: 'get',
})

LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.definition = {
    methods: ["get","head"],
    url: '/terms-of-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.url = (options?: RouteQueryOptions) => {
    return LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
    const LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
        LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/terms-of-service'
 */
        LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9.form = LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
const LivewirePageController956bb59c9e1c0fee21b18df019cfedf5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.url(options),
    method: 'get',
})

LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.definition = {
    methods: ["get","head"],
    url: '/help-center',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.url = (options?: RouteQueryOptions) => {
    return LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
    const LivewirePageController956bb59c9e1c0fee21b18df019cfedf5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
        LivewirePageController956bb59c9e1c0fee21b18df019cfedf5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/help-center'
 */
        LivewirePageController956bb59c9e1c0fee21b18df019cfedf5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController956bb59c9e1c0fee21b18df019cfedf5.form = LivewirePageController956bb59c9e1c0fee21b18df019cfedf5Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/search'
 */
const LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.url(options),
    method: 'get',
})

LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.definition = {
    methods: ["get","head"],
    url: '/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/search'
 */
LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.url = (options?: RouteQueryOptions) => {
    return LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/search'
 */
LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/search'
 */
LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/search'
 */
    const LivewirePageController04a61efe3086a9b488a1dd4e17c2b83cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/search'
 */
        LivewirePageController04a61efe3086a9b488a1dd4e17c2b83cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/search'
 */
        LivewirePageController04a61efe3086a9b488a1dd4e17c2b83cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c.form = LivewirePageController04a61efe3086a9b488a1dd4e17c2b83cForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs'
 */
const LivewirePageController1645ac25bf51cd2492a4911501274e26 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController1645ac25bf51cd2492a4911501274e26.url(options),
    method: 'get',
})

LivewirePageController1645ac25bf51cd2492a4911501274e26.definition = {
    methods: ["get","head"],
    url: '/jobs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs'
 */
LivewirePageController1645ac25bf51cd2492a4911501274e26.url = (options?: RouteQueryOptions) => {
    return LivewirePageController1645ac25bf51cd2492a4911501274e26.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs'
 */
LivewirePageController1645ac25bf51cd2492a4911501274e26.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController1645ac25bf51cd2492a4911501274e26.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs'
 */
LivewirePageController1645ac25bf51cd2492a4911501274e26.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController1645ac25bf51cd2492a4911501274e26.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs'
 */
    const LivewirePageController1645ac25bf51cd2492a4911501274e26Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController1645ac25bf51cd2492a4911501274e26.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs'
 */
        LivewirePageController1645ac25bf51cd2492a4911501274e26Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController1645ac25bf51cd2492a4911501274e26.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs'
 */
        LivewirePageController1645ac25bf51cd2492a4911501274e26Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController1645ac25bf51cd2492a4911501274e26.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController1645ac25bf51cd2492a4911501274e26.form = LivewirePageController1645ac25bf51cd2492a4911501274e26Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs/{job}'
 */
const LivewirePageController681d8640dded3de8d182be566dee1f15 = (args: { job: string | number | { slug: string | number } } | [job: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController681d8640dded3de8d182be566dee1f15.url(args, options),
    method: 'get',
})

LivewirePageController681d8640dded3de8d182be566dee1f15.definition = {
    methods: ["get","head"],
    url: '/jobs/{job}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs/{job}'
 */
LivewirePageController681d8640dded3de8d182be566dee1f15.url = (args: { job: string | number | { slug: string | number } } | [job: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { job: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { job: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    job: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        job: typeof args.job === 'object'
                ? args.job.slug
                : args.job,
                }

    return LivewirePageController681d8640dded3de8d182be566dee1f15.definition.url
            .replace('{job}', parsedArgs.job.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs/{job}'
 */
LivewirePageController681d8640dded3de8d182be566dee1f15.get = (args: { job: string | number | { slug: string | number } } | [job: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController681d8640dded3de8d182be566dee1f15.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs/{job}'
 */
LivewirePageController681d8640dded3de8d182be566dee1f15.head = (args: { job: string | number | { slug: string | number } } | [job: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController681d8640dded3de8d182be566dee1f15.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs/{job}'
 */
    const LivewirePageController681d8640dded3de8d182be566dee1f15Form = (args: { job: string | number | { slug: string | number } } | [job: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController681d8640dded3de8d182be566dee1f15.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs/{job}'
 */
        LivewirePageController681d8640dded3de8d182be566dee1f15Form.get = (args: { job: string | number | { slug: string | number } } | [job: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController681d8640dded3de8d182be566dee1f15.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/jobs/{job}'
 */
        LivewirePageController681d8640dded3de8d182be566dee1f15Form.head = (args: { job: string | number | { slug: string | number } } | [job: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController681d8640dded3de8d182be566dee1f15.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController681d8640dded3de8d182be566dee1f15.form = LivewirePageController681d8640dded3de8d182be566dee1f15Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
const LivewirePageControllera667167ce71b66453a9402d37ed90dab = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
    method: 'get',
})

LivewirePageControllera667167ce71b66453a9402d37ed90dab.definition = {
    methods: ["get","head"],
    url: '/mcqs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
LivewirePageControllera667167ce71b66453a9402d37ed90dab.url = (options?: RouteQueryOptions) => {
    return LivewirePageControllera667167ce71b66453a9402d37ed90dab.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
LivewirePageControllera667167ce71b66453a9402d37ed90dab.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
LivewirePageControllera667167ce71b66453a9402d37ed90dab.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
    const LivewirePageControllera667167ce71b66453a9402d37ed90dabForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
        LivewirePageControllera667167ce71b66453a9402d37ed90dabForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs'
 */
        LivewirePageControllera667167ce71b66453a9402d37ed90dabForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllera667167ce71b66453a9402d37ed90dab.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllera667167ce71b66453a9402d37ed90dab.form = LivewirePageControllera667167ce71b66453a9402d37ed90dabForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
const LivewirePageControllerce7095846e44f3351e72af6a0250b6ce = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
    method: 'get',
})

LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.definition = {
    methods: ["get","head"],
    url: '/mcqs/{mcq}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.definition.url
            .replace('{mcq}', parsedArgs.mcq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.get = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.head = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
    const LivewirePageControllerce7095846e44f3351e72af6a0250b6ceForm = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
        LivewirePageControllerce7095846e44f3351e72af6a0250b6ceForm.get = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/mcqs/{mcq}'
 */
        LivewirePageControllerce7095846e44f3351e72af6a0250b6ceForm.head = (args: { mcq: string | number | { slug: string | number } } | [mcq: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllerce7095846e44f3351e72af6a0250b6ce.form = LivewirePageControllerce7095846e44f3351e72af6a0250b6ceForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments'
 */
const LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.url(options),
    method: 'get',
})

LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.definition = {
    methods: ["get","head"],
    url: '/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments'
 */
LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.url = (options?: RouteQueryOptions) => {
    return LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments'
 */
LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments'
 */
LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments'
 */
    const LivewirePageController0aa6960c9307e7e78678ed9d41d8dcafForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments'
 */
        LivewirePageController0aa6960c9307e7e78678ed9d41d8dcafForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments'
 */
        LivewirePageController0aa6960c9307e7e78678ed9d41d8dcafForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf.form = LivewirePageController0aa6960c9307e7e78678ed9d41d8dcafForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments/{department}'
 */
const LivewirePageController424e8835a439084d02929ce2ecb18efc = (args: { department: string | number | { slug: string | number } } | [department: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController424e8835a439084d02929ce2ecb18efc.url(args, options),
    method: 'get',
})

LivewirePageController424e8835a439084d02929ce2ecb18efc.definition = {
    methods: ["get","head"],
    url: '/departments/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments/{department}'
 */
LivewirePageController424e8835a439084d02929ce2ecb18efc.url = (args: { department: string | number | { slug: string | number } } | [department: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { department: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.slug
                : args.department,
                }

    return LivewirePageController424e8835a439084d02929ce2ecb18efc.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments/{department}'
 */
LivewirePageController424e8835a439084d02929ce2ecb18efc.get = (args: { department: string | number | { slug: string | number } } | [department: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController424e8835a439084d02929ce2ecb18efc.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments/{department}'
 */
LivewirePageController424e8835a439084d02929ce2ecb18efc.head = (args: { department: string | number | { slug: string | number } } | [department: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController424e8835a439084d02929ce2ecb18efc.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments/{department}'
 */
    const LivewirePageController424e8835a439084d02929ce2ecb18efcForm = (args: { department: string | number | { slug: string | number } } | [department: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController424e8835a439084d02929ce2ecb18efc.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments/{department}'
 */
        LivewirePageController424e8835a439084d02929ce2ecb18efcForm.get = (args: { department: string | number | { slug: string | number } } | [department: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController424e8835a439084d02929ce2ecb18efc.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/departments/{department}'
 */
        LivewirePageController424e8835a439084d02929ce2ecb18efcForm.head = (args: { department: string | number | { slug: string | number } } | [department: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController424e8835a439084d02929ce2ecb18efc.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController424e8835a439084d02929ce2ecb18efc.form = LivewirePageController424e8835a439084d02929ce2ecb18efcForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services'
 */
const LivewirePageController07cedd77ea2b97e05ac9eef272478496 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController07cedd77ea2b97e05ac9eef272478496.url(options),
    method: 'get',
})

LivewirePageController07cedd77ea2b97e05ac9eef272478496.definition = {
    methods: ["get","head"],
    url: '/testing-services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services'
 */
LivewirePageController07cedd77ea2b97e05ac9eef272478496.url = (options?: RouteQueryOptions) => {
    return LivewirePageController07cedd77ea2b97e05ac9eef272478496.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services'
 */
LivewirePageController07cedd77ea2b97e05ac9eef272478496.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController07cedd77ea2b97e05ac9eef272478496.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services'
 */
LivewirePageController07cedd77ea2b97e05ac9eef272478496.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController07cedd77ea2b97e05ac9eef272478496.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services'
 */
    const LivewirePageController07cedd77ea2b97e05ac9eef272478496Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController07cedd77ea2b97e05ac9eef272478496.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services'
 */
        LivewirePageController07cedd77ea2b97e05ac9eef272478496Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController07cedd77ea2b97e05ac9eef272478496.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services'
 */
        LivewirePageController07cedd77ea2b97e05ac9eef272478496Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController07cedd77ea2b97e05ac9eef272478496.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController07cedd77ea2b97e05ac9eef272478496.form = LivewirePageController07cedd77ea2b97e05ac9eef272478496Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services/{testingService}'
 */
const LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0 = (args: { testingService: string | number | { slug: string | number } } | [testingService: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.url(args, options),
    method: 'get',
})

LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.definition = {
    methods: ["get","head"],
    url: '/testing-services/{testingService}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services/{testingService}'
 */
LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.url = (args: { testingService: string | number | { slug: string | number } } | [testingService: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testingService: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { testingService: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    testingService: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testingService: typeof args.testingService === 'object'
                ? args.testingService.slug
                : args.testingService,
                }

    return LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.definition.url
            .replace('{testingService}', parsedArgs.testingService.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services/{testingService}'
 */
LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.get = (args: { testingService: string | number | { slug: string | number } } | [testingService: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services/{testingService}'
 */
LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.head = (args: { testingService: string | number | { slug: string | number } } | [testingService: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services/{testingService}'
 */
    const LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0Form = (args: { testingService: string | number | { slug: string | number } } | [testingService: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services/{testingService}'
 */
        LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0Form.get = (args: { testingService: string | number | { slug: string | number } } | [testingService: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/testing-services/{testingService}'
 */
        LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0Form.head = (args: { testingService: string | number | { slug: string | number } } | [testingService: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0.form = LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
const LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
    method: 'get',
})

LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.definition = {
    methods: ["get","head"],
    url: '/papers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url = (options?: RouteQueryOptions) => {
    return LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
    const LivewirePageController6e15e116cf099a66c2d8a70fb6714d7cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
        LivewirePageController6e15e116cf099a66c2d8a70fb6714d7cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers'
 */
        LivewirePageController6e15e116cf099a66c2d8a70fb6714d7cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c.form = LivewirePageController6e15e116cf099a66c2d8a70fb6714d7cForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
const LivewirePageController48d2903b8d529b5544ce8c581ca795fe = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
    method: 'get',
})

LivewirePageController48d2903b8d529b5544ce8c581ca795fe.definition = {
    methods: ["get","head"],
    url: '/papers/{category?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "category",
        ])

    const parsedArgs = {
                        category: args?.category,
                }

    return LivewirePageController48d2903b8d529b5544ce8c581ca795fe.definition.url
            .replace('{category?}', parsedArgs.category?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
LivewirePageController48d2903b8d529b5544ce8c581ca795fe.get = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
LivewirePageController48d2903b8d529b5544ce8c581ca795fe.head = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
    const LivewirePageController48d2903b8d529b5544ce8c581ca795feForm = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
        LivewirePageController48d2903b8d529b5544ce8c581ca795feForm.get = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{category?}'
 */
        LivewirePageController48d2903b8d529b5544ce8c581ca795feForm.head = (args?: { category?: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController48d2903b8d529b5544ce8c581ca795fe.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController48d2903b8d529b5544ce8c581ca795fe.form = LivewirePageController48d2903b8d529b5544ce8c581ca795feForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
const LivewirePageController7618f0a5ae0361f166b66b06c4f43d72 = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'get',
})

LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.definition = {
    methods: ["get","head"],
    url: '/papers/{paper}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { paper: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { paper: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    paper: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        paper: typeof args.paper === 'object'
                ? args.paper.slug
                : args.paper,
                }

    return LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.definition.url
            .replace('{paper}', parsedArgs.paper.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.get = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.head = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
    const LivewirePageController7618f0a5ae0361f166b66b06c4f43d72Form = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
        LivewirePageController7618f0a5ae0361f166b66b06c4f43d72Form.get = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/papers/{paper}'
 */
        LivewirePageController7618f0a5ae0361f166b66b06c4f43d72Form.head = (args: { paper: string | number | { slug: string | number } } | [paper: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController7618f0a5ae0361f166b66b06c4f43d72.form = LivewirePageController7618f0a5ae0361f166b66b06c4f43d72Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
const LivewirePageController791d577b424c842c4294a0bbd45894cc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
    method: 'get',
})

LivewirePageController791d577b424c842c4294a0bbd45894cc.definition = {
    methods: ["get","head"],
    url: '/subjects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
LivewirePageController791d577b424c842c4294a0bbd45894cc.url = (options?: RouteQueryOptions) => {
    return LivewirePageController791d577b424c842c4294a0bbd45894cc.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
LivewirePageController791d577b424c842c4294a0bbd45894cc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
LivewirePageController791d577b424c842c4294a0bbd45894cc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
    const LivewirePageController791d577b424c842c4294a0bbd45894ccForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
        LivewirePageController791d577b424c842c4294a0bbd45894ccForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController791d577b424c842c4294a0bbd45894cc.url(options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/subjects'
 */
        LivewirePageController791d577b424c842c4294a0bbd45894ccForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController791d577b424c842c4294a0bbd45894cc.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController791d577b424c842c4294a0bbd45894cc.form = LivewirePageController791d577b424c842c4294a0bbd45894ccForm
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
const LivewirePageController9a0156ea987305ce66c22aa998b07832 = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
    method: 'get',
})

LivewirePageController9a0156ea987305ce66c22aa998b07832.definition = {
    methods: ["get","head"],
    url: '/{subject}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
LivewirePageController9a0156ea987305ce66c22aa998b07832.url = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { subject: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    subject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subject: typeof args.subject === 'object'
                ? args.subject.slug
                : args.subject,
                }

    return LivewirePageController9a0156ea987305ce66c22aa998b07832.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
LivewirePageController9a0156ea987305ce66c22aa998b07832.get = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
LivewirePageController9a0156ea987305ce66c22aa998b07832.head = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
    const LivewirePageController9a0156ea987305ce66c22aa998b07832Form = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
        LivewirePageController9a0156ea987305ce66c22aa998b07832Form.get = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}'
 */
        LivewirePageController9a0156ea987305ce66c22aa998b07832Form.head = (args: { subject: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController9a0156ea987305ce66c22aa998b07832.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController9a0156ea987305ce66c22aa998b07832.form = LivewirePageController9a0156ea987305ce66c22aa998b07832Form
    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
const LivewirePageController4fc803be20f9e76f15bbba471094c820 = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
    method: 'get',
})

LivewirePageController4fc803be20f9e76f15bbba471094c820.definition = {
    methods: ["get","head"],
    url: '/{subject}/{topic}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
LivewirePageController4fc803be20f9e76f15bbba471094c820.url = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    subject: args[0],
                    topic: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subject: typeof args.subject === 'object'
                ? args.subject.slug
                : args.subject,
                                topic: typeof args.topic === 'object'
                ? args.topic.slug
                : args.topic,
                }

    return LivewirePageController4fc803be20f9e76f15bbba471094c820.definition.url
            .replace('{subject}', parsedArgs.subject.toString())
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
LivewirePageController4fc803be20f9e76f15bbba471094c820.get = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
    method: 'get',
})
/**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
LivewirePageController4fc803be20f9e76f15bbba471094c820.head = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
    method: 'head',
})

    /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
    const LivewirePageController4fc803be20f9e76f15bbba471094c820Form = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
        method: 'get',
    })

            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
        LivewirePageController4fc803be20f9e76f15bbba471094c820Form.get = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, options),
            method: 'get',
        })
            /**
* @see \Livewire\Mechanisms\HandleRouting\LivewirePageController::__invoke
 * @see vendor/livewire/livewire/src/Mechanisms/HandleRouting/LivewirePageController.php:7
 * @route '/{subject}/{topic}'
 */
        LivewirePageController4fc803be20f9e76f15bbba471094c820Form.head = (args: { subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } } | [subject: string | number | { slug: string | number }, topic: string | number | { slug: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: LivewirePageController4fc803be20f9e76f15bbba471094c820.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    LivewirePageController4fc803be20f9e76f15bbba471094c820.form = LivewirePageController4fc803be20f9e76f15bbba471094c820Form

const LivewirePageController = {
    '/': LivewirePageController980bb49ee7ae63891f1d891d2fbcf1c9,
    '/demo': LivewirePageController0efea5765db02e3af45380ee625e3ea3,
    '/quiz/result': LivewirePageControllerd5c010e45017d141227b73be4d47be26,
    '/about-us': LivewirePageControllera95bbcd50157b4354b5f10a04f8364e7,
    '/contact-us': LivewirePageControllerd8387ede8ccb0b00c814fff54dc3b2b9,
    '/join-us': LivewirePageController2e48eb9fa7004102118bc91291728da8,
    '/privacy-policy': LivewirePageController546d1d979582dcab4cda77f98be026ca,
    '/terms-of-service': LivewirePageControllerafc93a7f43b9c83b4fdbb5592321e7c9,
    '/help-center': LivewirePageController956bb59c9e1c0fee21b18df019cfedf5,
    '/search': LivewirePageController04a61efe3086a9b488a1dd4e17c2b83c,
    '/jobs': LivewirePageController1645ac25bf51cd2492a4911501274e26,
    '/jobs/{job}': LivewirePageController681d8640dded3de8d182be566dee1f15,
    '/mcqs': LivewirePageControllera667167ce71b66453a9402d37ed90dab,
    '/mcqs/{mcq}': LivewirePageControllerce7095846e44f3351e72af6a0250b6ce,
    '/departments': LivewirePageController0aa6960c9307e7e78678ed9d41d8dcaf,
    '/departments/{department}': LivewirePageController424e8835a439084d02929ce2ecb18efc,
    '/testing-services': LivewirePageController07cedd77ea2b97e05ac9eef272478496,
    '/testing-services/{testingService}': LivewirePageControllere07f3815149d9f49c71cfbb4e02fccf0,
    '/papers': LivewirePageController6e15e116cf099a66c2d8a70fb6714d7c,
    '/papers/{category?}': LivewirePageController48d2903b8d529b5544ce8c581ca795fe,
    '/papers/{paper}': LivewirePageController7618f0a5ae0361f166b66b06c4f43d72,
    '/subjects': LivewirePageController791d577b424c842c4294a0bbd45894cc,
    '/{subject}': LivewirePageController9a0156ea987305ce66c22aa998b07832,
    '/{subject}/{topic}': LivewirePageController4fc803be20f9e76f15bbba471094c820,
}

export default LivewirePageController