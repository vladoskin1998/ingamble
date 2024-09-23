import casinoCards01 from "../../assets/img/casino-cards/01.jpg"
import casinoCards02 from "../../assets/img/casino-cards/02.jpg"
import casinoCards03 from "../../assets/img/casino-cards/03.jpg"
import casinoCards04 from "../../assets/img/casino-cards/04.jpg"
import casinoCards05 from "../../assets/img/casino-cards/05.jpg"

import casinoCards08 from "../../assets/img/casino-cards/08.jpg"
import MainSlider from "../../components/swiper/MainSlider"

export const LowWagerBonus = ({isShowSubtitle=true}:{isShowSubtitle?:boolean}) => {
  return (
    <section className="main-gamble__low-wager-bonuses low-wager-bonuses-gamble">
    <div className="low-wager-bonuses-gamble__container container">
        <div className="low-wager-bonuses-gamble__top top">
            <div className="top__row">
                <div className="top__column">
                    <div className="top__title-block">
                        <h2 className="top__title">
                            Low Wager Bonuses
                        </h2>
                    </div>
                    {isShowSubtitle&& <div className="top__subtitle">
                        Get your winnings fast
                    </div>}
                </div>
                <div className="top__column">
                    <a
                        href=""
                        aria-label="Put your description here."
                        target="_blank"
                        className="top__btn"
                    >
                        <span>See All</span>
                        <span className="top__btn-arrow">
                            <svg>
                                <use xlinkHref="#arrow"></use>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <MainSlider
            data={[
                {
                    img: casinoCards08,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        "New Year Bet Race - $30,000 Rocket...",
                    tags: (
                        <>
                            <div className="tags-casino-card__item tags-casino-card__item_green">
                                <span className="tags-casino-card__item-label">
                                    WR:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    4.0x
                                </span>
                            </div>
                            <div className="tags-casino-card__item tags-casino-card__item_blue">
                                <span className="tags-casino-card__item-label">
                                    Min Dep:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    10€
                                </span>
                            </div>
                        </>
                    ),
                },
                {
                    img: casinoCards02,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        "New Year Bet Race - $30,000 Rocket...",
                    tags: (
                        <>
                            <div className="tags-casino-card__item tags-casino-card__item_green">
                                <span className="tags-casino-card__item-label">
                                    WR:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    4.0x
                                </span>
                            </div>
                            <div className="tags-casino-card__item tags-casino-card__item_blue">
                                <span className="tags-casino-card__item-label">
                                    Min Dep:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    10€
                                </span>
                            </div>
                        </>
                    ),
                },
                {
                    img: casinoCards03,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        " Big Fat Race to $100 Moon coins",
                    tags: (
                        <>
                            <div className="tags-casino-card__item tags-casino-card__item_green">
                                <span className="tags-casino-card__item-label">
                                    WR:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    4.0x
                                </span>
                            </div>
                            <div className="tags-casino-card__item tags-casino-card__item_blue">
                                <span className="tags-casino-card__item-label">
                                    Min Dep:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    10€
                                </span>
                            </div>
                        </>
                    ),
                },
                {
                    img: casinoCards04,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        "New Year Bet Race - $30,000 Rocket...",
                    tags: (
                        <>
                            <div className="tags-casino-card__item tags-casino-card__item_green">
                                <span className="tags-casino-card__item-label">
                                    WR:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    4.0x
                                </span>
                            </div>
                            <div className="tags-casino-card__item tags-casino-card__item_blue">
                                <span className="tags-casino-card__item-label">
                                    Min Dep:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    10€
                                </span>
                            </div>
                        </>
                    ),
                },
                {
                    img: casinoCards05,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        " Big Fat Race to $100 Moon coins",
                    tags: (
                        <>
                            <div className="tags-casino-card__item tags-casino-card__item_green">
                                <span className="tags-casino-card__item-label">
                                    WR:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    4.0x
                                </span>
                            </div>
                            <div className="tags-casino-card__item tags-casino-card__item_blue">
                                <span className="tags-casino-card__item-label">
                                    Min Dep:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    10€
                                </span>
                            </div>
                        </>
                    ),
                },
                {
                    img: casinoCards01,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        "New Year Bet Race - $30,000 Rocket...",
                    tags: (
                        <>
                            <div className="tags-casino-card__item tags-casino-card__item_green">
                                <span className="tags-casino-card__item-label">
                                    WR:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    4.0x
                                </span>
                            </div>
                            <div className="tags-casino-card__item tags-casino-card__item_blue">
                                <span className="tags-casino-card__item-label">
                                    Min Dep:
                                </span>
                                <span className="tags-casino-card__item-value">
                                    10€
                                </span>
                            </div>
                        </>
                    ),
                },
            ]}
        />
    </div>
</section>
  )
}
