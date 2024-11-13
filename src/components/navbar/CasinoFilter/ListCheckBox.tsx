import { useState, useMemo, memo } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { FixedSizeList as List } from "react-window"
import { CasinoFilterBodyType } from "../../../types"

type NumberArrayKeys<T> = {
    [K in keyof T]: T[K] extends number[] ? K : never
}[keyof T]

const maxHeight = 260

export const ListCheckBox = memo(
    ({
        list,
        setLocalCasinoFilters,
        placeholder,
        field,
        height=260,
    }: {
        list:
            | {
                  id: number | string
                  name: string
                  image?: string | null
                  symbol?: string
                  name2?: string |  null
              }[]
            | undefined
        setLocalCasinoFilters: React.Dispatch<
            React.SetStateAction<CasinoFilterBodyType>
        >
        placeholder?: string
        field: string
        height?: number
    }) => {
        const [searchText, setSearchText] = useState("")

        const [localSelectedCountries, setLocalSelectedCountries] = useState<
            number[]
        >([])

        const checkboxItem = (id: number) => {
            setLocalCasinoFilters((prevFilters) => {
                const isSelected = (
                    prevFilters[
                        field as NumberArrayKeys<CasinoFilterBodyType>
                    ] as number[]
                ).includes(id)
                return {
                    ...prevFilters,
                    [field]: isSelected
                        ? (
                              prevFilters[
                                  field as NumberArrayKeys<CasinoFilterBodyType>
                              ] as number[]
                          ).filter((item) => item !== id)
                        : [...prevFilters?.[field as NumberArrayKeys<CasinoFilterBodyType>] , id],
                }
            })
            setLocalSelectedCountries((prevFilters) => {
                const isSelected = prevFilters.includes(id)
                if (isSelected) {
                    return prevFilters.filter((item) => item !== id)
                }
                return [...prevFilters, id]
            })
        }

        const filteredCountries = useMemo(() => {
            return list?.filter((country) =>
                country.name.toLowerCase().includes(searchText.toLowerCase())
            )
        }, [list, searchText])

        return (
            <div className="form-filter__body">
                <div className="form-filter__checkbox checkbox-form-filter">
                    {
                        placeholder &&    <div className="form-filter__search-block">
                        <span className="form-filter__search-icon">
                            <svg>
                                <use xlinkHref="#search"></use>
                            </svg>
                        </span>
                        <input
                            placeholder={placeholder}
                            type="text"
                            className="form-filter__search-input"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    }
                 
                    <div className="form-filter__radio radio-form-filter">
                        <List
                            className="radio-form-filter__items radio-form-filter__items_flags"
                            itemCount={filteredCountries?.length || 0}
                            height={height > maxHeight ? maxHeight : height}
                            width={"auto"}
                            itemSize={40}
                        >
                            {({ index, style }) => {
                                const country = filteredCountries?.[index]
                                const isChecked =
                                    localSelectedCountries?.includes(
                                        country?.id ||  0 as any
                                    )
                                return (
                                    <div
                                        className="radio-form-filter__item"
                                        style={style}
                                    >
                                        <input
                                            id={`${field}formFilterPlayersFrom${country?.name}`}
                                            type="checkbox"
                                            checked={isChecked}
                                            className="radio-form-filter__input form-filter__input"
                                            onChange={() =>
                                                checkboxItem(country?.id || 0 as any)
                                            }
                                        />
                                        <label
                                            htmlFor={`${field}formFilterPlayersFrom${country?.name}`}
                                            className="radio-form-filter__label"
                                        >
                                            {country?.image && (
                                                <span className="flag">
                                                    <LazyLoadImage
                                                        alt={country?.name}
                                                        src={country?.image}
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                            )}

                                            <span>{country?.name}</span>
                                        </label>
                                    </div>
                                )
                            }}
                        </List>
                    </div>
                </div>
            </div>
        )
    }
)
