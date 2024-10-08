import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useRef, useEffect } from "react"

import VavadaImage from "../../assets/img/different-casino/vavada.png"
import RoySpinsImage from "../../assets/img/different-casino/roy-spins.png"
import BcGameImage from "../../assets/img/different-casino/bc-game.png"
import FairspinImage from "../../assets/img/different-casino/fairspin.png"
import PlayamoImage from "../../assets/img/different-casino/playamo.png"
import CasinoVibesImage from "../../assets/img/different-casino/casino-vibes.png"
import LuckyBlockImage from "../../assets/img/different-casino/lucky-block.png"
import ThirtyBetImage from "../../assets/img/different-casino/30bet.png"


export const VPNFriendlyCasinos = () => {

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
    <section className="main-gamble__vpn-friendly-casinos-2 vpn-friendly-casinos-2-gamble main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
    <div className="vpn-friendly-casinos-2-gamble__container container">
        <div className="vpn-friendly-casinos-2-gamble__top top">
            <div className="top__row">
                <div className="top__column">
                    <div className="top__title-block">
                        <h2 className="top__title">
                            VPN Friendly Casinos
                        </h2>
                    </div>
                </div>
                <div className="top__column">
                    <a
                        href="/see-all?key=21234567"
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
        <div className="vpn-friendly-casinos-2-gamble__slider slider">
            <div className="slider__body">
                <div className="vpn-friendly-casinos-2-gamble__swiper slider__swiper swiper">
                    <Swiper      ref={sliderRef}
                                className="slider__wrapper swiper-wrapper"
                                slidesPerView="auto"
                                
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
                                }}>
                        <SwiperSlide className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
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
                                                    src={VavadaImage}
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
                                                    200% up
                                                    to €200
                                                    and 50
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
                                                    src={BcGameImage}
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
                                                    200% up
                                                    to €150
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
                        </SwiperSlide>
                        <SwiperSlide className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
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
                                                    src={RoySpinsImage}
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
                                                    200% up
                                                    to €150
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
                                                    src={ThirtyBetImage}
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
                                                    200% up
                                                    to €200
                                                    and 50
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
                        </SwiperSlide>
                        <SwiperSlide className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
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
                                                    src={FairspinImage}
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
                                                    200% up
                                                    to €200
                                                    and 50
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
                                                    src={LuckyBlockImage}
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
                                                    200% up
                                                    to €150
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
                        </SwiperSlide>
                        <SwiperSlide className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
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
                                                    src={CasinoVibesImage}
                                                    alt="casino-vibes"
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
                                                    200% up
                                                    to €150
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
                                                    src={PlayamoImage}
                                                    alt="playamo"
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
                                                    200% up
                                                    to €200
                                                    and 50
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
                        </SwiperSlide>
                        <SwiperSlide className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
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
                                                    src={VavadaImage}
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
                                                    200% up
                                                    to €200
                                                    and 50
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
                                                    src={BcGameImage}
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
                                                    200% up
                                                    to €150
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
                        </SwiperSlide>
                        <SwiperSlide className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
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
                                                    src={RoySpinsImage}
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
                                                    200% up
                                                    to €150
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
                                                    src={ThirtyBetImage}
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
                                                    200% up
                                                    to €200
                                                    and 50
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
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="slider__bottom bottom-slider">
                <div ref={paginationRef} className="bottom-slider__pagination vpn-friendly-casinos-2-gamble__pagination swiper-pagination"></div>
            </div>
        </div>
    </div>
</section>
  )
}
