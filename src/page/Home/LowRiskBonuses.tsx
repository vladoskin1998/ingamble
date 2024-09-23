import { useRef, useEffect } from "react"
import { SwiperRef } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import bcGameImage from "../../assets/img/different-casino/bc-game.png"
import vavadaImage from "../../assets/img/different-casino/vavada.png"
import luckyBlockImage from "../../assets/img/different-casino/lucky-block.png"
import shieldIcon from "../../assets/img/icons/shield.svg"

import rollingSlotsImage from "../../assets/img/different-casino/rolling-slots.png"

import casinoVibesImage from "../../assets/img/different-casino/casino-vibes.png"
import playamoImage from "../../assets/img/different-casino/playamo.png"
import fairspinImage from "../../assets/img/different-casino/fairspin.png"
import thirtyBetImage from "../../assets/img/different-casino/30bet.png"

import lightning from "../../assets/img/icons/lightning.svg"

export const LowRiskBonuses = () => {
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
        <section className="main-gamble__low-risk-bonuses low-risk-bonuses-gamble main-gamble__different-casino-bg">
            <div className="low-risk-bonuses-gamble__container container">
                <div className="low-risk-bonuses-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <span className="top__title-icon">
                                    <img
                                        src= {lightning}
                                        alt="lightning"
                                    />
                                </span>
                                <h2 className="top__title">Low risk Bonuses</h2>
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
                <div className="low-risk-bonuses-gamble__slider slider">
                    <div className="slider__body">
                        <div className="low-risk-bonuses-gamble__swiper slider__swiper swiper">
                            <Swiper
                             
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
                                                            src={shieldIcon}
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

                                <SwiperSlide  className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                 
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
                                                            src={shieldIcon}
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
                                                        src={casinoVibesImage}
                                                        alt="casino-vibes"
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
                                                            src={shieldIcon}
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
                                                        src={bcGameImage}
                                                        alt="bc-game"
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
                                                            src={shieldIcon}
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
                                                        src={vavadaImage}
                                                        alt="vavada"
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
                                                    Vavada
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
                                                            src={shieldIcon}
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
                                                        src={luckyBlockImage}
                                                        alt="lucky-block"
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
                                                    Lucky Block
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
                                                            src={shieldIcon}
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
                                                        src={playamoImage}
                                                        alt="playamo"
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
                                                            src={shieldIcon}
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
                                                        src={fairspinImage}
                                                        alt="fairspin"
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
                                                    Fairspin
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
                                                            src={shieldIcon}
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
                                                            src={shieldIcon}
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
                                                        src={bcGameImage}
                                                        alt="bc-game"
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
                                                            src={shieldIcon}
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
                    <div className="slider__bottom bottom-slider">
                        <div
                            ref={paginationRef}
                            className="bottom-slider__pagination low-risk-bonuses-gamble__pagination swiper-pagination"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
