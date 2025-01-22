import star from '../../assets/img/icons/star.svg'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { useEffect, useRef } from 'react'
import { BlockTypeNumber, HomeDataBlock } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { SeeAllButton } from './SeeAllButton'
import { cloacingFetch, cloacingLink, shuffleArray } from '../../helper'
import { Link } from 'react-router-dom'
import { useFilterContext } from '../../context/FilterContext'
import { useAdaptiveBehavior } from '../../context/AppContext'

export default function BlockType6({ data }: { data: HomeDataBlock | undefined }) {
    const sliderRef = useRef<SwiperRef | null>(null)
    const paginationRef = useRef<HTMLDivElement | null>(null)
    const { data: Country, setCasinoFilters, setBonusFilters } = useFilterContext()
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
    if (!data || !(data.items_block.type_block === BlockTypeNumber.BlockType6 || data.items_block.type_block === BlockTypeNumber.BlockType6c)) return <></>

    const dataCard = shuffleArray(data?.items_block?.data_cards)

    const titleHub: 'bonuses' | 'casinos' = window.location.href.includes('bonuses') ? 'bonuses' : 'casinos'
    let titleBlock = data.items_block.type_block === BlockTypeNumber.BlockType6 ? data.items_block.block_title : data.items_block.block_title.replace('casinos', titleHub)

    const seeAllType6c = () => {
        //@ts-ignore
        const idCountry = Country?.general.countries.find((item) => item?.code === (data?.items_block?.country_code as DataHomeItemsBlock))?.id
        if (titleHub === 'bonuses') {
            setBonusFilters((s) => ({ ...s, selected_countries: [idCountry as number] }))
            return
        }
        setCasinoFilters((s) => ({ ...s, selected_countries: [idCountry as number] }))
    }

    const { isShowPlayButton } = useAdaptiveBehavior()

    return (
        <section aria-label="BlockTypeNumber.BlockType6" className="main-gamble__new-bonuses new-bonuses-gamble">
            <div className="new-bonuses-gamble__container container">
                <div className="new-bonuses-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    {data.items_block.title_image && data.items_block.type_block === BlockTypeNumber.BlockType6 && (
                                        <span className="top__title-icon ibg--custom ibg--custom-width-auto">
                                            <img src={data.items_block.title_image} alt="security" />
                                        </span>
                                    )}
                                    <span className="emoji new-bonuses-gamble-emoji">
                                        {
                                            //@ts-ignore
                                            Country?.general?.countries?.find((item) => item?.code === data?.items_block?.country_code)?.emoji_flag
                                        }
                                    </span>
                                    {titleBlock}
                                </h2>
                            </div>
                            {data.items_block.subtitle && <div className="top__subtitle">{data.items_block.subtitle}</div>}
                        </div>
                        {data.items_block.type_block === BlockTypeNumber.BlockType6 && (
                            <div className="top__column">
                                <SeeAllButton type_category={data.items_block.type_category} slug={data?.items_block?.category?.slug} />
                            </div>
                        )}
                        {data.items_block.type_block === BlockTypeNumber.BlockType6c && data?.items_block?.total_casinos_by_filter && data?.items_block?.total_casinos_by_filter > 5 ? (
                            <div className="top__column">
                                <Link className="top__btn" to={titleHub === 'bonuses' ? '/filter-bonus' : '/filter-casinos'} onClick={seeAllType6c}>
                                    <span>See All</span>
                                    <span className="top__btn-arrow">
                                        <svg>
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="new-bonuses-gamble__slider slider">
                    <div className="slider__body">
                        <div className="new-bonuses-gamble__swiper slider__swiper swiper">
                            <Swiper
                                ref={sliderRef}
                                className="slider__wrapper swiper-wrapper"
                                slidesPerView="auto"
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
                                {dataCard?.slice(0, 8)?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="slider__slide slide-slider swiper-slide">
                                            <div className="slide-slider__item casino-card">
                                                <div className="casino-card__image-block">
                                                    <Link className="casino-card__image ibg--custom" onClick={(e) => e.stopPropagation()} to={`/casino/${item?.casino_info?.casino_name}/bonuses/${item?.bonus_info?.bonus_slug}`}>
                                                        <LazyCardImg img={item.bonus_info.bonus_image || ''} />
                                                    </Link>
                                                    {isShowPlayButton && (
                                                        <a
                                                            href={cloacingLink(item?.casino_info?.casino_name)}
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                e.preventDefault()
                                                                cloacingFetch(item?.casino_info?.casino_affiliate_link)
                                                                window.open(item?.casino_info?.casino_affiliate_link || item?.casino_info?.url_casino, '_blank', 'noopener,noreferrer')
                                                            }}
                                                            aria-label="Put your description here."
                                                            className="casino-card__bnt"
                                                        >
                                                            Play
                                                        </a>
                                                    )}
                                                </div>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__small-card casino-small-card">
                                                        <div className="casino-small-card__image-block">
                                                            <Link
                                                                className="casino-small-card__image ibg--custom"
                                                                style={{
                                                                    backgroundSize: '125% auto',
                                                                }}
                                                                to={`/casino/${item?.casino_info?.casino_slug}`}
                                                            >
                                                                <LazyCardImg img={item.casino_info.casino_image || ''} size="medium" />
                                                            </Link>
                                                        </div>
                                                        <div className="casino-small-card__body">
                                                            <Link to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="casino-small-card__name">
                                                                {item.casino_info.casino_name}
                                                            </Link>
                                                            <div className="casino-small-card__info">
                                                                {item?.casino_info?.additional_casino_params?.map((it, id) => (
                                                                    <span key={id} className="casino-small-card__info-link">
                                                                        {it}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <div className="casino-small-card__rating">
                                                                <span className="casino-small-card__rating-icon">
                                                                    <img src={star} alt="star" />
                                                                </span>
                                                                <span className="casino-small-card__rating-number">{item.casino_info.casino_rank}</span>
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
                        <div ref={paginationRef} className="bottom-slider__pagination new-bonuses-gamble__pagination swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
