import { Link } from "react-router-dom"
import { SiblingBonuses } from "../../types"
import { COLORS_TAGS, sanitizeLink } from "../../helper"
import MainSlider from "../../components/swiper/MainSlider"

export const SiblingBonus = ({
    casinoName,
    casino_rank,
    casino_affiliate_link,
    casino_id,
    sibling_bonuses,
}: {
    casinoName: string | undefined
    sibling_bonuses: SiblingBonuses[] | undefined
    casino_rank: string | undefined
    casino_affiliate_link: string | undefined
    casino_id: number | undefined
}) => {
    return (
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
                    data={sibling_bonuses?.map((c) => ({
                        img: c?.bonus_image || "",
                        raiting: casino_rank || 10,
                        likes: c?.likes || 0,
                        casinoName: casinoName || '',
                        bonuseName: c?.name || '',
                        playLink: casino_affiliate_link,
                        imageLink: `/casino/${sanitizeLink(
                            c.name
                        )}/bonuses/${sanitizeLink(c?.name)}?queryId=${c?.id}` || '',
                        casinoLink: `/casino/${sanitizeLink(
                           casinoName
                        )}?queryId=${casino_id}` || '',
                        bonuseLink: `/casino/${sanitizeLink(
                            c.name
                        )}/bonuses/${sanitizeLink(c?.name)}?queryId=${c?.id}` || '',
                        tags: (
                            <>
                                {c.labels.map((l, ct) => (
                                    <div
                                        className={`tags-casino-card__item ${
                                            COLORS_TAGS[ct % 4]
                                        }`}
                                    >
                                        <span className="tags-casino-card__item-label">
                                            {l.name}
                                        </span>
                                    </div>
                                ))}
                            </>
                        ),
                    }))}
                />
            </div>
        </section>
    )
}
