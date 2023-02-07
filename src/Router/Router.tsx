import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../pages/Layout'
import React from 'react'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { ErrorPage } from 'pages/ErrorPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
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
