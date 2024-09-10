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



// if (filter_open_delete && sidebar_gamble && header) {
//     filter_open_delete.addEventListener('click', function (event) {
//         event.preventDefault(); sidebar_gamble.classList.remove('active'); header.classList.remove('resize'); footer.classList.remove('resize'); main.classList.remove('resize'); if (!document.querySelector('.mobile-header.active')) { body.classList.remove('lock') }
//         if (gamble_body) { gamble_body.classList.remove('hide') }
//         if (document.querySelector('.title-filters-sidebar-gamble__text')) { let title = document.querySelector('.title-filters-sidebar-gamble__text'); title.classList.remove('selected'); document.querySelector('.title-filters-sidebar-gamble__text').innerHTML = 'Filters' }
//         if (document.querySelector('.filter-selected__body')) { document.querySelector('.filter-selected__body').classList.remove('active') }
//     })
// }
//let sidebar_title_icons = document.querySelectorAll('.title-item-form-filters__icon'); if (sidebar_title_icons) { sidebar_title_icons.forEach(function (sidebar_title_icon) { sidebar_title_icon.addEventListener('click', function (event) { event.preventDefault(); if (!sidebar_gamble.classList.contains('active')) { filter_open_btn.classList.toggle('active'); sidebar_gamble.classList.toggle('active'); header.classList.toggle('resize'); footer.classList.toggle('resize'); main.classList.toggle('resize') } }) }) }
// let filter_open_btn = document.querySelector('.title-filters-sidebar-gamble__btn'); let filter_open_delete = document.querySelector('.title-filters-sidebar-gamble__btn-delete'); let sidebar_gamble = document.querySelector('.sidebar-gamble'); let header = document.querySelector('.header'); let gamble_body = document.querySelector('.gamble__body'); let footer = document.querySelector('.footer'); let main = document.querySelector('main'); if (filter_open_btn && sidebar_gamble && header && main) {
//     filter_open_btn.addEventListener('click', function (event) {
//         event.preventDefault(); if (document.documentElement.clientWidth > 650.98) { filter_open_btn.classList.toggle('active'); sidebar_gamble.classList.toggle('active'); header.classList.toggle('resize'); footer.classList.toggle('resize'); main.classList.toggle('resize') } else { sidebar_gamble.classList.add('active'); header.classList.add('resize'); footer.classList.add('resize'); main.classList.add('resize'); body.classList.add('lock') }
//         let titles_form_filter_item = document.querySelectorAll('.title-item-form-filters'); if (titles_form_filter_item && !sidebar_gamble.classList.contains('active')) { titles_form_filter_item.forEach(function (title_form_filter_item) { $('.title-item-form-filters').removeClass('active'); $('.title-item-form-filters').parent().removeClass('active'); $('.title-item-form-filters').next().slideUp(400); $('.title-item-form-filters').next().removeClass('active') }) }
//     })
// }
