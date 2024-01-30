export const miliToMinSecString = (mili: number): string => {
    const min: number = Math.floor((mili / 1000) / 60)
    let sec: number = Math.round((mili / 1000) - (min * 60))
    
    return `${min}:${(sec<10) ? "0" + sec : sec}`
}

export const getCurrentTimeString = (): string => {
    const currentHours = new Date().getHours()

    if (currentHours >= 5 && currentHours < 12) {
        return "Morning"
    } else if (currentHours >= 12 && currentHours < 17) {
        return "Afternoon"
    } else {
        return "Evening"
    }
}
