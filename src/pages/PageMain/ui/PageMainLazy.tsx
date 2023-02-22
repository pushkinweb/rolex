import { lazy } from 'react'

export const PageMainLazy = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('./PageMain'))
            }, 500)
        }).then()
)
