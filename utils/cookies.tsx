export const setCookie = async (name: string, value: string, expires: number) => {
    const body = {
        name: name,
        value: value,
        expires: expires
    }

    const response = await fetch("/api/header-cookie", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response.json()
}
