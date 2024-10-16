import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useEffect, useRef, useState } from "react"
import { BlockTypeNumber, HomeDataBlock, HomeDataCard } from "../../types"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"

const colors_tags = [
    "tags-casino-card__item_blue",
    "tags-casino-card__item_green",
    "tags-casino-card__item_purple",
    "tags-casino-card__item_grass",
]

export const BlockType3 = ({ data }: { data: HomeDataBlock | undefined }) => {
    const sliderRef = useRef<any>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)
    const [screenState, setScreenState] = useState<number | "auto">("auto")

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            if (width < 1020) {
                setScreenState("auto")
            } else if (width < 1220) {
                setScreenState(1)
            } else if (width < 1600) {
                setScreenState(2)
            } else if (width > 2100) {
                setScreenState(3)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

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

    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType3)
        return <></>

    return (
        <section className="main-gamble__top-gainers-casinos top-gainers-casinos-gamble main-gamble__baner-block">
            <div className="top-gainers-casinos-gamble__container container">
                <div className="top-gainers-casinos-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data.items_block.title_image && (
                                    <span className="top__title-icon">
                                        <img
                                            src={data.items_block.title_image}
                                            alt="security"
                                        />
                                    </span>
                                )}
                                <h2 className="top__title">
                                    {data.items_block.block_title}
                                </h2>
                            </div>
                            {data.items_block.subtitle && (
                                <div className="top__subtitle">
                                    {data.items_block.subtitle}
                                </div>
                            )}
                        </div>
                        <div className="top__column">
                            <a
                                href="/see-all?key=99012345"
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
                        <div
                            className="slider__body"
                            style={{ overflow: "hidden" }}
                        >
                            <div className="top-gainers-casinos-gamble__swiper slider__swiper swiper">
                                <Swiper
                                    slidesPerView={screenState}
                                    className="slider__wrapper swiper-wrapper"
                     
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
                                    {data.items_block.data_cards
                                        .filter((item) => !item.big_card)
                                        .reduce(
                                            (
                                                acc: [
                                                    HomeDataCard,
                                                    HomeDataCard?
                                                ][],
                                                item,
                                                index
                                            ) => {
                                                if (index % 2 === 0) {
                                                    acc.push([item])
                                                } else {
                                                    acc[acc.length - 1].push(
                                                        item
                                                    )
                                                }
                                                return acc
                                            },
                                            []
                                        )
                                        .map((item) => (
                                            //////main slide
                                            <SwiperSlide className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide" style={{     minHeight: "260px",
                                                height: "100%",}}>
                                                <
                                                >
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
                                                                        <LazyCardImg
                                                                            img={
                                                                                item?.[0]
                                                                                    .casino_info
                                                                                    .casino_image ||
                                                                                ""
                                                                            }
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
                                                                            {
                                                                                item?.[0]
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            }
                                                                        </a>
                                                                        {item?.[0]
                                                                            .bonus_info
                                                                            ?.labels
                                                                            ?.length && (
                                                                            <div className="different-casino-standart__tags tags-casino-card">
                                                                                {item?.[0]?.bonus_info?.labels.map(
                                                                                    (
                                                                                        item,
                                                                                        index
                                                                                    ) => (
                                                                                        <div
                                                                                            className={`tags-casino-card__item ${
                                                                                                colors_tags[
                                                                                                    index %
                                                                                                        4
                                                                                                ]
                                                                                            }`}
                                                                                        >
                                                                                            <span className="tags-casino-card__item-label">
                                                                                                {
                                                                                                    item
                                                                                                }
                                                                                            </span>
                                                                                            {/* <span className="tags-casino-card__item-value">
                                                                                                4.0x
                                                                                            </span> */}
                                                                                        </div>
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                        <div className="info-casino-card__stake">
                                                                            <a
                                                                                href=""
                                                                                aria-label="Put your description here."
                                                                                target="_blank"
                                                                                className="info-casino-card__stake-link"
                                                                            >
                                                                                {
                                                                                    item?.[0]
                                                                                        .casino_info
                                                                                        .casino_name
                                                                                }
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
                                                                                    {
                                                                                        item?.[0]
                                                                                            .casino_info
                                                                                            .casino_rank
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {item?.[1] && (
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
                                                                            <LazyCardImg
                                                                                img={
                                                                                    item?.[1]
                                                                                        .casino_info
                                                                                        .casino_image ||
                                                                                    ""
                                                                                }
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
                                                                                {
                                                                                    item?.[1]
                                                                                        ?.bonus_info
                                                                                        ?.bonus_name
                                                                                }
                                                                            </a>
                                                                            {item?.[1]
                                                                                .bonus_info
                                                                                ?.labels
                                                                                ?.length && (
                                                                                <div className="different-casino-standart__tags tags-casino-card">
                                                                                    {item?.[1]?.bonus_info?.labels.map(
                                                                                        (
                                                                                            item,
                                                                                            index
                                                                                        ) => (
                                                                                            <div
                                                                                                className={`tags-casino-card__item ${
                                                                                                    colors_tags[
                                                                                                        index %
                                                                                                            4
                                                                                                    ]
                                                                                                }`}
                                                                                            >
                                                                                                <span className="tags-casino-card__item-label">
                                                                                                    {
                                                                                                        item
                                                                                                    }
                                                                                                </span>
                                                                                                {/* <span className="tags-casino-card__item-value">
                                                                                                 4.0x
                                                                                             </span> */}
                                                                                            </div>
                                                                                        )
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                            <div className="info-casino-card__stake">
                                                                                <a
                                                                                    href=""
                                                                                    aria-label="Put your description here."
                                                                                    target="_blank"
                                                                                    className="info-casino-card__stake-link"
                                                                                >
                                                                                    {
                                                                                        item?.[1]
                                                                                            .casino_info
                                                                                            .casino_name
                                                                                    }
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
                                                                                        {
                                                                                            item?.[1]
                                                                                                .casino_info
                                                                                                .casino_rank
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            </SwiperSlide>
                                        ))}
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
                                            {data.items_block.data_cards
                                                .filter((item) => item.big_card)
                                                .map((item) => (
                                                    <SwiperSlide className="baner-row-block__slide slide-baner-row-block swiper-slide">
                                                  
                                                            <div className="slide-baner-row-block__item item-baner-row-block">
                                                                <div className="item-baner-row-block__image ibg">
                                                                    <LazyCardImg
                                                                        img={
                                                                            item
                                                                                .bonus_info
                                                                                .bonus_image ||
                                                                            ""
                                                                        }
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
                                                                                    <LazyCardImg
                                                                                        img={
                                                                                            item
                                                                                                .casino_info
                                                                                                .casino_image ||
                                                                                            ""
                                                                                        }
                                                                                        size="medium"
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
                                                                                    {
                                                                                        item
                                                                                            .casino_info
                                                                                            .casino_name
                                                                                    }
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
                                                                                        {
                                                                                            item
                                                                                                .casino_info
                                                                                                .casino_rank
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a
                                                                            href=""
                                                                            aria-label="Put your description here."
                                                                            className="item-baner-row-block__title"
                                                                        >
                                                                            {
                                                                                item
                                                                                    .bonus_info
                                                                                    .bonus_name
                                                                            }
                                                                        </a>
                                                                    </div>
                                                                    <div className="item-baner-row-block__column">
                                                                        <a
                                                                            href={
                                                                                item
                                                                                    .casino_info
                                                                                    .casino_affiliate_link
                                                                            }
                                                                            aria-label="Put your description here."
                                                                            target="_blank"
                                                                            className="item-baner-row-block__btn casino-card__bnt"
                                                                        >
                                                                            Play
                                                                        </a>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                    
                                                    </SwiperSlide>
                                                ))}
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
