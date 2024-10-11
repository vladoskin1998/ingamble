export const euroToDolar = (s:string) => { 

    if(s === "EUR" || s === "Euro" || !s ){
        return '$'
    }
    return s
}