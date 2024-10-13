import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../page/Home"
import { lazy } from "react"
// import { PreloaderPuls, PreloaderSpin } from "../components/loader/Preloader"


const Review  = lazy(() => import( "../page/Review"))
const Loyalties = lazy(() => import("../page/Loyalties"))
const SimpleBonus = lazy(() => import("../page/SimpleBonus"))
const EssentialsLoyalty = lazy(() => import("../page/EssentialsLoyalty"))
const SeeAll = lazy(() => import("../page/SeeAll"))
const  PrivacyPolicy   = lazy(() => import( "../page/Policy"))
const  NotFound  = lazy(() => import("../page/NotFound"))

export const PublicRouter = () => {
    return (
        <Routes>
            {/* <Route path="pr3" element={<PreloaderPuls/>}/>
            <Route path="pr2" element={<PreloaderSpin/>}/> */}

            <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="review" element={<Review />}/>
            <Route
                path="/casino/:casino_name/bonuses/:bonus_type"
                element={<SimpleBonus />}
            />

            <Route path="/see-all" element={<SeeAll />} />
            <Route path="/essential_loyalty" element={<EssentialsLoyalty />} />

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
