import './styles/style.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from '../Router/Router'
import { useTheme } from './providers/ThemProvider/lib/hooks/useTheme'
import { classNames } from '../helpers/classNames/classNames'

const App = () => {
    const { theme, toogleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>Set Theme</button>
            APP component
            <RouterProvider router={router} /*fallbackElement={<div>Loading...</div>}*/ />
        </div>
    )
}

export default App
