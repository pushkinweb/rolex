import { FC } from 'react'
import s from './Header.module.scss'
import { cn } from 'shared/lib/utils/classNames'
import { Navbar } from 'features/Navbar'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

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
                <ThemeSwitcher />
                <Navbar />
            </div>
        </div>
    )
}
