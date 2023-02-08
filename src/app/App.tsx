import './styles/style.scss'
import { useTheme } from './providers/ThemProvider/lib/hooks/useTheme'
import { AppRouter } from 'app/providers/RouterProvider'
import { cn } from 'shared/lib/utils/classNames'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={cn('app', [theme], {})}>
            <AppRouter />
        </div>
    )
}

export default App
