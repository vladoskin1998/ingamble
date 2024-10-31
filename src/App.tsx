import { AdaptiveProvider } from "./context/AppContext"
import { PublicRouter } from "./Router/PublicRouter"


console.log(window.location);

function App() {
    return (
            <AdaptiveProvider>
                <PublicRouter />
            </AdaptiveProvider>
    )
}

export default App
