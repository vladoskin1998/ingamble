import star from '../../assets/img/icons/star.svg'
import like from '../../assets/img/icons/like.svg'

import { GeoLocationAllowdType, LoyaltieProgramDataResponse } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { cloacingFetch, cloacingLink, sanitizeNumberLike } from '../../helper'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import giftIcon from '../../assets/img/icons/gift.svg'
import { useFilterContext } from '../../context/FilterContext'
export const LoyaltieCasinoInfo = ({ data, geoLocation }: { data: LoyaltieProgramDataResponse | undefined; geoLocation: GeoLocationAllowdType }) => {

    const { setCasinoFilters } = useFilterContext()

    return (
        <section className={`loyaltie__casino-info casino-info ${!geoLocation?.isAllowed && 'casino-info_not-available'} `}>
            <div className="casino-info__container container">
                <div className="casino-info__body">
                    <div className="casino-info__row">
                        <div className="casino-info__main main-casino-info">
                            <div className="">
                                <div className="main-casino-info__image ibg--custom">
                                    <LazyCardImg img={data?.casino_image || ''} height="100%" width="100%" imgLoading={'eager'} />
                                </div>
                            </div>
                        </div>
                        <div className="casino-info__content content-casino-info">
                            <div className="content-casino-info__main">
                                <div className="content-casino-info__top-panel">
                                    <div className="info-casino-card__stake-rating name-main-casino-info__stake-rating">
                                        <span className="info-casino-card__stake-rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="info-casino-card__stake__rating-number">{data?.loyalty_rank}</span>
                                    </div>
                                    <div className="info-casino-card__likes name-main-casino-info__likes">
                                        <span className="info-casino-card__likes-icon">
                                            <img src={like} alt="like" />
                                        </span>
                                        <span className="info-casino-card__likes-number">{sanitizeNumberLike(data?.likes)}</span>
                                    </div>
                                </div>
                                <div className="content-casino-info__top">
                                    <h2 className="content-casino-info__title">{data?.casino_name} Vip Loyalty Program</h2>
                                </div>
                                <div className="content-casino-info__country country-content-casino-info">
                                    <div className="country-content-casino-info__info">
                                        {geoLocation?.countryImg && (
                                            <div className="country-content-casino-info__icon">
                                                <img src={geoLocation?.countryImg} alt={geoLocation?.countryName} />
                                            </div>
                                        )}
                                        <div className="country-content-casino-info__text">{`${geoLocation?.isAllowed ? 'Accepts players from' : 'Doesn’t accept players from'} ${geoLocation?.countryName}`}</div>
                                    </div>
                                    <span className="main-get-bonus__btn main-get-bonus__btn_apply">T&C Apply</span>
                                </div>
                                {geoLocation.isAllowed ? (
                                    <a
                                        href={cloacingLink(data?.casino_name)}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            e.preventDefault()
                                            cloacingFetch(data?.casino_affiliate_link)
                                            window.open(data?.casino_affiliate_link || data?.url_casino, '_blank', 'noopener,noreferrer')
                                        }}
                                        aria-label="Put your description here."
                                        className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                    >
                                        Play and Enjoy
                                    </a>
                                ) : (
                                    <Link
                                        to={'/filter-casinos'}
                                        onClick={() => {
                                            setCasinoFilters((s) => ({ ...s, selected_countries: [geoLocation?.idCountry as number] }))
                                        }}
                                        aria-label="Put your description here."
                                        className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                    >
                                        <span>
                                            <LazyLoadImage src={giftIcon} alt="gift" />
                                        </span>
                                        Browse Recommended Casinos
                                    </Link>
                                )}
                            </div>
                            <div className="content-casino-info__features features-content-casino-info">
                                <div className="features-content-casino-info__row">
                                    <div className="features-content-casino-info__column">
                                        <div className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_border">
                                            <div className="item-features-content-casino-info__top">
                                                <div className="item-features-content-casino-info__label">Loyalty Rank</div>
                                            </div>
                                            <div className="item-features-content-casino-info__body">
                                                <div className="item-features-content-casino-info__number">{data?.loyalty_rank}</div>
                                                <div className="item-features-content-casino-info__rating">
                                                    {Array(data?.stars || 5)
                                                        .fill(0)
                                                        .map((st, id) => (
                                                            <div key={st + id} className="item-features-content-casino-info__star">
                                                                <img src={star} alt="star" />
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-content-casino-info__column">
                                        <div className="features-content-casino-info__item item-features-content-casino-info">
                                            <div className="item-features-content-casino-info__top">
                                                <div className="item-features-content-casino-info__label">Levels</div>
                                            </div>
                                            <div className="item-features-content-casino-info__body">
                                                <div className="item-features-content-casino-info__number">{data?.count_levels}</div>
                                                <div className="item-features-content-casino-info__value">{data?.level_description}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-content-casino-info__column">
                                        <div className="features-content-casino-info__item item-features-content-casino-info">
                                            <div className="item-features-content-casino-info__top">
                                                <div className="item-features-content-casino-info__label">Get</div>
                                            </div>
                                            <div className="item-features-content-casino-info__body">
                                                <div className="item-features-content-casino-info__number">{data?.loyalty_parameter?.[0]?.text_1}</div>
                                                <div className="item-features-content-casino-info__value">{data?.loyalty_parameter?.[0]?.text_2}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-content-casino-info__column">
                                        <div className="features-content-casino-info__item item-features-content-casino-info">
                                            <div className="item-features-content-casino-info__top">
                                                <div className="item-features-content-casino-info__label">Highlight</div>
                                            </div>
                                            <div className="item-features-content-casino-info__body">
                                                <div className="item-features-content-casino-info__number">{data?.loyalty_parameter?.[1]?.text_1}</div>
                                                <div className="item-features-content-casino-info__value">{data?.loyalty_parameter?.[1]?.text_2}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
