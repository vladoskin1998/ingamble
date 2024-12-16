import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useRef, useEffect } from "react"

import { BlockTypeNumber, HomeDataBlock, HomeDataCard } from "../../types"
import { SeeAllButton } from "./SeeAllButton"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { sanitizeLink } from "../../helper"
import { Link } from "react-router-dom"

export default function BlockMType2M({
    data,
}: {
    data: HomeDataBlock | undefined
}) {
    const sliderRef = useRef<SwiperRef | null>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (sliderRef?.current && paginationRef?.current) {
            const swiper = sliderRef?.current?.swiper
            if (swiper && paginationRef?.current) {
                //@ts-ignore
                swiper.params.pagination.el = paginationRef?.current
                swiper.pagination.init()
                swiper.pagination.render()
                swiper.pagination.update()
            }
        }
    }, [])

    if (!data || data?.items_block?.type_block !== BlockTypeNumber.BlockType2M)
        return <></>
    return (
        <section
            aria-label="BlockTypeNumber.BlockType2M"
            className="main-gamble__payn-play-casinos payn-play-casinos-gamble"
        >
            <div className="payn-play-casinos-gamble__container container">
                <div className="vpn-friendly-casinos-2-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data?.items_block?.title_image && (
                                    <span className="top__title-icon">
                                        <img
                                            src={data?.items_block?.title_image}
                                            alt="security"
                                        />
                                    </span>
                                )}
                                <h2 className="top__title">
                                    {data?.items_block?.block_title}
                                </h2>
                            </div>
                            {data.items_block.subtitle && (
                                <div className="top__subtitle">
                                    {data?.items_block?.subtitle}
                                </div>
                            )}
                        </div>
                        <div className="top__column">
                            <SeeAllButton
                                type_category={data?.items_block?.type_category}
                                parameter={
                                    data?.items_block?.category?.name || ""
                                } id={  data?.items_block?.category?.id}
                            />
                        </div>
                    </div>
                </div>
                <div className="payn-play-casinos-gamble__slider slider">
                    <div className="slider__body">
                        <div className="payn-play-casinos-gamble__swiper slider__swiper swiper">
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
                                {data.items_block.data_cards
                                    .reduce(
                                        (
                                            acc: [
                                                HomeDataCard,
                                                HomeDataCard?,
                                                HomeDataCard?
                                            ][],
                                            item,
                                            index
                                        ) => {
                                            if (index % 3 === 0) {
                                                acc.push([item])
                                            } else {
                                                acc[acc.length - 1].push(item)
                                            }
                                            return acc
                                        },
                                        []
                                    )
                                    .map((item) => (
                                        <SwiperSlide>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <Link to={`/casino/${sanitizeLink(item?.[0]?.casino_info?.casino_name)}?queryId=${item?.[0]?.casino_info?.casino_id}`}
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
                                                                        size="medium"
                                                                    />
                                                                </span>
                                                            </Link>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
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
                                                                       
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        {
                                                                            item?.[0]
                                                                                ?.casino_info
                                                                                ?.casino_name
                                                                        }
                                                                    </Link>
                                                                    <div className="different-casino-standart__info">
                                                                        <Link
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
                                                                                    ?.bonus_info
                                                                                    ?.bonus_id
                                                                            }`}
                                                                            rel="nofollow noopener"
                                                                            aria-label="Put your description here."
                                                                            className="different-casino-standart__info-link"
                                                                        >
                                                                            {
                                                                                item?.[0]
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            }
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href={
                                                                        item?.[0]
                                                                            ?.casino_info
                                                                            ?.casino_affiliate_link || item?.[0]
                                                                            ?.casino_info
                                                                            ?.url_casino
                                                                    }
                                                                    rel="nofollow noopener"
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
                                                            <Link  to={`/casino/${sanitizeLink(item?.[1]?.casino_info?.casino_name)}?queryId=${item?.[1]?.casino_info?.casino_id}`}
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <LazyCardImg
                                                                        img={
                                                                            item?.[1]
                                                                                ?.casino_info
                                                                                ?.casino_image ||
                                                                            ""
                                                                        }
                                                                         size="medium"
                                                                    />
                                                                </span>
                                                            </Link>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <Link
                                                                        to={`/casino/${sanitizeLink(
                                                                            item?.[1]
                                                                                ?.casino_info
                                                                                ?.casino_name
                                                                        )}?queryId=${
                                                                            item?.[1]
                                                                                ?.casino_info
                                                                                ?.casino_id
                                                                        }`}
                                                                        rel="nofollow noopener"
                                                                        aria-label="Put your description here."
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        {
                                                                            item?.[1]
                                                                                ?.casino_info
                                                                                ?.casino_name
                                                                        }
                                                                    </Link>
                                                                    <div className="different-casino-standart__info">
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
                                                                                    ?.bonus_info
                                                                                    ?.bonus_id
                                                                            }`}
                                                                            aria-label="Put your description here."
                                                                            className="different-casino-standart__info-link"
                                                                        >
                                                                            {
                                                                                item?.[1]
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            }
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    rel="nofollow noopener"
                                                                    href={
                                                                        item?.[1]
                                                                            ?.casino_info
                                                                            ?.casino_affiliate_link || item?.[1]
                                                                            ?.casino_info
                                                                            ?.url_casino
                                                                    }
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
                                                            <Link  to={`/casino/${sanitizeLink(item?.[2]?.casino_info?.casino_name)}?queryId=${item?.[2]?.casino_info?.casino_id}`}
                                                                className="different-casino-standart__image-block"
                                                            >
                                                                <span className="different-casino-standart__image ibg">
                                                                    <LazyCardImg
                                                                        img={
                                                                            item?.[2]
                                                                                ?.casino_info
                                                                                ?.casino_image ||
                                                                            ""
                                                                            
                                                                        }
                                                                         size="medium"
                                                                    />
                                                                </span>
                                                            </Link>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <Link
                                                                        rel="nofollow noopener"
                                                                        to={`/casino/${sanitizeLink(
                                                                            item?.[2]
                                                                                ?.casino_info
                                                                                ?.casino_name
                                                                        )}?queryId=${
                                                                            item?.[2]
                                                                                ?.casino_info
                                                                                ?.casino_id
                                                                        }`}
                                                                        aria-label="Put your description here."
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        {
                                                                            item?.[2]
                                                                                ?.casino_info
                                                                                ?.casino_name
                                                                        }
                                                                    </Link>
                                                                    <div className="different-casino-standart__info">
                                                                        <Link
                                                                            rel="nofollow noopener"
                                                                            to={`/casino/${sanitizeLink(
                                                                                item?.[1]
                                                                                    ?.casino_info
                                                                                    ?.casino_name
                                                                            )}/bonuses/${sanitizeLink(
                                                                                item?.[2]
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            )}?queryId=${
                                                                                item?.[2]
                                                                                    ?.bonus_info
                                                                                    ?.bonus_id
                                                                            }`}
                                                                            aria-label="Put your description here."
                                                                            className="different-casino-standart__info-link"
                                                                        >
                                                                            {
                                                                                item?.[2]
                                                                                    ?.bonus_info
                                                                                    ?.bonus_name
                                                                            }
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    rel="nofollow noopener"
                                                                    href={
                                                                        item?.[2]
                                                                            ?.casino_info
                                                                            ?.casino_affiliate_link || item?.[2]
                                                                            ?.casino_info
                                                                            ?.url_casino
                                                                    }
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
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div
                            ref={paginationRef}
                            className="bottom-slider__pagination payn-play-casinos-gamble__pagination swiper-pagination"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
