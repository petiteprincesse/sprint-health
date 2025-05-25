import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import { ErrorBoundary } from "@/app/providers/error-boundary";
import { StoreProvider } from "@/app/providers/store-provider/ui/StoreProvider";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
