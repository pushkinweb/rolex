import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routers } from '../config/routers'

export const router = createBrowserRouter(Routers)

export const AppRouter = () => {
    return <RouterProvider router={router} />
}
