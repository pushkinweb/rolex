import React, {useState} from 'react';
import {Outlet,Link} from "react-router-dom";

const Layout = () => {

    return (
        <div>
            <div>
                <Link to={`/`} >Главная</Link>
                <Link to={`/about`} >О нас</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;