import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import s from './MainPage.module.scss'

const MainPage: FC = () => {
    const { t } = useTranslation('main')

    return (
        <>
            <div className={s.title}>
                <h1>{t('Главная страница')}</h1>
            </div>
        </>
    )
}

export default MainPage
