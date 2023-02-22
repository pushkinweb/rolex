import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import s from './PageMain.module.scss'

const PageMain: FC = () => {
    const { t } = useTranslation('main')

    return (
        <>
            <div className={s.title}>
                <h1>{t('Главная страница')}</h1>
            </div>
        </>
    )
}

export default PageMain
