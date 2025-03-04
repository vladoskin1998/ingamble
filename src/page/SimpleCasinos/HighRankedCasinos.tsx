import starIcon from '../../assets/img/icons/star.svg'
import likeIcon from '../../assets/img/icons/like.svg'
import playingCards from '../../assets/img/playing-cards.png'
import { useEffect, useRef, useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import $api from '../../http'
import { СasinosInRankRangeResponse } from '../../types'
import { useQuery } from 'react-query'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import {  getTagColorByindex, sanitizeNumberLike } from '../../helper'
import { Link } from 'react-router-dom'

const getFilteringCasinoList = async () => {
    const response = await $api.get(`casinos-in-rank-range/`)
    const headers = response.headers
    return { dataCasinosRes: response.data, headers }
}

export const HighRankedCasinos = () => {
    const { data } = useQuery<{
        dataCasinosRes: СasinosInRankRangeResponse[]
        headers: any
    }>(['casinos-in-rank-range/'], () => getFilteringCasinoList(), {
        keepPreviousData: true,
        staleTime: Infinity,
    })

    const dataCasino = data?.dataCasinosRes

    const [isBeginning, setIsBeginning] = useState<boolean>(true)
    const [isEnd, setIsEnd] = useState<boolean>(false)

    const sliderRef = useRef<SwiperRef | null>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)

    const pcSliderRef = useRef<SwiperRef | null>(null)
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

    const handleSlideChange = () => {
        if (pcSliderRef.current) {
            setIsBeginning(pcSliderRef.current.swiper.isBeginning)
            setIsEnd(pcSliderRef.current.swiper.isEnd)
        }
    }

    const nextSlide = () => {
        if (pcSliderRef.current) {
            pcSliderRef.current.swiper.slideNext()
            handleSlideChange()
        }
    }

    const prevSlide = () => {
        if (pcSliderRef.current) {
            pcSliderRef.current.swiper.slidePrev()
            handleSlideChange()
        }
    }
    return (
        <section className="review__other-сasinos other-сasinos-review main-gamble__baner-block">
            <div className="other-сasinos-review__container container">
                <div className="other-сasinos-review__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">Other High Ranked Casinos</h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <div className="navigation-btns">
                                <button onClick={prevSlide} className={`navigation-btn navigation-btn_prev other-сasinos-review-navigation-btn other-сasinos-review-navigation-btn_prev ${isBeginning ? 'swiper-button-disabled' : ''}`}>
                                    <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </button>
                                <button onClick={nextSlide} className={`navigation-btn navigation-btn_next other-сasinos-review-navigation-btn other-сasinos-review-navigation-btn_next ${isEnd ? 'swiper-button-disabled' : ''}`}>
                                    <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-сasinos-review__row main-gamble__row-block row-block row-block__left">
                    <div className="row-block__baner row-block__baner_left baner-row-block">
                        <div className="baner-row-block__body">
                            <div className="baner-row-block__waves">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="baner-row-block__image">
                                <img src={playingCards} alt="playing-cards" />
                            </div>
                            <div className="baner-row-block__content">
                                <div className="baner-row-block__text">
                                    {'Other '} <span>High Ranked</span>
                                    {' Casinos'}
                                </div>
                                <Link to="/all-casinos" aria-label="Put your description here." className="baner-row-block__btn best-casinos-2024-2-gamble__btn">
                                    See All
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="other-сasinos-review__slider row-block__slider slider">
                        <div className="slider__body">
                            <div className="other-сasinos-review__swiper slider__swiper swiper">
                                <Swiper
                                    className="slider__wrapper swiper-wrapper"
                                    slidesPerView="auto"
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
                                    ref={pcSliderRef}
                                    onSlideChange={handleSlideChange}
                                >
                                    {dataCasino
                                        ?.reduce((acc: [СasinosInRankRangeResponse, СasinosInRankRangeResponse?][], item, index) => {
                                            if (index % 2 === 0) {
                                                acc.push([item])
                                            } else {
                                                acc[acc.length - 1].push(item)
                                            }
                                            return acc
                                        }, [])
                                        .map((item) => (
                                            <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item item-slide-slider">
                                                    <Link to={`/casino/${item?.[0]?.casino_slug}`} aria-label="Put your description here." className="item-slide-slider__image-block">
                                                        <span className="item-slide-slider__image ibg--custom">
                                                            <LazyCardImg img={item?.[0].image || ''} height="auto" width="100%" />
                                                        </span>
                                                    </Link>
                                                    <div className="item-slide-slider__content">
                                                        <Link to={`/casino/${item?.[0]?.casino_slug}}`} aria-label="Put your description here." className="item-slide-slider__name">
                                                            {item?.[0]?.name}
                                                        </Link>
                                                        <div className="item-slide-slider__tags tags-casino-card">
                                                            {item?.[0]?.additional_casino_params
                                                                ?.sort((a, b) => a.localeCompare(b))
                                                                ?.map((l, ct) => (
                                                                    <div className={`tags-casino-card__item ${getTagColorByindex(ct)}`}>
                                                                        <span className="tags-casino-card__item-label">{l}</span>
                                                                    </div>
                                                                ))}
                                                        </div>
                                                        <div className="item-slide-slider__bottom">
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <img src={starIcon} alt="star" />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">{item?.[0]?.casino_rank}</span>
                                                            </div>
                                                            <div className="info-casino-card__likes">
                                                                <span className="info-casino-card__likes-icon">
                                                                    <img src={likeIcon} alt="like" />
                                                                </span>
                                                                <span className="info-casino-card__likes-number">{sanitizeNumberLike(item?.[0]?.likes)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide-slider__item item-slide-slider">
                                                    <Link to={`/casino/${item?.[1]?.casino_slug}`} aria-label="Put your description here." className="item-slide-slider__image-block">
                                                        <span className="item-slide-slider__image ibg--custom">
                                                            <LazyCardImg img={item?.[1]?.image || ''} height="auto" width="100%" />
                                                        </span>
                                                    </Link>
                                                    <div className="item-slide-slider__content">
                                                        <Link to={`/casino/${item?.[1]?.casino_slug}`} aria-label="Put your description here." className="item-slide-slider__name">
                                                            {item?.[1]?.name}
                                                        </Link>
                                                        <div className="item-slide-slider__tags tags-casino-card">
                                                            {item?.[1]?.additional_casino_params
                                                                ?.sort((a, b) => a.localeCompare(b))
                                                                ?.map((l, ct) => (
                                                                    <div className={`tags-casino-card__item ${getTagColorByindex(ct)}`}>
                                                                        <span className="tags-casino-card__item-label">{l}</span>
                                                                    </div>
                                                                ))}
                                                        </div>
                                                        <div className="item-slide-slider__bottom">
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <img src={starIcon} alt="like" />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">{item?.[1]?.casino_rank}</span>
                                                            </div>
                                                            <div className="info-casino-card__likes">
                                                                <span className="info-casino-card__likes-icon">
                                                                    <img src={likeIcon} alt="like" />
                                                                </span>
                                                                <span className="info-casino-card__likes-number">{sanitizeNumberLike(item?.[1]?.likes)}</span>
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
                </div>
                <div className="other-сasinos-review__slider-mob slider-mob-other-сasinos-review">
                    <div className="slider-mob-other-сasinos-review__container container">
                        <div className="slider-mob-other-сasinos-review__slider slider">
                            <div className="slider__body">
                                <div className="slider-mob-other-сasinos-review__swiper slider__swiper swiper">
                                    <Swiper
                                        className="slider__wrapper swiper-wrapper"
                                        slidesPerView="auto"
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
                                        {dataCasino?.map((item) => (
                                            <SwiperSlide className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item item-slide-slider">
                                                    <Link to={`/casino/${item?.casino_slug}`} aria-label="Put your description here." className="item-slide-slider__image-block">
                                                        <span className="item-slide-slider__image ibg--custom">
                                                            <LazyCardImg img={item?.image || ''} height="auto" width="100%" />
                                                        </span>
                                                    </Link>
                                                    <div className="item-slide-slider__content">
                                                        <Link to={`/casino/${item?.casino_slug}`} aria-label="Put your description here." target="_blank" className="item-slide-slider__name">
                                                            {item.name}
                                                        </Link>
                                                        <div className="item-slide-slider__tags tags-casino-card">
                                                            {item?.additional_casino_params
                                                                ?.sort((a, b) => a.localeCompare(b))
                                                                ?.map((l, ct) => (
                                                                    <div className={`tags-casino-card__item ${getTagColorByindex(ct)}`}>
                                                                        <span className="tags-casino-card__item-label">{l}</span>
                                                                    </div>
                                                                ))}
                                                        </div>
                                                        <div className="item-slide-slider__bottom">
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <img src={starIcon} alt="star" />
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">{item.casino_rank}</span>
                                                            </div>
                                                            <div className="info-casino-card__likes">
                                                                <span className="info-casino-card__likes-icon">
                                                                    <img src={likeIcon} alt="like" />
                                                                </span>
                                                                <span className="info-casino-card__likes-number">{sanitizeNumberLike(item.likes)}</span>
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
                                <div ref={paginationRef} className="bottom-slider__pagination slider-mob-other-сasinos-review__pagination swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
