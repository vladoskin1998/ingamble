
export const GreatLiveCasinoBonuses = () => {
  return (
    <section className="main-gamble__live-casino-bonuses live-casino-bonuses-gamble">
    <div className="live-casino-bonuses-gamble__container container">
        <div className="live-casino-bonuses-gamble__top top">
            <div className="top__row">
                <div className="top__column">
                    <div className="top__title-block">
                        <h2 className="top__title">
                            Great Live Casino Bonuses
                        </h2>
                    </div>
                    <div className="top__subtitle">
                        Real-time experience
                    </div>
                </div>
                <div className="top__column">
                    <a
                           href="/see-all?key=78901234"
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
        <div className="live-casino-bonuses-gamble__slider slider">
            <div className="slider__body">
                <div className="live-casino-bonuses-gamble__swiper slider__swiper swiper">
                    {/* <MainSlider
                        data={[
                            {
                                img: casinoCards06,
                                raiting: "4.8",
                                likes: "34k",
                                nameCasino: "Stake Casino",
                                comment:
                                    "New Year Bet Race - $30,000 Rocket...",
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
                                img: casinoCards07,
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
                    /> */}
                </div>
            </div>
            <div className="slider__bottom bottom-slider">
                <div className="bottom-slider__pagination live-casino-bonuses-gamble__pagination swiper-pagination"></div>
            </div>
        </div>
    </div>
</section>
  )
}
