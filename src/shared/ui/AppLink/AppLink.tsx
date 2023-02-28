import { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { cn } from 'shared/lib/utils/classNames'

import s from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
    className?: string
    children?: ReactNode
    theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const { theme, className, children, to, ...otherProps } = props

    return (
        <Link to={to} className={cn(s.AppLink, [className, s[theme]], {})} {...otherProps}>
            {children}
        </Link>
    )
}
