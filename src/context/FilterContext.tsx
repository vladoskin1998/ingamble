import React, { createContext, useContext, useState, ReactNode } from "react"
import { BonusFilterBodyType, CasinoFilterBodyType, GetFilterDataTypeResponse } from "../types"
import { useNavigate } from "react-router-dom"
import $api from "../http"
import { useQuery } from "react-query"

const getDatasFilter = async () => {
    const response = await $api.get("get-datas-filter/")
    return response.data
}

export const initialCasinoFilters: CasinoFilterBodyType = {
    payout_speed: [],
    casino_rank: null,
    casino_likes: null,
    sportsbook: undefined,
    tournaments: undefined,
    vpn_usage: undefined,
    bonus_hunt_with_active_bonus: undefined,
    social_bonus: undefined,
    established: null,
    casino_owner: [],
    withdrawal_limits: null,
    min_wager: null,
    min_deposit: null,
    selected_countries: [],
    accepted_currencies: [],
    payment_methods: [],
    language_live_chat: [],
    language_website: [],
    game_providers: [],
    game_types: [],
    licenses: [],
    games: [],
    responsible_gambling: [],
    live_chat_competence: [],

}
export const initialBonusFilters: BonusFilterBodyType = {
    bonus_rank: null,
    bonus_likes: null,
    bonus_min_dep: null,
    bonus_max_bet: null,
    free_spin_amount: null,
    bonus_value: null,
    bonus_amount: null,
    bonus_max_win: null,
    bonus_type: [],
    daily_availability: [],
    wagering_difficulty: [],
    selected_countries: [],
    selected_games: [],
    selected_providers: [],
    sticky: undefined,
    unlimited_bonus_max_bet: undefined,
    unlimited_bonus_amount: undefined,
    unlimited_bonus_max_win:  undefined,
}

// export const initialLoyaltiesFilters:{
//     "loyalty_rank": { "min": 5, "max": 10 },
//     "loyalty_level_count": { "min": 3, "max": 4},
//     "vip_manager": true,
//     "level_up_bonus": false,
//     "withdrawals": true,
//     "special_prizes": true,
//     "gifts": true,
//     "bonuses": true
// }

export enum RouteToNextFilter {
    CASINOS = "casinos",
    BONUS = "bonus",
    LOYALTIES = "loyalties",
    DEFAULT = "home",
}

type FilterContextType = {
    data: GetFilterDataTypeResponse | undefined,

    casinoFilters: CasinoFilterBodyType
    setCasinoFilters: React.Dispatch<React.SetStateAction<CasinoFilterBodyType>>

    bonusFilters: BonusFilterBodyType
    setBonusFilters: React.Dispatch<React.SetStateAction<BonusFilterBodyType>>

    currentRouteFilter: RouteToNextFilter
    handlerCurrentRouteFilter: (v: RouteToNextFilter) => void

    handlerClearAllFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const navigation = useNavigate()
    const [currentRouteFilter, setCurrentRouteFilter] =
        useState<RouteToNextFilter>(RouteToNextFilter.DEFAULT)

    const handlerCurrentRouteFilter = (v: RouteToNextFilter) => {
        if (currentRouteFilter !== v) {
            setCurrentRouteFilter(v)
        }
    }

    const [casinoFilters, setCasinoFilters] =
        useState<CasinoFilterBodyType>(initialCasinoFilters)

    const [bonusFilters, setBonusFilters] =
        useState<BonusFilterBodyType>(initialBonusFilters)

    const handlerClearAllFilters = () => {
        handlerCurrentRouteFilter(RouteToNextFilter.DEFAULT)
        setCasinoFilters(initialCasinoFilters)
        setBonusFilters(initialBonusFilters)
        navigation("/")
    }


    const { data } = useQuery<GetFilterDataTypeResponse>(
        "get-datas-filter",
        getDatasFilter,
        {
            staleTime: Infinity,
        }
    )

    

    return (
        <FilterContext.Provider
            value={{
                data,
                casinoFilters,
                setCasinoFilters,
                bonusFilters,
                setBonusFilters,
                currentRouteFilter,
                handlerCurrentRouteFilter,
                handlerClearAllFilters,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = (): FilterContextType => {
    const context = useContext(FilterContext)
    if (!context) {
        throw new Error("useFilterContext must be used within a FilterProvider")
    }
    return context
}
