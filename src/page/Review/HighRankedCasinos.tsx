import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"
import { useEffect, useRef, useState } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

export const HighRankedCasinos = () => {
    const [isBeginning, setIsBeginning] = useState<boolean>(true)
    const [isEnd, setIsEnd] = useState<boolean>(false)

    const sliderRef = useRef<SwiperRef | null>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)

    const pcSliderRef = useRef<SwiperRef | null>(null)
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

    const handleSlideChange = () => {
        if (pcSliderRef.current) {
            setIsBeginning(pcSliderRef.current.swiper.isBeginning)
            setIsEnd(pcSliderRef.current.swiper.isEnd)
        }
    }

    const nextSlide = () => {
        if (pcSliderRef.current) {
            pcSliderRef.current.swiper.slideNext()
            handleSlideChange()
        }
    }

    const prevSlide = () => {
        if (pcSliderRef.current) {
            pcSliderRef.current.swiper.slidePrev()
            handleSlideChange()
        }
    }
    return (
        <section className="review__other-сasinos other-сasinos-review main-gamble__baner-block">
            <div className="other-сasinos-review__container container">
                <div className="other-сasinos-review__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Other High Ranked Casinos
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <div className="navigation-btns">
                                <button
                                    onClick={prevSlide}
                                    className={`navigation-btn navigation-btn_prev other-сasinos-review-navigation-btn other-сasinos-review-navigation-btn_prev ${
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
                                    className={`navigation-btn navigation-btn_next other-сasinos-review-navigation-btn other-сasinos-review-navigation-btn_next ${
                                        isEnd
                                            ? "swiper-button-disabled"
                                            : ""
                                    }`}
                                >
                                    <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-сasinos-review__row main-gamble__row-block row-block row-block__left">
                    <div className="row-block__baner row-block__baner_left baner-row-block">
                        <div className="baner-row-block__body">
                            <div className="baner-row-block__waves">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="baner-row-block__image">
                                <img
                                    src="/src/assets/img/playing-cards.png"
                                    alt="playing-cards"
                                />
                            </div>
                            <div className="baner-row-block__content">
                                <div className="baner-row-block__text">
                                    Other <span>High Ranked</span>
                                    Casinos
                                </div>
                                <a
                                    href=""
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="baner-row-block__btn best-casinos-2024-2-gamble__btn"
                                >
                                    See All
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="other-сasinos-review__slider row-block__slider slider">
                        <div className="slider__body">
                            <div className="other-сasinos-review__swiper slider__swiper swiper">
                                <Swiper
                                    className="slider__wrapper swiper-wrapper"
                                    slidesPerView="auto"
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
                                    ref={pcSliderRef}
                                    onSlideChange={handleSlideChange}
                                >
                                    <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item item-slide-slider">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-slide-slider__image-block"
                                            >
                                                <span className="item-slide-slider__image ibg">
                                                    <img
                                                        src="/src/assets/img/different-casino/spinbetter.png"
                                                        alt="spinbetter"
                                                    />
                                                </span>
                                            </a>
                                            <div className="item-slide-slider__content">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__name"
                                                >
                                                    30 Bet Casino
                                                </a>
                                                <div className="item-slide-slider__tags tags-casino-card">
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
                                                </div>
                                                <div className="item-slide-slider__bottom">
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img
                                                                src={starIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">
                                                            8.9
                                                        </span>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={likeIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide-slider__item item-slide-slider">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-slide-slider__image-block"
                                            >
                                                <span className="item-slide-slider__image ibg">
                                                    <img
                                                        src="/src/assets/img/different-casino/roy-spins-orange.png"
                                                        alt="roy-spins"
                                                    />
                                                </span>
                                            </a>
                                            <div className="item-slide-slider__content">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__name"
                                                >
                                                    Royspins Casino
                                                </a>
                                                <div className="item-slide-slider__tags tags-casino-card">
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
                                                </div>
                                                <div className="item-slide-slider__bottom">
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img
                                                                src={starIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">
                                                            8.9
                                                        </span>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={likeIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item item-slide-slider">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-slide-slider__image-block"
                                            >
                                                <span className="item-slide-slider__image ibg">
                                                    <img
                                                        src="/src/assets/img/different-casino/vulkan.png"
                                                        alt="vulkan"
                                                    />
                                                </span>
                                            </a>
                                            <div className="item-slide-slider__content">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__name"
                                                >
                                                    Casino Vibes
                                                </a>
                                                <div className="item-slide-slider__tags tags-casino-card">
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
                                                </div>
                                                <div className="item-slide-slider__bottom">
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img
                                                                src={starIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">
                                                            8.9
                                                        </span>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={likeIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide-slider__item item-slide-slider">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-slide-slider__image-block"
                                            >
                                                <span className="item-slide-slider__image ibg">
                                                    <img
                                                        src="/src/assets/img/different-casino/vavada.png"
                                                        alt="vavada"
                                                    />
                                                </span>
                                            </a>
                                            <div className="item-slide-slider__content">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__name"
                                                >
                                                    Royspins Casino Long Name
                                                    Example
                                                </a>
                                                <div className="item-slide-slider__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">
                                                            WR:
                                                        </span>
                                                        <span className="tags-casino-card__item-value">
                                                            4.0x
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="item-slide-slider__bottom">
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img
                                                                src={starIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">
                                                            8.9
                                                        </span>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={likeIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item item-slide-slider">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-slide-slider__image-block"
                                            >
                                                <span className="item-slide-slider__image ibg">
                                                    <img
                                                        src="/src/assets/img/different-casino/spinbetter.png"
                                                        alt="spinbetter"
                                                    />
                                                </span>
                                            </a>
                                            <div className="item-slide-slider__content">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__name"
                                                >
                                                    30 Bet Casino
                                                </a>
                                                <div className="item-slide-slider__tags tags-casino-card">
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
                                                </div>
                                                <div className="item-slide-slider__bottom">
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img
                                                                src={starIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">
                                                            8.9
                                                        </span>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={likeIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide-slider__item item-slide-slider">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="item-slide-slider__image-block"
                                            >
                                                <span className="item-slide-slider__image ibg">
                                                    <img
                                                        src="/src/assets/img/different-casino/roy-spins-orange.png"
                                                        alt="roy-spins"
                                                    />
                                                </span>
                                            </a>
                                            <div className="item-slide-slider__content">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__name"
                                                >
                                                    Royspins Casino
                                                </a>
                                                <div className="item-slide-slider__tags tags-casino-card">
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
                                                </div>
                                                <div className="item-slide-slider__bottom">
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img
                                                                src={starIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">
                                                            8.9
                                                        </span>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={likeIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-сasinos-review__slider-mob slider-mob-other-сasinos-review">
                    <div className="slider-mob-other-сasinos-review__container container">
                        <div className="slider-mob-other-сasinos-review__slider slider">
                            <div className="slider__body">
                                <div className="slider-mob-other-сasinos-review__swiper slider__swiper swiper">
                                    <Swiper
                                        className="slider__wrapper swiper-wrapper"
                                        slidesPerView="auto"
                                        ref={sliderRef}
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
                                        <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item item-slide-slider">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__image-block"
                                                >
                                                    <span className="item-slide-slider__image ibg">
                                                        <img
                                                            src="/src/assets/img/different-casino/spinbetter.png"
                                                            alt="spinbetter"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="item-slide-slider__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="item-slide-slider__name"
                                                    >
                                                        30 Bet Casino
                                                    </a>
                                                    <div className="item-slide-slider__tags tags-casino-card">
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
                                                    </div>
                                                    <div className="item-slide-slider__bottom">
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img
                                                                    src="/src/assets/img/icons/star.svg"
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                8.9
                                                            </span>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src="/src/assets/img/icons/like.svg"
                                                                    alt="like"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item item-slide-slider">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__image-block"
                                                >
                                                    <span className="item-slide-slider__image ibg">
                                                        <img
                                                            src="/src/assets/img/different-casino/roy-spins-orange.png"
                                                            alt="roy-spins"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="item-slide-slider__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="item-slide-slider__name"
                                                    >
                                                        Royspins Casino
                                                    </a>
                                                    <div className="item-slide-slider__tags tags-casino-card">
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
                                                    </div>
                                                    <div className="item-slide-slider__bottom">
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img
                                                                    src="/src/assets/img/icons/star.svg"
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                8.9
                                                            </span>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src="/src/assets/img/icons/like.svg"
                                                                    alt="like"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item item-slide-slider">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__image-block"
                                                >
                                                    <span className="item-slide-slider__image ibg">
                                                        <img
                                                            src="/src/assets/img/different-casino/vulkan.png"
                                                            alt="vulkan"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="item-slide-slider__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="item-slide-slider__name"
                                                    >
                                                        Casino Vibes
                                                    </a>
                                                    <div className="item-slide-slider__tags tags-casino-card">
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
                                                    </div>
                                                    <div className="item-slide-slider__bottom">
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img
                                                                    src="/src/assets/img/icons/star.svg"
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                8.9
                                                            </span>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src="/src/assets/img/icons/like.svg"
                                                                    alt="like"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item item-slide-slider">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="item-slide-slider__image-block"
                                                >
                                                    <span className="item-slide-slider__image ibg">
                                                        <img
                                                            src="/src/assets/img/different-casino/vavada.png"
                                                            alt="vavada"
                                                        />
                                                    </span>
                                                </a>
                                                <div className="item-slide-slider__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="item-slide-slider__name"
                                                    >
                                                        Royspins Casino Long
                                                        Name Example
                                                    </a>
                                                    <div className="item-slide-slider__tags tags-casino-card">
                                                        <div className="tags-casino-card__item tags-casino-card__item_green">
                                                            <span className="tags-casino-card__item-label">
                                                                WR:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                4.0x
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="item-slide-slider__bottom">
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img
                                                                    src="/src/assets/img/icons/star.svg"
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                8.9
                                                            </span>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                                <img
                                                                    src="/src/assets/img/icons/like.svg"
                                                                    alt="like"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                34K
                                                            </span>
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
                                    className="bottom-slider__pagination slider-mob-other-сasinos-review__pagination swiper-pagination"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
