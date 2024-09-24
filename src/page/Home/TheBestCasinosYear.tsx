import { useRef, useState } from "react"
import star from "../../assets/img/icons/star.svg"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import bg01 from "../../assets/img/bg/01.jpg"
import girl from "../../assets/img/girls/01.png"
import Playamo from "../../assets/img/casino-small-cards/Playamo.jpg"

import bcGameImage from "../../assets/img/different-casino/bc-game.png"
import playamoImage from "../../assets/img/different-casino/playamo.png"
import rollingSlotsImage from "../../assets/img/different-casino/rolling-slots.png"

import casinoVibesImage from "../../assets/img/different-casino/casino-vibes.png"

import thirtyBetImage from "../../assets/img/different-casino/30bet.png"
import Vavada from "../../assets/img/different-casino/vavada.png"
export default function TheBestCasinosYear() {
    const sliderRef = useRef<SwiperRef | null>(null)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    return (
        <div className="main-gamble__best-casinos-2024 best-casinos-2024-gamble main-gamble__different-casino-medium main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
            <div className="best-casinos-2024-gamble__container container">
                <div className="best-casinos-2024-gamble__body">
                    <div className="best-casinos-2024-gamble__bg ibg">
                        <img src={bg01} alt="bg" />
                    </div>
                    <div className="best-casinos-2024-gamble__waves">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`best-casinos-2024-gamble__girl ${isScrolled && "scrolled"}`}>
                        <img src={girl} alt="girl" />
                    </div>
                    <div className={`best-casinos-2024-gamble__slider slider-best-casinos-2024-gamble ${isScrolled && "scrolled"}`}>
                        <div className="slider-best-casinos-2024-gamble__top top">
                            <div className="top__row">
                                <div className="top__column">
                                    <div className="top__title-block">
                                        <div className="top__title-big">
                                            The Best Casinos of 2024
                                        </div>
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
                        <div className="slider-best-casinos-2024-gamble__body">
                            <div className="slider-best-casinos-2024-gamble__swiper swiper">
                                <Swiper
                                    className="slider-best-casinos-2024-gamble__wrapper swiper-wrapper"
                                    ref={sliderRef}
                                    slidesPerView="auto"
                                    spaceBetween={20}
                                    onSlideChange={(swiper) => {
                                        setIsScrolled(!swiper.isBeginning)
                                      
                                      }}
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
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={thirtyBetImage}
                                                        alt="30Bet"
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
                                    </SwiperSlide>
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={Playamo}
                                                        alt="Playamo"
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
                                    </SwiperSlide>
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={bcGameImage}
                                                        alt="BC.Game"
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
                                    </SwiperSlide>
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={thirtyBetImage}
                                                        alt="Fairspin"
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
                                    </SwiperSlide>
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={Vavada}
                                                        alt="Vavada"
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
                                    </SwiperSlide>
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={casinoVibesImage}
                                                        alt="CasinoVibes"
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
                                    </SwiperSlide>
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={playamoImage}
                                                        alt="Lucky Block"
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
                                    </SwiperSlide>
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={rollingSlotsImage}
                                                        alt="Playamo"
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
                                    </SwiperSlide>
                                    <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                        <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="different-casino-medium__image-block"
                                            >
                                                <span className="different-casino-medium__image ibg">
                                                    <img
                                                        src={thirtyBetImage}
                                                        alt="30Bet"
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
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
