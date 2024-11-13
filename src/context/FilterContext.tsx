import React, { createContext, useContext, useState, ReactNode } from "react"
import { CasinoFilterBodyType } from "../types"
import { useNavigate } from "react-router-dom"

export const initialCasinoFilters: CasinoFilterBodyType = {
    payout_speed: [],
    casino_rank: null,
    casino_likes: null,
    sportsbook: null,
    tournaments: null,
    vpn_usage: null,
    bonus_hunt_with_active_bonus: null,
    social_bonus: null,

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
    live_chat_competence: [],
}

export enum RouteToNextFilter {
    CASINOS = "casinos",
    BONUS = "bonus",
    LOYALTIES = "loyalties",
    DEFAULT = "home",
}

type FilterContextType = {
    casinoFilters: CasinoFilterBodyType
    setCasinoFilters: React.Dispatch<React.SetStateAction<CasinoFilterBodyType>>

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


    const handlerClearAllFilters = () => {
        handlerCurrentRouteFilter(RouteToNextFilter.DEFAULT)
        setCasinoFilters(initialCasinoFilters)
        navigation('/')
    }
        
    return (
        <FilterContext.Provider
            value={{
                casinoFilters,
                setCasinoFilters,
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
