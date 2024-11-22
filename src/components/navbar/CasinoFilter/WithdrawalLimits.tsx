import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { CasinoFilterBodyType } from "../../../types";
import { sanitizeMaxInput } from "../../../helper";

const initStateWithdrawalLimits = {
    daily: 1,
    weekly: 1,
    monthly: 1,
    unlimited: false,
};

const initStateWithdrawalLimitsMax = {
    daily: 10000,
    weekly: 100000,
    monthly: 100000000,
};

export const WithdrawalLimits = ({
    initState,
    setLocalCasinoFilters,
}: {
    initState: {
        daily: number;
        weekly: number;
        monthly: number;
        unlimited: boolean;
    } | null;
    setLocalCasinoFilters: React.Dispatch<
        React.SetStateAction<CasinoFilterBodyType>
    >;
}) => {
    const [dailyLimit, setDailyLimit] = useState(1);
    const [weeklyLimit, setWeeklyLimit] = useState(1);
    const [monthlyLimit, setMonthlyLimit] = useState(1);

    useEffect(() => {
        if (initState !== null) {
            setDailyLimit(initState.daily);
            setWeeklyLimit(initState.weekly);
            setMonthlyLimit(initState.monthly);
        }
    }, [initState]);

    const handleLimitChange = (
        value: number | boolean,
        limitType: "daily" | "weekly" | "monthly" | "unlimited",
        setLimit?: React.Dispatch<React.SetStateAction<number>>
    ) => {
        if (typeof value === "number" && setLimit) {
            const maxLimit =
                initStateWithdrawalLimitsMax[
                    limitType as keyof typeof initStateWithdrawalLimitsMax
                ];
            const newValue = Math.min(value, maxLimit as number);
            setLimit(newValue);
            value = newValue;
        }

        setLocalCasinoFilters((prevFilters) => ({
            ...prevFilters,
            withdrawal_limits: !prevFilters.withdrawal_limits
                ? { ...initStateWithdrawalLimits, [limitType]: value }
                : {
                      ...prevFilters?.withdrawal_limits,
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
                        onChange={(e) =>
                            onChange(sanitizeMaxInput(e.target.value, max))
                        }
                    />
                    <span className="field__icon">$</span>
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
                <span className="range-form-filter__min">$ 1</span>
                <span className="range-form-filter__max">
                    $ {max.toLocaleString("en-US")}
                </span>
            </div>
        </div>
    );

    return (
        <div className="form-filter__body input-style-range">
            {renderLimit(
                "Daily Limits",
                dailyLimit,
                1,
                initStateWithdrawalLimitsMax.daily,
                (value) => handleLimitChange(value, "daily", setDailyLimit)
            )}
            {renderLimit(
                "Weekly Limits",
                weeklyLimit,
                1,
                initStateWithdrawalLimitsMax.weekly,
                (value) => handleLimitChange(value, "weekly", setWeeklyLimit)
            )}
            {renderLimit(
                "Monthly Limits",
                monthlyLimit,
                1,
                initStateWithdrawalLimitsMax.monthly,
                (value) => handleLimitChange(value, "monthly", setMonthlyLimit)
            )}
            <div>
                <input
                    id={`formFilterPlayersFromWithdrawalLimits`}
                    type="checkbox"
                    checked={initState?.unlimited}
                    className="radio-form-filter__input form-filter__input"
                    onChange={() =>
                        handleLimitChange(!initState?.unlimited, "unlimited")
                    }
                />
                <label
                    htmlFor={`formFilterPlayersFromWithdrawalLimits`}
                    className="radio-form-filter__label"
                >
                    <span>Unlimited</span>
                </label>
            </div>
        </div>
    );
};
