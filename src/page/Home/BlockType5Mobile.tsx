import { useRef, useState } from 'react'
import star from '../../assets/img/icons/star.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import bg01 from '../../assets/img/bg/01.webp'
import girl from '../../assets/img/girls/01.webp'

import { DataHomeItemsBlock, HomeDataBlock } from '../../types'
import { SeeAllButton } from './SeeAllButton'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { Autoplay } from 'swiper/modules'

export default function BlockType5Mobile({ data, initialInView = false, isAutoPlay=false }: { data: HomeDataBlock<DataHomeItemsBlock>; initialInView?: boolean; isAutoPlay?: boolean }) {
    const sliderRef = useRef<SwiperRef | null>(null)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        initialInView,
    })

    return (
        <div ref={ref} aria-label="BlockTypeNumber.BlockType5" className="main-gamble__best-casinos-2024 best-casinos-2024-gamble main-gamble__different-casino-medium main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
            {inView && (
                <div className="best-casinos-2024-gamble__container container">
                    <div className="best-casinos-2024-gamble__body">
                        <div className="best-casinos-2024-gamble__bg ibg--custom">
                            <img src={bg01} alt="bg" loading="lazy" />
                        </div>
                        <div className="best-casinos-2024-gamble__waves">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={`best-casinos-2024-gamble__girl ${isScrolled && 'scrolled'}`}>
                            <img src={girl} alt="girl" loading="lazy" />
                        </div>
                        <div className={`best-casinos-2024-gamble__slider slider-best-casinos-2024-gamble ${isScrolled && 'scrolled'}`}>
                            <div className="slider-best-casinos-2024-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            {data.items_block.title_image && (
                                                <span className="top__title-icon ibg--custom ibg--custom-width-auto">
                                                    <img src={data.items_block.title_image} alt="security" loading="lazy" />
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
                            <div className="slider-best-casinos-2024-gamble__body">
                                <div className="slider-best-casinos-2024-gamble__swiper swiper">
                                    <Swiper
                                        speed={1000}
                                        className="slider-best-casinos-2024-gamble__wrapper swiper-wrapper"
                                        ref={sliderRef}
                                        slidesPerView="auto"
                                        modules={[Autoplay]}
                                        autoplay={
                                            isAutoPlay && {
                                                delay: 4000,
                                                disableOnInteraction: false,
                                            }
                                        }
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
                                        {[...data?.items_block.data_cards]
                                            ?.sort((a, b) => a?.order - b?.order)
                                            ?.map((item, index) => (
                                                <SwiperSlide key={index} className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                                    <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                        <Link to={`/casino/${item?.casino_info?.casino_slug}`} className="different-casino-medium__image-block">
                                                            <span className="different-casino-medium__image ibg--custom">
                                                                <LazyCardImg img={item?.casino_info?.casino_image || ''} size="medium" />
                                                            </span>
                                                        </Link>
                                                        <div className="different-casino-medium__content">
                                                            <Link to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="different-casino-medium__name">
                                                                {item?.casino_info?.casino_name}
                                                            </Link>
                                                            <div className="different-casino-medium__rating">
                                                                <span className="different-casino-medium__rating-icon">
                                                                    <img src={star} alt="star" loading="lazy" />
                                                                </span>
                                                                <span className="different-casino-medium__rationg-number">{item?.casino_info?.casino_rank}</span>
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
            )}
        </div>
    )
}
