import { useQuery } from "react-query"
import { Categories } from "../../components/categories/Categories"
import { FilterHeaderList } from "../../components/filter-header-list/FilterHeaderList"
import {
    initialCasinoFilters,
    useFilterContext,
} from "../../context/FilterContext"
import $api from "../../http"
import {
    CasinoFilterBodyType,
    FilterCasinoPostResponse,
    SeeAllCasinosCasino,
} from "../../types"
import { Wraper } from "../Wraper"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import like from "../../assets/img/icons/like.svg"
import { lazy, useEffect, useState } from "react"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { rankCasinosSeeAll, WithdrawalSeeAllCasinos } from "../SeeAllCasinos"
import { euroToDolar, NumberAssociaty } from "../../helper"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import { debounce } from "lodash"
import { LogoLoader } from "../../components/loader/LogoLoader"
import searchImg from "../../assets/img/icons/search-filter.svg"

interface MakeListFilterHeaderType {
    value: string
    field: string
}

type BooleanValueType = {
    true: "Yes"
    false: "No"
}
const BooleanValue: BooleanValueType = {
    true: "Yes",
    false: "No",
}

const makeListFilterHeader = (
    o: CasinoFilterBodyType
): MakeListFilterHeaderType[] => {
    const result: MakeListFilterHeaderType[] = []

    for (const [key, value] of Object.entries(o)) {
        if (Array.isArray(value) && value.length > 0) {
            result.push({
                value: `${key.replace(/_/g, " ")}: ${value.length}`,
                field: key,
            })
        } else if (
            value !== undefined &&
            value &&
            typeof value === "object" &&
            "min" in value &&
            "max" in value
        ) {
            result.push({
                value: `${key.replace(/_/g, " ")}: ${value.min} - ${value.max}`,
                field: key,
            })
        } else if (
            value !== undefined &&
            value !== null &&
            typeof value === "object" &&
            "daily" in value &&
            "weekly" in value &&
            "monthly" in value
        ) {
            result.push({
                value: `${key.replace(/_/g, " ")}: ${value.daily}, ${
                    value.weekly
                }, ${value.monthly}`,
                field: key,
            })
        } else if (
            value !== undefined &&
            value !== null &&
            typeof value !== "object"
        ) {
            result.push({
                value: `${key.replace(/_/g, " ")}: ${
                    typeof value === "boolean"
                        ? BooleanValue[String(value) as keyof BooleanValueType]
                        : String(value)
                }`,
                field: key,
            })
        }
    }

    return result
}

const filterEmptyValues = (
    body: CasinoFilterBodyType
): Partial<CasinoFilterBodyType> => {
    return Object.fromEntries(
        Object.entries(body).filter(([_, value]) => {
            if (value === null || value === undefined) return false
            if (Array.isArray(value) && value.length === 0) return false
            return true
        })
    )
}

const LazyFlag = lazy(() => import("react-world-flags"))

const countPageSize = 10

const debouncedFetchFilter = debounce(
    (filters, fetchFunction) => fetchFunction(filters),
    1000
)

const debouncedFetchPagination = debounce(
    (filters, fetchFunction, setLoading) => {
        setLoading(true)
        fetchFunction(filters).finally(() => setLoading(false))
    }
)

const getFilteringCasinoList = async (
    payload: CasinoFilterBodyType,
    page: number
) => {
    const body = filterEmptyValues(payload)
    const response = await $api.post(
        `filter/casinos/?page=${page}&page_size=${countPageSize}`,
        body
    )
    return response.data
}

