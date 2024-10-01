import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

import { useEffect, useRef } from "react"
import casinoCards07 from "../../assets/img/casino-cards/07.jpg"
import casinoCards06 from "../../assets/img/casino-cards/06.jpg"
import casinoCards08 from "../../assets/img/casino-cards/08.jpg"
import casinoCards04 from "../../assets/img/casino-cards/04.jpg"
import casinoCards01 from "../../assets/img/casino-cards/01.jpg"

import CasinoVibes from "../../assets/img/casino-small-cards/Casino-Vibes.jpg"
import Casoo from "../../assets/img/casino-small-cards/Casoo.jpg"
import Playamo from "../../assets/img/casino-small-cards/Playamo.jpg"
import Tsars from  "../../assets/img/casino-small-cards/Tsars.jpg"
import Playkasino from"../../assets/img/casino-small-cards/Playkasino.jpg"
import casinoCards05 from "../../assets/img/casino-cards/05.jpg"
import security from "../../assets/img/icons/security.svg"

export const FastestPayoutCasinos = () => {


    const sliderRef = useRef<SwiperRef | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (sliderRef.current && paginationRef.current) {
          const swiper = sliderRef.current.swiper;
          if (swiper && paginationRef.current) {
            //@ts-ignore
            swiper.params.pagination.el = paginationRef.current;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }
        }
      }, []);
    return (
        <section className="main-gamble__new-bonuses new-bonuses-gamble playing-now-gamble  main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
            <div className="new-bonuses-gamble__container container">
                <div className="new-bonuses-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                            <span className="top__title-icon"><img src={security} alt="g-icon" /></span>
                                <h2 className="top__title">Fastest Payout Casinos</h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                 href="/see-all?key=23456789"
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
                <div className="new-bonuses-gamble__slider slider">
                    <div className="slider__body">
                        <div className="new-bonuses-gamble__swiper slider__swiper swiper">
                            <Swiper
                                ref={sliderRef}
                                className="slider__wrapper swiper-wrapper"
                                slidesPerView="auto"
                                spaceBetween={20}
                                modules={[Pagination]}
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
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item casino-card">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__image-block"
                                            >
                                                <div className="casino-card__image ibg">
                                                    <img
                                                        src={casinoCards04}
                                                        alt="Big Fat Race to $100 Moon coins "
                                                    />
                                                </div>
                                                <a
                                                    href=""
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                >
                                                    Play
                                                </a>
                                            </a>
                                            <div className="casino-card__content">
                                                <div className="casino-card__small-card casino-small-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__image-block"
                                                    >
                                                        <div className="casino-small-card__image ibg">
                                                            <img
                                                                src={
                                                                    CasinoVibes
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item casino-card">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__image-block"
                                            >
                                                <div className="casino-card__image ibg">
                                                    <img
                                                        src={casinoCards05}
                                                        alt="Big Fat Race to $100 Moon coins"
                                                    />
                                                </div>
                                                <a
                                                    href=""
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                >
                                                    Play
                                                </a>
                                            </a>
                                            <div className="casino-card__content">
                                                <div className="casino-card__small-card casino-small-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__image-block"
                                                    >
                                                        <div className="casino-small-card__image ibg">
                                                            <img
                                                                src={Casoo}
                                                                alt="Casoo"
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
                                                            Casoo
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item casino-card">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__image-block"
                                            >
                                                <div className="casino-card__image ibg">
                                                    <img
                                                        src={casinoCards06}
                                                        alt="Big Fat Race to $100 Moon coins"
                                                    />
                                                </div>
                                                <a
                                                    href=""
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                >
                                                    Play
                                                </a>
                                            </a>
                                            <div className="casino-card__content">
                                                <div className="casino-card__small-card casino-small-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__image-block"
                                                    >
                                                        <div className="casino-small-card__image ibg">
                                                            <img
                                                                src={Playamo}
                                                                alt="Playamo"
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
                                                            Playamo
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item casino-card">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__image-block"
                                            >
                                                <div className="casino-card__image ibg">
                                                    <img
                                                        src={casinoCards08}
                                                        alt="Big Fat Race to $100 Moon coins"
                                                    />
                                                </div>
                                                <a
                                                    href=""
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                >
                                                    Play
                                                </a>
                                            </a>
                                            <div className="casino-card__content">
                                                <div className="casino-card__small-card casino-small-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__image-block"
                                                    >
                                                        <div className="casino-small-card__image ibg">
                                                            <img
                                                                src={Tsars}
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item casino-card">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__image-block"
                                            >
                                                <div className="casino-card__image ibg">
                                                    <img
                                                        src={casinoCards01}
                                                        alt="Big Fat Race to $100 Moon coins"
                                                    />
                                                </div>
                                                <a
                                                    href=""
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                >
                                                    Play
                                                </a>
                                            </a>
                                            <div className="casino-card__content">
                                                <div className="casino-card__small-card casino-small-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__image-block"
                                                    >
                                                        <div className="casino-small-card__image ibg">
                                                            <img
                                                                src={Playkasino}
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item casino-card">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__image-block"
                                            >
                                                <div className="casino-card__image ibg">
                                                    <img
                                                        src={casinoCards07}
                                                        alt="Big Fat Race to $100 Moon coins "
                                                    />
                                                </div>
                                                <a
                                                    href=""
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                >
                                                    Play
                                                </a>
                                            </a>
                                            <div className="casino-card__content">
                                                <div className="casino-card__small-card casino-small-card">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__image-block"
                                                    >
                                                        <div className="casino-small-card__image ibg">
                                                            <img
                                                                src={
                                                                    CasinoVibes
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div
                            ref={paginationRef}
                            className="bottom-slider__pagination new-bonuses-gamble__pagination swiper-pagination"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
