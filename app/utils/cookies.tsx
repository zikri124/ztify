'use server'
import { cookies } from 'next/headers'

export const setCookie = async (name: string, value: string, expires: number) => {
    cookies().set({
        name: name,
        value: value,
        httpOnly: true,
        path: '/',
        expires: expires
    })
}

export const getCookie = (name: string) => {
    const cookie = cookies().get(name)

    if (cookie === undefined) {
        return null
    } else {
        return cookie
    }
} 
