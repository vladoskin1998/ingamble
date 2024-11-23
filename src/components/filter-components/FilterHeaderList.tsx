import { useRef, useState, useEffect } from "react"
import { BonusFilterBodyType, CasinoFilterBodyType, LoyaltiesFilterBodyType } from "../../types"
import { sliceString } from "../../helper"

interface MakeListFilterHeaderType {
    value: string
    field: string
}

type BooleanValueType = {
    true: "Yes"
    false: "No"
}
const BooleanValue: BooleanValueType = {
    true: "Yes",
    false: "No",
}


const makeListFilterHeader = (
    o: any
): MakeListFilterHeaderType[] => {
    const result: MakeListFilterHeaderType[] = []

    for (const [key, value] of Object.entries(o)) {
        if (Array.isArray(value) && value.length > 0) {
            result.push({
                value: `${key.replace(/_/g, " ")}: ${value.length}`,
                field: key,
            })
        } else if (
            value !== undefined &&
            value &&
            typeof value === "object" &&
            "min" in value &&
            "max" in value
        ) {
            result.push({
                value: `${key.replace(/_/g, " ")}: ${value.min} - ${value.max}`,
                field: key,
            })
        } else if (
            value !== undefined &&
            value !== null &&
            typeof value === "object" &&
            "daily" in value &&
            "weekly" in value &&
            "monthly" in value
        ) {
            result.push({
                value: `${key.replace(/_/g, " ")}: ${value.daily}, ${
                    value.weekly
                }, ${value.monthly}`,
                field: key,
            })
        } else if (
            value !== undefined &&
            value !== null &&
            typeof value !== "object"
        ) {
            result.push({
                value: `${key.replace(/_/g, " ")}: ${
                    typeof value === "boolean"
                        ? BooleanValue[String(value) as keyof BooleanValueType]
                        : String(value)
                }`,
                field: key,
            })
        }
    }

    return result
}


export const FilterHeaderList = ({
    initList,
    clearAll,
    clearOne,
}: {
    initList: CasinoFilterBodyType | BonusFilterBodyType | LoyaltiesFilterBodyType
    clearAll: () => void
    clearOne: (v: string) => void
}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showMoreButton, setShowMoreButton] = useState(false)
    const listRef = useRef<HTMLDivElement>(null)

    const list = makeListFilterHeader(initList)

    useEffect(() => {
        if (listRef.current) {
            console.log("listRef.current-->", listRef)

            setShowMoreButton(listRef.current.scrollHeight > 80)
        }
    }, [list])

    const handleToggleExpand = () => {
        setIsExpanded((prev) => !prev)
    }

    if (!list.length) return <></>

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
                        <div className="title-filter-selected__nubmer">
                            {list.length}
                        </div>
                        {/* <div className="title-filter-selected__arrow">
                            <svg>
                                <use xlinkHref="#arrow"></use>
                            </svg>
                        </div> */}
                    </div>
                    <div className="filter-selected__body">
                        <div className="filter-selected__btns-block">
                            <div
                                className={`filter-selected__btns ${
                                    isExpanded ? "expanded" : ""
                                }`}
                                ref={listRef}
                                style={{
                                    maxHeight: isExpanded ? "none" : "80px",
                                    overflow: "hidden",
                                }}
                            >
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
                                    <div
                                        className="filter-selected__btns-column"
                                        key={item.field}
                                    >
                                        <div className="filter-selected__btn">
                                            {
                                                sliceString(item.value, 30)
                                      
                                            }
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
                            </div>
                            {showMoreButton && !isExpanded && (
                                <div className="filter-selected__btns-column">
                                    <button
                                        onClick={handleToggleExpand}
                                        className="filter-selected__btn filter-selected__btn_more"
                                    >
                                        More...
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
