import { useEffect, useRef, useState } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

export const CasinoBonuses = () => {
    const sliderRef = useRef<SwiperRef | null>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)

    const [active,setActive] = useState<string>("review-iwild-casino-bonuses")

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

    const scrollToElement = (id: string) => {
        setActive(id)
        const element = document.querySelector(`#${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <section className="review__iwild-casino-bonuses iwild-casino-bonuses">
            <div className="iwild-casino-bonuses__tabs tabs">
                <div className="tabs__container container">
                    <div className="tabs__slider">
                        <div className="tabs__swiper iwild-casino-bonuses-tabs__swiper swiper">
                            <Swiper
                                className="tabs__wrapper swiper-wrapper"
                                slidesPerView="auto"
                                spaceBetween={40}
                                breakpoints={{
                                    320: { spaceBetween: 24 },
                                    480.98: { spaceBetween: 40 },
                                    1920: { spaceBetween: 40 },
                                }}
                            >
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn link-scroll ${active === "review-iwild-casino-bonuses" && "active"}`}
                                     
                                        onClick={() => scrollToElement("review-iwild-casino-bonuses")}
                                    >
                                        Bonuses
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn link-scroll ${active === "review-general-information" && "active"}`}
                                     
                                        onClick={() => scrollToElement("review-general-information")}
                                    >
                                        Keypoints
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn link-scroll ${active === "review-iwild-casino-special-promo" && "active"}`}
                                     
                                        onClick={() => scrollToElement("review-iwild-casino-special-promo")}
                                    >
                                        Special Promo
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn link-scroll  ${active === "review-iwild-casino-review" && "active"}`}
                                        onClick={() => scrollToElement("review-iwild-casino-review")}
                                    >
                                        Casino Review
                                    </button>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="iwild-casino-bonuses__container container"
                id="review-iwild-casino-bonuses"
            >
                <div className="iwild-casino-bonuses__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    iWild Casino Bonuses
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iwild-casino-bonuses__slider slider">
                    <div className="slider__body">
                        <div className="iwild-casino-bonuses__swiper slider__swiper swiper">
                            <Swiper
                                slidesPerView="auto"
                                className="slider__wrapper swiper-wrapper"
                                ref={sliderRef}
                                pagination={{
                                    el: paginationRef.current,
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
                                <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block casino-card__image-block_yellow"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/10.jpg"
                                                    alt="Great Bonus Up To 360% For Evening"
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
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__name"
                                            >
                                                Great Bonus Up{" "}
                                                <span>To 360%</span> For Evening
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block casino-card__image-block_blue"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/11.jpg"
                                                    alt="Big Fat Race to $100 Moon coins and long Name example"
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
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__name"
                                            >
                                                Big Fat Race to{" "}
                                                <span>$100</span> Moon coins and
                                                long Name example
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block casino-card__image-block_green"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/12.jpg"
                                                    alt="Crazy Cash Bomb Winnings $1,000"
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
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__name"
                                            >
                                                Crazy Cash Bomb Winnings{" "}
                                                <span>$1,000</span>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block casino-card__image-block_violet"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/13.jpg"
                                                    alt="Big Fat Race to $1000"
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
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__name"
                                            >
                                                Big Fat Race to{" "}
                                                <span>$1000</span>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block casino-card__image-block_orange"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/14.jpg"
                                                    alt="New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"
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
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__name"
                                            >
                                                New Year Bet Race -{" "}
                                                <span>$30,000</span> Rocket
                                                Launcher With 10x Scope
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block casino-card__image-block_yellow"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/10.jpg"
                                                    alt="Great Bonus Up To 360% For Evening"
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
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__name"
                                            >
                                                Great Bonus Up{" "}
                                                <span>To 360%</span> For Evening
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div
                            ref={paginationRef}
                            className="bottom-slider__pagination iwild-casino-bonuses__pagination swiper-pagination"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
