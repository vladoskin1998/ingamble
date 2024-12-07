import { LazyLoadImage } from "react-lazy-load-image-component"
import { useAdaptiveBehavior } from "../../context/AppContext"
import searchFilterIcon from "../../assets/img/icons/search-filter.svg"
import $api from "../../http"
import { AllCategoriesHomeDataResponse } from "../../types"
import { sanitizeLink } from "../../helper"
import { useQuery } from "react-query"

const shuffleArray = (array: any): { link: string; name: string }[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

const getDataHomePageCategories = async () => {
    const response = await $api.get("get-data-home-page-categories/")
    return response.data
}

export const CheckMoreWhatSuitsYouBest = () => {
    const { isSidebarActive, setSidebarActive } = useAdaptiveBehavior()

    const { data: dataCategories } = useQuery<AllCategoriesHomeDataResponse>(
        "get-data-home-page-categories/",
        getDataHomePageCategories,
        {
            keepPreviousData: true,
            staleTime: Infinity,
        }
    )

    const category = shuffleArray([
        ...(dataCategories?.bonus_categories?.map((item: any) => ({
            name: item.name,
            link: `${window.location.origin}/all-bonus/${sanitizeLink(
                item?.name
            )}`,
        })) || []),
        ...(dataCategories?.casino_categories?.map((item: any) => ({
            name: item.name,
            link: `${window.location.origin}/all-casinos/${sanitizeLink(
                item?.name
            )}`,
        })) || []),
    ])

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
                    {category.map((item, index) => (
                        <div className="bottom-filter-tags__column" key={index}>
                            <a
                                rel="nofollow noopener"
                                href={item?.link || "/"}
                                aria-label="Put your description here."
                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                            >
                                {item.name}
                            </a>
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
