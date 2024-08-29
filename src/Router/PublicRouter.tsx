import { Navigate, Route, Routes } from "react-router-dom"

import { NotFound } from "../page/NotFound/NotFound"

import { SimpleBonus } from "../page/SimpleBonus"
import { IframeCasinoAffiliateLink } from "../page/SimpleBonus/IframeCasinoAffiliateLink"

export const PublicRouter = () => {
    return (
        <Routes>
            <Route
                path="/go/:casino_name"
                element={<IframeCasinoAffiliateLink />}
            />
            <Route
                path="/casino/:casino_name/bonuses/:bonus_type"
                element={<SimpleBonus />}
            />
            <Route
                path="/"
                element={
                    <Navigate to="/casino/:casino_name/bonuses/:bonus_type" />
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
