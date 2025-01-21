import star from '../../assets/img/icons/star.svg'
import deposit from '../../assets/img/icons/deposit-icon.svg'
import { BlockTypeNumber, HomeDataBlock } from '../../types'
import '../../assets/css/style-type-10-11.css'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { Link } from 'react-router-dom'
import { cloacingFetch, cloacingLink } from '../../helper'
import { SeeAllRoutes } from './SeeAllButton'
export default function BlockType11({ data }: { data: HomeDataBlock | undefined }) {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType11) return <></>

    const arr1 = data.items_block.data_cards.slice(0, 6)
    const arr2 = data.items_block.data_cards.slice(6, 12)

    console.log(arr1)

    return (
        <section className="main-gamble__top-bonuses top-bonuses-gamble">
            <div className="top-bonuses-gamble__container container">
                <div className="top-bonuses-gamble__row">
                    <div className="top-bonuses-gamble__column">
                        <div className="top-bonuses-gamble__block">
                            <div className="top-bonuses-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title"> Top Ranked Casinos </h2>
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
                            <div className="top-bonuses-gamble__body">
                                {arr1.map((item, index) => (
                                    <div className="top-bonuses-gamble__deposit deposit-top-bonuses-gamble" key={index}>
                                        <Link to={`/casino/${item?.casino_info?.casino_slug}`} className="deposit-top-bonuses-gamble__image-block">
                                            <span className="deposit-top-bonuses-gamble__image ibg--custom">
                                                <LazyCardImg img={item?.casino_info?.casino_image || ''} width="auto" />
                                            </span>
                                        </Link>
                                        <div className="deposit-top-bonuses-gamble__body">
                                            <div className="deposit-top-bonuses-gamble__main">
                                                <Link to={`/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`} className="deposit-top-bonuses-gamble__title">
                                                    {item?.bonus_info?.bonus_name}
                                                </Link>
                                                <div className="deposit-top-bonuses-gamble__stake">
                                                    <Link to={`/casino/${item?.casino_info?.casino_slug}`} aria-label="Put your description here." className="deposit-top-bonuses-gamble__stake-link">
                                                        {item?.casino_info?.casino_name}
                                                    </Link>
                                                    <span className="deposit-top-bonuses-gamble__stake-icon">
                                                        <img src={star} alt="star" />
                                                    </span>
                                                    <span className="deposit-top-bonuses-gamble__stake-number">{item?.casino_info?.casino_rank}</span>
                                                </div>
                                            </div>
                                            <div className="deposit-top-bonuses-gamble__info info-deposit-top-bonuses-gamble">
                                                <div className="info-deposit-top-bonuses-gamble__row">
                                                    <div className="info-deposit-top-bonuses-gamble__column">
                                                        <div className="info-deposit-top-bonuses-gamble__icon">
                                                            <img src={deposit} alt="deposit-icon" />
                                                        </div>
                                                        <div className="info-deposit-top-bonuses-gamble__text">{`WR: ${typeof item?.bonus_info?.wr === 'number' ? item?.bonus_info.wr + 'X' : '-'}`}</div>
                                                    </div>
                                                    <div className="info-deposit-top-bonuses-gamble__column">
                                                        <div className="info-deposit-top-bonuses-gamble__label">Min Dep:</div>
                                                        <div className="info-deposit-top-bonuses-gamble__value">
                                                            {typeof item?.bonus_info?.bonus_min_dep?.[0]?.min_value === 'number' ? '$' + item?.bonus_info?.bonus_min_dep?.[0]?.min_value : '-'}
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href={cloacingLink(item?.casino_info?.casino_name)}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        e.preventDefault()
                                                        cloacingFetch(item?.casino_info?.casino_affiliate_link)
                                                        window.open(item?.casino_info?.casino_affiliate_link, '_blank', 'noopener,noreferrer')
                                                    }}
                                                    className="deposit-top-bonuses-gamble__btn"
                                                >
                                                    Play
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="top-bonuses-gamble__column">
                        <div className="top-bonuses-gamble__block">
                            <div className="top-bonuses-gamble__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">Best Crypto Casinos</h2>
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
                            <div className="top-bonuses-gamble__body">
                                {arr2.map((item, index) => (
                                    <div key={index + 10} className="top-bonuses-gamble__deposit deposit-top-bonuses-gamble">
                                        <Link to={`/casino/${item?.casino_info?.casino_slug}`} className="deposit-top-bonuses-gamble__image-block">
                                            <span className="deposit-top-bonuses-gamble__image ibg--custom">
                                                <LazyCardImg img={item?.casino_info?.casino_image || ''} width="auto" />
                                            </span>
                                        </Link>
                                        <div className="deposit-top-bonuses-gamble__body">
                                            <div className="deposit-top-bonuses-gamble__main">
                                                <Link to={`/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`} className="deposit-top-bonuses-gamble__title">
                                                    {item?.bonus_info?.bonus_name}
                                                </Link>
                                                <div className="deposit-top-bonuses-gamble__stake">
                                                    <Link to={`/casino/${item?.casino_info?.casino_slug}`} className="deposit-top-bonuses-gamble__stake-link">
                                                        {item.casino_info.casino_name}
                                                    </Link>
                                                    <span className="deposit-top-bonuses-gamble__stake-icon">
                                                        <img src={star} alt="star" />
                                                    </span>
                                                    <span className="deposit-top-bonuses-gamble__stake-number">{item.casino_info.casino_rank}</span>
                                                </div>
                                            </div>
                                            <div className="deposit-top-bonuses-gamble__info info-deposit-top-bonuses-gamble">
                                                <div className="info-deposit-top-bonuses-gamble__row">
                                                    <div className="info-deposit-top-bonuses-gamble__column">
                                                        <div className="info-deposit-top-bonuses-gamble__icon">
                                                            <img src={deposit} alt="deposit-icon" />
                                                        </div>
                                                        <div className="info-deposit-top-bonuses-gamble__text">{`WR: ${typeof item?.bonus_info?.wr === 'number' ? item?.bonus_info.wr + 'X' : '-'}`}</div>
                                                    </div>
                                                    <div className="info-deposit-top-bonuses-gamble__column">
                                                        <div className="info-deposit-top-bonuses-gamble__label">Min Dep:</div>
                                                        <div className="info-deposit-top-bonuses-gamble__value">
                                                            {typeof item?.bonus_info?.bonus_min_dep?.[0]?.min_value === 'number' ? '$' + item?.bonus_info?.bonus_min_dep?.[0]?.min_value : '-'}
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href={cloacingLink(item?.casino_info?.casino_name)}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        e.preventDefault()
                                                        cloacingFetch(item?.casino_info?.casino_affiliate_link)
                                                        window.open(item?.casino_info?.casino_affiliate_link, '_blank', 'noopener,noreferrer')
                                                    }}
                                                    className="deposit-top-bonuses-gamble__btn"
                                                >
                                                    Play
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
