export const upperFirstLetter = (title: string): string => {
    return title.charAt(0).toUpperCase() + title.slice(1, title.length)
}

export const numberToShortString = (n: number): string => {
    const amountString = ["", "K", "M", "B", "T"]
    let pos = 0
    
    while(n >= 1000 && pos < amountString.length) {
        n /= 1000
        pos++
    }

    n = Math.round(n * 10) / 10
    
    return n + amountString[pos]
}
