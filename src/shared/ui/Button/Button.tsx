import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'

import { cn } from 'shared/lib/utils/classNames'

import s from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props

    return (
        <button className={cn(s.Button, [className, s[theme]], {})} {...otherProps}>
            {children}
        </button>
    )
}
