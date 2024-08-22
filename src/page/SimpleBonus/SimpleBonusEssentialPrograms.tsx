
import { LazyLoadImage } from "react-lazy-load-image-component"

import starIcon from "../../assets/img/icons/star.svg"

import spinbetterLogo from "../../assets/img/casino-logo/spinbetter.svg"
import carIcon from "../../assets/img/features/car.svg"
import clockIcon from "../../assets/img/features/clock.svg"
import tieIcon from "../../assets/img/features/tie.svg"
import upIcon from "../../assets/img/features/up.svg"
import vulkanLogo from "../../assets/img/casino-logo/vulkan.svg"
import giftFeatureIcon from "../../assets/img/features/gift.svg"
import cashIcon from "../../assets/img/features/cash.svg"
import roySpinsLogo from "../../assets/img/casino-logo/roy-spins.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export const SimpleBonusEssentialPrograms = () => {
    return (
        <section className="simple-bonus__essential-programs essential-programs-gamble">
            <div className="essential-programs-gamble__container container">
                <div className="essential-programs-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Essential VIP Loyatly Programs
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
                </div>{" "}
                
                    <div className="essential-programs-gamble__slider slider">
                    <Swiper slidesPerView="auto" spaceBetween={16}>
                        <div className="essential-programs-gamble__swiper slider__swiper swiper">
                            <div className="slider__wrapper swiper-wrapper">
                                <SwiperSlide>
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
                                                        src={spinbetterLogo}
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
                                                                src={starIcon}
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
                                                                src={carIcon}
                                                                alt="car"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={clockIcon}
                                                                alt="clock"
                                                                effect="blur"
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
                                                                Birthday Gifts
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Happy Birthday!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={tieIcon}
                                                                alt="tie"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={upIcon}
                                                                alt="up"
                                                                effect="blur"
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                                src={starIcon}
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
                                                                src={carIcon}
                                                                alt="car"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={clockIcon}
                                                                alt="clock"
                                                                effect="blur"
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
                                                                Birthday Gifts
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Happy Birthday!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={tieIcon}
                                                                alt="tie"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={upIcon}
                                                                alt="up"
                                                                effect="blur"
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                                        src={roySpinsLogo}
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
                                                                src={starIcon}
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
                                                                src={clockIcon}
                                                                alt="clock"
                                                                effect="blur"
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
                                                                Birthday Gifts
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Happy Birthday!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={tieIcon}
                                                                alt="tie"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={cashIcon}
                                                                alt="cash"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={upIcon}
                                                                alt="up"
                                                                effect="blur"
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                                        src={spinbetterLogo}
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
                                                                src={starIcon}
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
                                                                Birthday Gifts
                                                            </div>
                                                            <div className="features-essential-programs-gamble__text">
                                                                Happy Birthday!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={tieIcon}
                                                                alt="tie"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={cashIcon}
                                                                alt="cash"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={cashIcon}
                                                                alt="cash"
                                                                effect="blur"
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
                                                    <div className="features-essential-programs-gamble__item">
                                                        <div className="features-essential-programs-gamble__icon">
                                                            <LazyLoadImage
                                                                src={upIcon}
                                                                alt="up"
                                                                effect="blur"
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
                                </SwiperSlide>
                            </div>
                        </div>
                 </Swiper>   </div>
                
            </div>
        </section>
    )
}
