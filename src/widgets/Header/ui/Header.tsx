import { type FC } from 'react'

import { Theme, useTheme } from 'app/providers/ThemProvider'
import { Navbar } from 'entities/Navbar'
import LogoDark from 'shared/assets/icons/logoDark.svg'
import LogoLight from 'shared/assets/icons/logoLight.svg'
import { cn } from 'shared/lib/utils/classNames'

import s from './Header.module.scss'

interface IHeaderProps {
    className?: string
}

export const Header: FC<IHeaderProps> = ({ className }) => {
    console.log('render header')

    const { theme } = useTheme()

    return (
        <div className={cn(s.Header, [className], {})}>
            <div className={s.leftSide}>
                {theme === Theme.DARK ? <LogoDark width={50} /> : <LogoLight width={50} />}
            </div>
            <div className={s.rightSide}>
                <Navbar />
            </div>
        </div>
    )
}
