
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
  
export const filterEmptyValues = <T>(body: T): Partial<T> => {
    const isEmptyObject = (value: unknown): boolean => {
        if (typeof value !== "object" || value === null) return false;

        const obj = value as Record<string, unknown>;
        return Object.values(obj).every(
            (val) =>
                val === null ||
                val === undefined ||
                (Array.isArray(val) && val.length === 0) ||
                (typeof val === "object" && val !== null && isEmptyObject(val))
        );
    };

    return Object.fromEntries(
        Object.entries(body as Record<string, unknown>).filter(([_, value]) => {
            if (value === null || value === undefined) return false;
            if (Array.isArray(value) && value.length === 0) return false;
            if (typeof value === "object" && value !== null && isEmptyObject(value)) return false;
            return true;
        })
    ) as Partial<T>;
};

export function shuffleArray<T>(array: T[] | undefined): T[] {
    if(!array){
        return []
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export const sanitizeMaxInput = (value: string, max: number): number => {
    // Удаляем начальные нули, если они есть
    let sanitized = value.replace(/^0+(?=\d)/, "");

    // Если значение пустое или равно "0", заменяем его на "1"
    if ( sanitized === "0") {
         sanitized = "1";
    }


    if (max < 10) {
        sanitized = sanitized[sanitized.length - 1];
    }
    return Math.min(Number(sanitized), max);
};


export const sanitizeLink = (s:string | undefined) => {
    if(!s){
        return ''
    }

    return s.toLocaleLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

}

export const cloacingLink = (s: string | undefined): string => {
    if (!s) {
      return '';
    }
  
    const parsedUrl = new URL(s);
  
    const parts = parsedUrl.hostname.split('.');
    const domen = parts[0] === 'www' ? parts[1] : parts[0];

    return `https://cryptogamblers.pro${domen && '/' + sanitizeLink(domen)}/go`;
  };

