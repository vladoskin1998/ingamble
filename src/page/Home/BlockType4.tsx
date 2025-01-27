import star from '../../assets/img/icons/star.svg'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { useEffect, useRef } from 'react'
import {  DataHomeItemsBlock, HomeDataBlock } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { SeeAllButton } from './SeeAllButton'
import { cloacingFetch, cloacingLink } from '../../helper'
import { Link } from 'react-router-dom'
import { useAdaptiveBehavior } from '../../context/AppContext'
import { useInView } from 'react-intersection-observer'


export default function BlockType4({ data, initialInView = false }: { data: HomeDataBlock<DataHomeItemsBlock>; initialInView?: boolean }) {
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
    const { isShowPlayButton } = useAdaptiveBehavior()

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        initialInView
    })

    return (
        <section ref={ref} aria-label="BlockTypeNumber.BlockType4" className="main-gamble__highest-max-bet-bonuses-2 highest-max-bet-bonuses-2-gamble main-gamble__casino-big-cards">
            {inView && (
                <div className="highest-max-bet-bonuses-2-gamble__container container">
                    <div className="highest-max-bet-bonuses-2-gamble__top top">
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
                    <div className="highest-max-bet-bonuses-2-gamble__slider slider">
                        <div className="slider__body">
                            <div className="highest-max-bet-bonuses-2-gamble__swiper slider__swiper swiper">
                                <div className="slider__wrapper swiper-wrapper">
                                    <Swiper
                                        className="slider__wrapper swiper-wrapper"
                                        slidesPerView="auto"
                                        modules={[Pagination]}
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
                                        {data.items_block.data_cards
                                            .sort((a, b) => a.order - b.order)
                                            .map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="slider__slide slide-slider swiper-slide">
                                                        <div aria-label="Put your description here." className="slide-slider__item casino-big-card">
                                                            <Link className="casino-big-card__image ibg--custom" to={`/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`}>
                                                                <LazyCardImg img={item?.bonus_info?.bonus_image || ''} width="100%" />
                                                            </Link>
                                                            <div className="casino-big-card__top">
                                                                <div className="casino-big-card__top-small-card casino-small-card">
                                                                    <Link to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="casino-small-card__image-block">
                                                                        <div className="casino-small-card__image ibg--custom">
                                                                            <LazyCardImg img={item?.casino_info?.casino_image || ''} size="medium" />
                                                                        </div>
                                                                    </Link>
                                                                    <div className="casino-small-card__body">
                                                                        <Link to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="casino-small-card__name">
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
                                                            <div className="casino-big-card__bottom">
                                                                <Link
                                                                    to={`/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`}
                                                                    aria-label="Put your description here."
                                                                    className="casino-big-card__title"
                                                                    style={{
                                                                        maxWidth: '60%',
                                                                    }}
                                                                >
                                                                    <span className="casino-big-card__title-label">{item?.bonus_info?.bonus_name}</span>
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
                                                                        className="casino-big-card__btn"
                                                                    >
                                                                        Play
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="slider__bottom bottom-slider">
                            <div ref={paginationRef} className="bottom-slider__pagination highest-max-bet-bonuses-2-gamble__pagination swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
