import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import s from './PageNotFound.module.scss'

export const PageNotFound: FC = () => {
    const { t } = useTranslation('error')

    return (
        <div className={s.wrap}>
            <h1>{t('404 Ошибка!')}</h1>
            <h3>{t('Страница не найдена!!!')}</h3>
        </div>
    )
}
