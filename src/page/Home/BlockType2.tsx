import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect, useRef } from 'react'
import shield from '../../assets/img/icons/shield.svg'
import { BlockTypeNumber, HomeDataBlock } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { SeeAllButton } from './SeeAllButton'
import { cloacingFetch, cloacingLink, sanitizeLink } from '../../helper'
import { Link } from 'react-router-dom'

export default function BlockType2({ data }: { data: HomeDataBlock | undefined }) {
    const sliderRef = useRef<any>(null)
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
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType2) return <></>
    return (
        <section aria-label="BlockTypeNumber.BlockType2" className="main-gamble__safest-casino-2 safest-casino-2-gamble main-gamble__different-casino-bg main-gamble__baner-block">
            <div className="safest-casino-2-gamble__container container">
                <div className="safest-casino-2-gamble__top top">
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
                            <SeeAllButton type_category={data?.items_block?.type_category} parameter={data?.items_block?.category?.name || ''} id={data?.items_block?.category?.id} />
                        </div>
                    </div>
                </div>
                <div className="safest-casino-2-gamble__row main-gamble__row-block row-block row-block__left">
                    <div className="row-block__baner row-block__baner_left baner-row-block">
                        <div className="baner-row-block__slider">
                            <div className="baner-row-block__slider-body">
                                <div className="baner-row-block__swiper safest-casino-2-baner__swiper swiper">
                                    <div className="baner-row-block__wrapper swiper-wrapper">
                                        <Swiper
                                            ref={sliderRef}
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
                                            {data?.items_block?.data_cards
                                                ?.filter((item) => item?.big_card)
                                                .sort((a, b) => a?.order - b?.order)
                                                .map((item, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div
                                                            className="baner-row-block__slide slide-baner-row-block swiper-slide"
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                        >
                                                            <div className="slide-baner-row-block__item item-baner-row-block">
                                                                <Link
                                                                    className="item-baner-row-block__image ibg--custom"
                                                                    to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}/bonuses/${sanitizeLink(item?.bonus_info?.bonus_name)}?queryId=${item?.bonus_info?.bonus_id}`}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <LazyCardImg img={item?.bonus_info?.bonus_image || ''} height="100%" width="100%" imgLoading={!index ? 'eager' : 'lazy'} />
                                                                </Link>
                                                                <Link
                                                                    to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}/bonuses/${sanitizeLink(item?.bonus_info?.bonus_name)}?queryId=${item?.bonus_info?.bonus_id}`}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    aria-label="Put your description here."
                                                                    className="item-baner-row-block__row"
                                                                >
                                                                    <div className="item-baner-row-block__column">
                                                                        <div className="item-baner-row-block__small-card casino-small-card">
                                                                            <div className="casino-small-card__image-block">
                                                                                <Link to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`} className="casino-small-card__image ibg--custom">
                                                                                    <LazyCardImg img={item?.casino_info?.casino_image || ''} size="medium" height="100%" width="100%" imgLoading={!index ? 'eager' : 'lazy'} />
                                                                                </Link>
                                                                            </div>
                                                                            <div className="casino-small-card__body">
                                                                                <Link
                                                                                    rel="nofollow noopener"
                                                                                    to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`}
                                                                                    aria-label="Put your description here."
                                                                                    className="casino-small-card__name"
                                                                                >
                                                                                    {item?.casino_info?.casino_name}
                                                                                </Link>
                                                                                <div className="casino-small-card__info">
                                                                                    {item.casino_info.additional_casino_params.map((it) => (
                                                                                        <span className="casino-small-card__info-link">{it}</span>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-baner-row-block__index">
                                                                            <div className="item-baner-row-block__index-icon">
                                                                                <img src={shield} alt="shield" />
                                                                            </div>
                                                                            <div className="item-baner-row-block__index-number">{item?.casino_info?.casino_rank}</div>
                                                                            <div className="item-baner-row-block__index-text">Safety Index</div>
                                                                        </div>
                                                                        <Link
                                                                            rel="nofollow noopener"
                                                                            to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}/bonuses/${sanitizeLink(item?.bonus_info?.bonus_name)}?queryId=${item?.bonus_info?.bonus_id}`}
                                                                            aria-label="Put your description here."
                                                                            className="item-baner-row-block__title"
                                                                        >
                                                                            {item?.bonus_info?.bonus_name}
                                                                        </Link>
                                                                    </div>

                                                                    <div className="item-baner-row-block__column">
                                                                        <a
                                                                            href={cloacingLink(item?.casino_info?.casino_name)}
                                                                            onClick={(e) => {
                                                                                e.stopPropagation()
                                                                                e.preventDefault()
                                                                                cloacingFetch(item?.casino_info?.casino_affiliate_link)
                                                                                window.open(item?.casino_info?.casino_affiliate_link || item?.casino_info?.url_casino, '_blank', 'noopener,noreferrer')
                                                                            }}
                                                                            aria-label="Put your description here."
                                                                            className="item-baner-row-block__btn casino-card__bnt"
                                                                        >
                                                                            Play
                                                                        </a>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="baner-row-block__slider-bottom">
                                <div id="safest-casino-pagination-1" ref={paginationRef} className="baner-row-block__pagination bottom-slider__pagination safest-casino-2-baner__pagination swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                    <div className="safest-casino-2-gamble__slider row-block__slider slider">
                        <div className="slider__body">
                            <div className="safest-casino-2-gamble__swiper slider__swiper swiper">
                                <div>
                                    <Swiper
                                        slidesPerView="auto"
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
                                        {data.items_block.data_cards
                                            .filter((item) => !item.big_card)
                                            .sort((a, b) => a.order - b.order)
                                            .map((item, index) => (
                                                <SwiperSlide key={index} className="slider__slide slide-slider slide-slider__different-casino-bg swiper-slide">
                                                    <div className="slide-slider__item different-casino-bg">
                                                        <Link
                                                            rel="nofollow noopener"
                                                            to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`}
                                                            aria-label="Put your description here."
                                                            className="different-casino-bg__image-block"
                                                        >
                                                            <span className="different-casino-bg__image ibg--custom">
                                                                <LazyCardImg img={item.casino_info.casino_image || ''} height="100%" width="100%" imgLoading={!index ? 'eager' : 'lazy'} />
                                                            </span>
                                                        </Link>
                                                        <div className="different-casino-bg__content">
                                                            <Link
                                                                rel="nofollow noopener"
                                                                to={`/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`}
                                                                aria-label="Put your description here."
                                                                className="different-casino-bg__name"
                                                            >
                                                                {item.casino_info.casino_name}
                                                            </Link>
                                                            <div className="different-casino-bg__info">
                                                                {item.casino_info.additional_casino_params.map((it) => (
                                                                    <span className="different-casino-bg__info-link">{it}</span>
                                                                ))}
                                                            </div>
                                                            <div className="different-casino-bg__rating">
                                                                <span className="different-casino-bg__rating-icon">
                                                                    <img src={shield} alt="shield" />
                                                                </span>
                                                                <span className="different-casino-bg__rating-number">{item.casino_info.casino_rank}</span>
                                                                <span className="different-casino-bg__rating-text">Safety Index</span>
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
        </section>
    )
}
