import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Public\HomeController::about_us
 * @see app/Http/Controllers/Public/HomeController.php:94
 * @route '/about-us'
 */
export const about_us = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about_us.url(options),
    method: 'get',
})

about_us.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\HomeController::about_us
 * @see app/Http/Controllers/Public/HomeController.php:94
 * @route '/about-us'
 */
about_us.url = (options?: RouteQueryOptions) => {
    return about_us.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\HomeController::about_us
 * @see app/Http/Controllers/Public/HomeController.php:94
 * @route '/about-us'
 */
about_us.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about_us.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\HomeController::about_us
 * @see app/Http/Controllers/Public/HomeController.php:94
 * @route '/about-us'
 */
about_us.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about_us.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\HomeController::about_us
 * @see app/Http/Controllers/Public/HomeController.php:94
 * @route '/about-us'
 */
    const about_usForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: about_us.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\HomeController::about_us
 * @see app/Http/Controllers/Public/HomeController.php:94
 * @route '/about-us'
 */
        about_usForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: about_us.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\HomeController::about_us
 * @see app/Http/Controllers/Public/HomeController.php:94
 * @route '/about-us'
 */
        about_usForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: about_us.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    about_us.form = about_usForm
/**
* @see \App\Http\Controllers\Public\HomeController::contact_us
 * @see app/Http/Controllers/Public/HomeController.php:110
 * @route '/contact-us'
 */
export const contact_us = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact_us.url(options),
    method: 'get',
})

contact_us.definition = {
    methods: ["get","head"],
    url: '/contact-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\HomeController::contact_us
 * @see app/Http/Controllers/Public/HomeController.php:110
 * @route '/contact-us'
 */
contact_us.url = (options?: RouteQueryOptions) => {
    return contact_us.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\HomeController::contact_us
 * @see app/Http/Controllers/Public/HomeController.php:110
 * @route '/contact-us'
 */
contact_us.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact_us.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\HomeController::contact_us
 * @see app/Http/Controllers/Public/HomeController.php:110
 * @route '/contact-us'
 */
contact_us.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact_us.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\HomeController::contact_us
 * @see app/Http/Controllers/Public/HomeController.php:110
 * @route '/contact-us'
 */
    const contact_usForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contact_us.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\HomeController::contact_us
 * @see app/Http/Controllers/Public/HomeController.php:110
 * @route '/contact-us'
 */
        contact_usForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact_us.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\HomeController::contact_us
 * @see app/Http/Controllers/Public/HomeController.php:110
 * @route '/contact-us'
 */
        contact_usForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact_us.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contact_us.form = contact_usForm
/**
* @see \App\Http\Controllers\Public\HomeController::join_us
 * @see app/Http/Controllers/Public/HomeController.php:102
 * @route '/join-us'
 */
export const join_us = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: join_us.url(options),
    method: 'get',
})

join_us.definition = {
    methods: ["get","head"],
    url: '/join-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\HomeController::join_us
 * @see app/Http/Controllers/Public/HomeController.php:102
 * @route '/join-us'
 */
join_us.url = (options?: RouteQueryOptions) => {
    return join_us.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\HomeController::join_us
 * @see app/Http/Controllers/Public/HomeController.php:102
 * @route '/join-us'
 */
join_us.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: join_us.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\HomeController::join_us
 * @see app/Http/Controllers/Public/HomeController.php:102
 * @route '/join-us'
 */
join_us.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: join_us.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\HomeController::join_us
 * @see app/Http/Controllers/Public/HomeController.php:102
 * @route '/join-us'
 */
    const join_usForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: join_us.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\HomeController::join_us
 * @see app/Http/Controllers/Public/HomeController.php:102
 * @route '/join-us'
 */
        join_usForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: join_us.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\HomeController::join_us
 * @see app/Http/Controllers/Public/HomeController.php:102
 * @route '/join-us'
 */
        join_usForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: join_us.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    join_us.form = join_usForm
/**
* @see \App\Http\Controllers\Public\HomeController::privacy_policy
 * @see app/Http/Controllers/Public/HomeController.php:118
 * @route '/privacy-policy'
 */
export const privacy_policy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy_policy.url(options),
    method: 'get',
})

