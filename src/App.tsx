import { AdaptiveProvider } from './context/AppContext'
import { FilterProvider } from './context/FilterContext'
import { PublicRouter } from './Router/PublicRouter'

function App() {

   if (new Date() > new Date('2025-01-20'))
        return <></>
       return (
           <AdaptiveProvider>
               <FilterProvider>
                   <PublicRouter />
               </FilterProvider>
           </AdaptiveProvider>
       )
}

export default App
