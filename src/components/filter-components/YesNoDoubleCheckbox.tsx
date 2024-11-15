import { BonusFilterBodyType, CasinoFilterBodyType } from "../../types"

export const YesNoDoubleCheckbox = <
    T extends CasinoFilterBodyType | BonusFilterBodyType
>({
    initState,
    field,
    setLocalCasinoFilters,
}: {
    initState: boolean | undefined
    field: string
    setLocalCasinoFilters: React.Dispatch<React.SetStateAction<T>>
}) => {
    const handleYesNoChange = (isAllowed: boolean) => {
        setLocalCasinoFilters((prevFilters) => ({
            ...prevFilters,
            [field]: isAllowed,
        }))
    }

    return (
        <div className="form-filter__body">
            <div className="form-filter__radio radio-form-filter">
                <div className="radio-form-filter__items">
                    <div
                        className="radio-form-filter__item"
                        onClick={() => handleYesNoChange(true)}
                    >
                        <input
                            type="checkbox"
                            className="radio-form-filter__input form-filter__input"
                            checked={initState === true}
                        />
                        <label className="radio-form-filter__label">
                            <span>Yes</span>
                        </label>
                    </div>
                    <div
                        className="radio-form-filter__item"
                        onClick={() => handleYesNoChange(false)}
                    >
                        <input
                            type="checkbox"
                            className="radio-form-filter__input form-filter__input"
                            checked={initState === false}
                        />
                        <label className="radio-form-filter__label">
                            <span>No</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
