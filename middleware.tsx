import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getRefreshAccessToken } from './utils/spotify/spotify-token'

export async function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("access_token")

    if (accessToken !== undefined) {
        return NextResponse.next()
    } else {
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
        '/((?!api|auth|callback|_next/static|_next/image|favicon.ico).*)'
    ],
}
