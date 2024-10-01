import { Navigate, Route, Routes } from "react-router-dom"

import { Home } from "../page/Home"
import { lazy } from "react"


const Loyalties = lazy(() => import("../page/Loyalties"))
const SimpleBonus = lazy(() => import("../page/SimpleBonus"))

const EssentialsLoyalty = lazy(() => import("../page/EssentialsLoyalty"))
const SeeAll = lazy(() => import("../page/SeeAll"))

const  NotFound  = lazy(() => import("../page/NotFound"))

export const PublicRouter = () => {
    return (
        <Routes>
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
