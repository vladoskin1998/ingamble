import star from "../../assets/img/icons/star.svg"
import like from "../../assets/img/icons/like.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BlockTypeNumber, HomeDataBlock } from "../../types"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { cloacingLink, sanitizeLink, sanitizeNumberLike } from "../../helper"
import { Link } from "react-router-dom"

export default function BlockType9({
    data,
}: {
    data: HomeDataBlock | undefined
}) {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType9)
        return <></>
    return (
        <section
            aria-label="BlockTypeNumber.BlockType9"
            className="simple-bonus__essential-programs essential-programs-gamble essential-programs-gamble_images"
        >
            <div className="essential-programs-gamble__container container">
                <div className="essential-programs-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data.items_block.title_image && (
                                    <span className="top__title-icon">
                                        <img
                                            src={data.items_block.title_image}
                                            alt="security"
                                        />
                                    </span>
                                )}
                                <h2 className="top__title">
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
                            <Link
                                rel="nofollow noopener"
                                to="/all-loyalties"
                                aria-label="Put your description here."
                                className="top__btn"
                            >
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

                <div className="essential-programs-gamble__slider slider">
                    <div className="essential-programs-gamble__swiper slider__swiper swiper">
                        <Swiper
                            slidesPerView="auto"
                            allowTouchMove={true}
                            breakpoints={{
                                320: {
                                    spaceBetween: 16,
                                },
                                1024.98: {
                                    spaceBetween: 20,
                                },
                                1920: {
                                    spaceBetween: 20,
                                },
                            }}
                            className="slider__wrapper swiper-wrapper"
                        >
                            {data.items_block.data_cards?.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="slider__slide slide-slider "
                                >
                                    <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                        <div className="item-essential-programs-gamble__top">
                                            <Link
                                                to={`/casino/${sanitizeLink(
                                                    item?.casino_name
                                                )}?queryId=${item?.casino_id}`}
                                                aria-label="Put your description here."
                                                className="item-essential-programs-gamble__logo"
                                            >
                                                <LazyCardImg
                                                    img={item.card_logo || ""}
                                                />
                                            </Link>
                                        </div>
                                        <div className="item-essential-programs-gamble__body">
                                            <div className="item-essential-programs-gamble__provider">
                                                <span className="item-essential-programs-gamble__provider-name">
                                                    {item.casino_name}
                                                </span>
                                                <span className="item-essential-programs-gamble__provider-rating">
                                                    <span className="item-essential-programs-gamble__provider-rating-star">
                                                        <img
                                                            src={star}
                                                            alt="star"
                                                        />
                                                    </span>
                                                    <span className="item-essential-programs-gamble__provider-rating-number">
                                                        {item.casino_rank}
                                                    </span>
                                                </span>
                                                <div className="info-casino-card__likes">
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={like}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        {sanitizeNumberLike(item?.loyalty_likes)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__stats stats-item-essential-programs-gamble">
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Loyalty Rank
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                {
                                                                    item.loyalty_rank
                                                                }
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                <div className="value-item-stats-essential-programs-gamble__stars value-item-stats-essential-programs-gamble__stars_5">
                                                                    {item?.stars?.map(
                                                                        (
                                                                            it,
                                                                            idstar
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    idstar +
                                                                                    111
                                                                                }
                                                                                className="value-item-stats-essential-programs-gamble__star"
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        star
                                                                                    }
                                                                                    alt={
                                                                                        "star" +
                                                                                        it
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stats-item-essential-programs-gamble__column">
                                                    <div className="stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble">
                                                        <div className="item-stats-essential-programs-gamble__label">
                                                            Levels
                                                        </div>
                                                        <div className="item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble">
                                                            <div className="value-item-stats-essential-programs-gamble__number">
                                                                {
                                                                    item.loyalty_count_levels
                                                                }
                                                            </div>
                                                            <div className="value-item-stats-essential-programs-gamble__content">
                                                                {
                                                                    item.loyalty_level_description
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                {item?.keypoints?.map(
                                                    (itp, idk) => (
                                                        <div
                                                            className="features-essential-programs-gamble__item"
                                                            key={idk}
                                                        >
                                                            <div className="features-essential-programs-gamble__icon">
                                                                <LazyCardImg
                                                                    img={
                                                                        itp.image ||
                                                                        ""
                                                                    }
                                                                    size="medium"
                                                                    imgLoading="eager"
                                                                />
                                                            </div>
                                                            <div className="features-essential-programs-gamble__info">
                                                                <div className="features-essential-programs-gamble__name">
                                                                    {itp.text_1}
                                                                </div>
                                                                <div className="features-essential-programs-gamble__text">
                                                                    {itp.text_2}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div className="item-essential-programs-gamble__bottom">
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <a
                                                    href={cloacingLink(
                                                        item?.url_casino || item?.casino_affiliate_link 
                                                       
                                                    )}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        e.preventDefault()
                                                        window.open(
                                                            item?.casino_affiliate_link ||
                                                                item?.url_casino,
                                                            "_blank",
                                                            "noopener,noreferrer"
                                                        )
                                                    }}
                                                    className="item-essential-programs-gamble__btn item-essential-programs-gamble__btn_yellow"
                                                >
                                                    Visit Casino
                                                </a>
                                            </div>
                                            <div className="item-essential-programs-gamble__bottom-column">
                                                <Link
                                                    to={`/casino/${sanitizeLink(
                                                        item?.casino_name
                                                    )}/loyalty?queryId=${
                                                        item?.loyalty_id
                                                    }`}
                                                    aria-label="Put your description here."
                                                    className="item-essential-programs-gamble__btn"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
