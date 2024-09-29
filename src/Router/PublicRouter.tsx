import { Navigate, Route, Routes } from "react-router-dom"
import { NotFound } from "../page/NotFound/NotFound"
import { Home } from "../page/Home"
import { lazy } from "react"

const Loyalties = lazy(() => import("../page/Loyalties"))
const SimpleBonus = lazy(() => import("../page/SimpleBonus"))
export const PublicRouter = () => {
    return (
        <Routes>
       
            <Route
                path="/casino/:casino_name/bonuses/:bonus_type"
                element={<SimpleBonus />}
            />
             <Route
                path="/loyaltie"
                element={<Loyalties />}
            />
            <Route
                path="/home"
                element={<Home />}
            />
            <Route
                path="/"
                element={
                    <Navigate to="/loyaltie" />
                }
            />
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
