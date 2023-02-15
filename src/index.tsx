import { createRoot } from 'react-dom/client'

import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemProvider'

const container = document.getElementById('rootMyApp')
const root = createRoot(container)

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