export default function FilterCasino() {
    document.title = "Filter Casino"

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()
    const { casinoFilters, setCasinoFilters } = useFilterContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllCasinosCasino[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    const [isDebouncedLoading, setIsDebouncedLoading] = useState(true)
    const { data, isLoading, refetch } = useQuery<FilterCasinoPostResponse>(
        ["get-datas-filter-casino", casinoFilters, currentPage],
        () => getFilteringCasinoList(casinoFilters, currentPage),
        {
            keepPreviousData: true,
            enabled: false,
        }
    )

    useEffect(() => {
        debouncedFetchPagination(casinoFilters, refetch, setIsDebouncedLoading)
    }, [currentPage, refetch, setCurrentPage])

    useEffect(() => {
        debouncedFetchFilter(casinoFilters, refetch)
        if (!isMobile) {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    }, [casinoFilters, refetch])

    useEffect(() => {
        if (data?.results) {
            setAllData((s) => {
                const combinedData = [...s, ...data?.results]

                const uniqueData = combinedData.reduce((acc, item) => {
                    if (!acc.some((el) => el.casino_id === item.casino_id)) {
                        acc.push(item)
                    }
                    return acc
                }, [] as SeeAllCasinosCasino[])

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
        setCasinoFilters(initialCasinoFilters)
    }

    const handlerClearOne = (v: string) => {
        const findedValueField =
            initialCasinoFilters[v as keyof CasinoFilterBodyType]
        setCasinoFilters((s) => ({
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
                        list={makeListFilterHeader(casinoFilters)}
                        clearAll={clearAll}
                        clearOne={(v) => handlerClearOne(v)}
                    />
                    <section className="casinos-filtered__main main-loyaltie-programs">
                        <div className="main-loyaltie-programs__container container">
                            <div className="results-filter-scenarios__top top">
                                <div className="top__title-block">
                                    <span className="top__title-icon">
                                        <img src={searchImg} alt="search" />
                                    </span>
                                    <h2 className="top__title">Results</h2>
                                </div>
                            </div>
                            <div className="main-loyaltie-programs__items loyaltie-programs__items">
                                {displayedData?.map((item) => (
                                    <div className="loyaltie-programs__item item-loyaltie-programs">
                                        <div className="item-loyaltie-programs__row">
                                            <div className="item-loyaltie-programs__main">
                                                <div
                                                    aria-label="Put your description here."
                                                    className="item-loyaltie-programs__image item-loyaltie-programs__image-custom"
                                                >
                                                    <LazyCardImg
                                                        img={
                                                            item?.casino_image ||
                                                            ""
                                                        }
                                                        width="100%"
                                                    />
                                                </div>
                                            </div>
                                            <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                                <div className="content-item-loyaltie-programs__row">
                                                    <div className="content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main">
                                                        <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                                            <h2 className="top-content-item-loyaltie-programs__name">
                                                                {
                                                                    item.casino_name
                                                                }
                                                            </h2>
                                                            <div className="info-casino-card__likes">
                                                                <span className="info-casino-card__likes-icon">
                                                                    <img
                                                                        src={
                                                                            like
                                                                        }
                                                                        alt="like"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__likes-number">
                                                                    {
                                                                        item?.likes
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="content-item-loyaltie-programs__info info-content-item-loyaltie-programs">
                                                            <div className="info-content-item-loyaltie-programs__row">
                                                                <div className="info-content-item-loyaltie-programs__column">
                                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high">
                                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                                            Safety
                                                                            Index
                                                                        </div>
                                                                        <div className="item-info-content-item-loyaltie-programs__value">
                                                                            {
                                                                                item.casino_rank
                                                                            }
                                                                            <span className="item-info-content-item-loyaltie-programs__value-index">
                                                                                {rankCasinosSeeAll(
                                                                                    Number(
                                                                                        item.casino_rank
                                                                                    )
                                                                                )}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                                            Min
                                                                            Dep
                                                                        </div>
                                                                        <div className="item-info-content-item-loyaltie-programs__value">
                                                                            {`${
                                                                                item
                                                                                    .min_dep?.[0]
                                                                                    ?.value
                                                                            } ${euroToDolar()}`}
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                                            License
                                                                        </div>
                                                                        <div className="item-info-content-item-loyaltie-programs__value">
                                                                            {
                                                                                item
                                                                                    ?.licenses?.[0]
                                                                                    ?.name
                                                                            }
                                                                            <span className="item-info-content-item-loyaltie-programs__value-flag">
                                                                                <LazyFlag
                                                                                    code={
                                                                                        item
                                                                                            ?.licenses?.[0]
                                                                                            ?.country_code
                                                                                    }
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="info-content-item-loyaltie-programs__column">
                                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                                            Withdrawal
                                                                            Limit:
                                                                        </div>
                                                                        <div className="item-info-content-item-loyaltie-programs__value">
                                                                            {`${NumberAssociaty(
                                                                                item
                                                                                    ?.withdrawal_limit
                                                                                    ?.monthly ||
                                                                                    item
                                                                                        ?.withdrawal_limit
                                                                                        ?.weekly ||
                                                                                    item
                                                                                        ?.withdrawal_limit
                                                                                        ?.daily ||
                                                                                    "Unlimited"
                                                                            )} ${WithdrawalSeeAllCasinos(
                                                                                item?.withdrawal_limit
                                                                            )}`}
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                                            Payout
                                                                            Speed
                                                                        </div>
                                                                        <div
                                                                            className={`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${item.payout_speed.toLocaleLowerCase()}`}
                                                                        >
                                                                            {
                                                                                item.payout_speed
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                                            VPN
                                                                            Allowed
                                                                        </div>
                                                                        <div
                                                                            className={`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${
                                                                                item.vpn_usage
                                                                                    ? "yes"
                                                                                    : "no"
                                                                            }`}
                                                                        >
                                                                            {item.vpn_usage
                                                                                ? "Yes"
                                                                                : "No"}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs">
                                                            <div className="bottom-content-item-loyaltie-programs__btns">
                                                                <a
                                                                    href={
                                                                        item.casino_affiliate_link
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
                                                    <div className="content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features">
                                                        <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                                            {item?.loyalty_program?.loyalty_keypoint
                                                                ?.slice(0, 3)
                                                                .map((it) => (
                                                                    <div className="features-essential-programs-gamble__column">
                                                                        <div className="features-essential-programs-gamble__item">
                                                                            <div className="features-essential-programs-gamble__icon">
                                                                                <LazyCardImg
                                                                                    img={
                                                                                        it?.image ||
                                                                                        ""
                                                                                    }
                                                                                    size="medium"
                                                                                    width="100%"
                                                                                />
                                                                            </div>
                                                                            <div className="features-essential-programs-gamble__info">
                                                                                <div className="features-essential-programs-gamble__name">
                                                                                    {
                                                                                        it.text_1
                                                                                    }
                                                                                </div>
                                                                                <div className="features-essential-programs-gamble__text">
                                                                                    {
                                                                                        it.text_2
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                        </div>
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
