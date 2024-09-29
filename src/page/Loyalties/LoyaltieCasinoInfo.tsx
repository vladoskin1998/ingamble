import star from "../../assets/img/icons/star.svg"
import like from "../../assets/img/icons/like.svg"
import mainimg3 from "../../assets/img/casino-info/main-img-3.png"
import latviaFlag from "../../assets/img/icons/latvia-flag.svg"
export const LoyaltieCasinoInfo = () => {
  return (
    <section className="loyaltie__casino-info casino-info">
    <div className="casino-info__container container">
        <div className="casino-info__body">
            <div className="casino-info__row">
                <div className="casino-info__main main-casino-info">
                    <div className="main-casino-info__image-block">
                        <div className="main-casino-info__image ibg">
                            <img src={mainimg3} alt="main-img" />
                        </div>
                    </div>
                </div>
                <div className="casino-info__content content-casino-info">
                    <div className="content-casino-info__main">
                        <div className="content-casino-info__top-panel">
                            <div
                                className="info-casino-card__stake-rating name-main-casino-info__stake-rating">
                                <span className="info-casino-card__stake-rating-icon">
                                    <img src={star} alt="star" />
                                </span>
                                <span className="info-casino-card__stake__rating-number">
                                    9.9
                                </span>
                            </div>
                            <div className="info-casino-card__likes name-main-casino-info__likes">
                                <span className="info-casino-card__likes-icon">
                                    <img src={like} alt="like" />
                                </span>
                                <span className="info-casino-card__likes-number">
                                    34K
                                </span>
                            </div>
                        </div>
                        <div className="content-casino-info__top">
                            <h2 className="content-casino-info__title">
                                BitSler Casino Vip Loyalty Program
                            </h2>
                        </div>
                        <div className="content-casino-info__country country-content-casino-info">
                            <div className="country-content-casino-info__info">
                                <div className="country-content-casino-info__icon">
                                    <img src={latviaFlag} alt="latvia" />
                                </div>
                                <div className="country-content-casino-info__text">
                                    Accepts players from Latvia
                                </div>
                            </div>
                            <span className="main-get-bonus__btn main-get-bonus__btn_apply">
                                T&C Apply
                            </span>
                        </div>
                        <a href="" aria-label="Put your description here." target="_blank"
                            className="main-get-bonus__btn main-get-bonus__btn_bonus">
                            Play and Enjoy
                        </a>
                    </div>
                    <div className="content-casino-info__features features-content-casino-info">
                        <div className="features-content-casino-info__row">
                            <div className="features-content-casino-info__column">
                                <div
                                    className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_border">
                                    <div className="item-features-content-casino-info__top">
                                        <div className="item-features-content-casino-info__label">
                                            Loyalty Rank</div>
                                    </div>
                                    <div className="item-features-content-casino-info__body">
                                        <div className="item-features-content-casino-info__number">
                                            9.9
                                        </div>
                                        <div className="item-features-content-casino-info__rating">
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- <div
                                    className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_low">
                                    <div className="item-features-content-casino-info__top">
                                        <div className="item-features-content-casino-info__label">
                                            Safety Index</div>
                                    </div>
                                    <div className="item-features-content-casino-info__body">
                                        <div className="item-features-content-casino-info__number">
                                            2.5 <span
                                                className="item-features-content-casino-info__number-level">Low</span>
                                        </div>
                                        <div className="item-features-content-casino-info__rating">
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- <div
                                    className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_medium">
                                    <div className="item-features-content-casino-info__top">
                                        <div className="item-features-content-casino-info__label">
                                            Safety Index</div>
                                    </div>
                                    <div className="item-features-content-casino-info__body">
                                        <div className="item-features-content-casino-info__number">
                                            2.5 <span
                                                className="item-features-content-casino-info__number-level">Medium</span>
                                        </div>
                                        <div className="item-features-content-casino-info__rating">
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                            <div
                                                className="item-features-content-casino-info__star">
                                                <img src={star} alt="star" />
                                            </div>
                                        </div>
                                    </div>
                                </div> --> */}
                            </div>
                            <div className="features-content-casino-info__column">
                                <div
                                    className="features-content-casino-info__item item-features-content-casino-info">
                                    <div className="item-features-content-casino-info__top">
                                        <div className="item-features-content-casino-info__label">
                                            Levels</div>
                                    </div>
                                    <div className="item-features-content-casino-info__body">
                                        <div className="item-features-content-casino-info__number">
                                            42
                                        </div>
                                        <div className="item-features-content-casino-info__value">
                                            Outstanding</div>
                                    </div>
                                </div>
                            </div>
                            <div className="features-content-casino-info__column">
                                <div
                                    className="features-content-casino-info__item item-features-content-casino-info">
                                    <div className="item-features-content-casino-info__top">
                                        <div className="item-features-content-casino-info__label">
                                            Get
                                        </div>
                                    </div>
                                    <div className="item-features-content-casino-info__body">
                                        <div className="item-features-content-casino-info__number">
                                            2XP Points
                                        </div>
                                        <div className="item-features-content-casino-info__value">
                                            For 1$ bet
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="features-content-casino-info__column">
                                <div
                                    className="features-content-casino-info__item item-features-content-casino-info">
                                    <div className="item-features-content-casino-info__top">
                                        <div className="item-features-content-casino-info__label">
                                            Surprise Gifts
                                        </div>
                                    </div>
                                    <div className="item-features-content-casino-info__body">
                                        <div className="item-features-content-casino-info__number">
                                            Treasure chest
                                        </div>
                                        <div className="item-features-content-casino-info__value">
                                            Every Level up
                                        </div>
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
