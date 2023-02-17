import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import s from './AboutPage.module.scss'

const AboutPage: FC = () => {
    const { t } = useTranslation('about')

    return (
        <>
            <div className={s.title}>
                <h1>{t('О нас страница')}</h1>
            </div>
        </>
    )
}

export default AboutPage
