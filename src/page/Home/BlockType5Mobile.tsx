import { useRef, useState } from "react"
import star from "../../assets/img/icons/star.svg"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import bg01 from "../../assets/img/bg/01.jpg"
import girl from "../../assets/img/girls/01.webp"

import { BlockTypeNumber, HomeDataBlock } from "../../types"
import { SeeAllButton } from "./SeeAllButton"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
//@ts-ignore
export default function BlockType5Mobile({
    data,
}: {
    data: HomeDataBlock | undefined
}) {
    const sliderRef = useRef<SwiperRef | null>(null)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType5)
        return <></>
    return (
        <div className="main-gamble__best-casinos-2024 best-casinos-2024-gamble main-gamble__different-casino-medium main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
            <div className="best-casinos-2024-gamble__container container">
                <div className="best-casinos-2024-gamble__body">
                    <div className="best-casinos-2024-gamble__bg ibg">
                        <img src={bg01} alt="bg" />
                    </div>
                    <div className="best-casinos-2024-gamble__waves">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div
                        className={`best-casinos-2024-gamble__girl ${
                            isScrolled && "scrolled"
                        }`}
                    >
                        <img src={girl} alt="girl" />
                    </div>
                    <div
                        className={`best-casinos-2024-gamble__slider slider-best-casinos-2024-gamble ${
                            isScrolled && "scrolled"
                        }`}
                    >
                        <div className="slider-best-casinos-2024-gamble__top top">
                            <div className="top__row">
                                <div className="top__column">
                                    <div className="top__title-block">
                                        {data.items_block.title_image && (
                                            <span className="top__title-icon">
                                                <img
                                                    src={
                                                        data.items_block
                                                            .title_image
                                                    }
                                                    alt="security"
                                                />
                                            </span>
                                        )}
                                        <h2 className="top__title">
                                            Type 5 Mobile{" "}
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
                                        type_category={
                                            data.items_block.type_category
                                        }
                                        parameter={
                                            data?.items_block?.category?.name ||
                                            ""
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="slider-best-casinos-2024-gamble__body">
                            <div className="slider-best-casinos-2024-gamble__swiper swiper">
                                <Swiper
                                    className="slider-best-casinos-2024-gamble__wrapper swiper-wrapper"
                                    ref={sliderRef}
                                    slidesPerView="auto"
                                    onSlideChange={(swiper) => {
                                        setIsScrolled(!swiper.isBeginning)
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
                                    {data?.items_block.data_cards
                                        .sort((a, b) => a?.order - b?.order)
                                        .map((item) => (
                                            <SwiperSlide className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                                <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="different-casino-medium__image-block"
                                                    >
                                                        <span className="different-casino-medium__image ibg">
                                                            <LazyCardImg
                                                                img={
                                                                    item
                                                                        ?.casino_info
                                                                        ?.casino_image ||
                                                                    ""
                                                                }
                                                                size="medium"
                                                            />
                                                        </span>
                                                    </a>
                                                    <div className="different-casino-medium__content">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="different-casino-medium__name"
                                                        >
                                                            {
                                                                item
                                                                    ?.casino_info
                                                                    ?.casino_name
                                                            }
                                                        </a>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">
                                                                {
                                                                    item
                                                                        ?.casino_info
                                                                        ?.casino_rank
                                                                }
                                                            </span>
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
            </div>
        </div>
    )
}
