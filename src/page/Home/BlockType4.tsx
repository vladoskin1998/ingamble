import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import casinoBigCard02 from "../../assets/img/casino-big-cards/02.jpg";
import casinoVibes from "../../assets/img/casino-small-cards/Casino-Vibes.jpg";

import casinoBigCard04 from "../../assets/img/casino-big-cards/04.jpg";
import playkasino from "../../assets/img/casino-small-cards/Playkasino.jpg";

import casinoBigCard05 from "../../assets/img/casino-big-cards/05.jpg";
import tsars from "../../assets/img/casino-small-cards/Tsars.jpg";


import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useEffect, useRef } from "react"
import { BlockTypeNumber, HomeDataBlock } from "../../types";

export const BlockType4 = ({ data }: { data: HomeDataBlock | undefined }) => {
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

    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType4)
        return <></>
    return (
        <section className="main-gamble__highest-max-bet-bonuses-2 highest-max-bet-bonuses-2-gamble main-gamble__casino-big-cards">
            <div className="highest-max-bet-bonuses-2-gamble__container container">
                <div className="highest-max-bet-bonuses-2-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    {data.items_block.block_title}
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                href="/see-all?key=89012345"
                                aria-label="Put your description here."
                                target="_blank"
                                className="top__btn"
                            >
                                <span>See All</span>
                                <span className="top__btn-arrow">
                                    <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </span>
                            </a>
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
                                spaceBetween={20}
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
                                }}>
                                    {
                                        data.items_block.data_cards.map(item =>  <SwiperSlide>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <a
                                                    href=""
                                                    target="_blank"
                                                    aria-label="Put your description here."
                                                    className="slide-slider__item casino-big-card"
                                                >
                                                    <div className="casino-big-card__image ibg">
                                                        <img
                                                            src={item.bonus_info.bonus_image || ''}
                                                            alt="Welcome Casino Bonus"
                                                        />
                                                    </div>
                                                    <div className="casino-big-card__top">
                                                        <div className="casino-big-card__top-small-card casino-small-card">
                                                            <a
                                                                href=""
                                                                aria-label="Put your description here."
                                                                target="_blank"
                                                                className="casino-small-card__image-block"
                                                            >
                                                                <div className="casino-small-card__image ibg">
                                                                    <img
                                                                        src={item.casino_info.casino_image || ''}
                                                                        alt="Casino Vibes"
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="casino-small-card__body">
                                                                <a
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    target="_blank"
                                                                    className="casino-small-card__name"
                                                                >
                                                                    {item.casino_info.casino_name }
                                                                </a>
                                                                <div className="casino-small-card__info">
                                                                {item.casino_info.additional_casino_params.map(item =><span className="casino-small-card__info-link">
                                                                        {item}
                                                                    </span>)}
                                                                    
                                                                  
                                                                </div>
                                                                <div className="casino-small-card__rating">
                                                                    <span className="casino-small-card__rating-icon">
                                                                        <img
                                                                            src={star}
                                                                            alt="star"
                                                                        />
                                                                    </span>
                                                                    <span className="casino-small-card__rating-number">
                                                                    {item.casino_info.casino_rank }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="casino-big-card__bottom">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-big-card__title"
                                                        >
                                                            <span className="casino-big-card__title-label">
                                                               {
                                                                item.bonus_info.bonus_name
                                                               }
                                                            </span>
                                                         
                                                        </a>
                                                        <a
                                                            href={item.casino_info.casino_affiliate_link}
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-big-card__btn"
                                                        >
                                                            Play
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                      )
                                    }
                              
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div ref={paginationRef} className="bottom-slider__pagination highest-max-bet-bonuses-2-gamble__pagination swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
