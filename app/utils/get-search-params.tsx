
export default function getSearchParams(url: string, name: string) {
    const query = url.split("?")[1].split("&")
    const value = query.find(elem => elem.startsWith(name))!.split("=")[1] || null

    return value
}
