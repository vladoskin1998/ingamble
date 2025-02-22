import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect, useMemo, useRef } from 'react'
import shield from '../../assets/img/icons/shield.svg'
import {  DataHomeItemsBlock, HomeDataBlock } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { SeeAllButton } from './SeeAllButton'
import { cloacingFetch, cloacingLink } from '../../helper'
import { Link } from 'react-router-dom'
import { useAdaptiveBehavior } from '../../context/AppContext'
import { useInView } from 'react-intersection-observer'
import { Autoplay } from 'swiper/modules'

export default function BlockType2({ data, initialInView = false, isAutoPlay = false }: { data: HomeDataBlock<DataHomeItemsBlock>; initialInView?: boolean; isAutoPlay?: boolean }) {
    const sliderRef = useRef<any>(null)
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

    const { isShowPlayButton } = useAdaptiveBehavior()

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        initialInView,
    })

    const bigCards = useMemo(() => data.items_block.data_cards.filter((item) => item.big_card).sort((a, b) => a.order - b.order), [data.items_block.data_cards])

    const smallCards = useMemo(() => data.items_block.data_cards.filter((item) => !item.big_card).sort((a, b) => a.order - b.order), [data.items_block.data_cards])

    return (
        <>
            <section ref={ref} aria-label="BlockTypeNumber.BlockType2" className="main-gamble__safest-casino-2 safest-casino-2-gamble main-gamble__different-casino-bg main-gamble__baner-block">
                {inView && (
                    <div className="safest-casino-2-gamble__container container">
                        <div className="safest-casino-2-gamble__top top">
                            <div className="top__row">
                                <div className="top__column">
                                    <div className="top__title-block">
                                        {data.items_block.title_image && (
                                            <span className="top__title-icon ibg--custom ibg--custom-width-auto">
                                                <img src={data.items_block.title_image} alt="security" loading="lazy" />
                                            </span>
                                        )}
                                        <h2 className="top__title ">{data.items_block.block_title}</h2>
                                    </div>
                                    {data.items_block.subtitle && <div className="top__subtitle">{data.items_block.subtitle}</div>}
                                </div>
                                <div className="top__column">
                                    <SeeAllButton type_category={data.items_block.type_category} slug={data?.items_block?.category?.slug} />
                                </div>
                            </div>
                        </div>
                        <div className="safest-casino-2-gamble__row main-gamble__row-block row-block row-block__left">
                            <div className="row-block__baner row-block__baner_left baner-row-block">
                                <div className="baner-row-block__slider">
                                    <div className="baner-row-block__slider-body">
                                        <div className="baner-row-block__swiper safest-casino-2-baner__swiper swiper">
                                            <div className="baner-row-block__wrapper swiper-wrapper">
                                                <Swiper
                                                    speed={1000}
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
                                                    {bigCards?.map((item, index) => (
                                                        <SwiperSlide key={index}>
                                                            <div
                                                                className="baner-row-block__slide slide-baner-row-block swiper-slide"
                                                                style={{
                                                                    width: '100%',
                                                                }}
                                                            >
                                                                <div className="slide-baner-row-block__item item-baner-row-block">
                                                                    <Link
                                                                        className="item-baner-row-block__image ibg--custom"
                                                                        to={`/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`}
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        <img src={item?.bonus_info?.bonus_image || ''} height="100%" width="100%" />
                                                                    </Link>
                                                                    <div className="item-baner-row-block__row">
                                                                        <div className="item-baner-row-block__column">
                                                                            <div className="item-baner-row-block__small-card casino-small-card">
                                                                                <div className="casino-small-card__image-block">
                                                                                    <Link to={`/casino/${item?.casino_info?.casino_slug}`} className="casino-small-card__image ibg--custom">
                                                                                        <LazyCardImg img={item?.casino_info?.casino_image || ''} size="medium" height="100%" width="100%" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="casino-small-card__body">
                                                                                    <Link rel="nofollow noopener" to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="casino-small-card__name">
                                                                                        {item?.casino_info?.casino_name}
                                                                                    </Link>
                                                                                    <div className="casino-small-card__info">
                                                                                        {item.casino_info.additional_casino_params.map((it, cindex) => (
                                                                                            <span key={cindex} className="casino-small-card__info-link">
                                                                                                {it}
                                                                                            </span>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-baner-row-block__index">
                                                                                <div className="item-baner-row-block__index-icon">
                                                                                    <img src={shield} alt="shield" />
                                                                                </div>
                                                                                <div className="item-baner-row-block__index-number">{item?.casino_info?.casino_rank}</div>
                                                                                <div className="item-baner-row-block__index-text">Safety Index</div>
                                                                            </div>
                                                                            <Link rel="nofollow noopener" to={`/casino/${item?.casino_info?.casino_slug}`} className="item-baner-row-block__title top__title-40">
                                                                                {item?.bonus_info?.bonus_name}
                                                                            </Link>
                                                                        </div>

                                                                        <div className="item-baner-row-block__column">
                                                                            {isShowPlayButton && (
                                                                                <a
                                                                                    href={cloacingLink(item?.casino_info?.casino_name)}
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation()
                                                                                        e.preventDefault()
                                                                                        cloacingFetch(item?.casino_info?.casino_affiliate_link)
                                                                                        window.open(item?.casino_info?.casino_affiliate_link || item?.casino_info?.url_casino, '_blank', 'noopener,noreferrer')
                                                                                    }}
                                                                                    aria-label="Put your description here."
                                                                                    className="item-baner-row-block__btn casino-card__bnt"
                                                                                >
                                                                                    Play
                                                                                </a>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="baner-row-block__slider-bottom">
                                        <div id="safest-casino-pagination-1" ref={paginationRef} className="baner-row-block__pagination bottom-slider__pagination safest-casino-2-baner__pagination swiper-pagination"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="safest-casino-2-gamble__slider row-block__slider slider">
                                <div className="slider__body">
                                    <div className="safest-casino-2-gamble__swiper slider__swiper swiper">
                                        <div>
                                            <Swiper
                                                speed={1000}
                                                slidesPerView="auto"
                                                modules={[Pagination, Autoplay]}
                                                autoplay={
                                                    isAutoPlay && {
                                                        delay: 4000,
                                                        disableOnInteraction: false,
                                                    }
                                                }
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
                                                {smallCards.map((item, index) => (
                                                    <SwiperSlide key={index} className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                                        <div className="slide-slider__item different-casino-bg">
                                                            <Link rel="nofollow noopener" to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="different-casino-bg__image-block">
                                                                <span className="different-casino-bg__image ibg--custom">
                                                                    <LazyCardImg img={item.casino_info.casino_image || ''} height="100%" width="100%" />
                                                                </span>
                                                            </Link>
                                                            <div className="different-casino-bg__content">
                                                                <Link rel="nofollow noopener" to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="different-casino-bg__name">
                                                                    {item.casino_info.casino_name}
                                                                </Link>
                                                                <div className="different-casino-bg__info">
                                                                    {item.casino_info.additional_casino_params.map((it, cindex) => (
                                                                        <span key={cindex} className="different-casino-bg__info-link">
                                                                            {it}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                                <div className="different-casino-bg__rating">
                                                                    <span className="different-casino-bg__rating-icon">
                                                                        <img src={shield} alt="shield" />
                                                                    </span>
                                                                    <span className="different-casino-bg__rating-number">{item.casino_info.casino_rank}</span>
                                                                    <span className="different-casino-bg__rating-text">Safety Index</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}
