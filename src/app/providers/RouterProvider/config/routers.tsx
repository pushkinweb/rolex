import { RouterPath } from 'shared/config/routeConfig/routeConfig'
import { RouteObject } from 'react-router-dom'
import { Layout } from 'app/layout'
import { NotFoundPage } from 'pages/NotFoundPage'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

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
