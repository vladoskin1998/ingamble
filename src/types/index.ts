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
    category?: { name: string }[];
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
        start_date: string;
        end_date: string;
    };
    bonus_expiration: {
        days: number;
    };
    wagering_bonus_plus_deposit: {
        bonus_plus_deposit: number;
        bonus_only: null | number;
    };
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

export type GeoLocationAllowdType = {
    countryCode: string;
    countryName: string;
    isAllowed: boolean;
    isLoadedGeo: boolean;
}


export enum BlockTypeNumber {
    BlockType1 = "type_1",
    BlockType2 = "type_2",
    BlockType3 = "type_3",
    BlockType4 = "type_4",
    BlockType5 = "type_5",
    BlockType6 = "type_6",
    BlockType7 = "type_7",
    BlockType8 = "type_8",
    BlockType9 = "type_9",
    BlockType10 = "type_10",
}
export interface HomeAdditionalCasinoParams {
    [key: string]: string;
}

export interface HomeCasinoInfo {
    casino_id: number;
    casino_name: string;
    casino_rank: string;
    casino_image: string | null;
    casino_affiliate_link: string;
    additional_casino_params: string[];
}

export interface HomeBonusInfo {
    bonus_id: string;
    bonus_name: string;
    bonus_likes: number;
    bonus_image: string | null;
    labels: string[] | null;
}

export interface HomeDataCard {
    order: number;
    big_card: boolean;
    casino_info: HomeCasinoInfo;
    bonus_info: HomeBonusInfo;
}

interface EssentialKeypoint {
    image: string;
    text_1: string;
    text_2: string;
}

interface EssentialCard {
    stars: number[];
    card_logo: string | null;
    casino_id: number;
    keypoints: EssentialKeypoint[];
    card_number: string;
    casino_name: string;
    casino_rank: string;
    loyalty_rank: string;
    loyalty_likes: number;
    loyalty_count_levels: number;
    casino_affiliate_link: string;
    loyalty_level_description: string;
}

export enum DataHomeItemsBlockTypeCategory {
    bonus_category = "bonus_category",
    casino_category = "casino_category"
}

export interface DataHomeItemsBlock {
    type_category: DataHomeItemsBlockTypeCategory,
    category: { id: number, name: string }
    block_title: string;
    subtitle: string | null;
    title_image: string | null;
    type_block: BlockTypeNumber.BlockType1 | BlockTypeNumber.BlockType2 | BlockTypeNumber.BlockType6 | BlockTypeNumber.BlockType4 | BlockTypeNumber.BlockType7 | BlockTypeNumber.BlockType5 | BlockTypeNumber.BlockType3 | BlockTypeNumber.BlockType8;
    data_cards: (HomeDataCard)[];
}

export interface EssentialItemsBlock {
    block_title: string;
    subtitle: string | null;
    title_image: string | null;
    type_block: BlockTypeNumber.BlockType9;
    data_cards: (EssentialCard)[];
}

export interface HomeDataBlock {
    blocks_sequence_number: number;
    items_block: DataHomeItemsBlock | EssentialItemsBlock;
}



export type SeeAllBonusResponse = {
    type_category: string;
    category_id: number;
    category_name: string;
    bonuses: {
        count: number
        next: string
        previous: string
        results: SeeAllBonus[]
    };
};

export type SeeAllBonus = {
    bonus_id: number;
    bonus_name: string;
    bonus_image: string;
    casino_rank: string;
    bonus_likes: number;
    labels: string[];
    casino_affiliate_link: string;
};



export interface SeeAllEssentialLoyaltyKeypoint {
    image: string | null;
    text_1: string;
    text_2: string;
}

export interface SeeAllEssentialLoyaltyProgram {
    loyalty_keypoint: SeeAllEssentialLoyaltyKeypoint[];
}

export interface SeeAllEssentialLoyaltyCasino {
    casino_id: number;
    casino_name: string;
    casino_rank: string;
    casino_image?: string;
    casino_affiliate_link: string;
    loyalty_program: SeeAllEssentialLoyaltyProgram;
}

export interface SeeAllEssentialCasinoResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: SeeAllEssentialLoyaltyCasino[];
}




export interface SeeAllCasinosLoyaltyKeyPoint extends SeeAllEssentialLoyaltyKeypoint { }

export interface SeeAllCasinosLoyaltyProgram {
    loyalty_keypoint: SeeAllCasinosLoyaltyKeyPoint[];
}

export enum PAYOUTSPEED {
    Medium = "Medium",
    High = "High",
    Low = "Low"
}

export interface SeeAllCasinosCasino {
    casino_id: number;
    casino_name: string;
    casino_rank: string;
    likes: number;
    vpn_usage: boolean;
    casino_image: string;
    casino_affiliate_link: string;
    additional_casino_params: string[];
    min_dep: {
        value: number;
        symbol: {
            symbol: string;
            name: string;
        };
    }[];
    licenses: {
        name: string;
        image: string | null;
        country_code: string;
    }[];

    payout_speed: PAYOUTSPEED;
    withdrawal_limit: {
        daily: number | null;
        weekly: number | null;
        monthly: number | null;
    };
    loyalty_program: SeeAllCasinosLoyaltyProgram;
}


export interface SeeAllCasinosCategoryResponse {
    type_category: string;
    category_id: number;
    category_name: string;
    casino: {
        count: number
        next: string
        previous: string
        results: SeeAllCasinosCasino[]
    };
}



export type AllCategoriesHomeBonusCategory = {
    id: number;
    name: string;
};

export type AllCategoriesHomeCasinoCategory = {
    id: number;
    name: string;
};

export type AllCategoriesHomeDataResponse = {
    bonus_categories: AllCategoriesHomeBonusCategory[];
    casino_categories: AllCategoriesHomeCasinoCategory[];
};


export type GetFilterDataType = {
    live_chat_competence: {
        value: string,
        label: string
    }[],
    responsible_gambling: {
        value: string,
        label: string
    }[],
    licenses: {
        id: number,
        name: string,
        image: string | null
    }[],
    game_types: {
        id: number,
        name: string,
        image: string | null
    }[],
    game_providers: {
        id: number,
        name: string,
        image: string | null
    }[],
    classic_currency: { id: number, symbol: string, name: string, name2: string }[],
    countries: { id: number, name: string, name2: string | null, code: string }[],
    crypto_currencies: {id: number, symbol: string, name: string, name2: string |  null},
    games: {id: number, name: string}[],
    language: {id: number, name: string, image:string | null}[],
    payment_methods: {id: number, name: string, image: string | null}[],
    payout_speed: {id: number, name: string}[]


}