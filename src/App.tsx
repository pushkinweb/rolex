import React, {Suspense, useContext, useState} from 'react';
import "./styles/style.scss";
import {RouterProvider} from "react-router-dom";
import {router} from "./Router/Router";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {

    const {theme, toogleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>Set Theme</button>
            oofsdof sdfoonds dskfg ondsfg sdfng
            <RouterProvider router={router} /*fallbackElement={<div>Loading...</div>}*/ />
        </div>
    )
}

export default App;