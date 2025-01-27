'use client'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './components/loader/loader.css'
import './assets/css/header.css'
import './assets/css/style.css'


import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Suspense } from 'react'
import { LogoLoader } from './components/loader/LogoLoader.tsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter >
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<LogoLoader/>}>
                    <App />
                </Suspense>
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>,
)
