import { createRoot } from 'react-dom/client'

import App from 'app/App'
import 'shared/config/i18n/i18n'
import { AppProvider } from 'app/providers/AppProvider/ui/AppProvider'

const container = document.getElementById('rootMyApp')
const root = createRoot(container)

root.render(
    <AppProvider>
        <App />
    </AppProvider>
)
