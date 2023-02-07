import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Layout = () => {
    return (
        <div>
            <div>
                <Link to={`/`}>Главная</Link>
                <Link to={`/about`}>О нас</Link>
            </div>
            <Outlet />
        </div>
    )
}
