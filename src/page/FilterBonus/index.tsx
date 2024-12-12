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
import { memo, useEffect, useState } from "react"
import { useAdaptiveBehavior } from "../../context/AppContext"
import star from "../../assets/img/icons/star.svg"
import { COLORS_TAGS, filterEmptyValues, sanitizeLink } from "../../helper"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import { debounce } from "lodash"
import { LogoLoader } from "../../components/loader/LogoLoader"
import searchImg from "../../assets/img/icons/search-filter.svg"
import "../SeeAllBonus/style.css"
import { v4 as uuidv4 } from "uuid"
import { CheckMoreWhatSuitsYouBest } from "../../components/categories/CheckMoreWhatSuitsYouBest"
import SubscribeForm from "../SimpleBonus/SubscribeForm"
import { Link } from "react-router-dom"

const countPageSize = 20

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

const getFilteringBonusList = async (
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
        () => getFilteringBonusList(bonusFilters, currentPage),
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
        setCurrentPage(1)
        debouncedFetchFilter(bonusFilters, refetch)
        if (!isMobile) {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        } else {
            setAllData([])
        }
    }, [bonusFilters, refetch])

    useEffect(() => {
        if (data?.results && isMobile) {
            setAllData((s) => {
                const combinedData = [...s, ...data?.results]

                const uniqueData = combinedData?.reduce((acc, item) => {
                    if (!acc.some((el) => el.bonus_id === item.bonus_id)) {
                        acc.push(item)
                    }
                    return acc
                }, [] as SeeAllBonus[])

                return uniqueData
            })
        }
        if (!allData.length && data?.results) {
            setAllData(data?.results)
        }
    }, [data])

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
    console.log("currentPage", currentPage)

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    if (isDebouncedLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__casinos-filtered main-gamble casinos-filtered">
                <div className="main-gamble__body">
                    <Categories />
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
                            <ListDisplayData displayedData={displayedData} />
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
                    <CheckMoreWhatSuitsYouBest />
                    <SubscribeForm />
                    <section className="main-gamble__bottom-info bottom-info-gamble">
                        <div className="bottom-info-gamble__container container">
                            <div className="bottom-info-gamble__row">
                                <div className="bottom-info-gamble__column">
                                    <div className="bottom-info-gamble__item">
                                        <h2 className="bottom-info-gamble__title">
                                            inGamble - The most popular New
                                            Casino and Bonus listing and review
                                            website
                                        </h2>
                                        <div className="bottom-info-gamble__text">
                                            <p>
                                                inGamble is a well-known and
                                                respected brand within the
                                                iGaming industry. We are the
                                                most popular gambling listing
                                                and review website. New players
                                                owners always look for
                                                opportunities to list their
                                                projects on our website. That
                                                ensures that the information on
                                                our platform is always
                                                accessible and up to date.
                                            </p>
                                            <p>
                                                Most of the cryptocurrencies are
                                                listed on CoinMooner even before
                                                they are listed on CoinMarketCap
                                                & CoinGecko.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-info-gamble__column">
                                    <div className="bottom-info-gamble__item">
                                        <h2 className="bottom-info-gamble__title">
                                            Find DeFi tokens that will generate
                                            huge profits
                                        </h2>
                                        <div className="bottom-info-gamble__text">
                                            <p>
                                                CoinMooner became a platform
                                                that makes cryptocurrencies more
                                                accessible to the public and
                                                provides entertaining features,
                                                developments, crypto-related
                                                news, tutorials, and other
                                                valuable materials. One of the
                                                main goals is to stay relevant
                                                and keep up with the rapid
                                                growth of crypto.
                                            </p>
                                            <p>
                                                To follow our ideology, we
                                                developed state-of-the-art
                                                mechanisms and features that
                                                allow our visitors to analyze
                                                the tokens. Our visitors can use
                                                various rankings, filtering
                                                options, token contract audits,
                                                charts, trading history, and
                                                many other valuable options. All
                                                of this combined brings
                                                consistent results!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </Wraper>
    )
}

const ListDisplayData = memo(
    ({ displayedData }: { displayedData: SeeAllBonus[] | undefined }) => {
        return (
            <div className="main-see-all__row custom-main-see-all__row">
                {displayedData?.map((item) => (
                    <div className="main-see-all__column">
                        <div className="slide-slider__item casino-card">
                            <div className="casino-card__top">
                                <div
                                    className="casino-card__image-block"
                                    style={{ padding: "0 8px 50.432% 8px" }}
                                >
                                    <Link
                                        rel="nofollow noopener"
                                        to={`/casino/${sanitizeLink(
                                            item.casino_name
                                        )}/bonuses/${sanitizeLink(
                                            item.bonus_name
                                        )}?queryId=${item.bonus_id}`}
                                        aria-label="Put your description here."
                                     
                                        className="casino-card__image see-all-custom__image-custom"
                                        key={uuidv4()}
                                    >
                                        <LazyCardImg
                                            img={item?.bonus_image}
                                            height="100%"
                                            width="100%"
                                        />
                                    </Link>
                                    <a
                                        rel="nofollow noopener"
                                        href={item?.casino_affiliate_link || item?.url_casino}
                                        target="_blank"
                                        aria-label="Put your description here."
                                        className="casino-card__bnt"
                                    >
                                        Play
                                    </a>
                                </div>
                            </div>
                            <div className="casino-card__content">
                                <div className="casino-card__tags tags-casino-card">
                                    {item?.labels?.map((it, id) => (
                                        <div
                                            key={id}
                                            className={`tags-casino-card__item ${
                                                COLORS_TAGS[id % 4]
                                            }`}
                                        >
                                            <span className="tags-casino-card__item-label">
                                                {typeof it === "string"
                                                    ? it
                                                    : it?.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="casino-card__info info-casino-card">
                                    <div className="info-casino-card__stake">
                                        <Link
                                            rel="nofollow noopener"
                                            to={`/casino/${sanitizeLink(
                                                item.casino_name
                                            )}?queryId=${item.casino_id}`}
                                            aria-label="Put your description here."
                                         
                                            className="info-casino-card__stake-link"
                                        >
                                            {item?.casino_name}
                                        </Link>
                                        <div className="info-casino-card__stake-rating">
                                            <span className="info-casino-card__stake-rating-icon">
                                                <img src={star} alt="star" />
                                            </span>
                                            <span className="info-casino-card__stake__rating-number">
                                                {item?.casino_rank}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="info-casino-card__likes">
                                        <span className="info-casino-card__likes-icon">
                                            <img src={like} alt="like" />
                                        </span>
                                        <span className="info-casino-card__likes-number">
                                            {item?.bonus_likes}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    rel="nofollow noopener"
                                    to={`/casino/${sanitizeLink(
                                        item.casino_name
                                    )}/bonuses/${sanitizeLink(
                                        item.bonus_name
                                    )}?queryId=${item.bonus_id}`}
                                    aria-label="Put your description here."
                                
                                    className="casino-card__name"
                                >
                                    {item?.bonus_name}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
)
