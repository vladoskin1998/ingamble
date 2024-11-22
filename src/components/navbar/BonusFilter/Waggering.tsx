import { useEffect, useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { BonusFilterBodyType } from "../../../types"
import { sanitizeMaxInput } from "../../../helper"

const MAX_LIMIT = 100

export const Withdraw = ({
    initState,
    setLocalFilters,
}: {
    initState: {
        deposit_only: number | null
        winnings_only: number | null
        bonus_plus_deposit: number | null
        bonus_only: number | null
    }
    setLocalFilters: React.Dispatch<React.SetStateAction<BonusFilterBodyType>>
}) => {
    const [depositOnly, setDepositOnly] = useState(0)
    const [winningsOnly, setWinningsOnly] = useState(0)
    const [bonusPlusDeposit, setBonusPlusDeposit] = useState(0)
    const [bonusOnly, setBonusOnly] = useState(0)

    useEffect(() => {
        setDepositOnly(initState?.deposit_only || 0)
        setWinningsOnly(initState?.winnings_only || 0)
        setBonusPlusDeposit(initState?.bonus_plus_deposit || 0)
        setBonusOnly(initState?.bonus_only || 0)
    }, [initState])

    const handleLimitChange = (
        value: number,
        limitType:
            | "deposit_only"
            | "winnings_only"
            | "bonus_plus_deposit"
            | "bonus_only",
        setLimit: React.Dispatch<React.SetStateAction<number>>
    ) => {
        const newValue = Math.min(value, MAX_LIMIT)
        setLimit(newValue)

        setLocalFilters((prevFilters) => ({
            ...prevFilters,

            [limitType]: newValue,
        }))
    }

    const renderLimit = (
        label: string,
        value: number,
        onChange: (value: number) => void
    ) => (
        <div className="form-filter__range range-form-filter range-form-filter_only">
            <div className="range-form-filter__label">{label}</div>
            <div className="range-form-filter__top">
                <div className="range-form-filter__field field">
                    <input
                        className="field__input field__input_only"
                        type="number"
                        value={value}
                        onChange={(e) =>
                            onChange(
                                sanitizeMaxInput(e.target.value, MAX_LIMIT)
                            )
                        }
                    />
                    <span className="field__icon">X</span>
                </div>
            </div>
            <div className="range-form-filter__input input-range input-style-range">
                <Slider
                    className="input-style-range"
                    min={0}
                    max={MAX_LIMIT}
                    value={value}
                    onChange={(v) => onChange(Number(v))}
                />
            </div>
            <div className="range-form-filter__min-max">
                <span className="range-form-filter__min">X 1</span>
                <span className="range-form-filter__max">X 100</span>
            </div>
        </div>
    )

    return (
        <div className="form-filter__body input-style-range">
            {renderLimit("Bonus Only", bonusOnly, (value) =>
                handleLimitChange(value, "bonus_only", setBonusOnly)
            )}
            {renderLimit("Bonus + Deposit", bonusPlusDeposit, (value) =>
                handleLimitChange(
                    value,
                    "bonus_plus_deposit",
                    setBonusPlusDeposit
                )
            )}
            {renderLimit("Deposit Only", depositOnly, (value) =>
                handleLimitChange(value, "deposit_only", setDepositOnly)
            )}
            {renderLimit("Winnings Only", winningsOnly, (value) =>
                handleLimitChange(value, "winnings_only", setWinningsOnly)
            )}
        </div>
    )
}
