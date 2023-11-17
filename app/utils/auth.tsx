'use-server'

import { getCookie } from "./cookies"

export function CheckAuth() {
    const token = getCookie("access_token")
    
    return token
}

export function LogOut() {
    
}
