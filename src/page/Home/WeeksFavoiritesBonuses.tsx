import casinoCards01 from "../../assets/img/casino-cards/01.jpg"
import casinoCards02 from "../../assets/img/casino-cards/02.jpg"
import casinoCards03 from "../../assets/img/casino-cards/03.jpg"
import casinoCards04 from "../../assets/img/casino-cards/04.jpg"
import casinoCards05 from "../../assets/img/casino-cards/05.jpg"
import MainSlider from "../../components/swiper/MainSlider"


export default function WeeksFavoiritesBonuses() {
    return (
        <section className="main-gamble__weeks-favoirites-bonuses weeks-favoirites-bonuses-gamble main-gamble__payn-play-casinos payn-play-casinos-gamble">
            <div className="new-bonuses-gamble__container container">
                <div className="weeks-favoirites-bonuses-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Week’s Favoirites Bonuses
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                         href="/see-all?key=32345678"
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
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
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
                                        img: casinoCards02,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards03,
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
                                            " Big Fat Race to $100 Moon coins",
                                    },
                                    {
                                        img: casinoCards05,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                    },
                                ]}
                            />
                {/* <div className="weeks-favoirites-bonuses-gamble__slider slider">
                    <div className="slider__body">
                        <div className="weeks-favoirites-bonuses-gamble__swiper slider__swiper swiper">
                            <div className="slider__wrapper swiper-wrapper">
                                <div className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/04.jpg"
                                                    alt="Big Fat Race to $100 Moon coins"
                                                />
                                            </div>
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="casino-card__bnt"
                                            >
                                                Play
                                            </a>
                                        </a>
                                        <div className="casino-card__content">
                                            <div className="casino-card__small-card casino-small-card">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-small-card__image-block"
                                                >
                                                    <div className="casino-small-card__image ibg">
                                                        <img
                                                            src="/src/assets/img/casino-small-cards/Tsars.jpg"
                                                            alt="Tsars"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="casino-small-card__body">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__name"
                                                    >
                                                        Tsars
                                                    </a>
                                                    <div className="casino-small-card__info">
                                                        <span className="casino-small-card__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="casino-small-card__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="casino-small-card__rating">
                                                        <span className="casino-small-card__rating-icon">
                                                            <img
                                                                src={star}
                                                                alt="star"
                                                            />
                                                        </span>
                                                        <span className="casino-small-card__rating-number">
                                                            5.5
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/07.jpg"
                                                    alt="Big Fat Race to $100 Moon coins "
                                                />
                                            </div>
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="casino-card__bnt"
                                            >
                                                Play
                                            </a>
                                        </a>
                                        <div className="casino-card__content">
                                            <div className="casino-card__small-card casino-small-card">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-small-card__image-block"
                                                >
                                                    <div className="casino-small-card__image ibg">
                                                        <img
                                                            src="/src/assets/img/casino-small-cards/Casoo.jpg"
                                                            alt="Casoo"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="casino-small-card__body">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__name"
                                                    >
                                                        Casoo
                                                    </a>
                                                    <div className="casino-small-card__info">
                                                        <span className="casino-small-card__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="casino-small-card__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="casino-small-card__rating">
                                                        <span className="casino-small-card__rating-icon">
                                                            <img
                                                                src={star}
                                                                alt="star"
                                                            />
                                                        </span>
                                                        <span className="casino-small-card__rating-number">
                                                            5.5
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/06.jpg"
                                                    alt="Big Fat Race to $100 Moon coins"
                                                />
                                            </div>
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="casino-card__bnt"
                                            >
                                                Play
                                            </a>
                                        </a>
                                        <div className="casino-card__content">
                                            <div className="casino-card__small-card casino-small-card">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-small-card__image-block"
                                                >
                                                    <div className="casino-small-card__image ibg">
                                                        <img
                                                            src="/src/assets/img/casino-small-cards/Playamo.jpg"
                                                            alt="Playamo"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="casino-small-card__body">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__name"
                                                    >
                                                        Playamo
                                                    </a>
                                                    <div className="casino-small-card__info">
                                                        <span className="casino-small-card__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="casino-small-card__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="casino-small-card__rating">
                                                        <span className="casino-small-card__rating-icon">
                                                            <img
                                                                src={star}
                                                                alt="star"
                                                            />
                                                        </span>
                                                        <span className="casino-small-card__rating-number">
                                                            5.5
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/08.jpg"
                                                    alt="Big Fat Race to $100 Moon coins"
                                                />
                                            </div>
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="casino-card__bnt"
                                            >
                                                Play
                                            </a>
                                        </a>
                                        <div className="casino-card__content">
                                            <div className="casino-card__small-card casino-small-card">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-small-card__image-block"
                                                >
                                                    <div className="casino-small-card__image ibg">
                                                        <img
                                                            src="/src/assets/img/casino-small-cards/Tsars.jpg"
                                                            alt="Tsars"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="casino-small-card__body">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__name"
                                                    >
                                                        Tsars
                                                    </a>
                                                    <div className="casino-small-card__info">
                                                        <span className="casino-small-card__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="casino-small-card__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="casino-small-card__rating">
                                                        <span className="casino-small-card__rating-icon">
                                                            <img
                                                                src={star}
                                                                alt="star"
                                                            />
                                                        </span>
                                                        <span className="casino-small-card__rating-number">
                                                            5.5
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/01.jpg"
                                                    alt="Big Fat Race to $100 Moon coins"
                                                />
                                            </div>
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="casino-card__bnt"
                                            >
                                                Play
                                            </a>
                                        </a>
                                        <div className="casino-card__content">
                                            <div className="casino-card__small-card casino-small-card">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-small-card__image-block"
                                                >
                                                    <div className="casino-small-card__image ibg">
                                                        <img
                                                            src="/src/assets/img/casino-small-cards/Playkasino.jpg"
                                                            alt="Playkasino"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="casino-small-card__body">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__name"
                                                    >
                                                        Playkasino
                                                    </a>
                                                    <div className="casino-small-card__info">
                                                        <span className="casino-small-card__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="casino-small-card__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="casino-small-card__rating">
                                                        <span className="casino-small-card__rating-icon">
                                                            <img
                                                                src={star}
                                                                alt="star"
                                                            />
                                                        </span>
                                                        <span className="casino-small-card__rating-number">
                                                            5.5
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide slide-slider swiper-slide">
                                    <div className="slide-slider__item casino-card">
                                        <a
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="casino-card__image-block"
                                        >
                                            <div className="casino-card__image ibg">
                                                <img
                                                    src="/src/assets/img/casino-cards/07.jpg"
                                                    alt="Big Fat Race to $100 Moon coins "
                                                />
                                            </div>
                                            <a
                                                href=""
                                                target="_blank"
                                                aria-label="Put your description here."
                                                className="casino-card__bnt"
                                            >
                                                Play
                                            </a>
                                        </a>
                                        <div className="casino-card__content">
                                            <div className="casino-card__small-card casino-small-card">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-small-card__image-block"
                                                >
                                                    <div className="casino-small-card__image ibg">
                                                        <img
                                                            src="/src/assets/img/casino-small-cards/Casino-Vibes.jpg"
                                                            alt="Casino Vibes"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="casino-small-card__body">
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="casino-small-card__name"
                                                    >
                                                        Casino Vibes
                                                    </a>
                                                    <div className="casino-small-card__info">
                                                        <span className="casino-small-card__info-link">
                                                            Sportsbook
                                                        </span>
                                                        <span className="casino-small-card__info-link">
                                                            VPN Friendly
                                                        </span>
                                                    </div>
                                                    <div className="casino-small-card__rating">
                                                        <span className="casino-small-card__rating-icon">
                                                            <img
                                                                src={star}
                                                                alt="star"
                                                            />
                                                        </span>
                                                        <span className="casino-small-card__rating-number">
                                                            5.5
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider__bottom bottom-slider">
                        <div className="bottom-slider__pagination weeks-favoirites-bonuses-gamble__pagination swiper-pagination"></div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
