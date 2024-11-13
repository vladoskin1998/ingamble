import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../page/Home"
import { lazy } from "react"

// import { PreloaderPuls, PreloaderSpin } from "../components/loader/Preloader"

const Review = lazy(() => import("../page/Review"))
const Loyalties = lazy(() => import("../page/Loyalties"))
const SimpleBonus = lazy(() => import("../page/SimpleBonus"))
const SeeAllEssentialsLoyalty = lazy(
    () => import("../page/SeeAllEssentialsLoyalty")
)

const SeeAllBonus = lazy(() => import("../page/SeeAllBonus"))
const SeeAllCasinos = lazy(() => import("../page/SeeAllCasinos"))

const PrivacyPolicy = lazy(() => import("../page/Policy"))
const NotFound = lazy(() => import("../page/NotFound"))

const FilterCasino = lazy(() => import("../page/FilterCasino"))
const FilterBonus = lazy(() => import("../page/FilterBonus"))
const FilterLoyalty = lazy(() => import("../page/FilterLoyalty"))

export const PublicRouter = () => {
    return (
        <Routes>
            {/* <Route path="pr3" element={<PreloaderPuls/>}/>
            <Route path="pr2" element={<PreloaderSpin/>}/> */}

            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="review" element={<Review />} />
            <Route
                path="/casino/:casino_name/bonuses/:bonus_type"
                element={<SimpleBonus />}
            />

            <Route path="/filter-casinos" element={<FilterCasino />} />
            <Route path="/filter-bonus" element={<FilterBonus />} />
            <Route path="/filter-loyalties" element={<FilterLoyalty />} />

            <Route path="/see-all-casinos" element={<SeeAllCasinos />} />
            <Route path="/see-all-bonus" element={<SeeAllBonus />} />
            <Route
                path="/see-all-loyalties"
                element={<SeeAllEssentialsLoyalty />}
            />

            <Route path="/loyaltie" element={<Loyalties />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
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
