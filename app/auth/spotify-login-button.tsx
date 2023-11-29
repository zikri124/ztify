import { Button } from "@/components/ui/button";
import Link from "next/link"

const generateRandomString = (length: number) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const LoginButton = () => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID

    const RESPONSE_TYPE = "code"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const SCOPES = ['user-read-currently-playing', 'user-top-read', 'user-read-private']
    const SCOPEs_URL_PARAM = SCOPES.join("%20")
    const state = generateRandomString(16)
    const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI

    return (
        <>
            <Link href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPEs_URL_PARAM}&state=${state}`}>
                <Button>
                    Login
                </Button>
            </Link>
        </>
    )
}

export default LoginButton 
