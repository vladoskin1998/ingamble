import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useRef, useEffect } from "react"

export default function FastestWithdrawalCasinos() {
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
        <section className="main-gamble__payn-play-casinos payn-play-casinos-gamble">
            <div className="payn-play-casinos-gamble__container container">
                <div className="payn-play-casinos-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Fastest Withdrawal Casinos
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
                <div className="payn-play-casinos-gamble__slider slider">
                    <div className="slider__body">
                        <div className="payn-play-casinos-gamble__swiper slider__swiper swiper">
                            <Swiper    ref={sliderRef}
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
                                }}>
                                <SwiperSlide><div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/rolling-slots.png"
                                                            alt="rolling-slots"
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
                                                            Rolling Slots Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                200% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/30bet.png"
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
                                                            30 Bet Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                150% Up to $1000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/casino-vibes.png"
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
                                                            Casino Vibes
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                350% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide>   <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/fairspin.png"
                                                            alt="Fairspin"
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
                                                            Fairspin
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                200% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/bc-game.png"
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
                                                            BC.GAME Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                150% Up to $1000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/vavada.png"
                                                            alt="Vavada"
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
                                                            Vavada
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                350% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/rolling-slots.png"
                                                            alt="rolling-slots"
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
                                                            Rolling Slots Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                200% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/30bet.png"
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
                                                            30 Bet Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                150% Up to $1000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/casino-vibes.png"
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
                                                            Casino Vibes
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                350% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide>  <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/fairspin.png"
                                                            alt="Fairspin"
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
                                                            Fairspin
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                200% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/bc-game.png"
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
                                                            BC.GAME Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                150% Up to $1000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/vavada.png"
                                                            alt="Vavada"
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
                                                            Vavada
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                350% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide>  <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/rolling-slots.png"
                                                            alt="rolling-slots"
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
                                                            Rolling Slots Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                200% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/30bet.png"
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
                                                            30 Bet Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                150% Up to $1000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/casino-vibes.png"
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
                                                            Casino Vibes
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                350% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/fairspin.png"
                                                            alt="Fairspin"
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
                                                            Fairspin
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                200% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/bc-game.png"
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
                                                            BC.GAME Casino
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                150% Up to $1000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
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
                                                            src="/src/assets/img/different-casino/vavada.png"
                                                            alt="Vavada"
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
                                                            Vavada
                                                        </a>
                                                        <div className="different-casino-standart__info">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="different-casino-standart__info-link"
                                                            >
                                                                350% Up to $2000
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-standart__btn-visit"
                                                    >
                                                        Visit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                
                             
                               
                              
                              
                                
                            </Swiper>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div ref={paginationRef}className="bottom-slider__pagination payn-play-casinos-gamble__pagination swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
