
import closeIcon from "../../assets/img/icons/close.svg"

import {  RewievCasinoDataResponse } from "../../types"



export const PopupReadMore = ({
    openModal,
    handlerOpen,
    data,
}: {
    openModal: boolean
    handlerOpen: (s: boolean) => void
    data: undefined | RewievCasinoDataResponse
}) => {

   
    return (
        <div className={`popup popup-review ${openModal && "open"}`} >
            <div className="popup__body">
                <div className="popup__content">
                    <div className="popup__top top-popup">
                        <h3 className="top-popup__title">
                            {data?.name} review
                        </h3>
                        <button className="top-popup__close popup-close" onClick={() => handlerOpen(false)}>
                            <img src={closeIcon} alt="close" />
                        </button>
                    </div>
                    <div className="popup__main main-popup">
                        <div className="main-popup__text-block">
                            <div className="main-popup__title">
                                General info
                            </div>
                            <pre className="main-popup__text">
                                {
                                    data?.review
                                }
                                {/* <p>
                                    iWild Casino - is the new era of online
                                    casinos. Newly opened casino launched in
                                    2017 and raised popularity in a days. Most
                                    gamers checked and loved it from first. The
                                    new era of online casinos. Newly opened
                                    casino launched in 2017 and raised
                                    popularity in a days. Most gamers checked
                                    and loved it. Casino launched in 2017 and
                                    raised popularity in a days. Most gamers
                                    checked and loved it. Newly opened casino
                                    launched in 2017 and raised popularity in a
                                    days. Most gamers checked and loved it from
                                    first.
                                </p>
                                <p>
                                    Most gamers checked and loved it. Newly
                                    opened casino launched and raised popularity
                                    in a days.
                                </p> */}
                            </pre>
                            {/* <div className="main-popup__title">
                                Zagolovok dlinnyii dliya krasoty
                            </div>
                            <div className="main-popup__text">
                                <p>
                                    Most gamers checked and loved it from first.
                                    The new era of online casinos. Newly opened
                                    casino launched in 2017 and raised
                                    popularity in a days. Most gamers checked
                                    and loved it. Casino launched in 2017 and
                                    raised popularity in a days. Most gamers
                                    checked and loved it. Newly opened casino
                                    launched in 2017 and raised popularity in a
                                    days.Most gamers checked and loved it from
                                    first. Most gamers checked and loved it from
                                    first. The new era of online casinos. Newly
                                    opened casino launched in 2017 and raised
                                    popularity in a days. Most gamers checked
                                    and loved it. Casino launched in 2017 and
                                    raised popularity in a days. Most gamers
                                    checked and loved it. Newly opened casino
                                    launched in 2017 and raised popularity in a
                                    days.
                                </p>
                            </div>
                            <div className="main-popup__text">
                                <p>
                                    Most gamers checked and loved it from first.
                                    The new era of online casinos. Newly opened
                                    casino launched in 2017 and raised
                                    popularity in a days. Most gamers checked
                                    and loved it. Casino launched in 2017 and
                                    raised popularity in a days. Most gamers
                                    checked and loved it. Newly opened casino
                                    launched in 2017 and raised popularity in a
                                    days.Most gamers checked and loved it from
                                    first. Most gamers checked and loved it from
                                    first. The new era of online casinos. Newly
                                    opened casino launched in 2017 and raised
                                    popularity in a days. Most gamers checked
                                    and loved it. Casino launched in 2017 and
                                    raised popularity in a days. Most gamers
                                    checked and loved it. Newly opened casino
                                    launched in 2017 and raised popularity in a
                                    days.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
