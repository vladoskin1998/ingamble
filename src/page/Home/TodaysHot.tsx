import MainSlider from "../../components/swiper/MainSlider"

import casinoCards01 from "../../assets/img/casino-cards/01.jpg"
import casinoCards02 from "../../assets/img/casino-cards/02.jpg"
import casinoCards03 from "../../assets/img/casino-cards/03.jpg"
import casinoCards04 from "../../assets/img/casino-cards/04.jpg"
import casinoCards05 from "../../assets/img/casino-cards/05.jpg"

import hot from "/src/assets/img/icons/hot.svg"


export const TodaysHot = () => {
  return (
    <section className="main-gamble__todays-hot todays-hot-gamble">
    <div className="todays-hot-gamble__container container">
        <div className="todays-hot-gamble__top top">
            <div className="top__row">
                <div className="top__column">
                    <div className="top__title-block">
                        <span className="top__title-icon">
                            <img
                                src={hot}
                                alt="Today’s Hot"
                            />
                        </span>
                        <h2 className="top__title">
                            Today’s Hot
                        </h2>
                    </div>
                </div>
                <div className="top__column">
                    <a
                         href="/see-all?key=22145678"
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
                    img: casinoCards01,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        "New Year Bet Race - $30,000 Rocket...",
                },
                {
                    img: casinoCards02,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        "New Year Bet Race - $30,000 Rocket...",
                },
                {
                    img: casinoCards03,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        " Big Fat Race to $100 Moon coins",
                },
                {
                    img: casinoCards04,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        "New Year Bet Race - $30,000 Rocket...",
                },
                {
                    img: casinoCards05,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        " Big Fat Race to $100 Moon coins",
                },
                {
                    img: casinoCards01,
                    raiting: "4.8",
                    likes: "34k",
                    nameCasino: "Stake Casino",
                    comment:
                        "New Year Bet Race - $30,000 Rocket...",
                },
            ]}
        />
    </div>
</section>
  )
}
