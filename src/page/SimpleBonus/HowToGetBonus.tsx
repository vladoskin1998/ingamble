import giftIcon from "../../assets/img/icons/gift.svg"
import bg08 from "../../assets/img/bg/08.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { GetDataBonusResponse } from "../../types"
import { useState } from "react"
import { Link } from "react-router-dom"
import { cloacingLink, sanitizeLink } from "../../helper"

export const HowToGetBonus = ({
    data,
}: {
    data: GetDataBonusResponse | undefined
}) => {
    const [like, setLike] = useState<"" | "like" | "dislike">("")

    return (
        <section className="simple-bonus__get-bonus get-bonus">
            <div className="get-bonus__container container">
                <div className="get-bonus__body">
                    <div className="get-bonus__bg ibg">
                        <img src={bg08} alt="bg" loading="lazy" />
                    </div>
                    <div className="get-bonus__row">
                        <div className="get-bonus__main main-get-bonus">
                            <div className="main-get-bonus__icon">
                                <svg>
                                    <use xlinkHref="#gift"></use>
                                </svg>
                            </div>
                            <div className="main-get-bonus__content">
                                <h2 className="main-get-bonus__title">
                                    How to get Bonus?
                                </h2>
                                <div className="main-get-bonus__text">
                                    Bonus is activated after first deposit
                                </div>
                                <div className="main-get-bonus__btns">
                                    <div className="main-get-bonus__btns-item">
                                        <a
                                            href={cloacingLink(
                                                data?.url_casino ||    data?.casino_affiliate_link 
                                                
                                            )}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                e.preventDefault()
                                                window.open(
                                                    data?.casino_affiliate_link ||
                                                        data?.url_casino,
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            }}
                                            className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                        >
                                            <span>
                                                <LazyLoadImage
                                                    src={giftIcon}
                                                    alt="gift"
                                                />
                                            </span>
                                            Get Bonus
                                        </a>
                                    </div>
                                    <div className="main-get-bonus__btns-item">
                                        <Link
                                            rel="nofollow noopener"
                                            to={`/casino/${sanitizeLink(data?.casino_name)}?queryId=${data?.casino_id}`}
                                            aria-label="Put your description here."
                                            className="main-get-bonus__btn main-get-bonus__btn_review"
                                        >
                                            <span>
                                                <svg>
                                                    <use xlinkHref="#review"></use>
                                                </svg>
                                            </span>
                                            {data?.casino_name.replace(
                                                /casino/i,
                                                ""
                                            )}{" "}
                                            Casino Review
                                        </Link>
                                    </div>
                                    <div className="main-get-bonus__btns-item">
                                        <a
                                            rel="nofollow noopener"
                                            // href={data?.link_tc || ''}
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="main-get-bonus__btn main-get-bonus__btn_apply"
                                        >
                                            T&C Apply
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="get-bonus__like like-get-bonus">
                            <div className="like-get-bonus__body">
                                <div className="like-get-bonus__title">
                                    Do You Like This Bonus?
                                </div>
                                <div className="like-get-bonus__btns">
                                    <div className="like-get-bonus__btns-item">
                                        <button
                                            onClick={() => setLike("like")}
                                            className={`like-get-bonus__btn like-get-bonus__btn_like ${
                                                like === "like" && "active"
                                            }`}
                                        >
                                            <span className="like-get-bonus__btn-icon">
                                                <svg>
                                                    <use xlinkHref="#like"></use>
                                                </svg>
                                            </span>
                                            <span className="like-get-bonus__btn-number">
                                                {(data?.likes ?? 0) +
                                                    (like === "like" ? 1 : 0)}
                                            </span>
                                        </button>
                                    </div>
                                    <div className="like-get-bonus__btns-item">
                                        <button
                                            onClick={() => setLike("dislike")}
                                            className={`like-get-bonus__btn like-get-bonus__btn_dislike ${
                                                like === "dislike" && "active"
                                            }`}
                                        >
                                            <span className="like-get-bonus__btn-icon">
                                                <svg>
                                                    <use xlinkHref="#like"></use>
                                                </svg>
                                            </span>
                                            <span className="like-get-bonus__btn-number"></span>
                                        </button>
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
