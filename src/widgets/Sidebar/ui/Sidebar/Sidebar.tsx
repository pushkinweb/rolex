import { type FC, useState } from 'react'

import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import ArrowLeft from 'shared/assets/icons/arrow_left.svg'
import ArrowRight from 'shared/assets/icons/arrow_right.svg'
import { cn } from 'shared/lib/utils/classNames'
import { Button } from 'shared/ui/Button'

import s from './Sidebar.module.scss'

interface ISidebarProps {
    className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = (): void => {
        setCollapsed((pre) => !pre)
    }

    return (
        <div
            className={cn(s.Sidebar, [className], {
                [s.collapsed]: collapsed
            })}
        >
            <div
                className={cn(s.switchers, [], {
                    [s.collapsed]: collapsed
                })}
            >
                <ThemeSwitcher />
                <LangSwitcher />
                <Button onClick={toggleCollapsed}>
                    {collapsed ? (
                        <ArrowRight width={10} fill={'red'} />
                    ) : (
                        <ArrowLeft width={10} fill={'red'} />
                    )}
                </Button>
            </div>
        </div>
    )
}
