//@ts-ignore
import React, { useEffect, useRef } from 'react'
import starIcon from '../../assets/img/icons/star.svg'
import likeIcon from '../../assets/img/icons/like.svg'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { SwiperRef } from 'swiper/react'
import { Link, useNavigate } from 'react-router-dom'
import { cloacingFetch, cloacingLink, sanitizeNumberLike } from '../../helper'
import { LazyCardImg } from '../lazy-img/LazyCardImg'
import { useAdaptiveBehavior } from '../../context/AppContext'
import { Autoplay } from 'swiper/modules'

const MainSlider = ({
    data,
    isAutoPlay=false,
}: {
    data?: {
        img: string | null
        casinoName: string
        bonuseName?: string
        raiting: string | number
        likes: string | number
        tags?: React.ReactNode
        imageLink?: string
        playLink?: string
        casinoLink?: string
        bonuseLink?: string
    }[]
    isAutoPlay?: boolean
}) => {
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

    const navigate = useNavigate()

    const navToImageLink = (e: React.MouseEvent, l: string) => {
        e.preventDefault()
        navigate(l)
    }

    const { isShowPlayButton } = useAdaptiveBehavior()
    return (
        <div className="more-staket-simple-bonus__slider slider">
            <div className="slider__body">
                <div className="more-staket-simple-bonus__swiper slider__swiper swiper">
                    <div className="slider__wrapper">
                        <Swiper
                            lazyPreloadPrevNext={1}
                            slidesPerView="auto"
                            ref={sliderRef}
                            pagination={{
                                el: paginationRef.current,
                                clickable: true,
                            }}
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
                            speed={1000}
                        >
                            {data?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slide-slider__item casino-card">
                                        <div className="casino-card__image-block">
                                            <Link to={item?.imageLink || '/'} onClick={(e) => navToImageLink(e, item?.imageLink || '')} aria-label="Put your description here." className="casino-card__image">
                                                <LazyCardImg img={item.img || ''} width="100%" height="100%" />
                                            </Link>
                                            {isShowPlayButton && (
                                                <a
                                                    rel="nofollow noopener"
                                                    href={cloacingLink(item.casinoName)}
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        e.preventDefault()
                                                        cloacingFetch(item.playLink)
                                                        window.open(item.playLink, '_blank', 'noopener,noreferrer')
                                                    }}
                                                >
                                                    Play
                                                </a>
                                            )}
                                        </div>
                                        {item?.tags && <div className="casino-card__tags tags-casino-card">{item.tags}</div>}
                                        <div className="casino-card__content">
                                            <div className="casino-card__info info-casino-card">
                                                <div className="info-casino-card__stake">
                                                    <Link rel="nofollow noopener" to={item?.casinoLink ? item?.casinoLink : '#'} aria-label="Put your description here." className="info-casino-card__stake-link">
                                                        {item.casinoName}
                                                    </Link>
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon casino-small-card__rating-icon">
                                                            <img src={starIcon} alt="star" />
                                                        </span>
                                                        <span>{item.raiting}</span>
                                                    </div>
                                                </div>
                                                <div className="info-casino-card__likes">
                                                    <span className="info-casino-card__likes-icon">
                                                        <img src={likeIcon} alt="like" />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">{sanitizeNumberLike(item?.likes || 0)}</span>
                                                </div>
                                            </div>

                                            <Link rel="nofollow noopener" to={item?.bonuseLink ? item?.bonuseLink : '#'} aria-label="Put your description here." className="casino-card__name">
                                                {item?.bonuseName}
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="slider__bottom bottom-slider">
                <div ref={paginationRef} className="bottom-slider__pagination more-staket-simple-bonus__pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
            </div>
        </div>
    )
}

export default MainSlider
