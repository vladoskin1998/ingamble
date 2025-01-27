import star from '../../assets/img/icons/star.svg'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
//@ts-ignore
import { useEffect, useRef } from 'react'
import {  DataHomeItemsBlock, HomeDataBlock } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { SeeAllButton } from './SeeAllButton'
import { cloacingFetch, cloacingLink } from '../../helper'
import { Link } from 'react-router-dom'
import { useAdaptiveBehavior } from '../../context/AppContext'
import { useInView } from 'react-intersection-observer'

export default function BlockType2Mobile({ data, initialInView = false }: { data: HomeDataBlock<DataHomeItemsBlock>; initialInView?: boolean }) {
    const sliderRef = useRef<SwiperRef | null>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)
    
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
  
    const { isShowPlayButton } = useAdaptiveBehavior()

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        initialInView
    })

    return (
        <section ref={ref} aria-label="BlockTypeNumber.BlockType2" className="main-gamble__new-bonuses new-bonuses-gamble playing-now-gamble  main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
            {inView && (
                <div className="new-bonuses-gamble__container container">
                    <div className="new-bonuses-gamble__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    {data.items_block.title_image && (
                                        <span className="top__title-icon ibg--custom ibg--custom-width-auto">
                                            <img src={data.items_block.title_image} alt="security" />
                                        </span>
                                    )}
                                    <h2 className="top__title">{data?.items_block?.block_title}</h2>
                                </div>
                                {data?.items_block?.subtitle && <div className="top__subtitle">{data?.items_block?.subtitle}</div>}
                            </div>
                            <div className="top__column">
                                <SeeAllButton type_category={data.items_block.type_category} slug={data?.items_block?.category?.slug} />
                            </div>
                        </div>
                    </div>
                    <div className="new-bonuses-gamble__slider slider">
                        <div className="slider__body">
                            <div className="new-bonuses-gamble__swiper slider__swiper swiper">
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
                                    {data?.items_block?.data_cards
                                        .sort((a, b) => a?.order - b?.order)
                                        .map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="slider__slide slide-slider swiper-slide">
                                                    <div className="slide-slider__item casino-card">
                                                        <div rel="nofollow noopener" aria-label="Put your description here." className="casino-card__image-block">
                                                            <Link className="casino-card__image ibg--custom" to={`/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`}>
                                                                <LazyCardImg img={item?.bonus_info?.bonus_image || ''} height="100%" width="100%" />
                                                            </Link>
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
                                                                    className="casino-card__bnt"
                                                                >
                                                                    Play
                                                                </a>
                                                            )}
                                                        </div>
                                                        <div className="casino-card__content">
                                                            <div className="casino-card__small-card casino-small-card">
                                                                <Link rel="nofollow noopener" to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="casino-small-card__image-block">
                                                                    <div className="casino-small-card__image ibg--custom">
                                                                        <LazyCardImg img={item?.casino_info?.casino_image || ''} height="100%" width="100%" />
                                                                    </div>
                                                                </Link>
                                                                <div className="casino-small-card__body">
                                                                    <Link rel="nofollow noopener" to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="casino-small-card__name">
                                                                        {item?.casino_info?.casino_name}
                                                                    </Link>
                                                                    <div className="casino-small-card__info">
                                                                        {item?.casino_info?.additional_casino_params?.map((item, cindex) => (
                                                                            <span key={cindex} className="casino-small-card__info-link">
                                                                                {item}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                    <div className="casino-small-card__rating">
                                                                        <span className="casino-small-card__rating-icon">
                                                                            <img src={star} alt="star" />
                                                                        </span>
                                                                        <span className="casino-small-card__rating-number">{item?.casino_info?.casino_rank}</span>
                                                                    </div>
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
                            <div ref={paginationRef} className="bottom-slider__pagination new-bonuses-gamble__pagination swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
