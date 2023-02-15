import { lazy } from 'react'

export const MainPageLazy = lazy(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('./MainPage'))
            }, 500)
        }).then()
)
