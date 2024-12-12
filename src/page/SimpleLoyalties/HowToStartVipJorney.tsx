
import bg08 from "../../assets/img/bg/08.jpg"

import { useState } from "react"
import { sanitizeLink } from "../../helper"
import { Link } from "react-router-dom"

export const HowToStartVipJorney = (data: {
    casino_affiliate_link?: string
    casino_name?: string
    likes?: number
    queryId:string | number | undefined
    link_tc: string | undefined
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
                                    <use xlinkHref="#vip"></use>
                                </svg>
                            </div>
                            <div className="main-get-bonus__content">
                                <h2 className="main-get-bonus__title">
                                How to start VIP journey?
                                </h2>
                                <div className="main-get-bonus__text">
                                Loyalty program is activated after first deposit
                                </div>
                                <div className="main-get-bonus__btns">
                                    <div className="main-get-bonus__btns-item">
                                        <a
                                            rel="nofollow noopener"
                                            href={data.casino_affiliate_link }
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                            title="link"
                                       
                                        >
                                         
                                            Start Playing
                                        </a>
                                    </div>
                                    <div className="main-get-bonus__btns-item">
                                        <Link
                                            rel="nofollow noopener"
                                            to={`/casino/${sanitizeLink(data.casino_name)}?queryId=${data.queryId}`}
                                            aria-label="Put your description here."
                                        
                                            className="main-get-bonus__btn main-get-bonus__btn_review"
                                        >
                                            <span>
                                                <svg>
                                                    <use xlinkHref="#review"></use>
                                                </svg>
                                            </span>
                                            {  (data?.casino_name || "casino Name").replace(
                                                /casino/i,
                                                ""
                                            )}{" "}
                                            Casino Review
                                        </Link>
                                    </div>
                                    <div className="main-get-bonus__btns-item">
                                        <a
                                            rel="nofollow noopener"
                                            // href={data?.link_tc}
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
                                Do You Like This VIP Program?
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
