import { ReactNode, useEffect } from "react"
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    useEffect(() => {
        let ibg: NodeListOf<HTMLElement> = document.querySelectorAll(".ibg")
      
        if (ibg) {
            for (let item of ibg) {
                let ibgImg = item.querySelector("img")
                let ibgImgSrc = ibgImg?.getAttribute("src")
                item.style.backgroundImage = `url(${ibgImgSrc})`
            }
        }

     
    }, [location])
    return <>{children}</>
}
