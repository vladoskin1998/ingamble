import { useQuery } from "react-query"
import { Categories } from "../../components/categories/Categories"
import { FilterHeaderList } from "../../components/filter-components/FilterHeaderList"
import {
    initialBonusFilters,
    initialCasinoFilters,
    useFilterContext,
} from "../../context/FilterContext"
import $api from "../../http"
import {
    BonusFilterBodyType,
    CasinoFilterBodyType,
    FilterBonusPostResponse,
    SeeAllBonus,
} from "../../types"
import { Wraper } from "../Wraper"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import like from "../../assets/img/icons/like.svg"
import { useEffect, useState } from "react"
import { useAdaptiveBehavior } from "../../context/AppContext"
import star from "../../assets/img/icons/star.svg"
import { COLORS_TAGS } from "../../helper"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import { debounce } from "lodash"
import { LogoLoader } from "../../components/loader/LogoLoader"
import searchImg from "../../assets/img/icons/search-filter.svg"
import "../SeeAllBonus/style.css"

const filterEmptyValues = (
    body: BonusFilterBodyType
): Partial<BonusFilterBodyType> => {
    return Object.fromEntries(
        Object.entries(body).filter(([_, value]) => {
            if (value === null || value === undefined) return false
            if (Array.isArray(value) && value?.length === 0) return false
            return true
        })
    )
}

const countPageSize = 60

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

const getFilteringCasinoList = async (
    payload: BonusFilterBodyType,
    page: number
) => {
    const body = filterEmptyValues(payload)
    const response = await $api.post(
        `filter/bonus/?page=${page}&page_size=${countPageSize}`,
        body
    )
    return response.data
}

export default function FilterBonus() {
    document.title = "Filter Bonus"

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()

    const { bonusFilters, setBonusFilters } = useFilterContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllBonus[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    const [isDebouncedLoading, setIsDebouncedLoading] = useState(true)

    const { data, isLoading, refetch } = useQuery<FilterBonusPostResponse>(
        ["filter/bonus", bonusFilters, currentPage],
        () => getFilteringCasinoList(bonusFilters, currentPage),
        {
            keepPreviousData: true,
            enabled: false,
        }
    )

    useEffect(() => {
        debouncedFetchPagination(
            bonusFilters,
            refetch,
            setIsDebouncedLoading,
            isMobile
        )
    }, [currentPage, refetch, setCurrentPage])

    useEffect(() => {
        debouncedFetchFilter(bonusFilters, refetch)
        if (!isMobile) {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    }, [bonusFilters, refetch])

    useEffect(() => {
        if (data?.results) {
            setAllData((s) => {
                const combinedData = [...s, ...data?.results]

                const uniqueData = combinedData.reduce((acc, item) => {
                    if (!acc.some((el) => el?.bonus_id === item?.bonus_id)) {
                        acc.push(item)
                    }
                    return acc
                }, [] as SeeAllBonus[])

                return uniqueData
            })
        }
    }, [data])

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const displayedData = isMobile ? allData : data?.results

    const clearAll = () => {
        setBonusFilters(initialBonusFilters)
    }

    const handlerClearOne = (v: string) => {
        const findedValueField =
            initialCasinoFilters[v as keyof CasinoFilterBodyType]
        setBonusFilters((s) => ({
            ...s,
            [v as keyof CasinoFilterBodyType]: findedValueField,
        }))
    }

    if (isDebouncedLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__casinos-filtered main-gamble casinos-filtered">
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
                        initList={bonusFilters}
                        clearAll={clearAll}
                        clearOne={(v) => handlerClearOne(v)}
                    />
                   <section className="see-all__main main-see-all">
                        <div className="main-see-all__container container">
                            <div className="results-filter-scenarios__top top">
                                <div className="top__title-block">
                                    <span className="top__title-icon">
                                        <img src={searchImg} alt="search" />
                                    </span>
                                    <h2 className="top__title">Results</h2>
                                </div>
                            </div>
                            <div className="main-see-all__row">
                                {displayedData?.map((item) => (
                                    <div className="main-see-all__column" key={item?.bonus_id + item?.bonus_image}>
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image see-all-custom__image-custom ">
                                                        <LazyCardImg
                                                            img={
                                                                item?.bonus_image
                                                            }
                                                            width="100%"
                                                        />
                                                    </div>
                                                    <a
                                                        href={
                                                            item?.casino_affiliate_link
                                                        }
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    {item?.labels?.map(
                                                        (it, id) => (
                                                            <div
                                                            key={id}
                                                                className={`tags-casino-card__item ${
                                                                    COLORS_TAGS[
                                                                        id % 4
                                                                    ]
                                                                }`}
                                                            >
                                                                <span className="tags-casino-card__item-label">
                                                                    {typeof it === "string" ? it : it.name}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="info-casino-card__stake-link"
                                                        >
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                {
                                                                    item?.casino_rank
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={like}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            {item?.bonus_likes}
                                                        </span>
                                                    </div>
                                                </div>
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__name"
                                                >
                                                    {item?.bonus_name}
                                                </a>
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
