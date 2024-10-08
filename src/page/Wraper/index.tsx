import  { lazy, ReactNode } from "react"

import { Header } from "../../components/header"
import { Navbar } from "../../components/navbar"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { Icons } from "./Icons"

const Footer = lazy(() => import("../../components/footer"))

export const Wraper = ({children}:{children:ReactNode}) => {
    const {isSidebarActive, setSidebarActive} =     useAdaptiveBehavior()
    return (
        <>
            <Icons/>
            <div className="wrapper">
                <div className="lh-gauge__wrapper">
                    <div className="lh-gauge__percentage"></div>
                    <svg className="lh-gauge-arc" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            strokeWidth="10"
                            fill="none"
                        ></circle>
                    </svg>
                </div>
                <div className="gamble">
                    <Navbar
                        isSidebarActive={isSidebarActive}
                        setSidebarActive={setSidebarActive}
                    />
                    <div className="gamble__body">
                        <Header
                            isSidebarActive={isSidebarActive}
                            setSidebarActive={setSidebarActive}
                        />
                        <>
                        {children}
                    
               
                        </>
                        
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
