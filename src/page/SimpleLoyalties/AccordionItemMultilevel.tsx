import { AccordionItem } from "../../components/acordion/Acordion"

export const AccordionItemMultilevel = () => {
  return (
     <div className="information-loyaltie__column">
                        <div className="information-loyaltie__items">
                            <div className={`information-loyaltie__item item-information-loyaltie item-information-loyaltie_begginer `}>
                                <AccordionItem
                                    heading={
                                        <div className="item-information-loyaltie__top top-item-information-loyaltie accordion--title--element">
                                            <div className="top-item-information-loyaltie__column">
                                                <div className="top-item-information-loyaltie__icon">
                                                    <svg>
                                                        <use xlinkHref="#loyalty-information-1"></use>
                                                    </svg>
                                                </div>
                                                <h3 className="top-item-information-loyaltie__title">
                                                    Begginer
                                                </h3>
                                            </div>
                                            <div className="top-item-information-loyaltie__column">
                                                <div className="top-item-information-loyaltie__level">
                                                    Level 1-5
                                                </div>
                                                <div className="top-item-information-loyaltie__arrow">
                                                    <svg>
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    content={
                                        <div className="item-information-loyaltie__inner inner-information-loyaltie ">
                                            <div className="inner-information-loyaltie__items">
                                                <div className="inner-information-loyaltie__item item-inner-information-loyaltie">
                                                    <AccordionItem
                                                 
                                                        heading={
                                                            <div className="item-inner-information-loyaltie__top top-item-inner-information-loyaltie accordion--title--element">
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icon">
                                                                        <span>
                                                                            1
                                                                        </span>
                                                                        <svg>
                                                                            <use xlinkHref="#loyalty-information-11"></use>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__level">
                                                                        Level 1
                                                                    </div>
                                                                </div>
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icons">
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-1"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-2"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-3"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-4"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-6"></use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__arrow">
                                                                        <svg>
                                                                            <use xlinkHref="#arrow"></use>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                        content={
                                                            <div className="item-inner-information-loyaltie__body">
                                                                <div className="item-inner-information-loyaltie__wrapper">
                                                                    <div className="item-inner-information-loyaltie__row">
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    How
                                                                                    to
                                                                                    achieve:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    need
                                                                                    10,000
                                                                                    points
                                                                                    to
                                                                                    achieve
                                                                                    VIP
                                                                                    level
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Features:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Exchange
                                                                                    points
                                                                                    for
                                                                                    money:
                                                                                    100
                                                                                    CP
                                                                                    for
                                                                                    12$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Point
                                                                                    accumulation:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    get
                                                                                    1
                                                                                    point
                                                                                    for
                                                                                    20$
                                                                                    wagered
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    Cashback:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Withdrawal
                                                                                    limits:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10,000$/day
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Birthday
                                                                                    gift:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    250$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    deposit
                                                                                    bonus:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    100%
                                                                                    on
                                                                                    deposit
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Win
                                                                                    a
                                                                                    car:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Every
                                                                                    year
                                                                                    lottery
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="inner-information-loyaltie__item item-inner-information-loyaltie">
                                                    <AccordionItem
                                                    
                                                        heading={
                                                            <div className="accordion--title--element item-inner-information-loyaltie__top top-item-inner-information-loyaltie">
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icon">
                                                                        <span>
                                                                            2
                                                                        </span>
                                                                        <svg>
                                                                            <use xlinkHref="#loyalty-information-11"></use>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__level">
                                                                        Level 2
                                                                    </div>
                                                                </div>
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icons">
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-1"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-2"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-5"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-6"></use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__arrow">
                                                                        <svg>
                                                                            <use xlinkHref="#arrow"></use>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                        content={
                                                            <div className="item-inner-information-loyaltie__body">
                                                                <div className="item-inner-information-loyaltie__wrapper">
                                                                    <div className="item-inner-information-loyaltie__row">
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    How
                                                                                    to
                                                                                    achieve:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    need
                                                                                    10,000
                                                                                    points
                                                                                    to
                                                                                    achieve
                                                                                    VIP
                                                                                    level
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Features:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Exchange
                                                                                    points
                                                                                    for
                                                                                    money:
                                                                                    100
                                                                                    CP
                                                                                    for
                                                                                    12$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Point
                                                                                    accumulation:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    get
                                                                                    1
                                                                                    point
                                                                                    for
                                                                                    20$
                                                                                    wagered
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    Cashback:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Withdrawal
                                                                                    limits:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10,000$/day
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Birthday
                                                                                    gift:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    250$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    deposit
                                                                                    bonus:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    100%
                                                                                    on
                                                                                    deposit
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Win
                                                                                    a
                                                                                    car:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Every
                                                                                    year
                                                                                    lottery
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="inner-information-loyaltie__item item-inner-information-loyaltie">
                                                    <AccordionItem
                                                      
                                                        heading={
                                                            <div className="accordion--title--element item-inner-information-loyaltie__top top-item-inner-information-loyaltie">
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icon">
                                                                        <span>
                                                                            3
                                                                        </span>
                                                                        <svg>
                                                                            <use xlinkHref="#loyalty-information-11"></use>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__level">
                                                                        Level 3
                                                                    </div>
                                                                </div>
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icons">
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-2"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-3"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-4"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-5"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-6"></use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__arrow">
                                                                        <svg>
                                                                            <use xlinkHref="#arrow"></use>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                        content={
                                                            <div className="item-inner-information-loyaltie__body">
                                                                <div className="item-inner-information-loyaltie__wrapper">
                                                                    <div className="item-inner-information-loyaltie__row">
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    How
                                                                                    to
                                                                                    achieve:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    need
                                                                                    10,000
                                                                                    points
                                                                                    to
                                                                                    achieve
                                                                                    VIP
                                                                                    level
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Features:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Exchange
                                                                                    points
                                                                                    for
                                                                                    money:
                                                                                    100
                                                                                    CP
                                                                                    for
                                                                                    12$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Point
                                                                                    accumulation:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    get
                                                                                    1
                                                                                    point
                                                                                    for
                                                                                    20$
                                                                                    wagered
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    Cashback:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Withdrawal
                                                                                    limits:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10,000$/day
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Birthday
                                                                                    gift:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    250$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    deposit
                                                                                    bonus:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    100%
                                                                                    on
                                                                                    deposit
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Win
                                                                                    a
                                                                                    car:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Every
                                                                                    year
                                                                                    lottery
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="inner-information-loyaltie__item item-inner-information-loyaltie">
                                                    <AccordionItem
                                                   
                                                        heading={
                                                            <div className="accordion--title--element item-inner-information-loyaltie__top top-item-inner-information-loyaltie">
                                                                  <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icon">
                                                                        <span>
                                                                            4
                                                                        </span>
                                                                        <svg>
                                                                            <use xlinkHref="#loyalty-information-11"></use>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__level">
                                                                        Level 4
                                                                    </div>
                                                                </div>
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icons">
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-1"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-2"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-3"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-4"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-5"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-6"></use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__arrow">
                                                                        <svg>
                                                                            <use xlinkHref="#arrow"></use>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                        content={
                                                            <div className="item-inner-information-loyaltie__body">
                                                                <div className="item-inner-information-loyaltie__wrapper">
                                                                    <div className="item-inner-information-loyaltie__row">
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    How
                                                                                    to
                                                                                    achieve:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    need
                                                                                    10,000
                                                                                    points
                                                                                    to
                                                                                    achieve
                                                                                    VIP
                                                                                    level
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Features:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Exchange
                                                                                    points
                                                                                    for
                                                                                    money:
                                                                                    100
                                                                                    CP
                                                                                    for
                                                                                    12$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Point
                                                                                    accumulation:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    get
                                                                                    1
                                                                                    point
                                                                                    for
                                                                                    20$
                                                                                    wagered
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    Cashback:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Withdrawal
                                                                                    limits:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10,000$/day
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Birthday
                                                                                    gift:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    250$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    deposit
                                                                                    bonus:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    100%
                                                                                    on
                                                                                    deposit
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Win
                                                                                    a
                                                                                    car:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Every
                                                                                    year
                                                                                    lottery
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="inner-information-loyaltie__item item-inner-information-loyaltie">
                                                    <AccordionItem
                                                  
                                                        heading={
                                                            <div className="accordion--title--element item-inner-information-loyaltie__top top-item-inner-information-loyaltie">
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icon">
                                                                        <span>
                                                                            5
                                                                        </span>
                                                                        <svg>
                                                                            <use xlinkHref="#loyalty-information-11"></use>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__level">
                                                                        Level 5
                                                                    </div>
                                                                </div>
                                                                <div className="top-item-inner-information-loyaltie__column">
                                                                    <div className="top-item-inner-information-loyaltie__icons">
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-1"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-4"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-5"></use>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="top-item-inner-information-loyaltie__icons-item">
                                                                            <svg>
                                                                                <use xlinkHref="#loyalty-information-icon-6"></use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="top-item-inner-information-loyaltie__arrow">
                                                                        <svg>
                                                                            <use xlinkHref="#arrow"></use>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                        content={
                                                            <div className="item-inner-information-loyaltie__body">
                                                                <div className="item-inner-information-loyaltie__wrapper">
                                                                    <div className="item-inner-information-loyaltie__row">
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    How
                                                                                    to
                                                                                    achieve:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    need
                                                                                    10,000
                                                                                    points
                                                                                    to
                                                                                    achieve
                                                                                    VIP
                                                                                    level
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Features:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Exchange
                                                                                    points
                                                                                    for
                                                                                    money:
                                                                                    100
                                                                                    CP
                                                                                    for
                                                                                    12$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Point
                                                                                    accumulation:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    You
                                                                                    get
                                                                                    1
                                                                                    point
                                                                                    for
                                                                                    20$
                                                                                    wagered
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    Cashback:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-inner-information-loyaltie__column">
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Withdrawal
                                                                                    limits:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    10,000$/day
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Birthday
                                                                                    gift:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    250$
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Weekly
                                                                                    deposit
                                                                                    bonus:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    100%
                                                                                    on
                                                                                    deposit
                                                                                </div>
                                                                            </div>
                                                                            <div className="item-inner-information-loyaltie__element element-item-inner-information-loyaltie">
                                                                                <div className="element-item-inner-information-loyaltie__label">
                                                                                    Win
                                                                                    a
                                                                                    car:
                                                                                </div>
                                                                                <div className="element-item-inner-information-loyaltie__value">
                                                                                    Every
                                                                                    year
                                                                                    lottery
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
  )
}
