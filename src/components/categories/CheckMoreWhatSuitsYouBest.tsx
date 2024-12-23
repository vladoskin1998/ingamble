import { LazyLoadImage } from "react-lazy-load-image-component"
import { useAdaptiveBehavior } from "../../context/AppContext"
import searchFilterIcon from "../../assets/img/icons/search-filter.svg"
import { Link } from "react-router-dom"



export const CheckMoreWhatSuitsYouBest = () => {
    const { isSidebarActive, setSidebarActive, category } = useAdaptiveBehavior()
    const CristmasCategory = category.find(item => item.bonus_id === 11)

    return (
        <section className="main-gamble__bottom-filter-tags bottom-filter-tags check-bottom-filter-tags">
            <div className="bottom-filter-tags__container container">
                <div className="bottom-filter-tags__top top">
                    <div className="top__title-block">
                        <span className="top__title-icon">
                            <LazyLoadImage
                                src={searchFilterIcon}
                                alt="search"
                            />
                        </span>
                        <h2 className="top__title">
                            Check more what suits You Best
                        </h2>
                    </div>
                </div>
                <div className="bottom-filter-tags__row">
                <div className="bottom-filter-tags__column">
                            <Link
                              
                                to={CristmasCategory?.link || "/"}
                                aria-label="Put your description here."
                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                            >
                                {CristmasCategory?.name}
                            </Link>
                        </div>
                    {category?.filter(item => item?.bonus_id !== 11 )?.map((item, index) => (
                        <div className="bottom-filter-tags__column" key={index}>
                            <Link
                              
                                to={item?.link || "/"}
                                aria-label="Put your description here."
                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                            >
                                {item?.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => setSidebarActive(!isSidebarActive)}
                    className="bottom-filter-tags__btn-filter"
                >
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
