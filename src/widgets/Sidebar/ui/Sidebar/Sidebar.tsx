import { FC, useState } from 'react'
import s from './Sidebar.module.scss'
import { cn } from 'shared/lib/utils/classNames'
import { Button } from 'shared/ui/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import ArrowLeft from 'shared/assets/icons/arrow_left.svg'
import ArrowRight from 'shared/assets/icons/arrow_right.svg'

interface ISidebarProps {
    className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed((pre) => !pre)
    }

    return (
        <div
            className={cn(s.Sidebar, [className], {
                [s.collapsed]: collapsed
            })}
        >
            <div className={s.buttonControlSidebar}>
                <Button onClick={toggleCollapsed}>
                    {collapsed ? (
                        <ArrowRight width={10} fill={'red'} />
                    ) : (
                        <ArrowLeft width={10} fill={'red'} />
                    )}
                </Button>
            </div>

            <div className={s.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
