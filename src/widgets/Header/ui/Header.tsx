import { type FC } from 'react'

import { Navbar } from 'features/Navbar'
import { cn } from 'shared/lib/utils/classNames'

import s from './Header.module.scss'

interface IHeaderProps {
    className?: string
}

export const Header: FC<IHeaderProps> = ({ className }) => {
    return (
        <div className={cn(s.Header, [className], {})}>
            <div className={s.leftSide}>
                <div>Main Icon</div>
            </div>
            <div className={s.rightSide}>
                <Navbar />
            </div>
        </div>
    )
}
