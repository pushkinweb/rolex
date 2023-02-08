import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from 'react'
import s from './Button.module.scss'
import { cn } from 'shared/lib/utils/classNames'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
}

export const Button: FC<IButtonProps> = (props) => {
    const { className, children } = props

    return <div className={cn(s.Button, [className], {})}></div>
}
