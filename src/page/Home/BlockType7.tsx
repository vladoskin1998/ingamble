import { useRef, useEffect, useMemo } from 'react'
import { SwiperRef } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import shieldIcon from '../../assets/img/icons/shield.svg'
import {  DataHomeItemsBlock,  HomeDataBlock } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { SeeAllButton } from './SeeAllButton'
import { shuffleArray } from '../../helper'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { Autoplay } from 'swiper/modules'

export default function BlockType7({ data, initialInView = false, isAutoPlay = false }: { data: HomeDataBlock<DataHomeItemsBlock>; initialInView?: boolean; isAutoPlay?: boolean }) {
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

    const dataCard = useMemo(() => {
        return shuffleArray(data?.items_block.data_cards).slice(0, 8)
    }, [data?.items_block.data_cards])

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        initialInView,
    })

    return (
        <section ref={ref} aria-label="BlockTypeNumber.BlockType7" className="main-gamble__low-risk-bonuses low-risk-bonuses-gamble main-gamble__different-casino-bg">
            {inView && (
                <div className="low-risk-bonuses-gamble__container container">
                    <div className="low-risk-bonuses-gamble__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    {data.items_block.title_image && (
                                        <span className="top__title-icon ibg--custom ibg--custom-width-auto">
                                            <img src={data.items_block.title_image} alt="security" />
                                        </span>
                                    )}
                                    <h2 className="top__title">{data.items_block.block_title}</h2>
                                </div>
                                {data.items_block.subtitle && <div className="top__subtitle">{data.items_block.subtitle}</div>}
                            </div>
                            <div className="top__column">
                                <SeeAllButton type_category={data.items_block.type_category} slug={data?.items_block?.category?.slug} />
                            </div>
                        </div>
                    </div>
                    <div className="low-risk-bonuses-gamble__slider slider">
                        <div className="slider__body">
                            <div className="low-risk-bonuses-gamble__swiper slider__swiper swiper">
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
                                    ref={sliderRef}
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
                                    {dataCard
                                        ?.slice(0, 10)
                                        ?.sort((a, b) => a.order - b.order)
                                        ?.map((item, index) => (
                                            <SwiperSlide key={index} className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                                <div className="slide-slider__item different-casino-bg">
                                                    <Link to={`/casino/${item?.casino_info?.casino_slug}`} className="different-casino-bg__image-block">
                                                        <span className="different-casino-bg__image ibg--custom">
                                                            <LazyCardImg img={item.casino_info.casino_image || ''} />
                                                        </span>
                                                    </Link>
                                                    <div className="different-casino-bg__content">
                                                        <Link to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="different-casino-bg__name">
                                                            {item.casino_info.casino_name}
                                                        </Link>
                                                        <div className="different-casino-bg__info">
                                                            {item?.casino_info?.additional_casino_params?.map((it, id) => (
                                                                <span key={id} className="different-casino-bg__info-link">
                                                                    {it}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <div className="different-casino-bg__rating">
                                                            <span className="different-casino-bg__rating-icon">
                                                                <img src={shieldIcon} alt="shield" />
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
                        <div className="slider__bottom bottom-slider">
                            <div ref={paginationRef} className="bottom-slider__pagination low-risk-bonuses-gamble__pagination swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
