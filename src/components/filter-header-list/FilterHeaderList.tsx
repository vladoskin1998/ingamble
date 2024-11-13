export const FilterHeaderList = ({
    list,
    clearAll,
    clearOne,
}: {
    list: { value: string; field: string }[]
    clearAll: () => void
    clearOne: (v: string) => void
}) => {

    if(!list.length) return <></>
    return (
        <div className="filter-scenarios__filter-selected filter-selected">
            <div className="filter-selected__container container">
                <div
                    className="filter-selected__row"
                    data-da="filters-sidebar-gamble__form, 0, 650.98"
                >
                    <div className="filter-selected__title title-filter-selected">
                        <div className="title-filter-selected__text">
                            Filters selected:
                        </div>
                        <div className="title-filter-selected__nubmer">{list.length}</div>
                        <div className="title-filter-selected__arrow">
                            <svg>
                                <use xlinkHref="#arrow"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="filter-selected__body">
                        <div className="filter-selected__top top-filter-selected">
                            <div className="top-filter-selected__back">
                                <span>
                                    <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </span>
                                Back
                            </div>
                        </div>
                        <div className="filter-selected__btns-block">
                            <div className="filter-selected__btns">
                                <div
                                    className="filter-selected__btns-column filter-selected__btns-column_clear"
                                    data-da="filter-selected__bottom, 0, 650.98"
                                >
                                    <button
                                        onClick={clearAll}
                                        className="filter-selected__btn filter-selected__btn_clear"
                                    >
                                        <span className="bottom-form-filters__btn-icon">
                                            <img
                                                src="img/icons/clear-all.svg"
                                                alt="clear-all"
                                            />
                                        </span>
                                        Clear All
                                    </button>
                                </div>
                                {list.map((item) => (
                                    <div className="filter-selected__btns-column">
                                        <div
                                            className="filter-selected__btn"
                                        >
                                            {item.value}
                                            <span
                                                onClick={() =>
                                                    clearOne(item.field)
                                                }
                                            >
                                                <svg>
                                                    <use xlinkHref="#delete"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Casinos Rank: 1-5
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Languages: 5
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                By Year: 2001-2010
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                By Licenses: 2
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Providers: 1
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Game Types: 3
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Games: 2
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Language (Website): 15
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Games: 2
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                By Licenses: 2
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Languages: 5
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Providers: 1
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Game Types: 3
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Providers: 1
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Games: 2
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Languages: 5
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Very Big Filter Option & Long Name: 5
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Providers: 1
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                By Licenses: 2
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                By Year: 2001-2010
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Casinos Rank: 1-5
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="filter-selected__btns-column">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn">
                                Games: 2
                                <span>
                                    <svg>
                                        <use xlinkHref="#delete"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div
                            className="filter-selected__btns-column filter-selected__btns-column_more">
                            <a href="" aria-label="Put your description here."
                                className="filter-selected__btn filter-selected__btn_more">
                                More...
                            </a>
                        </div> */}
                            </div>
                        </div>
                        <div className="filter-selected__bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
