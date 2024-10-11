

export const CasinoReview = ({
    handlerOpen,
}: {
    handlerOpen: (s: boolean) => void
}) => {

  
    return (
        <>
            <div className="iwild-review__item item-iwild-review item-iwild-review_main">
            <h2 className="item-iwild-review__title">iWild Casino review</h2>
            <div className="item-iwild-review__text">
                <p>
                    iWild Casino - is the new era of online casinos. Newly
                    opened casino launched in 2017 and raised popularity in a
                    days. Most gamers checked and loved it from first. The new
                    era of online casinos. Newly opened casino launched in 2017
                    and raised popularity in a days. Most gamers checked and
                    loved it. Casino launched in 2017 and raised popularity in a
                    days. Most gamers checked and loved it. Newly opened casino
                    launched in 2017 and raised popularity in a days. Newly
                    opened casino launched in 2017 and raised popularity in a
                    days. Most gamers checked and loved it from first. The new
                    era of online casinos. Newly opened casino launched in 2017
                    and raised popularity in a days. Most gamers checked and
                    loved it. Casino launched in 2017 and raised popularity in a
                    days. Most gamers checked and loved it. Newly opened casino
                    launched in 2017 and raised popularity in a days.
                </p>
            </div>
            <button
                onClick={() => handlerOpen(true)}
                className="item-iwild-review__btn item-content-bonus-information__link popup-review-btn"
            >
                Read More
            </button>
        </div>
     
        </>
    
    )
}
