const upperFirstLetter = (title: string): string => {
    return title.charAt(0).toUpperCase() + title.slice(1, title.length)
}

export default upperFirstLetter