'use server'

import { NextResponse } from "next/server";
// import { getCookie, setCookie } from '@/app/utils/cookies';
import getSearchParams from '@/app/utils/get-search-params';
import { cookies } from "next/headers";

export async function GET(request: Request) {
    const url = request.url
    const name = getSearchParams(url, "name")

    if (name === null) {
        return NextResponse.json({ message: "missing name param in request" })
    }

    const cookie = cookies().get(name)

    if (cookie === null) {
        return NextResponse.json({ message: "the cookie not exist", data: null })
    }

    return NextResponse.json({ message: "the cookie found", data: cookie!.value })
}

export async function POST(request: Request) {
    const url = request.url
    // const name = getSearchParams(url, "name")
    // const value = getSearchParams(url, "value")
    // const expires = getSearchParams(url, "expires")
    const { name, value, expires } = await request.json()

    if (name === null || value === null || expires === null) {
        return NextResponse.json({ message: "missing param in request" })
    }

    // setCookie(name, value, Number(expires))
    // cookies().set({
    //     name: name,
    //     value: value,
    //     expires: expires
    // })
    const responseApi = NextResponse.json({ success: true })
    responseApi.cookies.set(name, value, {
        httpOnly: true,
        maxAge: expires,
        path: '/'
    })

    return responseApi
}
