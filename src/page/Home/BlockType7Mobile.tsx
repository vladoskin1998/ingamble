import star from '../../assets/img/icons/star.svg'

import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { BlockTypeNumber, HomeDataBlock } from '../../types'
import { SeeAllButton } from './SeeAllButton'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { sanitizeLink } from '../../helper'
import { Link } from 'react-router-dom'

export default function BlockType7Mobile({ data }: { data: HomeDataBlock | undefined }) {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType7) return <></>

    return (
        <section aria-label=" BlockTypeNumber.BlockType7" className="main-gamble__crypto-casinos crypto-casinos-gamble main-gamble__different-casino-medium main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
            <div className="crypto-casinos-gamble__container container">
                <div className="crypto-casinos-gamble__top top">
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
                        <div className="top__column">
                            <SeeAllButton type_category={data.items_block.type_category} parameter={data?.items_block?.category?.name || ''} id={data?.items_block?.category?.id} />
                        </div>
                    </div>
                </div>
                <div className="crypto-casinos-gamble__slider slider">
                    <div className="slider__body">
                        <div className="crypto-casinos-gamble__swiper slider__swiper swiper">
                            <Swiper
                                className="slider__wrapper swiper-wrapper"
                                slidesPerView="auto"
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
                                {data?.items_block?.data_cards
                                    ?.slice(0, 10)
                                    ?.sort((a, b) => a.order - b.order)
                                    ?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="slider__slide slide-slider swiper-slide">
                                                <div className="slide-slider__item different-casino-medium">
                                                    <Link to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`} className="different-casino-medium__image-block">
                                                        <span className="different-casino-medium__image ibg--custom">
                                                            <LazyCardImg img={item.casino_info.casino_image || ''} size="medium" imgLoading={!index ? 'eager' : 'lazy'} />
                                                        </span>
                                                    </Link>
                                                    <div className="different-casino-medium__content">
                                                        <Link
                                                            to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`}
                                                            aria-label="Put your descripton here."
                                                            className="different-casino-medium__name"
                                                        >
                                                            {item.casino_info.casino_name}
                                                        </Link>
                                                        <div className="different-casino-medium__rating">
                                                            <span className="different-casino-medium__rating-icon">
                                                                <img src={star} alt="star" />
                                                            </span>
                                                            <span className="different-casino-medium__rationg-number">{item.casino_info.casino_rank}</span>
                                                        </div>
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
        </section>
    )
}
