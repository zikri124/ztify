'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function CheckAuth() {
    const token = cookies().get("access_token")
    
    return token?.value
}

export async function LogOut() {
    cookies().delete("access_token")
    cookies().delete("refresh_token")

    redirect('/auth')
}
