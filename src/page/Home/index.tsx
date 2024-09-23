import { lazy, useLayoutEffect } from "react"
import { Default } from "../Dafault"

import { SubscribeForm } from "../SimpleBonus/SubscribeForm"
import { useAdaptiveBehavior } from "../../Layout"
import { SimpleBonusEssentialPrograms } from "../SimpleBonus/SimpleBonusEssentialPrograms"
import MainSlider from "../../components/swiper/MainSlider"

import casinoCards01 from "../../assets/img/casino-cards/01.jpg"
import casinoCards02 from "../../assets/img/casino-cards/02.jpg"
import casinoCards03 from "../../assets/img/casino-cards/03.jpg"
import casinoCards04 from "../../assets/img/casino-cards/04.jpg"
import casinoCards05 from "../../assets/img/casino-cards/05.jpg"
import casinoCards06 from "../../assets/img/casino-cards/06.jpg"

import casinoCards07 from "../../assets/img/casino-cards/07.jpg"


import hot from "/src/assets/img/icons/hot.svg"

import gIcon from "../../assets/img/icons/g-icon.svg"
import { Categories } from "../../components/catogories/Categories"
import { SafestCasinos } from "./SafestCasinos"
import { NewBonus } from "./NewBonus"
import { TopGainersCasinos } from "./TopGainersCasinos"
import { HighestMaxBetBonuses } from "./HighestMaxBetBonuses"
import { LowRiskBonuses } from "./LowRiskBonuses"
import { BestLiveDealerCasinos } from "./BestLiveDealerCasinos"
import { CheckMoreWhatSuitsYouBest } from "../SimpleBonus/CheckMoreWhatSuitsYouBest"
import { LowWagerBonus } from "./LowWagerBonus"
import { ExploreTheBestCryptoCasinos } from "./ExploreTheBestCryptoCasinos"

//@ts-ignore
const WeeksFavoiritesBonuses = lazy(() => import("./WeeksFavoiritesBonuses"))
//@ts-ignore
const TheBestCasinosYear = lazy(() => import("./TheBestCasinosYear"))
//@ts-ignore
const FastestWithdrawalCasinos = lazy(
    () => import("./FastestWithdrawalCasinos")
)

