import { LazyLoadImage } from "react-lazy-load-image-component"
import mainImg from "../../assets/img/casino-info/main-img.jpg"
import stakeLogo from "../../assets/img/casino-logo/stake.svg"
import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"
import latviaFlag from "../../assets/img/icons/latvia-flag.svg"
import giftIcon from "../../assets/img/icons/gift.svg"
import bg08 from "../../assets/img/bg/08.jpg"
import spinbetterLogo from "../../assets/img/casino-logo/spinbetter.svg"
import carIcon from "../../assets/img/features/car.svg"
import clockIcon from "../../assets/img/features/clock.svg"
import tieIcon from "../../assets/img/features/tie.svg"
import upIcon from "../../assets/img/features/up.svg"
import vulkanLogo from "../../assets/img/casino-logo/vulkan.svg"
import giftFeatureIcon from "../../assets/img/features/gift.svg"
import cashIcon from "../../assets/img/features/cash.svg"
import roySpinsLogo from "../../assets/img/casino-logo/roy-spins.svg"
import harryStyles from "../../assets/img/casino-person/01.svg"
import searchFilterIcon from "../../assets/img/icons/search-filter.svg"
import backgroundImage08 from "../../assets/img/bg/08.jpg"
import logoIcon from "../../assets/img/logo-icon.svg"
import checkIcon from "../../assets/img/icons/check-icon.svg"
import errorIcon from "../../assets/img/icons/error-icon.svg"
import "swiper/css"
import { useQuery } from "react-query"
import {
    lazy,
    useEffect,
    useState,
    //   useState
} from "react"
//import { FAKEDATAGETBONUCE } from "../../http/fakedata/getDataBonuce"
import $api from "../../http"

import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { GetDataBonusResponse } from "../../types"
import { SimpleBonusEssentialPrograms } from "./SimpleBonusEssentialPrograms"
import { BonusSubType } from "./BonusSubType"
import { Categories } from "./Categories"

import { LastUpdate } from "./LastUpdate"
import { Default } from "../Dafault"

const MoreCasinoBonuses = lazy(() => import("./MoreCasinoBonuses"))

const color_label = [
    "tags-casino-card__item_green",
    "tags-casino-card__item_blue",
    "tags-casino-card__item_purple",
    "tags-casino-card__item_grass",
    "tags-casino-card__item_orange",
]

const getBonusDataFetch = async () => {
    const { data } = await $api.get("get-data-bonus/8/")
    return data
}

