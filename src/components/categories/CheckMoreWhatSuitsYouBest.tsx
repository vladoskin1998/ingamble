
import { useAdaptiveBehavior } from "../../context/AppContext"
import searchFilterIcon from "../../assets/img/icons/search-filter.svg"
import { Link } from "react-router-dom"
import { sliceString } from "../../helper"
import { useEffect, useState } from "react"
import { FormatedCategoryType } from "../../types"
import { useFilterContext } from "../../context/FilterContext"



export default function CheckMoreWhatSuitsYouBest  ()  {
    const { isSidebarActive, setSidebarActive, category } = useAdaptiveBehavior()
    

     const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)
    
        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth <= 480)
            window.addEventListener("resize", handleResize)
    
            handleResize()
            return () => window.removeEventListener("resize", handleResize)
        }, [])

    return (
        <section className="main-gamble__bottom-filter-tags bottom-filter-tags check-bottom-filter-tags">
            <div className="bottom-filter-tags__container container">
                <div className="bottom-filter-tags__top top">
                    <div className="top__title-block">
                        <span className="top__title-icon">
                            <img loading="lazy" src={searchFilterIcon} alt="search" />
                        </span>
                        <h2 className="top__title">Get More of What Suits You Best</h2>
                    </div>
                </div>
                <div className="bottom-filter-tags__row">
                    {category?.map((item, index) => (
                        <div className="bottom-filter-tags__column bottom-filter-tags__link" key={index}>
                            <ItemCategory item={item} isMobile={isMobile}/>
                        </div>
                    ))}
                </div>
                <button onClick={() => setSidebarActive(!isSidebarActive)} className="bottom-filter-tags__btn-filter">
                    <span>
                        <svg>
                            <use xlinkHref="#filter"></use>
                        </svg>
                    </span>
                    Filter What You need
                </button>
            </div>
        </section>
    )
}


const ItemCategory = ({ item, isMobile }: { item: FormatedCategoryType; isMobile: boolean}) => {
    const { fooCategorySanitazeLink } = useFilterContext()

    const { seeAllLink, seeAllFoo } = fooCategorySanitazeLink({
        type_category: item.categoryType,
        slug: item.slug,
    })

    return (
        <Link to={seeAllLink} onClick={seeAllFoo} aria-label="Put your description here." className="bottom-filter-tags__btn slide-filter-tags-gamble__btn">
            {isMobile ? sliceString(item?.name, 23) : item?.name}
        </Link>
    )
}