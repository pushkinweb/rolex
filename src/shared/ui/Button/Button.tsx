import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import s from './Button.module.scss'
import { cn } from 'shared/lib/utils/classNames'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props

    return (
        <button
            className={cn(s.Button, [className, s[theme]], {})}
            {...otherProps}
        >
            {children}
        </button>
    )
}
