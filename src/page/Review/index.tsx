import { Wraper } from "../Wraper"
import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"
import { CheckMoreWhatSuitsYouBest } from "../SimpleBonus/CheckMoreWhatSuitsYouBest"
import SubscribeForm from "../SimpleBonus/SubscribeForm"
import { Categories } from "../../components/categories/Categories"
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { CasinoBonuses } from "./CasinoBonuses"
import { SpecialPromo } from "./SpecialPromo"
import { TabMain } from "./TabMain"
import { HighRankedCasinos } from "./HighRankedCasinos"
import { Harry } from "./Harry"
import { PopupReadMore } from "./PopupReadMore"
import { useEffect, useState } from "react"

export default function Review() {
    document.title = "Review"

    const [openModal, setOpenModal] = useState(false)

    const handlerOpen = (s: boolean) => {
        setOpenModal(s)
    }

    useEffect(() => {
        if (openModal) {

            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    
        return () => {
            document.body.style.overflow = '';
        };
    }, [openModal]);
    
    return (
        <>
            <PopupReadMore openModal={openModal} handlerOpen={handlerOpen} />

            <Wraper>
                <main className="gamble__review main-gamble review">
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
                                    name: "Gambling Hub",
                                    link: "https://cryptogamblers.pro/bonuses",
                                },
                                {
                                    name: "Review",
                                    link: "#",
                                },
                            ]}
                        />
                        <section className="review__casino-info casino-info">
                            <div className="casino-info__container container">
                                <div className="casino-info__body">
                                    <div className="casino-info__row">
                                        <div className="casino-info__main main-casino-info">
                                            <div className="main-casino-info__image-block">
                                                <div className="main-casino-info__image ibg">
                                                    <img
                                                        src="/src/assets/img/casino-info/main-img-2.png"
                                                        alt="main-img"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="casino-info__content content-casino-info">
                                            <div className="content-casino-info__main content-casino-info__main-adaptiv">
                                                <div
                                                    className="info-casino-card__likes name-main-casino-info__likes"
                                                    data-da="content-casino-info__top, 1, 992.98"
                                                >
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={likeIcon}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        34K
                                                    </span>
                                                </div>
                                                <div className="content-casino-info__top">
                                                    <h2 className="content-casino-info__title">
                                                        iWild Casino Review
                                                    </h2>
                                                </div>
                                                <div className="content-casino-info__country country-content-casino-info">
                                                    <div className="country-content-casino-info__info">
                                                        <div className="country-content-casino-info__icon">
                                                            <img
                                                                src="/src/assets/img/icons/latvia-flag.svg"
                                                                alt="latvia"
                                                            />
                                                        </div>
                                                        <div className="country-content-casino-info__text">
                                                            Accepts players from
                                                            Latvia
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="main-get-bonus__btn main-get-bonus__btn_apply"
                                                    >
                                                        T&C Apply
                                                    </a>
                                                </div>
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                                >
                                                    Visit Casino
                                                </a>
                                            </div>
                                            <div className="content-casino-info__features features-content-casino-info">
                                                <div className="features-content-casino-info__row">
                                                    <div className="features-content-casino-info__column">
                                                        <div className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_high">
                                                            <div className="item-features-content-casino-info__top">
                                                                <div className="item-features-content-casino-info__label">
                                                                    Safety Index
                                                                </div>
                                                            </div>
                                                            <div className="item-features-content-casino-info__body">
                                                                <div className="item-features-content-casino-info__number">
                                                                    9.7{" "}
                                                                    <span className="item-features-content-casino-info__number-level">
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="item-features-content-casino-info__rating">
                                                                    <div className="item-features-content-casino-info__star">
                                                                        <img
                                                                            src={
                                                                                starIcon
                                                                            }
                                                                            alt="like"
                                                                        />
                                                                    </div>
                                                                    <div className="item-features-content-casino-info__star">
                                                                        <img
                                                                            src={
                                                                                starIcon
                                                                            }
                                                                            alt="like"
                                                                        />
                                                                    </div>
                                                                    <div className="item-features-content-casino-info__star">
                                                                        <img
                                                                            src={
                                                                                starIcon
                                                                            }
                                                                            alt="like"
                                                                        />
                                                                    </div>
                                                                    <div className="item-features-content-casino-info__star">
                                                                        <img
                                                                            src={
                                                                                starIcon
                                                                            }
                                                                            alt="like"
                                                                        />
                                                                    </div>
                                                                    <div className="item-features-content-casino-info__star">
                                                                        <img
                                                                            src={
                                                                                starIcon
                                                                            }
                                                                            alt="like"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- <div
                                                            className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_low">
                                                            <div className="item-features-content-casino-info__top">
                                                                <div className="item-features-content-casino-info__label">
                                                                    Safety Index</div>
                                                            </div>
                                                            <div className="item-features-content-casino-info__body">
                                                                <div className="item-features-content-casino-info__number">
                                                                    2.5 <span
                                                                        className="item-features-content-casino-info__number-level">Low</span>
                                                                </div>
                                                                <div className="item-features-content-casino-info__rating">
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> -->
                                                        <!-- <div
                                                            className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_medium">
                                                            <div className="item-features-content-casino-info__top">
                                                                <div className="item-features-content-casino-info__label">
                                                                    Safety Index</div>
                                                            </div>
                                                            <div className="item-features-content-casino-info__body">
                                                                <div className="item-features-content-casino-info__number">
                                                                    2.5 <span
                                                                        className="item-features-content-casino-info__number-level">Medium</span>
                                                                </div>
                                                                <div className="item-features-content-casino-info__rating">
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                    <div
                                                                        className="item-features-content-casino-info__star">
                                                                        <img src={starIcon} alt="like"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> --> */}
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
                                                                    40x
                                                                </div>
                                                                <div className="item-features-content-casino-info__value">
                                                                    Bonus only
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
                                                                    10$
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
                                                                    Max Dep
                                                                </div>
                                                            </div>
                                                            <div className="item-features-content-casino-info__body">
                                                                <div className="item-features-content-casino-info__number">
                                                                    5$
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

                        <CasinoBonuses />

                        <section className="review__loyalty loyalty-review">
                            <div className="loyalty-review__container container">
                                <div className="loyalty-review__top top">
                                    <div className="top__row">
                                        <div className="top__column">
                                            <div className="top__title-block">
                                                <h2 className="top__title">
                                                    Loyalty Keypoints
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
                                                <span>View More</span>
                                                <span className="top__btn-arrow">
                                                    <svg>
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="loyalty-review__body">
                                    <div className="loyalty-review__column">
                                        <div className="loyalty-review__item item-loyalty-review">
                                            <div className="item-loyalty-review__image">
                                                <img
                                                    src=" /src/assets/img/review-loyalty/01.jpg"
                                                    alt="review-loyalty-img"
                                                />
                                            </div>
                                            <div className="item-loyalty-review__content">
                                                <div className="item-loyalty-review__label">
                                                    Levels 5
                                                </div>
                                                <div className="item-loyalty-review__value">
                                                    Engaging 5 level vip program
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loyalty-review__column">
                                        <div className="loyalty-review__item item-loyalty-review">
                                            <div className="item-loyalty-review__image">
                                                <img
                                                    src=" /src/assets/img/review-loyalty/02.jpg"
                                                    alt="review-loyalty-img"
                                                />
                                            </div>
                                            <div className="item-loyalty-review__content">
                                                <div className="item-loyalty-review__label">
                                                    Cashback 40%
                                                </div>
                                                <div className="item-loyalty-review__value">
                                                    Get every week your cash
                                                    back
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loyalty-review__column">
                                        <div className="loyalty-review__item item-loyalty-review">
                                            <div className="item-loyalty-review__image">
                                                <img
                                                    src=" /src/assets/img/review-loyalty/03.jpg"
                                                    alt="review-loyalty-img"
                                                />
                                            </div>
                                            <div className="item-loyalty-review__content">
                                                <div className="item-loyalty-review__label">
                                                    Lower wager
                                                </div>
                                                <div className="item-loyalty-review__value">
                                                    Higher level - lower wager
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loyalty-review__column">
                                        <div className="loyalty-review__item item-loyalty-review">
                                            <div className="item-loyalty-review__image">
                                                <img
                                                    src=" /src/assets/img/review-loyalty/04.jpg"
                                                    alt="review-loyalty-img"
                                                />
                                            </div>
                                            <div className="item-loyalty-review__content">
                                                <div className="item-loyalty-review__label">
                                                    Personal Manager
                                                </div>
                                                <div className="item-loyalty-review__value">
                                                    Get your personal manager on
                                                    level 3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loyalty-review__column">
                                        <div className="loyalty-review__item item-loyalty-review">
                                            <div className="item-loyalty-review__image">
                                                <img
                                                    src=" /src/assets/img/review-loyalty/05.jpg"
                                                    alt="review-loyalty-img"
                                                />
                                            </div>
                                            <div className="item-loyalty-review__content">
                                                <div className="item-loyalty-review__label">
                                                    Additional 15% for a deposit
                                                </div>
                                                <div className="item-loyalty-review__value">
                                                    Tasty money bonuses for each
                                                    level
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loyalty-review__column">
                                        <div className="loyalty-review__item item-loyalty-review">
                                            <div className="item-loyalty-review__image">
                                                <img
                                                    src=" /src/assets/img/review-loyalty/06.jpg"
                                                    alt="review-loyalty-img"
                                                />
                                            </div>
                                            <div className="item-loyalty-review__content">
                                                <div className="item-loyalty-review__label">
                                                    Withdrawal limit 20,000 EUR
                                                </div>
                                                <div className="item-loyalty-review__value">
                                                    Rise your limits high to the
                                                    sky
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <SpecialPromo />
                        <section
                            className="review__iwild-review-mob iwild-review-mob"
                            id="review-iwild-casino-review"
                        >
                            <div className="iwild-review-mob__container container"></div>
                        </section>
                        <TabMain handlerOpen={handlerOpen} />
                        <Harry handlerOpen={handlerOpen} />
                        <SpecialPromo />
                        <section className="review__iwild-casino-safety iwild-casino-safety">
                            <div className="iwild-casino-safety__container container">
                                <div className="iwild-casino-safety__body">
                                    <div className="iwild-casino-safety__row">
                                        <div className="iwild-casino-safety__column iwild-casino-safety__column_main">
                                            <div className="iwild-casino-safety__item item-iwild-casino-safety">
                                                <h3 className="item-iwild-casino-safety__title">
                                                    Safety Index of{" "}
                                                    <span>iWild Casino</span>{" "}
                                                    explained
                                                </h3>
                                                <div className="item-iwild-casino-safety__text">
                                                    <p>
                                                        Take a look at the
                                                        explanation of factors
                                                        that we consider when
                                                        calculating the Safety
                                                        Index rating of Spinanga
                                                        Casino. The Safety Index
                                                        is the main metric we
                                                        use to describe the
                                                        trustworthiness,
                                                        fairness, and quality of
                                                        all online casinos in
                                                        our database.
                                                    </p>
                                                </div>
                                                <div className="item-iwild-casino-safety__index index-item-iwild-casino-safety index-item-iwild-casino-safety_high">
                                                    <div className="index-item-iwild-casino-safety__bg"></div>
                                                    <div className="index-item-iwild-casino-safety__icon"></div>
                                                    <div className="index-item-iwild-casino-safety__label">
                                                        Safety Index:
                                                    </div>
                                                    <div className="index-item-iwild-casino-safety__value">
                                                        High
                                                    </div>
                                                </div>
                                                {/* <!-- <div
                                                    className="item-iwild-casino-safety__index index-item-iwild-casino-safety index-item-iwild-casino-safety_medium">
                                                    <div className="index-item-iwild-casino-safety__bg"></div>
                                                    <div className="index-item-iwild-casino-safety__icon"></div>
                                                    <div className="index-item-iwild-casino-safety__label">
                                                        Safety Index:
                                                    </div>
                                                    <div className="index-item-iwild-casino-safety__value">Medium</div>
                                                </div> -->
                                                <!-- <div
                                                    className="item-iwild-casino-safety__index index-item-iwild-casino-safety index-item-iwild-casino-safety_low">
                                                    <div className="index-item-iwild-casino-safety__bg"></div>
                                                    <div className="index-item-iwild-casino-safety__icon"></div>
                                                    <div className="index-item-iwild-casino-safety__label">
                                                        Safety Index:
                                                    </div>
                                                    <div className="index-item-iwild-casino-safety__value">Low</div>
                                                </div> --> */}
                                            </div>
                                        </div>
                                        <div className="iwild-casino-safety__column iwild-casino-safety__column_content">
                                            <div className="iwild-casino-safety__content content-iwild-casino-safety">
                                                <div className="content-iwild-casino-safety__row">
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                <span>
                                                                    Medium-sized
                                                                    casino
                                                                </span>
                                                                , based on our
                                                                research and
                                                                estimates
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                <span>
                                                                    Low value of
                                                                    withheld
                                                                    winnings
                                                                </span>{" "}
                                                                in player
                                                                complaints in
                                                                relation to the
                                                                casino's size
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                We consider the
                                                                casino's T&Cs to
                                                                be{" "}
                                                                <span>
                                                                    fair
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                We also
                                                                considered other
                                                                factors, which
                                                                had a
                                                                <span>
                                                                    neutral
                                                                    impact
                                                                </span>{" "}
                                                                on the casino's
                                                                Safety Index
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                Not found on any
                                                                relevant casino
                                                                blacklist
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                The Safety Index
                                                                of this casino
                                                                was calculated
                                                                based on our
                                                                research and
                                                                data collected
                                                                by our casino
                                                                review team.
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
                        {/* <!-- <section className="review__stake-sister-casinos stake-sister-casinos-review">
                            <div className="stake-sister-casinos-review__container container">
                                <div className="stake-sister-casinos-review__top top">
                                    <div className="top__row">
                                        <div className="top__column">
                                            <div className="top__title-block">
                                                <h2 className="top__title">
                                                    Stake Sister Casinos
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stake-sister-casinos-review__slider slider">
                                    <div className="slider__body">
                                        <div className="stake-sister-casinos-review__swiper slider__swiper swiper">
                                            <div className="slider__wrapper swiper-wrapper">
                                                <div
                                                    className="slider__slide slide-slider slide-slider-column slide-slider-column_standart-number swiper-slide">
                                                    <div
                                                        className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart-number">
                                                        <div className="different-casino-standart">
                                                            <div className="different-casino-standart__body">
                                                                <a href="" aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__image-block">
                                                                    <span className="different-casino-standart__image ibg">
                                                                        <img src="/src/assets/img/different-casino/30bet.png"
                                                                            alt="30bet"/>
                                                                    </span>
                                                                </a>
                                                                <div className="different-casino-standart__content">
                                                                    <a href="" aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name">
                                                                        30Bet Casino
                                                                    </a>
                                                                    <div className="casino-card__info info-casino-card">
                                                                        <div className="info-casino-card__stake">
                                                                            <a href=""
                                                                                aria-label="Put your description here."
                                                                                target="_blank"
                                                                                className="info-casino-card__stake-link">
                                                                                Safety Index
                                                                            </a>
                                                                            <div className="info-casino-card__stake-rating">
                                                                                <span
                                                                                    className="info-casino-card__stake-rating-icon">
                                                                                    <img src="/src/assets/img/icons/star.svg"
                                                                                        alt="star"/>
                                                                                </span>
                                                                                <span
                                                                                    className="info-casino-card__stake__rating-number">
                                                                                    8.9
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="slider__slide slide-slider slide-slider-column slide-slider-column_standart-number swiper-slide">
                                                    <div
                                                        className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart-number">
                                                        <div className="different-casino-standart">
                                                            <div className="different-casino-standart__body">
                                                                <a href="" aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__image-block">
                                                                    <span className="different-casino-standart__image ibg">
                                                                        <img src="/src/assets/img/different-casino/roy-spins.png"
                                                                            alt="roy-spins"/>
                                                                    </span>
                                                                </a>
                                                                <div className="different-casino-standart__content">
                                                                    <a href="" aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name">
                                                                        Royspins Casino Very Long Name Example
                                                                    </a>
                                                                    <div className="casino-card__info info-casino-card">
                                                                        <div className="info-casino-card__stake">
                                                                            <a href=""
                                                                                aria-label="Put your description here."
                                                                                target="_blank"
                                                                                className="info-casino-card__stake-link">
                                                                                Safety Index
                                                                            </a>
                                                                            <div className="info-casino-card__stake-rating">
                                                                                <span
                                                                                    className="info-casino-card__stake-rating-icon">
                                                                                    <img src="/src/assets/img/icons/star.svg"
                                                                                        alt="star"/>
                                                                                </span>
                                                                                <span
                                                                                    className="info-casino-card__stake__rating-number">
                                                                                    9.5
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="slider__slide slide-slider slide-slider-column slide-slider-column_standart-number swiper-slide">
                                                    <div
                                                        className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart-number">
                                                        <div className="different-casino-standart">
                                                            <div className="different-casino-standart__body">
                                                                <a href="" aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__image-block">
                                                                    <span className="different-casino-standart__image ibg">
                                                                        <img src="/src/assets/img/different-casino/bc-game.png"
                                                                            alt="bc-game"/>
                                                                    </span>
                                                                </a>
                                                                <div className="different-casino-standart__content">
                                                                    <a href="" aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name">
                                                                        BC.Game Casino
                                                                    </a>
                                                                    <div className="casino-card__info info-casino-card">
                                                                        <div className="info-casino-card__stake">
                                                                            <a href=""
                                                                                aria-label="Put your description here."
                                                                                target="_blank"
                                                                                className="info-casino-card__stake-link">
                                                                                Safety Index
                                                                            </a>
                                                                            <div className="info-casino-card__stake-rating">
                                                                                <span
                                                                                    className="info-casino-card__stake-rating-icon">
                                                                                    <img src="/src/assets/img/icons/star.svg"
                                                                                        alt="star"/>
                                                                                </span>
                                                                                <span
                                                                                    className="info-casino-card__stake__rating-number">
                                                                                    8.7
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="slider__slide slide-slider slide-slider-column slide-slider-column_standart-number swiper-slide">
                                                    <div
                                                        className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart-number">
                                                        <div className="different-casino-standart">
                                                            <div className="different-casino-standart__body">
                                                                <a href="" aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__image-block">
                                                                    <span className="different-casino-standart__image ibg">
                                                                        <img src="/src/assets/img/different-casino/lucky-block.png"
                                                                            alt="lucky-block">
                                                                    </span>
                                                                </a>
                                                                <div className="different-casino-standart__content">
                                                                    <a href="" aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name">
                                                                        Lucky Block Casino
                                                                    </a>
                                                                    <div className="casino-card__info info-casino-card">
                                                                        <div className="info-casino-card__stake">
                                                                            <a href=""
                                                                                aria-label="Put your description here."
                                                                                target="_blank"
                                                                                className="info-casino-card__stake-link">
                                                                                Safety Index
                                                                            </a>
                                                                            <div className="info-casino-card__stake-rating">
                                                                                <span
                                                                                    className="info-casino-card__stake-rating-icon">
                                                                                    <img src="/src/assets/img/icons/star.svg"
                                                                                        alt="star"/>
                                                                                </span>
                                                                                <span
                                                                                    className="info-casino-card__stake__rating-number">
                                                                                    8.7
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="slider__slide slide-slider slide-slider-column slide-slider-column_standart-number swiper-slide">
                                                    <div
                                                        className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart-number">
                                                        <div className="different-casino-standart">
                                                            <div className="different-casino-standart__body">
                                                                <a href="" aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__image-block">
                                                                    <span className="different-casino-standart__image ibg">
                                                                        <img src="/src/assets/img/different-casino/vavada.png"
                                                                            alt="vavada">
                                                                    </span>
                                                                </a>
                                                                <div className="different-casino-standart__content">
                                                                    <a href="" aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="different-casino-standart__name">
                                                                        Lucky Block Casino
                                                                    </a>
                                                                    <div className="casino-card__info info-casino-card">
                                                                        <div className="info-casino-card__stake">
                                                                            <a href=""
                                                                                aria-label="Put your description here."
                                                                                target="_blank"
                                                                                className="info-casino-card__stake-link">
                                                                                Vavada
                                                                            </a>
                                                                            <div className="info-casino-card__stake-rating">
                                                                                <span
                                                                                    className="info-casino-card__stake-rating-icon">
                                                                                    <img src="/src/assets/img/icons/star.svg"
                                                                                        alt="star"/>
                                                                                </span>
                                                                                <span
                                                                                    className="info-casino-card__stake__rating-number">
                                                                                    8.7
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
                                        <div className="slider__bottom bottom-slider">
                                            <div
                                                className="bottom-slider__pagination stake-sister-casinos-review__pagination swiper-pagination">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section> --> */}
                        <HighRankedCasinos />
                        <CheckMoreWhatSuitsYouBest />
                        <SubscribeForm />
                        <section className="review__bottom-info bottom-info-gamble">
                            <div className="bottom-info-gamble__container container">
                                <div className="bottom-info-gamble__row">
                                    <div className="bottom-info-gamble__column">
                                        <div className="bottom-info-gamble__item">
                                            <h2 className="bottom-info-gamble__title">
                                                inGamble - The most popular New
                                                Casino and Bonus listing and
                                                review website
                                            </h2>
                                            <div className="bottom-info-gamble__text">
                                                <p>
                                                    inGamble is a well-known and
                                                    respected brand within the
                                                    iGaming industry. We are the
                                                    most popular gambling
                                                    listing and review website.
                                                    New players owners always
                                                    look for opportunities to
                                                    list their projects on our
                                                    website. That ensures that
                                                    the information on our
                                                    platform is always
                                                    accessible and up to date.
                                                </p>
                                                <p>
                                                    Most of the cryptocurrencies
                                                    are listed on CoinMooner
                                                    even before they are listed
                                                    on CoinMarketCap &
                                                    CoinGecko.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-info-gamble__column">
                                        <div className="bottom-info-gamble__item">
                                            <h2 className="bottom-info-gamble__title">
                                                Find DeFi tokens that will
                                                generate huge profits
                                            </h2>
                                            <div className="bottom-info-gamble__text">
                                                <p>
                                                    CoinMooner became a platform
                                                    that makes cryptocurrencies
                                                    more accessible to the
                                                    public and provides
                                                    entertaining features,
                                                    developments, crypto-related
                                                    news, tutorials, and other
                                                    valuable materials. One of
                                                    the main goals is to stay
                                                    relevant and keep up with
                                                    the rapid growth of crypto.
                                                </p>
                                                <p>
                                                    To follow our ideology, we
                                                    developed state-of-the-art
                                                    mechanisms and features that
                                                    allow our visitors to
                                                    analyze the tokens. Our
                                                    visitors can use various
                                                    rankings, filtering options,
                                                    token contract audits,
                                                    charts, trading history, and
                                                    many other valuable options.
                                                    All of this combined brings
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
        </>
    )
}
