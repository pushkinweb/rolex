import { FC, ReactNode } from 'react'
import s from './PageDisabled.module.scss'
import { cn } from 'shared/lib/utils/classNames'

interface IPageDisabledProps {
    className?: string
    children?: ReactNode
}

export const PageDisabled: FC<IPageDisabledProps> = ({ className, children }) => {
    return <div className={cn(s.PageDisabled, [className], {})}>{children}</div>
}
