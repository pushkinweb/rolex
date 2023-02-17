import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/utils/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import s from './Navbar.module.scss'

interface INavbarProps {
    className?: string
}

export const Navbar: FC<INavbarProps> = () => {
    const { t } = useTranslation('navi')

    return (
        <div className={cn(s.Navbar, [], {})}>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                className={s.navItem}
                to={`/`}
            >
                {t('Главная')}
            </AppLink>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                className={s.navItem}
                to={`/about`}
            >
                {t('О нас')}
            </AppLink>
        </div>
    )
}
