export interface GetDataBonusResponse {
    slug?: string;
    casino_name: string;
    casino_logo: string;
    casino_rank: string;
    casino_affiliate_link: string;
    name: string;
    likes: number;
    bonus_rank: string;
    bonus_image: string | null;
    bonus_value?: number;
    category?: {name:string}[];
    bonus_type: string;
    bonus_subtype?: { name: string }[];
    labels: { name: string }[];
    bonus_amount: {
        value: number;
        symbol: {
            symbol: string;
            name: string;
        };
    }[];
    link?: string;
    restriction_rtp_game: number;
    max_bet_automatic?: boolean;
    game_providers: {
        name: string;
        image: string | null;
    }[];
    sticky: boolean;
    turnover_bonus?: boolean;
    buy_feature?: boolean;
    promotion_period: {
        start_date: string; // YYYY-MM-DD
        end_date: string;   // YYYY-MM-DD
    };
    bonus_expiration: {
        days: number;
    };
    wagering_bonus_plus_deposit:{
        bonus_plus_deposit:number,
        bonus_only: null | number
    },
    bonus_only?: null;
    bonus_plus_freespins_value?: number;
    bonus_plus_deposit?: number;
    calculation_bonus_deposit?: number;
    calculation_bonus_only?: null;
    special_promo_category?: boolean;
    special_side_bar?: boolean;
    bonus_min_dep: {
        min_value: number;
        symbol: {
            symbol: string;
            name: string;
        };
    }[];
    day_of_week: { day: string }[];
    special_note?: {
        description: string;
    };
    max_bet: {
        value: number;
        symbol: {
            symbol: string;
            name: string;
        };
    }[];
    restriction_country: {
        country: {
            name: string;
            code: string;
        }[];
    };
    restriction_game: {
        game: {
            name: string;
        }[];
    };
    bonus_slot: {
        game: {
            name: string;
        }[];
    };
    wagering_contribution: {
        description: string;
        value: number;
    }[];
    slots_wagering?: {
        slot: {
            name: string;
        }[];
        value: number;
    }[];
    wagering?: {
        tbwr: string;
        tbwe: string;
        wagering_difficulty: "easy" | "medium" | "hard" | "";
    };
    wager: {
        value: number;
    };
    one_spin: {
        value: number;
    };
    free_spin_amount: {
        value: number;
    };
    bonus_max_win: {
        max_value: number;
        symbol: {
            symbol: string;
            name: string;
        };
    }[];
    description: string;
}


export type GeoLocationAllowdType={
    countryCode: string,
    countryName: string,
    isAllowed: boolean,
    isLoadedGeo: boolean,
}