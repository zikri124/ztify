import Link from "next/link"

const generateRandomString = (length: number) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const LoginButton = () => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const REDIRECT_URI = "http://localhost:3000/callback"
    const RESPONSE_TYPE = "code"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const SCOPE = "user-read-currently-playing+user-top-read+user-read-private+user-library-read"
    const state = generateRandomString(16)

    return (
        <>
            <Link href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&state=${state}` }><div className='rounded-full border border-secondary px-4 py-2'>Login</div></Link>
        </>
    )
}

export default LoginButton 
