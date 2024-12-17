import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useRef, useEffect } from "react"

import { BlockTypeNumber, HomeDataBlock } from "../../types"
import { SeeAllButton } from "./SeeAllButton"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { COLORS_TAGS, sanitizeLink } from "../../helper"
import { Link } from "react-router-dom"
import { LazyImgHomeType } from "."


export default function BlockMType3M({
    data,
    lazyLoadImg='lazy',
}: {
    data: HomeDataBlock | undefined,
    lazyLoadImg?: LazyImgHomeType  
}) {
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

    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType3M)
        return <></>
    return (
        <section
            aria-label="BlockTypeNumber.BlockType3M"
            className="main-gamble__vpn-friendly-casinos-2 vpn-friendly-casinos-2-gamble main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble"
        >
            <div className="vpn-friendly-casinos-2-gamble__container container">
                <div className="vpn-friendly-casinos-2-gamble__top top">
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
                                } id={  data?.items_block?.category?.id}
                            />
                        </div>
                    </div>
                </div>
                <div className="vpn-friendly-casinos-2-gamble__slider slider">
                    <div className="slider__body">
                        <div className="vpn-friendly-casinos-2-gamble__swiper slider__swiper swiper">
                            <Swiper
                                ref={sliderRef}
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
                                }}
                            >
                                {
                                    //@ts-ignore
                                    data.items_block.data_cards
                                        .sort((a, b) => a.order - b.order)
                                        //@ts-ignore
                                        .map((item) => (
                                            <SwiperSlide className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <Link
                                                                            rel="nofollow noopener"
                                                                            to={`/casino/${sanitizeLink(
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.casino_name
                                                                            )}?queryId=${
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.casino_id
                                                                            }`}
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
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
                                                                        imgLoading={lazyLoadImg}
                                                                    />
                                                                </span>
                                                            </Link>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <Link
                                                                        rel="nofollow noopener"
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
                                                                        aria-label="Put your description here."
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        {
                                                                            item
                                                                                ?.bonus_info
                                                                                ?.bonus_name
                                                                        }
                                                                    </Link>
                                                                    {item
                                                                        ?.bonus_info
                                                                        ?.labels
                                                                        ?.length && (
                                                                        <div className="different-casino-standart__tags tags-casino-card">
                                                                            {item?.bonus_info?.labels.map(
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
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.casino_name
                                                                            )}?queryId=${
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.casino_id
                                                                            }`}
                                                                            aria-label="Put your description here."
                                                                            className="info-casino-card__stake-link"
                                                                        >
                                                                            {
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.casino_name
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
                                                                                    item
                                                                                        ?.casino_info
                                                                                        ?.casino_rank
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div
                            ref={paginationRef}
                            className="bottom-slider__pagination vpn-friendly-casinos-2-gamble__pagination swiper-pagination"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
