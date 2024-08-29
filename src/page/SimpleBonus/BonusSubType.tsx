

const color_gifts = [
    "item-deposits_grass",
    "item-deposits_ocean",
    "item-deposits_purple",
    "item-deposits_green",
]

export const BonusSubType = ({bonus_subtype}: {bonus_subtype:{ name: string }[]}) => {

    const blockWidth = (l:number) => {
        switch (l) {
            case 2:
                return "deposits__column_big";            
            case 4:
                return "deposits__column_small";    
            default:
                return "deposits__column_medium";
        }
    }
  
    
  return (
    <section className="simple-bonus__deposits deposits">
    <div className="deposits__container container">
        <div className="deposits__body">
            <div className="deposits__block">
                <div className="deposits__row">
                    {(bonus_subtype || []).map(
                        (item, index) => {
                            const [part1, part2] = item.name
                                .split("|")
                                .map((s) => s.trim())

                            return (
                                <div className={`deposits__column ${blockWidth(bonus_subtype.length)}`}>
                                    <div
                                        className={`deposits__item item-deposits ${color_gifts[index]}`}
                                    >
                                        <div className="item-deposits__icon icon-item-deposits">
                                            <div className="icon-item-deposits__img">
                                                <svg>
                                                    <use xlinkHref="#gift"></use>
                                                </svg>
                                            </div>
                                            <div className="icon-item-deposits__number">
                                                <div className="icon-item-deposits__number-border">
                                                    <span>
                                                        {index +
                                                            1}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-deposits__info info-item-deposits">
                                            <div className="info-item-deposits__label">
                                                {part1}
                                            </div>
                                            <div className="info-item-deposits__value">
                                                {part2}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                    
                 
                </div>
            </div>
            {/* <div className="deposits__block">
                <div className="deposits__row">
                    <div className="deposits__column deposits__column_small">
                        <div className="deposits__item item-deposits item-deposits_grass">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    1st Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    150% up to 200 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deposits__column deposits__column_small">
                        <div className="deposits__item item-deposits item-deposits_ocean">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    2nd Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    100% up to 150 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deposits__column deposits__column_small">
                        <div className="deposits__item item-deposits item-deposits_purple">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    3rd Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    50% up to 100 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deposits__column deposits__column_small">
                        <div className="deposits__item item-deposits item-deposits_green">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>4</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    4rd Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    25% up to 50 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="deposits__block">
                <div className="deposits__row">
                    <div className="deposits__column deposits__column_medium">
                        <div className="deposits__item item-deposits item-deposits_grass">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    1st Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    150% up to 200 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deposits__column deposits__column_medium">
                        <div className="deposits__item item-deposits item-deposits_ocean">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    2nd Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    100% up to 150 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deposits__column deposits__column_medium">
                        <div className="deposits__item item-deposits item-deposits_purple">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    3rd Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    50% up to 100 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deposits__column deposits__column_medium">
                        <div className="deposits__item item-deposits item-deposits_green">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>4</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    4rd Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    25% up to 50 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deposits__column deposits__column_medium">
                        <div className="deposits__item item-deposits item-deposits_orange">
                            <div className="item-deposits__icon icon-item-deposits">
                                <div className="icon-item-deposits__img">
                                    <svg>
                                        <use xlinkHref="#gift"></use>
                                    </svg>
                                </div>
                                <div className="icon-item-deposits__number">
                                    <div className="icon-item-deposits__number-border">
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-deposits__info info-item-deposits">
                                <div className="info-item-deposits__label">
                                    5th Deposit
                                </div>
                                <div className="info-item-deposits__value">
                                    15% up to 25 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</section>
  )
}
