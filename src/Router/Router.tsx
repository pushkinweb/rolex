import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AboutPageLazy} from "../pages/About/AboutPageLazy";
import {MainPageLazy} from "../pages/Main/MainPageLazy";
import ErrorPage from "../pages/Error/ErrorPage";
import Layout from "../pages/Layout";
import React from "react";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <MainPageLazy />,
            },
            {
                path: "about",
                element: <AboutPageLazy />,
            },
        ]
    }
])