import { LazyLoadImage } from "react-lazy-load-image-component"
import mainImg from "../../assets/img/casino-info/main-img.jpg"
import stakeLogo from "../../assets/img/casino-logo/stake.svg"
import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"
import latviaFlag from "../../assets/img/icons/latvia-flag.svg"
import giftIcon from "../../assets/img/icons/gift.svg"
import bg08 from "../../assets/img/bg/08.jpg"

import harryStyles from "../../assets/img/casino-person/01.png"
import searchFilterIcon from "../../assets/img/icons/search-filter.svg"

import "swiper/css"
import { useQuery } from "react-query"
import {
    lazy,
    useEffect,

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
import { useAdaptiveBehavior } from "../../Layout"
import { LineLoader } from "../../components/loader.tsx/LineLoader"
import { SubscribeForm } from "./SubscribeForm"

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

    const { data, isLoading } = useQuery<GetDataBonusResponse>(
        "get-data-bonus",
        getBonusDataFetch,
        {
            keepPreviousData: true,
        }
    )

    const adaptiveBehavior = useAdaptiveBehavior()

    useEffect(() => {
        adaptiveBehavior()

        const newUrl = `/casino/${data?.casino_name
            .replace(/\s/g, "-")
            .toLocaleLowerCase()}/bonuses/${data?.bonus_type
            .replace(/\s/g, "-")
            .toLocaleLowerCase()}`

        window.history.pushState({}, "", newUrl)
    }, [data])

    const handleClick = () => {
        window.location.href = data?.casino_affiliate_link || ""
    }

    if (isLoading) return <LineLoader />

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
                                                    alt={
                                                        data?.casino_name ||
                                                        "Stake Casino"
                                                    }
                                                />
                                            </div>
                                            <div className="name-main-casino-info__content">
                                                <a
                                                    href={"#"}
                                                    aria-label={`Link to ${
                                                        data?.casino_name ||
                                                        "Casino"
                                                    }`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="name-main-casino-info__title"
                                                >
                                                    {data?.casino_name ||
                                                        "Stake Casino"}
                                                </a>
                                                <div
                                                    className="info-casino-card__stake-rating name-main-casino-info__stake-rating"
                                                    data-da="name-main-casino-info, 0, 1023.98"
                                                >
                                                    <span className="info-casino-card__stake-rating-icon">
                                                        <img
                                                            src={starIcon}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__stake__rating-number">
                                                        {data?.bonus_rank ||
                                                            "4.8"}
                                                    </span>
                                                </div>
                                                <div
                                                    className="info-casino-card__likes name-main-casino-info__likes"
                                                    data-da="name-main-casino-info, 2, 1023.98"
                                                >
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={likeIcon}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        {data?.likes || "34K"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="main-casino-info__name name-main-casino-info">
                                            <div className="name-main-casino-info__logo">
                                                <LazyLoadImage
                                                    src={
                                                        data?.casino_logo ||
                                                        stakeLogo
                                                    }
                                                    alt="stake"
                                                    
                                                />
                                            </div>
                                            <div className="name-main-casino-info__content">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="name-main-casino-info__title"
                                                >
                                                    {data?.casino_name ||
                                                        "Casino"}
                                                </a>
                                                <div className="info-casino-card__stake-rating name-main-casino-info__stake-rating">
                                                    <span className="info-casino-card__stake-rating-icon">
                                                        <img
                                                            src={starIcon}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__stake__rating-number">
                                                        {data?.bonus_rank ||
                                                            "4.8"}
                                                    </span>
                                                </div>
                                                <div
                                                    className="info-casino-card__likes name-main-casino-info__likes"
                                                    data-da="name-main-casino-info, 2, 1023.98"
                                                >
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={likeIcon}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        {data?.likes || "34K"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}
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
                                            <a
                                                rel="nofollow noopener"
                                                href={`go/${
                                                    data?.casino_name
                                                        .toLocaleLowerCase()
                                                        .replace(/\s/g, "-") ||
                                                    ""
                                                }`}
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                                title="link"
                                                onClick={handleClick}
                                            >
                                                <span>
                                                    <LazyLoadImage
                                                        src={giftIcon}
                                                        alt="gift"
                                                    />
                                                </span>
                                                Get Bonus and Play
                                            </a>
                                        </div>
                                        <div className="content-casino-info__features features-content-casino-info">
                                            <div className="features-content-casino-info__row">
                                                <div className="features-content-casino-info__column">
                                                    <div className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_border">
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
                                                                    />
                                                                </div>
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                    />
                                                                </div>
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                    />
                                                                </div>
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                    />
                                                                </div>
                                                                <div className="item-features-content-casino-info__star">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
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
                                                    <a
                                                        rel="nofollow noopener"
                                                        href={`go/${
                                                            data?.casino_name
                                                                .toLocaleLowerCase()
                                                                .replace(
                                                                    /\s/g,
                                                                    "-"
                                                                ) || ""
                                                        }`}
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                                        title="link"
                                                        onClick={handleClick}
                                                    >
                                                        <span>
                                                            <LazyLoadImage
                                                                src={giftIcon}
                                                                alt="gift"
                                                            />
                                                        </span>
                                                        Get Bonus
                                                    </a>
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

                    <SimpleBonusEssentialPrograms />

                    <section className="simple-bonus__casino-person casino-person">
                        <div className="casino-person__container container">
                            <div className="iwild-review__item item-iwild-review item-iwild-review_author">
                                <div className="item-iwild-review__content content-item-iwild-review">
                                    <div className="content-item-iwild-review__image">
                                        <LazyLoadImage
                                            src={harryStyles}
                                            alt="HARRY STYLES"
                                        />
                                    </div>
                                    <div className="content-item-iwild-review__body">
                                        <div className="content-item-iwild-review__label">
                                            Author
                                        </div>
                                        <div className="content-item-iwild-review__name">
                                            HARRY STYLES
                                        </div>
                                        <div className="content-item-iwild-review__text">
                                            <p>
                                                Marketing @Coinmooner. Current
                                                learning project: USA.
                                                <br />I also summarise books on
                                                my <span>personal blog</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-iwild-review__socials">
                                    <div className="socials-top-footer__items">
                                        <div className="socials-top-footer__item">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                rel="nofollow noopener"
                                                className="socials-top-footer__link"
                                            >
                                                <svg>
                                                    <use xlinkHref="#x"></use>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="socials-top-footer__item">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                rel="nofollow noopener"
                                                className="socials-top-footer__link"
                                            >
                                                <svg>
                                                    <use xlinkHref="#facebook"></use>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="socials-top-footer__item">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                rel="nofollow noopener"
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
                    
                    <SubscribeForm/>
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
