import { FC } from 'react'
import s from './Layout.module.scss'
import { cn } from 'shared/lib/utils/classNames'
import { Header } from 'widgets/Header'
import { Outlet } from 'react-router-dom'
import { SuspenseProvider } from 'app/providers/SuspenseProvider'
import { Sidebar } from 'widgets/Sidebar'

interface ILayoutProps {
    className?: string
}

export const Layout: FC<ILayoutProps> = ({ className }) => {
    return (
        <div className={cn(s.Layout, [className], {})}>
            <Header />
            <div className={s.ContentPage}>
                <Sidebar />
                <SuspenseProvider>
                    <Outlet />
                </SuspenseProvider>
            </div>
        </div>
    )
}
