import { createRoot } from 'react-dom/client';
import App from "./App";
import Loader from "./components/Loader/Loader";
import {Suspense} from "react";
import ThemeProvider from "./theme/ThemeProvider";

const container = document.getElementById('rootMyApp')
const root = createRoot(container!)

root.render(
    <ThemeProvider>
        <Suspense fallback={<><Loader /><h1>Loading...</h1></>}>
            <App />
        </Suspense>
    </ThemeProvider>
)
