import MainSlider from "../../components/swiper/MainSlider"
import $api from "../../http"
import { useQuery } from "react-query"
import {
    FilterBonusPostResponse,
    FilterCasinoPostResponse,
    FilterLoyaltiesPostResponse,
} from "../../types"
import { COLORS_TAGS, sanitizeLink } from "../../helper"
import { Swiper, SwiperSlide } from "swiper/react"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import star from "../../assets/img/icons/star.svg"
import like from "../../assets/img/icons/like.svg"
import { Link } from "react-router-dom"

const getFilteringCasinoList = async (
    payload: { min: number; max: number },
    page: number
) => {
    const response = await $api.post(
        `filter/casinos/?page=${page}&page_size=${6}`,
        payload
    )

    return response.data
}

const getFilteringBonusList = async (
    payload: { min: number; max: number },
    page: number
) => {
    const response = await $api.post(
        `filter/bonus/?page=${page}&page_size=${6}`,
        payload
    )
    return response.data
}

const getFilteringLoyaltiesList = async (
    payload: { min: number; max: number },
    page: number
) => {
    const response = await $api.post(
        `filter/loyalty/?page=${page}&page_size=${4}`,
        payload
    )
    return response.data
}

export const HighRankSwiper = ({
    casinoName
}:{
    casinoName: string
}) => {
    const { data: CasinoDataHigh } = useQuery<FilterCasinoPostResponse>(
        ["filter/casinos"],
        () => getFilteringCasinoList({ min: 8, max: 10 }, 1),
        {
            keepPreviousData: true,
            staleTime: Infinity,
        }
    )

    const { data: BonusDataHigh } = useQuery<FilterBonusPostResponse>(
        ["filter/bonus"],
        () => getFilteringBonusList({ min: 8, max: 10 }, 1),
        {
            keepPreviousData: true,
            staleTime: Infinity,
        }
    )

    const { data: LoyaltieDataHigh } = useQuery<FilterLoyaltiesPostResponse>(
        ["filter/loyalty"],
        () => getFilteringLoyaltiesList({ min: 8, max: 10 }, 1),
        {
            keepPreviousData: true,
            staleTime: Infinity,
        }
    )

    return (
        <>
            <section className="simple-bonus__more-stake more-staket-simple-bonus">
                <div className="more-staket-simple-bonus__container container">
                    <div className="more-staket-simple-bonus__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    <h2 className="top__title">
                                        More {casinoName} Bonuses

                                    </h2>
                                </div>
                            </div>
                            <div className="top__column">
                                <Link
                                    rel="nofollow noopener"
                                    to="/all-casinos"
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
                    <MainSlider
                        data={CasinoDataHigh?.results?.map((c) => ({
                            img: c?.casino_image || "",
                            raiting: c?.casino_rank,
                            likes: c?.likes,
                            casinoName: c?.casino_name,
                            playLink: c?.casino_affiliate_link,
                            
                            casinoLink: `/casino/${sanitizeLink(c?.casino_name)}?queryId=${c?.casino_id}`,

                            // comment: "New Year Bet Race - $30,000 Rocket...",
                            tags: (
                                <>
                                    {c?.bonuses?.map((bon) =>
                                        bon?.labels.map((l, ct) => (
                                            <div
                                                className={`tags-casino-card__item ${
                                                    COLORS_TAGS[ct % 4]
                                                }`}
                                            >
                                                <span className="tags-casino-card__item-label">
                                                    {l?.name}
                                                </span>
                                            </div>
                                        ))
                                    )}
                                </>
                            ),
                        }))}
                    />
                </div>
            </section>
            <section className="simple-bonus__more-stake more-staket-simple-bonus">
                <div className="more-staket-simple-bonus__container container">
                    <div className="more-staket-simple-bonus__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    <h2 className="top__title">
                                        Other Best Reload Bonuses
                                    </h2>
                                </div>
                            </div>
                            <div className="top__column">
                                <Link
                                    rel="nofollow noopener"
                                    to="/all-bonus"
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
                    <MainSlider
                        data={BonusDataHigh?.results?.map((b) => ({
                            img: b?.bonus_image || "",
                            raiting: b?.casino_rank,
                            likes: b?.bonus_likes,
                            casinoName: b?.casino_name,
                            bonuseName: b?.bonus_name,
                            imageLink: `/casino/${sanitizeLink(b?.casino_name)}/bonuses/${sanitizeLink(b?.bonus_name)}?queryId=${b?.bonus_id}`,
                            playLink: b.casino_affiliate_link ,
                            casinoLink: `/casino/${sanitizeLink(b?.casino_name)}?queryId=${b?.casino_id}`,
                            bonuseLink: `/casino/${sanitizeLink(b?.casino_name)}/bonuses/${sanitizeLink(b?.bonus_name)}?queryId=${b?.bonus_id}`,
                            tags: (
                                <>
                                    {typeof b !== "string"
                                        ? b?.labels.map((l, ct) => (
                                              <div
                                                  className={`tags-casino-card__item ${
                                                      COLORS_TAGS[ct % 4]
                                                  }`}
                                              >
                                                  <span className="tags-casino-card__item-label">
                                                      {typeof l !== "string" &&
                                                      "name" in l
                                                          ? l?.name
                                                          : ""}
                                                  </span>
                                              </div>
                                          ))
                                        : []}
                                </>
                            ),
                        }))}
                    />
                </div>
            </section>

            <section className="simple-bonus__essential-programs essential-programs-gamble essential-programs-gamble_images">
                <div className="essential-programs-gamble__container container">
                    <div className="essential-programs-gamble__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    <h2 className="top__title">
                                        Essential VIP Loyalty Programs
                                    </h2>
                                </div>
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
                                {LoyaltieDataHigh?.results?.map((l) => (
                                    <SwiperSlide>
                                        <div className="slider__slide slide-slider " style={{height:"100%"}}>
                                            <div className="slide-slider__item essential-programs-gamble__item item-essential-programs-gamble">
                                                <div
                                                    className="item-essential-programs-gamble__top"
                                                    style={{
                                                        maxHeight: "160px",
                                                    }}
                                                >
                                                    <a
                                                        href={l?.casino_affiliate_link}
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="item-essential-programs-gamble__logo ibg--custom"
                                                    >
                                                        <LazyCardImg
                                                            img={
                                                                l?.casino_image ||
                                                                ""
                                                            }
                                                            height="100%"
                                                            width="100%"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item-essential-programs-gamble__body">
                                                    <div className="item-essential-programs-gamble__provider">
                                                        <span className="item-essential-programs-gamble__provider-name">
                                                            {l.casino_name}
                                                        </span>
                                                        <span className="item-essential-programs-gamble__provider-rating">
                                                            <span className="item-essential-programs-gamble__provider-rating-star">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="item-essential-programs-gamble__provider-rating-number">
                                                                {l?.casino_rank}
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
                                                                {l?.casino_likes ||
                                                                    0}
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
                                                                            l
                                                                                ?.loyalty_program
                                                                                ?.loyalty_rank
                                                                        }
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__content">
                                                                        <div className="value-item-stats-essential-programs-gamble__stars value-item-stats-essential-programs-gamble__stars_5">
                                                                            {Array(
                                                                                l
                                                                                    ?.loyalty_program
                                                                                    ?.stars
                                                                            )
                                                                                .fill(
                                                                                    0
                                                                                )
                                                                                .map(
                                                                                    (
                                                                                        str,
                                                                                        stid
                                                                                    ) => (
                                                                                        <div
                                                                                            key={
                                                                                                str +
                                                                                                stid
                                                                                            }
                                                                                            className="value-item-stats-essential-programs-gamble__star"
                                                                                        >
                                                                                            <img
                                                                                                src={
                                                                                                    star
                                                                                                }
                                                                                                alt="star"
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
                                                                            l
                                                                                ?.loyalty_program
                                                                                ?.count_levels
                                                                        }
                                                                    </div>
                                                                    <div className="value-item-stats-essential-programs-gamble__content">
                                                                        {l?.loyalty_program?.loyalty_level_description}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__features features-essential-programs-gamble">
                                                        {l?.loyalty_program?.loyalty_keypoint.map(
                                                            (lk) => (
                                                                <div className="features-essential-programs-gamble__item">
                                                                    <Link className="features-essential-programs-gamble__icon" 
                                                                    rel="nofollow noopener"
                                                              
                                                                    to={`/casino/${sanitizeLink(l?.casino_name)}?queryId=${l?.casino_id}`}>
                                                                        <LazyCardImg
                                                                            img={
                                                                                lk?.image ||
                                                                                ""
                                                                            }
                                                                            height="100%"
                                                                            width="100%"
                                                                            size="medium"
                                                                        />
                                                                    </Link>
                                                                    <div className="features-essential-programs-gamble__info">
                                                                        <div className="features-essential-programs-gamble__name">
                                                                            {
                                                                                lk?.text_1
                                                                            }
                                                                        </div>
                                                                        <div className="features-essential-programs-gamble__text">
                                                                            {
                                                                                lk?.text_2
                                                                            }
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
                                                            rel="nofollow noopener"
                                                            href={l.casino_affiliate_link}
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="item-essential-programs-gamble__btn item-essential-programs-gamble__btn_yellow"
                                                        >
                                                            Visit Casino
                                                        </a>
                                                    </div>
                                                    <div className="item-essential-programs-gamble__bottom-column">
                                                        <Link to={`/casino/${sanitizeLink(l?.casino_name)}/loyalty?queruId=${l?.loyalty_program?.id}`}
                                                            aria-label="Put your description here."
                                                        
                                                            className="item-essential-programs-gamble__btn"
                                                        >
                                                            Read More
                                                        </Link>
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
            </section>
        </>
    )
}