export const Home = () => {
    document.title = "Home"
    //@ts-ignore
    const { isSidebarActive, setSidebarActive, initializeAdaptiveBehavior } =
        useAdaptiveBehavior()

    useLayoutEffect(() => {
        setTimeout(() => {
            initializeAdaptiveBehavior()
        }, 1000)
    }, [])

    return (
        <Default>
            <main className="gamble__main main-gamble">
                <div className="main-gamble__body">
                    <Categories
                        category={
                            [
                                { name: "All" },
                                { name: "Hot Events" },
                                { name: "Best Cash Back Casinos" },
                                { name: "Highest RTP Slots" },
                                { name: " No Deposit Bonuses" },
                                { name: "  VPN Allowed Casinos" },
                            ] || []
                        }
                    />
                    <section className="main-gamble__todays-hot todays-hot-gamble">
                        <div className="todays-hot-gamble__container container">
                            <div className="todays-hot-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <span className="top__title-icon">
                                                <img
                                                    src={hot}
                                                    alt="Today’s Hot"
                                                />
                                            </span>
                                            <h2 className="top__title">
                                                Today’s Hot
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards02,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards03,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards05,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                ]}
                            />
                        </div>
                    </section>
                    <section className="main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
                        <div className="fastest-payout-casinos-gamble__container container">
                            <div className="fastest-payout-casinos-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Fastest Payout Casinos
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards02,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards03,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards05,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                ]}
                            />
                        </div>
                    </section>
                    <SimpleBonusEssentialPrograms />
                    <section className="main-gamble__popular-free popular-free-gamble">
                        <div className="popular-free-gamble__container container">
                            <div className="popular-free-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Popular Free/No Deposit Bonuses
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards02,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards03,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards05,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                ]}
                            />
                        </div>
                    </section>

                    <SafestCasinos />
                    <section className="main-gamble__playing-now playing-now-gamble">
                        <div className="playing-now-gamble__container container">
                            <div className="playing-now-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <span className="top__title-icon">
                                                <img src={gIcon} alt="g-icon" />
                                            </span>
                                            <h2 className="top__title">
                                                What We Are Playing Now
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards02,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards03,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                    {
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards05,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                ]}
                            />
                        </div>
                    </section>
                    <NewBonus />
                    <TopGainersCasinos />
                    <FastestWithdrawalCasinos/>
                    <HighestMaxBetBonuses />
                    <WeeksFavoiritesBonuses/> 
                    <LowWagerBonus isShowSubtitle={false}/>
                
                    {/* <TheBestCasinosYear /> */}
                    <section className="main-gamble__live-casino-bonuses live-casino-bonuses-gamble">
                        <div className="live-casino-bonuses-gamble__container container">
                            <div className="live-casino-bonuses-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Great Live Casino Bonuses
                                            </h2>
                                        </div>
                                        <div className="top__subtitle">
                                            Real-time experience
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="live-casino-bonuses-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="live-casino-bonuses-gamble__swiper slider__swiper swiper">
                                        <MainSlider
                                            data={[
                                                {
                                                    img: casinoCards06,
                                                    raiting: "4.8",
                                                    likes: "34k",
                                                    nameCasino: "Stake Casino",
                                                    comment:
                                                        "New Year Bet Race - $30,000 Rocket...",
                                                },
                                                {
                                                    img: casinoCards04,
                                                    raiting: "4.8",
                                                    likes: "34k",
                                                    nameCasino: "Stake Casino",
                                                    comment:
                                                        "New Year Bet Race - $30,000 Rocket...",
                                                },
                                                {
                                                    img: casinoCards07,
                                                    raiting: "4.8",
                                                    likes: "34k",
                                                    nameCasino: "Stake Casino",
                                                    comment:
                                                        " Big Fat Race to $100 Moon coins",
                                                },
                                                {
                                                    img: casinoCards01,
                                                    raiting: "4.8",
                                                    likes: "34k",
                                                    nameCasino: "Stake Casino",
                                                    comment:
                                                        "New Year Bet Race - $30,000 Rocket...",
                                                },
                                                {
                                                    img: casinoCards05,
                                                    raiting: "4.8",
                                                    likes: "34k",
                                                    nameCasino: "Stake Casino",
                                                    comment:
                                                        " Big Fat Race to $100 Moon coins",
                                                },
                                                {
                                                    img: casinoCards01,
                                                    raiting: "4.8",
                                                    likes: "34k",
                                                    nameCasino: "Stake Casino",
                                                    comment:
                                                        "New Year Bet Race - $30,000 Rocket...",
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination live-casino-bonuses-gamble__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <LowRiskBonuses />
                    <BestLiveDealerCasinos />
                    {/* <section className="main-gamble__safest-casinos safest-casinos-gamble">
                        <div className="safest-casinos-gamble__container container">
                            <div className="safest-casinos-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <span className="top__title-icon">
                                                <img
                                                    src="img/icons/security.svg"
                                                    alt="security"
                                                />
                                            </span>
                                            <h2 className="top__title">
                                                Safest Casinos
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="safest-casinos-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="safest-casinos-gamble__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/05.jpg"
                                                                alt="Big Fat Race to $100 Moon coins"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Playamo.jpg"
                                                                        alt="Playamo"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Playamo
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/08.jpg"
                                                                alt="Big Fat Race to $100 Moon coins"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Casoo.jpg"
                                                                        alt="Casoo"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Casoo
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/02.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Casino-Vibes.jpg"
                                                                        alt="Casino Vibes"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Casino Vibes
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/01.jpg"
                                                                alt="Big Fat Race to $100 Moon coins"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Tsars.jpg"
                                                                        alt="Tsars"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Tsars
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/04.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Casino-Vibes.jpg"
                                                                        alt="Casino Vibes"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Casino Vibes
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/05.jpg"
                                                                alt="Big Fat Race to $100 Moon coins"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Playamo.jpg"
                                                                        alt="Playamo"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Playamo
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination safest-casinos-gamble__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__highroller-casino-bonuses highroller-casino-bonuses-gamble">
                        <div className="new-bonuses-gamble__container container">
                            <div className="highroller-casino-bonuses-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Highroller Casino Bonuses
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="highroller-casino-bonuses-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="highroller-casino-bonuses-gamble__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/07.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Casoo.jpg"
                                                                        alt="Casoo"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Casoo
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/04.jpg"
                                                                alt="Big Fat Race to $100 Moon coins"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Tsars.jpg"
                                                                        alt="Tsars"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Tsars
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/06.jpg"
                                                                alt="Big Fat Race to $100 Moon coins"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Playamo.jpg"
                                                                        alt="Playamo"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Playamo
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/08.jpg"
                                                                alt="Big Fat Race to $100 Moon coins"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Tsars.jpg"
                                                                        alt="Tsars"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Tsars
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/01.jpg"
                                                                alt="Big Fat Race to $100 Moon coins"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Playkasino.jpg"
                                                                        alt="Playkasino"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Playkasino
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/07.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/casino-small-cards/Casino-Vibes.jpg"
                                                                        alt="Casino Vibes"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    Casino Vibes
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                    <span className="casino-small-card__info-link">
                                                                        Sportsbook
                                                                    </span>
                                                                    <span className="casino-small-card__info-link">
                                                                        VPN
                                                                        Friendly
                                                                    </span>
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                        5.5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination highroller-casino-bonuses-gamble__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__newly-opened-casinos newly-opened-casinos-gamble main-gamble__different-casino-medium">
                        <div className="newly-opened-casinos-gamble__container container">
                            <div className="newly-opened-casinos-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Newly Opened Casinos
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="newly-opened-casinos-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="newly-opened-casinos-gamble__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/vavada.png"
                                                                alt="vavada"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            Vavada
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/roy-spins.png"
                                                                alt="roy-spins"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            Roy Spins
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/bc-game.png"
                                                                alt="bc-game"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            BC.Game Casino
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/fairspin.png"
                                                                alt="fairspin"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            Fairspin
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/casino-vibes.png"
                                                                alt="casino-vibes"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            CasinoVibes
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/lucky-block.png"
                                                                alt="lucky-block"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            Lucky Block
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/30bet.png"
                                                                alt="30bet"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            30Bet
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/fairspin.png"
                                                                alt="fairspin"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            Fairspin
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/playamo.png"
                                                                alt="playamo"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            Playamo
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/bc-game.png"
                                                                alt="bc-game"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            BC.Game
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/casino-vibes.png"
                                                                alt="casino-vibes"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            CasinoVibes
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/roy-spins.png"
                                                                alt="roy-spins"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            Roy Spins
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <img
                                                                src="/src/assets/img/different-casino/vavada.png"
                                                                alt="vavada"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            Vavada
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                5.5
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__playing-now playing-now-gamble playing-now-gamble_mobile">
                        <div className="playing-now-gamble__container container">
                            <div className="playing-now-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <span className="top__title-icon">
                                                <img
                                                    src="/src/assets/img/icons/g-icon.svg"
                                                    alt="g-icon"
                                                />
                                            </span>
                                            <h2 className="top__title">
                                                What We Are Playing Now
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="playing-now-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="playing-now-gamble-mobile__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/04.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/02.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/03.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket
                                                                Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/01.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/05.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket
                                                                Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/04.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination playing-now-gamble-mobile__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <LowWagerBonus />
                        <ExploreTheBestCryptoCasinos/>
                  {/*   <section className="main-gamble__welcome-bonus-packs welcome-bonus-packs-gamble">
                        <div className="welcome-bonus-packs-gamble__container container">
                            <div className="welcome-bonus-packs-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Get Started with Powerful
                                                Welcome Bonus Packs
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="welcome-bonus-packs-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="welcome-bonus-packs-gamble__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/03.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket
                                                                Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/05.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket
                                                                Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/02.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/04.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/01.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/01.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination welcome-bonus-packs-gamble__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__great-live-casino-bonuses great-live-casino-bonuses-gamble">
                        <div className="great-live-casino-bonuses-gamble__container container">
                            <div className="great-live-casino-bonuses-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Great Live Casino Bonuses
                                            </h2>
                                        </div>
                                        <div className="top__subtitle">
                                            Real-time experience
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="great-live-casino-bonuses-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="great-live-casino-bonuses-gamble__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/06.jpg"
                                                                alt="Crazy Cash Bomb Winnings"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Crazy Cash Bomb
                                                            Winnings $1,000,000
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/04.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/02.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/03.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket
                                                                Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/05.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket
                                                                Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/01.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination great-live-casino-bonuses-gamble__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__vpn-friendly-casinos-2 vpn-friendly-casinos-2-gamble">
                        <div className="vpn-friendly-casinos-2-gamble__container container">
                            <div className="vpn-friendly-casinos-2-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                VPN Friendly Casinos
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="vpn-friendly-casinos-2-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="vpn-friendly-casinos-2-gamble__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/vavada.png"
                                                                        alt="vavada"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €200
                                                                        and 50
                                                                        spins
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/bc-game.png"
                                                                        alt="bc-game"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €150
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/roy-spins.png"
                                                                        alt="roy-spins"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €150
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/30bet.png"
                                                                        alt="30bet"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €200
                                                                        and 50
                                                                        spins
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/fairspin.png"
                                                                        alt="fairspin"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €200
                                                                        and 50
                                                                        spins
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/lucky-block.png"
                                                                        alt="lucky-block"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €150
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/casino-vibes.png"
                                                                        alt="casino-vibes"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €150
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/playamo.png"
                                                                        alt="playamo"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €200
                                                                        and 50
                                                                        spins
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/vavada.png"
                                                                        alt="vavada"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €200
                                                                        and 50
                                                                        spins
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/bc-game.png"
                                                                        alt="bc-game"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €150
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/roy-spins.png"
                                                                        alt="roy-spins"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €150
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/30bet.png"
                                                                        alt="30bet"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €200
                                                                        and 50
                                                                        spins
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination vpn-friendly-casinos-2-gamble__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__non-sticky-bonuses non-sticky-bonuses-gamble">
                        <div className="non-sticky-bonuses-gamble__container container">
                            <div className="non-sticky-bonuses-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Non-Sticky Bonuses
                                            </h2>
                                        </div>
                                        <div className="top__subtitle">
                                            Bonuses we are loving right now
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="non-sticky-bonuses-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="non-sticky-bonuses-gamble__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/06.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Crazy Cash Bomb
                                                            Winnings $1,000,000
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/02.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
                                                        <div className="casino-card__info info-casino-card">
                                                            <div className="info-casino-card__stake">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="info-casino-card__stake-link"
                                                                >
                                                                    Vavad casino
                                                                </a>
                                                                <div className="info-casino-card__stake-rating">
                                                                    <span className="info-casino-card__stake-rating-icon">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/07.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/08.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/01.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/06.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination non-sticky-bonuses-gamble__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__top-reload-bonuses top-reload-bonuses-gamble">
                        <div className="top-reload-bonuses__container container">
                            <div className="top-reload-bonuses__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">
                                                Top Reload Bonuses
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="top-reload-bonuses__slider slider">
                                <div className="slider__body">
                                    <div className="top-reload-bonuses__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/03.jpg"
                                                                alt="Santa’s Bomb Winnings
                                                                $1,000,000"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Santa’s Bomb
                                                            Winnings $1,000,000
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/04.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/02.jpg"
                                                                alt="Big Fat Race to $100 Moon coins "
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Big Fat Race to $100
                                                            Moon coins
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/06.jpg"
                                                                alt="Crazy Cash Bomb Winnings
                                                                    $1,000,000"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            Crazy Cash Bomb
                                                            Winnings $1,000,000
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/05.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket
                                                                Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item casino-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__image-block"
                                                    >
                                                        <div className="casino-card__image ibg">
                                                            <img
                                                                src="/src/assets/img/casino-cards/01.jpg"
                                                                alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    </a>
                                                    <div className="casino-card__content">
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
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="info-casino-card__stake__rating-number">
                                                                        4.8
                                                                    </span>
                                                                </div>
                                                            </div>
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
                                                                    34K
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-card__name"
                                                        >
                                                            New Year Bet Race -
                                                            $30,000 Rocket
                                                            Launcher With 10x
                                                            Scope
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination top-reload-bonuses__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__vpn-friendly-casinos-3 vpn-friendly-casinos-3-gamble">
                        <div className="vpn-friendly-casinos-3-gamble__container container">
                            <div className="vpn-friendly-casinos-3-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <span className="top__title-icon">
                                                <img
                                                    src="/src/assets/img/icons/lightning.svg"
                                                    alt="lightning"
                                                />
                                            </span>
                                            <h2 className="top__title">
                                                Low risk Bonuses
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
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
                            <div className="vpn-friendly-casinos-3-gamble__slider slider">
                                <div className="slider__body">
                                    <div className="vpn-friendly-casinos-3-gamble__swiper slider__swiper swiper">
                                        <div className="slider__wrapper swiper-wrapper">
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/casino-logo.png"
                                                                        alt="casino"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €200
                                                                        and 50
                                                                        spins
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/lucky-block.png"
                                                                        alt="lucky-block"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €150
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <img
                                                                        src="/src/assets/img/different-casino/fairspin.png"
                                                                        alt="fairspin"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        200% up
                                                                        to €200
                                                                        and 50
                                                                        spins
                                                                    </a>
                                                                    <div className="different-casino-standart__tags tags-casino-card">
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
                                                                                Min
                                                                                Dep:
                                                                            </span>
                                                                            <span className="tags-casino-card__item-value">
                                                                                €10
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-casino-card__stake">
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            Stake
                                                                            Casino
                                                                        </a>
                                                                        <div className="info-casino-card__stake-rating">
                                                                            <span className="info-casino-card__stake-rating-icon">
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt="star"
                                                                                />
                                                                            </span>
                                                                            <span className="info-casino-card__stake__rating-number">
                                                                                4.7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__bottom bottom-slider">
                                    <div className="bottom-slider__pagination vpn-friendly-casinos-3-gamble__pagination swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__best-live-dealer-casinos best-live-dealer-casinos-gamble best-live-dealer-casinos-gamble_mobile">
                        <div className="best-live-dealer-casinos-gamble__container container">
                            <div className="best-live-dealer-casinos-gamble__row">
                                <div className="best-live-dealer-casinos-gamble__bg ibg">
                                    <img
                                        src="/src/assets/img/bg/07.jpg"
                                        alt="bg"
                                    />
                                </div>
                                <div className="best-live-dealer-casinos-gamble__body">
                                    <div className="best-live-dealer-casinos-gamble__waves">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="best-live-dealer-casinos-gamble__girl">
                                        <img
                                            src="/src/assets/img/girls/03.png"
                                            alt="girl"
                                        />
                                    </div>
                                    <div className="best-live-dealer-casinos-gamble__content">
                                        <div className="best-live-dealer-casinos-gamble__title">
                                            <span>More bonuses</span>
                                            for your choice
                                        </div>
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="best-live-dealer-casinos-gamble__btn filter-open"
                                        >
                                            <span>
                                                <svg>
                                                    <use xlinkHref="#filter"></use>
                                                </svg>
                                            </span>
                                            Filters
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                   <CheckMoreWhatSuitsYouBest />
                    <SubscribeForm />
                    {/* <section className="main-gamble__bottom-info bottom-info-gamble">
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
                    </section> */}
                </div>
            </main>
        </Default>
    )
}
