import { type FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Routers } from '../config/routers'

export const router = createBrowserRouter(Routers)

export const AppRouter: FC = () => {
    return <RouterProvider router={router} />
}
