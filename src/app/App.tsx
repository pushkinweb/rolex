import './styles/style.scss'
import { type FC } from 'react'

import { AppRouter } from 'app/providers/RouterProvider'
import { useTheme } from 'app/providers/ThemProvider/lib/hooks/useTheme'
import { cn } from 'shared/lib/utils/classNames'

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={cn('app', [theme], {})}>
            <AppRouter />
        </div>
    )
}

export default App
