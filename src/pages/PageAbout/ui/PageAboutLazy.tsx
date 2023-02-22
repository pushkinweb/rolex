import { lazy } from 'react'

export const PageAboutLazy = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('./PageAbout'))
            }, 500)
        }).then()
)
