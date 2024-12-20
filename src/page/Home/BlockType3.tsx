import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useEffect, useRef, useState } from "react"
import { BlockTypeNumber, HomeDataBlock, HomeDataCard } from "../../types"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { SeeAllButton } from "./SeeAllButton"
import { cloacingLink, COLORS_TAGS, sanitizeLink } from "../../helper"
import { Link } from "react-router-dom"

export default function BlockType3({
    data,
}: {
    data: HomeDataBlock | undefined
}) {
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
        <section
            aria-label="BlockTypeNumber.BlockType3"
            className="main-gamble__top-gainers-casinos top-gainers-casinos-gamble main-gamble__baner-block"
        >
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
                            <SeeAllButton
                                type_category={data.items_block.type_category}
                                parameter={
                                    data?.items_block?.category?.name || ""
                                }
                                id={data?.items_block?.category?.id}
                            />
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
                                            <SwiperSlide
                                                className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide"
                                                style={{
                                                    minHeight: "260px",
                                                    height: "100%",
                                                }}
                                            >
                                                <>
                                                    <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                        <div className="different-casino-standart">
                                                            <div className="different-casino-standart__body">
                                                                <div className="different-casino-standart__image-block">
                                                                    <Link
                                                                        to={`/casino/${sanitizeLink(
                                                                            item?.[0]
                                                                                ?.casino_info
                                                                                ?.casino_name
                                                                        )}?queryId=${
                                                                            item?.[0]
                                                                                ?.casino_info
                                                                                ?.casino_id
                                                                        }`}
                                                                        className="different-casino-standart__image ibg--custom"
                                                                    >
                                                                        <LazyCardImg
                                                                            img={
                                                                                item?.[0]
                                                                                    .casino_info
                                                                                    .casino_image ||
                                                                                ""
                                                                            }
                                                                            width="100%"
                                                                            height="100%"
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="different-casino-standart__content">
                                                                    <div className="different-casino-standart__content-row">
                                                                        <Link
                                                                            rel="nofollow noopener"
                                                                            to={`/casino/${sanitizeLink(
                                                                                item?.[0]
                                                                                    ?.casino_info
                                                                                    ?.casino_name
                                                                            )}/bonuses/${sanitizeLink(
                                                                                item?.[0]
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            )}?queryId=${
                                                                                item?.[0]
                                                                                    .bonus_info
                                                                                    .bonus_id
                                                                            }`}
                                                                            aria-label="Put your description here."
                                                                            className="different-casino-standart__name"
                                                                        >
                                                                            {
                                                                                item?.[0]
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            }
                                                                        </Link>
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
                                                                                                COLORS_TAGS[
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
                                                                                        </div>
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                        <div className="info-casino-card__stake">
                                                                            <Link
                                                                                rel="nofollow noopener"
                                                                                to={`/casino/${sanitizeLink(
                                                                                    item?.[0]
                                                                                        ?.casino_info
                                                                                        ?.casino_name
                                                                                )}?queryId=${
                                                                                    item?.[0]
                                                                                        ?.casino_info
                                                                                        ?.casino_id
                                                                                }`}
                                                                                aria-label="Put your description here."
                                                                                className="info-casino-card__stake-link"
                                                                            >
                                                                                {
                                                                                    item?.[0]
                                                                                        .casino_info
                                                                                        .casino_name
                                                                                }
                                                                            </Link>
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
                                                                    <div className="different-casino-standart__image-block">
                                                                        <Link
                                                                            className="different-casino-standart__image ibg--custom"
                                                                            to={`/casino/${sanitizeLink(
                                                                                item?.[1]
                                                                                    ?.casino_info
                                                                                    ?.casino_name
                                                                            )}?queryId=${
                                                                                item?.[1]
                                                                                    ?.casino_info
                                                                                    ?.casino_id
                                                                            }`}
                                                                        >
                                                                            <LazyCardImg
                                                                                img={
                                                                                    item?.[1]
                                                                                        .casino_info
                                                                                        .casino_image ||
                                                                                    ""
                                                                                }
                                                                                height="100%"
                                                                                width="100%"
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="different-casino-standart__content">
                                                                        <div className="different-casino-standart__content-row">
                                                                            <Link
                                                                                rel="nofollow noopener"
                                                                                to={`/casino/${sanitizeLink(
                                                                                    item?.[1]
                                                                                        ?.casino_info
                                                                                        ?.casino_name
                                                                                )}/bonuses/${sanitizeLink(
                                                                                    item?.[1]
                                                                                        ?.bonus_info
                                                                                        ?.bonus_name
                                                                                )}?queryId=${
                                                                                    item?.[1]
                                                                                        .bonus_info
                                                                                        .bonus_id
                                                                                }`}
                                                                                aria-label="Put your description here."
                                                                                className="different-casino-standart__name"
                                                                            >
                                                                                {
                                                                                    item?.[1]
                                                                                        ?.bonus_info
                                                                                        ?.bonus_name
                                                                                }
                                                                            </Link>
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
                                                                                                    COLORS_TAGS[
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
                                                                                <Link
                                                                                    rel="nofollow noopener"
                                                                                    to={`/casino/${sanitizeLink(
                                                                                        item?.[1]
                                                                                            ?.casino_info
                                                                                            ?.casino_name
                                                                                    )}?queryId=${
                                                                                        item?.[1]
                                                                                            ?.casino_info
                                                                                            ?.casino_id
                                                                                    }`}
                                                                                    aria-label="Put your description here."
                                                                                    className="info-casino-card__stake-link"
                                                                                >
                                                                                    {
                                                                                        item?.[1]
                                                                                            .casino_info
                                                                                            .casino_name
                                                                                    }
                                                                                </Link>
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
                                                    <SwiperSlide className="baner-row-block__slide slide-baner-row-block ">
                                                        <Link
                                                            to={`/casino/${sanitizeLink(
                                                                item
                                                                    ?.casino_info
                                                                    ?.casino_name
                                                            )}/bonuses/${sanitizeLink(
                                                                item?.bonus_info
                                                                    ?.bonus_name
                                                            )}?queryId=${
                                                                item?.bonus_info
                                                                    ?.bonus_id
                                                            }`}
                                                        >
                                                            <div className="slide-baner-row-block__item item-baner-row-block">
                                                                <div className="item-baner-row-block__image ibg--custom">
                                                                    <LazyCardImg
                                                                        img={
                                                                            item
                                                                                ?.bonus_info
                                                                                ?.bonus_image ||
                                                                            ""
                                                                        }
                                                                        height="100%"
                                                                        width="100%"
                                                                    />
                                                                </div>
                                                                <div className="item-baner-row-block__row">
                                                                    <div className="item-baner-row-block__column">
                                                                        <div className="item-baner-row-block__small-card casino-small-card">
                                                                            <div className="casino-small-card__image-block">
                                                                                <Link
                                                                                    className="casino-small-card__image ibg--custom"
                                                                                    to={`/casino/${sanitizeLink(
                                                                                        item
                                                                                            ?.casino_info
                                                                                            ?.casino_name
                                                                                    )}?queryId=${
                                                                                        item
                                                                                            ?.casino_info
                                                                                            ?.casino_id
                                                                                    }`}
                                                                                >
                                                                                    <LazyCardImg
                                                                                        img={
                                                                                            item
                                                                                                ?.casino_info
                                                                                                ?.casino_image ||
                                                                                            ""
                                                                                        }
                                                                                        size="medium"
                                                                                        height="100%"
                                                                                        width="100%"
                                                                                    />
                                                                                </Link>
                                                                            </div>
                                                                            <div className="casino-small-card__body">
                                                                                <Link
                                                                                    className="casino-small-card__name"
                                                                                    to={`/casino/${sanitizeLink(
                                                                                        item
                                                                                            ?.casino_info
                                                                                            ?.casino_name
                                                                                    )}?queryId=${
                                                                                        item
                                                                                            ?.casino_info
                                                                                            ?.casino_id
                                                                                    }`}
                                                                                >
                                                                                    {
                                                                                        item
                                                                                            ?.casino_info
                                                                                            ?.casino_name
                                                                                    }
                                                                                </Link>
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
                                                                                                ?.casino_info
                                                                                                ?.casino_rank
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <Link
                                                                            to={`/casino/${sanitizeLink(
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.casino_name
                                                                            )}/bonuses/${sanitizeLink(
                                                                                item
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            )}?queryId=${
                                                                                item
                                                                                    ?.bonus_info
                                                                                    ?.bonus_id
                                                                            }`}
                                                                            className="item-baner-row-block__title"
                                                                        >
                                                                            {
                                                                                item
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            }
                                                                        </Link>
                                                                    </div>
                                                                    <div className="item-baner-row-block__column">
                                                                        <a
                                                                            rel="nofollow noopener"
                                                                            href={cloacingLink(
                                                                                
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.url_casino || item
                                                                                    ?.casino_info
                                                                                    ?.casino_affiliate_link 
                                                                            )}
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.stopPropagation()
                                                                                e.preventDefault()
                                                                                window.open(
                                                                                    item
                                                                                        ?.casino_info
                                                                                        ?.casino_affiliate_link ||
                                                                                        item
                                                                                            ?.casino_info
                                                                                            ?.url_casino,
                                                                                    "_blank",
                                                                                    "noopener,noreferrer"
                                                                                )
                                                                            }}
                                                                            className="item-baner-row-block__btn casino-card__bnt"
                                                                        >
                                                                            Play
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
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
