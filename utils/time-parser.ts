export const miliToMinSecString = (mili: number): string => {
    const min: number = Math.trunc((mili / 1000) / 60)
    let sec: number = Math.round((mili / 1000) - (min * 60))
    
    return `${min}:${(sec<10) ? "0" + sec : sec}`
}
