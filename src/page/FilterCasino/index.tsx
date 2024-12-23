import { useQuery } from "react-query"
import { Categories } from "../../components/categories/Categories"
import { FilterHeaderList } from "../../components/filter-components/FilterHeaderList"
import {
    initialCasinoFilters,
    useFilterContext,
} from "../../context/FilterContext"
import $api from "../../http"
import {
    CasinoFilterBodyType,
    FilterCasinoPostResponse,
    SeeAllCasinosType,
} from "../../types"
import { Wraper } from "../Wraper"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import like from "../../assets/img/icons/like.svg"
import { memo, useEffect, useState } from "react"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { rankCasinosSeeAll, WithdrawalSeeAllCasinos } from "../SeeAllCasinos"
import {
    cloacingLink,
   
    filterEmptyValues,
    NumberAssociaty,
    sanitizeLink,
    sanitizeNumberLike,
    sliceString,
} from "../../helper"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import { debounce } from "lodash"
import { LogoLoader } from "../../components/loader/LogoLoader"
import searchImg from "../../assets/img/icons/search-filter.svg"
import "../SeeAllCasinos/style.css"
import { v4 as uuidv4 } from "uuid"
import { CheckMoreWhatSuitsYouBest } from "../../components/categories/CheckMoreWhatSuitsYouBest"
import SubscribeForm from "../SimpleBonus/SubscribeForm"
import { Link } from "react-router-dom"
import { NoResult } from "../../components/no-result"

const countPageSize = 15

interface License {
    id?: number
    name: string
    image: string | null
    country_code?: string | null
}

interface LicenseElemProps {
    filtersDataLicenses?: License[]
    casinoFiltersLicenses?: number[]
    itemLicenses?: License[]
}

