import star from "../../assets/img/icons/star.svg"
import { Default } from "../Dafault"
import { Categories } from "../../components/catogories/Categories"
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import roySpins from "../../assets/img/casino-logo/roy-spins.svg"
import vulkan from "../../assets/img/casino-logo/vulkan.svg"
import spinbetter from "../../assets/img/casino-logo/spinbetter.svg"
import car from "../../assets/img/features/car.svg"
import clock from "../../assets/img/features/clock.svg"
import up from "../../assets/img/features/up.svg"
import cash from "../../assets/img/features/cash.svg"
import medal from "../../assets/img/features/medal.svg"
import gift from "../../assets/img/features/gift.svg"
import tie from "../../assets/img/features/tie.svg"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import SubscribeForm from "../SimpleBonus/SubscribeForm"
import { CheckMoreWhatSuitsYouBest } from "../SimpleBonus/CheckMoreWhatSuitsYouBest"

export default function EssentialsLoyalty() {
    document.title = "Loyaltie Programs"

    return (
        <Default>
            <main className="gamble__loyaltie-programs main-gamble loyaltie-programs">
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
                                <div className="loyaltie-programs__item item-loyaltie-programs">
                                    <div className="item-loyaltie-programs__row">
                                        <div className="item-loyaltie-programs__main">
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="item-loyaltie-programs__image"
                                            >
                                                <img
                                                    src={spinbetter}
                                                    alt="spinbetter"
                                                />
                                            </a>
                                        </div>
                                        <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                            <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                                <h2 className="top-content-item-loyaltie-programs__name">
                                                    Spinbetter Casino
                                                </h2>
                                                <div className="info-casino-card__stake-rating">
                                                    <span className="info-casino-card__stake-rating-icon">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__stake__rating-number">
                                                        4.8
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={car}
                                                                alt="car"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Ferrari X-300
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Win a car in the
                                                                end
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={clock}
                                                                alt="clock"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Special Prizes
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Parties
                                                                Concerts, Phones
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={gift}
                                                                alt="gift"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Birthday Gifts
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Happy Birthday!
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={tie}
                                                                alt="tie"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Personal VIP
                                                                manager
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Max Cash Back
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={cash}
                                                                alt="cash"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Cash back 70%
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Up to 30% weekly
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={medal}
                                                                alt="medal"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                38 Levels
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Engaging
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={up}
                                                                alt="up"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                LVL Up Bonuses
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Deposit % and
                                                                Free Spins
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column features-essential-programs-gamble__column_rating">
                                                    <div className="features-essential-programs-gamble__item features-essential-programs-gamble__item_rating">
                                                        <div className="item-essential-programs-gamble__rating">
                                                            <div className="item-essential-programs-gamble__rating-number">
                                                                9/10
                                                            </div>
                                                            <div className="item-essential-programs-gamble__rating-body">
                                                                <div className="item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble">
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_1 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_2 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_3 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_4 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_5 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_6 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_7 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_8 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_9 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_10"></div>
                                                                </div>
                                                                <div className="item-essential-programs-gamble__rating-text">
                                                                    Excellent
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs">
                                                <div className="bottom-content-item-loyaltie-programs__btns">
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="bottom-content-item-loyaltie-programs__btn-view"
                                                    >
                                                        View Casino
                                                    </a>
                                                    <a
                                                        href=""
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
                                <div className="loyaltie-programs__item item-loyaltie-programs">
                                    <div className="item-loyaltie-programs__row">
                                        <div className="item-loyaltie-programs__main">
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="item-loyaltie-programs__image"
                                            >
                                                <img
                                                    src={vulkan}
                                                    alt="vulkan"
                                                />
                                            </a>
                                        </div>
                                        <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                            <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                                <h2 className="top-content-item-loyaltie-programs__name">
                                                    Vulkan Vegas
                                                </h2>
                                                <div className="info-casino-card__stake-rating">
                                                    <span className="info-casino-card__stake-rating-icon">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__stake__rating-number">
                                                        4.6
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={car}
                                                                alt="car"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Ferrari X-300
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Win a car in the
                                                                end
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={clock}
                                                                alt="clock"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Special Prizes
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Parties
                                                                Concerts, Phones
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={gift}
                                                                alt="gift"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Birthday Gifts
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Happy Birthday!
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={tie}
                                                                alt="tie"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Personal VIP
                                                                manager
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Max Cash Back
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={cash}
                                                                alt="cash"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Cash back 70%
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Up to 30% weekly
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column features-essential-programs-gamble__column_rating">
                                                    <div className="features-essential-programs-gamble__item features-essential-programs-gamble__item_rating">
                                                        <div className="item-essential-programs-gamble__rating">
                                                            <div className="item-essential-programs-gamble__rating-number">
                                                                7/10
                                                            </div>
                                                            <div className="item-essential-programs-gamble__rating-body">
                                                                <div className="item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble">
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_1 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_2 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_3 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_4 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_5 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_6 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_7 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_8"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_9"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_10"></div>
                                                                </div>
                                                                <div className="item-essential-programs-gamble__rating-text">
                                                                    Excellent
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs">
                                                <div className="bottom-content-item-loyaltie-programs__btns">
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="bottom-content-item-loyaltie-programs__btn-view"
                                                    >
                                                        View Casino
                                                    </a>
                                                    <a
                                                        href=""
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
                                <div className="loyaltie-programs__item item-loyaltie-programs">
                                    <div className="item-loyaltie-programs__row">
                                        <div className="item-loyaltie-programs__main">
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="item-loyaltie-programs__image"
                                            >
                                                <img
                                                    src={roySpins}
                                                    alt="roy-spins"
                                                />
                                            </a>
                                        </div>
                                        <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                            <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                                <h2 className="top-content-item-loyaltie-programs__name">
                                                    RoySpins Casino
                                                </h2>
                                                <div className="info-casino-card__stake-rating">
                                                    <span className="info-casino-card__stake-rating-icon">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__stake__rating-number">
                                                        4.4
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={clock}
                                                                alt="clock"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Special Prizes
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Parties
                                                                Concerts, Phones
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={gift}
                                                                alt="gift"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Birthday Gifts
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Happy Birthday!
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={tie}
                                                                alt="tie"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Personal VIP
                                                                manager
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Max Cash Back
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={cash}
                                                                alt="cash"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Cash back 70%
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Up to 30% weekly
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={medal}
                                                                alt="medal"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                38 Levels
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Engaging
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={up}
                                                                alt="up"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                LVL Up Bonuses
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Deposit % and
                                                                Free Spins
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column features-essential-programs-gamble__column_rating">
                                                    <div className="features-essential-programs-gamble__item features-essential-programs-gamble__item_rating">
                                                        <div className="item-essential-programs-gamble__rating">
                                                            <div className="item-essential-programs-gamble__rating-number">
                                                                8/10
                                                            </div>
                                                            <div className="item-essential-programs-gamble__rating-body">
                                                                <div className="item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble">
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_1 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_2 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_3 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_4 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_5 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_6 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_7 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_8 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_9"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_10"></div>
                                                                </div>
                                                                <div className="item-essential-programs-gamble__rating-text">
                                                                    Excellent
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs">
                                                <div className="bottom-content-item-loyaltie-programs__btns">
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="bottom-content-item-loyaltie-programs__btn-view"
                                                    >
                                                        View Casino
                                                    </a>
                                                    <a
                                                        href=""
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
                                <div className="loyaltie-programs__item item-loyaltie-programs">
                                    <div className="item-loyaltie-programs__row">
                                        <div className="item-loyaltie-programs__main">
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="item-loyaltie-programs__image"
                                            >
                                                <img
                                                    src={spinbetter}
                                                    alt="spinbetter"
                                                />
                                            </a>
                                        </div>
                                        <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                            <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                                <h2 className="top-content-item-loyaltie-programs__name">
                                                    Spinbetter Casino
                                                </h2>
                                                <div className="info-casino-card__stake-rating">
                                                    <span className="info-casino-card__stake-rating-icon">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__stake__rating-number">
                                                        4.8
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={car}
                                                                alt="car"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Ferrari X-300
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Win a car in the
                                                                end
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={tie}
                                                                alt="tie"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Personal VIP
                                                                manager
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Max Cash Back
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={cash}
                                                                alt="cash"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                Cash back 70%
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Up to 30% weekly
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={medal}
                                                                alt="medal"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                38 Levels
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Engaging
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column">
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <img
                                                                src={up}
                                                                alt="up"
                                                            />
                                                        </div>
                                                        <div className="features-essential-programs-gamble__info">
                                                            <div className="features-essential-programs-gamble__name">
                                                                LVL Up Bonuses
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Deposit % and
                                                                Free Spins
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__column features-essential-programs-gamble__column_rating">
                                                    <div className="features-essential-programs-gamble__item features-essential-programs-gamble__item_rating">
                                                        <div className="item-essential-programs-gamble__rating">
                                                            <div className="item-essential-programs-gamble__rating-number">
                                                                7/10
                                                            </div>
                                                            <div className="item-essential-programs-gamble__rating-body">
                                                                <div className="item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble">
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_1 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_2 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_3 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_4 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_5 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_6 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_7 full"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_8"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_9"></div>
                                                                    <div className="items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_10"></div>
                                                                </div>
                                                                <div className="item-essential-programs-gamble__rating-text">
                                                                    Excellent
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs">
                                                <div className="bottom-content-item-loyaltie-programs__btns">
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="bottom-content-item-loyaltie-programs__btn-view"
                                                    >
                                                        View Casino
                                                    </a>
                                                    <a
                                                        href=""
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
                            </div>
                            <PaginationPage />
                        </div>
                    </section>
                    <CheckMoreWhatSuitsYouBest/>
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
        </Default>
    )
}
