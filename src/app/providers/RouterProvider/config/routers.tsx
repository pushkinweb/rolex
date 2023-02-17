import { type RouteObject } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { Layout } from 'pages/Layout'
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
