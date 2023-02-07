import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { Layout } from 'app/layout'

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
