export const euroToDolar = (s:string) => { 

    if(s === "EUR" || s === "Euro" || !s ){
        return '$'
    }
    return s
}

export const COLORS_TAGS = [
    "tags-casino-card__item_blue",
    "tags-casino-card__item_green",
    "tags-casino-card__item_purple",
    "tags-casino-card__item_grass",
]