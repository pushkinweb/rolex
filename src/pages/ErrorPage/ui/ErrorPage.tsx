import React from 'react'
import s from './ErrorPage.module.scss'

export const ErrorPage = () => {
    return (
        <div className={s.wrap}>
            <h1>404 Ошибка!</h1>
            <h3>Страница не найдена!!!</h3>
        </div>
    )
}