privacy_policy.definition = {
    methods: ["get","head"],
    url: '/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\HomeController::privacy_policy
 * @see app/Http/Controllers/Public/HomeController.php:118
 * @route '/privacy-policy'
 */
privacy_policy.url = (options?: RouteQueryOptions) => {
    return privacy_policy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\HomeController::privacy_policy
 * @see app/Http/Controllers/Public/HomeController.php:118
 * @route '/privacy-policy'
 */
privacy_policy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy_policy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\HomeController::privacy_policy
 * @see app/Http/Controllers/Public/HomeController.php:118
 * @route '/privacy-policy'
 */
privacy_policy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacy_policy.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\HomeController::privacy_policy
 * @see app/Http/Controllers/Public/HomeController.php:118
 * @route '/privacy-policy'
 */
    const privacy_policyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: privacy_policy.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\HomeController::privacy_policy
 * @see app/Http/Controllers/Public/HomeController.php:118
 * @route '/privacy-policy'
 */
        privacy_policyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy_policy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\HomeController::privacy_policy
 * @see app/Http/Controllers/Public/HomeController.php:118
 * @route '/privacy-policy'
 */
        privacy_policyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy_policy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    privacy_policy.form = privacy_policyForm
/**
* @see \App\Http\Controllers\Public\HomeController::terms_of_service
 * @see app/Http/Controllers/Public/HomeController.php:126
 * @route '/terms-of-service'
 */
export const terms_of_service = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: terms_of_service.url(options),
    method: 'get',
})

terms_of_service.definition = {
    methods: ["get","head"],
    url: '/terms-of-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\HomeController::terms_of_service
 * @see app/Http/Controllers/Public/HomeController.php:126
 * @route '/terms-of-service'
 */
terms_of_service.url = (options?: RouteQueryOptions) => {
    return terms_of_service.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\HomeController::terms_of_service
 * @see app/Http/Controllers/Public/HomeController.php:126
 * @route '/terms-of-service'
 */
terms_of_service.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: terms_of_service.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\HomeController::terms_of_service
 * @see app/Http/Controllers/Public/HomeController.php:126
 * @route '/terms-of-service'
 */
terms_of_service.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: terms_of_service.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\HomeController::terms_of_service
 * @see app/Http/Controllers/Public/HomeController.php:126
 * @route '/terms-of-service'
 */
    const terms_of_serviceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: terms_of_service.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\HomeController::terms_of_service
 * @see app/Http/Controllers/Public/HomeController.php:126
 * @route '/terms-of-service'
 */
        terms_of_serviceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: terms_of_service.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\HomeController::terms_of_service
 * @see app/Http/Controllers/Public/HomeController.php:126
 * @route '/terms-of-service'
 */
        terms_of_serviceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: terms_of_service.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    terms_of_service.form = terms_of_serviceForm
/**
* @see \App\Http\Controllers\Public\HomeController::help_center
 * @see app/Http/Controllers/Public/HomeController.php:134
 * @route '/help-center'
 */
export const help_center = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: help_center.url(options),
    method: 'get',
})

help_center.definition = {
    methods: ["get","head"],
    url: '/help-center',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\HomeController::help_center
 * @see app/Http/Controllers/Public/HomeController.php:134
 * @route '/help-center'
 */
help_center.url = (options?: RouteQueryOptions) => {
    return help_center.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\HomeController::help_center
 * @see app/Http/Controllers/Public/HomeController.php:134
 * @route '/help-center'
 */
help_center.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: help_center.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\HomeController::help_center
 * @see app/Http/Controllers/Public/HomeController.php:134
 * @route '/help-center'
 */
help_center.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: help_center.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\HomeController::help_center
 * @see app/Http/Controllers/Public/HomeController.php:134
 * @route '/help-center'
 */
    const help_centerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: help_center.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\HomeController::help_center
 * @see app/Http/Controllers/Public/HomeController.php:134
 * @route '/help-center'
 */
        help_centerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: help_center.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\HomeController::help_center
 * @see app/Http/Controllers/Public/HomeController.php:134
 * @route '/help-center'
 */
        help_centerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: help_center.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    help_center.form = help_centerForm
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
const HomeController = { about_us, contact_us, join_us, privacy_policy, terms_of_service, help_center, setQuizMode }

export default HomeController