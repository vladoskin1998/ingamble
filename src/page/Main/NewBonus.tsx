import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

import { useRef } from "react"

export const NewBonus = () => {
    const paginationRefNewBonus = useRef<HTMLDivElement | null>(null)
    return (
        <section className="main-gamble__new-bonuses new-bonuses-gamble">
            <div className="new-bonuses-gamble__container container">
                <div className="new-bonuses-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">New Bonuses</h2>
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
                <div className="new-bonuses-gamble__slider slider">
                    <div className="slider__body">
                        <div className="new-bonuses-gamble__swiper slider__swiper swiper">
                            
                                <Swiper
                                className="slider__wrapper swiper-wrapper"
                                    slidesPerView="auto"
                                    spaceBetween={20}
                                    modules={[Pagination]}
                                    pagination={{
                                        el: paginationRefNewBonus.current,
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
                                                            src="/src/assets/img/casino-cards/07.jpg"
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
                                                                    src="/src/assets/img/casino-small-cards/Casino-Vibes.jpg"
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
                                                            src="/src/assets/img/casino-cards/04.jpg"
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
                                                                    VPN Friendly
                                                                </span>
                                                            </div>
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
                                                            src="/src/assets/img/casino-cards/06.jpg"
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
                                                            src="/src/assets/img/casino-cards/08.jpg"
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
                                                                    VPN Friendly
                                                                </span>
                                                            </div>
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
                                                            src="/src/assets/img/casino-cards/01.jpg"
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
                                                                    src="/src/assets/img/casino-small-cards/Playkasino.jpg"
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
                                                            src="/src/assets/img/casino-cards/07.jpg"
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
                                                                    src="/src/assets/img/casino-small-cards/Casino-Vibes.jpg"
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
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider" >
                        <div        ref={paginationRefNewBonus}
                            className="bottom-slider__pagination new-bonuses-gamble__pagination swiper-pagination"
                     
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
