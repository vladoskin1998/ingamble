import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import casinoBigCard02 from "../../assets/img/casino-big-cards/02.jpg";
import casinoVibes from "../../assets/img/casino-small-cards/Casino-Vibes.jpg";

import casinoBigCard04 from "../../assets/img/casino-big-cards/04.jpg";
import playkasino from "../../assets/img/casino-small-cards/Playkasino.jpg";

import casinoBigCard05 from "../../assets/img/casino-big-cards/05.jpg";
import tsars from "../../assets/img/casino-small-cards/Tsars.jpg";


import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useEffect, useRef } from "react"
export const HighestMaxBetBonuses = () => {
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
    return (
        <section className="main-gamble__highest-max-bet-bonuses-2 highest-max-bet-bonuses-2-gamble main-gamble__casino-big-cards">
            <div className="highest-max-bet-bonuses-2-gamble__container container">
                <div className="highest-max-bet-bonuses-2-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Highest Max Bet Bonuses
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                href="/see-all?key=89012345"
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
                <div className="highest-max-bet-bonuses-2-gamble__slider slider">
                    <div className="slider__body">
                        <div className="highest-max-bet-bonuses-2-gamble__swiper slider__swiper swiper">
                            <div className="slider__wrapper swiper-wrapper">
                                <Swiper        
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
                                }}>
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="slide-slider__item casino-big-card"
                                        >
                                            <div className="casino-big-card__image ibg">
                                                <img
                                                    src={casinoBigCard02}
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
                                                                src={casinoVibes}
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
                                                                    src={star}
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
                                                        Welcome Casino Bonus:
                                                    </span>
                                                    <span className="casino-big-card__title-value">
                                                        50EUR + 100FS
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="slide-slider__item casino-big-card"
                                        >
                                            <div className="casino-big-card__image ibg">
                                                <img
                                                    src={casinoBigCard04}
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
                                                                src={playkasino}
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
                                                                    src={star}
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                             
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="slide-slider__item casino-big-card"
                                        >
                                            <div className="casino-big-card__image ibg">
                                                <img
                                                    src={casinoBigCard05}
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
                                                                    src={star}
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                          
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="slide-slider__item casino-big-card"
                                        >
                                            <div className="casino-big-card__image ibg">
                                                <img
                                                    src={casinoBigCard02}
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
                                                                src={casinoVibes}
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
                                                                    src={star}
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
                                                        Welcome Casino Bonus:
                                                    </span>
                                                    <span className="casino-big-card__title-value">
                                                        50EUR + 100FS
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
                                    </div>
                                </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div ref={paginationRef} className="bottom-slider__pagination highest-max-bet-bonuses-2-gamble__pagination swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
