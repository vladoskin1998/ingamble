import { Wraper } from "../Wraper"
import { Categories } from "../../components/categories/Categories"
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { LoyaltieCasinoInfo } from "./LoyaltieCasinoInfo"
import { LoyaltyRewnew } from "./LoyaltyRewnew"
import reviewloyalty16 from "../../assets/img/review-loyalty/16.jpg"
import reviewloyalty17 from "../../assets/img/review-loyalty/17.jpg"
import reviewloyalty22 from "../../assets/img/review-loyalty/22.jpg"
import { LoyaltyText } from "./LoyaltyText"
import { HowToStartVipJorney } from "./HowToStartVipJorney"
import MainSlider from "../../components/swiper/MainSlider"
import casinoCards09 from "../../assets/img/casino-cards/09.jpg"
import casinoCards03 from "../../assets/img/casino-cards/03.jpg"
import casinoCards07 from "../../assets/img/casino-cards/07.jpg"
import casinoCards01 from "../../assets/img/casino-cards/01.jpg"
import casinoCards04 from "../../assets/img/casino-cards/04.jpg"
import { SimpleBonusEssentialPrograms } from "../SimpleBonus/SimpleBonusEssentialPrograms"
import { HarryStyles } from "../SimpleBonus/HarryStyles"
import { CheckMoreWhatSuitsYouBest } from "../../components/categories/CheckMoreWhatSuitsYouBest"
import SubscribeForm from "../SimpleBonus/SubscribeForm"
import { LoyaltyAcordeon } from "./LoyaltyAcordeon"
import $api from "../../http"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { useSearchParams } from "react-router-dom"
import { useQuery } from "react-query"
import { LoyaltieProgramDataResponse } from "../../types"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { useEffect } from "react"


const getCurrentLoyaltiesFetchData = async (queryId: string) => {
    const response = await $api.get(`get-data-loyalty-program/${queryId}/`);

    const headers = response.headers;

    return { dataCurrentLoyaltie: response.data, headers };
};

export default function SimpleLoyalties() {
    document.title = "Simple Loyalties"

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()

    const [searchParams] = useSearchParams()
    const queryId = searchParams.get("queryId")
    
    const { data, isLoading } = useQuery<{
        dataCurrentLoyaltie: LoyaltieProgramDataResponse;
        headers: any;
    }>(
        ["get-data-casino", queryId],
        () => getCurrentLoyaltiesFetchData(queryId!),
        {
            staleTime: Infinity,
            enabled: !!queryId,
        }
    );


    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    if (isLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__loyaltie main-gamble loyaltie">
                <div className="main-gamble__body">
                    <Categories />
                    <BreadCrumb
                        path={[
                            {
                                name: "Home",
                                link: "https://cryptogamblers.pro",
                            },
                            {
                                name: "Casino Bonuses",
                                link: "https://cryptogamblers.pro/bonuses",
                            },
                            {
                                name: "Casino Name",
                                link: "https://cryptogamblers.pro/casino/iwild-casino",
                            },
                            {
                                name: "Bonuses",
                                link: "https://cryptogamblers.pro/casino/iwild-casino/bonuses",
                            },
                            {
                                name: "Bonus Type",
                                link: "#",
                            },
                        ]}
                    />
                    <LoyaltieCasinoInfo data={data?.dataCurrentLoyaltie}/>

                    <LoyaltyRewnew
                        loyalty_subtype={[
                            {
                                name: "Hourly lottery | Win up to $100 in hourly lottery",
                                img: reviewloyalty16,
                            },
                            {
                                name: "Keys to open Chest | Open treasure chests every level up",
                                img: reviewloyalty17,
                            },
                            {
                                name: "Billion Bets Event | Loyalty players able to win in events",
                                img: reviewloyalty22,
                            },
                        ]}
                    />
                    <LoyaltyAcordeon />
                    <LoyaltyText />
                    <HowToStartVipJorney />
                    <section className="simple-bonus__more-stake more-staket-simple-bonus">
                        <div className="more-staket-simple-bonus__container container">
                            <div className="more-staket-simple-bonus__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                            {/* {dataCurrent?.dataCurrentLoyaltie?.casino
                                                    ? `More ${dataCurrent?.dataCurrentLoyaltie?.?.replace(/casino/i, "")} Casino Loyalty`
                                                    : "More Casino Loyalty Casino Loyalty"} */}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
                                            rel="nofollow noopener"
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="top__btn"
                                        >
                                            <span>See All</span>
                                            <span className="top__btn-arrow">
                                                <svg>
                                                    <use xlinkHref="#arrow"></use>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <MainSlider
                                data={[
                                    {
                                        img: casinoCards09,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards07,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards07,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </section>
                    <section className="simple-bonus__more-stake more-staket-simple-bonus">
                        <div className="more-staket-simple-bonus__container container">
                            <div className="more-staket-simple-bonus__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Other Best Reload bonuses
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
                                            rel="nofollow noopener"
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="top__btn"
                                        >
                                            <span>See All</span>
                                            <span className="top__btn-arrow">
                                                <svg>
                                                    <use xlinkHref="#arrow"></use>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <MainSlider
                                data={[
                                    {
                                        img: casinoCards03,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards07,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards07,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10$
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        $5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </section>
                    <SimpleBonusEssentialPrograms />
                    <HarryStyles />
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
