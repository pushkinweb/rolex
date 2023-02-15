import { type FC, type ReactNode } from 'react'

import { cn } from 'shared/lib/utils/classNames'

import s from './PageDisabled.module.scss'

interface IPageDisabledProps {
    className?: string
    children?: ReactNode
}

export const PageDisabled: FC<IPageDisabledProps> = ({
    className,
    children
}) => {
    return <div className={cn(s.PageDisabled, [className], {})}>{children}</div>
}
