import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Loader } from 'shared/UIKit/Loader'
import { Suspense } from 'react'
import { Routers } from '../config/routers'

export const router = createBrowserRouter(Routers)

export const AppRouter = () => {
    return (
        <Suspense
            fallback={
                <>
                    <Loader />
                    <h1>Loading...</h1>
                </>
            }
        >
            <RouterProvider router={router} />
        </Suspense>
    )
}
