import stakeLogo from "../../assets/img/casino-logo/stake.svg"
import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"

import { GeoLocationAllowdType, GetDataBonusResponse } from "../../types"
import { LazyLoadImage } from "react-lazy-load-image-component"
import giftIcon from "../../assets/img/icons/gift.svg"
import { useState, useEffect, lazy } from "react"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { euroToDolar } from "../../helper"
const LazyFlag = lazy(() => import("react-world-flags"))

const color_label = [
    "tags-casino-card__item_green",
    "tags-casino-card__item_blue",
    "tags-casino-card__item_purple",
    "tags-casino-card__item_grass",
    "tags-casino-card__item_orange",
]
export const HeaderSimpleBonus = ({
    data,
    geoLocation,
}: {
    data?: GetDataBonusResponse | undefined
    geoLocation: GeoLocationAllowdType
}) => {
    const handleClick = () => {
        window.location.href = data?.casino_affiliate_link || ""
    }

    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
        window.innerWidth <= 1023.98
    )

    const handleResize = (): void => {
        setIsSmallScreen(window.innerWidth <= 1023.98)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <section
            className={`simple-bonus__casino-info casino-info ${
                !geoLocation.isAllowed && "casino-info_not-available"
            } `}
        >
            <div className="casino-info__container container">
                <div className="casino-info__body">
                    <div className="casino-info__row">
                        <div className="casino-info__main main-casino-info">
                            <div className="main-casino-info__image-block">
                                <div className="main-casino-info__image ibg">
                                    <LazyCardImg
                                        img={data?.bonus_image || ""}
                                    />
                                    {/* <img
                                        src={data?.bonus_image || mainImg}
                                        alt="main-img"
                                    /> */}
                                </div>
                            </div>
                            {!isSmallScreen ? (
                                <div className="main-casino-info__name name-main-casino-info">
                                    <div className="name-main-casino-info__logo">
                                        <LazyCardImg
                                            img={data?.casino_logo || ""}
                                        />
                                    </div>
                                    <div className="name-main-casino-info__content">
                                        <a
                                            href={"#"}
                                            aria-label={`Link to ${
                                                data?.casino_name || "Casino"
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
                                            // data-da="name-main-casino-info, 0, 1023.98"
                                        >
                                            <span className="info-casino-card__stake-rating-icon">
                                                <img
                                                    src={starIcon}
                                                    alt="star"
                                                />
                                            </span>
                                            <span className="info-casino-card__stake__rating-number">
                                                {data?.bonus_rank || "4.8"}
                                            </span>
                                        </div>
                                        <div
                                            className="info-casino-card__likes name-main-casino-info__likes"
                                            // data-da="name-main-casino-info, 2, 1023.98"
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
                            ) : (
                                <div className="main-casino-info__name name-main-casino-info">
                                    <div
                                        className="info-casino-card__stake-rating name-main-casino-info__stake-rating"
                                        //         data-da="name-main-casino-info, 0, 1023.98"
                                    >
                                        <span className="info-casino-card__stake-rating-icon">
                                            <img src={starIcon} alt="star" />
                                        </span>
                                        <span className="info-casino-card__stake__rating-number">
                                            {data?.bonus_rank || "4.8"}
                                        </span>
                                    </div>
                                    <div className="name-main-casino-info__logo">
                                        <img
                                            src={data?.casino_logo || stakeLogo}
                                            alt="stake"
                                        />
                                    </div>
                                    <div
                                        className="info-casino-card__likes name-main-casino-info__likes"
                                        //      data-da="name-main-casino-info, 2, 1023.98"
                                    >
                                        <span className="info-casino-card__likes-icon">
                                            <img src={likeIcon} alt="like" />
                                        </span>
                                        <span className="info-casino-card__likes-number">
                                            {data?.likes || "34K"}
                                        </span>
                                    </div>
                                    <div className="name-main-casino-info__content">
                                        <a
                                            href={"#"}
                                            aria-label={`Link to ${
                                                data?.casino_name || "Casino"
                                            }`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="name-main-casino-info__title"
                                        >
                                            {data?.casino_name ||
                                                "Stake Casino"}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="casino-info__content content-casino-info">
                            <div className="content-casino-info__main">
                                <div className="content-casino-info__top">
                                    <h2 className="content-casino-info__title">
                                        {data?.name ||
                                            " 200% up to €200 and 50 spin (€2 spin)"}
                                    </h2>
                                    <div className="content-casino-info__subtitle">
                                        {data?.bonus_type || "Reload Bonus"}
                                    </div>
                                </div>
                                <div className="casino-card__tags tags-casino-card">
                                    {data?.labels.map((item, index) => (
                                        <div
                                            className={`tags-casino-card__item ${color_label[index]}`}
                                        >
                                            <span className="tags-casino-card__item-label"></span>
                                            <span className="tags-casino-card__item-value">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="content-casino-info__country country-content-casino-info">
                                    <div className="country-content-casino-info__info">
                                        <div className="country-content-casino-info__icon">
                                            <LazyFlag code={"LV"} height={20} />
                                            {/* <LazyLoadImage
                                                src={latviaFlag}
                                                alt="latvia"
                                            /> */}
                                        </div>
                                        <div
                                            className={`country-content-casino-info__text `}
                                        >
                                            {`${
                                                geoLocation.isAllowed
                                                    ? "Accepts players from"
                                                    : "Doesn’t accept players from"
                                            } ${geoLocation.countryName}`}
                                        </div>
                                    </div>
                                    <span className="main-get-bonus__btn main-get-bonus__btn_apply">
                                        T&C Apply
                                    </span>
                                </div>
                                <a
                                    rel="nofollow noopener"
                                    href={`go/${
                                        data?.casino_name
                                            .toLocaleLowerCase()
                                            .replace(/\s/g, "-") || ""
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
                                    {geoLocation.isAllowed
                                        ? "Get Bonus and Play "
                                        : "Browse Recommended Bonuses"}
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
                                                    {data?.bonus_rank || 0}
                                                </div>
                                                <div className="item-features-content-casino-info__rating">
                                                    <div className="item-features-content-casino-info__star">
                                                        <LazyLoadImage
                                                            src={starIcon}
                                                            alt="star"
                                                        />
                                                    </div>
                                                    <div className="item-features-content-casino-info__star">
                                                        <LazyLoadImage
                                                            src={starIcon}
                                                            alt="star"
                                                        />
                                                    </div>
                                                    <div className="item-features-content-casino-info__star">
                                                        <LazyLoadImage
                                                            src={starIcon}
                                                            alt="star"
                                                        />
                                                    </div>
                                                    <div className="item-features-content-casino-info__star">
                                                        <LazyLoadImage
                                                            src={starIcon}
                                                            alt="star"
                                                        />
                                                    </div>
                                                    <div className="item-features-content-casino-info__star">
                                                        <LazyLoadImage
                                                            src={starIcon}
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
                                                    {`${
                                                        data?.bonus_min_dep?.[0]
                                                            ?.min_value || 0
                                                    }${euroToDolar(
                                                        data?.bonus_min_dep?.[0]
                                                            .symbol.symbol || ""
                                                    )}

                                                    `}
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
                                                        data?.max_bet?.[0]
                                                            ?.value || 0
                                                    }${euroToDolar(
                                                        data?.max_bet?.[0]
                                                            .symbol.symbol || ""
                                                    )}`}
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
    )
}
