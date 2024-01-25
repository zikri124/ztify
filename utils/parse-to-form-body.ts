const parseToFormBody = (body: BodyReq) => {
    let formBody = []
    for (let property in body) {
        let encodedKey = encodeURIComponent(property)
        let encodedValue = encodeURIComponent(body[property])
        formBody.push(`${encodedKey}=${encodedValue}`)
    }
    const formBodyString = formBody.join("&")
    
    return formBodyString
}


export default parseToFormBody
