import spinbetter from "../../assets/img/casino-logo/spinbetter.svg"
import star from "../../assets/img/icons/star.svg"
import like from "../../assets/img/icons/like.svg"
import car13 from "../../assets/img/review-loyalty/13.png"
import clock14 from "../../assets/img/review-loyalty/14.png"
import gift15 from "../../assets/img/review-loyalty/15.png"
import tie04 from "../../assets/img/review-loyalty/04.jpg"
import up01 from "../../assets/img/review-loyalty/01.jpg"
import roySpins from "../../assets/img/casino-logo/roy-spins.svg"
import vulkan from "../../assets/img/casino-logo/vulkan.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export const SimpleBonusEssentialPrograms = ({title="Essential VIP Loyatly Programs"}:{title?:string}) => {
    return (
        <section className="simple-bonus__essential-programs essential-programs-gamble essential-programs-gamble_images">
            <div className="essential-programs-gamble__container container">
                <div className="essential-programs-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    {title}
                               
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                rel="nofollow noopener"
                                href="/essential_loyalty"
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
                        <Swiper
                            slidesPerView="auto"
                            allowTouchMove={true}
                            spaceBetween={20}
                            breakpoints={{
                                320: {
                                    spaceBetween: 16,
                                },
                                1024.98: {
                                    spaceBetween: 20,
                                },
                                1920: {
                                    spaceBetween: 20,
                                },
                            }}
                            className="slider__wrapper swiper-wrapper"
                        >
                            <SwiperSlide>
                             
                                <div className="slider__slide slide-slider ">
                                    <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                        <div className="item-essential-programs-gamble__top">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-essential-programs-gamble__logo"
                                            >
                                                <img
                                                    src={spinbetter}
                                                    alt="spinbetter"
                                                />
                                            </a>
                                        </div>
                                        <div className="item-essential-programs-gamble__body">
                                            <div className="item-essential-programs-gamble__provider">
                                                <span className="item-essential-programs-gamble__provider-name">
                                                    Spinbetter
                                                </span>
                                                <span className="item-essential-programs-gamble__provider-rating">
                                                    <span className="item-essential-programs-gamble__provider-rating-star">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="item-essential-programs-gamble__provider-rating-number">
                                                        4.8
                                                    </span>
                                                </span>
                                                <div className="info-casino-card__likes">
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={like}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        34K
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__stats stats-item-essential-programs-gamble">
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Loyalty Rank
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                9.9
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                <div className="value-item-stats-essential-programs-gamble__stars value-item-stats-essential-programs-gamble__stars_5">
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Levels
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                42
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                Outstanding
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={car13}
                                                            alt="car"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Ferrari X-300
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Win a car in the end
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={clock14}
                                                            alt="clock"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Special Prizes
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Parties Concerts,
                                                            Phones
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={gift15}
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
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={tie04}
                                                            alt="tie"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Personal VIP manager
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Max Cash Back
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={up01}
                                                            alt="tie"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            LVL Up Bonuses
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Deposit % and Free
                                                            Spins
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-essential-programs-gamble__bottom">
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-essential-programs-gamble__btn item-essential-programs-gamble__btn_yellow"
                                                >
                                                    View Casino
                                                </a>
                                            </div>
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-essential-programs-gamble__btn"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="slider__slide slide-slider ">
                                    <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                        <div className="item-essential-programs-gamble__top">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-essential-programs-gamble__logo"
                                            >
                                                <img
                                                    src={vulkan}
                                                    alt="vulkan"
                                                />
                                            </a>
                                        </div>
                                        <div className="item-essential-programs-gamble__body">
                                            <div className="item-essential-programs-gamble__provider">
                                                <span className="item-essential-programs-gamble__provider-name">
                                                    Vulkan Vegas
                                                </span>
                                                <span className="item-essential-programs-gamble__provider-rating">
                                                    <span className="item-essential-programs-gamble__provider-rating-star">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="item-essential-programs-gamble__provider-rating-number">
                                                        4.8
                                                    </span>
                                                </span>
                                                <div className="info-casino-card__likes">
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={like}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        34K
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__stats stats-item-essential-programs-gamble">
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Loyalty Rank
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                7.3
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                <div className="value-item-stats-essential-programs-gamble__stars value-item-stats-essential-programs-gamble__stars_4">
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Levels
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                42
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                Outstanding
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={car13}
                                                            alt="car"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Ferrari X-300
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Win a car in the end
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={clock14}
                                                            alt="clock"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Special Prizes
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Parties Concerts,
                                                            Phones
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={gift15}
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
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={tie04}
                                                            alt="tie"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Personal VIP manager
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Max Cash Back
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={up01}
                                                            alt="up"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            LVL Up Bonuses
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Deposit % and Free
                                                            Spins
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-essential-programs-gamble__bottom">
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-essential-programs-gamble__btn item-essential-programs-gamble__btn_yellow"
                                                >
                                                    View Casino
                                                </a>
                                            </div>
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-essential-programs-gamble__btn"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__slide slide-slider ">
                                    <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                        <div className="item-essential-programs-gamble__top">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-essential-programs-gamble__logo"
                                            >
                                                <img
                                                    src={roySpins}
                                                    alt="roy-spins"
                                                />
                                            </a>
                                        </div>
                                        <div className="item-essential-programs-gamble__body">
                                            <div className="item-essential-programs-gamble__provider">
                                                <span className="item-essential-programs-gamble__provider-name">
                                                    RoySpins
                                                </span>
                                                <span className="item-essential-programs-gamble__provider-rating">
                                                    <span className="item-essential-programs-gamble__provider-rating-star">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="item-essential-programs-gamble__provider-rating-number">
                                                        4.8
                                                    </span>
                                                </span>
                                                <div className="info-casino-card__likes">
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={like}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        34K
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__stats stats-item-essential-programs-gamble">
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Loyalty Rank
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                9.9
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                <div className="value-item-stats-essential-programs-gamble__stars value-item-stats-essential-programs-gamble__stars_5">
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Levels
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                42
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                Outstanding
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={car13}
                                                            alt="car"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Ferrari X-300
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Win a car in the end
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={clock14}
                                                            alt="clock"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Special Prizes
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Parties Concerts,
                                                            Phones
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={gift15}
                                                            alt="gift15"
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
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={tie04}
                                                            alt="tie"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Personal VIP manager
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Max Cash Back
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={up01}
                                                            alt="tie"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            LVL Up Bonuses
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Deposit % and Free
                                                            Spins
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-essential-programs-gamble__bottom">
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-essential-programs-gamble__btn item-essential-programs-gamble__btn_yellow"
                                                >
                                                    View Casino
                                                </a>
                                            </div>
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-essential-programs-gamble__btn"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__slide slide-slider  ">
                                    <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                        <div className="item-essential-programs-gamble__top">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-essential-programs-gamble__logo"
                                            >
                                                <img
                                                    src={spinbetter}
                                                    alt="spinbetter"
                                                />
                                            </a>
                                        </div>
                                        <div className="item-essential-programs-gamble__body">
                                            <div className="item-essential-programs-gamble__provider">
                                                <span className="item-essential-programs-gamble__provider-name">
                                                    Vulkan Vegas
                                                </span>
                                                <span className="item-essential-programs-gamble__provider-rating">
                                                    <span className="item-essential-programs-gamble__provider-rating-star">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="item-essential-programs-gamble__provider-rating-number">
                                                        4.8
                                                    </span>
                                                </span>
                                                <div className="info-casino-card__likes">
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={like}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        34K
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__stats stats-item-essential-programs-gamble">
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Loyalty Rank
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                7.3
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                <div className="value-item-stats-essential-programs-gamble__stars value-item-stats-essential-programs-gamble__stars_4">
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__star">
                                                                        <img
                                                                            src={
                                                                                star
                                                                            }
                                                                            alt="star"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Levels
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                42
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                Outstanding
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={car13}
                                                            alt="car"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Ferrari X-300
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Win a car in the end
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={clock14}
                                                            alt="clock"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Special Prizes
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Parties Concerts,
                                                            Phones
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={gift15}
                                                            alt="gift15"
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
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={tie04}
                                                            alt="tie"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            Personal VIP manager
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Max Cash Back
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-essential-programs-gamble__item">
                                                    <div className="features-essential-programs-gamble__icon">
                                                        <img
                                                            src={up01}
                                                            alt="tie"
                                                        />
                                                    </div>
                                                    <div className="features-essential-programs-gamble__info">
                                                        <div className="features-essential-programs-gamble__name">
                                                            LVL Up Bonuses
                                                        </div>
                                                        <div className="features-essential-programs-gamble__text">
                                                            Deposit % and Free
                                                            Spins
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-essential-programs-gamble__bottom">
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-essential-programs-gamble__btn item-essential-programs-gamble__btn_yellow"
                                                >
                                                    View Casino
                                                </a>
                                            </div>
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-essential-programs-gamble__btn"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
