import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Layout } from 'pages/Layout'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '',
                element: <MainPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            }
        ]
    }
])
