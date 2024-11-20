export const euroToDolar = (s?:string) => { 

    if(s === "EUR" || s === "Euro" || !s  ){
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

export const NumberAssociaty = (n:number | string) => {
    if(typeof n === "string") return n
    const s = String(n)
    if(n >= 1000000){
        return s.replace(/000000$/ig, "M")
    }
    else if(n >= 1000){
        return s.replace(/000$/ig, "K")
    }
    else n
} 



export const getFilterContentHeight = (s: number | undefined) => {
    if (!s) return
    return s * 40 > 240 ? 240 : s * 40
}

export const sliceString = (s:string | undefined,l:number) => {
    if(!s) return ''
    return   s.length > l ? `${ s.slice(0, l)}...` : s
}
  