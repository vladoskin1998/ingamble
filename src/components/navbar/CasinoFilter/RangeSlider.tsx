import Slider from "rc-slider"
import { useEffect, useState } from "react"
import { CasinoFilterBodyType } from "../../../types";

export const RangeSlider = (
    {
        initState,
        field,
        minmax,
        setLocalCasinoFilters,
    }:{
        initState: { min: number; max: number; } | null,
        field:string,
        minmax: number[],
        setLocalCasinoFilters: React.Dispatch<React.SetStateAction<CasinoFilterBodyType>>;
    }
) => {



    const [localCasinoRank, setLocalCasinoRank] = useState(minmax )
    const handleRangeChange = (n: number[]) => {
        const [minValue, maxValue] = n;
        const clampedMin = Math.max(0, Math.min(minValue, minmax[1]));
        const clampedMax = Math.max(0, Math.min(maxValue, minmax[1]));
        setLocalCasinoRank([clampedMin, clampedMax]);
        setLocalCasinoFilters((s) => ({
            ...s,
            [field]: {
                min: clampedMin,
                max: clampedMax,
            },
        }));
    };


    useEffect(() => {
        if(initState)
            setLocalCasinoRank([initState.min, initState.max])
        else{
            setLocalCasinoRank(minmax)
        }
    }, [initState])
    return (
        <div className="form-filter__body">
            <div className="form-filter__range range-form-filter range-form-filter_few">
                <div className="range-form-filter__top">
                    <div className="range-form-filter__field field">
                        <input
                            type="number"
                            className="field__input field__input_min"
                            value={localCasinoRank[0]}
                            onChange={v => handleRangeChange([Number(v.target.value), localCasinoRank?.[1]])}
                        />
                    </div>
                    <div className="range-form-filter__separetor">to</div>
                    <div className="range-form-filter__field field">
                        <input
                            type="number"
                            className="field__input field__input_max"
                            value={localCasinoRank[1]}
                            onChange={v => handleRangeChange([localCasinoRank?.[0], Number(v.target.value)  ])}
                        />
                    </div>
                </div>
                <Slider
                    range
                    className="input-style-range"
                    min={minmax[0]}
                    max={minmax[1]}
                    value={localCasinoRank}
                    onChange={(v: any) =>
                        handleRangeChange(v)
                    }
                />
            </div>
        </div>
    )
}
