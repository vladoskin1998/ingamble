import { AdaptiveProvider } from "./context/AppContext"
import { PublicRouter } from "./Router/PublicRouter"

function App() {
    return (
            <AdaptiveProvider>
                <PublicRouter />
            </AdaptiveProvider>
    )
}

export default App
