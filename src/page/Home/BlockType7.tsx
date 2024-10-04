import { useRef, useEffect } from "react"
import { SwiperRef } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import shieldIcon from "../../assets/img/icons/shield.svg"
import { BlockTypeNumber, HomeDataBlock } from "../../types"
import { LazyCardImg } from "../../components/LazyImg/LazyCardImg"

export const BlockType7 = ({ data }: { data: HomeDataBlock | undefined }) => {
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

    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType7)
        return <></>
    return (
        <section className="main-gamble__low-risk-bonuses low-risk-bonuses-gamble main-gamble__different-casino-bg">
            <div className="low-risk-bonuses-gamble__container container">
                <div className="low-risk-bonuses-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data.items_block.title_image && (
                                    <span className="top__title-icon">
                                        <img
                                            src={data.items_block.title_image}
                                            alt="security"
                                        />
                                    </span>
                                )}
                                <h2 className="top__title">
                                    {data.items_block.block_title}
                                </h2>
                            </div>
                            {data.items_block.subtitle && (
                                <div className="top__subtitle">
                                    {data.items_block.subtitle}
                                </div>
                            )}
                        </div>
                        <div className="top__column">
                            <a
                                href="/see-all?key=11234567"
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
                <div className="low-risk-bonuses-gamble__slider slider">
                    <div className="slider__body">
                        <div className="low-risk-bonuses-gamble__swiper slider__swiper swiper">
                            <Swiper
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
                                }}
                            >
                                {data.items_block.data_cards
                                    .sort((a, b) => a.order - b.order)
                                    .map((item) => (
                                        <SwiperSlide className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                            <div className="slide-slider__item different-casino-bg">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="different-casino-bg__image-block"
                                                >
                                                    <span className="different-casino-bg__image ibg">
                                                        <LazyCardImg
                                                            img={
                                                                item.casino_info
                                                                    .casino_image ||
                                                                ""
                                                            }
                                                        />
                                                    </span>
                                                </a>
                                                <div className="different-casino-bg__content">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-bg__name"
                                                    >
                                                        {
                                                            item.casino_info
                                                                .casino_name
                                                        }
                                                    </a>
                                                    <div className="different-casino-bg__info">
                                                        {item.casino_info.additional_casino_params.map(
                                                            (it) => (
                                                                <span className="different-casino-bg__info-link">
                                                                    {it}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="different-casino-bg__rating">
                                                        <span className="different-casino-bg__rating-icon">
                                                            <img
                                                                src={shieldIcon}
                                                                alt="shield"
                                                            />
                                                        </span>
                                                        <span className="different-casino-bg__rating-number">
                                                            {
                                                                item.casino_info
                                                                    .casino_rank
                                                            }
                                                        </span>
                                                        <span className="different-casino-bg__rating-text">
                                                            Safety Index
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div
                            ref={paginationRef}
                            className="bottom-slider__pagination low-risk-bonuses-gamble__pagination swiper-pagination"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
