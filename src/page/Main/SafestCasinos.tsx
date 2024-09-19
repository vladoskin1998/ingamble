import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

import {  useEffect, useRef } from "react"
import bigImg from "../../assets/img/big-img/01.jpg"
import Playamo from "../../assets/img/casino-small-cards/Playamo.jpg"
import shield from "../../assets/img/icons/shield.svg"
import security from "/src/assets/img/icons/security.svg"
import bcGameImage from "../../assets/img/different-casino/bc-game.png";
import playamoImage from "../../assets/img/different-casino/playamo.png";
import rollingSlotsImage from "../../assets/img/different-casino/rolling-slots.png";
import shieldIcon from "../../assets/img/icons/shield.svg";
import casinoVibesImage from "../../assets/img/different-casino/casino-vibes.png";

import thirtyBetImage from "../../assets/img/different-casino/30bet.png";

export const SafestCasinos = () => {
    const sliderRef = useRef<any>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)



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
        <section className="main-gamble__safest-casino-2 safest-casino-2-gamble main-gamble__different-casino-bg main-gamble__baner-block">
            <div className="safest-casino-2-gamble__container container">
                <div className="safest-casino-2-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <span className="top__title-icon">
                                    <img
                                        src={security}
                                        alt="security"
                                    />
                                </span>
                                <h2 className="top__title">Safest Casinos</h2>
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
                <div className="safest-casino-2-gamble__row main-gamble__row-block row-block row-block__left">
                    <div className="row-block__baner row-block__baner_left baner-row-block">
                        <div className="baner-row-block__slider">
                            <div className="baner-row-block__slider-body">
                                <div className="baner-row-block__swiper safest-casino-2-baner__swiper swiper">
                                    <div className="baner-row-block__wrapper swiper-wrapper">
                                        <Swiper
                                            ref={sliderRef}
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
                                            //     onBeforeInit={(swiper:any) => {
                                            //         swiperRef.current = swiper;

                                            //    }}
                                        >
                                            <SwiperSlide>
                                                <div className="baner-row-block__slide slide-baner-row-block swiper-slide">
                                                    <div className="slide-baner-row-block__item item-baner-row-block">
                                                        <div className="item-baner-row-block__image ibg">
                                                            <img
                                                                src={bigImg}
                                                                alt="baner"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="item-baner-row-block__row"
                                                        >
                                                            <div className="item-baner-row-block__column">
                                                                <div className="item-baner-row-block__small-card casino-small-card">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="casino-small-card__image-block"
                                                                    >
                                                                        <div className="casino-small-card__image ibg">
                                                                            <img
                                                                                src={
                                                                                    Playamo
                                                                                }
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
                                                                                VPN
                                                                                Friendly
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="item-baner-row-block__index">
                                                                    <div className="item-baner-row-block__index-icon">
                                                                        <img
                                                                            src={
                                                                                shield
                                                                            }
                                                                            alt="shield"
                                                                        />
                                                                    </div>
                                                                    <div className="item-baner-row-block__index-number">
                                                                        9.7
                                                                    </div>
                                                                    <div className="item-baner-row-block__index-text">
                                                                        Safety
                                                                        Index
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    className="item-baner-row-block__title"
                                                                >
                                                                    $30,000
                                                                    Rocket
                                                                    <br />
                                                                    Launcher
                                                                    <br />
                                                                    With 10x
                                                                    Scope
                                                                </a>
                                                            </div>

                                                            <div className="item-baner-row-block__column">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="item-baner-row-block__btn casino-card__bnt"
                                                                >
                                                                    Play
                                                                </a>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                       
                                                <div className="baner-row-block__slide slide-baner-row-block swiper-slide">
                                                    <div className="slide-baner-row-block__item item-baner-row-block">
                                                        <div className="item-baner-row-block__image ibg">
                                                            <img
                                                                src="/src/assets/img/big-img/01.jpg"
                                                                alt="baner"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="item-baner-row-block__row"
                                                        >
                                                            <div className="item-baner-row-block__column">
                                                                <div className="item-baner-row-block__small-card casino-small-card">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="casino-small-card__image-block"
                                                                    >
                                                                        <div className="casino-small-card__image ibg">
                                                                            <img
                                                                                src="/src/assets/img/casino-small-cards/Tsars.jpg"
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
                                                                                VPN
                                                                                Friendly
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="item-baner-row-block__index">
                                                                    <div className="item-baner-row-block__index-icon">
                                                                        <img
                                                                            src={
                                                                                shield
                                                                            }
                                                                            alt="shield"
                                                                        />
                                                                    </div>
                                                                    <div className="item-baner-row-block__index-number">
                                                                        9.7
                                                                    </div>
                                                                    <div className="item-baner-row-block__index-text">
                                                                        Safety
                                                                        Index
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    className="item-baner-row-block__title"
                                                                >
                                                                    $30,000
                                                                    Rocket
                                                                    <br />
                                                                    Launcher
                                                                    <br />
                                                                    With 10x
                                                                    Scope
                                                                </a>
                                                            </div>
                                                            <div className="item-baner-row-block__column">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="item-baner-row-block__btn casino-card__bnt"
                                                                >
                                                                    Play
                                                                </a>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                {" "}
                                                <div className="baner-row-block__slide slide-baner-row-block swiper-slide">
                                                    <div className="slide-baner-row-block__item item-baner-row-block">
                                                        <div className="item-baner-row-block__image ibg">
                                                            <img
                                                                src="/src/assets/img/big-img/01.jpg"
                                                                alt="baner"
                                                            />
                                                        </div>
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="item-baner-row-block__row"
                                                        >
                                                            <div className="item-baner-row-block__column">
                                                                <div className="item-baner-row-block__small-card casino-small-card">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="casino-small-card__image-block"
                                                                    >
                                                                        <div className="casino-small-card__image ibg">
                                                                            <img
                                                                                src="/src/assets/img/casino-small-cards/Casoo.jpg"
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
                                                                                VPN
                                                                                Friendly
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="item-baner-row-block__index">
                                                                    <div className="item-baner-row-block__index-icon">
                                                                        <img
                                                                            src={
                                                                                shield
                                                                            }
                                                                            alt="shield"
                                                                        />
                                                                    </div>
                                                                    <div className="item-baner-row-block__index-number">
                                                                        9.7
                                                                    </div>
                                                                    <div className="item-baner-row-block__index-text">
                                                                        Safety
                                                                        Index
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    className="item-baner-row-block__title"
                                                                >
                                                                    $30,000
                                                                    Rocket
                                                                    <br />
                                                                    Launcher
                                                                    <br />
                                                                    With 10x
                                                                    Scope
                                                                </a>
                                                            </div>
                                                            <div className="item-baner-row-block__column">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="item-baner-row-block__btn casino-card__bnt"
                                                                >
                                                                    Play
                                                                </a>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="baner-row-block__slider-bottom">
                                <div
                                    id="safest-casino-pagination-1"
                                    ref={paginationRef}
                                    className="baner-row-block__pagination bottom-slider__pagination safest-casino-2-baner__pagination swiper-pagination"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="safest-casino-2-gamble__slider row-block__slider slider">
                        <div className="slider__body">
                            <div className="safest-casino-2-gamble__swiper slider__swiper swiper">
                                <div>
                                    <Swiper
                                        slidesPerView="auto"
                                
                                        spaceBetween={20}
                                        modules={[Pagination]}
                                    

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
                                        <SwiperSlide className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                            <div className="slide-slider__item different-casino-bg">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="different-casino-bg__image-block"
                                                >
                                                    <span className="different-casino-bg__image ibg">
                                                        <img
                                                            src={rollingSlotsImage}
                                                            alt="rolling-slots"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="different-casino-bg__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-bg__name"
                                                    >
                                                        Rolling Slots Casino
                                                    </a>
                                                    <div className="different-casino-bg__info">
                                                        <span className="different-casino-bg__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="different-casino-bg__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="different-casino-bg__rating">
                                                        <span className="different-casino-bg__rating-icon">
                                                            <img
                                                                src={shield}
                                                                alt="shield"
                                                            />
                                                        </span>
                                                        <span className="different-casino-bg__rating-number">
                                                            9.5
                                                        </span>
                                                        <span className="different-casino-bg__rating-text">
                                                            Safety Index
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                            <div className="slide-slider__item different-casino-bg">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="different-casino-bg__image-block"
                                                >
                                                    <span className="different-casino-bg__image ibg">
                                                        <img
                                                            src={thirtyBetImage}
                                                            alt="30bet"
                                                             loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="different-casino-bg__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-bg__name"
                                                    >
                                                        30 Bet Casino
                                                    </a>
                                                    <div className="different-casino-bg__info">
                                                        <span className="different-casino-bg__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="different-casino-bg__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="different-casino-bg__rating">
                                                        <span className="different-casino-bg__rating-icon">
                                                            <img
                                                                src={shield}
                                                                alt="shield"
                                                            />
                                                        </span>
                                                        <span className="different-casino-bg__rating-number">
                                                            9.7
                                                        </span>
                                                        <span className="different-casino-bg__rating-text">
                                                            Safety Index
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                            <div className="slide-slider__item different-casino-bg">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="different-casino-bg__image-block"
                                                >
                                                    <span className="different-casino-bg__image ibg">
                                                        <img
                                                            src={casinoVibesImage}
                                                            alt="casino-vibes"
                                                             loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="different-casino-bg__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-bg__name"
                                                    >
                                                        Casino Vibes
                                                    </a>
                                                    <div className="different-casino-bg__info">
                                                        <span className="different-casino-bg__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="different-casino-bg__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="different-casino-bg__rating">
                                                        <span className="different-casino-bg__rating-icon">
                                                            <img
                                                                src={shieldIcon }
                                                                alt="shield"
                                                            />
                                                        </span>
                                                        <span className="different-casino-bg__rating-number">
                                                            8.5
                                                        </span>
                                                        <span className="different-casino-bg__rating-text">
                                                            Safety Index
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                            <div className="slide-slider__item different-casino-bg">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="different-casino-bg__image-block"
                                                >
                                                    <span className="different-casino-bg__image ibg">
                                                        <img
                                                            src={bcGameImage}
                                                            alt="bc-game"
                                                             loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="different-casino-bg__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-bg__name"
                                                    >
                                                        BC.GAME
                                                    </a>
                                                    <div className="different-casino-bg__info">
                                                        <span className="different-casino-bg__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="different-casino-bg__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="different-casino-bg__rating">
                                                        <span className="different-casino-bg__rating-icon">
                                                            <img
                                                                src={shieldIcon }
                                                                alt="shield"
                                                            />
                                                        </span>
                                                        <span className="different-casino-bg__rating-number">
                                                            9.1
                                                        </span>
                                                        <span className="different-casino-bg__rating-text">
                                                            Safety Index
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                            <div className="slide-slider__item different-casino-bg">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="different-casino-bg__image-block"
                                                >
                                                    <span className="different-casino-bg__image ibg">
                                                        <img
                                                            src={playamoImage}
                                                            alt="playamo"
                                                             loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="different-casino-bg__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-bg__name"
                                                    >
                                                        Playamo
                                                    </a>
                                                    <div className="different-casino-bg__info">
                                                        <span className="different-casino-bg__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="different-casino-bg__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="different-casino-bg__rating">
                                                        <span className="different-casino-bg__rating-icon">
                                                            <img
                                                                src={shieldIcon }
                                                                alt="shield"
                                                            />
                                                        </span>
                                                        <span className="different-casino-bg__rating-number">
                                                            9.1
                                                        </span>
                                                        <span className="different-casino-bg__rating-text">
                                                            Safety Index
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                            <div className="slide-slider__item different-casino-bg">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="different-casino-bg__image-block"
                                                >
                                                    <span className="different-casino-bg__image ibg">
                                                        <img
                                                            src={rollingSlotsImage}
                                                            alt="rolling-slots"
                                                             loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="different-casino-bg__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-bg__name"
                                                    >
                                                        Rolling Slots Casino
                                                    </a>
                                                    <div className="different-casino-bg__info">
                                                        <span className="different-casino-bg__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="different-casino-bg__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="different-casino-bg__rating">
                                                        <span className="different-casino-bg__rating-icon">
                                                            <img
                                                                src={shieldIcon }
                                                                alt="shield"
                                                            />
                                                        </span>
                                                        <span className="different-casino-bg__rating-number">
                                                            9.5
                                                        </span>
                                                        <span className="different-casino-bg__rating-text">
                                                            Safety Index
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
        </section>
    )
}
