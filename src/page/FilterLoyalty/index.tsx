import { useEffect, useState } from "react"
import { Categories } from "../../components/categories/Categories"
import { FilterHeaderList } from "../../components/filter-components/FilterHeaderList"
import { useAdaptiveBehavior } from "../../context/AppContext"
import {
    initialLoyaltiesFilters,
    useFilterContext,
} from "../../context/FilterContext"
import { Wraper } from "../Wraper"
import {
    FilterLoyaltiesPostResponse,
    LoyaltiesFilterBodyType,
    SeeAllEssentialLoyaltyCasino,
} from "../../types"
import { useQuery } from "react-query"
import { filterEmptyValues } from "../../helper"
import $api from "../../http"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { debounce } from "lodash"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import star from "../../assets/img/icons/star.svg"
import '../SeeAllEssentialsLoyalty/style.css'
const countPageSize = 15

const debouncedFetchFilter = debounce(
    (filters, fetchFunction) => fetchFunction(filters),
    1000
)

const debouncedFetchPagination = debounce(
    (filters, fetchFunction, setLoading, isMobile) => {
        if (!isMobile) {
            setLoading(true)
        }

        fetchFunction(filters).finally(() => setLoading(false))
    }
)

const getFilteringLoyaltiesList = async (
    payload: LoyaltiesFilterBodyType,
    page: number
) => {
    const body = filterEmptyValues(payload)
    const response = await $api.post(
        `filter/loyalty/?page=${page}&page_size=${countPageSize}`,
        body
    )
    return response.data
}

export default function FilterLoyalty() {
    document.title = "Filter Loyalties"

    const { initializeAdaptiveBehavior, isSidebarActive } = useAdaptiveBehavior()
    const { loyaltiesFilters, setLoyaltiesFilters } = useFilterContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllEssentialLoyaltyCasino[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    //filter/loyalty/?page_size=100

    const [isDebouncedLoading, setIsDebouncedLoading] = useState(true)
    //FilterLoyaltiesPostResponse
    const { data, isLoading, refetch } = useQuery<FilterLoyaltiesPostResponse>(
        ["filter/loyalty", loyaltiesFilters, currentPage],
        () => getFilteringLoyaltiesList(loyaltiesFilters, currentPage),
        {
            keepPreviousData: true,
            enabled: false,
        }
    )

    useEffect(() => {
        debouncedFetchPagination(
            loyaltiesFilters,
            refetch,
            setIsDebouncedLoading,
            isMobile
        )
    }, [currentPage, refetch, setCurrentPage])

    useEffect(() => {
        setCurrentPage(1)
        debouncedFetchFilter(loyaltiesFilters, refetch)
        if (!isMobile) {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
        else{
            setAllData([])
        }
    }, [loyaltiesFilters, refetch])

    useEffect(() => {
        if (data?.results) {
            setAllData((s) => {
                const combinedData = [...s, ...data?.results]

                const uniqueData = combinedData.reduce((acc, item) => {
                    if (!acc.some((el) => el.casino_id === item.casino_id)) {
                        acc.push(item)
                    }
                    return acc
                }, [] as SeeAllEssentialLoyaltyCasino[])

                return uniqueData
            })
        }
    }, [data])

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading, isSidebarActive])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const displayedData = isMobile ? allData : data?.results

    const clearAll = () => {
        setLoyaltiesFilters(initialLoyaltiesFilters)
    }

    const handlerClearOne = (v: string) => {
        const findedValueField =
            initialLoyaltiesFilters[v as keyof LoyaltiesFilterBodyType]
        setLoyaltiesFilters((s) => ({
            ...s,
            [v as keyof LoyaltiesFilterBodyType]: findedValueField,
        }))
    }

    if (isDebouncedLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__casinos-filtered main-gamble casinos-filtered loyaltie-filtered__main">
                <div className="main-gamble__body">
                    <Categories
                        category={[
                            { name: "All" },
                            { name: "Hot Events" },
                            { name: "Best Cash Back Casinos" },
                            { name: "Highest RTP Slots" },
                            { name: "No Deposit Bonuses" },
                            { name: "VPN Allowed Casinos" },
                        ]}
                    />
                    <FilterHeaderList
                        initList={loyaltiesFilters}
                        clearAll={clearAll}
                        clearOne={(v) => handlerClearOne(v)}
                    />
                       <section className="loyaltie-programs__main main-loyaltie-programs">
                        <div className="main-loyaltie-programs__container container">
                            <div className="main-loyaltie-programs__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Essential VIP Loyalty Programs
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-loyaltie-programs__items loyaltie-programs__items">
                                {displayedData?.map((item) => (
                                    <div className="loyaltie-programs__item item-loyaltie-programs">
                                        <div className="item-loyaltie-programs__row">
                                            <div className="item-loyaltie-programs__main">
                                                <a className="item-loyaltie-programs__image loyalty-img-custom " >
                                                    <LazyCardImg
                                                        img={
                                                            item?.casino_image ||
                                                            ""
                                                        }
                                                        height="100%"
                                                        width="100%"
                                                    />
                                                </a>
                                            </div>
                                            <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                                <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                                    <h2 className="top-content-item-loyaltie-programs__name">
                                                        {item?.casino_name}
                                                    </h2>
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img
                                                                src={star}
                                                                alt="star"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">
                                                            {item?.casino_rank}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                                    {item?.loyalty_program?.loyalty_keypoint.map(
                                                        (it) => (
                                                            <div className="features-essential-programs-gamble__column">
                                                                <div className="features-essential-programs-gamble__item">
                                                                    <div className="features-essential-programs-gamble__icon">
                                                                        <LazyCardImg
                                                                            img={
                                                                                it?.image ||
                                                                                ""
                                                                            }
                                                                            width="100%"
                                                                            size="medium"
                                                                        />
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__info">
                                                                        <div className="features-essential-programs-gamble__name">
                                                                            {
                                                                                it?.text_1
                                                                            }
                                                                        </div>
                                                                        <div className="features-essential-programs-gamble__text">
                                                                            {
                                                                                it?.text_2
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}

                                                    <div className="features-essential-programs-gamble__column features-essential-programs-gamble__column_rating">
                                                        <div className="features-essential-programs-gamble__item features-essential-programs-gamble__item_rating">
                                                            <div className="item-essential-programs-gamble__rating">
                                                                <div className="item-essential-programs-gamble__rating-number">
                                                                    9/10
                                                                </div>
                                                                <div className="item-essential-programs-gamble__rating-body">
                                                                    <div className="item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble">
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_1 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_2 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_3 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_4 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_5 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_6 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_7 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_8 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_9 full"></div>
                                                                        <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_10"></div>
                                                                    </div>
                                                                    <div className="item-essential-programs-gamble__rating-text">
                                                                        Excellent
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs">
                                                    <div className="bottom-content-item-loyaltie-programs__btns">
                                                        <a
                                                            href={
                                                                item?.casino_affiliate_link
                                                            }
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="bottom-content-item-loyaltie-programs__btn-view"
                                                        >
                                                            View Casino
                                                        </a>
                                                        <a
                                                            href="/loyaltie"
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="bottom-content-item-loyaltie-programs__btn-more"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <PaginationPage
                                countElem={data?.count}
                                currentPage={currentPage}
                                countPageElem={countPageSize}
                                setCurrentPage={(s) => {
                                    setCurrentPage(s)
                                    if (!isMobile) {
                                        window.scrollTo({
                                            behavior: "smooth",
                                            top: 0,
                                        })
                                    }
                                }}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </Wraper>
    )
}
