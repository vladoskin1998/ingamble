import { CasinoFilterBodyType } from "../../../types"

export const VPNAllowed = ({
    initState,
    setLocalCasinoFilters,
}: {
    initState:boolean | undefined,
    setLocalCasinoFilters: React.Dispatch<
        React.SetStateAction<CasinoFilterBodyType>
    >
}) => {

    const handleVpnChange = (b: boolean) => {
        const isAllowed = b

        setLocalCasinoFilters((prevFilters) => ({
            ...prevFilters,
            vpn_usage: isAllowed,
        }))
    }

    return (
        <div className="form-filter__body">
            <div className="form-filter__radio radio-form-filter">
                <div className="radio-form-filter__items">
                    <div
                        className="radio-form-filter__item"
                        onClick={() => handleVpnChange(true)}
                    >
                        <input
                            type="checkbox"
                            className="radio-form-filter__input form-filter__input"
                            checked={initState === true}
                        />
                        <label className="radio-form-filter__label">
                            <span>Allowed</span>
                        </label>
                    </div>
                    <div
                        className="radio-form-filter__item"
                        onClick={() => handleVpnChange(false)}
                    >
                        <input
                            type="checkbox"
                            className="radio-form-filter__input form-filter__input"
                            checked={initState === false}
                        />
                        <label className="radio-form-filter__label">
                            <span>Not Allowed</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
