import { AdaptiveProvider } from './context/AppContext'
import { FilterProvider } from './context/FilterContext'
import { PublicRouter } from './Router/PublicRouter'

function App() {
    // document.title =  window.location.origin.includes('ingamble.com')  ? "inGamble" : "CryptoGamblers"
    return (
        <AdaptiveProvider>
            <FilterProvider>
                <PublicRouter />
            </FilterProvider>
        </AdaptiveProvider>
    )
}

export default App
