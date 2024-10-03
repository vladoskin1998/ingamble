import star from "../../assets/img/icons/star.svg"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { useEffect, useRef } from "react"
import { BlockTypeNumber, HomeDataBlock } from "../../types"

export default function BlockType2Mobile({
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

    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType2)
        return <></>
    return (
        <section className="main-gamble__new-bonuses new-bonuses-gamble playing-now-gamble  main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
            <div className="new-bonuses-gamble__container container">
                <div className="new-bonuses-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <span className="top__title-icon">
                                    {data.items_block.title_image && (
                                        <img
                                            src={data.items_block.title_image}
                                            alt="security"
                                        />
                                    )}
                                </span>
                                <h2 className="top__title">
                                    {data.items_block.block_title}
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                href="/see-all?key=77890123"
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
                <div className="new-bonuses-gamble__slider slider">
                    <div className="slider__body">
                        <div className="new-bonuses-gamble__swiper slider__swiper swiper">
                            <Swiper
                                ref={sliderRef}
                                className="slider__wrapper swiper-wrapper"
                                slidesPerView="auto"
                                spaceBetween={20}
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
                                {data.items_block.data_cards.map((item) => (
                                    <SwiperSlide>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image ibg">
                                                        <img
                                                            src={
                                                                item?.bonus_info
                                                                    ?.bonus_image ||
                                                                ""
                                                            }
                                                            alt="Big Fat Race to $100 Moon coins "
                                                        />
                                                    </div>
                                                    <a
                                                        href={
                                                            item?.casino_info
                                                                ?.casino_affiliate_link
                                                        }
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__small-card casino-small-card">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="casino-small-card__image-block"
                                                        >
                                                            <div className="casino-small-card__image ibg">
                                                                <img
                                                                    src={
                                                                        item
                                                                            ?.casino_info
                                                                            ?.casino_image ||
                                                                        ""
                                                                    }
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
                                                                {
                                                                    item
                                                                        .casino_info
                                                                        .casino_name
                                                                }
                                                            </a>
                                                            <div className="casino-small-card__info">
                                                                {item.casino_info.additional_casino_params.map(
                                                                    (item) => (
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
                                                                            .casino_info
                                                                            .casino_rank
                                                                    }
                                                                </span>
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
                        <div
                            ref={paginationRef}
                            className="bottom-slider__pagination new-bonuses-gamble__pagination swiper-pagination"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
