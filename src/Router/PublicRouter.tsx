import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Home from '../page/Home'

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
            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            {import.meta.env.VITE_TITLE === 'CryptoGamblers' ? (
                <>
                    <Route path="/casinos/:casino_slug?" element={<SeeAllCasinos />} />
                    <Route path="/bonuses/:bonus_slug?" element={<SeeAllBonus />} />
                </>
            ) : (
                <>
                    <Route path="/casinos" element={<Home src={'get-data-hub-page-casino/'} />} />
                    <Route path="/bonuses" element={<Home src={'get-data-hub-page-bonus/'} />} />
                </>
            )}

            <Route path="/filter-casinos" element={<FilterCasino />} />
            <Route path="/filter-bonus" element={<FilterBonus />} />
            <Route path="/filter-loyalties" element={<FilterLoyalty />} />

            {/* Страница категорий (see all) по казино  */}
            <Route path="/all-casinos/:casino_slug?" element={<SeeAllCasinos />} />
            {/* Страница категорий  (see all) по бонусам */}
            <Route path="/all-bonuses/:bonus_slug?" element={<SeeAllBonus />} />

            {/* Страница лоялки ("Loyalties")*/}
            <Route path="/all-loyalties/:loyaltie_slug?" element={<SeeAllEssentialsLoyalty />} />

            {/* //Страница конкретного казино */}
            <Route path="/casino/:casino_slug" element={<SimpleCasinos />} />
            {/* //Страница конкретного бонуса */}
            <Route path="/casino/:casino_slug/bonuses/:bonus_slug" element={<SimpleBonus />} />
            {/* Страница конкретной лоялки */}
            <Route path="/casino/:loyaltie_slug/loyalty" element={<SimpleLoyalties />} />

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
