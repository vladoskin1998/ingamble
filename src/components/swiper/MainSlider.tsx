import React, { useEffect, useRef, useState } from "react"
import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { SwiperRef } from "swiper/react"
import { LineLoader } from "../loader/LineLoader"

const MainSliderImg = ({ img }: { img: string }) => {
    const [loading, setLoading] = useState(true)

    return (
        <div className="casino-card__image ibg">
            {loading && !img && <LineLoader />}
            <img
                src={img}
                alt=""
                loading="lazy"
                onLoad={() => setLoading(false)}
            />
        </div>
    )
}

const MainSlider = ({
    data,
}: {
    data?: {
        img: string | null
        nameCasino: string
        comment: string
        raiting: string
        likes: string | number
        tags?: React.ReactNode
        link?: string
    }[]
}) => {
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
    return (
        <div className="more-staket-simple-bonus__slider slider">
            <div className="slider__body">
                <div className="more-staket-simple-bonus__swiper slider__swiper swiper">
                    <div className="slider__wrapper">
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={20}
                            ref={sliderRef}
                            pagination={{
                                el: paginationRef.current,
                                clickable: true,
                            }}
                            modules={[Pagination]}
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
                            {data?.map((item) => (
                                <SwiperSlide>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item casino-card">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="casino-card__image-block"
                                            >
                                                <MainSliderImg
                                                    img={item.img || ""}
                                                />
                                                <a
                                                    rel="nofollow noopener"
                                                    href={item.link}
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                >
                                                    Play
                                                </a>
                                            </a>
                                            {item?.tags && (
                                                <div className="casino-card__tags tags-casino-card">
                                                    {item.tags}
                                                </div>
                                            )}
                                            <div className="casino-card__content">
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a
                                                            rel="nofollow noopener"
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="info-casino-card__stake-link"
                                                        >
                                                            {item.nameCasino}
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon casino-small-card__rating-icon">
                                                                <img
                                                                    src={
                                                                        starIcon
                                                                    }
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span>
                                                                {item.raiting}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={likeIcon}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            {item.likes || 0}
                                                        </span>
                                                    </div>
                                                </div>

                                                <a
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__name"
                                                >
                                                    Crazy Cash Bomb Winnings
                                                    $1,000,000 asdasdas
                                                    WQEasdasd
                                                </a>
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
                <div
                    ref={paginationRef}
                    className="bottom-slider__pagination more-staket-simple-bonus__pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                ></div>
            </div>
        </div>
    )
}

export default MainSlider
