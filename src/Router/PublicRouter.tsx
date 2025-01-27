import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { LogoLoader } from '../components/loader/LogoLoader'

const Home = lazy(() => import('../page/Home'))

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
            <Route
                path="privacy-policy"
                element={
                    <Suspense>
                        <PrivacyPolicy />
                    </Suspense>
                }
            />

            {import.meta.env.VITE_TITLE === 'CryptoGamblers' ? (
                <>
                    <Route
                        path="/casinos/:casino_slug?"
                        element={
                            <Suspense>
                                <SeeAllCasinos />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bonuses/:bonus_slug?"
                        element={
                            <Suspense>
                                <SeeAllBonus />
                            </Suspense>
                        }
                    />
                </>
            ) : (
                <>
                    <Route
                        path="/casinos"
                        element={
                            <Suspense>
                                <Home src={'get-data-hub-page-casino/'} />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bonuses"
                        element={
                            <Suspense>
                                <Home src={'get-data-hub-page-bonus/'} />
                            </Suspense>
                        }
                    />
                </>
            )}

            <Route
                path="/filter-casinos"
                element={
                    <Suspense>
                        <FilterCasino />
                    </Suspense>
                }
            />
            <Route
                path="/filter-bonus"
                element={
                    <Suspense>
                        <FilterBonus />
                    </Suspense>
                }
            />
            <Route
                path="/filter-loyalties"
                element={
                    <Suspense>
                        <FilterLoyalty />
                    </Suspense>
                }
            />

            {/* Страница категорий (see all) по казино  */}
            <Route
                path="/all-casinos/:casino_slug?"
                element={
                    <Suspense>
                        <SeeAllCasinos />
                    </Suspense>
                }
            />
            {/* Страница категорий  (see all) по бонусам */}
            <Route
                path="/all-bonuses/:bonus_slug?"
                element={
                    <Suspense>
                        <SeeAllBonus />
                    </Suspense>
                }
            />

            {/* Страница лоялки ("Loyalties")*/}
            <Route
                path="/all-loyalties/:loyaltie_slug?"
                element={
                    <Suspense>
                        <SeeAllEssentialsLoyalty />
                    </Suspense>
                }
            />

            {/* //Страница конкретного казино */}
            <Route
                path="/casino/:casino_slug"
                element={
                    <Suspense>
                        <SimpleCasinos />
                    </Suspense>
                }
            />
            {/* //Страница конкретного бонуса */}
            <Route
                path="/casino/:casino_slug/bonuses/:bonus_slug"
                element={
                    <Suspense>
                        <SimpleBonus />
                    </Suspense>
                }
            />
            {/* Страница конкретной лоялки */}
            <Route
                path="/casino/:loyaltie_slug/loyalty"
                element={
                    <Suspense>
                        <SimpleLoyalties />
                    </Suspense>
                }
            />

            <Route
                path="/"
                element={
                    <Suspense fallback={<LogoLoader />}>
                        <Home />
                    </Suspense>
                }
            />
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
            <Route path="*" element={<Suspense><NotFound /></Suspense>} />
        </Routes>
    )
}
