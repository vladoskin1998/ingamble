import { AdaptiveProvider } from './context/AppContext'
import { FilterProvider } from './context/FilterContext'
import { PublicRouter } from './Router/PublicRouter'

function App() {


       return (
           <AdaptiveProvider>
               <FilterProvider>
                   <PublicRouter />
               </FilterProvider>
           </AdaptiveProvider>
       )
}

export default App
