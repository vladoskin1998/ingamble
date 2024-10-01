import star from "../../assets/img/icons/star.svg"
import roulette from "../../assets/img/icons/roulette.svg"

import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useRef, useEffect, useState } from "react"

import girl from "../../assets/img/girls/03.png"
import welcomeBonus from "../../assets/img/casino-big-cards/02.jpg"
import bigFatRace from "../../assets/img/casino-big-cards/03.jpg"
import christmasBonus from "../../assets/img/casino-big-cards/01.jpg"
import casinoVibes from "../../assets/img/casino-small-cards/Casino-Vibes.jpg"
import tsars from "../../assets/img/casino-small-cards/Tsars.jpg"
import playkasino from "../../assets/img/casino-small-cards/Playkasino.jpg"
import bg07 from "../../assets/img/bg/07.jpg"
import gift from "../../assets/img/icons/gift.svg"

export const BestLiveDealerCasinos = () => {
    const sliderRef = useRef<SwiperRef | null>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (sliderRef.current && paginationRef.current) {
            const swiper = sliderRef.current.swiper
            if (swiper && paginationRef.current) {
                //@ts-ignore
                swiper.params.pagination.el = paginationRef.current
                swiper.pagination.init()
                swiper.pagination.render()
                swiper.pagination.update()
            }
        }
    }, [])

    const [isBeginning, setIsBeginning] = useState<boolean>(true)
    const [isEnd, setIsEnd] = useState<boolean>(false)

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.swiper.slideNext()
            handleSlideChange()
        }
    }

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.swiper.slidePrev()
            handleSlideChange()
        }
    }

    const handleSlideChange = () => {
        if(sliderRef.current) {
             setIsBeginning( sliderRef.current.swiper.isBeginning)
        setIsEnd( sliderRef.current.swiper.isEnd)
        }
       
    }


  

    return (
        <section className="main-gamble__best-live-dealer-casinos best-live-dealer-casinos-gamble  main-gamble__different-casino-bg main-gamble__baner-block">
            <div className="best-live-dealer-casinos-gamble__container container">
                <div className="best-live-dealer-casinos-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Best Live Dealer Casinos
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                href="/see-all?key=45678901"
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
                <div className="best-live-dealer-casinos-gamble__row">
                    <div className="best-live-dealer-casinos-gamble__bg ibg">
                        <img src={bg07} alt="bg" />
                    </div>
                    <div className="best-live-dealer-casinos-gamble__slider slider-best-live-dealer-casinos-gamble">
                        <div className="slider-best-live-dealer-casinos-gamble__top">
                            <div className="slider-best-live-dealer-casinos-gamble__title">
                                <span>
                                    <img src={roulette} alt="roulette" />
                                </span>
                                Pay’n Play Casinos
                            </div>
                            <div className="slider-best-live-dealer-casinos-gamble__navigation navigation-btns">
                                <button
                                    onClick={prevSlide}
                                    className={`navigation-btn navigation-btn_prev slider-best-live-dealer-casinos-gamble__btn_prev ${
                                        isBeginning
                                            ? "swiper-button-disabled"
                                            : ""
                                    }`}
                                >
                                    <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className={`navigation-btn navigation-btn_next slider-best-live-dealer-casinos-gamble__btn_next ${
                                        isEnd ? "swiper-button-disabled" : ""
                                    }`}
                                >
                                    <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="slider-best-live-dealer-casinos-gamble__content">
                            <div className="slider__body">
                                <div className="slider-best-live-dealer-casinos-gamble__swiper slider__swiper swiper">
                                    <Swiper
                                        onSlideChange={handleSlideChange}
                                        className="slider__wrapper swiper-wrapper"
                                        slidesPerView="auto"
                                        spaceBetween={20}
                                        modules={[Pagination]}
                                        ref={sliderRef}
                                        pagination={{
                                            el: paginationRef.current,
                                            clickable: true,
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
                                        <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="slide-slider__item casino-big-card"
                                            >
                                                <div className="casino-big-card__image ibg">
                                                    <img
                                                        src={welcomeBonus}
                                                        alt="Welcome Casino Bonus"
                                                    />
                                                </div>
                                                <div className="casino-big-card__top">
                                                    <div className="casino-big-card__top-small-card casino-small-card">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-small-card__image-block"
                                                        >
                                                            <div className="casino-small-card__image ibg">
                                                                <img
                                                                    src={
                                                                        casinoVibes
                                                                    }
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
                                                                    VPN Friendly
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
                                                <div className="casino-big-card__bottom">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-big-card__title"
                                                    >
                                                        <span className="casino-big-card__title-label">
                                                            Welcome Casino
                                                            Bonus:
                                                        </span>
                                                        <span className="casino-big-card__title-value">
                                                            50EUR + 100FS
                                                        </span>
                                                    </a>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-big-card__btn "
                                                    >
                                                        Play
                                                    </a>
                                                </div>
                                            </a>
                                        </SwiperSlide>

                                        <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="slide-slider__item casino-big-card"
                                            >
                                                <div className="casino-big-card__image ibg">
                                                    <img
                                                        src={bigFatRace}
                                                        alt="Big Fat Race"
                                                    />
                                                </div>
                                                <div className="casino-big-card__top">
                                                    <div className="casino-big-card__top-small-card casino-small-card">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-small-card__image-block"
                                                        >
                                                            <div className="casino-small-card__image ibg">
                                                                <img
                                                                    src={tsars}
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
                                                                    VPN Friendly
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
                                                <div className="casino-big-card__bottom">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-big-card__title"
                                                    >
                                                        <span className="casino-big-card__title-label">
                                                            Big Fat Race
                                                        </span>
                                                        <span className="casino-big-card__title-value">
                                                            to $100 Moon coins
                                                        </span>
                                                    </a>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-big-card__btn"
                                                    >
                                                        Play
                                                    </a>
                                                </div>
                                            </a>
                                        </SwiperSlide>

                                        <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="slide-slider__item casino-big-card"
                                            >
                                                <div className="casino-big-card__image ibg">
                                                    <img
                                                        src={christmasBonus}
                                                        alt="Christmas Bonus"
                                                    />
                                                </div>
                                                <div className="casino-big-card__top">
                                                    <div className="casino-big-card__top-small-card casino-small-card">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-small-card__image-block"
                                                        >
                                                            <div className="casino-small-card__image ibg">
                                                                <img
                                                                    src={
                                                                        playkasino
                                                                    }
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
                                                                    VPN Friendly
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
                                                <div className="casino-big-card__bottom">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-big-card__title"
                                                    >
                                                        <span className="casino-big-card__title-label">
                                                            Christmas Bonus:
                                                        </span>
                                                        <span className="casino-big-card__title-value">
                                                            100EUR + 200FS
                                                        </span>
                                                    </a>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-big-card__btn"
                                                    >
                                                        Play
                                                    </a>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="slider__bottom bottom-slider">
                                <div
                                    ref={paginationRef}
                                    className="bottom-slider__pagination slider-best-live-dealer-casinos-gamble__pagination swiper-pagination"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="best-live-dealer-casinos-gamble__body">
                        <div className="best-live-dealer-casinos-gamble__waves">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="best-live-dealer-casinos-gamble__girl">
                            <img src={girl} alt="girl" />
                        </div>
                        <div className="best-live-dealer-casinos-gamble__content">
                            <div className="best-live-dealer-casinos-gamble__title">
                                Bonus from <br />
                                <span>Live Dealers</span>
                            </div>
                            <a
                                href=""
                                aria-label="Put your description here."
                                target="_blank"
                                className="best-live-dealer-casinos-gamble__btn "
                            >
                                <span>
                                    <img src={gift} alt="gift" />
                                </span>
                                Get Bonus
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
