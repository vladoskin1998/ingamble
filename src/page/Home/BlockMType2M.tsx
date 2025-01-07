import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { useRef, useEffect } from 'react'

import { BlockTypeNumber, HomeDataBlock, HomeDataCard } from '../../types'
import { SeeAllButton } from './SeeAllButton'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { cloacingFetch, cloacingLink } from '../../helper'
import { Link } from 'react-router-dom'
import { LazyImgHomeType } from '.'

export default function BlockMType2M({
    data,
    //@ts-ignore
    lazyLoadImg = 'lazy',
}: {
    data: HomeDataBlock | undefined
    lazyLoadImg?: LazyImgHomeType
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

    if (!data || data?.items_block?.type_block !== BlockTypeNumber.BlockType2M) return <></>

    return (
        <section aria-label="BlockTypeNumber.BlockType2M" className="main-gamble__payn-play-casinos payn-play-casinos-gamble">
            <div className="payn-play-casinos-gamble__container container">
                <div className="vpn-friendly-casinos-2-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data?.items_block?.title_image && (
                                    <span className="top__title-icon">
                                        <img src={data?.items_block?.title_image} alt="security" />
                                    </span>
                                )}
                                <h2 className="top__title">{data?.items_block?.block_title}</h2>
                            </div>
                            {data.items_block.subtitle && <div className="top__subtitle">{data?.items_block?.subtitle}</div>}
                        </div>
                        <div className="top__column">
                            <SeeAllButton type_category={data?.items_block?.type_category} slug={data?.items_block?.category?.slug }  />
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
                                    .reduce((acc: [HomeDataCard, HomeDataCard?, HomeDataCard?][], item, index) => {
                                        if (index % 3 === 0) {
                                            acc.push([item])
                                        } else {
                                            acc[acc.length - 1].push(item)
                                        }
                                        return acc
                                    }, [])
                                    .map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide">
                                                <div className="slide-slider__item slide-slider__item-column slide-slider__item-column_standart">
                                                    <div className="different-casino-standart">
                                                        <div className="different-casino-standart__body">
                                                            <Link to={`/casino/${item?.[0]?.casino_info?.casino_slug}`} className="different-casino-standart__image-block">
                                                                <span className="different-casino-standart__image ibg--custom">
                                                                    <LazyCardImg img={item?.[0].casino_info.casino_image || ''} size="medium" />
                                                                </span>
                                                            </Link>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <Link
                                                                        rel="nofollow noopener"
                                                                        to={`/casino/${item?.[0]?.casino_info?.casino_slug}`}
                                                                        aria-label="Put your description here."
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        {item?.[0]?.casino_info?.casino_name}
                                                                    </Link>
                                                                    <div className="different-casino-standart__info">
                                                                        <Link
                                                                            to={`/casino/${item?.[0]?.casino_info?.casino_slug}/bonuses/${item?.[0]?.bonus_info?.bonus_slug}`}
                                                                            rel="nofollow noopener"
                                                                            aria-label="Put your description here."
                                                                            className="different-casino-standart__info-link"
                                                                        >
                                                                            {item?.[0]?.bonus_info?.bonus_name}
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href={cloacingLink(item?.[0]?.casino_info?.casino_name)}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation()
                                                                        e.preventDefault()
                                                                        cloacingFetch(item?.[0]?.casino_info?.casino_affiliate_link)
                                                                        window.open(item?.[0]?.casino_info?.casino_affiliate_link || item?.[0]?.casino_info?.url_casino, '_blank', 'noopener,noreferrer')
                                                                    }}
                                                                    aria-label="Put your description here."
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
                                                            <Link to={`/casino/${item?.[1]?.casino_info?.casino_slug}`} className="different-casino-standart__image-block">
                                                                <span className="different-casino-standart__image ibg--custom">
                                                                    <LazyCardImg img={item?.[1]?.casino_info?.casino_image || ''} size="medium" />
                                                                </span>
                                                            </Link>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <Link
                                                                        to={`/casino/${item?.[1]?.casino_info?.casino_slug}`}
                                                                        rel="nofollow noopener"
                                                                        aria-label="Put your description here."
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        {item?.[1]?.casino_info?.casino_name}
                                                                    </Link>
                                                                    <div className="different-casino-standart__info">
                                                                        <Link
                                                                            rel="nofollow noopener"
                                                                            to={`/casino/${item?.[1]?.casino_info?.casino_slug}/bonuses/${item?.[1]?.bonus_info?.bonus_slug}`}
                                                                            aria-label="Put your description here."
                                                                            className="different-casino-standart__info-link"
                                                                        >
                                                                            {item?.[1]?.bonus_info?.bonus_name}
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href={cloacingLink(item?.[1]?.casino_info?.casino_name)}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation()
                                                                        e.preventDefault()
                                                                        cloacingFetch(item?.[1]?.casino_info?.casino_affiliate_link)
                                                                        window.open(item?.[1]?.casino_info?.casino_affiliate_link || item?.[1]?.casino_info?.url_casino, '_blank', 'noopener,noreferrer')
                                                                    }}
                                                                    aria-label="Put your description here."
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
                                                            <Link to={`/casino/${item?.[2]?.casino_info?.casino_slug}`} className="different-casino-standart__image-block">
                                                                <span className="different-casino-standart__image ibg--custom">
                                                                    <LazyCardImg img={item?.[2]?.casino_info?.casino_image || ''} size="medium" />
                                                                </span>
                                                            </Link>
                                                            <div className="different-casino-standart__content">
                                                                <div className="different-casino-standart__content-row">
                                                                    <Link
                                                                        rel="nofollow noopener"
                                                                        to={`/casino/${item?.[2]?.casino_info?.casino_slug}`}
                                                                        aria-label="Put your description here."
                                                                        className="different-casino-standart__name"
                                                                    >
                                                                        {item?.[2]?.casino_info?.casino_name}
                                                                    </Link>
                                                                    <div className="different-casino-standart__info">
                                                                        <Link
                                                                            rel="nofollow noopener"
                                                                            to={`/casino/${item?.[1]?.casino_info?.casino_slug}/bonuses/${item?.[2]?.bonus_info?.bonus_slug}`}
                                                                            aria-label="Put your description here."
                                                                            className="different-casino-standart__info-link"
                                                                        >
                                                                            {item?.[2]?.bonus_info?.bonus_name}
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href={cloacingLink(item?.[2]?.casino_info?.casino_name)}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation()
                                                                        e.preventDefault()
                                                                        cloacingFetch(item?.[2]?.casino_info?.casino_affiliate_link)
                                                                        window.open(item?.[2]?.casino_info?.casino_affiliate_link || item?.[2]?.casino_info?.url_casino, '_blank', 'noopener,noreferrer')
                                                                    }}
                                                                    aria-label="Put your description here."
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
                        <div ref={paginationRef} className="bottom-slider__pagination payn-play-casinos-gamble__pagination swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
