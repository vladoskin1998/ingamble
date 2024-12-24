import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useEffect, useRef } from "react"
import { BlockTypeNumber, HomeDataBlock } from "../../types"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { SeeAllButton } from "./SeeAllButton"
import { cloacingLink, sanitizeLink } from "../../helper"
import { Link } from "react-router-dom"

export default function BlockType4({
    data,
}: {
    data: HomeDataBlock | undefined
}) {
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
        <section
            aria-label="BlockTypeNumber.BlockType4"
            className="main-gamble__highest-max-bet-bonuses-2 highest-max-bet-bonuses-2-gamble main-gamble__casino-big-cards"
        >
            <div className="highest-max-bet-bonuses-2-gamble__container container">
                <div className="highest-max-bet-bonuses-2-gamble__top top">
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
                            <SeeAllButton
                                type_category={data.items_block.type_category}
                                parameter={
                                    data?.items_block?.category?.name || ""
                                }
                                id={data?.items_block?.category?.id}
                            />
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
                                                    <div
                                                        aria-label="Put your description here."
                                                        className="slide-slider__item casino-big-card"
                                                    >
                                                        <Link
                                                            className="casino-big-card__image ibg--custom"
                                                            to={`/casino/${sanitizeLink(
                                                                item
                                                                    ?.casino_info
                                                                    ?.casino_name
                                                            )}/bonuses/${sanitizeLink(
                                                                item?.bonus_info
                                                                    ?.bonus_name
                                                            )}?queryId=${
                                                                item?.bonus_info
                                                                    ?.bonus_id
                                                            }`}
                                                           
                                                        >
                                                            <LazyCardImg
                                                                img={
                                                                    item
                                                                        ?.bonus_info
                                                                        ?.bonus_image ||
                                                                    ""
                                                                }
                                                                    width="100%"
                                                            />
                                                        </Link>
                                                        <div className="casino-big-card__top">
                                                            <div className="casino-big-card__top-small-card casino-small-card">
                                                                <Link
                                                                    to={`/casino/${sanitizeLink(
                                                                        item
                                                                            ?.casino_info
                                                                            ?.casino_name
                                                                    )}?queryId=${
                                                                        item
                                                                            ?.casino_info
                                                                            ?.casino_id
                                                                    }`}
                                                                    aria-label="Put your description here."
                                                                    className="casino-small-card__image-block"
                                                                >
                                                                    <div
                                                                        className="casino-small-card__image ibg"
                                                                  
                                                                    >
                                                                        <LazyCardImg
                                                                            img={
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.casino_image ||
                                                                                ""
                                                                            }
                                                                            size="medium"
                                                                        />
                                                                    </div>
                                                                </Link>
                                                                <div className="casino-small-card__body">
                                                                    <Link
                                                                        to={`/casino/${sanitizeLink(
                                                                            item
                                                                                ?.casino_info
                                                                                ?.casino_name
                                                                        )}?queryId=${
                                                                            item
                                                                                ?.casino_info
                                                                                ?.casino_id
                                                                        }`}
                                                                        aria-label="Put your description here."
                                                                        className="casino-small-card__name"
                                                                    >
                                                                        {
                                                                            item
                                                                                ?.casino_info
                                                                                ?.casino_name
                                                                        }
                                                                    </Link>
                                                                    <div className="casino-small-card__info">
                                                                        {item?.casino_info?.additional_casino_params?.map(
                                                                            (
                                                                                item
                                                                            ) => (
                                                                                <span className="casino-small-card__info-link">
                                                                                    {
                                                                                        item
                                                                                    }
                                                                                </span>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                    <div className="casino-small-card__rating">
                                                                        <span className="casino-small-card__rating-icon">
                                                                            <img
                                                                                src={
                                                                                    star
                                                                                }
                                                                                alt="star"
                                                                            />
                                                                        </span>
                                                                        <span className="casino-small-card__rating-number">
                                                                            {
                                                                                item
                                                                                    ?.casino_info
                                                                                    ?.casino_rank
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="casino-big-card__bottom">
                                                            <Link
                                                                to={`/casino/${sanitizeLink(
                                                                    item
                                                                        ?.casino_info
                                                                        ?.casino_name
                                                                )}/bonuses/${sanitizeLink(
                                                                    item
                                                                        ?.bonus_info
                                                                        ?.bonus_name
                                                                )}?queryId=${
                                                                    item
                                                                        ?.bonus_info
                                                                        ?.bonus_id
                                                                }`}
                                                                aria-label="Put your description here."
                                                                className="casino-big-card__title"
                                                                style={{
                                                                    maxWidth:
                                                                        "60%",
                                                                }}
                                                            >
                                                                <span className="casino-big-card__title-label">
                                                                    {
                                                                        item
                                                                            ?.bonus_info
                                                                            ?.bonus_name
                                                                    }
                                                                </span>
                                                            </Link>
                                                            <a
                                                                href={cloacingLink(
                                                                    item
                                                                    ?.casino_info
                                                                    ?.url_casino ||  item
                                                                        ?.casino_info
                                                                        ?.casino_affiliate_link 
                                                                       
                                                                )}
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.stopPropagation()
                                                                    e.preventDefault()
                                                                    window.open(
                                                                        item
                                                                            ?.casino_info
                                                                            ?.casino_affiliate_link ||
                                                                            item
                                                                                ?.casino_info
                                                                                ?.url_casino,
                                                                        "_blank",
                                                                        "noopener,noreferrer"
                                                                    )
                                                                }}
                                                                className="casino-big-card__btn"
                                                            >
                                                                Play
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
                            className="bottom-slider__pagination highest-max-bet-bonuses-2-gamble__pagination swiper-pagination"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
