import { Navigate, Route, Routes } from "react-router-dom"
import { SimpleBonus } from "../page/SimpleBonus"

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route
                path="online-casino/:casino_name/bonuses/:bonus_type"
                element={<SimpleBonus />}
            />
            <Route
                path="*"
                element={
                    <Navigate
                        to="online-casino/default-casino/bonuses/default-bonus"
                        replace
                    />
                }
            />
   
        </Routes>
    )
}
