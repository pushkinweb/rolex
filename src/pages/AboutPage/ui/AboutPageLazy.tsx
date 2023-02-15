import { lazy } from 'react'

export const AboutPageLazy = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('./AboutPage'))
            }, 500)
        }).then()
)
