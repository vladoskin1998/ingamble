import { Navigate, Route, Routes } from "react-router-dom"

import { NotFound } from "../page/NotFound/NotFound"
import Home from "../Home"

export const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/online-casino/*" element={<Home/>} />
            <Route path="/" element={<Navigate to='/online-casino'/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
