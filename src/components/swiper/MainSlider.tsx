import React, { useEffect, useRef, useState } from "react"
import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { SwiperRef } from "swiper/react"
import { LineLoader } from "../loader/LineLoader"
import { Link, useNavigate } from "react-router-dom"
import { LazyImgHomeType } from "../../page/Home"
import { cloacingLink } from "../../helper"

const MainSliderImg = ({ img }: { img: string }) => {
    //@ts-ignore
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        if(img){
            setLoading(false)
        }
         
      
     
    },[img])

    return (
        <div className="casino-card__image">
            {( !img) && <LineLoader />}
            <img
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                    
                }}
                src={img}
                alt=""
                loading="lazy"
               
            />
        </div>
    )
}

const MainSlider = ({
    data,
}: {
    data?: {
        img: string | null
        casinoName: string
        bonuseName?: string
        raiting: string | number
        likes: string | number
        tags?: React.ReactNode
        imageLink?: string;
        playLink?: string;
        casinoLink?: string,
        bonuseLink?: string,
        imgLoading?: LazyImgHomeType
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

    const navigate = useNavigate()

    const navToImageLink = (e:React.MouseEvent,l:string) => {
        e.preventDefault()
        navigate(l)
    }
    return (
        <div className="more-staket-simple-bonus__slider slider">
            <div className="slider__body">
                <div className="more-staket-simple-bonus__swiper slider__swiper swiper">
                    <div className="slider__wrapper">
                        <Swiper
                            slidesPerView="auto"
                            
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
                            {data?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slider__slide slide-slider swiper-slide">
                                        <div className="slide-slider__item casino-card">
                                            <Link
                                                to={item?.imageLink || '/'}
                                                onClick={(e) => navToImageLink(e,item?.imageLink || '')}
                                                aria-label="Put your description here."
                                              
                                                className="casino-card__image-block"
                                            >
                                                <MainSliderImg
                                                    img={item.img || ""}
                                                />
                                                <a
                                                    rel="nofollow noopener"
                                                    href={cloacingLink(item.playLink) }
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="casino-card__bnt"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        e.preventDefault()
                                                        window.open(item.playLink, '_blank', 'noopener,noreferrer');
                                                       
                                                    }} 
                                                >
                                                    Play
                                                </a>
                                            </Link>
                                            {item?.tags && (
                                                <div className="casino-card__tags tags-casino-card">
                                                    {item.tags}
                                                </div>
                                            )}
                                            <div className="casino-card__content">
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <Link
                                                            rel="nofollow noopener"
                                                            to={item?.casinoLink ?  item?.casinoLink  : '#'}
                                                            aria-label="Put your description here."
                                                            
                                                            className="info-casino-card__stake-link"
                                                        >
                                                            {item.casinoName}
                                                        </Link>
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
                                                
                                                <Link
                                                    rel="nofollow noopener"
                                                    to={item?.bonuseLink ? item?.bonuseLink : "#"}
                                                    aria-label="Put your description here."
                                                    
                                                    className="casino-card__name"
                                                >
                                                    {item?.bonuseName}
                                                </Link>
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
