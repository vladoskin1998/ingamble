import { RewievCasinoDataResponse } from '../../types'
import { CasinoReview } from './CasinoReview'
import HarryImg from '../../assets/img/casino-person/3.webp'
import { useState } from 'react'
import { sanitizeNumberLike } from '../../helper'
const DoYouLike = ({ likes: DataLike }: { likes: number }) => {
    const [like, setLike] = useState<'' | 'like' | 'dislike'>('')

    // className={`like-get-bonus__btn like-get-bonus__btn_like ${
    //     like === "like" &&
    //     "active"
    // }`}

    // onClick={() =>
    //     setLike("dislike")
    // }
    // className={`like-get-bonus__btn like-get-bonus__btn_dislike ${
    //     like ===
    //         "dislike" &&
    //     "active"
    // }`}

    return (
        <div className="iwild-review__item item-iwild-review item-iwild-review_like-bonus">
            <h2 className="item-iwild-review__title">Do You Like This Casino?</h2>
            <div className="item-iwild-review__btns">
                <div className="item-iwild-review__btns-item">
                    <button aria-label="Put your description here." className={`item-iwild-review__btn item-iwild-review__btn_like  ${like === 'like' && 'active'}`} onClick={() => setLike('like')}>
                        <span className="item-iwild-review__btn-icon">
                            <svg>
                                <use xlinkHref="#like"></use>
                            </svg>
                        </span>
                        <span className="item-iwild-review__btn-number">{sanitizeNumberLike(DataLike + (like === 'like' ? 1 : 0))}</span>
                    </button>
                </div>
                <div className="item-iwild-review__btns-item">
                    <button aria-label="Put your description here." className={`item-iwild-review__btn item-iwild-review__btn_dislike ${like === 'dislike' && 'active'}`} onClick={() => setLike('dislike')}>
                        <span className="item-iwild-review__btn-icon">
                            <svg>
                                <use xlinkHref="#like"></use>
                            </svg>
                        </span>
                        <span className="item-iwild-review__btn-number"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Harry = ({ handlerOpen, data }: { handlerOpen: (s: boolean) => void; data: undefined | RewievCasinoDataResponse }) => {
    return (
        <>
            <section className="review__iwild-review-mob iwild-review-mob">
                <div className="iwild-review-mob__container container"></div>
            </section>

            <section className="review__iwild-review iwild-review">
                <div className="iwild-review__container container">
                    <div className="iwild-review__row iwild-review__row_1">
                        <div className="iwild-review__column iwild-review__column_medium iwild-review__harytitle" data-da="iwild-review-mob__container, 0, 1150">
                            <CasinoReview handlerOpen={handlerOpen} data={data} />
                        </div>

                        <div className="iwild-review__column iwild-review__column_medium">
                            <div className="iwild-review__item item-iwild-review item-iwild-review_author" style={{ justifyContent: 'center' }}>
                                <div className="item-iwild-review__content content-item-iwild-review">
                                    <div className="content-item-iwild-review__image">
                                        <img src={HarryImg} alt="HARRY STYLES" />
                                    </div>
                                    <div className="content-item-iwild-review__body">
                                        <div className="content-item-iwild-review__label">Author</div>
                                        <div className="content-item-iwild-review__name">MAREK PROCHAZKA</div>
                                        <div className="content-item-iwild-review__text">
                                            <p>
                                                Content Maker, Crypto & Gambling Enthusiast
                                                {/* Marketing @Coinmooner. Current
                                                learning project: USA.
                                                <br />I also summarise books on
                                                my <span>personal blog</span>. */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="item-iwild-review__socials">
                                    <div className="socials-top-footer__items">
                                        <div className="socials-top-footer__item">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="socials-top-footer__link"
                                            >
                                                <svg>
                                                    <use xlinkHref="#x"></use>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="socials-top-footer__item">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="socials-top-footer__link"
                                            >
                                                <svg>
                                                    <use xlinkHref="#facebook"></use>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="socials-top-footer__item">
                                            <a
                                                href=""
                                                aria-label="Put your description here."
                                                target="_blank"
                                                className="socials-top-footer__link"
                                            >
                                                <svg>
                                                    <use xlinkHref="#linkedin"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="iwild-review__column iwild-review__column_small iwild-review__do-you-like-mob">
                            <DoYouLike likes={data?.likes || 0} />
                        </div>
                    </div>
                    <h2 className="iwild-review__title-mob">Summary</h2>
                    <div className="iwild-review__row iwild-review__row_2">
                        <div className="iwild-review__column iwild-review__column_small">
                            <div className="iwild-review__item item-iwild-review item-iwild-review_like">
                                <div className="item-iwild-review__bg"></div>
                                <div className="item-iwild-review__body">
                                    <h3 className="item-iwild-review__title">What we like:</h3>
                                    <ul className="item-iwild-review__list">
                                        {data?.what_we_like?.split('\r\n').map((item) => (
                                            <li className="item-iwild-review__list-item">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="iwild-review__column iwild-review__column_small">
                            <div className="iwild-review__item item-iwild-review item-iwild-review_dont-like">
                                <div className="item-iwild-review__bg"></div>
                                <div className="item-iwild-review__body">
                                    <h3 className="item-iwild-review__title">What we don’t like:</h3>
                                    <ul className="item-iwild-review__list">
                                        {data?.what_we_dont_like?.split('\r\n').map((item) => (
                                            <li className="item-iwild-review__list-item">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="iwild-review__column iwild-review__column_small iwild-review__do-you-like-pc">
                            <DoYouLike likes={data?.likes || 0} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
