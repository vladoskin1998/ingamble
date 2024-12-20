import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { Categories } from "../../components/categories/Categories"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import { Wraper } from "../Wraper"
import like from "../../assets/img/icons/like.svg"
import "./style.css"
import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAdaptiveBehavior } from "../../context/AppContext"
import $api from "../../http"
import { useQuery } from "react-query"
import { LogoLoader } from "../../components/loader/LogoLoader"
import {
    PAYOUTSPEED,
    SeeAllCasinosType,
    SeeAllCasinosCategoryResponse,
} from "../../types"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import {
    cloacingLink,
    euroToDolar,
    NumberAssociaty,
    sanitizeLink,
} from "../../helper"
import { CheckMoreWhatSuitsYouBest } from "../../components/categories/CheckMoreWhatSuitsYouBest"
import SubscribeForm from "../SimpleBonus/SubscribeForm"

const getAllCasinosFetchData = async (page: number, queryId: string | null) => {
    const response = await $api.get(
        `get-see-all-casinos-category${
            queryId ? "/" + queryId : ""
        }/?page=${page}&page_size=${countPageSize}`
    )
    return response.data
}

export const rankCasinosSeeAll = (r: number) => {
    if (r >= 8) {
        return PAYOUTSPEED.High
    } else if (r >= 5) {
        return PAYOUTSPEED.Medium
    } else {
        return PAYOUTSPEED.Low
    }
}

export const WithdrawalSeeAllCasinos = (n: {
    daily: number | null
    weekly: number | null
    monthly: number | null
}) => {
    if (n.monthly) {
        return "Monthly"
    } else if (n.weekly) {
        return "Weekly"
    } else if (n.daily) {
        return "Daily"
    }
    return ""
}

const countPageSize = 10

export default function SeeAllCasinos() {
    document.title = "All Casino"
    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllCasinosType[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    const [searchParams] = useSearchParams()
    const qid = searchParams.get("queryId")

    const [queryId, setQueryId] = useState<string>(qid || "")

    useEffect(() => {
      
            setQueryId(qid || '')
            window.scrollTo(0, 0)
        
    }, [qid])

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()

    const { data, isLoading } = useQuery<SeeAllCasinosCategoryResponse>(
        ["get-see-all-loyalties", currentPage, queryId],
        () => getAllCasinosFetchData(currentPage, queryId),
        {
            keepPreviousData: true,
        }
    )
    useEffect(() => {
        if (data?.casino?.results && isMobile) {
            setAllData((s) => {
                const combinedData = [...s, ...data?.casino?.results]

                const uniqueData = combinedData?.reduce((acc, item) => {
                    if (!acc.some((el) => el?.casino_id === item?.casino_id)) {
                        acc.push(item)
                    }
                    return acc
                }, [] as SeeAllCasinosType[])

                return uniqueData
            })
        }
        if (!allData?.length && data?.casino?.results) {
            setAllData(data?.casino?.results)
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

    const displayedData = isMobile ? allData : data?.casino?.results

    if (isLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__casinos-filtered main-gamble casinos-filtered">
                <div className="main-gamble__body">
                    <Categories />
                    <BreadCrumb
                        path={[
                            {
                                name: "Home",
                                link: "https://cryptogamblers.pro",
                            },
                            {
                                name: "All Bonuses",
                                link: "https://cryptogamblers.pro/bonuses",
                            },
                            // {
                            //     name:   DataArray.find(item => Number(item?.key) === key)?.name || 'not found',
                            //     link: "#",
                            // },
                        ]}
                    />
                    <section className="casinos-filtered__main main-loyaltie-programs">
                        <div className="main-loyaltie-programs__container container">
                            <div className="main-loyaltie-programs__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                            
                                                {queryId ? data?.category_name || "Casino" :
                                                    "Casino List"}
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
                                                <Link
                                                    to={`/casino/${sanitizeLink(
                                                        item.casino_name
                                                    )}?queryId=${
                                                        item.casino_id
                                                    }`}
                                                    aria-label="Put your description here."
                                                    className="item-loyaltie-programs__image item-loyaltie-programs__image-custom"
                                                >
                                                    <LazyCardImg
                                                        img={
                                                            item?.casino_image ||
                                                            ""
                                                        }
                                                        height="auto"
                                                        width="100%"
                                                    />
                                                </Link>
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
                                                                            {item
                                                                                ?.licenses?.[0]
                                                                                ?.image && (
                                                                                <span className="item-info-content-item-loyaltie-programs__value-flag">
                                                                                    <img
                                                                                        src={
                                                                                            item
                                                                                                ?.licenses?.[0]
                                                                                                ?.image ||
                                                                                            ""
                                                                                        }
                                                                                        alt={
                                                                                            item
                                                                                                ?.licenses?.[0]
                                                                                                ?.country_code
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                            )}
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
                                                                    href={cloacingLink(
                                                                        item?.url_casino ||    item?.casino_affiliate_link 
                                                                            
                                                                    )}
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.stopPropagation()
                                                                        e.preventDefault()
                                                                        window.open(
                                                                            item?.casino_affiliate_link ||
                                                                                item?.url_casino,
                                                                            "_blank",
                                                                            "noopener,noreferrer"
                                                                        )
                                                                    }}
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
                                countElem={data?.casino?.count}
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
