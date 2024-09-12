import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./assets/css/style.css"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"

import { Suspense } from "react"
const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Suspense>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
            
                        <App />
          
                </QueryClientProvider>
            </BrowserRouter>
        </Suspense>
    </StrictMode>
)
