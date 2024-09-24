import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useEffect, useRef, useState } from "react"

import bigImg03 from "../../assets/img/big-img/03.jpg"
import vavadaImage from "../../assets/img/different-casino/vavada.png"
import bcGameImage from "../../assets/img/different-casino/bc-game.png"
import roySpinsImage from "../../assets/img/different-casino/roy-spins.png"
import thirtyBetImage from "../../assets/img/different-casino/30bet.png"
import fairspinImage from "../../assets/img/different-casino/fairspin.png"
import luckyBlockImage from "../../assets/img/different-casino/lucky-block.png"

export const TopGainersCasinos = () => {
    const sliderRef = useRef<any>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)
    const [screenState, setScreenState] = useState<number | "auto">(1);

    useEffect(() => {
        const handleResize = () => {
          const width = window.innerWidth;
          if (width < 1020) {
            setScreenState("auto");
          }
          else if (width < 1220) {
            setScreenState(1);
          } else if (width < 1600) {
            setScreenState(2);
          } else if (width > 2100) {
            setScreenState(3);
          }
        };

        // Вызовем функцию сразу для установки правильного состояния
        handleResize();

        // Добавляем слушателя события ресайза
        window.addEventListener("resize", handleResize);

        // Удаляем слушателя при размонтировании компонента
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    useEffect(() => {
        if (sliderRef?.current && paginationRef?.current) {
            const swiper = sliderRef?.current?.swiper
            if (swiper && paginationRef?.current) {
                //@ts-ignore
                swiper.params.pagination.el = paginationRef.current
                swiper.pagination.init()
                swiper.pagination.render()
                swiper.pagination.update()
            }
        }
    }, [])
    return (
        <section className="main-gamble__top-gainers-casinos top-gainers-casinos-gamble main-gamble__baner-block">
            <div className="top-gainers-casinos-gamble__container container">
                <div className="top-gainers-casinos-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Top Gainers Casinos
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
                <div className="top-gainers-casinos-gamble__row main-gamble__row-block row-block row-block__right">
                    <div className="top-gainers-casinos-gamble__slider row-block__slider slider">
                        <div className="slider__body" style={{overflow:'hidden'}}>
                            <div className="top-gainers-casinos-gamble__swiper slider__swiper swiper">
                                <Swiper
                                    slidesPerView={screenState}
                                    className="slider__wrapper swiper-wrapper"
                                    spaceBetween={20}
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
                                        <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                            <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                <div className="different-casino-standart">
                                                    <div className="different-casino-standart__body">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-standart__image-block"
                                                        >
                                                            <span className="different-casino-standart__image ibg">
                                                                <img
                                                                    src={
                                                                        vavadaImage
                                                                    }
                                                                    alt="vavada"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="different-casino-standart__content">
                                                            <div className="different-casino-standart__content-row">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__name"
                                                                >
                                                                    200% up to
                                                                    €200 and 50
                                                                    spins
                                                                </a>
                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                                        <span className="tags-casino-card__item-label">
                                                                            WR:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            4.0x
                                                                        </span>
                                                                    </div>
                                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                                        <span className="tags-casino-card__item-label">
                                                                            Min
                                                                            Dep:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            €10
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="info-casino-card__stake">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="info-casino-card__stake-link"
                                                                    >
                                                                        Stake
                                                                        Casino
                                                                    </a>
                                                                    <div className="info-casino-card__stake-rating">
                                                                        <span className="info-casino-card__stake-rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="info-casino-card__stake__rating-number">
                                                                            4.7
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                <div className="different-casino-standart">
                                                    <div className="different-casino-standart__body">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-standart__image-block"
                                                        >
                                                            <span className="different-casino-standart__image ibg">
                                                                <img
                                                                    src={
                                                                        bcGameImage
                                                                    }
                                                                    alt="bc-game"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="different-casino-standart__content">
                                                            <div className="different-casino-standart__content-row">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__name"
                                                                >
                                                                    200% up to
                                                                    €150
                                                                </a>
                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                                        <span className="tags-casino-card__item-label">
                                                                            WR:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            4.0x
                                                                        </span>
                                                                    </div>
                                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                                        <span className="tags-casino-card__item-label">
                                                                            Min
                                                                            Dep:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            €10
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="info-casino-card__stake">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="info-casino-card__stake-link"
                                                                    >
                                                                        Stake
                                                                        Casino
                                                                    </a>
                                                                    <div className="info-casino-card__stake-rating">
                                                                        <span className="info-casino-card__stake-rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="info-casino-card__stake__rating-number">
                                                                            4.7
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                            <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                <div className="different-casino-standart">
                                                    <div className="different-casino-standart__body">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-standart__image-block"
                                                        >
                                                            <span className="different-casino-standart__image ibg">
                                                                <img
                                                                    src={
                                                                        roySpinsImage
                                                                    }
                                                                    alt="roy-spins"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="different-casino-standart__content">
                                                            <div className="different-casino-standart__content-row">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__name"
                                                                >
                                                                    200% up to
                                                                    €150
                                                                </a>
                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                                        <span className="tags-casino-card__item-label">
                                                                            WR:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            4.0x
                                                                        </span>
                                                                    </div>
                                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                                        <span className="tags-casino-card__item-label">
                                                                            Min
                                                                            Dep:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            €10
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="info-casino-card__stake">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="info-casino-card__stake-link"
                                                                    >
                                                                        Stake
                                                                        Casino
                                                                    </a>
                                                                    <div className="info-casino-card__stake-rating">
                                                                        <span className="info-casino-card__stake-rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="info-casino-card__stake__rating-number">
                                                                            4.7
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                <div className="different-casino-standart">
                                                    <div className="different-casino-standart__body">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-standart__image-block"
                                                        >
                                                            <span className="different-casino-standart__image ibg">
                                                                <img
                                                                    src={
                                                                        thirtyBetImage
                                                                    }
                                                                    alt="30bet"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="different-casino-standart__content">
                                                            <div className="different-casino-standart__content-row">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__name"
                                                                >
                                                                    200% up to
                                                                    €200 and 50
                                                                    spins
                                                                </a>
                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                                        <span className="tags-casino-card__item-label">
                                                                            WR:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            4.0x
                                                                        </span>
                                                                    </div>
                                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                                        <span className="tags-casino-card__item-label">
                                                                            Min
                                                                            Dep:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            €10
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="info-casino-card__stake">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="info-casino-card__stake-link"
                                                                    >
                                                                        Stake
                                                                        Casino
                                                                    </a>
                                                                    <div className="info-casino-card__stake-rating">
                                                                        <span className="info-casino-card__stake-rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="info-casino-card__stake__rating-number">
                                                                            4.7
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                            <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                <div className="different-casino-standart">
                                                    <div className="different-casino-standart__body">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-standart__image-block"
                                                        >
                                                            <span className="different-casino-standart__image ibg">
                                                                <img
                                                                    src={
                                                                        fairspinImage
                                                                    }
                                                                    alt="fairspin"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="different-casino-standart__content">
                                                            <div className="different-casino-standart__content-row">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__name"
                                                                >
                                                                    200% up to
                                                                    €200 and 50
                                                                    spins
                                                                </a>
                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                                        <span className="tags-casino-card__item-label">
                                                                            WR:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            4.0x
                                                                        </span>
                                                                    </div>
                                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                                        <span className="tags-casino-card__item-label">
                                                                            Min
                                                                            Dep:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            €10
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="info-casino-card__stake">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="info-casino-card__stake-link"
                                                                    >
                                                                        Stake
                                                                        Casino
                                                                    </a>
                                                                    <div className="info-casino-card__stake-rating">
                                                                        <span className="info-casino-card__stake-rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="info-casino-card__stake__rating-number">
                                                                            4.7
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                <div className="different-casino-standart">
                                                    <div className="different-casino-standart__body">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-standart__image-block"
                                                        >
                                                            <span className="different-casino-standart__image ibg">
                                                                <img
                                                                    src={
                                                                        luckyBlockImage
                                                                    }
                                                                    alt="lucky-block"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="different-casino-standart__content">
                                                            <div className="different-casino-standart__content-row">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__name"
                                                                >
                                                                    200% up to
                                                                    €150
                                                                </a>
                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                                        <span className="tags-casino-card__item-label">
                                                                            WR:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            4.0x
                                                                        </span>
                                                                    </div>
                                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                                        <span className="tags-casino-card__item-label">
                                                                            Min
                                                                            Dep:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            €10
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="info-casino-card__stake">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="info-casino-card__stake-link"
                                                                    >
                                                                        Stake
                                                                        Casino
                                                                    </a>
                                                                    <div className="info-casino-card__stake-rating">
                                                                        <span className="info-casino-card__stake-rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="info-casino-card__stake__rating-number">
                                                                            4.7
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                            <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                <div className="different-casino-standart">
                                                    <div className="different-casino-standart__body">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-standart__image-block"
                                                        >
                                                            <span className="different-casino-standart__image ibg">
                                                                <img
                                                                    src={
                                                                        fairspinImage
                                                                    }
                                                                    alt="fairspin"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="different-casino-standart__content">
                                                            <div className="different-casino-standart__content-row">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__name"
                                                                >
                                                                    200% up to
                                                                    €200 and 50
                                                                    spins
                                                                </a>
                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                                        <span className="tags-casino-card__item-label">
                                                                            WR:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            4.0x
                                                                        </span>
                                                                    </div>
                                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                                        <span className="tags-casino-card__item-label">
                                                                            Min
                                                                            Dep:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            €10
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="info-casino-card__stake">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="info-casino-card__stake-link"
                                                                    >
                                                                        Stake
                                                                        Casino
                                                                    </a>
                                                                    <div className="info-casino-card__stake-rating">
                                                                        <span className="info-casino-card__stake-rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="info-casino-card__stake__rating-number">
                                                                            4.7
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                <div className="different-casino-standart">
                                                    <div className="different-casino-standart__body">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-standart__image-block"
                                                        >
                                                            <span className="different-casino-standart__image ibg">
                                                                <img
                                                                    src={
                                                                        luckyBlockImage
                                                                    }
                                                                    alt="lucky-block"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="different-casino-standart__content">
                                                            <div className="different-casino-standart__content-row">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="different-casino-standart__name"
                                                                >
                                                                    200% up to
                                                                    €150
                                                                </a>
                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                                        <span className="tags-casino-card__item-label">
                                                                            WR:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            4.0x
                                                                        </span>
                                                                    </div>
                                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                                        <span className="tags-casino-card__item-label">
                                                                            Min
                                                                            Dep:
                                                                        </span>
                                                                        <span className="tags-casino-card__item-value">
                                                                            €10
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="info-casino-card__stake">
                                                                    <a
                                                                        href=""
                                                                        aria-label="Put your description here."
                                                                        target="_blank"
                                                                        className="info-casino-card__stake-link"
                                                                    >
                                                                        Stake
                                                                        Casino
                                                                    </a>
                                                                    <div className="info-casino-card__stake-rating">
                                                                        <span className="info-casino-card__stake-rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="info-casino-card__stake__rating-number">
                                                                            4.7
                                                                        </span>
                                                                    </div>
                                                                </div>
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
                    </div>
                    <div className="row-block__baner row-block__baner_right baner-row-block">
                        <div className="baner-row-block__slider">
                            <div className="baner-row-block__slider-body">
                                <div className="baner-row-block__swiper top-gainers-casinos-baner__swiper swiper">
                                    <div className="baner-row-block__wrapper swiper-wrapper">
                                        <Swiper
                                            slidesPerView={1}
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
                                        >
                                            <SwiperSlide>
                                                <div className="baner-row-block__slide slide-baner-row-block swiper-slide">
                                                    <div className="slide-baner-row-block__item item-baner-row-block">
                                                        <div className="item-baner-row-block__image ibg">
                                                            <img
                                                                src={bigImg03}
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
                                                                            Casino
                                                                        </a>
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
                                                                src={bigImg03}
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
                                                                                src="/src/assets/img/casino-small-cards/Playamo.jpg"
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
                                            </SwiperSlide>{" "}
                                            <SwiperSlide>
                                                <div className="baner-row-block__slide slide-baner-row-block swiper-slide">
                                                    <div className="slide-baner-row-block__item item-baner-row-block">
                                                        <div className="item-baner-row-block__image ibg">
                                                            <img
                                                                src={bigImg03}
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
                                    ref={paginationRef}
                                    className="baner-row-block__pagination bottom-slider__pagination top-gainers-casinos-baner__pagination swiper-pagination"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
