import { useEffect, useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { CasinoFilterBodyType } from "../../../types"
import { sanitizeMaxInput } from "../../../helper"

export const MinimumDeposit = ({

    initState,
    label,
    field,
    max,
    setLocalCasinoFilters,
    keyToValue="$", 
}: {
    initState: number | null,
    label: string
    field:string
    max: number
    keyToValue?:string
    setLocalCasinoFilters: React.Dispatch<
        React.SetStateAction<CasinoFilterBodyType>
    >
    
}) => {
    const [deposit, setDeposit] = useState(max)

    const handlerChangeValue = (v: number) => {
        const clampedValue = v
        setDeposit(clampedValue);
        setLocalCasinoFilters((prevFilters) => ({
            ...prevFilters,
            [field]: clampedValue,
        }));
    };
    
    useEffect(() => {
        if(initState !== null){
            setDeposit(initState )
        }
        else{
            setDeposit(max )
        }
    }, [initState, max])


    return (
        <div className="form-filter__body">
            <div className="form-filter__range range-form-filter range-form-filter_only">
                <div className="range-form-filter__label">{label}</div>

                <div className="range-form-filter__top">
                    <div className="range-form-filter__field field">
                        <input
                            className="field__input field__input_only"
                            value={deposit}
                            onChange={(e) => handlerChangeValue(sanitizeMaxInput(e.target.value, max))}
                        />
                        <span className="field__icon">{keyToValue}</span>
                    </div>
                </div>

                <Slider
                    className="input-style-range"
                    min={1}
                    max={max}
                    value={deposit}
                    onChange={(v:any) => handlerChangeValue(v)}
                />

                <div className="range-form-filter__min-max">
                    <span className="range-form-filter__min">
                        {keyToValue} {(1).toLocaleString("en-US")}
                    </span>
                    <span className="range-form-filter__max">
                        {keyToValue} {(max).toLocaleString("en-US")}
                    </span>
                </div>
            </div>
        </div>
    )
}
