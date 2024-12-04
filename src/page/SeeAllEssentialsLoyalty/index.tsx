import star from "../../assets/img/icons/star.svg"
import { Wraper } from "../Wraper"
import { Categories } from "../../components/categories/Categories"
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import SubscribeForm from "../SimpleBonus/SubscribeForm"
import { CheckMoreWhatSuitsYouBest } from "../SimpleBonus/CheckMoreWhatSuitsYouBest"
import $api from "../../http"
import { useQuery } from "react-query"
import {
    SeeAllEssentialCasinoResponse,
    SeeAllEssentialLoyaltyCasino,
} from "../../types"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import "./style.css"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { useEffect, useState } from "react"
import { sanitizeLink } from "../../helper"

const countPageSize = 10

export default function SeeAllEssentialsLoyalty() {
    document.title = "All Essentials Loyalty"

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllEssentialLoyaltyCasino[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
    const getAllEssentialsLoyalty = async (
        page: number
    ): Promise<SeeAllEssentialCasinoResponse> => {
        const response = await $api.get(
            `get-see-all-loyalties/?page=${page}&page_size=${countPageSize}`
        )
        return response.data
    }

    const { data, isLoading } = useQuery(
        ["get-see-all-loyalties", currentPage],
        () => getAllEssentialsLoyalty(currentPage),
        {
            keepPreviousData: true,
        }
    )

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    useEffect(() => {
        if (data?.results) {
            setAllData((s) => [...s, ...data?.results])
        }
    }, [data])

    useEffect(() => {
        if (data?.results && isMobile) {
            setAllData((s) => {
                const combinedData = [...s, ...data?.results]

                const uniqueData = combinedData?.reduce((acc, item) => {
                    if (!acc.some((el) => el?.casino_id === item?.casino_id)) {
                        acc.push(item)
                    }
                    return acc
                }, [] as SeeAllEssentialLoyaltyCasino[])

                return uniqueData
            })
        }
        if (!allData?.length && data?.results) {
            setAllData(data?.results)
        }
    }, [data])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    const displayedData = isMobile ? allData : data?.results

    if (isLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__loyaltie-programs main-gamble loyaltie-programs loyaltie-filtered__main">
                <div className="main-gamble__body">
                    <Categories
                        category={[
                            { name: "All" },
                            { name: "Hot Events" },
                            { name: "Best Cash Back Casinos" },
                            { name: "Highest RTP Slots" },
                            { name: " No Deposit Bonuses" },
                            { name: "  VPN Allowed Casinos" },
                        ]}
                    />
                    <BreadCrumb
                        path={[
                            {
                                name: "Home",
                                link: "https://cryptogamblers.pro",
                            },
                            {
                                name: "Gambling Hub",
                                link: "https://cryptogamblers.pro/bonuses",
                            },
                            {
                                name: "Essential VIP Loyalty Programs",
                                link: "#",
                            },
                        ]}
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
                                                <a
                                                        href={`/casino/${sanitizeLink(item.casino_name)}?queryId=${item.casino_id}`}
                                                className="item-loyaltie-programs__image loyalty-img-custom">
                                                    <LazyCardImg
                                                        img={
                                                            item?.casino_image ||
                                                            ""
                                                        }
                                                        width="100%"
                                                    />
                                                </a>
                                            </div>
                                            <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                                <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                                    <h2 className="top-content-item-loyaltie-programs__name">
                                                        {item.casino_name}
                                                    </h2>
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img
                                                                src={star}
                                                                alt="star"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">
                                                            {item.casino_rank}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                                    {item.loyalty_program.loyalty_keypoint.map(
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

                                                    <div className="features-essential-programs-gamble__column features-essential-programs-gamble__column_rating">
                                                        <div className="features-essential-programs-gamble__item features-essential-programs-gamble__item_rating">
                                                            <div className="item-essential-programs-gamble__rating">
                                                                <div className="item-essential-programs-gamble__rating-number">
                                                                    {item?.loyalty_program?.count_levels || 10 }/10
                                                                </div>
                                                                <div className="item-essential-programs-gamble__rating-body">
                                                                    <div className="item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble">

                                                                        {
                                                                            [1,2,3,4,5,6,7,8,9,10].map(level => 
                                                                                <div className={`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${level} ${level <= (item?.loyalty_program?.count_levels || 10) && "full"}`}></div>

                                                                            )
                                                                        }
              
                                                                    </div>
                                                                    <div className="item-essential-programs-gamble__rating-text">
                                                                        {item?.loyalty_program?.loyalty_level_description || 'Excellent'}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs">
                                                    <div className="bottom-content-item-loyaltie-programs__btns">
                                                    <a
                                                   href={`/casino/${sanitizeLink(item.casino_name)}`}
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="bottom-content-item-loyaltie-programs__btn-view"
                                                >
                                                    View Casino
                                                </a>
                                                <a
                                                    href={`/casino/${sanitizeLink(item.casino_name)}/loyalty?queryId=${item.casino_id}`}
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
