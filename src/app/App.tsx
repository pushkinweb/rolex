import './styles/style.scss'
import { type FC } from 'react'

import { AppRouter } from 'app/providers/RouterProvider'
import { cn } from 'shared/lib/utils/classNames'

import { useTheme } from './providers/ThemProvider/lib/hooks/useTheme'

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={cn('app', [theme], {})}>
            <AppRouter />
        </div>
    )
}

export default App