const LicenseElem: React.FC<LicenseElemProps> = ({
    filtersDataLicenses,
    casinoFiltersLicenses,
    itemLicenses,
}) => {
    const [selectedLicense, setSelectedLicense] = useState<License | undefined>(
        undefined
    )

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const newSelectedLicense =
                filtersDataLicenses?.find(
                    (license) => license?.id === casinoFiltersLicenses?.[0]
                ) || itemLicenses?.[0]
            setSelectedLicense(newSelectedLicense)
        }, 700)

        return () => clearTimeout(timeoutId)
    }, [filtersDataLicenses, casinoFiltersLicenses, itemLicenses])

    return (
        <div className="item-info-content-item-loyaltie-programs__value">
            <>
                {sliceString(selectedLicense?.name, 15)}
                {selectedLicense?.image && (
                    <span className="item-info-content-item-loyaltie-programs__value-flag">
                        <img
                            src={selectedLicense.image}
                            alt={selectedLicense.name || ""}
                        />
                    </span>
                )}
            </>
        </div>
    )
}

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

    const { initializeAdaptiveBehavior, isSidebarActive } =
        useAdaptiveBehavior()
    const {
        data: filtersData,
        casinoFilters,
        setCasinoFilters,
    } = useFilterContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllCasinosType[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    const [isDebouncedLoading, setIsDebouncedLoading] = useState(true)
    const { data, isLoading, refetch } = useQuery<FilterCasinoPostResponse>(
        ["filter/casinos", casinoFilters, currentPage],
        () => getFilteringCasinoList(casinoFilters, currentPage),
        {
            keepPreviousData: true,
            enabled: false,
        }
    )

    useEffect(() => {
        debouncedFetchPagination(
            casinoFilters,
            refetch,
            setIsDebouncedLoading,
            isMobile
        )
    }, [currentPage, refetch, setCurrentPage])

    useEffect(() => {
        setCurrentPage(1)
        debouncedFetchFilter(casinoFilters, refetch)
        if (!isMobile) {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        } else {
            setAllData([])
        }
    }, [casinoFilters, refetch])

    useEffect(() => {
        if (data?.results && isMobile) {
            setAllData((s) => [...s, ...data?.results])
        }
        if (!allData.length && data?.results) {
            setAllData(data?.results)
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
        setCasinoFilters(initialCasinoFilters)
    }

    const handlerClearOne = (v: string) => {
        if (v.includes("withdrawal_limits")) {
            const field = v.replace("withdrawal_limits.", "")
            setCasinoFilters((s) => ({
                ...s,
                withdrawal_limits: {
                    ...s.withdrawal_limits,
                    [field]: field === "unlimited" ? undefined : null,
                },
            }))
        }

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
                    <Categories />
                    <FilterHeaderList
                        initList={casinoFilters}
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
                            {displayedData?.length ? (
                                <>
                               
                                    <ListDisplayData
                                        displayedData={displayedData}
                                        filtersDataLicenses={
                                            filtersData?.casino?.licenses
                                        }
                                        casinoFiltersLicenses={
                                            casinoFilters?.licenses
                                        }
                                    />
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
                                </>
                            ) : (
                                <NoResult />
                            )}
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
    ({
        displayedData,
        filtersDataLicenses,
        casinoFiltersLicenses,
    }: {
        filtersDataLicenses: License[] | undefined
        casinoFiltersLicenses: number[] | undefined

        displayedData: SeeAllCasinosType[] | undefined
    }) => {
        return (
            <div className="main-loyaltie-programs__items loyaltie-programs__items">
                {displayedData?.map((item) => (
                    <div className="loyaltie-programs__item item-loyaltie-programs">
                        <div className="item-loyaltie-programs__row">
                            <div className="item-loyaltie-programs__main">
                                <Link
                                    rel="nofollow noopener"
                                    aria-label="Put your description here."
                                    className="item-loyaltie-programs__image item-loyaltie-programs__image-custom "
                                    key={uuidv4()}
                                    to={`/casino/${sanitizeLink(
                                        item.casino_name
                                    )}?queryId=${item.casino_id}`}
                                >
                                    <LazyCardImg
                                        img={item?.casino_image || ""}
                                        height="100%"
                                        width="100%"
                                    />
                                </Link>
                            </div>
                            <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                <div className="content-item-loyaltie-programs__row">
                                    <div className="content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main">
                                        <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                            <h2 className="top-content-item-loyaltie-programs__name">
                                                {item?.casino_name}
                                            </h2>
                                            <div className="info-casino-card__likes">
                                                <span className="info-casino-card__likes-icon">
                                                    <img
                                                        src={like}
                                                        alt="like"
                                                    />
                                                </span>
                                                <span className="info-casino-card__likes-number">
                                                    {sanitizeNumberLike( item?.likes)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="content-item-loyaltie-programs__info info-content-item-loyaltie-programs">
                                            <div className="info-content-item-loyaltie-programs__row">
                                                <div className="info-content-item-loyaltie-programs__column">
                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high">
                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                            Safety Index
                                                        </div>
                                                        <div className="item-info-content-item-loyaltie-programs__value">
                                                            {item?.casino_rank}
                                                            <span className="item-info-content-item-loyaltie-programs__value-index">
                                                                {rankCasinosSeeAll(
                                                                    Number(
                                                                        item?.casino_rank
                                                                    )
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                            Min Dep
                                                        </div>
                                                        <div className="item-info-content-item-loyaltie-programs__value">
                                                            {item.min_dep?.[0]
                                                                ?.value
                                                                ? `${
                                                                      item
                                                                          .min_dep?.[0]
                                                                          ?.value
                                                                  } ${'$ USDT'}`
                                                                : "Unlimited"}
                                                        </div>
                                                    </div>
                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                            License
                                                        </div>
                                                        <LicenseElem
                                                            filtersDataLicenses={
                                                                filtersDataLicenses
                                                            }
                                                            casinoFiltersLicenses={
                                                                casinoFiltersLicenses
                                                            }
                                                            itemLicenses={
                                                                item.licenses
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="info-content-item-loyaltie-programs__column">
                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                            Withdrawal Limit:
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
                                                            Payout Speed
                                                        </div>
                                                        <div
                                                            className={`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${item.payout_speed.toLocaleLowerCase()}`}
                                                        >
                                                            {item?.payout_speed}
                                                        </div>
                                                    </div>
                                                    <div className="info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs">
                                                        <div className="item-info-content-item-loyaltie-programs__label">
                                                            VPN Allowed
                                                        </div>
                                                        <div
                                                            className={`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${
                                                                item?.vpn_usage
                                                                    ? "yes"
                                                                    : "no"
                                                            }`}
                                                        >
                                                            {item?.vpn_usage
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
                                                    href={cloacingLink(
                                                        item?.url_casino ||
                                                            item?.casino_affiliate_link
                                                    )}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        e.preventDefault()
                                                        window.open(
                                                            item?.casino_affiliate_link ||
                                                                item?.url_casino,
                                                            "_blank",
                                                            "noopener,noreferrer"
                                                        )
                                                    }}
                                                    aria-label="Put your description here."
                                                    className="bottom-content-item-loyaltie-programs__btn-view"
                                                >
                                                    Visit Casino
                                                </a>
                                                <Link
                                                    to={`/casino/${sanitizeLink(
                                                        item?.casino_name
                                                    )}?queryId=${
                                                        item?.casino_id
                                                    }`}
                                                    aria-label="Put your description here."
                                                    className="bottom-content-item-loyaltie-programs__btn-more"
                                                >
                                                    Read More
                                                </Link>
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
                                                                    {it?.text_1}
                                                                </div>
                                                                <div className="features-essential-programs-gamble__text">
                                                                    {it?.text_2}
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
        )
    }
)
