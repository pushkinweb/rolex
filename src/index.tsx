import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'app/providers/ThemProvider'
import App from 'app/App'

const container = document.getElementById('rootMyApp')
const root = createRoot(container!)

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
