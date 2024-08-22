import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"

import casinoCard09 from "../../assets/img/casino-cards/09.jpg"
import bigFatRaceImage from "../../assets/img/casino-cards/03.jpg"
import crazyCashBombImage from "../../assets/img/casino-cards/07.jpg"
import newYearBetRaceImage01 from "../../assets/img/casino-cards/01.jpg"
import newYearBetRaceImage04 from "../../assets/img/casino-cards/04.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { SwiperRef } from "swiper/react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "swiper/css/pagination"
import { useCallback, useEffect, useRef, useState } from "react"

const MoreStakeCasinoBonuses = ({ title }: { title: string }) => {
    const [isMobile, setIsMobile] = useState(false)
    const sliderRef = useRef<SwiperRef | null>(null)
    const [active, setActive] = useState<number>(0)
    const slideTo = useCallback((s: number) => {
        if (!sliderRef.current) return

        setActive(s)

        sliderRef.current.swiper.slideTo(s)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 650.98)
        }

        handleResize() // Call once on mount
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <section className="simple-bonus__more-stake more-staket-simple-bonus">
            <div className="more-staket-simple-bonus__container container">
                <div className="more-staket-simple-bonus__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">{title}</h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                rel="nofollow noopener"
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
                <div className="more-staket-simple-bonus__slider slider">
                    <div className="slider__body">
                        <div className="more-staket-simple-bonus__swiper slider__swiper swiper">
                            <div className="slider__wrapper">
                                <Swiper
                                    slidesPerView="auto"
                                    spaceBetween={10}
                                    ref={sliderRef}
                                >
                                    <SwiperSlide>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        <img
                                                            src={casinoCard09}
                                                            alt="Crazy Cash Bomb Winnings $1,000,000 asdasdas WQEasdasd"
                                                            loading="lazy"
                                                        />
                                                        {/* <LazyLoadImage
                                            src={casinoCard09}
                                            alt="Crazy Cash Bomb Winnings $1,000,000 asdasdas WQEasdasd"
                                            effect="blur"
                                        /> */}
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__info info-casino-card">
                                                        <div className="info-casino-card__stake">
                                                            <a
                                                                rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Crazy Cash Bomb Winnings
                                                        $1,000,000 asdasdas
                                                        WQEasdasd
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
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
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        <img
                                                            src={
                                                                bigFatRaceImage
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                        />
                                                        {/* <LazyLoadImage
                                            src={
                                                bigFatRaceImage
                                            }
                                            alt="Big Fat Race to$100 Moon coins"
                                            effect="blur" 
                                        />*/}
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__info info-casino-card">
                                                        <div className="info-casino-card__stake">
                                                            <a
                                                                rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Big Fat Race to$100 Moon
                                                        coins
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
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
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                            src={
                                                crazyCashBombImage
                                            }
                                            alt="Crazy Cash Bomb Winnings $1,000,"
                                            effect="blur"
                                        /> */}
                                                        <img
                                                            src={
                                                                crazyCashBombImage
                                                            }
                                                            alt="Crazy Cash Bomb Winnings $1,000,"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__info info-casino-card">
                                                        <div className="info-casino-card__stake">
                                                            <a
                                                                rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Crazy Cash Bomb Winnings
                                                        $1,000,
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
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
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                            src={
                                                bigFatRaceImage
                                            }
                                            alt="Big Fat Race to $100 Moon coins"
                                            effect="blur"
                                        /> */}
                                                        <img
                                                            src={
                                                                bigFatRaceImage
                                                            }
                                                            alt="Big Fat Race to$100 Moon coins"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__info info-casino-card">
                                                        <div className="info-casino-card__stake">
                                                            <a
                                                                rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        Big Fat Race to $100
                                                        Moon coins
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
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
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                            src={
                                                newYearBetRaceImage01
                                            }
                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                            effect="blur"
                                        /> */}
                                                        <img
                                                            src={
                                                                newYearBetRaceImage01
                                                            }
                                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__info info-casino-card">
                                                        <div className="info-casino-card__stake">
                                                            <a
                                                                rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        New Year Bet Race -
                                                        $30,000 Rocket Launcher
                                                        With 10x Scope
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
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
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        {/* <LazyLoadImage
                                            src={
                                                newYearBetRaceImage04
                                            }
                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                            effect="blur"
                                        /> */}
                                                        <img
                                                            src={
                                                                newYearBetRaceImage04
                                                            }
                                                            alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__info info-casino-card">
                                                        <div className="info-casino-card__stake">
                                                            <a
                                                                rel="nofollow noopener"
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="info-casino-card__stake-link"
                                                            >
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <LazyLoadImage
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
                                                                    effect="blur"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        rel="nofollow noopener"
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-card__name"
                                                    >
                                                        New Year Bet Race -
                                                        $30,000 Rocket Launcher
                                                        With 10x Scope
                                                    </a>
                                                    <div className="casino-card__tags tags-casino-card">
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
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €10
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
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
                    <div className="slider__bottom bottom-slider">
                        <div className="bottom-slider__pagination more-staket-simple-bonus__pagination swiper-pagination">
                            <button
                                className={`swiper-pagination-bullet ${
                                    active === 0 && "swiper-pagination-bullet-active"
                                } `}
                                onClick={() => slideTo(0)}
                            ></button>
                            {isMobile &&
                                [1,2, 3, 4].map((item) => (
                                    <button
                                        onClick={() => slideTo(item)}
                                        className={`swiper-pagination-bullet ${
                                            active === item &&
                                            "swiper-pagination-bullet-active"
                                        } `}
                                    ></button>
                                ))}
                            <button
                                onClick={() => slideTo(5)}
                                className={`swiper-pagination-bullet ${
                                    active === 5 && "swiper-pagination-bullet-active"
                                } `}
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreStakeCasinoBonuses
