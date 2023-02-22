import React from 'react'
import { type RouteObject } from 'react-router-dom'

import { Layout } from 'pages/Layout'
import { PageAbout } from 'pages/PageAbout'
import { PageBomb } from 'pages/PageBomb/ui/PageBomb'
import { PageMain } from 'pages/PageMain'
import { PageNotFound } from 'pages/PageNotFound'

export const Routers: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: '',
                element: <PageMain />
            },
            {
                path: 'about',
                element: <PageAbout />
            },
            {
                path: 'bomb',
                element: <PageBomb />
            }
        ]
    }
]
