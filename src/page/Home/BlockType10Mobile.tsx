import star from '../../assets/img/icons/star.svg'
import girl2 from '../../assets/img/girls/02.png'

import bg01 from '../../assets/img/bg/01.webp'

import { BlockTypeNumber, HomeDataBlock } from '../../types'
import '../../assets/css/style-type-10-11.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { Link } from 'react-router-dom'
import { SeeAllRoutes } from './SeeAllButton'

const YEAR = new Date().getFullYear()

export default function BlockType10Mobile({ data }: { data: HomeDataBlock | undefined }) {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType10) return <></>
    return (
        <div className="main-gamble__best-casinos-2024 best-casinos-2024-gamble">
            <div className="best-casinos-2024-gamble__container container">
                <div className="best-casinos-2024-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data.items_block.title_image && (
                                    <span className="top__title-icon">
                                        <img src={data.items_block.title_image} alt="security" />
                                    </span>
                                )}
                                <h2 className="top__title">{data.items_block.block_title}</h2>
                            </div>
                            {data.items_block.subtitle && <div className="top__subtitle">{data.items_block.subtitle}</div>}
                        </div>
                    </div>
                </div>
                <div className="best-casinos-2024-gamble__body">
                    <div className="best-casinos-2024-gamble__bg ibg--custom">
                        <img src={bg01} alt="bg" loading="lazy" />
                    </div>
                    <div className="best-casinos-2024-gamble__waves">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="best-casinos-2024-gamble__girl">
                        <img src={girl2} alt="girl" />
                    </div>
                    <div className="best-casinos-2024-gamble__slider slider-best-casinos-2024-gamble">
                        <div className="slider-best-casinos-2024-gamble__top top">
                            <div className="top__row">
                                <div className="top__column">
                                    <div className="top__title-block">
                                        <div className="top__title-big">The Best Casinos of {YEAR}</div>
                                    </div>
                                </div>
                                <div className="top__column">
                                    <Link to={`/all-${SeeAllRoutes[data?.items_block?.type_category]}${data?.items_block?.category?.slug || '' ? `/${data?.items_block?.category?.slug}` : ''}`} className="top__btn">
                                        <span>See All</span>
                                        <span className="top__btn-arrow">
                                            <svg>
                                                <use xlinkHref="#arrow"></use>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="slider-best-casinos-2024-gamble__body">
                            <div className="slider-best-casinos-2024-gamble__swiper swiper">
                                <Swiper
                                    className="slider-best-casinos-2024-gamble__wrapper swiper-wrapper"
                                    breakpoints={{
                                        320: {
                                            spaceBetween: 16,
                                        },
                                    }}
                                    slidesPerView="auto"
                                >
                                    {data.items_block.data_cards.map((item, index) => (
                                        <SwiperSlide key={index}  className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <Link rel="nofollow noopener" to={`/casino/${item?.casino_info?.casino_slug}`} className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg--custom">
                                                        <LazyCardImg img={item?.casino_info?.casino_image || ''} />
                                                    </span>
                                                </Link>
                                                <div className="different-casino-medium__content">
                                                    <Link rel="nofollow noopener" to={`/casino/${item?.casino_info?.casino_slug}`} className="different-casino-medium__name">
                                                        {item?.casino_info?.casino_name}
                                                    </Link>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
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
        </div>
    )
}
