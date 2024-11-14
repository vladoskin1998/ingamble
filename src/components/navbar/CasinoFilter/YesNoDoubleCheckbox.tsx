import React, { useEffect, useState } from "react"
import { CasinoFilterBodyType } from "../../../types"

export const YesNoDoubleCheckbox = ({
    initState,
    field,
    setLocalCasinoFilters,
}: {
    initState: boolean | null,
    field: string
    setLocalCasinoFilters: React.Dispatch<
        React.SetStateAction<CasinoFilterBodyType>
    >
}) => {
    const [localFields, setLocalField] = useState(true)

    const handleYesNoChange = (isAllowed: boolean) => {
        setLocalField(isAllowed)
        setLocalCasinoFilters((prevFilters) => ({
            ...prevFilters,
            [field]: isAllowed,
        }))
    }

    
    useEffect(() => {
        if(initState !== null){
            setLocalField(initState)
        }
    }, [initState])

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
                            checked={localFields}
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
                            checked={!localFields}
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
