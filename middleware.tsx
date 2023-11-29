import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getRefreshAccessToken } from './utils/spotify/spotify-token'

export async function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("access_token")

    if (request.nextUrl.pathname.startsWith('/logout')) {
        const response = NextResponse.redirect(new URL('/auth', request.url))
        response.cookies.delete("access_token")
        response.cookies.delete("refresh_token")

        return response
    }
    
    if (accessToken !== undefined) {
        if (request.nextUrl.pathname.startsWith('/auth')) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    } else {
        if (request.nextUrl.pathname.startsWith('/auth')) {
            return NextResponse.next()
        }

        const refreshToken = request.cookies.get("refresh_token")
        if (refreshToken !== undefined) {
            const accessToken = await getRefreshAccessToken(refreshToken)
            const response = NextResponse.next()
            response.cookies.set({
                name: 'access_token',
                value: accessToken,
                maxAge: 3600,
                httpOnly: true,
            })

            return response
        }
        return NextResponse.redirect(new URL('/auth', request.url))
    }
}

export const config = {
    matcher: [
        '/((?!api|callback|_next/static|_next/image|favicon.ico).*)'
    ],
}
