import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { CasinoFilterBodyType } from "../../../types";

export const WithdrawalLimits = ({
    setLocalCasinoFilters,
}: {
    setLocalCasinoFilters: React.Dispatch<React.SetStateAction<CasinoFilterBodyType>>;
}) => {
    const [dailyLimit, setDailyLimit] = useState(10000);
    const [weeklyLimit, setWeeklyLimit] = useState(100000);
    const [yearlyLimit, setYearlyLimit] = useState(100000000);

    const handleLimitChange = (
        value: number,
        limitType: "daily" | "weekly" | "yearly",
        setLimit: React.Dispatch<React.SetStateAction<number>>
    ) => {
        setLimit(value);
        setLocalCasinoFilters((prevFilters) => ({
            ...prevFilters,
            withdrawal_limits: {
                daily: prevFilters?.withdrawal_limits?.daily ?? 10000,
                weekly: prevFilters?.withdrawal_limits?.weekly ?? 100000,
                monthly: prevFilters?.withdrawal_limits?.monthly ?? 100000000,
                [limitType]: value,
            },
        }));
    };

    const renderLimit = (
        label: string,
        value: number,
        min: number,
        max: number,
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
                        onChange={(e) => onChange(Number(e.target.value))}
                    />
                    <span className="field__icon">€</span>
                </div>
            </div>

            <div className="range-form-filter__input input-range input-style-range">
                <Slider
                    className="input-style-range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(v) => onChange(Number(v))}
                />
            </div>
            <div className="range-form-filter__min-max">
                <span className="range-form-filter__min">€ 1</span>
                <span className="range-form-filter__max">€ {max.toLocaleString("en-US")}</span>
            </div>
        </div>
    );

    return (
        <div className="form-filter__body input-style-range">
            {renderLimit(
                "Daily Limits",
                dailyLimit,
                1,
                10000,
                (value) => handleLimitChange(value, "daily", setDailyLimit)
            )}
            {renderLimit(
                "Weekly Limits",
                weeklyLimit,
                1,
                100000,
                (value) => handleLimitChange(value, "weekly", setWeeklyLimit)
            )}
            {renderLimit(
                "Yearly Limits",
                yearlyLimit,
                1,
                100000000,
                (value) => handleLimitChange(value, "yearly", setYearlyLimit)
            )}
        </div>
    );
};
