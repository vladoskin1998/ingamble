import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Home from '../page/Home'

// import { PreloaderPuls, PreloaderSpin } from "../components/loader/Preloader"

const SimpleCasinos = lazy(() => import('../page/SimpleCasinos'))
const SimpleLoyalties = lazy(() => import('../page/SimpleLoyalties'))
const SimpleBonus = lazy(() => import('../page/SimpleBonus'))
const SeeAllEssentialsLoyalty = lazy(() => import('../page/SeeAllEssentialsLoyalty'))

const SeeAllBonus = lazy(() => import('../page/SeeAllBonus'))
const SeeAllCasinos = lazy(() => import('../page/SeeAllCasinos'))

const PrivacyPolicy = lazy(() => import('../page/Policy'))
const NotFound = lazy(() => import('../page/NotFound'))

const FilterCasino = lazy(() => import('../page/FilterCasino'))
const FilterBonus = lazy(() => import('../page/FilterBonus'))
const FilterLoyalty = lazy(() => import('../page/FilterLoyalty'))

export const PublicRouter = () => {
    return (
        <Routes>
            {/* <Route path="pr3" element={<PreloaderPuls/>}/>
            <Route path="pr2" element={<PreloaderSpin/>}/> */}

            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/filter-casinos" element={<FilterCasino />} />
            <Route path="/filter-bonus" element={<FilterBonus />} />
            <Route path="/filter-loyalties" element={<FilterLoyalty />} />

            {/* Страница категорий (see all) по казино  */}
            <Route path="/all-casinos/:casino_categories?" element={<SeeAllCasinos />} />
            {/* Страница категорий  (see all) по бонусам */}
            <Route path="/all-bonuses/:bonus_categories?" element={<SeeAllBonus />} />

            {/* Страница лоялки ("Loyalties")*/}
            <Route path="/all-loyalties" element={<SeeAllEssentialsLoyalty />} />

            {/* //Страница конкретного казино */}
            <Route path="/casino/:casino_name" element={<SimpleCasinos />} />
            {/* //Страница конкретного бонуса */}
            <Route path="/casino/:casino_name/bonuses/:bonus_type" element={<SimpleBonus />} />
            {/* Страница конкретной лоялки */}
            <Route path="/casino/:casino_name/loyalty" element={<SimpleLoyalties />} />

            <Route path="/" element={<Home />} />
            <Route path="/" element={<Navigate to="/" />} />
            {/* <Route
                path="*"
                element={
                    <Navigate
                        to="/casino/default-casino/bonuses/default-bonus"
                        replace
                    />
                }
            /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

//  `/casino/${sanitizeLink(item?.casino_info?.casino_name)}/bonuses/${sanitizeLink(item?.bonus_info?.bonus_name)}?queryId=${item?.bonus_info?.bonus_id}`

// `/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`
