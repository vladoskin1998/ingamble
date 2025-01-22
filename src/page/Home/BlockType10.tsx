import star from '../../assets/img/icons/star.svg'
import girl2 from '../../assets/img/girls/02.png'
import bg03 from '../../assets/img/bg/03.jpg'
import '../../assets/css/style-type-10-11.css'
import bg02 from '../../assets/img/bg/02.jpg'
import { BlockTypeNumber, HomeDataBlock } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { Link } from 'react-router-dom'
import { SeeAllRoutes } from './SeeAllButton'

const YEAR = new Date().getFullYear()

export default function BlockType10({ data }: { data: HomeDataBlock | undefined }) {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType10) return <></>
    return (
        <div className="main-gamble__best-casinos-2024-2 best-casinos-2024-2-gamble">
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
                        <div className="best-casinos-2024-2-gamble__girl">
                            <img src={girl2} alt="girl" />
                        </div>
                        <div className="best-casinos-2024-2-gamble__content">
                            <div className="best-casinos-2024-2-gamble__text">
                                <span>The Best</span>
                                {` Casinos of ${YEAR}`}
                            </div>
                            <Link to={`/all-${SeeAllRoutes[data?.items_block?.type_category]}${data?.items_block?.category?.slug || '' ? `/${data?.items_block?.category?.slug}` : ''}`} className="best-casinos-2024-2-gamble__btn">
                                See All
                            </Link>
                        </div>
                    </div>
                    <div className="best-casinos-2024-2-gamble__column best-casinos-2024-2-gamble__column_small">
                        <div className="best-casinos-2024-2-gamble__item different-casino-big">
                            <div className="different-casino-big__bg ibg--custom">
                                <img src={bg03} alt="bg" />
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
                                        <img src={star} alt="star" />
                                    </span>
                                    <span className="different-casino-big__rating-number"> {data.items_block.data_cards?.[2]?.casino_info?.casino_rank}</span>
                                </div>
                            </div>
                        </div>
                        <div className="best-casinos-2024-2-gamble__item different-casino-big">
                            <div className="different-casino-big__bg ibg--custom">
                                <img src={bg03} alt="bg" />
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
        </div>
    )
}
