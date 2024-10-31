import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { Categories } from "../../components/categories/Categories"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import { Wraper } from "../Wraper"
import like from "../../assets/img/icons/like.svg"
import "./style.css"
import { useSearchParams } from "react-router-dom"
import { lazy, useEffect, useState } from "react"
import { useAdaptiveBehavior } from "../../context/AppContext"
import $api from "../../http"
import { useQuery } from "react-query"
import { LogoLoader } from "../../components/loader/LogoLoader"
import {
    PAYOUTSPEED,
    SeeAllCasinosCasino,
    SeeAllCasinosCategoryResponse,
} from "../../types"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { euroToDolar, NumberAssociaty } from "../../helper"
const LazyFlag = lazy(() => import("react-world-flags"))

const rank = (r: number) => {
    if (r >= 8) {
        return PAYOUTSPEED.High
    } else if (r >= 5) {
        return PAYOUTSPEED.Medium
    } else {
        return PAYOUTSPEED.Low
    }
}

const Withdrawal = (n: {
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
    document.title = "See All Casinos"

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllCasinosCasino[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    const [searchParams] = useSearchParams()
    const [queryId, setQueryId] = useState("")
    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()

    useEffect(() => {
        const id = searchParams.get("id")
        if (id) {
            setQueryId(id)
        }
    }, [searchParams])

    const getAllCasinosFetchData = async (page: number) => {
        const response = await $api.get(
            `get-see-all-casinos-category/${queryId}/?page=${page}&page_size=${countPageSize}`
        )
        return response.data
    }

    const { data, isLoading } = useQuery<SeeAllCasinosCategoryResponse>(
        ["get-see-all-loyalties", currentPage], 
        () => getAllCasinosFetchData(currentPage),
        {
            keepPreviousData: true,
            enabled: !!queryId,
        }
    )
    useEffect(() => {
        if (data?.casino?.results) {
            setAllData((s) => {
                const combinedData = [...s, ...data?.casino?.results];
                
                const uniqueData = combinedData.reduce((acc, item) => {
                  if (!acc.some((el) => el.casino_id === item.casino_id)) {
                    acc.push(item);
                  }
                  return acc;
                }, [] as SeeAllCasinosCasino[]);
              
                return uniqueData;
              });
        }
    }, [data])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    const displayedData = isMobile ? allData : data?.casino.results
    if (isLoading || !queryId) return <LogoLoader />

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
                                                {data?.category_name}
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
                                                                                {rank(
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
                                                                            )} ${Withdrawal(
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
                                                            {item?.loyalty_program?.loyalty_keypoint?.slice(0,3).map(
                                                                (it) => (
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
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <PaginationPage countElem={data?.casino.count} 
                               currentPage={currentPage}
                               countPageElem={countPageSize} 
                               setCurrentPage={(s) => {
                                setCurrentPage(s)
                                if(!isMobile){
                                    window.scrollTo({ behavior: 'smooth',    top: 0,});
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
