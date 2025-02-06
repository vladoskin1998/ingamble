import star from '../../assets/img/icons/star.svg'
import girl2 from '../../assets/img/girls/02.webp'
import ape from '../../assets/img/girls/ape.webp'

import bg03 from '../../assets/img/bg/03.webp'
import '../../assets/css/style-type-10-11.css'
import bg02 from '../../assets/img/bg/02.webp'
import {DataHomeItemsBlock, HomeDataBlock } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { Link } from 'react-router-dom'
import { SeeAllRoutes } from '../../context/FilterContext'
import { CURRENTYEAR } from '../../helper'
import { useInView } from 'react-intersection-observer'
const ViteTitle = import.meta.env.VITE_TITLE
const isDeger = ViteTitle.includes('DegenCatapult')

export default function BlockType10({ data, initialInView = false}: { data: HomeDataBlock<DataHomeItemsBlock>; initialInView?: boolean; isAutoPlay?: boolean }) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        initialInView,
    })

    return (
        <div ref={ref} className="main-gamble__best-casinos-2024-2 best-casinos-2024-2-gamble">
            {inView && (
                <div className="best-casinos-2024-2-gamble__container container">
                    <div className="low-wager-bonuses-gamble__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    {data.items_block.title_image && (
                                        <span className="top__title-icon ibg--custom ibg--custom-width-auto">
                                            <img src={data.items_block.title_image} alt="security" />
                                        </span>
                                    )}
                                    <h2 className="top__title">{data.items_block.block_title}</h2>
                                </div>
                                {data.items_block.subtitle && <div className="top__subtitle">{data.items_block.subtitle}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="best-casinos-2024-2-gamble__row">
                        <div className="best-casinos-2024-2-gamble__column best-casinos-2024-2-gamble__column_small">
                            <div className="best-casinos-2024-2-gamble__item different-casino-big">
                                <div className="different-casino-big__bg ibg--custom">
                                    <img src={bg03} alt="bg" />
                                </div>
                                <Link rel="nofollow noopener" to={`/casino/${data.items_block.data_cards?.[0]?.casino_info?.casino_slug}`} className="different-casino-big__image-block">
                                    <span className="different-casino-big__image ibg--custom">
                                        <LazyCardImg img={data.items_block.data_cards?.[0]?.casino_info?.casino_image || ''} />
                                    </span>
                                </Link>
                                <div className="different-casino-big__content">
                                    <Link to={`/casino/${data.items_block.data_cards?.[0]?.casino_info?.casino_slug}`} className="different-casino-big__name">
                                        {data.items_block.data_cards?.[0]?.casino_info.casino_name}
                                    </Link>
                                    <div className="different-casino-big__info">
                                        {data.items_block.data_cards?.[0]?.casino_info.additional_casino_params.map((item, index) => (
                                            <span key={index} className="different-casino-big__info-link">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="different-casino-big__rating">
                                        <span className="different-casino-big__rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="different-casino-big__rating-number"> {data.items_block.data_cards?.[0]?.casino_info.casino_rank}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="best-casinos-2024-2-gamble__item different-casino-big">
                                <div className="different-casino-big__bg ibg--custom">
                                    <img src={bg03} alt="bg" />
                                </div>
                                <Link rel="nofollow noopener" to={`/casino/${data?.items_block.data_cards?.[1]?.casino_info?.casino_slug}`} className="different-casino-big__image-block">
                                    <span className="different-casino-big__image ibg--custom">
                                        <LazyCardImg img={data.items_block.data_cards?.[1]?.casino_info?.casino_image || ''} />
                                    </span>
                                </Link>
                                <div className="different-casino-big__content">
                                    <Link to={`/casino/${data.items_block.data_cards?.[1]?.casino_info?.casino_slug}`} className="different-casino-big__name">
                                        {data.items_block.data_cards?.[1]?.casino_info.casino_name}
                                    </Link>
                                    <div className="different-casino-big__info">
                                        {data.items_block.data_cards?.[1]?.casino_info.additional_casino_params.map((item, index) => (
                                            <span key={index} className="different-casino-big__info-link">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="different-casino-big__rating">
                                        <span className="different-casino-big__rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="different-casino-big__rating-number"> {data.items_block.data_cards?.[1]?.casino_info.casino_rank}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="best-casinos-2024-2-gamble__column best-casinos-2024-2-gamble__column_big">
                            <div className="best-casinos-2024-2-gamble__bg ibg--custom">
                                <img src={bg02} alt="bg" />
                            </div>
                            <div className="best-casinos-2024-2-gamble__waves">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={`best-casinos-2024-2-gamble__girl ${isDeger && 'isdegen-img-best-casinos-2024-2-gamble__girl'}`}>
                                <img src={isDeger ? ape : girl2} alt="girl" loading="lazy" />
                            </div>
                            <div className="best-casinos-2024-2-gamble__content">
                                <div className="best-casinos-2024-2-gamble__text">
                                    <span>The Best</span>
                                    {` Casinos of ${CURRENTYEAR}`}
                                </div>
                                <Link to={`/all-${SeeAllRoutes[data?.items_block?.type_category]}${data?.items_block?.category?.slug || '' ? `/${data?.items_block?.category?.slug}` : ''}`} className="best-casinos-2024-2-gamble__btn">
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div className="best-casinos-2024-2-gamble__column best-casinos-2024-2-gamble__column_small">
                            <div className="best-casinos-2024-2-gamble__item different-casino-big">
                                <div className="different-casino-big__bg ibg--custom">
                                    <img src={bg03} alt="bg" loading="lazy" />
                                </div>
                                <Link rel="nofollow noopener" to={`/casino/${data.items_block.data_cards?.[2]?.casino_info?.casino_slug}`} className="different-casino-big__image-block">
                                    <span className="different-casino-big__image ibg--custom">
                                        <LazyCardImg img={data.items_block.data_cards?.[2]?.casino_info?.casino_image || ''} />
                                    </span>
                                </Link>
                                <div className="different-casino-big__content">
                                    <Link to={`/casino/${data.items_block.data_cards?.[2]?.casino_info?.casino_slug}`} className="different-casino-big__name">
                                        {data.items_block.data_cards?.[2]?.casino_info?.casino_name}
                                    </Link>
                                    <div className="different-casino-big__info">
                                        {data.items_block.data_cards?.[2]?.casino_info?.additional_casino_params?.map((item, index) => (
                                            <span key={index} className="different-casino-big__info-link">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="different-casino-big__rating">
                                        <span className="different-casino-big__rating-icon">
                                            <img src={star} alt="star" loading="lazy" />
                                        </span>
                                        <span className="different-casino-big__rating-number"> {data.items_block.data_cards?.[2]?.casino_info?.casino_rank}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="best-casinos-2024-2-gamble__item different-casino-big">
                                <div className="different-casino-big__bg ibg--custom">
                                    <img src={bg03} alt="bg" loading="lazy" />
                                </div>
                                <Link rel="nofollow noopener" to={`/casino/${data.items_block.data_cards?.[3]?.casino_info?.casino_slug}`} className="different-casino-big__image-block">
                                    <span className="different-casino-big__image ibg--custom">
                                        <LazyCardImg img={data.items_block.data_cards?.[3]?.casino_info?.casino_image || ''} />
                                    </span>
                                </Link>
                                <div className="different-casino-big__content">
                                    <Link to={`/casino/${data.items_block.data_cards?.[3]?.casino_info?.casino_slug}`} className="different-casino-big__name">
                                        {data.items_block.data_cards?.[3]?.casino_info.casino_name}
                                    </Link>
                                    <div className="different-casino-big__info">
                                        {data.items_block.data_cards?.[3]?.casino_info?.additional_casino_params?.map((item, index) => (
                                            <span key={index} className="different-casino-big__info-link">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="different-casino-big__rating">
                                        <span className="different-casino-big__rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="different-casino-big__rating-number"> {data.items_block.data_cards?.[3]?.casino_info.casino_rank}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
