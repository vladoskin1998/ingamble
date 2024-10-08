import star from "../../assets/img/icons/star.svg"
import VavadaImage from "../../assets/img/different-casino/vavada.png"
import RoySpinsImage from "../../assets/img/different-casino/roy-spins.png"
import BcGameImage from "../../assets/img/different-casino/bc-game.png"
import FairspinImage from "../../assets/img/different-casino/fairspin.png"
import PlayamoImage from "../../assets/img/different-casino/playamo.png"
import CasinoVibesImage from "../../assets/img/different-casino/casino-vibes.png"
import LuckyBlockImage from "../../assets/img/different-casino/lucky-block.png"
import ThirtyBetImage from "../../assets/img/different-casino/30bet.png"

import "swiper/css"

import { Swiper, SwiperSlide } from "swiper/react"

export  default function ExploreTheBestCryptoCasinos  ()  {
    return (
        <section className="main-gamble__crypto-casinos crypto-casinos-gamble main-gamble__different-casino-medium main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
            <div className="crypto-casinos-gamble__container container">
                <div className="crypto-casinos-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Explore The Best Crypto Casinos
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                href="/see-all?key=56789012"
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
                <div className="crypto-casinos-gamble__slider slider">
                    <div className="slider__body">
                        <div className="crypto-casinos-gamble__swiper slider__swiper swiper">
                            <Swiper
                                className="slider__wrapper swiper-wrapper"
                                slidesPerView="auto"
                                
                                breakpoints={{
                                    320: {
                                        spaceBetween: 16,
                                    },
                                    1650.98: {
                                        spaceBetween: 20,
                                    },
                                    1920: {
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                <SwiperSlide>
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
                                                        src={VavadaImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={RoySpinsImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={BcGameImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={FairspinImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={PlayamoImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={CasinoVibesImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={LuckyBlockImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={ThirtyBetImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={FairspinImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={RoySpinsImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={BcGameImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={FairspinImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={PlayamoImage}
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
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                        src={CasinoVibesImage}
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
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
