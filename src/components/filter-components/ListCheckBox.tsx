import { useState, useMemo, useEffect, memo } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { FixedSizeList as List } from "react-window"
import { BonusFilterBodyType, CasinoFilterBodyType } from "../../types"

// Типизация для ключей, которые содержат массивы чисел
// type NumberArrayKeys<T> = {
//   [K in keyof T]: T[K] extends number[] ? K : never
// }[keyof T]

const maxHeight = 260

const ListCheck = <M extends CasinoFilterBodyType | BonusFilterBodyType>({
  initState,
  list,
  setLocalFilters,
  placeholder,
  field,
  height = 240,
}: {
  initState: (number | string)[]
  list:
    | {
        id: number | string
        name: string
        image?: string | null
        flag_image?: string | null
        symbol?: string
        name2?: string | null
        allowed_casinos_count?: number | null
      }[] | undefined
  setLocalFilters: React.Dispatch<
    React.SetStateAction<M> // Обобщаем на оба типа
  >
  placeholder?: string
  field: string
  height?: number
}) => {
  const [searchText, setSearchText] = useState("")
  const [localFilterItems, setLocalFilterItems] = useState<number[]>([])

  // Функция для обработки изменений в чекбоксах
  const checkboxItem = (id: number) => {
    setLocalFilters((prevFilters) => {
      const isSelected = (prevFilters[field as keyof M] as number[]).includes(id)
      return {
        ...prevFilters,
        [field]: isSelected
          ? (prevFilters[field as keyof M] as number[]).filter((item) => item !== id)
          : [...(prevFilters[field as keyof M] as number[]), id],
      }
    })
    setLocalFilterItems((prevFilters) => {
      const isSelected = prevFilters.includes(id)
      if (isSelected) {
        return prevFilters.filter((item) => item !== id)
      }
      return [...prevFilters, id]
    })
  }

  // Фильтрация по имени
  const filteredCountries = useMemo(() => {
    return list?.filter((country) =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }, [list, searchText])

  // Инициализация состояния
  useEffect(() => {
    setLocalFilterItems(initState as any)
  }, [initState])

  return (
    <div className="form-filter__body">
      <div className="form-filter__checkbox checkbox-form-filter">
        {placeholder && (
          <div className="form-filter__search-block">
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
        )}

        <div className="form-filter__radio radio-form-filter">
          <List
            className="radio-form-filter__items radio-form-filter__items_flags"
            itemCount={filteredCountries?.length || 0}
            height={height > maxHeight ? maxHeight : height}
            width={"auto"}
            itemSize={40}
          >
            {({ index, style }) => {
              const itemFilter = filteredCountries?.[index]
              const isChecked = localFilterItems?.includes(itemFilter?.id || (0 as any))
              return (
                <div className="radio-form-filter__item" style={style}>
                  <input
                    id={`${field}formFilterPlayersFrom${itemFilter?.name}`}
                    type="checkbox"
                    checked={isChecked}
                    className="radio-form-filter__input form-filter__input"
                    onChange={() =>
                      checkboxItem(itemFilter?.id || (0 as any))
                    }
                  />
                  <label
                    htmlFor={`${field}formFilterPlayersFrom${itemFilter?.name}`}
                    className="radio-form-filter__label"
                  >
                    {(itemFilter?.image || itemFilter?.flag_image) && (
                      <span className="flag">
                        <LazyLoadImage
                          alt={itemFilter?.name}
                          src={itemFilter?.image || itemFilter?.flag_image || ""}
                          width={20}
                          height={20}
                        />
                      </span>
                    )}
                    <span>{itemFilter?.name}</span>
                  </label>
                  {itemFilter?.allowed_casinos_count && (
                    <span className="number">
                      {itemFilter?.allowed_casinos_count}
                    </span>
                  )}
                </div>
              )
            }}
          </List>
        </div>
      </div>
    </div>
  )
}


export const ListCheckBox = memo(ListCheck) as typeof ListCheck
