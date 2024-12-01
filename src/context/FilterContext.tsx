import React, { createContext, useContext, useState, ReactNode } from "react"
import {
    BonusFilterBodyType,
    CasinoFilterBodyType,
    GetFilterDataTypeResponse,
    LoyaltiesFilterBodyType,
} from "../types"
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
    withdrawal_limits: {
        daily: null,
        weekly: null,
        monthly: null,
        unlimited: undefined,

    },
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

    unlimited_min_wager: undefined,
    unlimited_min_deposit: undefined,
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

    bonus_plus_deposit: null,
    bonus_only: null,
    deposit_only: null,
    winnings_only: null,

    unlimited_bonus_max_bet: undefined,
    unlimited_bonus_amount: undefined,
    unlimited_bonus_max_win: undefined,
}

export const initialLoyaltiesFilters: LoyaltiesFilterBodyType = {
    loyalty_rank: null,
    loyalty_level_count: null,
    vip_manager: undefined,
    level_up_bonus: undefined,
    withdrawals: undefined,
    special_prizes: undefined,
    gifts: undefined,
    bonuses: undefined,
}

export enum RouteToNextFilter {
    CASINOS = "casinos",
    BONUS = "bonus",
    LOYALTIES = "loyalties",
    DEFAULT = "",
}

type FilterContextType = {
    data: GetFilterDataTypeResponse | undefined

    casinoFilters: CasinoFilterBodyType
    setCasinoFilters: React.Dispatch<React.SetStateAction<CasinoFilterBodyType>>

    bonusFilters: BonusFilterBodyType
    setBonusFilters: React.Dispatch<React.SetStateAction<BonusFilterBodyType>>

    loyaltiesFilters: LoyaltiesFilterBodyType
    setLoyaltiesFilters: React.Dispatch<
        React.SetStateAction<LoyaltiesFilterBodyType>
    >

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

        console.log("casinoFilters", casinoFilters);
        
    const [loyaltiesFilters, setLoyaltiesFilters] =
        useState<LoyaltiesFilterBodyType>(initialLoyaltiesFilters)

    const handlerClearAllFilters = () => {
        handlerCurrentRouteFilter(RouteToNextFilter.DEFAULT)
        setCasinoFilters(initialCasinoFilters)
        setBonusFilters(initialBonusFilters)
        setLoyaltiesFilters(initialLoyaltiesFilters)
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
                loyaltiesFilters,
                setLoyaltiesFilters,
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
