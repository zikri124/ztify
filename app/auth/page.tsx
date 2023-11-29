import LoginButton from "./spotify-login-button"

const Auth = () => {
    return (
        <>
            <div className="flex flex-col m-auto items-center justify-center items-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="mt-1 mb-4">Use yout spotify account</p>
                <LoginButton />
            </div>
        </>
    )
}

export default Auth
