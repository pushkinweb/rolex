import { FC, ReactNode } from 'react'
import s from './AppLink.module.scss'
import { cn } from 'shared/lib/utils/classNames'
import { Link, LinkProps } from 'react-router-dom'

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
        <Link
            to={to}
            className={cn(s.AppLink, [className, s[theme]], {})}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
