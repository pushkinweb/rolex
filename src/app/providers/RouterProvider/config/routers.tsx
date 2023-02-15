import { type RouteObject } from 'react-router-dom'

import { Layout } from 'app/layout'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'

export const Routers: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: RouterPath.main,
                element: <MainPage />
            },
            {
                path: RouterPath.about,
                element: <AboutPage />
            }
        ]
    }
]
