import { useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { CasinoFilterBodyType } from "../../../types"

export const MinimumDeposit = ({
    label,
    field,
    max,
    setLocalCasinoFilters,
}: {
    label: string
    field:string
    max: number
    setLocalCasinoFilters: React.Dispatch<
        React.SetStateAction<CasinoFilterBodyType>
    >
}) => {
    const [deposit, setDeposit] = useState(max)

    const handlerChangeValue = (v:number) => {
      setDeposit(v)
      setLocalCasinoFilters((prevFilters) => ({
        ...prevFilters,
        [field]: v,
    }))
    }

    return (
        <div className="form-filter__body">
            <div className="form-filter__range range-form-filter range-form-filter_only">
                <div className="range-form-filter__label">{label}</div>

                <div className="range-form-filter__top">
                    <div className="range-form-filter__field field">
                        <input
                            className="field__input field__input_only"
                            value={deposit}
                            onChange={(e) => handlerChangeValue(Number(e.target.value))}
                        />
                        <span className="field__icon">€</span>
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
                        € {(1).toLocaleString("en-US")}
                    </span>
                    <span className="range-form-filter__max">
                        € {(10000).toLocaleString("en-US")}
                    </span>
                </div>
            </div>
        </div>
    )
}
