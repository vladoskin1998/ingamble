import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"

import casinoCard09 from "../../assets/img/casino-cards/09.jpg"
import bigFatRaceImage from "../../assets/img/casino-cards/03.jpg"
import crazyCashBombImage from "../../assets/img/casino-cards/07.jpg"
import newYearBetRaceImage01 from "../../assets/img/casino-cards/01.jpg"
import newYearBetRaceImage04 from "../../assets/img/casino-cards/04.jpg"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { SwiperRef } from "swiper/react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "swiper/css/pagination"
import {  useRef } from "react"
import { GetDataBonusResponse } from "../../types"

//@ts-ignore
const MoreCasinoBonuses = ({
    title,
    //@ts-ignore
    data,
}: {
    title: string
    data?: GetDataBonusResponse | undefined
}) => {
    const sliderRef = useRef<SwiperRef | null>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)

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
                                    spaceBetween={20}
                                    ref={sliderRef}
                                    // pagination={{ clickable: true }}

                                    pagination={{
                                        el: paginationRef.current,
                                        //      el: "#more-staket-simple-bonus__pagination",
                                        // type: "bullets",
                                        // bulletClass: "swiper-custom-bullet",
                                        // bulletActiveClass: "swiper-custom-bullet-active",
                                        clickable: true,
                                    }}
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
                                                            10€
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
                                                                    <img
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
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
                                                                    <img
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
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
                                                                    <img
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
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
                                                                    <img
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
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
                                                                    <img
                                                                        src={
                                                                            starIcon
                                                                        }
                                                                        alt="star"
                                                                    />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                    4.8
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src={
                                                                        likeIcon
                                                                    }
                                                                    alt="like"
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
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div
                            ref={paginationRef}
                            id="#more-staket-simple-bonus__pagination"
                            className="bottom-slider__pagination more-staket-simple-bonus__pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreCasinoBonuses
