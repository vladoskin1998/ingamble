import { ReactNode, useEffect } from "react"
import { useLocation } from "react-router-dom"

interface ParentOriginal {
    parent: HTMLElement
    index: number
}

export const Layout = ({ children }: { children: ReactNode }) => {
    const location = useLocation()
    
    useEffect(() => {
        const da_elements = document.querySelectorAll(
            "[data-da]"
        ) as NodeListOf<HTMLElement>
        const parents_original: ParentOriginal[] = []
        const attr_elements: string[] = []
        const match_media: MediaQueryList[] = []

        // Store the original parent and index of the elements
        da_elements.forEach((item) => {
            const parentChildren = item.parentElement?.children
            if (parentChildren) {
                for (let i = 0; i < parentChildren.length; i++) {
                    if (parentChildren[i] === item) {
                        parents_original.push({
                            parent: item.parentElement as HTMLElement,
                            index: i,
                        })
                    }
                }
            }
        })


        da_elements.forEach((item) => {
            attr_elements.push(item.dataset.da || "")
        })

     
        attr_elements.forEach((attr_element) => {
            // @ts-ignore
            const [className, index, maxWidth]:any = attr_element.split(", ")
            if (maxWidth) {
                const mediaQuery = window.matchMedia(
                    `(max-width: ${maxWidth}px)`
                )
                match_media.push(mediaQuery)
                mediaQuery.addEventListener("change", dinamic_adapt)
            }
        })

        function dinamic_adapt() {
            match_media.forEach((mediaQuery, i) => {
                const [className, index] = attr_elements[i].split(", ")
                const element = document.querySelector(`.${className}`)
                const targetIndex = parseInt(index, 10)

                if (mediaQuery.matches && element) {
                    const childElement = element.children[targetIndex]
                    if (childElement) {
                        element.insertBefore(da_elements[i], childElement)
                    }
                } else {
                    const { parent, index } = parents_original[i]
                    parent.insertBefore(da_elements[i], parent.children[index])
                }
            })
        }

        dinamic_adapt() // Initial call

        const ibg = document.querySelectorAll(".ibg") as NodeListOf<HTMLElement>

        ibg.forEach((item) => {
            const ibgImg = item.querySelector("img")
            const ibgImgSrc = ibgImg?.getAttribute("src")
            if (ibgImgSrc) {
                item.style.backgroundImage = `url(${ibgImgSrc})`
            }
        })
    }, [location])

    return <>{children}</>
}