export const SimpleBonus = () => {
    document.title = "Simple Bonus"

    const { data } = useQuery<GetDataBonusResponse>(
        "get-data-bonus",
        getBonusDataFetch,
        {
            keepPreviousData: true,
        }
    )
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1420.98)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const ibg = document.querySelectorAll(".ibg") as NodeListOf<HTMLElement>
        ibg.forEach((item) => {
            const ibgImg = item.querySelector("img")
            const ibgImgSrc = ibgImg?.getAttribute("src")
            if (ibgImgSrc) {
                item.style.backgroundImage = `url(${ibgImgSrc})`
            }
        })
        const newUrl = `/casino/${data?.casino_name
            .replace(/\s/g, "-")
            .toLocaleLowerCase()}/bonuses/${data?.bonus_type
            .replace(/\s/g, "-")
            .toLocaleLowerCase()}`

        window.history.pushState({}, "", newUrl)
    }, [data])

    const goToCasinoAffiliateLink = ({
        casino_name,
    }: {
        casino_name: string
    }) => {
        window.open(`/go/${casino_name}`, "_blank")
    }

    return (
        <Default>
            <main className="gamble__simple-bonus main-gamble simple-bonus">
                <div className="main-gamble__body">
                    <Categories category={data?.category || []} />

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
                                name: data?.casino_name || "Casino Name",
                                link: "https://cryptogamblers.pro/casino/iwild-casino",
                            },
                            {
                                name: "Bonuses",
                                link: "https://cryptogamblers.pro/casino/iwild-casino/bonuses",
                            },
                            {
                                name: data?.bonus_type || "Bonus Type",
                                link: "#",
                            },
                        ]}
                    />
                    <section className="simple-bonus__casino-info casino-info">
                        <div className="casino-info__container container">
                            <div className="casino-info__body">
                                <div className="casino-info__row">
                                    <div className="casino-info__main main-casino-info">
                                        <div className="main-casino-info__image-block">
                                            <div className="main-casino-info__image ibg">
                                                <img
                                                    src={
                                                        data?.bonus_image ||
                                                        mainImg
                                                    }
                                                    alt="main-img"
                                                />
                                                <img src="" alt="" />
                                            </div>
                                        </div>
                                        <div className="main-casino-info__name name-main-casino-info">
                                            <div className="name-main-casino-info__logo">
                                                <LazyLoadImage
                                                    src={
                                                        data?.casino_logo ||
                                                        stakeLogo
                                                    }
                                                    alt="stake"
                                                    effect="blur"
                                                />
                                            </div>
                                            <div className="name-main-casino-info__content">
                                                <h3 className="name-main-casino-info__title">
                                                    {/* Stake Casino  */}
                                                    {data?.casino_name ||
                                                        "Casino"}
                                                </h3>
                                                <div
                                                    className="info-casino-card__stake-rating name-main-casino-info__stake-rating"
                                                    data-da="name-main-casino-info, 0, 992.98"
                                                >
                                                    <span className="info-casino-card__stake-rating-icon">
                                                        <LazyLoadImage
                                                            src={starIcon}
                                                            alt="star"
                                                            effect="blur"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__stake__rating-number">
                                                        {data?.bonus_rank ||
                                                            "4.8"}
                                                    </span>
                                                </div>
                                                <div
                                                    className="info-casino-card__likes name-main-casino-info__likes"
                                                    data-da="name-main-casino-info, 2, 992.98"
                                                >
                                                    <span className="info-casino-card__likes-icon">
                                                        <LazyLoadImage
                                                            src={likeIcon}
                                                            alt="like"
                                                            effect="blur"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        {data?.likes || "34K"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="casino-info__content content-casino-info">
                                        <div className="content-casino-info__main">
                                            <div className="content-casino-info__top">
                                                <h2 className="content-casino-info__title">
                                                    {/* 200% up to €200 and 50 spin (€2
                                                spin) */}
                                                    {data?.name ||
                                                        " 200% up to €200 and 50 spin (€2 spin)"}
                                                </h2>
                                                <div className="content-casino-info__subtitle">
                                                    {data?.bonus_type ||
                                                        "Reload Bonus"}
                                                </div>
                                            </div>
                                            <div className="casino-card__tags tags-casino-card">
                                                {data?.labels.map(
                                                    (item, index) => (
                                                        <div
                                                            className={`tags-casino-card__item ${color_label[index]}`}
                                                        >
                                                            <span className="tags-casino-card__item-label"></span>
                                                            <span className="tags-casino-card__item-value">
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            <div className="content-casino-info__country country-content-casino-info">
                                                <div className="country-content-casino-info__info">
                                                    <div className="country-content-casino-info__icon">
                                                        <LazyLoadImage
                                                            src={latviaFlag}
                                                            alt="latvia"
                                                            effect="blur"
                                                        />
                                                    </div>
                                                    <div className="country-content-casino-info__text">
                                                        Accepts players from
                                                        Latvia
                                                    </div>
                                                </div>
                                                <a
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="main-get-bonus__btn main-get-bonus__btn_apply"
                                                >
                                                    T&C Apply
                                                </a>
                                            </div>
                                            {/* <a rel="nofollow noopener"
                                            href={
                                                data?.casino_affiliate_link ||
                                                ""
                                            }
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                        >
                                            <span>
                                                <LazyLoadImage
                                                    src={giftIcon}
                                                    alt="gift"
                                                    effect="blur"
                                                />
                                            </span>
                                            Get Bonus and Play
                                        </a> */}
                                            <button
                                                onClick={() =>
                                                    goToCasinoAffiliateLink({
                                                        casino_name:
                                                            data?.casino_name
                                                                .toLocaleLowerCase()
                                                                .replace(
                                                                    /\s/g,
                                                                    "-"
                                                                ) || "",
                                                    })
                                                }
                                                className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                            >
                                                <span>
                                                    <LazyLoadImage
                                                        src={giftIcon}
                                                        alt="gift"
                                                        effect="blur"
                                                    />
                                                </span>
                                                Get Bonus and Play
                                            </button>
                                        </div>
                                        <div className="content-casino-info__features features-content-casino-info">
                                            <div className="features-content-casino-info__row">
                                                <div className="features-content-casino-info__column">
                                                    <div className="features-content-casino-info__item item-features-content-casino-info">
                                                        <div className="item-features-content-casino-info__top">
                                                            <div className="item-features-content-casino-info__label">
                                                                Bonus Rank
                                                            </div>
                                                        </div>
                                                        <div className="item-features-content-casino-info__body">
                                                            <div className="item-features-content-casino-info__number">
                                                                {data?.bonus_rank ||
                                                                    0}
                                                            </div>
                                                            <div className="item-features-content-casino-info__rating">
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-content-casino-info__column">
                                                    <div className="features-content-casino-info__item item-features-content-casino-info">
                                                        <div className="item-features-content-casino-info__top">
                                                            <div className="item-features-content-casino-info__label">
                                                                Wager
                                                            </div>
                                                        </div>
                                                        <div className="item-features-content-casino-info__body">
                                                            <div className="item-features-content-casino-info__number">
                                                                {data
                                                                    ?.wagering_bonus_plus_deposit
                                                                    ?.bonus_plus_deposit ||
                                                                    data
                                                                        ?.wagering_bonus_plus_deposit
                                                                        ?.bonus_only ||
                                                                    0}
                                                                x
                                                            </div>
                                                            <div className="item-features-content-casino-info__value">
                                                                {data
                                                                    ?.wagering_bonus_plus_deposit
                                                                    ?.bonus_plus_deposit
                                                                    ? "Bonus + Deposit"
                                                                    : "Bonus Only"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-content-casino-info__column">
                                                    <div className="features-content-casino-info__item item-features-content-casino-info">
                                                        <div className="item-features-content-casino-info__top">
                                                            <div className="item-features-content-casino-info__label">
                                                                Min Dep
                                                            </div>
                                                        </div>
                                                        <div className="item-features-content-casino-info__body">
                                                            <div className="item-features-content-casino-info__number">
                                                                {data
                                                                    ?.bonus_min_dep?.[0]
                                                                    ?.min_value ||
                                                                    0}
                                                                €
                                                            </div>
                                                            <div className="item-features-content-casino-info__value">
                                                                To Activate
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-content-casino-info__column">
                                                    <div className="features-content-casino-info__item item-features-content-casino-info">
                                                        <div className="item-features-content-casino-info__top">
                                                            <div className="item-features-content-casino-info__label">
                                                                Max Bet
                                                            </div>
                                                        </div>
                                                        <div className="item-features-content-casino-info__body">
                                                            <div className="item-features-content-casino-info__number">
                                                                {`${
                                                                    data
                                                                        ?.max_bet?.[0]
                                                                        ?.value ||
                                                                    0
                                                                }€`}
                                                            </div>
                                                            <div className="item-features-content-casino-info__value">
                                                                Per Spin
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
                    </section>
                    <BonusSubType bonus_subtype={data?.bonus_subtype || []} />
                    <LastUpdate data={data} />
                    <section className="simple-bonus__get-bonus get-bonus">
                        <div className="get-bonus__container container">
                            <div className="get-bonus__body">
                                <div className="get-bonus__bg ibg">
                                    <img src={bg08} alt="bg" loading="lazy" />
                                </div>
                                <div className="get-bonus__row">
                                    <div className="get-bonus__main main-get-bonus">
                                        <div className="main-get-bonus__icon">
                                            <svg>
                                                <use xlinkHref="#gift"></use>
                                            </svg>
                                        </div>
                                        <div className="main-get-bonus__content">
                                            <h2 className="main-get-bonus__title">
                                                How to get Bonus?
                                            </h2>
                                            <div className="main-get-bonus__text">
                                                Bonus is activated after first
                                                deposit
                                            </div>
                                            <div className="main-get-bonus__btns">
                                                <div className="main-get-bonus__btns-item">
                                                    {/* <a rel="nofollow noopener"
                                                    href={
                                                        data?.casino_affiliate_link ||
                                                        ""
                                                    }
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                                >
                                                   
                                                </a> */}
                                                    <button
                                                        onClick={() =>
                                                            goToCasinoAffiliateLink(
                                                                {
                                                                    casino_name:
                                                                        data?.casino_name
                                                                            .toLocaleLowerCase()
                                                                            .replace(
                                                                                /\s/g,
                                                                                "-"
                                                                            ) ||
                                                                        "",
                                                                }
                                                            )
                                                        }
                                                        className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                                    >
                                                        <span>
                                                            <LazyLoadImage
                                                                src={giftIcon}
                                                                alt="gift"
                                                                effect="blur"
                                                            />
                                                        </span>
                                                        Get Bonus
                                                    </button>
                                                </div>
                                                <div className="main-get-bonus__btns-item">
                                                    <a
                                                        rel="nofollow noopener"
                                                        href={`https://cryptogamblers.pro/casino/${data?.casino_name
                                                            .toLowerCase()
                                                            .replace(
                                                                /casino/i,
                                                                ""
                                                            )}`}
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="main-get-bonus__btn main-get-bonus__btn_review"
                                                    >
                                                        <span>
                                                            <svg>
                                                                <use xlinkHref="#review"></use>
                                                            </svg>
                                                        </span>
                                                        {data?.casino_name.replace(
                                                            /casino/i,
                                                            ""
                                                        )}{" "}
                                                        Casino Review
                                                    </a>
                                                </div>
                                                <div className="main-get-bonus__btns-item">
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="main-get-bonus__btn main-get-bonus__btn_apply"
                                                    >
                                                        T&C Apply
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="get-bonus__like like-get-bonus">
                                        <div className="like-get-bonus__body">
                                            <div className="like-get-bonus__title">
                                                Do You Like This Bonus?
                                            </div>
                                            <div className="like-get-bonus__btns">
                                                <div className="like-get-bonus__btns-item">
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="like-get-bonus__btn like-get-bonus__btn_like"
                                                    >
                                                        <span className="like-get-bonus__btn-icon">
                                                            <svg>
                                                                <use xlinkHref="#like"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="like-get-bonus__btn-number">
                                                            {data?.likes ||
                                                                "34K"}
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="like-get-bonus__btns-item">
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="like-get-bonus__btn like-get-bonus__btn_dislike"
                                                    >
                                                        <span className="like-get-bonus__btn-icon">
                                                            <svg>
                                                                <use xlinkHref="#like"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="like-get-bonus__btn-number"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <MoreCasinoBonuses
                        title={`More ${data?.casino_name.replace(
                            /casino/i,
                            ""
                        )} Casino Bonuses`}
                        data={data}
                    />
                    <MoreCasinoBonuses
                        title={"Other Best Reload bonuses"}
                        data={data}
                    />

                    {/* <section className="simple-bonus__more-stake more-staket-simple-bonus">
                    <div className="more-staket-simple-bonus__container container">
                        <div className="more-staket-simple-bonus__top top">
                            <div className="top__row">
                                <div className="top__column">
                                    <div className="top__title-block">
                                        <h2 className="top__title">
                                            More Stake Casino Bonuses
                                        </h2>
                                    </div>
                                </div>
                                <div className="top__column">
                                    <a rel="nofollow noopener"
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
                        <div className="more-staket-simple-bonus__slider slider">
                            <div className="slider__body">
                                <div className="more-staket-simple-bonus__swiper slider__swiper swiper">
                                    <div className="slider__wrapper swiper-wrapper">
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""

                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        <img
                                                            src={casinoCard09}
                                                            alt="Crazy Cash Bomb Winnings $1,000,000 asdasdas WQEasdasd"
                                                            loading="lazy"
                                                        />
                                                        {/* <LazyLoadImage
                                                            src={casinoCard09}
                                                            alt="Crazy Cash Bomb Winnings $1,000,000 asdasdas WQEasdasd"
                                                            effect="blur"
                                                        /> 
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Crazy Cash Bomb Winnings
                                                        $1,000,000 asdasdas
                                                        WQEasdasd
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        <img
                                                            src={
                                                                bigFatRaceImage
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                        />
                                                        {/* <LazyLoadImage
                                                            src={
                                                                bigFatRaceImage
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                            effect="blur" 
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Big Fat Race to$100 Moon
                                                        coins
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                crazyCashBombImage
                                                            }
                                                            alt="Crazy Cash Bomb Winnings $1,000,"
                                                            effect="blur"
                                                        />
                                                        <img
                                                            src={
                                                                crazyCashBombImage
                                                            }
                                                            alt="Crazy Cash Bomb Winnings $1,000,"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Crazy Cash Bomb Winnings
                                                        $1,000,
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                bigFatRaceImage
                                                            }
                                                            alt="Big Fat Race to $100 Moon coins"
                                                            effect="blur"
                                                        /> 
                                                        <img
                                                            src={
                                                                bigFatRaceImage
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Big Fat Race to $100
                                                        Moon coins
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                newYearBetRaceImage01
                                                            }
                                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            effect="blur"
                                                        />
                                                        <img
                                                            src={
                                                                newYearBetRaceImage01
                                                            }
                                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        New Year Bet Race -
                                                        $30,000 Rocket Launcher
                                                        With 10x Scope
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                newYearBetRaceImage04
                                                            }
                                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            effect="blur"
                                                        /> 
                                                        <img
                                                            src={
                                                                newYearBetRaceImage04
                                                            }
                                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        New Year Bet Race -
                                                        $30,000 Rocket Launcher
                                                        With 10x Scope
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider__bottom bottom-slider">
                                <div className="bottom-slider__pagination more-staket-simple-bonus__pagination swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="simple-bonus__other-best-reload other-best-reload-simple-bonus">
                    <div className="other-best-reload-simple-bonus__container container">
                        <div className="other-best-reload-simple-bonus__top top">
                            <div className="top__row">
                                <div className="top__column">
                                    <div className="top__title-block">
                                        <h2 className="top__title">
                                            Other Best Reload bonuses
                                        </h2>
                                    </div>
                                </div>
                                <div className="top__column">
                                    <a rel="nofollow noopener"
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
                        <div className="other-best-reload-simple-bonus__slider slider">
                            <div className="slider__body">
                                <div className="other-best-reload-simple-bonus__swiper slider__swiper swiper">
                                    <div className="slider__wrapper swiper-wrapper">
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                bigFatRaceImage03
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                            effect="blur"
                                                        />
                                                        <img
                                                            src={
                                                                bigFatRaceImage03
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Big Fat Race to$100 Moon
                                                        coins
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                bigFatRaceImage03
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                            effect="blur"
                                                        />
                                                        <img
                                                            src={
                                                                bigFatRaceImage03
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Crazy Cash Bomb Winnings
                                                        $1,000,000 asdasdas
                                                        WQEasdasd
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                newYearBetRaceImage01
                                                            }
                                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            effect="blur"
                                                        /> 
                                                        <img
                                                            src={
                                                                newYearBetRaceImage01
                                                            }
                                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        New Year Bet Race -
                                                        $30,000 Rocket Launcher
                                                        With 10x Scope
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                bigFatRaceImage06
                                                            }
                                                            alt="Big Fat Race to $100 Moon coins"
                                                            effect="blur"
                                                        /> 
                                                        <img
                                                            src={
                                                                bigFatRaceImage06
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Big Fat Race to $100
                                                        Moon coins
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                crazyCashBombImage
                                                            }
                                                            alt="Crazy Cash Bomb Winnings $1,000,"
                                                            effect="blur"
                                                        /> 
                                                        <img
                                                            src={
                                                                crazyCashBombImage
                                                            }
                                                            alt="Crazy Cash Bomb Winnings $1,000,"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Crazy Cash Bomb Winnings
                                                        $1,000,
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                                            src={
                                                                newYearBetRaceImage04
                                                            }
                                                            alt="Crazy Cash Bomb Winnings $1,000,"
                                                            effect="blur"
                                                        /> 
                                                        <img
                                                            src={
                                                                newYearBetRaceImage04
                                                            }
                                                            alt="Crazy Cash Bomb Winnings $1,000,"
                                                        />
                                                    </div>
                                                    <a rel="nofollow noopener"
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
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        New Year Bet Race -
                                                        $30,000 Rocket Launcher
                                                        With 10x Scope
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider__bottom bottom-slider">
                                <div className="bottom-slider__pagination other-best-reload-simple-bonus__pagination swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </section> */}
                    {!isMobile ? (
                        <section className="simple-bonus__essential-programs essential-programs-gamble">
                            <div className="essential-programs-gamble__container container">
                                <div className="essential-programs-gamble__top top">
                                    <div className="top__row">
                                        <div className="top__column">
                                            <div className="top__title-block">
                                                <h2 className="top__title">
                                                    Essential VIP Loyatly
                                                    Programs
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
                                <div className="essential-programs-gamble__slider slider">
                                    <div className="essential-programs-gamble__swiper slider__swiper swiper">
                                        <div
                                            className="slider__wrapper swiper-wrapper"
                                            style={{ gap: "20px" }}
                                        >
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                                    <div className="item-essential-programs-gamble__top">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__logo"
                                                        >
                                                            <LazyLoadImage
                                                                src={
                                                                    spinbetterLogo
                                                                }
                                                                alt="spinbetter"
                                                                effect="blur"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__body">
                                                        <div className="item-essential-programs-gamble__provider">
                                                            <span className="item-essential-programs-gamble__provider-name">
                                                                Vulkanezza
                                                            </span>
                                                            <span className="item-essential-programs-gamble__provider-rating">
                                                                <span className="item-essential-programs-gamble__provider-rating-star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="item-essential-programs-gamble__provider-rating-number">
                                                                    4.8
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            carIcon
                                                                        }
                                                                        alt="car"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Ferrari
                                                                        X-300
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Win a
                                                                        car in
                                                                        the end
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            clockIcon
                                                                        }
                                                                        alt="clock"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Special
                                                                        Prizes
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Parties
                                                                        Concerts,
                                                                        Phones
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            giftFeatureIcon
                                                                        }
                                                                        alt="giftFeatureIcon"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Birthday
                                                                        Gifts
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Happy
                                                                        Birthday!
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            tieIcon
                                                                        }
                                                                        alt="tie"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Personal
                                                                        VIP
                                                                        manager
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Max Cash
                                                                        Back
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            upIcon
                                                                        }
                                                                        alt="up"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        LVL Up
                                                                        Bonuses
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Deposit
                                                                        % and
                                                                        Free
                                                                        Spins
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__bottom">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__btn"
                                                        >
                                                            View Casino
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                                    <div className="item-essential-programs-gamble__top">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__logo"
                                                        >
                                                            <LazyLoadImage
                                                                src={vulkanLogo}
                                                                alt="vulkan"
                                                                effect="blur"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__body">
                                                        <div className="item-essential-programs-gamble__provider">
                                                            <span className="item-essential-programs-gamble__provider-name">
                                                                Vulkanezza
                                                            </span>
                                                            <span className="item-essential-programs-gamble__provider-rating">
                                                                <span className="item-essential-programs-gamble__provider-rating-star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="item-essential-programs-gamble__provider-rating-number">
                                                                    4.8
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            carIcon
                                                                        }
                                                                        alt="car"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Ferrari
                                                                        X-300
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Win a
                                                                        car in
                                                                        the end
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            clockIcon
                                                                        }
                                                                        alt="clock"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Special
                                                                        Prizes
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Parties
                                                                        Concerts,
                                                                        Phones
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            giftFeatureIcon
                                                                        }
                                                                        alt="gift"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Birthday
                                                                        Gifts
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Happy
                                                                        Birthday!
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            tieIcon
                                                                        }
                                                                        alt="tie"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Personal
                                                                        VIP
                                                                        manager
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Max Cash
                                                                        Back
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            upIcon
                                                                        }
                                                                        alt="up"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        LVL Up
                                                                        Bonuses
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Deposit
                                                                        % and
                                                                        Free
                                                                        Spins
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__bottom">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__btn"
                                                        >
                                                            View Casino
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                                    <div className="item-essential-programs-gamble__top">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__logo"
                                                        >
                                                            <LazyLoadImage
                                                                src={
                                                                    roySpinsLogo
                                                                }
                                                                alt="roy-spins"
                                                                effect="blur"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__body">
                                                        <div className="item-essential-programs-gamble__provider">
                                                            <span className="item-essential-programs-gamble__provider-name">
                                                                Vulkanezza
                                                            </span>
                                                            <span className="item-essential-programs-gamble__provider-rating">
                                                                <span className="item-essential-programs-gamble__provider-rating-star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="item-essential-programs-gamble__provider-rating-number">
                                                                    4.8
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            clockIcon
                                                                        }
                                                                        alt="clock"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Special
                                                                        Prizes
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Parties
                                                                        Concerts,
                                                                        Phones
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            giftFeatureIcon
                                                                        }
                                                                        alt="gift"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Birthday
                                                                        Gifts
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Happy
                                                                        Birthday!
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            tieIcon
                                                                        }
                                                                        alt="tie"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Personal
                                                                        VIP
                                                                        manager
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Max Cash
                                                                        Back
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            cashIcon
                                                                        }
                                                                        alt="cash"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Cash
                                                                        back 70%
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Up to
                                                                        30%
                                                                        weekly
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            upIcon
                                                                        }
                                                                        alt="up"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        LVL Up
                                                                        Bonuses
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Deposit
                                                                        % and
                                                                        Free
                                                                        Spins
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__bottom">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__btn"
                                                        >
                                                            View Casino
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                                    <div className="item-essential-programs-gamble__top">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__logo"
                                                        >
                                                            <LazyLoadImage
                                                                src={
                                                                    spinbetterLogo
                                                                }
                                                                alt="spinbetter"
                                                                effect="blur"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__body">
                                                        <div className="item-essential-programs-gamble__provider">
                                                            <span className="item-essential-programs-gamble__provider-name">
                                                                Vulkanezza
                                                            </span>
                                                            <span className="item-essential-programs-gamble__provider-rating">
                                                                <span className="item-essential-programs-gamble__provider-rating-star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="item-essential-programs-gamble__provider-rating-number">
                                                                    4.8
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            giftFeatureIcon
                                                                        }
                                                                        alt="gift"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Birthday
                                                                        Gifts
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Happy
                                                                        Birthday!
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            tieIcon
                                                                        }
                                                                        alt="tie"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Personal
                                                                        VIP
                                                                        manager
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Max Cash
                                                                        Back
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            cashIcon
                                                                        }
                                                                        alt="cash"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Cash
                                                                        back 70%
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Up to
                                                                        30%
                                                                        weekly
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            cashIcon
                                                                        }
                                                                        alt="cash"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        Cash
                                                                        back 70%
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Up to
                                                                        30%
                                                                        weekly
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            upIcon
                                                                        }
                                                                        alt="up"
                                                                        effect="blur"
                                                                    />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">
                                                                        LVL Up
                                                                        Bonuses
                                                                    </div>
                                                                    <div className="features-essential-programs-gamble__text">
                                                                        Deposit
                                                                        % and
                                                                        Free
                                                                        Spins
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__bottom">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__btn"
                                                        >
                                                            View Casino
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <SimpleBonusEssentialPrograms />
                    )}
                    <section className="simple-bonus__casino-person casino-person">
                        <div className="casino-person__container container">
                            <div className="casino-person__body">
                                <div className="casino-person__row">
                                    <div className="casino-person__info info-casino-person">
                                        <div className="info-casino-person__img">
                                            <LazyLoadImage
                                                src={harryStyles}
                                                alt="HARRY STYLES"
                                                effect="blur"
                                            />
                                        </div>
                                        <div className="info-casino-person__content">
                                            <h3 className="info-casino-person__name h3">
                                                HARRY STYLES
                                            </h3>
                                            <div className="info-casino-person__position">
                                                Content Maker, Chief Marketing
                                                at Lerio
                                            </div>
                                        </div>
                                    </div>
                                    <div className="casino-person__socials">
                                        <div className="socials-top-footer__items">
                                            <div className="socials-top-footer__item">
                                                <a
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="socials-top-footer__link"
                                                >
                                                    <svg>
                                                        <use xlinkHref="#x"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="socials-top-footer__item">
                                                <a
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="socials-top-footer__link"
                                                >
                                                    <svg>
                                                        <use xlinkHref="#facebook"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="socials-top-footer__item">
                                                <a
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="socials-top-footer__link"
                                                >
                                                    <svg>
                                                        <use xlinkHref="#linkedin"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="casino-person__waves">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-gamble__bottom-filter-tags bottom-filter-tags">
                        <div className="bottom-filter-tags__container container">
                            <div className="bottom-filter-tags__top top">
                                <div className="top__title-block">
                                    <span className="top__title-icon">
                                        <LazyLoadImage
                                            src={searchFilterIcon}
                                            alt="search"
                                            effect="blur"
                                        />
                                    </span>
                                    <h2 className="top__title">
                                        Check more what suits You Best
                                    </h2>
                                </div>
                            </div>
                            <div className="bottom-filter-tags__row">
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Best Welcome Bonuses
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Reload bonuses
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Low wager bonuses
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Bonus buy bonuses
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Non-sticky bonuses
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Low risk
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Safest
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Highest RTP Slots
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Best Live Casinos
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Highest RTP Slots
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Safest
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Low wager bonuses
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Best Welcome Bonuses
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Low risk
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Highest RTP Slots
                                    </a>
                                </div>
                                <div className="bottom-filter-tags__column bottom-filter-tags__column_mob">
                                    <a
                                        rel="nofollow noopener"
                                        href=""
                                        aria-label="Put your description here."
                                        className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                    >
                                        Reload bonuses
                                    </a>
                                </div>
                            </div>
                            <a
                                rel="nofollow noopener"
                                href=""
                                aria-label="Put your description here."
                                className="bottom-filter-tags__btn-filter"
                            >
                                <span>
                                    <svg>
                                        <use xlinkHref="#filter"></use>
                                    </svg>
                                </span>
                                Filter What You need
                            </a>
                        </div>
                    </section>
                    <div className="main-gamble__subscribe subscribe">
                        <div className="subscribe__container container">
                            <div className="subscribe__body">
                                <div className="subscribe__bg ibg">
                                    {/* <LazyLoadImage
                                    src={backgroundImage08}
                                    alt="bg"
                                    effect="blur"
                                /> */}
                                    <img
                                        src={backgroundImage08}
                                        alt="bg"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="subscribe__row">
                                    <div className="subscribe__column">
                                        <a
                                            rel="nofollow noopener"
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="subscribe__logo"
                                        >
                                            <LazyLoadImage
                                                src={logoIcon}
                                                alt="logo"
                                                effect="blur"
                                            />
                                        </a>
                                        <div className="subscribe__content">
                                            <div className="subscribe__title">
                                                <span>Subscribe</span> to our
                                                newsletter
                                            </div>
                                            <div className="subscribe__text">
                                                <p>
                                                    Get the highest potential
                                                    bonuses right into your
                                                    inbox
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="subscribe__column">
                                        <form
                                            action="#"
                                            className="subscribe__form form-subscribe"
                                        >
                                            <div className="form-subscribe__row">
                                                <div className="form-item form-subscribe__item item-form-subscribe">
                                                    <span className="form-item__icon item-form-subscribe__icon">
                                                        <svg>
                                                            <use xlinkHref="#email"></use>
                                                        </svg>
                                                    </span>
                                                    <input
                                                        placeholder="Your e-mail..."
                                                        autoComplete="off"
                                                        type="email"
                                                        name="form[]"
                                                        className="item-form-subscribe__input form-item__input required input-email"
                                                    />
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        className="form-item__icon form-item__icon_delete item-form-subscribe__icon_delete"
                                                    >
                                                        <svg>
                                                            <use xlinkHref="#delete"></use>
                                                        </svg>
                                                    </a>
                                                    <span className="form-item__icon form-item__icon_confired">
                                                        <LazyLoadImage
                                                            src={checkIcon}
                                                            alt="check"
                                                            effect="blur"
                                                        />
                                                    </span>
                                                    <span className="form-item__icon form-item__icon_error">
                                                        <LazyLoadImage
                                                            src={errorIcon}
                                                            alt="error"
                                                            effect="blur"
                                                        />
                                                    </span>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="form-subscribe__btn"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                            <div className="form-subscribe__bottom">
                                                <div className="form-subscribe__checkbox">
                                                    <input
                                                        id="formAgreement"
                                                        type="checkbox"
                                                        name="form[]"
                                                        className="form-subscribe__checkbox-input"
                                                    />
                                                    <label
                                                        htmlFor="formAgreement"
                                                        className="form-subscribe__checkbox-label"
                                                    >
                                                        <span>
                                                            Feel free to
                                                            unsubscribe anytime.
                                                            Check our{" "}
                                                            <a
                                                                rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                            >
                                                                Terms of use
                                                            </a>
                                                            and{" "}
                                                            <a
                                                                rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                            >
                                                                Privacy Police
                                                                here.
                                                            </a>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        </Default>
    )
}
