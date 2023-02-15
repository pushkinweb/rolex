import { type FC } from 'react'

import s from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
    return (
        <div className={s.wrap}>
            <h1>404 Ошибка!</h1>
            <h3>Страница не найдена!!!</h3>
        </div>
    )
}
