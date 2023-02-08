import { FC } from 'react'
import s from './Navbar.module.scss'
import { cn } from 'shared/lib/utils/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface INavbarProps {
    className?: string
}

export const Navbar: FC<INavbarProps> = () => {
    return (
        <div className={cn(s.Navbar, [], {})}>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                className={s.navItem}
                to={`/`}
            >
                Главная
            </AppLink>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                className={s.navItem}
                to={`/about`}
            >
                О нас
            </AppLink>
        </div>
    )
}
